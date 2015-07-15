var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

// app.get('/quiz', function(req, res){
//   res.sendFile('quiz.html');
// });

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
