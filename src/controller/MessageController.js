const MessageService = require('../service/MessageService');

module.exports.getMessages = (req, res) => {
    const messagesPayload = MessageService.getMessage();
    res.json({
        success: true,
        messages: messagesPayload,
    });
};

module.exports.postMessage = (req, res) => {
    MessageService.postMessage(req.body.message);

    res.json({
        success: true,
    });
};
