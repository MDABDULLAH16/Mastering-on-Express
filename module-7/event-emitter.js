
const EventEmitter = require('events');

const MyEventEmitter = new EventEmitter();

MyEventEmitter.on('birthday', () => {
    console.log('happy birth day to you');
});
MyEventEmitter.on('birthday',(gift)=> {
    console.log(`I will sent you a ${gift}`)
})

MyEventEmitter.emit('birthday','watch')