function SocketController(socket) {
    console.log('A user has joined');

    socket.on('message', message => {
        global.io.emit('message', message);
    });
}

module.exports = SocketController;
