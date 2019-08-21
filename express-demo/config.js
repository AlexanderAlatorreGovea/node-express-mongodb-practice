const config = require('config');
//Configuaration

//this will read the application config file and return the json object
console.log('application name' + config.get('name'));
    //returns application namemy express app - developement

console.log('Mail Server' + config.get('mail.host'));
    //returns Mail Serverdev-mail-server


//password
console.log('Mail Server' + config.get('mail.password'));
    //returns Mail Serverdev-mail-server