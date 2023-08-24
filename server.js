const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

const logEvents = require('./logEvents');
const EventEmitter = require('events');

class Emitter extends EventEmitter {}

//    TODO: init object   //

const emmiter = new Emitter();
const PORT = process.env.PORT || 3500;

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

/* emmiter.on('log', (message) => {
	logEvents(message);
});
emmiter.emit('log', 'log emitted');
 */
