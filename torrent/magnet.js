var magnet = require('magnet-uri')
var link = magnet.encode( {name : 'FOo', infoHash : "e39bbbc957ad96f2aeec44042033e6674c2348d2", "announce": [ "udp://tetalab.org:21223" ]} )
console.log(link)
