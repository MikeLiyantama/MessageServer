module.exports.getMessage = () => {
    return global.cache.getElems();
};

module.exports.postMessage = message => {
    global.cache.addElem(message);
    global.socketio.emit('message', message);
};
