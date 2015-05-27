var Eth = require('node-ethereum')
var express = require("express")

var eth = new Eth();
var app = express();


eth.settings.rpc= { "ws": false, "xhr": true}

eth.start(function(){
  console.log("Ethereum has started");
 });



app.set('views', './views')
app.set('view engine', 'jade')
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'})
})

app.listen(3000)


