const EventEmitter = require('./event');

var url = 'http://mylogger.io/log';

//when we have a function in a class we call it a method in that class
//when the Logger class is extended, it will give all the properties in EventEmitter

class Logger extends EventEmitter {
    log(message) {
        console.log(message)
    
        //this.emit === emitter.emit because the properites were extended
        this.emit('messageLogged', {
            id: 1, 
            url: 'http://'
        });
    }
}

module.exports = Logger;