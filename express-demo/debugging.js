//we can download a package to enable and disable debugging
    // npm i debug
    //arbitrary name
const express = require('express');
const app = express();
const startUpDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
    startUpDebugger('Morgan enabled')
};

//DB work...

dbDebugger('connected to the database')