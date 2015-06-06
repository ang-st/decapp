var createTorrent = require('create-torrent')
var parseTorrent= require("parse-torrent")
var magnet = require('magnet-uri')
var fs = require('fs')

createTorrent('seed/app1', { announce : "udp://tetalab.org:21223"}, function (err, torrent) {
  if (!err) {
    // `torrent` is a Buffer with the contents of the new .torrent file
    fs.writeFile('my.torrent', torrent)
    var t = parseTorrent(torrent) 
    var m =  magnet.encode ({infoHash : t.infoHash, announce:t.announce  })
    console.log (t.announce, t.infoHash)
    console.log (m)

}
})


