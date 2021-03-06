const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const Cache = require('./util/cache');
var SocketController = require('./controller/SocketController');

var cache = new Cache();
global.cache = cache;
global.socketio = io;

//Disable logging on test environment
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(cors());

//Init routers (Controller)
require('./controller/Controllers')(app);

//Init Socket.io
io.on('connection', SocketController);

const server = http.listen(3000, () => {
    console.log('Server start at port 3000');
});

module.exports = app;
module.exports.server = server;
