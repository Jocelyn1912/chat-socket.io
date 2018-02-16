// Inicializando express para controlar funciones del servidor
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// '/' controlador de rutas para el sitio web
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html'); //Pasando el HTML
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
     io.emit('chat message', msg);
  });
});

// Haciendo que el servidor mire al puerto
http.listen(3000, function(){
  console.log('listening on *:3000');
});