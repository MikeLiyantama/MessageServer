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
    if (!req.body.message) {
        res.status(400);
        res.json({
            success: false,
            message: 'Message is required',
        });
    } else {
        MessageService.postMessage(req.body.message);

        res.json({
            success: true,
        });
    }
};
