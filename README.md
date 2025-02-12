const http = require('http'); // require is a keyword used to import modules. It takes a path to another file. Core modules do not require a path.
                              // ./ relative path   / absolute path
                              // no need to add .js at the end
                              // if you do not include a . or / then node will look for the global module named http in this case

function rqListener(req, res) {

}
const server = http.createServer((req,res) => {
    console.log(req);
});

server.listen(3000); // you can include a host name but for the local server it will be localhost or 127.0.0.1
// createServer needs a request listener function which will listen for requests.