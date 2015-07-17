var express = require('express');
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/views'));

var server = require('http').createServer(app);

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.get('/quiz', function(req, res){
  res.sendFile(__dirname + '/views/quiz.html');
});

app.get('/audio', function(req, res){
  res.sendFile(__dirname + '/views/audio.html');
});

app.get('/lyrics', function(req, res){
  res.sendFile(__dirname + '/views/lyrics.html');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;

