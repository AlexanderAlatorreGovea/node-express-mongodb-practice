//function sayHello(name) {
  //  console.log('Hello' + name)
//}

//sayHello('Mosh');

//console.log(module)

//import a module 

//2
    const logger = require('./logger.js');

    logger.log('message')

    console.log(logger)

//3 we can run the function since we didn't export a const by doing this
    //this one and the one on top will be the same
    const log = require('./logger');

    log('message')
