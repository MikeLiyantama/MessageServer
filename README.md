# MessageServer
A simple messaging API. Written in Node.js

### Summary
A simple messaging API using Express and Socket.io, written in Node.js

### Installation
To install this app, clone the repository and install the dependencies
```
$ git clone git://github.com/MikeLiyantama/MessageServer.git
$ npm install
$ npm run
```
1. Clone this repository
2. In project root, run `npm install`
3. To start server, run `npm start`

### Tests
To run the sample tests, install the dev dependencies then run `npm test`
```
$ npm install
$ npm run
```
### Endpoints
1. GET /messages - Get all sent messages
...Example Response:
```
{
    "success": true,
    "messages" : [
        "hi",
        "hello",
        ....
    ]
}
```
2. POST /message - Send a new messages
...Payload type: JSON
...Example payload:
```
{
    "message": "Hello World!"
}
```
...Example Response:
```
{
    "success" : true
}

```
3. Socket.io connection (Requires Socket.io client) -- Retrieve all messages in real-time
