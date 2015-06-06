var bencode = require('bencode')
var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')
var fs = require('fs');

module.exports = function () {

  inherits(ut_messanger, EventEmitter)

  function ut_messanger (wire) {
    var self = this
    EventEmitter.call(self)

    self._wire = wire
  }

  ut_messanger.prototype.name = 'ut_messanger'

  ut_messanger.prototype.onExtendedHandshake = function (handshake) {
    var self = this
    if (!handshake.m || !handshake.m.ut_messanger) {
      return self.emit('warning', new Error('Peer does not support ut_messanger'))
    }
    if (!self.handshook) {
      self.emit('handshake')
      self.handshook = true
    }
  }

  ut_messanger.prototype.ask = function(sha1) {
    var self = this
    var message = {sha: sha1}
    self._sendMessage(message)
  }

  ut_messanger.prototype.sendTorrent = function (infoHash) {
    var self = this
    var message = {infoHash: infoHash}
    self._sendMessage(message)
  }

  ut_messanger.prototype.onMessage = function (buf) {
    var self = this
    var message

    var dict = bencode.decode(buf.toString())

    if (dict.gittorrent.sha) {
      var sha = dict.gittorrent.sha.toString()
      self.emit('generatePack', sha)
      return
    }

    if (dict.gittorrent.infoHash) {
      self.emit('receivedTorrent', dict.gittorrent.infoHash.toString())
      return
    }
  }

  ut_messanger.prototype._sendMessage = function (message) {
    var self = this
    self._wire.extended('ut_messanger', {
      'gittorrent': message
    })
  }

  return ut_messanger
}
