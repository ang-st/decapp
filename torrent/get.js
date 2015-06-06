var WebTorrent = require('webtorrent')

var client = new WebTorrent()
//var magnetUri = 'magnet:?xt=urn:btih:e39bbbc957ad96f2aeec44042033e6674c2348d2&dn=FOo&tr=udp%3A%2F%2Ftetalab.org%3A21223'
var magnetUri = 'magnet:?xt=urn:btih:e39bbbc957ad96f2aeec44042033e6674c2348d2&tr=http%3A%2F%2Ftetalab.org%3A21223'

client.add(magnetUri, function (torrent) {
  console.log('Torrent info hash:', torrent.infoHash)
   var file = torrent.files[0]
   torrent.files.forEach(function (file) {
    console.log("File ------------->", file.name)
   })
   
})
