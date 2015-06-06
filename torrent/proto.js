var Protocol = require('bittorrent-protocol')
var net = require('net')

net.createServer(function (socket) {
  var wire = new Protocol()
  socket.pipe(wire).pipe(socket)

  // handle handshake
  wire.on('handshake', function (infoHash, peerId) {
    wire.handshake(new Buffer('my info hash'), new Buffer('my peer id'))
  })

}).listen(6881)
