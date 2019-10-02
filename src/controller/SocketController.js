function SocketController(socket) {
    console.log('A user has joined');

    //Broadcast all received messages back to client
    socket.on('message', message => {
        global.io.emit('message', message);
    });
}

module.exports = SocketController;
