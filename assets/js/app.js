$(document).ready(function () {
  var socket = io();

  $('#btn-new-user').click(function () {
    var username = $('#input-username').val();
    if(username) {
      $('#login-page').fadeOut();
      $('#chat-session').fadeIn();

    }
  })

  
})


// Sends a chat message
  function sendMessage () {
    var message = $('#msg').val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    // if there is a non-empty message and a socket connection
    if (message && connected) {
      $('#msg').val('');
      addChatMessage({
        username: username,
        message: message
      });
      // tell server to execute 'new message' and send along one parameter
      socket.emit('new message', message);
    }
  }

  function cleanInput (input) {
    return $('<div/>').text(input).html();
  }