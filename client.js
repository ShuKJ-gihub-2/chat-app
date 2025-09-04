const socket = io();

function sendMessage() {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;
  if (username && message) {
    socket.emit('chat message', { username, message });
    document.getElementById('message').value = '';
  }
}

socket.on('chat message', data => {
  const msgBox = document.getElementById('messages');
  const msg = document.createElement('div');
  msg.textContent = `${data.username}: ${data.message}`;
  msgBox.appendChild(msg);
  msgBox.scrollTop = msgBox.scrollHeight;
});
