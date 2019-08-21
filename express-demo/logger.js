///this is the module that will be exported
function log(req, res, next) {
    console.log('logging'); //req.body
    next(); ///next is the next middleware function that can be used
};

module.exports = log;

///pretend that this is index.js
    //we have to store the module in a constant
    const logger = require('./logger');
    //first we call the middleware
    app.use(express.json());
    //then we can call the middleware function from this logger module
    app.use(logger);