var WebTorrent = require('webtorrent')
var fs =  require("fs")
var parseTorrent = require('parse-torrent')
var client = new WebTorrent()


var torrent = fs.readFileSync("my.torrent")
var file = ["seed/app1"]


//var file = parseTorrent(torrent)

client.seed(file, { announce : "udp://tetalab.org:21223"},  function onTorrent (torrent) {
            // Client is seeding the file!
            console.log('-------------------->Torrent info hash:', torrent.infoHash)
})


