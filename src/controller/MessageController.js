const MessageService = require('../service/MessageService');

/**
 * Controller for GET /messages
 */
module.exports.getMessages = (req, res) => {
    const messagesPayload = MessageService.getMessage();
    res.json({
        success: true,
        messages: messagesPayload,
    });
};

/**
 * Controller for POST /messages
 */
module.exports.postMessage = (req, res) => {
    MessageService.postMessage(req.body.message);

    res.json({
        success: true,
    });
};
