//we may want to enable certain features depending in the environment
const Joi = require('@hapi/joi');
const express = require('express');
const app = express();    
const morgan = require('morgan');
app.use(morgan('tiny'));


process.env.NODE_ENV

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
//or
app.get('env');
console.log(`app: ${app.get('env')}`)

//if the environment is develope run morgan and console.log it
    //if we set it to production it will not run the message morgan enabledd
if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    console.log('Morgan enabled')
}