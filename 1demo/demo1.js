const http = require('http'); // require is a keyword used to import modules. It takes a path to another file. Core modules do not require a path.
// ./ relative path   / absolute path
// no need to add .js at the end
// if you do not include a . or / then node will look for the global module named http in this case
// const http - this can be anything but require('http') has to be http core module

// demo how this can be written outside and called inside createserver and how it can be moved inside 
function requestHandler(req,res) {
    console.log(req);
}

// createServer needs a request listener function which will listen for requests.
// the listener function can be function declaration 
//                           or annoynous function
//                           or arrow function
const server = http.createServer( (req, res) => {
    console.log(req);
});

// This makes the server listen for requests
server.listen(3000); // you can include a host name but for the local server it will be localhost or 127.0.0.1

/*
This is the simplest nodejs webserver program.
Point your browser to 127.0.0.1:3000
The browser will not show anything as we are not serving our any content yet
but you will be able to see the console output most of which will not make much sense 
which is fine
*/
