var socket = new WebSocket("ws://obscure-waters-98157.herokuapp.com");

socket.onerror = function(error) {
  console.log('WebSocket Error ' + error);
};

socket.onmessage = function(e) {
  console.log('Server: ' + e.data);
};

function sendMessage() {
  var form = document.getElementById("form").value;
  socket.send(form);
}

window.console = {
  log: function(str) {
    var node = document.createElement("div");
    node.appendChild(document.createTextNode(str));
    document.getElementById("messages").appendChild(node);
  }
}