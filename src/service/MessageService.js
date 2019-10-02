/**
 * Message service module
 */

module.exports.getMessage = () => {
    return global.cache.getElems();
};

module.exports.postMessage = message => {
    //Store message in cache and emit the message in socket.io instance
    global.cache.addElem(message);
    global.socketio.emit('message', message);
};
