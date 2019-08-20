//console.log(__dirname) = /Users/test/second-app
//console.log(__filename) = /Users/test/second-app/path_modules.js
//console.log(dir)
const path = require('path');

const pathObj = path.parse(__filename);

//console.log(pathObj);