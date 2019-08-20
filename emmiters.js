const EventEmitter = require('./event');

const Logger = require('./logger');
const logger = new Logger();

emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg)
});

logger.log('message')