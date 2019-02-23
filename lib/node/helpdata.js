module.exports = {
  "Blockchain": {
    "getbestblockhash": {
      "description": [
        "Returns the hash of the best (tip) block in the longest blockchain."
      ],
      "detail": [
        "Result:",
        "\"hex\"      (string) the block hash hex encoded",
        "",
        "Examples:",
        "> bitcoin-cli getbestblockhash ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getbestblockhash\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getbestblockhash"
    },
    "getblock": {
      "description": [
        "If verbosity is 0, returns a string that is serialized, hex-encoded data for block 'hash'.",
        "If verbosity is 1, returns an Object with information about block <hash>.",
        "If verbosity is 2, returns an Object with information about block <hash> and information about each transaction. "
      ],
      "detail": [
        "Arguments:",
        "1. \"blockhash\"          (string, required) The block hash",
        "2. verbosity              (numeric, optional, default=1) 0 for hex encoded data, 1 for a json object, and 2 for json object with transaction data",
        "",
        "Result (for verbosity = 0):",
        "\"data\"             (string) A string that is serialized, hex-encoded data for block 'hash'.",
        "",
        "Result (for verbosity = 1):",
        "{",
        "  \"hash\" : \"hash\",     (string) the block hash (same as provided)",
        "  \"confirmations\" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain",
        "  \"size\" : n,            (numeric) The block size",
        "  \"strippedsize\" : n,    (numeric) The block size excluding witness data",
        "  \"weight\" : n           (numeric) The block weight as defined in BIP 141",
        "  \"height\" : n,          (numeric) The block height or index",
        "  \"version\" : n,         (numeric) The block version",
        "  \"versionHex\" : \"00000000\", (string) The block version formatted in hexadecimal",
        "  \"merkleroot\" : \"xxxx\", (string) The merkle root",
        "  \"tx\" : [               (array of string) The transaction ids",
        "     \"transactionid\"     (string) The transaction id",
        "     ,...",
        "  ],",
        "  \"time\" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)",
        "  \"mediantime\" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)",
        "  \"nonce\" : n,           (numeric) The nonce",
        "  \"bits\" : \"1d00ffff\", (string) The bits",
        "  \"difficulty\" : x.xxx,  (numeric) The difficulty",
        "  \"chainwork\" : \"xxxx\",  (string) Expected number of hashes required to produce the chain up to this block (in hex)",
        "  \"nTx\" : n,             (numeric) The number of transactions in the block.",
        "  \"previousblockhash\" : \"hash\",  (string) The hash of the previous block",
        "  \"nextblockhash\" : \"hash\"       (string) The hash of the next block",
        "}",
        "",
        "Result (for verbosity = 2):",
        "{",
        "  ...,                     Same output as verbosity = 1.",
        "  \"tx\" : [               (array of Objects) The transactions in the format of the getrawtransaction RPC. Different from verbosity = 1 \"tx\" result.",
        "         ,...",
        "  ],",
        "  ,...                     Same output as verbosity = 1.",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getblock \"00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getblock\", \"params\": [\"00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getblock \"blockhash\" ( verbosity ) "
    },
    "getblockchaininfo": {
      "description": [
        "Returns an object containing various state info regarding blockchain processing."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"chain\": \"xxxx\",              (string) current network name as defined in BIP70 (main, test, regtest)",
        "  \"blocks\": xxxxxx,             (numeric) the current number of blocks processed in the server",
        "  \"headers\": xxxxxx,            (numeric) the current number of headers we have validated",
        "  \"bestblockhash\": \"...\",       (string) the hash of the currently best block",
        "  \"difficulty\": xxxxxx,         (numeric) the current difficulty",
        "  \"mediantime\": xxxxxx,         (numeric) median time for the current best block",
        "  \"verificationprogress\": xxxx, (numeric) estimate of verification progress [0..1]",
        "  \"initialblockdownload\": xxxx, (bool) (debug information) estimate of whether this node is in Initial Block Download mode.",
        "  \"chainwork\": \"xxxx\"           (string) total amount of work in active chain, in hexadecimal",
        "  \"size_on_disk\": xxxxxx,       (numeric) the estimated size of the block and undo files on disk",
        "  \"pruned\": xx,                 (boolean) if the blocks are subject to pruning",
        "  \"pruneheight\": xxxxxx,        (numeric) lowest-height complete block stored (only present if pruning is enabled)",
        "  \"automatic_pruning\": xx,      (boolean) whether automatic pruning is enabled (only present if pruning is enabled)",
        "  \"prune_target_size\": xxxxxx,  (numeric) the target size used by pruning (only present if automatic pruning is enabled)",
        "  \"softforks\": [                (array) status of softforks in progress",
        "     {",
        "        \"id\": \"xxxx\",           (string) name of softfork",
        "        \"version\": xx,          (numeric) block version",
        "        \"reject\": {             (object) progress toward rejecting pre-softfork blocks",
        "           \"status\": xx,        (boolean) true if threshold reached",
        "        },",
        "     }, ...",
        "  ],",
        "  \"bip9_softforks\": {           (object) status of BIP9 softforks in progress",
        "     \"xxxx\" : {                 (string) name of the softfork",
        "        \"status\": \"xxxx\",       (string) one of \"defined\", \"started\", \"locked_in\", \"active\", \"failed\"",
        "        \"bit\": xx,              (numeric) the bit (0-28) in the block version field used to signal this softfork (only for \"started\" status)",
        "        \"startTime\": xx,        (numeric) the minimum median time past of a block at which the bit gains its meaning",
        "        \"timeout\": xx,          (numeric) the median time past of a block at which the deployment is considered failed if not yet locked in",
        "        \"since\": xx,            (numeric) height of the first block to which the status applies",
        "        \"statistics\": {         (object) numeric statistics about BIP9 signalling for a softfork (only for \"started\" status)",
        "           \"period\": xx,        (numeric) the length in blocks of the BIP9 signalling period ",
        "           \"threshold\": xx,     (numeric) the number of blocks with the version bit set required to activate the feature ",
        "           \"elapsed\": xx,       (numeric) the number of blocks elapsed since the beginning of the current period ",
        "           \"count\": xx,         (numeric) the number of blocks with the version bit set in the current period ",
        "           \"possible\": xx       (boolean) returns false if there are not enough blocks left in this period to pass activation threshold ",
        "        }",
        "     }",
        "  }",
        "  \"warnings\" : \"...\",           (string) any network and blockchain warnings.",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getblockchaininfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getblockchaininfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getblockchaininfo"
    },
    "getblockcount": {
      "description": [
        "Returns the number of blocks in the longest blockchain."
      ],
      "detail": [
        "Result:",
        "n    (numeric) The current block count",
        "",
        "Examples:",
        "> bitcoin-cli getblockcount ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getblockcount\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getblockcount"
    },
    "getblockhash": {
      "description": [
        "Returns hash of block in best-block-chain at height provided."
      ],
      "detail": [
        "Arguments:",
        "1. height         (numeric, required) The height index",
        "",
        "Result:",
        "\"hash\"         (string) The block hash",
        "",
        "Examples:",
        "> bitcoin-cli getblockhash 1000",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getblockhash\", \"params\": [1000] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getblockhash height"
    },
    "getblockheader": {
      "description": [
        "If verbose is false, returns a string that is serialized, hex-encoded data for blockheader 'hash'.",
        "If verbose is true, returns an Object with information about blockheader <hash>."
      ],
      "detail": [
        "Arguments:",
        "1. \"hash\"          (string, required) The block hash",
        "2. verbose           (boolean, optional, default=true) true for a json object, false for the hex encoded data",
        "",
        "Result (for verbose = true):",
        "{",
        "  \"hash\" : \"hash\",     (string) the block hash (same as provided)",
        "  \"confirmations\" : n,   (numeric) The number of confirmations, or -1 if the block is not on the main chain",
        "  \"height\" : n,          (numeric) The block height or index",
        "  \"version\" : n,         (numeric) The block version",
        "  \"versionHex\" : \"00000000\", (string) The block version formatted in hexadecimal",
        "  \"merkleroot\" : \"xxxx\", (string) The merkle root",
        "  \"time\" : ttt,          (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)",
        "  \"mediantime\" : ttt,    (numeric) The median block time in seconds since epoch (Jan 1 1970 GMT)",
        "  \"nonce\" : n,           (numeric) The nonce",
        "  \"bits\" : \"1d00ffff\", (string) The bits",
        "  \"difficulty\" : x.xxx,  (numeric) The difficulty",
        "  \"chainwork\" : \"0000...1f3\"     (string) Expected number of hashes required to produce the current chain (in hex)",
        "  \"nTx\" : n,             (numeric) The number of transactions in the block.",
        "  \"previousblockhash\" : \"hash\",  (string) The hash of the previous block",
        "  \"nextblockhash\" : \"hash\",      (string) The hash of the next block",
        "}",
        "",
        "Result (for verbose=false):",
        "\"data\"             (string) A string that is serialized, hex-encoded data for block 'hash'.",
        "",
        "Examples:",
        "> bitcoin-cli getblockheader \"00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getblockheader\", \"params\": [\"00000000c937983704a73af28acdec37b049d214adbda81d7e2a3dd146f6ed09\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getblockheader \"hash\" ( verbose )"
    },
    "getchaintips": {
      "description": [
        "Return information about all known tips in the block tree, including the main chain as well as orphaned branches."
      ],
      "detail": [
        "Result:",
        "[",
        "  {",
        "    \"height\": xxxx,         (numeric) height of the chain tip",
        "    \"hash\": \"xxxx\",         (string) block hash of the tip",
        "    \"branchlen\": 0          (numeric) zero for main chain",
        "    \"status\": \"active\"      (string) \"active\" for the main chain",
        "  },",
        "  {",
        "    \"height\": xxxx,",
        "    \"hash\": \"xxxx\",",
        "    \"branchlen\": 1          (numeric) length of branch connecting the tip to the main chain",
        "    \"status\": \"xxxx\"        (string) status of the chain (active, valid-fork, valid-headers, headers-only, invalid)",
        "  }",
        "]",
        "Possible values for status:",
        "1.  \"invalid\"               This branch contains at least one invalid block",
        "2.  \"headers-only\"          Not all blocks for this branch are available, but the headers are valid",
        "3.  \"valid-headers\"         All blocks are available for this branch, but they were never fully validated",
        "4.  \"valid-fork\"            This branch is not part of the active chain, but is fully validated",
        "5.  \"active\"                This is the tip of the active main chain, which is certainly valid",
        "",
        "Examples:",
        "> bitcoin-cli getchaintips ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getchaintips\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getchaintips"
    },
    "getchaintxstats": {
      "description": [
        "Compute statistics about the total number and rate of transactions in the chain."
      ],
      "detail": [
        "Arguments:",
        "1. nblocks      (numeric, optional) Size of the window in number of blocks (default: one month).",
        "2. \"blockhash\"  (string, optional) The hash of the block that ends the window.",
        "",
        "Result:",
        "{",
        "  \"time\": xxxxx,                (numeric) The timestamp for the final block in the window in UNIX format.",
        "  \"txcount\": xxxxx,             (numeric) The total number of transactions in the chain up to that point.",
        "  \"window_block_count\": xxxxx,  (numeric) Size of the window in number of blocks.",
        "  \"window_tx_count\": xxxxx,     (numeric) The number of transactions in the window. Only returned if \"window_block_count\" is > 0.",
        "  \"window_interval\": xxxxx,     (numeric) The elapsed time in the window in seconds. Only returned if \"window_block_count\" is > 0.",
        "  \"txrate\": x.xx,               (numeric) The average rate of transactions per second in the window. Only returned if \"window_interval\" is > 0.",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getchaintxstats ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getchaintxstats\", \"params\": [2016] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getchaintxstats ( nblocks blockhash )"
    },
    "getdifficulty": {
      "description": [
        "Returns the proof-of-work difficulty as a multiple of the minimum difficulty."
      ],
      "detail": [
        "Result:",
        "n.nnn       (numeric) the proof-of-work difficulty as a multiple of the minimum difficulty.",
        "",
        "Examples:",
        "> bitcoin-cli getdifficulty ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getdifficulty\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getdifficulty"
    },
    "getmempoolancestors": {
      "description": [
        "If txid is in the mempool, returns all in-mempool ancestors."
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"                 (string, required) The transaction id (must be in mempool)",
        "2. verbose                  (boolean, optional, default=false) True for a json object, false for array of transaction ids",
        "",
        "Result (for verbose=false):",
        "[                       (json array of strings)",
        "  \"transactionid\"           (string) The transaction id of an in-mempool ancestor transaction",
        "  ,...",
        "]",
        "",
        "Result (for verbose=true):",
        "{                           (json object)",
        "  \"transactionid\" : {       (json object)",
        "    \"size\" : n,             (numeric) virtual transaction size as defined in BIP 141. This is different from actual serialized size for witness transactions as witness data is discounted.",
        "    \"fee\" : n,              (numeric) transaction fee in BTC",
        "    \"modifiedfee\" : n,      (numeric) transaction fee with fee deltas used for mining priority",
        "    \"time\" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT",
        "    \"height\" : n,           (numeric) block height when transaction entered pool",
        "    \"descendantcount\" : n,  (numeric) number of in-mempool descendant transactions (including this one)",
        "    \"descendantsize\" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)",
        "    \"descendantfees\" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)",
        "    \"ancestorcount\" : n,    (numeric) number of in-mempool ancestor transactions (including this one)",
        "    \"ancestorsize\" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)",
        "    \"ancestorfees\" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)",
        "    \"wtxid\" : hash,         (string) hash of serialized transaction, including witness data",
        "    \"depends\" : [           (array) unconfirmed transactions used as inputs for this transaction",
        "        \"transactionid\",    (string) parent transaction id",
        "       ... ]",
        "  }, ...",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getmempoolancestors \"mytxid\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getmempoolancestors\", \"params\": [\"mytxid\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getmempoolancestors txid (verbose)"
    },
    "getmempooldescendants": {
      "description": [
        "If txid is in the mempool, returns all in-mempool descendants."
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"                 (string, required) The transaction id (must be in mempool)",
        "2. verbose                  (boolean, optional, default=false) True for a json object, false for array of transaction ids",
        "",
        "Result (for verbose=false):",
        "[                       (json array of strings)",
        "  \"transactionid\"           (string) The transaction id of an in-mempool descendant transaction",
        "  ,...",
        "]",
        "",
        "Result (for verbose=true):",
        "{                           (json object)",
        "  \"transactionid\" : {       (json object)",
        "    \"size\" : n,             (numeric) virtual transaction size as defined in BIP 141. This is different from actual serialized size for witness transactions as witness data is discounted.",
        "    \"fee\" : n,              (numeric) transaction fee in BTC",
        "    \"modifiedfee\" : n,      (numeric) transaction fee with fee deltas used for mining priority",
        "    \"time\" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT",
        "    \"height\" : n,           (numeric) block height when transaction entered pool",
        "    \"descendantcount\" : n,  (numeric) number of in-mempool descendant transactions (including this one)",
        "    \"descendantsize\" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)",
        "    \"descendantfees\" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)",
        "    \"ancestorcount\" : n,    (numeric) number of in-mempool ancestor transactions (including this one)",
        "    \"ancestorsize\" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)",
        "    \"ancestorfees\" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)",
        "    \"wtxid\" : hash,         (string) hash of serialized transaction, including witness data",
        "    \"depends\" : [           (array) unconfirmed transactions used as inputs for this transaction",
        "        \"transactionid\",    (string) parent transaction id",
        "       ... ]",
        "  }, ...",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getmempooldescendants \"mytxid\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getmempooldescendants\", \"params\": [\"mytxid\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getmempooldescendants txid (verbose)"
    },
    "getmempoolentry": {
      "description": [
        "Returns mempool data for given transaction"
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"                   (string, required) The transaction id (must be in mempool)",
        "",
        "Result:",
        "{                           (json object)",
        "    \"size\" : n,             (numeric) virtual transaction size as defined in BIP 141. This is different from actual serialized size for witness transactions as witness data is discounted.",
        "    \"fee\" : n,              (numeric) transaction fee in BTC",
        "    \"modifiedfee\" : n,      (numeric) transaction fee with fee deltas used for mining priority",
        "    \"time\" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT",
        "    \"height\" : n,           (numeric) block height when transaction entered pool",
        "    \"descendantcount\" : n,  (numeric) number of in-mempool descendant transactions (including this one)",
        "    \"descendantsize\" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)",
        "    \"descendantfees\" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)",
        "    \"ancestorcount\" : n,    (numeric) number of in-mempool ancestor transactions (including this one)",
        "    \"ancestorsize\" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)",
        "    \"ancestorfees\" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)",
        "    \"wtxid\" : hash,         (string) hash of serialized transaction, including witness data",
        "    \"depends\" : [           (array) unconfirmed transactions used as inputs for this transaction",
        "        \"transactionid\",    (string) parent transaction id",
        "       ... ]",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getmempoolentry \"mytxid\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getmempoolentry\", \"params\": [\"mytxid\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getmempoolentry txid"
    },
    "getmempoolinfo": {
      "description": [
        "Returns details on the active state of the TX memory pool."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"size\": xxxxx,               (numeric) Current tx count",
        "  \"bytes\": xxxxx,              (numeric) Sum of all virtual transaction sizes as defined in BIP 141. Differs from actual serialized size because witness data is discounted",
        "  \"usage\": xxxxx,              (numeric) Total memory usage for the mempool",
        "  \"maxmempool\": xxxxx,         (numeric) Maximum memory usage for the mempool",
        "  \"mempoolminfee\": xxxxx       (numeric) Minimum fee rate in BTC/kB for tx to be accepted. Is the maximum of minrelaytxfee and minimum mempool fee",
        "  \"minrelaytxfee\": xxxxx       (numeric) Current minimum relay fee for transactions",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getmempoolinfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getmempoolinfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getmempoolinfo"
    },
    "getrawmempool": {
      "description": [
        "Returns all transaction ids in memory pool as a json array of string transaction ids.",
        "Hint: use getmempoolentry to fetch a specific transaction from the mempool."
      ],
      "detail": [
        "Arguments:",
        "1. verbose (boolean, optional, default=false) True for a json object, false for array of transaction ids",
        "",
        "Result: (for verbose = false):",
        "[                     (json array of string)",
        "  \"transactionid\"     (string) The transaction id",
        "  ,...",
        "]",
        "",
        "Result: (for verbose = true):",
        "{                           (json object)",
        "  \"transactionid\" : {       (json object)",
        "    \"size\" : n,             (numeric) virtual transaction size as defined in BIP 141. This is different from actual serialized size for witness transactions as witness data is discounted.",
        "    \"fee\" : n,              (numeric) transaction fee in BTC",
        "    \"modifiedfee\" : n,      (numeric) transaction fee with fee deltas used for mining priority",
        "    \"time\" : n,             (numeric) local time transaction entered pool in seconds since 1 Jan 1970 GMT",
        "    \"height\" : n,           (numeric) block height when transaction entered pool",
        "    \"descendantcount\" : n,  (numeric) number of in-mempool descendant transactions (including this one)",
        "    \"descendantsize\" : n,   (numeric) virtual transaction size of in-mempool descendants (including this one)",
        "    \"descendantfees\" : n,   (numeric) modified fees (see above) of in-mempool descendants (including this one)",
        "    \"ancestorcount\" : n,    (numeric) number of in-mempool ancestor transactions (including this one)",
        "    \"ancestorsize\" : n,     (numeric) virtual transaction size of in-mempool ancestors (including this one)",
        "    \"ancestorfees\" : n,     (numeric) modified fees (see above) of in-mempool ancestors (including this one)",
        "    \"wtxid\" : hash,         (string) hash of serialized transaction, including witness data",
        "    \"depends\" : [           (array) unconfirmed transactions used as inputs for this transaction",
        "        \"transactionid\",    (string) parent transaction id",
        "       ... ]",
        "  }, ...",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getrawmempool true",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getrawmempool\", \"params\": [true] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getrawmempool ( verbose )"
    },
    "gettxout": {
      "description": [
        "Returns details about an unspent transaction output."
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"             (string, required) The transaction id",
        "2. \"n\"                (numeric, required) vout number",
        "3. \"include_mempool\"  (boolean, optional) Whether to include the mempool. Default: true.     Note that an unspent output that is spent in the mempool won't appear.",
        "",
        "Result:",
        "{",
        "  \"bestblock\":  \"hash\",    (string) The hash of the block at the tip of the chain",
        "  \"confirmations\" : n,       (numeric) The number of confirmations",
        "  \"value\" : x.xxx,           (numeric) The transaction value in BTC",
        "  \"scriptPubKey\" : {         (json object)",
        "     \"asm\" : \"code\",       (string) ",
        "     \"hex\" : \"hex\",        (string) ",
        "     \"reqSigs\" : n,          (numeric) Number of required signatures",
        "     \"type\" : \"pubkeyhash\", (string) The type, eg pubkeyhash",
        "     \"addresses\" : [          (array of string) array of bitcoin addresses",
        "        \"address\"     (string) bitcoin address",
        "        ,...",
        "     ]",
        "  },",
        "  \"coinbase\" : true|false   (boolean) Coinbase or not",
        "}",
        "",
        "Examples:",
        "",
        "Get unspent transactions",
        "> bitcoin-cli listunspent ",
        "",
        "View the details",
        "> bitcoin-cli gettxout \"txid\" 1",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"gettxout\", \"params\": [\"txid\", 1] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "gettxout \"txid\" n ( include_mempool )"
    },
    "gettxoutproof": {
      "description": [
        "Returns a hex-encoded proof that \"txid\" was included in a block.",
        "NOTE: By default this function only works sometimes. This is when there is an",
        "unspent output in the utxo for this transaction. To make it always work,",
        "you need to maintain a transaction index, using the -txindex command line option or",
        "specify the block in which the transaction is included manually (by blockhash)."
      ],
      "detail": [
        "Arguments:",
        "1. \"txids\"       (string) A json array of txids to filter",
        "    [",
        "      \"txid\"     (string) A transaction hash",
        "      ,...",
        "    ]",
        "2. \"blockhash\"   (string, optional) If specified, looks for txid in the block with this hash",
        "",
        "Result:",
        "\"data\"           (string) A string that is a serialized, hex-encoded data for the proof.",
        ""
      ],
      "signature": "gettxoutproof [\"txid\",...] ( blockhash )"
    },
    "gettxoutsetinfo": {
      "description": [
        "Returns statistics about the unspent transaction output set.",
        "Note this call may take some time."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"height\":n,     (numeric) The current block height (index)",
        "  \"bestblock\": \"hex\",   (string) The hash of the block at the tip of the chain",
        "  \"transactions\": n,      (numeric) The number of transactions with unspent outputs",
        "  \"txouts\": n,            (numeric) The number of unspent transaction outputs",
        "  \"bogosize\": n,          (numeric) A meaningless metric for UTXO set size",
        "  \"hash_serialized_2\": \"hash\", (string) The serialized hash",
        "  \"disk_size\": n,         (numeric) The estimated size of the chainstate on disk",
        "  \"total_amount\": x.xxx          (numeric) The total amount",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli gettxoutsetinfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"gettxoutsetinfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "gettxoutsetinfo"
    },
    "preciousblock": {
      "description": [
        "Treats a block as if it were received before others with the same work.",
        "A later preciousblock call can override the effect of an earlier one.",
        "The effects of preciousblock are not retained across restarts."
      ],
      "detail": [
        "Arguments:",
        "1. \"blockhash\"   (string, required) the hash of the block to mark as precious",
        "",
        "Result:",
        "",
        "Examples:",
        "> bitcoin-cli preciousblock \"blockhash\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"preciousblock\", \"params\": [\"blockhash\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "preciousblock \"blockhash\""
    },
    "pruneblockchain": {
      "description": [],
      "detail": [
        "Arguments:",
        "1. \"height\"       (numeric, required) The block height to prune up to. May be set to a discrete height, or a unix timestamp",
        "                  to prune blocks whose block time is at least 2 hours older than the provided timestamp.",
        "",
        "Result:",
        "n    (numeric) Height of the last block pruned.",
        "",
        "Examples:",
        "> bitcoin-cli pruneblockchain 1000",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"pruneblockchain\", \"params\": [1000] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "pruneblockchain"
    },
    "savemempool": {
      "description": [
        "Dumps the mempool to disk."
      ],
      "detail": [
        "Examples:",
        "> bitcoin-cli savemempool ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"savemempool\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "savemempool"
    },
    "verifychain": {
      "description": [
        "Verifies blockchain database."
      ],
      "detail": [
        "Arguments:",
        "1. checklevel   (numeric, optional, 0-4, default=3) How thorough the block verification is.",
        "2. nblocks      (numeric, optional, default=6, 0=all) The number of blocks to check.",
        "",
        "Result:",
        "true|false       (boolean) Verified or not",
        "",
        "Examples:",
        "> bitcoin-cli verifychain ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"verifychain\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "verifychain ( checklevel nblocks )"
    },
    "verifytxoutproof": {
      "description": [
        "Verifies that a proof points to a transaction in a block, returning the transaction it commits to",
        "and throwing an RPC error if the block is not in our best chain"
      ],
      "detail": [
        "Arguments:",
        "1. \"proof\"    (string, required) The hex-encoded proof generated by gettxoutproof",
        "",
        "Result:",
        "[\"txid\"]      (array, strings) The txid(s) which the proof commits to, or empty array if the proof can not be validated.",
        ""
      ],
      "signature": "verifytxoutproof \"proof\""
    }
  },
  "Control": {
    "getmemoryinfo": {
      "description": [
        "Returns an object containing information about memory usage."
      ],
      "detail": [
        "Arguments:",
        "1. \"mode\" determines what kind of information is returned. This argument is optional, the default mode is \"stats\".",
        "  - \"stats\" returns general statistics about memory usage in the daemon.",
        "  - \"mallocinfo\" returns an XML string describing low-level heap state (only available if compiled with glibc 2.10+).",
        "",
        "Result (mode \"stats\"):",
        "{",
        "  \"locked\": {               (json object) Information about locked memory manager",
        "    \"used\": xxxxx,          (numeric) Number of bytes used",
        "    \"free\": xxxxx,          (numeric) Number of bytes available in current arenas",
        "    \"total\": xxxxxxx,       (numeric) Total number of bytes managed",
        "    \"locked\": xxxxxx,       (numeric) Amount of bytes that succeeded locking. If this number is smaller than total, locking pages failed at some point and key data could be swapped to disk.",
        "    \"chunks_used\": xxxxx,   (numeric) Number allocated chunks",
        "    \"chunks_free\": xxxxx,   (numeric) Number unused chunks",
        "  }",
        "}",
        "",
        "Result (mode \"mallocinfo\"):",
        "\"<malloc version=\"1\">...\"",
        "",
        "Examples:",
        "> bitcoin-cli getmemoryinfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getmemoryinfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getmemoryinfo (\"mode\")"
    },
    "help": {
      "description": [
        "List all commands, or get help for a specified command."
      ],
      "detail": [
        "Arguments:",
        "1. \"command\"     (string, optional) The command to get help on",
        "",
        "Result:",
        "\"text\"     (string) The help text",
        ""
      ],
      "signature": "help ( \"command\" )"
    },
    "logging": {
      "description": [
        "Gets and sets the logging configuration.",
        "When called without an argument, returns the list of categories with status that are currently being debug logged or not.",
        "When called with arguments, adds or removes categories from debug logging and return the lists above.",
        "The arguments are evaluated in order \"include\", \"exclude\".",
        "If an item is both included and excluded, it will thus end up being excluded.",
        "The valid logging categories are: net, tor, mempool, http, bench, zmq, db, rpc, estimatefee, addrman, selectcoins, reindex, cmpctblock, rand, prune, proxy, mempoolrej, libevent, coindb, qt, leveldb",
        "In addition, the following are available as category names with special meanings:",
        "  - \"all\",  \"1\" : represent all logging categories.",
        "  - \"none\", \"0\" : even if other logging categories are specified, ignore all of them."
      ],
      "detail": [
        "Arguments:",
        "1. \"include\"        (array of strings, optional) A json array of categories to add debug logging",
        "     [",
        "       \"category\"   (string) the valid logging category",
        "       ,...",
        "     ]",
        "2. \"exclude\"        (array of strings, optional) A json array of categories to remove debug logging",
        "     [",
        "       \"category\"   (string) the valid logging category",
        "       ,...",
        "     ]",
        "",
        "Result:",
        "{                   (json object where keys are the logging categories, and values indicates its status",
        "  \"category\": 0|1,  (numeric) if being debug logged or not. 0:inactive, 1:active",
        "  ...",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli logging \"[\\\"all\\\"]\" \"[\\\"http\\\"]\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"logging\", \"params\": [[\"all\"], \"[libevent]\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "logging ( <include> <exclude> )"
    },
    "stop": {
      "description": [
        "Stop Bitcoin server."
      ],
      "detail": [],
      "signature": "stop"
    },
    "uptime": {
      "description": [
        "Returns the total uptime of the server."
      ],
      "detail": [
        "Result:",
        "ttt        (numeric) The number of seconds that the server has been running",
        "",
        "Examples:",
        "> bitcoin-cli uptime ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"uptime\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "uptime"
    }
  },
  "Generating": {
    "generate": {
      "description": [
        "Mine up to nblocks blocks immediately (before the RPC call returns) to an address in the wallet."
      ],
      "detail": [
        "Arguments:",
        "1. nblocks      (numeric, required) How many blocks are generated immediately.",
        "2. maxtries     (numeric, optional) How many iterations to try (default = 1000000).",
        "",
        "Result:",
        "[ blockhashes ]     (array) hashes of blocks generated",
        "",
        "Examples:",
        "",
        "Generate 11 blocks",
        "> bitcoin-cli generate 11",
        ""
      ],
      "signature": "generate nblocks ( maxtries )"
    },
    "generatetoaddress": {
      "description": [
        "Mine blocks immediately to a specified address (before the RPC call returns)"
      ],
      "detail": [
        "Arguments:",
        "1. nblocks      (numeric, required) How many blocks are generated immediately.",
        "2. address      (string, required) The address to send the newly generated bitcoin to.",
        "3. maxtries     (numeric, optional) How many iterations to try (default = 1000000).",
        "",
        "Result:",
        "[ blockhashes ]     (array) hashes of blocks generated",
        "",
        "Examples:",
        "",
        "Generate 11 blocks to myaddress",
        "> bitcoin-cli generatetoaddress 11 \"myaddress\"",
        ""
      ],
      "signature": "generatetoaddress nblocks address (maxtries)"
    }
  },
  "Mining": {
    "getblocktemplate": {
      "description": [
        "If the request parameters include a 'mode' key, that is used to explicitly select between the default 'template' request or a 'proposal'.",
        "It returns data needed to construct a block to work on.",
        "For full specification, see BIPs 22, 23, 9, and 145:",
        "    https://github.com/bitcoin/bips/blob/master/bip-0022.mediawiki",
        "    https://github.com/bitcoin/bips/blob/master/bip-0023.mediawiki",
        "    https://github.com/bitcoin/bips/blob/master/bip-0009.mediawiki#getblocktemplate_changes",
        "    https://github.com/bitcoin/bips/blob/master/bip-0145.mediawiki"
      ],
      "detail": [
        "Arguments:",
        "1. template_request         (json object, optional) A json object in the following spec",
        "     {",
        "       \"mode\":\"template\"    (string, optional) This must be set to \"template\", \"proposal\" (see BIP 23), or omitted",
        "       \"capabilities\":[     (array, optional) A list of strings",
        "           \"support\"          (string) client side supported feature, 'longpoll', 'coinbasetxn', 'coinbasevalue', 'proposal', 'serverlist', 'workid'",
        "           ,...",
        "       ],",
        "       \"rules\":[            (array, optional) A list of strings",
        "           \"support\"          (string) client side supported softfork deployment",
        "           ,...",
        "       ]",
        "     }",
        "",
        "",
        "Result:",
        "{",
        "  \"version\" : n,                    (numeric) The preferred block version",
        "  \"rules\" : [ \"rulename\", ... ],    (array of strings) specific block rules that are to be enforced",
        "  \"vbavailable\" : {                 (json object) set of pending, supported versionbit (BIP 9) softfork deployments",
        "      \"rulename\" : bitnumber          (numeric) identifies the bit number as indicating acceptance and readiness for the named softfork rule",
        "      ,...",
        "  },",
        "  \"vbrequired\" : n,                 (numeric) bit mask of versionbits the server requires set in submissions",
        "  \"previousblockhash\" : \"xxxx\",     (string) The hash of current highest block",
        "  \"transactions\" : [                (array) contents of non-coinbase transactions that should be included in the next block",
        "      {",
        "         \"data\" : \"xxxx\",             (string) transaction data encoded in hexadecimal (byte-for-byte)",
        "         \"txid\" : \"xxxx\",             (string) transaction id encoded in little-endian hexadecimal",
        "         \"hash\" : \"xxxx\",             (string) hash encoded in little-endian hexadecimal (including witness data)",
        "         \"depends\" : [                (array) array of numbers ",
        "             n                          (numeric) transactions before this one (by 1-based index in 'transactions' list) that must be present in the final block if this one is",
        "             ,...",
        "         ],",
        "         \"fee\": n,                    (numeric) difference in value between transaction inputs and outputs (in satoshis); for coinbase transactions, this is a negative Number of the total collected block fees (ie, not including the block subsidy); if key is not present, fee is unknown and clients MUST NOT assume there isn't one",
        "         \"sigops\" : n,                (numeric) total SigOps cost, as counted for purposes of block limits; if key is not present, sigop cost is unknown and clients MUST NOT assume it is zero",
        "         \"weight\" : n,                (numeric) total transaction weight, as counted for purposes of block limits",
        "         \"required\" : true|false      (boolean) if provided and true, this transaction must be in the final block",
        "      }",
        "      ,...",
        "  ],",
        "  \"coinbaseaux\" : {                 (json object) data that should be included in the coinbase's scriptSig content",
        "      \"flags\" : \"xx\"                  (string) key name is to be ignored, and value included in scriptSig",
        "  },",
        "  \"coinbasevalue\" : n,              (numeric) maximum allowable input to coinbase transaction, including the generation award and transaction fees (in satoshis)",
        "  \"coinbasetxn\" : { ... },          (json object) information for coinbase transaction",
        "  \"target\" : \"xxxx\",                (string) The hash target",
        "  \"mintime\" : xxx,                  (numeric) The minimum timestamp appropriate for next block time in seconds since epoch (Jan 1 1970 GMT)",
        "  \"mutable\" : [                     (array of string) list of ways the block template may be changed ",
        "     \"value\"                          (string) A way the block template may be changed, e.g. 'time', 'transactions', 'prevblock'",
        "     ,...",
        "  ],",
        "  \"noncerange\" : \"00000000ffffffff\",(string) A range of valid nonces",
        "  \"sigoplimit\" : n,                 (numeric) limit of sigops in blocks",
        "  \"sizelimit\" : n,                  (numeric) limit of block size",
        "  \"weightlimit\" : n,                (numeric) limit of block weight",
        "  \"curtime\" : ttt,                  (numeric) current timestamp in seconds since epoch (Jan 1 1970 GMT)",
        "  \"bits\" : \"xxxxxxxx\",              (string) compressed target of next block",
        "  \"height\" : n                      (numeric) The height of the next block",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getblocktemplate ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getblocktemplate\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getblocktemplate ( TemplateRequest )"
    },
    "getmininginfo": {
      "description": [
        "Returns a json object containing mining-related information."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"blocks\": nnn,             (numeric) The current block",
        "  \"currentblockweight\": nnn, (numeric) The last block weight",
        "  \"currentblocktx\": nnn,     (numeric) The last block transaction",
        "  \"difficulty\": xxx.xxxxx    (numeric) The current difficulty",
        "  \"networkhashps\": nnn,      (numeric) The network hashes per second",
        "  \"pooledtx\": n              (numeric) The size of the mempool",
        "  \"chain\": \"xxxx\",           (string) current network name as defined in BIP70 (main, test, regtest)",
        "  \"warnings\": \"...\"          (string) any network and blockchain warnings",
        "  \"errors\": \"...\"            (string) DEPRECATED. Same as warnings. Only shown when bitcoind is started with -deprecatedrpc=getmininginfo",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getmininginfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getmininginfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getmininginfo"
    },
    "getnetworkhashps": {
      "description": [
        "Returns the estimated network hashes per second based on the last n blocks.",
        "Pass in [blocks] to override # of blocks, -1 specifies since last difficulty change.",
        "Pass in [height] to estimate the network speed at the time when a certain block was found."
      ],
      "detail": [
        "Arguments:",
        "1. nblocks     (numeric, optional, default=120) The number of blocks, or -1 for blocks since last difficulty change.",
        "2. height      (numeric, optional, default=-1) To estimate at the time of the given height.",
        "",
        "Result:",
        "x             (numeric) Hashes per second estimated",
        "",
        "Examples:",
        "> bitcoin-cli getnetworkhashps ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getnetworkhashps\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getnetworkhashps ( nblocks height )"
    },
    "prioritisetransaction": {
      "description": [
        "Accepts the transaction into mined blocks at a higher (or lower) priority"
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"       (string, required) The transaction id.",
        "2. dummy          (numeric, optional) API-Compatibility for previous API. Must be zero or null.",
        "                  DEPRECATED. For forward compatibility use named arguments and omit this parameter.",
        "3. fee_delta      (numeric, required) The fee value (in satoshis) to add (or subtract, if negative).",
        "                  The fee is not actually paid, only the algorithm for selecting transactions into a block",
        "                  considers the transaction as it would have paid a higher (or lower) fee.",
        "",
        "Result:",
        "true              (boolean) Returns true",
        "",
        "Examples:",
        "> bitcoin-cli prioritisetransaction \"txid\" 0.0 10000",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"prioritisetransaction\", \"params\": [\"txid\", 0.0, 10000] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "prioritisetransaction <txid> <dummy value> <fee delta>"
    },
    "submitblock": {
      "description": [
        "Attempts to submit new block to network.",
        "See https://en.bitcoin.it/wiki/BIP_0022 for full specification.",
        "Arguments",
        "1. \"hexdata\"        (string, required) the hex-encoded block data to submit",
        "2. \"dummy\"          (optional) dummy value, for compatibility with BIP22. This value is ignored."
      ],
      "detail": [
        "Result:",
        "",
        "Examples:",
        "> bitcoin-cli submitblock \"mydata\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"submitblock\", \"params\": [\"mydata\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "submitblock \"hexdata\"  ( \"dummy\" )"
    }
  },
  "Network": {
    "addnode": {
      "description": [
        "Attempts to add or remove a node from the addnode list.",
        "Or try a connection to a node once.",
        "Nodes added using addnode (or -connect) are protected from DoS disconnection and are not required to be",
        "full nodes/support SegWit as other outbound peers are (though such peers will not be synced from)."
      ],
      "detail": [
        "Arguments:",
        "1. \"node\"     (string, required) The node (see getpeerinfo for nodes)",
        "2. \"command\"  (string, required) 'add' to add a node to the list, 'remove' to remove a node from the list, 'onetry' to try a connection to the node once",
        "",
        "Examples:",
        "> bitcoin-cli addnode \"192.168.0.6:8333\" \"onetry\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"addnode\", \"params\": [\"192.168.0.6:8333\", \"onetry\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "addnode \"node\" \"add|remove|onetry\""
    },
    "clearbanned": {
      "description": [
        "Clear all banned IPs."
      ],
      "detail": [
        "Examples:",
        "> bitcoin-cli clearbanned ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"clearbanned\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "clearbanned"
    },
    "disconnectnode": {
      "description": [
        "Immediately disconnects from the specified peer node.",
        "Strictly one out of 'address' and 'nodeid' can be provided to identify the node.",
        "To disconnect by nodeid, either set 'address' to the empty string, or call using the named 'nodeid' argument only."
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"     (string, optional) The IP address/port of the node",
        "2. \"nodeid\"      (number, optional) The node ID (see getpeerinfo for node IDs)",
        "",
        "Examples:",
        "> bitcoin-cli disconnectnode \"192.168.0.6:8333\"",
        "> bitcoin-cli disconnectnode \"\" 1",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"disconnectnode\", \"params\": [\"192.168.0.6:8333\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"disconnectnode\", \"params\": [\"\", 1] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "disconnectnode \"[address]\" [nodeid]"
    },
    "getaddednodeinfo": {
      "description": [
        "Returns information about the given added node, or all added nodes",
        "(note that onetry addnodes are not listed here)"
      ],
      "detail": [
        "Arguments:",
        "1. \"node\"   (string, optional) If provided, return information about this specific node, otherwise all nodes are returned.",
        "",
        "Result:",
        "[",
        "  {",
        "    \"addednode\" : \"192.168.0.201\",   (string) The node IP address or name (as provided to addnode)",
        "    \"connected\" : true|false,          (boolean) If connected",
        "    \"addresses\" : [                    (list of objects) Only when connected = true",
        "       {",
        "         \"address\" : \"192.168.0.201:8333\",  (string) The bitcoin server IP and port we're connected to",
        "         \"connected\" : \"outbound\"           (string) connection, inbound or outbound",
        "       }",
        "     ]",
        "  }",
        "  ,...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli getaddednodeinfo \"192.168.0.201\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getaddednodeinfo\", \"params\": [\"192.168.0.201\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getaddednodeinfo ( \"node\" )"
    },
    "getconnectioncount": {
      "description": [
        "Returns the number of connections to other nodes."
      ],
      "detail": [
        "Result:",
        "n          (numeric) The connection count",
        "",
        "Examples:",
        "> bitcoin-cli getconnectioncount ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getconnectioncount\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getconnectioncount"
    },
    "getnettotals": {
      "description": [
        "Returns information about network traffic, including bytes in, bytes out,",
        "and current time."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"totalbytesrecv\": n,   (numeric) Total bytes received",
        "  \"totalbytessent\": n,   (numeric) Total bytes sent",
        "  \"timemillis\": t,       (numeric) Current UNIX time in milliseconds",
        "  \"uploadtarget\":",
        "  {",
        "    \"timeframe\": n,                         (numeric) Length of the measuring timeframe in seconds",
        "    \"target\": n,                            (numeric) Target in bytes",
        "    \"target_reached\": true|false,           (boolean) True if target is reached",
        "    \"serve_historical_blocks\": true|false,  (boolean) True if serving historical blocks",
        "    \"bytes_left_in_cycle\": t,               (numeric) Bytes left in current time cycle",
        "    \"time_left_in_cycle\": t                 (numeric) Seconds left in current time cycle",
        "  }",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getnettotals ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getnettotals\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getnettotals"
    },
    "getnetworkinfo": {
      "description": [
        "Returns an object containing various state info regarding P2P networking."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"version\": xxxxx,                      (numeric) the server version",
        "  \"subversion\": \"/Satoshi:x.x.x/\",     (string) the server subversion string",
        "  \"protocolversion\": xxxxx,              (numeric) the protocol version",
        "  \"localservices\": \"xxxxxxxxxxxxxxxx\", (string) the services we offer to the network",
        "  \"localrelay\": true|false,              (bool) true if transaction relay is requested from peers",
        "  \"timeoffset\": xxxxx,                   (numeric) the time offset",
        "  \"connections\": xxxxx,                  (numeric) the number of connections",
        "  \"networkactive\": true|false,           (bool) whether p2p networking is enabled",
        "  \"networks\": [                          (array) information per network",
        "  {",
        "    \"name\": \"xxx\",                     (string) network (ipv4, ipv6 or onion)",
        "    \"limited\": true|false,               (boolean) is the network limited using -onlynet?",
        "    \"reachable\": true|false,             (boolean) is the network reachable?",
        "    \"proxy\": \"host:port\"               (string) the proxy that is used for this network, or empty if none",
        "    \"proxy_randomize_credentials\": true|false,  (string) Whether randomized credentials are used",
        "  }",
        "  ,...",
        "  ],",
        "  \"relayfee\": x.xxxxxxxx,                (numeric) minimum relay fee for transactions in BTC/kB",
        "  \"incrementalfee\": x.xxxxxxxx,          (numeric) minimum fee increment for mempool limiting or BIP 125 replacement in BTC/kB",
        "  \"localaddresses\": [                    (array) list of local addresses",
        "  {",
        "    \"address\": \"xxxx\",                 (string) network address",
        "    \"port\": xxx,                         (numeric) network port",
        "    \"score\": xxx                         (numeric) relative score",
        "  }",
        "  ,...",
        "  ]",
        "  \"warnings\": \"...\"                    (string) any network and blockchain warnings",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getnetworkinfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getnetworkinfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getnetworkinfo"
    },
    "getpeerinfo": {
      "description": [
        "Returns data about each connected network node as a json array of objects."
      ],
      "detail": [
        "Result:",
        "[",
        "  {",
        "    \"id\": n,                   (numeric) Peer index",
        "    \"addr\":\"host:port\",      (string) The IP address and port of the peer",
        "    \"addrbind\":\"ip:port\",    (string) Bind address of the connection to the peer",
        "    \"addrlocal\":\"ip:port\",   (string) Local address as reported by the peer",
        "    \"services\":\"xxxxxxxxxxxxxxxx\",   (string) The services offered",
        "    \"relaytxes\":true|false,    (boolean) Whether peer has asked us to relay transactions to it",
        "    \"lastsend\": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last send",
        "    \"lastrecv\": ttt,           (numeric) The time in seconds since epoch (Jan 1 1970 GMT) of the last receive",
        "    \"bytessent\": n,            (numeric) The total bytes sent",
        "    \"bytesrecv\": n,            (numeric) The total bytes received",
        "    \"conntime\": ttt,           (numeric) The connection time in seconds since epoch (Jan 1 1970 GMT)",
        "    \"timeoffset\": ttt,         (numeric) The time offset in seconds",
        "    \"pingtime\": n,             (numeric) ping time (if available)",
        "    \"minping\": n,              (numeric) minimum observed ping time (if any at all)",
        "    \"pingwait\": n,             (numeric) ping wait (if non-zero)",
        "    \"version\": v,              (numeric) The peer version, such as 70001",
        "    \"subver\": \"/Satoshi:0.8.5/\",  (string) The string version",
        "    \"inbound\": true|false,     (boolean) Inbound (true) or Outbound (false)",
        "    \"addnode\": true|false,     (boolean) Whether connection was due to addnode/-connect or if it was an automatic/inbound connection",
        "    \"startingheight\": n,       (numeric) The starting height (block) of the peer",
        "    \"banscore\": n,             (numeric) The ban score",
        "    \"synced_headers\": n,       (numeric) The last header we have in common with this peer",
        "    \"synced_blocks\": n,        (numeric) The last block we have in common with this peer",
        "    \"inflight\": [",
        "       n,                        (numeric) The heights of blocks we're currently asking from this peer",
        "       ...",
        "    ],",
        "    \"whitelisted\": true|false, (boolean) Whether the peer is whitelisted",
        "    \"bytessent_per_msg\": {",
        "       \"addr\": n,              (numeric) The total bytes sent aggregated by message type",
        "       ...",
        "    },",
        "    \"bytesrecv_per_msg\": {",
        "       \"addr\": n,              (numeric) The total bytes received aggregated by message type",
        "       ...",
        "    }",
        "  }",
        "  ,...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli getpeerinfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getpeerinfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getpeerinfo"
    },
    "listbanned": {
      "description": [
        "List all banned IPs/Subnets."
      ],
      "detail": [
        "Examples:",
        "> bitcoin-cli listbanned ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listbanned\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listbanned"
    },
    "ping": {
      "description": [
        "Requests that a ping be sent to all other nodes, to measure ping time.",
        "Results provided in getpeerinfo, pingtime and pingwait fields are decimal seconds.",
        "Ping command is handled in queue with all other commands, so it measures processing backlog, not just network ping."
      ],
      "detail": [
        "Examples:",
        "> bitcoin-cli ping ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"ping\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "ping"
    },
    "setban": {
      "description": [
        "Attempts to add or remove an IP/Subnet from the banned list."
      ],
      "detail": [
        "Arguments:",
        "1. \"subnet\"       (string, required) The IP/Subnet (see getpeerinfo for nodes IP) with an optional netmask (default is /32 = single IP)",
        "2. \"command\"      (string, required) 'add' to add an IP/Subnet to the list, 'remove' to remove an IP/Subnet from the list",
        "3. \"bantime\"      (numeric, optional) time in seconds how long (or until when if [absolute] is set) the IP is banned (0 or empty means using the default time of 24h which can also be overwritten by the -bantime startup argument)",
        "4. \"absolute\"     (boolean, optional) If set, the bantime must be an absolute timestamp in seconds since epoch (Jan 1 1970 GMT)",
        "",
        "Examples:",
        "> bitcoin-cli setban \"192.168.0.6\" \"add\" 86400",
        "> bitcoin-cli setban \"192.168.0.0/24\" \"add\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"setban\", \"params\": [\"192.168.0.6\", \"add\", 86400] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "setban \"subnet\" \"add|remove\" (bantime) (absolute)"
    },
    "setnetworkactive": {
      "description": [
        "Disable/enable all p2p network activity."
      ],
      "detail": [
        "Arguments:",
        "1. \"state\"        (boolean, required) true to enable networking, false to disable",
        ""
      ],
      "signature": "setnetworkactive true|false"
    }
  },
  "Rawtransactions": {
    "combinerawtransaction": {
      "description": [
        "Combine multiple partially signed transactions into one transaction.",
        "The combined transaction may be another partially signed transaction or a ",
        "fully signed transaction."
      ],
      "detail": [
        "Arguments:",
        "1. \"txs\"         (string) A json array of hex strings of partially signed transactions",
        "    [",
        "      \"hexstring\"     (string) A transaction hash",
        "      ,...",
        "    ]",
        "",
        "Result:",
        "\"hex\"            (string) The hex-encoded raw transaction with signature(s)",
        "",
        "Examples:",
        "> bitcoin-cli combinerawtransaction [\"myhex1\", \"myhex2\", \"myhex3\"]",
        ""
      ],
      "signature": "combinerawtransaction [\"hexstring\",...]"
    },
    "createrawtransaction": {
      "description": [
        "Create a transaction spending the given inputs and creating new outputs.",
        "Outputs can be addresses or data.",
        "Returns hex-encoded raw transaction.",
        "Note that the transaction's inputs are not signed, and",
        "it is not stored in the wallet or transmitted to the network."
      ],
      "detail": [
        "Arguments:",
        "1. \"inputs\"                (array, required) A json array of json objects",
        "     [",
        "       {",
        "         \"txid\":\"id\",    (string, required) The transaction id",
        "         \"vout\":n,         (numeric, required) The output number",
        "         \"sequence\":n      (numeric, optional) The sequence number",
        "       } ",
        "       ,...",
        "     ]",
        "2. \"outputs\"               (object, required) a json object with outputs",
        "    {",
        "      \"address\": x.xxx,    (numeric or string, required) The key is the bitcoin address, the numeric value (can be string) is the BTC amount",
        "      \"data\": \"hex\"      (string, required) The key is \"data\", the value is hex encoded data",
        "      ,...",
        "    }",
        "3. locktime                  (numeric, optional, default=0) Raw locktime. Non-0 value also locktime-activates inputs",
        "4. replaceable               (boolean, optional, default=false) Marks this transaction as BIP125 replaceable.",
        "                             Allows this transaction to be replaced by a transaction with higher fees. If provided, it is an error if explicit sequence numbers are incompatible.",
        "",
        "Result:",
        "\"transaction\"              (string) hex string of the transaction",
        "",
        "Examples:",
        "> bitcoin-cli createrawtransaction \"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\" \"{\\\"address\\\":0.01}\"",
        "> bitcoin-cli createrawtransaction \"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\" \"{\\\"data\\\":\\\"00010203\\\"}\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"createrawtransaction\", \"params\": [\"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\", \"{\\\"address\\\":0.01}\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"createrawtransaction\", \"params\": [\"[{\\\"txid\\\":\\\"myid\\\",\\\"vout\\\":0}]\", \"{\\\"data\\\":\\\"00010203\\\"}\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "createrawtransaction [{\"txid\":\"id\",\"vout\":n},...] {\"address\":amount,\"data\":\"hex\",...} ( locktime ) ( replaceable )"
    },
    "decoderawtransaction": {
      "description": [
        "Return a JSON object representing the serialized, hex-encoded transaction."
      ],
      "detail": [
        "Arguments:",
        "1. \"hexstring\"      (string, required) The transaction hex string",
        "2. iswitness          (boolean, optional) Whether the transaction hex is a serialized witness transaction",
        "                         If iswitness is not present, heuristic tests will be used in decoding",
        "",
        "Result:",
        "{",
        "  \"txid\" : \"id\",        (string) The transaction id",
        "  \"hash\" : \"id\",        (string) The transaction hash (differs from txid for witness transactions)",
        "  \"size\" : n,             (numeric) The transaction size",
        "  \"vsize\" : n,            (numeric) The virtual transaction size (differs from size for witness transactions)",
        "  \"version\" : n,          (numeric) The version",
        "  \"locktime\" : ttt,       (numeric) The lock time",
        "  \"vin\" : [               (array of json objects)",
        "     {",
        "       \"txid\": \"id\",    (string) The transaction id",
        "       \"vout\": n,         (numeric) The output number",
        "       \"scriptSig\": {     (json object) The script",
        "         \"asm\": \"asm\",  (string) asm",
        "         \"hex\": \"hex\"   (string) hex",
        "       },",
        "       \"txinwitness\": [\"hex\", ...] (array of string) hex-encoded witness data (if any)",
        "       \"sequence\": n     (numeric) The script sequence number",
        "     }",
        "     ,...",
        "  ],",
        "  \"vout\" : [             (array of json objects)",
        "     {",
        "       \"value\" : x.xxx,            (numeric) The value in BTC",
        "       \"n\" : n,                    (numeric) index",
        "       \"scriptPubKey\" : {          (json object)",
        "         \"asm\" : \"asm\",          (string) the asm",
        "         \"hex\" : \"hex\",          (string) the hex",
        "         \"reqSigs\" : n,            (numeric) The required sigs",
        "         \"type\" : \"pubkeyhash\",  (string) The type, eg 'pubkeyhash'",
        "         \"addresses\" : [           (json array of string)",
        "           \"12tvKAXCxZjSmdNbao16dKXC8tRWfcF5oc\"   (string) bitcoin address",
        "           ,...",
        "         ]",
        "       }",
        "     }",
        "     ,...",
        "  ],",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli decoderawtransaction \"hexstring\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"decoderawtransaction\", \"params\": [\"hexstring\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "decoderawtransaction \"hexstring\" ( iswitness )"
    },
    "decodescript": {
      "description": [
        "Decode a hex-encoded script."
      ],
      "detail": [
        "Arguments:",
        "1. \"hexstring\"     (string) the hex encoded script",
        "",
        "Result:",
        "{",
        "  \"asm\":\"asm\",   (string) Script public key",
        "  \"hex\":\"hex\",   (string) hex encoded public key",
        "  \"type\":\"type\", (string) The output type",
        "  \"reqSigs\": n,    (numeric) The required signatures",
        "  \"addresses\": [   (json array of string)",
        "     \"address\"     (string) bitcoin address",
        "     ,...",
        "  ],",
        "  \"p2sh\",\"address\" (string) address of P2SH script wrapping this redeem script (not returned if the script is already a P2SH).",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli decodescript \"hexstring\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"decodescript\", \"params\": [\"hexstring\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "decodescript \"hexstring\""
    },
    "fundrawtransaction": {
      "description": [
        "Add inputs to a transaction until it has enough in value to meet its out value.",
        "This will not modify existing inputs, and will add at most one change output to the outputs.",
        "No existing outputs will be modified unless \"subtractFeeFromOutputs\" is specified.",
        "Note that inputs which were signed may need to be resigned after completion since in/outputs have been added.",
        "The inputs added will not be signed, use signrawtransaction for that.",
        "Note that all existing inputs must have their previous output transaction be in the wallet.",
        "Note that all inputs selected must be of standard form and P2SH scripts must be",
        "in the wallet using importaddress or addmultisigaddress (to calculate fees).",
        "You can see whether this is the case by checking the \"solvable\" field in the listunspent output.",
        "Only pay-to-pubkey, multisig, and P2SH versions thereof are currently supported for watch-only"
      ],
      "detail": [
        "Arguments:",
        "1. \"hexstring\"           (string, required) The hex string of the raw transaction",
        "2. options                 (object, optional)",
        "   {",
        "     \"changeAddress\"          (string, optional, default pool address) The bitcoin address to receive the change",
        "     \"changePosition\"         (numeric, optional, default random) The index of the change output",
        "     \"change_type\"            (string, optional) The output type to use. Only valid if changeAddress is not specified. Options are \"legacy\", \"p2sh-segwit\", and \"bech32\". Default is set by -changetype.",
        "     \"includeWatching\"        (boolean, optional, default false) Also select inputs which are watch only",
        "     \"lockUnspents\"           (boolean, optional, default false) Lock selected unspent outputs",
        "     \"feeRate\"                (numeric, optional, default not set: makes wallet determine the fee) Set a specific fee rate in BTC/kB",
        "     \"subtractFeeFromOutputs\" (array, optional) A json array of integers.",
        "                              The fee will be equally deducted from the amount of each specified output.",
        "                              The outputs are specified by their zero-based index, before any change output is added.",
        "                              Those recipients will receive less bitcoins than you enter in their corresponding amount field.",
        "                              If no outputs are specified here, the sender pays the fee.",
        "                                  [vout_index,...]",
        "     \"replaceable\"            (boolean, optional) Marks this transaction as BIP125 replaceable.",
        "                              Allows this transaction to be replaced by a transaction with higher fees",
        "     \"conf_target\"            (numeric, optional) Confirmation target (in blocks)",
        "     \"estimate_mode\"          (string, optional, default=UNSET) The fee estimate mode, must be one of:",
        "         \"UNSET\"",
        "         \"ECONOMICAL\"",
        "         \"CONSERVATIVE\"",
        "   }",
        "                         for backward compatibility: passing in a true instead of an object will result in {\"includeWatching\":true}",
        "3. iswitness               (boolean, optional) Whether the transaction hex is a serialized witness transaction ",
        "                              If iswitness is not present, heuristic tests will be used in decoding",
        "",
        "Result:",
        "{",
        "  \"hex\":       \"value\", (string)  The resulting raw transaction (hex-encoded string)",
        "  \"fee\":       n,         (numeric) Fee in BTC the resulting transaction pays",
        "  \"changepos\": n          (numeric) The position of the added change output, or -1",
        "}",
        "",
        "Examples:",
        "",
        "Create a transaction with no inputs",
        "> bitcoin-cli createrawtransaction \"[]\" \"{\\\"myaddress\\\":0.01}\"",
        "",
        "Add sufficient unsigned inputs to meet the output value",
        "> bitcoin-cli fundrawtransaction \"rawtransactionhex\"",
        "",
        "Sign the transaction",
        "> bitcoin-cli signrawtransaction \"fundedtransactionhex\"",
        "",
        "Send the transaction",
        "> bitcoin-cli sendrawtransaction \"signedtransactionhex\"",
        ""
      ],
      "signature": "fundrawtransaction \"hexstring\" ( options iswitness )"
    },
    "getrawtransaction": {
      "description": [
        "NOTE: By default this function only works for mempool transactions. If the -txindex option is",
        "enabled, it also works for blockchain transactions. If the block which contains the transaction",
        "is known, its hash can be provided even for nodes without -txindex. Note that if a blockhash is",
        "provided, only that block will be searched and if the transaction is in the mempool or other",
        "blocks, or if this node does not have the given block available, the transaction will not be found.",
        "DEPRECATED: for now, it also works for transactions with unspent outputs.",
        "Return the raw transaction data.",
        "If verbose is 'true', returns an Object with information about 'txid'.",
        "If verbose is 'false' or omitted, returns a string that is serialized, hex-encoded data for 'txid'."
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"      (string, required) The transaction id",
        "2. verbose     (bool, optional, default=false) If false, return a string, otherwise return a json object",
        "3. \"blockhash\" (string, optional) The block in which to look for the transaction",
        "",
        "Result (if verbose is not set or set to false):",
        "\"data\"      (string) The serialized, hex-encoded data for 'txid'",
        "",
        "Result (if verbose is set to true):",
        "{",
        "  \"in_active_chain\": b, (bool) Whether specified block is in the active chain or not (only present with explicit \"blockhash\" argument)",
        "  \"hex\" : \"data\",       (string) The serialized, hex-encoded data for 'txid'",
        "  \"txid\" : \"id\",        (string) The transaction id (same as provided)",
        "  \"hash\" : \"id\",        (string) The transaction hash (differs from txid for witness transactions)",
        "  \"size\" : n,             (numeric) The serialized transaction size",
        "  \"vsize\" : n,            (numeric) The virtual transaction size (differs from size for witness transactions)",
        "  \"version\" : n,          (numeric) The version",
        "  \"locktime\" : ttt,       (numeric) The lock time",
        "  \"vin\" : [               (array of json objects)",
        "     {",
        "       \"txid\": \"id\",    (string) The transaction id",
        "       \"vout\": n,         (numeric) ",
        "       \"scriptSig\": {     (json object) The script",
        "         \"asm\": \"asm\",  (string) asm",
        "         \"hex\": \"hex\"   (string) hex",
        "       },",
        "       \"sequence\": n      (numeric) The script sequence number",
        "       \"txinwitness\": [\"hex\", ...] (array of string) hex-encoded witness data (if any)",
        "     }",
        "     ,...",
        "  ],",
        "  \"vout\" : [              (array of json objects)",
        "     {",
        "       \"value\" : x.xxx,            (numeric) The value in BTC",
        "       \"n\" : n,                    (numeric) index",
        "       \"scriptPubKey\" : {          (json object)",
        "         \"asm\" : \"asm\",          (string) the asm",
        "         \"hex\" : \"hex\",          (string) the hex",
        "         \"reqSigs\" : n,            (numeric) The required sigs",
        "         \"type\" : \"pubkeyhash\",  (string) The type, eg 'pubkeyhash'",
        "         \"addresses\" : [           (json array of string)",
        "           \"address\"        (string) bitcoin address",
        "           ,...",
        "         ]",
        "       }",
        "     }",
        "     ,...",
        "  ],",
        "  \"blockhash\" : \"hash\",   (string) the block hash",
        "  \"confirmations\" : n,      (numeric) The confirmations",
        "  \"time\" : ttt,             (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT)",
        "  \"blocktime\" : ttt         (numeric) The block time in seconds since epoch (Jan 1 1970 GMT)",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getrawtransaction \"mytxid\"",
        "> bitcoin-cli getrawtransaction \"mytxid\" true",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getrawtransaction\", \"params\": [\"mytxid\", true] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        "> bitcoin-cli getrawtransaction \"mytxid\" false \"myblockhash\"",
        "> bitcoin-cli getrawtransaction \"mytxid\" true \"myblockhash\"",
        ""
      ],
      "signature": "getrawtransaction \"txid\" ( verbose \"blockhash\" )"
    },
    "sendrawtransaction": {
      "description": [
        "Submits raw transaction (serialized, hex-encoded) to local node and network.",
        "Also see createrawtransaction and signrawtransaction calls."
      ],
      "detail": [
        "Arguments:",
        "1. \"hexstring\"    (string, required) The hex string of the raw transaction)",
        "2. allowhighfees    (boolean, optional, default=false) Allow high fees",
        "",
        "Result:",
        "\"hex\"             (string) The transaction hash in hex",
        "",
        "Examples:",
        "",
        "Create a transaction",
        "> bitcoin-cli createrawtransaction \"[{\\\"txid\\\" : \\\"mytxid\\\",\\\"vout\\\":0}]\" \"{\\\"myaddress\\\":0.01}\"",
        "Sign the transaction, and get back the hex",
        "> bitcoin-cli signrawtransaction \"myhex\"",
        "",
        "Send the transaction (signed hex)",
        "> bitcoin-cli sendrawtransaction \"signedhex\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"sendrawtransaction\", \"params\": [\"signedhex\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "sendrawtransaction \"hexstring\" ( allowhighfees )"
    },
    "signrawtransaction": {
      "description": [
        "Sign inputs for raw transaction (serialized, hex-encoded).",
        "The second optional argument (may be null) is an array of previous transaction outputs that",
        "this transaction depends on but may not yet be in the block chain.",
        "The third optional argument (may be null) is an array of base58-encoded private",
        "keys that, if given, will be the only keys used to sign the transaction."
      ],
      "detail": [
        "Arguments:",
        "1. \"hexstring\"     (string, required) The transaction hex string",
        "2. \"prevtxs\"       (string, optional) An json array of previous dependent transaction outputs",
        "     [               (json array of json objects, or 'null' if none provided)",
        "       {",
        "         \"txid\":\"id\",             (string, required) The transaction id",
        "         \"vout\":n,                  (numeric, required) The output number",
        "         \"scriptPubKey\": \"hex\",   (string, required) script key",
        "         \"redeemScript\": \"hex\",   (string, required for P2SH or P2WSH) redeem script",
        "         \"amount\": value            (numeric, required) The amount spent",
        "       }",
        "       ,...",
        "    ]",
        "3. \"privkeys\"     (string, optional) A json array of base58-encoded private keys for signing",
        "    [                  (json array of strings, or 'null' if none provided)",
        "      \"privatekey\"   (string) private key in base58-encoding",
        "      ,...",
        "    ]",
        "4. \"sighashtype\"     (string, optional, default=ALL) The signature hash type. Must be one of",
        "       \"ALL\"",
        "       \"NONE\"",
        "       \"SINGLE\"",
        "       \"ALL|ANYONECANPAY\"",
        "       \"NONE|ANYONECANPAY\"",
        "       \"SINGLE|ANYONECANPAY\"",
        "",
        "Result:",
        "{",
        "  \"hex\" : \"value\",           (string) The hex-encoded raw transaction with signature(s)",
        "  \"complete\" : true|false,   (boolean) If the transaction has a complete set of signatures",
        "  \"errors\" : [                 (json array of objects) Script verification errors (if there are any)",
        "    {",
        "      \"txid\" : \"hash\",           (string) The hash of the referenced, previous transaction",
        "      \"vout\" : n,                (numeric) The index of the output to spent and used as input",
        "      \"scriptSig\" : \"hex\",       (string) The hex-encoded signature script",
        "      \"sequence\" : n,            (numeric) Script sequence number",
        "      \"error\" : \"text\"           (string) Verification or signing error related to the input",
        "    }",
        "    ,...",
        "  ]",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli signrawtransaction \"myhex\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"signrawtransaction\", \"params\": [\"myhex\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "signrawtransaction \"hexstring\" ( [{\"txid\":\"id\",\"vout\":n,\"scriptPubKey\":\"hex\",\"redeemScript\":\"hex\"},...] [\"privatekey1\",...] sighashtype )"
    }
  },
  "Util": {
    "createmultisig": {
      "description": [
        "Creates a multi-signature address with n signature of m keys required.",
        "It returns a json object with the address and redeemScript.",
        "DEPRECATION WARNING: Using addresses with createmultisig is deprecated. Clients must",
        "transition to using addmultisigaddress to create multisig addresses with addresses known",
        "to the wallet before upgrading to v0.17. To use the deprecated functionality, start bitcoind with -deprecatedrpc=createmultisig"
      ],
      "detail": [
        "Arguments:",
        "1. nrequired                    (numeric, required) The number of required signatures out of the n keys or addresses.",
        "2. \"keys\"                       (string, required) A json array of hex-encoded public keys",
        "     [",
        "       \"key\"                    (string) The hex-encoded public key",
        "       ,...",
        "     ]",
        "",
        "Result:",
        "{",
        "  \"address\":\"multisigaddress\",  (string) The value of the new multisig address.",
        "  \"redeemScript\":\"script\"       (string) The string value of the hex-encoded redemption script.",
        "}",
        "",
        "Examples:",
        "",
        "Create a multisig address from 2 public keys",
        "> bitcoin-cli createmultisig 2 \"[\\\"03789ed0bb717d88f7d321a368d905e7430207ebbd82bd342cf11ae157a7ace5fd\\\",\\\"03dbc6764b8884a92e871274b87583e6d5c2a58819473e17e107ef3f6aa5a61626\\\"]\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"createmultisig\", \"params\": [2, \"[\\\"03789ed0bb717d88f7d321a368d905e7430207ebbd82bd342cf11ae157a7ace5fd\\\",\\\"03dbc6764b8884a92e871274b87583e6d5c2a58819473e17e107ef3f6aa5a61626\\\"]\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "createmultisig nrequired [\"key\",...]"
    },
    "estimatefee": {
      "description": [
        "DEPRECATED. Please use estimatesmartfee for more intelligent estimates.",
        "Estimates the approximate fee per kilobyte needed for a transaction to begin",
        "confirmation within nblocks blocks. Uses virtual transaction size of transaction",
        "as defined in BIP 141 (witness data is discounted)."
      ],
      "detail": [
        "Arguments:",
        "1. nblocks     (numeric, required)",
        "",
        "Result:",
        "n              (numeric) estimated fee-per-kilobyte",
        "",
        "A negative value is returned if not enough transactions and blocks",
        "have been observed to make an estimate.",
        "-1 is always returned for nblocks == 1 as it is impossible to calculate",
        "a fee that is high enough to get reliably included in the next block.",
        "",
        "Example:",
        "> bitcoin-cli estimatefee 6",
        ""
      ],
      "signature": "estimatefee nblocks"
    },
    "estimatesmartfee": {
      "description": [
        "Estimates the approximate fee per kilobyte needed for a transaction to begin",
        "confirmation within conf_target blocks if possible and return the number of blocks",
        "for which the estimate is valid. Uses virtual transaction size as defined",
        "in BIP 141 (witness data is discounted)."
      ],
      "detail": [
        "Arguments:",
        "1. conf_target     (numeric) Confirmation target in blocks (1 - 1008)",
        "2. \"estimate_mode\" (string, optional, default=CONSERVATIVE) The fee estimate mode.",
        "                   Whether to return a more conservative estimate which also satisfies",
        "                   a longer history. A conservative estimate potentially returns a",
        "                   higher feerate and is more likely to be sufficient for the desired",
        "                   target, but is not as responsive to short term drops in the",
        "                   prevailing fee market.  Must be one of:",
        "       \"UNSET\" (defaults to CONSERVATIVE)",
        "       \"ECONOMICAL\"",
        "       \"CONSERVATIVE\"",
        "",
        "Result:",
        "{",
        "  \"feerate\" : x.x,     (numeric, optional) estimate fee rate in BTC/kB",
        "  \"errors\": [ str... ] (json array of strings, optional) Errors encountered during processing",
        "  \"blocks\" : n         (numeric) block number where estimate was found",
        "}",
        "",
        "The request target will be clamped between 2 and the highest target",
        "fee estimation is able to return based on how long it has been running.",
        "An error is returned if not enough transactions and blocks",
        "have been observed to make an estimate for any number of blocks.",
        "",
        "Example:",
        "> bitcoin-cli estimatesmartfee 6",
        ""
      ],
      "signature": "estimatesmartfee conf_target (\"estimate_mode\")"
    },
    "signmessagewithprivkey": {
      "description": [
        "Sign a message with the private key of an address"
      ],
      "detail": [
        "Arguments:",
        "1. \"privkey\"         (string, required) The private key to sign the message with.",
        "2. \"message\"         (string, required) The message to create a signature of.",
        "",
        "Result:",
        "\"signature\"          (string) The signature of the message encoded in base 64",
        "",
        "Examples:",
        "",
        "Create the signature",
        "> bitcoin-cli signmessagewithprivkey \"privkey\" \"my message\"",
        "",
        "Verify the signature",
        "> bitcoin-cli verifymessage \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" \"signature\" \"my message\"",
        "",
        "As json rpc",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"signmessagewithprivkey\", \"params\": [\"privkey\", \"my message\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "signmessagewithprivkey \"privkey\" \"message\""
    },
    "validateaddress": {
      "description": [
        "Return information about the given bitcoin address."
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"     (string, required) The bitcoin address to validate",
        "",
        "Result:",
        "{",
        "  \"isvalid\" : true|false,       (boolean) If the address is valid or not. If not, this is the only property returned.",
        "  \"address\" : \"address\",        (string) The bitcoin address validated",
        "  \"scriptPubKey\" : \"hex\",       (string) The hex encoded scriptPubKey generated by the address",
        "  \"ismine\" : true|false,        (boolean) If the address is yours or not",
        "  \"iswatchonly\" : true|false,   (boolean) If the address is watchonly",
        "  \"isscript\" : true|false,      (boolean, optional) If the address is P2SH or P2WSH. Not included for unknown witness types.",
        "  \"iswitness\" : true|false,     (boolean) If the address is P2WPKH, P2WSH, or an unknown witness version",
        "  \"witness_version\" : version   (number, optional) For all witness output types, gives the version number.",
        "  \"witness_program\" : \"hex\"     (string, optional) For all witness output types, gives the script or key hash present in the address.",
        "  \"script\" : \"type\"             (string, optional) The output script type. Only if \"isscript\" is true and the redeemscript is known. Possible types: nonstandard, pubkey, pubkeyhash, scripthash, multisig, nulldata, witness_v0_keyhash, witness_v0_scripthash, witness_unknown",
        "  \"hex\" : \"hex\",                (string, optional) The redeemscript for the P2SH or P2WSH address",
        "  \"addresses\"                   (string, optional) Array of addresses associated with the known redeemscript (only if \"iswitness\" is false). This field is superseded by the \"pubkeys\" field and the address inside \"embedded\".",
        "    [",
        "      \"address\"",
        "      ,...",
        "    ]",
        "  \"pubkeys\"                     (string, optional) Array of pubkeys associated with the known redeemscript (only if \"script\" is \"multisig\")",
        "    [",
        "      \"pubkey\"",
        "      ,...",
        "    ]",
        "  \"sigsrequired\" : xxxxx        (numeric, optional) Number of signatures required to spend multisig output (only if \"script\" is \"multisig\")",
        "  \"pubkey\" : \"publickeyhex\",    (string, optional) The hex value of the raw public key, for single-key addresses (possibly embedded in P2SH or P2WSH)",
        "  \"embedded\" : {...},           (object, optional) information about the address embedded in P2SH or P2WSH, if relevant and known. It includes all validateaddress output fields for the embedded address, excluding \"isvalid\", metadata (\"timestamp\", \"hdkeypath\", \"hdmasterkeyid\") and relation to the wallet (\"ismine\", \"iswatchonly\", \"account\").",
        "  \"iscompressed\" : true|false,  (boolean) If the address is compressed",
        "  \"account\" : \"account\"         (string) DEPRECATED. The account associated with the address, \"\" is the default account",
        "  \"timestamp\" : timestamp,      (number, optional) The creation time of the key if available in seconds since epoch (Jan 1 1970 GMT)",
        "  \"hdkeypath\" : \"keypath\"       (string, optional) The HD keypath if the key is HD and available",
        "  \"hdmasterkeyid\" : \"<hash160>\" (string, optional) The Hash160 of the HD master pubkey",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli validateaddress \"1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"validateaddress\", \"params\": [\"1PSSGeFHDnKNxiEyFrD1wcEaHr9hrQDDWc\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "validateaddress \"address\""
    },
    "verifymessage": {
      "description": [
        "Verify a signed message"
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"         (string, required) The bitcoin address to use for the signature.",
        "2. \"signature\"       (string, required) The signature provided by the signer in base 64 encoding (see signmessage).",
        "3. \"message\"         (string, required) The message that was signed.",
        "",
        "Result:",
        "true|false   (boolean) If the signature is verified or not.",
        "",
        "Examples:",
        "",
        "Unlock the wallet for 30 seconds",
        "> bitcoin-cli walletpassphrase \"mypassphrase\" 30",
        "",
        "Create the signature",
        "> bitcoin-cli signmessage \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" \"my message\"",
        "",
        "Verify the signature",
        "> bitcoin-cli verifymessage \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" \"signature\" \"my message\"",
        "",
        "As json rpc",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"verifymessage\", \"params\": [\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\", \"signature\", \"my message\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "verifymessage \"address\" \"signature\" \"message\""
    }
  },
  "Wallet": {
    "abandontransaction": {
      "description": [
        "Mark in-wallet transaction <txid> as abandoned",
        "This will mark this transaction and all its in-wallet descendants as abandoned which will allow",
        "for their inputs to be respent.  It can be used to replace \"stuck\" or evicted transactions.",
        "It only works on transactions which are not included in a block and are not currently in the mempool.",
        "It has no effect on transactions which are already conflicted or abandoned."
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"    (string, required) The transaction id",
        "",
        "Result:",
        "",
        "Examples:",
        "> bitcoin-cli abandontransaction \"1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"abandontransaction\", \"params\": [\"1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "abandontransaction \"txid\""
    },
    "abortrescan": {
      "description": [
        "Stops current wallet rescan triggered by an RPC call, e.g. by an importprivkey call."
      ],
      "detail": [
        "Examples:",
        "",
        "Import a private key",
        "> bitcoin-cli importprivkey \"mykey\"",
        "",
        "Abort the running wallet rescan",
        "> bitcoin-cli abortrescan ",
        "",
        "As a JSON-RPC call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"abortrescan\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "abortrescan"
    },
    "addmultisigaddress": {
      "description": [
        "Add a nrequired-to-sign multisignature address to the wallet. Requires a new wallet backup.",
        "Each key is a Bitcoin address or hex-encoded public key.",
        "This functionality is only intended for use with non-watchonly addresses.",
        "See `importaddress` for watchonly p2sh address support.",
        "If 'account' is specified (DEPRECATED), assign address to that account."
      ],
      "detail": [
        "Arguments:",
        "1. nrequired                      (numeric, required) The number of required signatures out of the n keys or addresses.",
        "2. \"keys\"                         (string, required) A json array of bitcoin addresses or hex-encoded public keys",
        "     [",
        "       \"address\"                  (string) bitcoin address or hex-encoded public key",
        "       ...,",
        "     ]",
        "3. \"account\"                      (string, optional) DEPRECATED. An account to assign the addresses to.",
        "4. \"address_type\"                 (string, optional) The address type to use. Options are \"legacy\", \"p2sh-segwit\", and \"bech32\". Default is set by -addresstype.",
        "",
        "Result:",
        "{",
        "  \"address\":\"multisigaddress\",    (string) The value of the new multisig address.",
        "  \"redeemScript\":\"script\"         (string) The string value of the hex-encoded redemption script.",
        "}",
        "",
        "Result (DEPRECATED. To see this result in v0.16 instead, please start bitcoind with -deprecatedrpc=addmultisigaddress).",
        "        clients should transition to the new output api before upgrading to v0.17.",
        "\"address\"                         (string) A bitcoin address associated with the keys.",
        "",
        "Examples:",
        "",
        "Add a multisig address from 2 addresses",
        "> bitcoin-cli addmultisigaddress 2 \"[\\\"16sSauSf5pF2UkUwvKGq4qjNRzBZYqgEL5\\\",\\\"171sgjn4YtPu27adkKGrdDwzRTxnRkBfKV\\\"]\"",
        "",
        "As json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"addmultisigaddress\", \"params\": [2, \"[\\\"16sSauSf5pF2UkUwvKGq4qjNRzBZYqgEL5\\\",\\\"171sgjn4YtPu27adkKGrdDwzRTxnRkBfKV\\\"]\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "addmultisigaddress nrequired [\"key\",...] ( \"account\" \"address_type\" )"
    },
    "backupwallet": {
      "description": [
        "Safely copies current wallet file to destination, which can be a directory or a path with filename."
      ],
      "detail": [
        "Arguments:",
        "1. \"destination\"   (string) The destination directory or file",
        "",
        "Examples:",
        "> bitcoin-cli backupwallet \"backup.dat\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"backupwallet\", \"params\": [\"backup.dat\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "backupwallet \"destination\""
    },
    "bumpfee": {
      "description": [
        "Bumps the fee of an opt-in-RBF transaction T, replacing it with a new transaction B.",
        "An opt-in RBF transaction with the given txid must be in the wallet.",
        "The command will pay the additional fee by decreasing (or perhaps removing) its change output.",
        "If the change output is not big enough to cover the increased fee, the command will currently fail",
        "instead of adding new inputs to compensate. (A future implementation could improve this.)",
        "The command will fail if the wallet or mempool contains a transaction that spends one of T's outputs.",
        "By default, the new fee will be calculated automatically using estimatefee.",
        "The user can specify a confirmation target for estimatefee.",
        "Alternatively, the user can specify totalFee, or use RPC settxfee to set a higher fee rate.",
        "At a minimum, the new fee rate must be high enough to pay an additional new relay fee (incrementalfee",
        "returned by getnetworkinfo) to enter the node's mempool."
      ],
      "detail": [
        "Arguments:",
        "1. txid                  (string, required) The txid to be bumped",
        "2. options               (object, optional)",
        "   {",
        "     \"confTarget\"        (numeric, optional) Confirmation target (in blocks)",
        "     \"totalFee\"          (numeric, optional) Total fee (NOT feerate) to pay, in satoshis.",
        "                         In rare cases, the actual fee paid might be slightly higher than the specified",
        "                         totalFee if the tx change output has to be removed because it is too close to",
        "                         the dust threshold.",
        "     \"replaceable\"       (boolean, optional, default true) Whether the new transaction should still be",
        "                         marked bip-125 replaceable. If true, the sequence numbers in the transaction will",
        "                         be left unchanged from the original. If false, any input sequence numbers in the",
        "                         original transaction that were less than 0xfffffffe will be increased to 0xfffffffe",
        "                         so the new transaction will not be explicitly bip-125 replaceable (though it may",
        "                         still be replaceable in practice, for example if it has unconfirmed ancestors which",
        "                         are replaceable).",
        "     \"estimate_mode\"     (string, optional, default=UNSET) The fee estimate mode, must be one of:",
        "         \"UNSET\"",
        "         \"ECONOMICAL\"",
        "         \"CONSERVATIVE\"",
        "   }",
        "",
        "Result:",
        "{",
        "  \"txid\":    \"value\",   (string)  The id of the new transaction",
        "  \"origfee\":  n,         (numeric) Fee of the replaced transaction",
        "  \"fee\":      n,         (numeric) Fee of the new transaction",
        "  \"errors\":  [ str... ] (json array of strings) Errors encountered during processing (may be empty)",
        "}",
        "",
        "Examples:",
        "",
        "Bump the fee, get the new transaction's txid",
        "> bitcoin-cli bumpfee <txid>",
        ""
      ],
      "signature": "bumpfee \"txid\" ( options ) "
    },
    "dumpprivkey": {
      "description": [
        "Reveals the private key corresponding to 'address'.",
        "Then the importprivkey can be used with this output"
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"   (string, required) The bitcoin address for the private key",
        "",
        "Result:",
        "\"key\"                (string) The private key",
        "",
        "Examples:",
        "> bitcoin-cli dumpprivkey \"myaddress\"",
        "> bitcoin-cli importprivkey \"mykey\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"dumpprivkey\", \"params\": [\"myaddress\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "dumpprivkey \"address\""
    },
    "dumpwallet": {
      "description": [
        "Dumps all wallet keys in a human-readable format to a server-side file. This does not allow overwriting existing files.",
        "Imported scripts are included in the dumpfile, but corresponding BIP173 addresses, etc. may not be added automatically by importwallet.",
        "Note that if your wallet contains keys which are not derived from your HD seed (e.g. imported keys), these are not covered by",
        "only backing up the seed itself, and must be backed up too (e.g. ensure you back up the whole dumpfile)."
      ],
      "detail": [
        "Arguments:",
        "1. \"filename\"    (string, required) The filename with path (either absolute or relative to bitcoind)",
        "",
        "Result:",
        "{                           (json object)",
        "  \"filename\" : {        (string) The filename with full absolute path",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli dumpwallet \"test\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"dumpwallet\", \"params\": [\"test\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "dumpwallet \"filename\""
    },
    "encryptwallet": {
      "description": [
        "Encrypts the wallet with 'passphrase'. This is for first time encryption.",
        "After this, any calls that interact with private keys such as sending or signing ",
        "will require the passphrase to be set prior the making these calls.",
        "Use the walletpassphrase call for this, and then walletlock call.",
        "If the wallet is already encrypted, use the walletpassphrasechange call.",
        "Note that this will shutdown the server."
      ],
      "detail": [
        "Arguments:",
        "1. \"passphrase\"    (string) The pass phrase to encrypt the wallet with. It must be at least 1 character, but should be long.",
        "",
        "Examples:",
        "",
        "Encrypt your wallet",
        "> bitcoin-cli encryptwallet \"my pass phrase\"",
        "",
        "Now set the passphrase to use the wallet, such as for signing or sending bitcoin",
        "> bitcoin-cli walletpassphrase \"my pass phrase\"",
        "",
        "Now we can do something like sign",
        "> bitcoin-cli signmessage \"address\" \"test message\"",
        "",
        "Now lock the wallet again by removing the passphrase",
        "> bitcoin-cli walletlock ",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"encryptwallet\", \"params\": [\"my pass phrase\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "encryptwallet \"passphrase\""
    },
    "getaccount": {
      "description": [
        "DEPRECATED. Returns the account associated with the given address."
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"         (string, required) The bitcoin address for account lookup.",
        "",
        "Result:",
        "\"accountname\"        (string) the account address",
        "",
        "Examples:",
        "> bitcoin-cli getaccount \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getaccount\", \"params\": [\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getaccount \"address\""
    },
    "getaccountaddress": {
      "description": [
        "DEPRECATED. Returns the current Bitcoin address for receiving payments to this account."
      ],
      "detail": [
        "Arguments:",
        "1. \"account\"       (string, required) The account name for the address. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created and a new address created  if there is no account by the given name.",
        "",
        "Result:",
        "\"address\"          (string) The account bitcoin address",
        "",
        "Examples:",
        "> bitcoin-cli getaccountaddress ",
        "> bitcoin-cli getaccountaddress \"\"",
        "> bitcoin-cli getaccountaddress \"myaccount\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getaccountaddress\", \"params\": [\"myaccount\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getaccountaddress \"account\""
    },
    "getaddressesbyaccount": {
      "description": [
        "DEPRECATED. Returns the list of addresses for the given account."
      ],
      "detail": [
        "Arguments:",
        "1. \"account\"        (string, required) The account name.",
        "",
        "Result:",
        "[                     (json array of string)",
        "  \"address\"         (string) a bitcoin address associated with the given account",
        "  ,...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli getaddressesbyaccount \"tabby\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getaddressesbyaccount\", \"params\": [\"tabby\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getaddressesbyaccount \"account\""
    },
    "getbalance": {
      "description": [
        "If account is not specified, returns the server's total available balance.",
        "The available balance is what the wallet considers currently spendable, and is",
        "thus affected by options which limit spendability such as -spendzeroconfchange.",
        "If account is specified (DEPRECATED), returns the balance in the account.",
        "Note that the account \"\" is not the same as leaving the parameter out.",
        "The server total may be different to the balance in the default \"\" account."
      ],
      "detail": [
        "Arguments:",
        "1. \"account\"         (string, optional) DEPRECATED. The account string may be given as a",
        "                     specific account name to find the balance associated with wallet keys in",
        "                     a named account, or as the empty string (\"\") to find the balance",
        "                     associated with wallet keys not in any named account, or as \"*\" to find",
        "                     the balance associated with all wallet keys regardless of account.",
        "                     When this option is specified, it calculates the balance in a different",
        "                     way than when it is not specified, and which can count spends twice when",
        "                     there are conflicting pending transactions (such as those created by",
        "                     the bumpfee command), temporarily resulting in low or even negative",
        "                     balances. In general, account balance calculation is not considered",
        "                     reliable and has resulted in confusing outcomes, so it is recommended to",
        "                     avoid passing this argument.",
        "2. minconf           (numeric, optional, default=1) Only include transactions confirmed at least this many times.",
        "3. include_watchonly (bool, optional, default=false) Also include balance in watch-only addresses (see 'importaddress')",
        "",
        "Result:",
        "amount              (numeric) The total amount in BTC received for this account.",
        "",
        "Examples:",
        "",
        "The total amount in the wallet with 1 or more confirmations",
        "> bitcoin-cli getbalance ",
        "",
        "The total amount in the wallet at least 6 blocks confirmed",
        "> bitcoin-cli getbalance \"*\" 6",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getbalance\", \"params\": [\"*\", 6] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getbalance ( \"account\" minconf include_watchonly )"
    },
    "getnewaddress": {
      "description": [
        "Returns a new Bitcoin address for receiving payments.",
        "If 'account' is specified (DEPRECATED), it is added to the address book ",
        "so payments received with the address will be credited to 'account'."
      ],
      "detail": [
        "Arguments:",
        "1. \"account\"        (string, optional) DEPRECATED. The account name for the address to be linked to. If not provided, the default account \"\" is used. It can also be set to the empty string \"\" to represent the default account. The account does not need to exist, it will be created if there is no account by the given name.",
        "2. \"address_type\"   (string, optional) The address type to use. Options are \"legacy\", \"p2sh-segwit\", and \"bech32\". Default is set by -addresstype.",
        "",
        "Result:",
        "\"address\"    (string) The new bitcoin address",
        "",
        "Examples:",
        "> bitcoin-cli getnewaddress ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getnewaddress\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getnewaddress ( \"account\" \"address_type\" )"
    },
    "getrawchangeaddress": {
      "description": [
        "Returns a new Bitcoin address, for receiving change.",
        "This is for use with raw transactions, NOT normal use."
      ],
      "detail": [
        "Arguments:",
        "1. \"address_type\"           (string, optional) The address type to use. Options are \"legacy\", \"p2sh-segwit\", and \"bech32\". Default is set by -changetype.",
        "",
        "Result:",
        "\"address\"    (string) The address",
        "",
        "Examples:",
        "> bitcoin-cli getrawchangeaddress ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getrawchangeaddress\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getrawchangeaddress ( \"address_type\" )"
    },
    "getreceivedbyaccount": {
      "description": [
        "DEPRECATED. Returns the total amount received by addresses with <account> in transactions with at least [minconf] confirmations."
      ],
      "detail": [
        "Arguments:",
        "1. \"account\"      (string, required) The selected account, may be the default account using \"\".",
        "2. minconf          (numeric, optional, default=1) Only include transactions confirmed at least this many times.",
        "",
        "Result:",
        "amount              (numeric) The total amount in BTC received for this account.",
        "",
        "Examples:",
        "",
        "Amount received by the default account with at least 1 confirmation",
        "> bitcoin-cli getreceivedbyaccount \"\"",
        "",
        "Amount received at the tabby account including unconfirmed amounts with zero confirmations",
        "> bitcoin-cli getreceivedbyaccount \"tabby\" 0",
        "",
        "The amount with at least 6 confirmations",
        "> bitcoin-cli getreceivedbyaccount \"tabby\" 6",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getreceivedbyaccount\", \"params\": [\"tabby\", 6] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getreceivedbyaccount \"account\" ( minconf )"
    },
    "getreceivedbyaddress": {
      "description": [
        "Returns the total amount received by the given address in transactions with at least minconf confirmations."
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"         (string, required) The bitcoin address for transactions.",
        "2. minconf             (numeric, optional, default=1) Only include transactions confirmed at least this many times.",
        "",
        "Result:",
        "amount   (numeric) The total amount in BTC received at this address.",
        "",
        "Examples:",
        "",
        "The amount from transactions with at least 1 confirmation",
        "> bitcoin-cli getreceivedbyaddress \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\"",
        "",
        "The amount including unconfirmed transactions, zero confirmations",
        "> bitcoin-cli getreceivedbyaddress \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" 0",
        "",
        "The amount with at least 6 confirmations",
        "> bitcoin-cli getreceivedbyaddress \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" 6",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getreceivedbyaddress\", \"params\": [\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\", 6] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getreceivedbyaddress \"address\" ( minconf )"
    },
    "gettransaction": {
      "description": [
        "Get detailed information about in-wallet transaction <txid>"
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"                  (string, required) The transaction id",
        "2. \"include_watchonly\"     (bool, optional, default=false) Whether to include watch-only addresses in balance calculation and details[]",
        "",
        "Result:",
        "{",
        "  \"amount\" : x.xxx,        (numeric) The transaction amount in BTC",
        "  \"fee\": x.xxx,            (numeric) The amount of the fee in BTC. This is negative and only available for the ",
        "                              'send' category of transactions.",
        "  \"confirmations\" : n,     (numeric) The number of confirmations",
        "  \"blockhash\" : \"hash\",  (string) The block hash",
        "  \"blockindex\" : xx,       (numeric) The index of the transaction in the block that includes it",
        "  \"blocktime\" : ttt,       (numeric) The time in seconds since epoch (1 Jan 1970 GMT)",
        "  \"txid\" : \"transactionid\",   (string) The transaction id.",
        "  \"time\" : ttt,            (numeric) The transaction time in seconds since epoch (1 Jan 1970 GMT)",
        "  \"timereceived\" : ttt,    (numeric) The time received in seconds since epoch (1 Jan 1970 GMT)",
        "  \"bip125-replaceable\": \"yes|no|unknown\",  (string) Whether this transaction could be replaced due to BIP125 (replace-by-fee);",
        "                                                   may be unknown for unconfirmed transactions not in the mempool",
        "  \"details\" : [",
        "    {",
        "      \"account\" : \"accountname\",      (string) DEPRECATED. The account name involved in the transaction, can be \"\" for the default account.",
        "      \"address\" : \"address\",          (string) The bitcoin address involved in the transaction",
        "      \"category\" : \"send|receive\",    (string) The category, either 'send' or 'receive'",
        "      \"amount\" : x.xxx,                 (numeric) The amount in BTC",
        "      \"label\" : \"label\",              (string) A comment for the address/transaction, if any",
        "      \"vout\" : n,                       (numeric) the vout value",
        "      \"fee\": x.xxx,                     (numeric) The amount of the fee in BTC. This is negative and only available for the ",
        "                                           'send' category of transactions.",
        "      \"abandoned\": xxx                  (bool) 'true' if the transaction has been abandoned (inputs are respendable). Only available for the ",
        "                                           'send' category of transactions.",
        "    }",
        "    ,...",
        "  ],",
        "  \"hex\" : \"data\"         (string) Raw data for transaction",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli gettransaction \"1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d\"",
        "> bitcoin-cli gettransaction \"1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d\" true",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"gettransaction\", \"params\": [\"1075db55d416d3ca199f55b6084e2115b9345e16c5cf302fc80e9d5fbf5d48d\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "gettransaction \"txid\" ( include_watchonly )"
    },
    "getunconfirmedbalance": {
      "description": [
        "Returns the server's total unconfirmed balance"
      ],
      "detail": [],
      "signature": "getunconfirmedbalance"
    },
    "getwalletinfo": {
      "description": [
        "Returns an object containing various wallet state info."
      ],
      "detail": [
        "Result:",
        "{",
        "  \"walletname\": xxxxx,             (string) the wallet name",
        "  \"walletversion\": xxxxx,          (numeric) the wallet version",
        "  \"balance\": xxxxxxx,              (numeric) the total confirmed balance of the wallet in BTC",
        "  \"unconfirmed_balance\": xxx,      (numeric) the total unconfirmed balance of the wallet in BTC",
        "  \"immature_balance\": xxxxxx,      (numeric) the total immature balance of the wallet in BTC",
        "  \"txcount\": xxxxxxx,              (numeric) the total number of transactions in the wallet",
        "  \"keypoololdest\": xxxxxx,         (numeric) the timestamp (seconds since Unix epoch) of the oldest pre-generated key in the key pool",
        "  \"keypoolsize\": xxxx,             (numeric) how many new keys are pre-generated (only counts external keys)",
        "  \"keypoolsize_hd_internal\": xxxx, (numeric) how many new keys are pre-generated for internal use (used for change outputs, only appears if the wallet is using this feature, otherwise external keys are used)",
        "  \"unlocked_until\": ttt,           (numeric) the timestamp in seconds since epoch (midnight Jan 1 1970 GMT) that the wallet is unlocked for transfers, or 0 if the wallet is locked",
        "  \"paytxfee\": x.xxxx,              (numeric) the transaction fee configuration, set in BTC/kB",
        "  \"hdmasterkeyid\": \"<hash160>\"     (string, optional) the Hash160 of the HD master pubkey (only present when HD is enabled)",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli getwalletinfo ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"getwalletinfo\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "getwalletinfo"
    },
    "importaddress": {
      "description": [
        "Adds a script (in hex) or address that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup."
      ],
      "detail": [
        "Arguments:",
        "1. \"script\"           (string, required) The hex-encoded script (or address)",
        "2. \"label\"            (string, optional, default=\"\") An optional label",
        "3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions",
        "4. p2sh                 (boolean, optional, default=false) Add the P2SH version of the script as well",
        "",
        "Note: This call can take minutes to complete if rescan is true, during that time, other rpc calls",
        "may report that the imported address exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.",
        "If you have the full public key, you should call importpubkey instead of this.",
        "",
        "Note: If you import a non-standard raw script in hex form, outputs sending to it will be treated",
        "as change, and not show up in many RPCs.",
        "",
        "Examples:",
        "",
        "Import a script with rescan",
        "> bitcoin-cli importaddress \"myscript\"",
        "",
        "Import using a label without rescan",
        "> bitcoin-cli importaddress \"myscript\" \"testing\" false",
        "",
        "As a JSON-RPC call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"importaddress\", \"params\": [\"myscript\", \"testing\", false] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "importaddress \"address\" ( \"label\" rescan p2sh )"
    },
    "importmulti": {
      "description": [
        "Import addresses/scripts (with private or public keys, redeem script (P2SH)), rescanning all addresses in one-shot-only (rescan can be disabled via options). Requires a new wallet backup."
      ],
      "detail": [
        "Arguments:",
        "1. requests     (array, required) Data to be imported",
        "  [     (array of json objects)",
        "    {",
        "      \"scriptPubKey\": \"<script>\" | { \"address\":\"<address>\" }, (string / json, required) Type of scriptPubKey (string for script, json for address)",
        "      \"timestamp\": timestamp | \"now\"                        , (integer / string, required) Creation time of the key in seconds since epoch (Jan 1 1970 GMT),",
        "                                                              or the string \"now\" to substitute the current synced blockchain time. The timestamp of the oldest",
        "                                                              key will determine how far back blockchain rescans need to begin for missing wallet transactions.",
        "                                                              \"now\" can be specified to bypass scanning, for keys which are known to never have been used, and",
        "                                                              0 can be specified to scan the entire blockchain. Blocks up to 2 hours before the earliest key",
        "                                                              creation time of all keys being imported by the importmulti call will be scanned.",
        "      \"redeemscript\": \"<script>\"                            , (string, optional) Allowed only if the scriptPubKey is a P2SH address or a P2SH scriptPubKey",
        "      \"pubkeys\": [\"<pubKey>\", ... ]                         , (array, optional) Array of strings giving pubkeys that must occur in the output or redeemscript",
        "      \"keys\": [\"<key>\", ... ]                               , (array, optional) Array of strings giving private keys whose corresponding public keys must occur in the output or redeemscript",
        "      \"internal\": <true>                                    , (boolean, optional, default: false) Stating whether matching outputs should be treated as not incoming payments",
        "      \"watchonly\": <true>                                   , (boolean, optional, default: false) Stating whether matching outputs should be considered watched even when they're not spendable, only allowed if keys are empty",
        "      \"label\": <label>                                      , (string, optional, default: '') Label to assign to the address (aka account name, for now), only allowed with internal=false",
        "    }",
        "  ,...",
        "  ]",
        "2. options                 (json, optional)",
        "  {",
        "     \"rescan\": <false>,         (boolean, optional, default: true) Stating if should rescan the blockchain after all imports",
        "  }",
        "",
        "Note: This call can take minutes to complete if rescan is true, during that time, other rpc calls",
        "may report that the imported keys, addresses or scripts exists but related transactions are still missing.",
        "",
        "Examples:",
        "> bitcoin-cli importmulti '[{ \"scriptPubKey\": { \"address\": \"<my address>\" }, \"timestamp\":1455191478 }, { \"scriptPubKey\": { \"address\": \"<my 2nd address>\" }, \"label\": \"example 2\", \"timestamp\": 1455191480 }]'",
        "> bitcoin-cli importmulti '[{ \"scriptPubKey\": { \"address\": \"<my address>\" }, \"timestamp\":1455191478 }]' '{ \"rescan\": false}'",
        "",
        "Response is an array with the same size as the input that has the execution result :",
        "  [{ \"success\": true } , { \"success\": false, \"error\": { \"code\": -1, \"message\": \"Internal Server Error\"} }, ... ]",
        ""
      ],
      "signature": "importmulti \"requests\" ( \"options\" )"
    },
    "importprivkey": {
      "description": [
        "Adds a private key (as returned by dumpprivkey) to your wallet. Requires a new wallet backup."
      ],
      "detail": [
        "Arguments:",
        "1. \"privkey\"          (string, required) The private key (see dumpprivkey)",
        "2. \"label\"            (string, optional, default=\"\") An optional label",
        "3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions",
        "",
        "Note: This call can take minutes to complete if rescan is true, during that time, other rpc calls",
        "may report that the imported key exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.",
        "",
        "Examples:",
        "",
        "Dump a private key",
        "> bitcoin-cli dumpprivkey \"myaddress\"",
        "",
        "Import the private key with rescan",
        "> bitcoin-cli importprivkey \"mykey\"",
        "",
        "Import using a label and without rescan",
        "> bitcoin-cli importprivkey \"mykey\" \"testing\" false",
        "",
        "Import using default blank label and without rescan",
        "> bitcoin-cli importprivkey \"mykey\" \"\" false",
        "",
        "As a JSON-RPC call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"importprivkey\", \"params\": [\"mykey\", \"testing\", false] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "importprivkey \"privkey\" ( \"label\" ) ( rescan )"
    },
    "importprunedfunds": {
      "description": [
        "Imports funds without rescan. Corresponding address or script must previously be included in wallet. Aimed towards pruned wallets. The end-user is responsible to import additional transactions that subsequently spend the imported outputs or rescan after the point in the blockchain the transaction is included."
      ],
      "detail": [
        "Arguments:",
        "1. \"rawtransaction\" (string, required) A raw transaction in hex funding an already-existing address in wallet",
        "2. \"txoutproof\"     (string, required) The hex output from gettxoutproof that contains the transaction",
        ""
      ],
      "signature": "importprunedfunds"
    },
    "importpubkey": {
      "description": [
        "Adds a public key (in hex) that can be watched as if it were in your wallet but cannot be used to spend. Requires a new wallet backup."
      ],
      "detail": [
        "Arguments:",
        "1. \"pubkey\"           (string, required) The hex-encoded public key",
        "2. \"label\"            (string, optional, default=\"\") An optional label",
        "3. rescan               (boolean, optional, default=true) Rescan the wallet for transactions",
        "",
        "Note: This call can take minutes to complete if rescan is true, during that time, other rpc calls",
        "may report that the imported pubkey exists but related transactions are still missing, leading to temporarily incorrect/bogus balances and unspent outputs until rescan completes.",
        "",
        "Examples:",
        "",
        "Import a public key with rescan",
        "> bitcoin-cli importpubkey \"mypubkey\"",
        "",
        "Import using a label without rescan",
        "> bitcoin-cli importpubkey \"mypubkey\" \"testing\" false",
        "",
        "As a JSON-RPC call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"importpubkey\", \"params\": [\"mypubkey\", \"testing\", false] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "importpubkey \"pubkey\" ( \"label\" rescan )"
    },
    "importwallet": {
      "description": [
        "Imports keys from a wallet dump file (see dumpwallet). Requires a new wallet backup to include imported keys."
      ],
      "detail": [
        "Arguments:",
        "1. \"filename\"    (string, required) The wallet file",
        "",
        "Examples:",
        "",
        "Dump the wallet",
        "> bitcoin-cli dumpwallet \"test\"",
        "",
        "Import the wallet",
        "> bitcoin-cli importwallet \"test\"",
        "",
        "Import using the json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"importwallet\", \"params\": [\"test\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "importwallet \"filename\""
    },
    "keypoolrefill": {
      "description": [
        "Fills the keypool.",
        "Arguments",
        "1. newsize     (numeric, optional, default=100) The new keypool size"
      ],
      "detail": [
        "Examples:",
        "> bitcoin-cli keypoolrefill ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"keypoolrefill\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "keypoolrefill ( newsize )"
    },
    "listaccounts": {
      "description": [
        "DEPRECATED. Returns Object that has account names as keys, account balances as values."
      ],
      "detail": [
        "Arguments:",
        "1. minconf             (numeric, optional, default=1) Only include transactions with at least this many confirmations",
        "2. include_watchonly   (bool, optional, default=false) Include balances in watch-only addresses (see 'importaddress')",
        "",
        "Result:",
        "{                      (json object where keys are account names, and values are numeric balances",
        "  \"account\": x.xxx,  (numeric) The property name is the account name, and the value is the total balance for the account.",
        "  ...",
        "}",
        "",
        "Examples:",
        "",
        "List account balances where there at least 1 confirmation",
        "> bitcoin-cli listaccounts ",
        "",
        "List account balances including zero confirmation transactions",
        "> bitcoin-cli listaccounts 0",
        "",
        "List account balances for 6 or more confirmations",
        "> bitcoin-cli listaccounts 6",
        "",
        "As json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listaccounts\", \"params\": [6] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listaccounts ( minconf include_watchonly)"
    },
    "listaddressgroupings": {
      "description": [
        "Lists groups of addresses which have had their common ownership",
        "made public by common use as inputs or as the resulting change",
        "in past transactions"
      ],
      "detail": [
        "Result:",
        "[",
        "  [",
        "    [",
        "      \"address\",            (string) The bitcoin address",
        "      amount,                 (numeric) The amount in BTC",
        "      \"account\"             (string, optional) DEPRECATED. The account",
        "    ]",
        "    ,...",
        "  ]",
        "  ,...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli listaddressgroupings ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listaddressgroupings\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listaddressgroupings"
    },
    "listlockunspent": {
      "description": [
        "Returns list of temporarily unspendable outputs.",
        "See the lockunspent call to lock and unlock transactions for spending."
      ],
      "detail": [
        "Result:",
        "[",
        "  {",
        "    \"txid\" : \"transactionid\",     (string) The transaction id locked",
        "    \"vout\" : n                      (numeric) The vout value",
        "  }",
        "  ,...",
        "]",
        "",
        "Examples:",
        "",
        "List the unspent transactions",
        "> bitcoin-cli listunspent ",
        "",
        "Lock an unspent transaction",
        "> bitcoin-cli lockunspent false \"[{\\\"txid\\\":\\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\\",\\\"vout\\\":1}]\"",
        "",
        "List the locked transactions",
        "> bitcoin-cli listlockunspent ",
        "",
        "Unlock the transaction again",
        "> bitcoin-cli lockunspent true \"[{\\\"txid\\\":\\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\\",\\\"vout\\\":1}]\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listlockunspent\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listlockunspent"
    },
    "listreceivedbyaccount": {
      "description": [
        "DEPRECATED. List balances by account."
      ],
      "detail": [
        "Arguments:",
        "1. minconf           (numeric, optional, default=1) The minimum number of confirmations before payments are included.",
        "2. include_empty     (bool, optional, default=false) Whether to include accounts that haven't received any payments.",
        "3. include_watchonly (bool, optional, default=false) Whether to include watch-only addresses (see 'importaddress').",
        "",
        "Result:",
        "[",
        "  {",
        "    \"involvesWatchonly\" : true,   (bool) Only returned if imported addresses were involved in transaction",
        "    \"account\" : \"accountname\",  (string) The account name of the receiving account",
        "    \"amount\" : x.xxx,             (numeric) The total amount received by addresses with this account",
        "    \"confirmations\" : n,          (numeric) The number of confirmations of the most recent transaction included",
        "    \"label\" : \"label\"           (string) A comment for the address/transaction, if any",
        "  }",
        "  ,...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli listreceivedbyaccount ",
        "> bitcoin-cli listreceivedbyaccount 6 true",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listreceivedbyaccount\", \"params\": [6, true, true] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listreceivedbyaccount ( minconf include_empty include_watchonly)"
    },
    "listreceivedbyaddress": {
      "description": [
        "List balances by receiving address."
      ],
      "detail": [
        "Arguments:",
        "1. minconf           (numeric, optional, default=1) The minimum number of confirmations before payments are included.",
        "2. include_empty     (bool, optional, default=false) Whether to include addresses that haven't received any payments.",
        "3. include_watchonly (bool, optional, default=false) Whether to include watch-only addresses (see 'importaddress').",
        "",
        "Result:",
        "[",
        "  {",
        "    \"involvesWatchonly\" : true,        (bool) Only returned if imported addresses were involved in transaction",
        "    \"address\" : \"receivingaddress\",  (string) The receiving address",
        "    \"account\" : \"accountname\",       (string) DEPRECATED. The account of the receiving address. The default account is \"\".",
        "    \"amount\" : x.xxx,                  (numeric) The total amount in BTC received by the address",
        "    \"confirmations\" : n,               (numeric) The number of confirmations of the most recent transaction included",
        "    \"label\" : \"label\",               (string) A comment for the address/transaction, if any",
        "    \"txids\": [",
        "       \"txid\",                         (string) The ids of transactions received with the address ",
        "       ...",
        "    ]",
        "  }",
        "  ,...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli listreceivedbyaddress ",
        "> bitcoin-cli listreceivedbyaddress 6 true",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listreceivedbyaddress\", \"params\": [6, true, true] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listreceivedbyaddress ( minconf include_empty include_watchonly)"
    },
    "listsinceblock": {
      "description": [
        "Get all transactions in blocks since block [blockhash], or all transactions if omitted.",
        "If \"blockhash\" is no longer a part of the main chain, transactions from the fork point onward are included.",
        "Additionally, if include_removed is set, transactions affecting the wallet which were removed are returned in the \"removed\" array."
      ],
      "detail": [
        "Arguments:",
        "1. \"blockhash\"            (string, optional) The block hash to list transactions since",
        "2. target_confirmations:    (numeric, optional, default=1) Return the nth block hash from the main chain. e.g. 1 would mean the best block hash. Note: this is not used as a filter, but only affects [lastblock] in the return value",
        "3. include_watchonly:       (bool, optional, default=false) Include transactions to watch-only addresses (see 'importaddress')",
        "4. include_removed:         (bool, optional, default=true) Show transactions that were removed due to a reorg in the \"removed\" array",
        "                                                           (not guaranteed to work on pruned nodes)",
        "",
        "Result:",
        "{",
        "  \"transactions\": [",
        "    \"account\":\"accountname\",       (string) DEPRECATED. The account name associated with the transaction. Will be \"\" for the default account.",
        "    \"address\":\"address\",    (string) The bitcoin address of the transaction. Not present for move transactions (category = move).",
        "    \"category\":\"send|receive\",     (string) The transaction category. 'send' has negative amounts, 'receive' has positive amounts.",
        "    \"amount\": x.xxx,          (numeric) The amount in BTC. This is negative for the 'send' category, and for the 'move' category for moves ",
        "                                          outbound. It is positive for the 'receive' category, and for the 'move' category for inbound funds.",
        "    \"vout\" : n,               (numeric) the vout value",
        "    \"fee\": x.xxx,             (numeric) The amount of the fee in BTC. This is negative and only available for the 'send' category of transactions.",
        "    \"confirmations\": n,       (numeric) The number of confirmations for the transaction. Available for 'send' and 'receive' category of transactions.",
        "                                          When it's < 0, it means the transaction conflicted that many blocks ago.",
        "    \"blockhash\": \"hashvalue\",     (string) The block hash containing the transaction. Available for 'send' and 'receive' category of transactions.",
        "    \"blockindex\": n,          (numeric) The index of the transaction in the block that includes it. Available for 'send' and 'receive' category of transactions.",
        "    \"blocktime\": xxx,         (numeric) The block time in seconds since epoch (1 Jan 1970 GMT).",
        "    \"txid\": \"transactionid\",  (string) The transaction id. Available for 'send' and 'receive' category of transactions.",
        "    \"time\": xxx,              (numeric) The transaction time in seconds since epoch (Jan 1 1970 GMT).",
        "    \"timereceived\": xxx,      (numeric) The time received in seconds since epoch (Jan 1 1970 GMT). Available for 'send' and 'receive' category of transactions.",
        "    \"bip125-replaceable\": \"yes|no|unknown\",  (string) Whether this transaction could be replaced due to BIP125 (replace-by-fee);",
        "                                                   may be unknown for unconfirmed transactions not in the mempool",
        "    \"abandoned\": xxx,         (bool) 'true' if the transaction has been abandoned (inputs are respendable). Only available for the 'send' category of transactions.",
        "    \"comment\": \"...\",       (string) If a comment is associated with the transaction.",
        "    \"label\" : \"label\"       (string) A comment for the address/transaction, if any",
        "    \"to\": \"...\",            (string) If a comment to is associated with the transaction.",
        "  ],",
        "  \"removed\": [",
        "    <structure is the same as \"transactions\" above, only present if include_removed=true>",
        "    Note: transactions that were readded in the active chain will appear as-is in this array, and may thus have a positive confirmation count.",
        "  ],",
        "  \"lastblock\": \"lastblockhash\"     (string) The hash of the block (target_confirmations-1) from the best block on the main chain. This is typically used to feed back into listsinceblock the next time you call it. So you would generally use a target_confirmations of say 6, so you will be continually re-notified of transactions until they've reached 6 confirmations plus any new ones",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli listsinceblock ",
        "> bitcoin-cli listsinceblock \"000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad\" 6",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listsinceblock\", \"params\": [\"000000000000000bacf66f7497b7dc45ef753ee9a7d38571037cdb1a57f663ad\", 6] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listsinceblock ( \"blockhash\" target_confirmations include_watchonly include_removed )"
    },
    "listtransactions": {
      "description": [
        "Returns up to 'count' most recent transactions skipping the first 'from' transactions for account 'account'."
      ],
      "detail": [
        "Arguments:",
        "1. \"account\"    (string, optional) DEPRECATED. The account name. Should be \"*\".",
        "2. count          (numeric, optional, default=10) The number of transactions to return",
        "3. skip           (numeric, optional, default=0) The number of transactions to skip",
        "4. include_watchonly (bool, optional, default=false) Include transactions to watch-only addresses (see 'importaddress')",
        "",
        "Result:",
        "[",
        "  {",
        "    \"account\":\"accountname\",       (string) DEPRECATED. The account name associated with the transaction. ",
        "                                                It will be \"\" for the default account.",
        "    \"address\":\"address\",    (string) The bitcoin address of the transaction. Not present for ",
        "                                                move transactions (category = move).",
        "    \"category\":\"send|receive|move\", (string) The transaction category. 'move' is a local (off blockchain)",
        "                                                transaction between accounts, and not associated with an address,",
        "                                                transaction id or block. 'send' and 'receive' transactions are ",
        "                                                associated with an address, transaction id and block details",
        "    \"amount\": x.xxx,          (numeric) The amount in BTC. This is negative for the 'send' category, and for the",
        "                                         'move' category for moves outbound. It is positive for the 'receive' category,",
        "                                         and for the 'move' category for inbound funds.",
        "    \"label\": \"label\",       (string) A comment for the address/transaction, if any",
        "    \"vout\": n,                (numeric) the vout value",
        "    \"fee\": x.xxx,             (numeric) The amount of the fee in BTC. This is negative and only available for the ",
        "                                         'send' category of transactions.",
        "    \"confirmations\": n,       (numeric) The number of confirmations for the transaction. Available for 'send' and ",
        "                                         'receive' category of transactions. Negative confirmations indicate the",
        "                                         transaction conflicts with the block chain",
        "    \"trusted\": xxx,           (bool) Whether we consider the outputs of this unconfirmed transaction safe to spend.",
        "    \"blockhash\": \"hashvalue\", (string) The block hash containing the transaction. Available for 'send' and 'receive'",
        "                                          category of transactions.",
        "    \"blockindex\": n,          (numeric) The index of the transaction in the block that includes it. Available for 'send' and 'receive'",
        "                                          category of transactions.",
        "    \"blocktime\": xxx,         (numeric) The block time in seconds since epoch (1 Jan 1970 GMT).",
        "    \"txid\": \"transactionid\", (string) The transaction id. Available for 'send' and 'receive' category of transactions.",
        "    \"time\": xxx,              (numeric) The transaction time in seconds since epoch (midnight Jan 1 1970 GMT).",
        "    \"timereceived\": xxx,      (numeric) The time received in seconds since epoch (midnight Jan 1 1970 GMT). Available ",
        "                                          for 'send' and 'receive' category of transactions.",
        "    \"comment\": \"...\",       (string) If a comment is associated with the transaction.",
        "    \"otheraccount\": \"accountname\",  (string) DEPRECATED. For the 'move' category of transactions, the account the funds came ",
        "                                          from (for receiving funds, positive amounts), or went to (for sending funds,",
        "                                          negative amounts).",
        "    \"bip125-replaceable\": \"yes|no|unknown\",  (string) Whether this transaction could be replaced due to BIP125 (replace-by-fee);",
        "                                                     may be unknown for unconfirmed transactions not in the mempool",
        "    \"abandoned\": xxx          (bool) 'true' if the transaction has been abandoned (inputs are respendable). Only available for the ",
        "                                         'send' category of transactions.",
        "  }",
        "]",
        "",
        "Examples:",
        "",
        "List the most recent 10 transactions in the systems",
        "> bitcoin-cli listtransactions ",
        "",
        "List transactions 100 to 120",
        "> bitcoin-cli listtransactions \"*\" 20 100",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listtransactions\", \"params\": [\"*\", 20, 100] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listtransactions ( \"account\" count skip include_watchonly)"
    },
    "listunspent": {
      "description": [
        "Returns array of unspent transaction outputs",
        "with between minconf and maxconf (inclusive) confirmations.",
        "Optionally filter to only include txouts paid to specified addresses."
      ],
      "detail": [
        "Arguments:",
        "1. minconf          (numeric, optional, default=1) The minimum confirmations to filter",
        "2. maxconf          (numeric, optional, default=9999999) The maximum confirmations to filter",
        "3. \"addresses\"      (string) A json array of bitcoin addresses to filter",
        "    [",
        "      \"address\"     (string) bitcoin address",
        "      ,...",
        "    ]",
        "4. include_unsafe (bool, optional, default=true) Include outputs that are not safe to spend",
        "                  See description of \"safe\" attribute below.",
        "5. query_options    (json, optional) JSON with query options",
        "    {",
        "      \"minimumAmount\"    (numeric or string, default=0) Minimum value of each UTXO in BTC",
        "      \"maximumAmount\"    (numeric or string, default=unlimited) Maximum value of each UTXO in BTC",
        "      \"maximumCount\"     (numeric or string, default=unlimited) Maximum number of UTXOs",
        "      \"minimumSumAmount\" (numeric or string, default=unlimited) Minimum sum value of all UTXOs in BTC",
        "    }",
        "",
        "Result",
        "[                   (array of json object)",
        "  {",
        "    \"txid\" : \"txid\",          (string) the transaction id ",
        "    \"vout\" : n,               (numeric) the vout value",
        "    \"address\" : \"address\",    (string) the bitcoin address",
        "    \"account\" : \"account\",    (string) DEPRECATED. The associated account, or \"\" for the default account",
        "    \"scriptPubKey\" : \"key\",   (string) the script key",
        "    \"amount\" : x.xxx,         (numeric) the transaction output amount in BTC",
        "    \"confirmations\" : n,      (numeric) The number of confirmations",
        "    \"redeemScript\" : n        (string) The redeemScript if scriptPubKey is P2SH",
        "    \"spendable\" : xxx,        (bool) Whether we have the private keys to spend this output",
        "    \"solvable\" : xxx,         (bool) Whether we know how to spend this output, ignoring the lack of keys",
        "    \"safe\" : xxx              (bool) Whether this output is considered safe to spend. Unconfirmed transactions",
        "                              from outside keys and unconfirmed replacement transactions are considered unsafe",
        "                              and are not eligible for spending by fundrawtransaction and sendtoaddress.",
        "  }",
        "  ,...",
        "]",
        "",
        "Examples",
        "> bitcoin-cli listunspent ",
        "> bitcoin-cli listunspent 6 9999999 \"[\\\"1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg\\\",\\\"1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP\\\"]\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listunspent\", \"params\": [6, 9999999 \"[\\\"1PGFqEzfmQch1gKD3ra4k18PNj3tTUUSqg\\\",\\\"1LtvqCaApEdUGFkpKMM4MstjcaL4dKg8SP\\\"]\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        "> bitcoin-cli listunspent 6 9999999 '[]' true '{ \"minimumAmount\": 0.005 }'",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listunspent\", \"params\": [6, 9999999, [] , true, { \"minimumAmount\": 0.005 } ] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listunspent ( minconf maxconf  [\"addresses\",...] [include_unsafe] [query_options])"
    },
    "listwallets": {
      "description": [
        "Returns a list of currently loaded wallets.",
        "For full information on the wallet, use \"getwalletinfo\""
      ],
      "detail": [
        "Result:",
        "[                         (json array of strings)",
        "  \"walletname\"            (string) the wallet name",
        "   ...",
        "]",
        "",
        "Examples:",
        "> bitcoin-cli listwallets ",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"listwallets\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "listwallets"
    },
    "lockunspent": {
      "description": [
        "Updates list of temporarily unspendable outputs.",
        "Temporarily lock (unlock=false) or unlock (unlock=true) specified transaction outputs.",
        "If no transaction outputs are specified when unlocking then all current locked transaction outputs are unlocked.",
        "A locked transaction output will not be chosen by automatic coin selection, when spending bitcoins.",
        "Locks are stored in memory only. Nodes start with zero locked outputs, and the locked output list",
        "is always cleared (by virtue of process exit) when a node stops or fails.",
        "Also see the listunspent call"
      ],
      "detail": [
        "Arguments:",
        "1. unlock            (boolean, required) Whether to unlock (true) or lock (false) the specified transactions",
        "2. \"transactions\"  (string, optional) A json array of objects. Each object the txid (string) vout (numeric)",
        "     [           (json array of json objects)",
        "       {",
        "         \"txid\":\"id\",    (string) The transaction id",
        "         \"vout\": n         (numeric) The output number",
        "       }",
        "       ,...",
        "     ]",
        "",
        "Result:",
        "true|false    (boolean) Whether the command was successful or not",
        "",
        "Examples:",
        "",
        "List the unspent transactions",
        "> bitcoin-cli listunspent ",
        "",
        "Lock an unspent transaction",
        "> bitcoin-cli lockunspent false \"[{\\\"txid\\\":\\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\\",\\\"vout\\\":1}]\"",
        "",
        "List the locked transactions",
        "> bitcoin-cli listlockunspent ",
        "",
        "Unlock the transaction again",
        "> bitcoin-cli lockunspent true \"[{\\\"txid\\\":\\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\\",\\\"vout\\\":1}]\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"lockunspent\", \"params\": [false, \"[{\\\"txid\\\":\\\"a08e6907dbbd3d809776dbfc5d82e371b764ed838b5655e72f463568df1aadf0\\\",\\\"vout\\\":1}]\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "lockunspent unlock ([{\"txid\":\"txid\",\"vout\":n},...])"
    },
    "move": {
      "description": [
        "DEPRECATED. Move a specified amount from one account in your wallet to another."
      ],
      "detail": [
        "Arguments:",
        "1. \"fromaccount\"   (string, required) The name of the account to move funds from. May be the default account using \"\".",
        "2. \"toaccount\"     (string, required) The name of the account to move funds to. May be the default account using \"\".",
        "3. amount            (numeric) Quantity of BTC to move between accounts.",
        "4. (dummy)           (numeric, optional) Ignored. Remains for backward compatibility.",
        "5. \"comment\"       (string, optional) An optional comment, stored in the wallet only.",
        "",
        "Result:",
        "true|false           (boolean) true if successful.",
        "",
        "Examples:",
        "",
        "Move 0.01 BTC from the default account to the account named tabby",
        "> bitcoin-cli move \"\" \"tabby\" 0.01",
        "",
        "Move 0.01 BTC timotei to akiko with a comment and funds have 6 confirmations",
        "> bitcoin-cli move \"timotei\" \"akiko\" 0.01 6 \"happy birthday!\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"move\", \"params\": [\"timotei\", \"akiko\", 0.01, 6, \"happy birthday!\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "move \"fromaccount\" \"toaccount\" amount ( minconf \"comment\" )"
    },
    "removeprunedfunds": {
      "description": [
        "Deletes the specified transaction from the wallet. Meant for use with pruned wallets and as a companion to importprunedfunds. This will affect wallet balances."
      ],
      "detail": [
        "Arguments:",
        "1. \"txid\"           (string, required) The hex-encoded id of the transaction you are deleting",
        "",
        "Examples:",
        "> bitcoin-cli removeprunedfunds \"a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5\"",
        "",
        "As a JSON-RPC call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"removeprunedfunds\", \"params\": [\"a8d0c0184dde994a09ec054286f1ce581bebf46446a512166eae7628734ea0a5\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "removeprunedfunds \"txid\""
    },
    "rescanblockchain": {
      "description": [
        "Rescan the local blockchain for wallet related transactions."
      ],
      "detail": [
        "Arguments:",
        "1. \"start_height\"    (numeric, optional) block height where the rescan should start",
        "2. \"stop_height\"     (numeric, optional) the last block height that should be scanned",
        "",
        "Result:",
        "{",
        "  \"start_height\"     (numeric) The block height where the rescan has started. If omitted, rescan started from the genesis block.",
        "  \"stop_height\"      (numeric) The height of the last rescanned block. If omitted, rescan stopped at the chain tip.",
        "}",
        "",
        "Examples:",
        "> bitcoin-cli rescanblockchain 100000 120000",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"rescanblockchain\", \"params\": [100000, 120000] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "rescanblockchain (\"start_height\") (\"stop_height\")"
    },
    "sendfrom": {
      "description": [
        "DEPRECATED (use sendtoaddress). Sent an amount from an account to a bitcoin address."
      ],
      "detail": [
        "Arguments:",
        "1. \"fromaccount\"       (string, required) The name of the account to send funds from. May be the default account using \"\".",
        "                       Specifying an account does not influence coin selection, but it does associate the newly created",
        "                       transaction with the account, so the account's balance computation and transaction history can reflect",
        "                       the spend.",
        "2. \"toaddress\"         (string, required) The bitcoin address to send funds to.",
        "3. amount                (numeric or string, required) The amount in BTC (transaction fee is added on top).",
        "4. minconf               (numeric, optional, default=1) Only use funds with at least this many confirmations.",
        "5. \"comment\"           (string, optional) A comment used to store what the transaction is for. ",
        "                                     This is not part of the transaction, just kept in your wallet.",
        "6. \"comment_to\"        (string, optional) An optional comment to store the name of the person or organization ",
        "                                     to which you're sending the transaction. This is not part of the transaction, ",
        "                                     it is just kept in your wallet.",
        "",
        "Result:",
        "\"txid\"                 (string) The transaction id.",
        "",
        "Examples:",
        "",
        "Send 0.01 BTC from the default account to the address, must have at least 1 confirmation",
        "> bitcoin-cli sendfrom \"\" \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\" 0.01",
        "",
        "Send 0.01 from the tabby account to the given address, funds must have at least 6 confirmations",
        "> bitcoin-cli sendfrom \"tabby\" \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\" 0.01 6 \"donation\" \"seans outpost\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"sendfrom\", \"params\": [\"tabby\", \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\", 0.01, 6, \"donation\", \"seans outpost\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "sendfrom \"fromaccount\" \"toaddress\" amount ( minconf \"comment\" \"comment_to\" )"
    },
    "sendmany": {
      "description": [
        "Send multiple times. Amounts are double-precision floating point numbers."
      ],
      "detail": [
        "Arguments:",
        "1. \"fromaccount\"         (string, required) DEPRECATED. The account to send the funds from. Should be \"\" for the default account",
        "2. \"amounts\"             (string, required) A json object with addresses and amounts",
        "    {",
        "      \"address\":amount   (numeric or string) The bitcoin address is the key, the numeric amount (can be string) in BTC is the value",
        "      ,...",
        "    }",
        "3. minconf                 (numeric, optional, default=1) Only use the balance confirmed at least this many times.",
        "4. \"comment\"             (string, optional) A comment",
        "5. subtractfeefrom         (array, optional) A json array with addresses.",
        "                           The fee will be equally deducted from the amount of each selected address.",
        "                           Those recipients will receive less bitcoins than you enter in their corresponding amount field.",
        "                           If no addresses are specified here, the sender pays the fee.",
        "    [",
        "      \"address\"          (string) Subtract fee from this address",
        "      ,...",
        "    ]",
        "6. replaceable            (boolean, optional) Allow this transaction to be replaced by a transaction with higher fees via BIP 125",
        "7. conf_target            (numeric, optional) Confirmation target (in blocks)",
        "8. \"estimate_mode\"      (string, optional, default=UNSET) The fee estimate mode, must be one of:",
        "       \"UNSET\"",
        "       \"ECONOMICAL\"",
        "       \"CONSERVATIVE\"",
        "",
        "Result:",
        "\"txid\"                   (string) The transaction id for the send. Only 1 transaction is created regardless of ",
        "                                    the number of addresses.",
        "",
        "Examples:",
        "",
        "Send two amounts to two different addresses:",
        "> bitcoin-cli sendmany \"\" \"{\\\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\\\":0.01,\\\"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz\\\":0.02}\"",
        "",
        "Send two amounts to two different addresses setting the confirmation and comment:",
        "> bitcoin-cli sendmany \"\" \"{\\\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\\\":0.01,\\\"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz\\\":0.02}\" 6 \"testing\"",
        "",
        "Send two amounts to two different addresses, subtract fee from amount:",
        "> bitcoin-cli sendmany \"\" \"{\\\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\\\":0.01,\\\"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz\\\":0.02}\" 1 \"\" \"[\\\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\\\",\\\"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz\\\"]\"",
        "",
        "As a json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"sendmany\", \"params\": [\"\", {\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\":0.01,\"1353tsE8YMTA4EuV7dgUXGjNFf9KpVvKHz\":0.02}, 6, \"testing\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "sendmany \"fromaccount\" {\"address\":amount,...} ( minconf \"comment\" [\"address\",...] replaceable conf_target \"estimate_mode\")"
    },
    "sendtoaddress": {
      "description": [
        "Send an amount to a given address."
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"            (string, required) The bitcoin address to send to.",
        "2. \"amount\"             (numeric or string, required) The amount in BTC to send. eg 0.1",
        "3. \"comment\"            (string, optional) A comment used to store what the transaction is for. ",
        "                             This is not part of the transaction, just kept in your wallet.",
        "4. \"comment_to\"         (string, optional) A comment to store the name of the person or organization ",
        "                             to which you're sending the transaction. This is not part of the ",
        "                             transaction, just kept in your wallet.",
        "5. subtractfeefromamount  (boolean, optional, default=false) The fee will be deducted from the amount being sent.",
        "                             The recipient will receive less bitcoins than you enter in the amount field.",
        "6. replaceable            (boolean, optional) Allow this transaction to be replaced by a transaction with higher fees via BIP 125",
        "7. conf_target            (numeric, optional) Confirmation target (in blocks)",
        "8. \"estimate_mode\"      (string, optional, default=UNSET) The fee estimate mode, must be one of:",
        "       \"UNSET\"",
        "       \"ECONOMICAL\"",
        "       \"CONSERVATIVE\"",
        "",
        "Result:",
        "\"txid\"                  (string) The transaction id.",
        "",
        "Examples:",
        "> bitcoin-cli sendtoaddress \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\" 0.1",
        "> bitcoin-cli sendtoaddress \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\" 0.1 \"donation\" \"seans outpost\"",
        "> bitcoin-cli sendtoaddress \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\" 0.1 \"\" \"\" true",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"sendtoaddress\", \"params\": [\"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\", 0.1, \"donation\", \"seans outpost\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "sendtoaddress \"address\" amount ( \"comment\" \"comment_to\" subtractfeefromamount replaceable conf_target \"estimate_mode\")"
    },
    "setaccount": {
      "description": [
        "DEPRECATED. Sets the account associated with the given address."
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"         (string, required) The bitcoin address to be associated with an account.",
        "2. \"account\"         (string, required) The account to assign the address to.",
        "",
        "Examples:",
        "> bitcoin-cli setaccount \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" \"tabby\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"setaccount\", \"params\": [\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\", \"tabby\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "setaccount \"address\" \"account\""
    },
    "settxfee": {
      "description": [
        "Set the transaction fee per kB. Overwrites the paytxfee parameter."
      ],
      "detail": [
        "Arguments:",
        "1. amount         (numeric or string, required) The transaction fee in BTC/kB",
        "",
        "Result",
        "true|false        (boolean) Returns true if successful",
        "",
        "Examples:",
        "> bitcoin-cli settxfee 0.00001",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"settxfee\", \"params\": [0.00001] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "settxfee amount"
    },
    "signmessage": {
      "description": [
        "Sign a message with the private key of an address"
      ],
      "detail": [
        "Arguments:",
        "1. \"address\"         (string, required) The bitcoin address to use for the private key.",
        "2. \"message\"         (string, required) The message to create a signature of.",
        "",
        "Result:",
        "\"signature\"          (string) The signature of the message encoded in base 64",
        "",
        "Examples:",
        "",
        "Unlock the wallet for 30 seconds",
        "> bitcoin-cli walletpassphrase \"mypassphrase\" 30",
        "",
        "Create the signature",
        "> bitcoin-cli signmessage \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" \"my message\"",
        "",
        "Verify the signature",
        "> bitcoin-cli verifymessage \"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\" \"signature\" \"my message\"",
        "",
        "As json rpc",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"signmessage\", \"params\": [\"1D1ZrZNe3JUo7ZycKEYQQiQAWd9y54F4XX\", \"my message\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "signmessage \"address\" \"message\""
    },
    "walletlock": {
      "description": [
        "Removes the wallet encryption key from memory, locking the wallet.",
        "After calling this method, you will need to call walletpassphrase again",
        "before being able to call any methods which require the wallet to be unlocked."
      ],
      "detail": [
        "Examples:",
        "",
        "Set the passphrase for 2 minutes to perform a transaction",
        "> bitcoin-cli walletpassphrase \"my pass phrase\" 120",
        "",
        "Perform a send (requires passphrase set)",
        "> bitcoin-cli sendtoaddress \"1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd\" 1.0",
        "",
        "Clear the passphrase since we are done before 2 minutes is up",
        "> bitcoin-cli walletlock ",
        "",
        "As json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"walletlock\", \"params\": [] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "walletlock"
    },
    "walletpassphrase": {
      "description": [
        "Stores the wallet decryption key in memory for 'timeout' seconds.",
        "This is needed prior to performing transactions related to private keys such as sending bitcoins"
      ],
      "detail": [
        "Arguments:",
        "1. \"passphrase\"     (string, required) The wallet passphrase",
        "2. timeout            (numeric, required) The time to keep the decryption key in seconds; capped at 100000000 (~3 years).",
        "",
        "Note:",
        "Issuing the walletpassphrase command while the wallet is already unlocked will set a new unlock",
        "time that overrides the old one.",
        "",
        "Examples:",
        "",
        "Unlock the wallet for 60 seconds",
        "> bitcoin-cli walletpassphrase \"my pass phrase\" 60",
        "",
        "Lock the wallet again (before 60 seconds)",
        "> bitcoin-cli walletlock ",
        "",
        "As json rpc call",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"walletpassphrase\", \"params\": [\"my pass phrase\", 60] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "walletpassphrase \"passphrase\" timeout"
    },
    "walletpassphrasechange": {
      "description": [
        "Changes the wallet passphrase from 'oldpassphrase' to 'newpassphrase'."
      ],
      "detail": [
        "Arguments:",
        "1. \"oldpassphrase\"      (string) The current passphrase",
        "2. \"newpassphrase\"      (string) The new passphrase",
        "",
        "Examples:",
        "> bitcoin-cli walletpassphrasechange \"old one\" \"new one\"",
        "> curl --user myusername --data-binary '{\"jsonrpc\": \"1.0\", \"id\":\"curltest\", \"method\": \"walletpassphrasechange\", \"params\": [\"old one\", \"new one\"] }' -H 'content-type: text/plain;' http://127.0.0.1:8332/",
        ""
      ],
      "signature": "walletpassphrasechange \"oldpassphrase\" \"newpassphrase\""
    }
  }
}