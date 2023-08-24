const logEvents = require('../../logEvents');

const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter {}

//    TODO: init object   //

const emmiter = new EventEmitter();

//    TODO: add event listener  //

emmiter.on('log', (message) => {
	logEvents(message);
});

setTimeout(() => {
	emmiter.emit('log', 'log emitted');
}, 2000);
