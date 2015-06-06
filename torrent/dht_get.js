var WebTorrent = require('webtorrent')
var client = new WebTorrent()
var hash = 'eb3824fd4bdf920954abe17e61588a54d2ed0558'



/*
client.add(hash, function (torrent) {
    console.log('Torrent info hash:', torrent.infoHash)
    var file = torrent.files[0]
    file.createReadStream().pipe(process.stdout)
})

*/

var DHT    = require('bittorrent-dht')
//var magnet = require('magnet-uri')

//var uri = 'magnet:?xt=urn:btih:e3811b9539cacff680e418124272177c47477157'
//var parsed = magnet(uri)

//console.log(parsed.infoHash) // 'e3811b9539cacff680e418124272177c47477157'

var dht = new DHT()

dht.listen(20001, function () {
  console.log('now listening')
})

dht.on('ready', function () {
  // DHT is ready to use (i.e. the routing table contains at least K nodes, discovered
  // via the bootstrap nodes)
   console.log("dht  readyn")
  // find peers for the given torrent info hash
  dht.lookup(hash)
})

dht.on('peer', function (addr, hash, from) {
  console.log('found potential peer ' + addr + ' through ' + from)
})


