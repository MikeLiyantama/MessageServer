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

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

require('./controller/Controllers')(app);

io.on('connection', SocketController);

http.listen(3000, () => {
    console.log('Server start at port 3000');
});
