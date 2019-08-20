const http = require('http');

//createServer is an event emmiter
const server = http.createServer((req, res) => {
    //you can use localhost:2000 here
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    //you can use localhost:2000/api/courses here
    if(req.url = '/api/courses') {
        res.write(JSON.stringify([
            1, 2, 3
        ]));
        res.end();
    }
});


server.listen(2000);

console.log('listening on port 2000');