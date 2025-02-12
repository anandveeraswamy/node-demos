const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
})

server.listen(3003);

/*
url is just a slash, since the url here is anything that comes after 127.0.0.1/3001
Add /test to check the url again
The link below provides more detail on the HTTP headers
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
*/