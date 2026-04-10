const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req, 'req');
});

const port = 5000
server.listen(port, () => {
    console.log("server is now listening to port 3000");
});