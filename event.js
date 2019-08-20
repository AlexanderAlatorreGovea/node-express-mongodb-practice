//events in node.js
    //classes respond to different eventsd
    //EventEmitter uppercase because it is a class
const EventEmitter = require('events');
const emitter = new EventEmitter();

///Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
    //arg = { id: 1, url: 'http://' }
    ///this event will emit the object below { id: 1, url: 'http://' }
})

//we use either emit(), to make a noise and we signal that an event has happened
//raised an event but did not call a listener
//the object is the event argument
emitter.emit('messageLogged', {
    id: 1, 
    url: 'http://'
});
