//1 new module
//these are only scoped in this module so we can export it out
//under the hood this is what node runs with every functions
    //module wrapper function: function(exports, require, module, __filename, __dirname) {}



//function (exports, require, module, __filename, __dirname) {
  //  const url = 'http://mylogger.io/log';

    //function log(message) {
        //send an HTPP request
        console.log(message)
    //}

    //exporting the modules

    //module.exports.log = log;
    //module.export.url = url;
//}

///2 we can export a single function by doing this 
const EventEmitter = require('emmiters');
const emitter = new EventEmitter();

var url = 'http://mylogger.io/log';

function log(message) {
    //send an HTPP request
    console.log(message)

    emitter.emit('messageLogged', {
        id: 1, 
        url: 'http://'
    });
}

//exporting the modules

module.exports = log;
//module.export.url = url;

