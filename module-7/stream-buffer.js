
const EventEmitter = require('events');

const MyEventEmitter = new EventEmitter();

MyEventEmitter.on('birthday', () => {
    console.log('happy birth day to you');
});

MyEventEmitter.emit('birthday')