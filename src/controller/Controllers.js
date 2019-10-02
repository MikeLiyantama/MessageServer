/**
 * Routers
 */

const MessageController = require('./MessageController');

module.exports = app => {
    app.post('/message', MessageController.postMessage);
    app.get('/messages', MessageController.getMessages);
};
