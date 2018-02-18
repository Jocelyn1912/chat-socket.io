/* Función que captura los mensajes del lado del cliente*/
$(function() {
  var socket = io('http://34.227.11.223:3000'); // Conectando al servel para establecer conección con el chat grupal
  $('form').submit(function() {
    const text = $('#m').val();
    $('#m').val('');
    for (var i = 0; i < 1; i++) {
      if (text.length !== '') {
        $('#send').removeAttr('disabled');
        socket.emit('chat message', text);
        return false;
      } else {
        $('#send').attr('disabled', 'disabled');
      }
    }
  });
  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
});