
const user = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 18443
const http = require('http')
const fs = require('fs')

function postRPC(payload) {
    payload.jsonrpc = "1.0"
    return new Promise(function (resolve, reject) {
      var post = http.request(/*`http://${host}:${port}`,*/ {
        host: host,
        port: port,
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          'Authorization': "Basic " + Buffer.from(`${user}:${password}`).toString(('base64'))
      }

      }, res => {
        res.on('data', chunk => {
          let js = JSON.parse(chunk)
          resolve(js)
        })

        res.on('error', console.log)
      });
      post.write(JSON.stringify(payload));
      post.end();
  })
}

  (async () => {
    let obj = {}
    let cat = ''
    const help = await postRPC({method: 'help', params: []})
    let promises = []
    help.result.split('\n').forEach(async line => {
      const c = line.match(/==\s([^"]+)\s==/)
      if(c) {
        cat = c[1]
        obj[cat] = {}
        return
      }

      const cmd = line.match(/([^\s]+)/)
      if(cmd) {
        const helpcmd = cmd[1]
        obj[cat][helpcmd] = {}
        const promise = postRPC({id:`${cat}.${helpcmd}`, method: 'help', params: [helpcmd]})
        promises.push(promise)
        return
      }
    })

    Promise.all(promises).then(p => {
      p.forEach(c => {
        catcmd = c.id.split('.')
        let item = obj[catcmd[0]][catcmd[1]]
        item.description = []
        item.detail = []
        const lines = c.result.split('\n')
        let mode = 'description'
        lines.forEach((line, i) => {
          if(i === 0) { item.signature = line; return }
          if(mode == 'description' && !line) return
          const args = line.match(/Arguments:/)
          if(args) { mode = 'detail' }
          const res = line.match(/Result:/)
          if(res) { mode = 'detail'; }
          const ex = line.match(/Examples:/)
          if(ex) { mode = 'detail'; }
          item[mode].push(line)
        })
        
      })
      Object.keys(obj).forEach(k => {
        console.log(`== ${k} ==`)
        Object.keys(obj[k]).forEach(c => {
          console.log(obj[k][c].signature)
        })
      })

      console.log(Object.keys(obj))
      fs.writeFileSync('./helpdata.js', Buffer.from(`module.exports = ${JSON.stringify(obj, null, 2)}`))
    })

  })()

