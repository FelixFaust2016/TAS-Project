import openSocket from 'socket.io-client';
const socket = openSocket('http://172.31.2.175:8080');

function privateMessenger(message, cb) {

  socket.emit('privatemessage', message, (response) => {
    cb(response);
  });
}
export { privateMessenger, socket };