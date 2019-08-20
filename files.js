const fs = require('fs');
//readdir, this returns all the files in the current app
    //all async methos need to be called by a call back method
    //err is the error
    //files is the resolve function that executes if the function is successful
const files = fs.readdir('./', (err, files) => {
    if (err) console.log('Error', err);
    else console.log('Result', files)
});

console.log(files);
