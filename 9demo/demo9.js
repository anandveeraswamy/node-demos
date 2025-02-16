const http = require('http');
const routes = require('./routes')

const server = http.createServer(routes)

server.listen(3005);

/*
Our application although small is getting monolithic doing too many things
This version moves the routes logic to another file routes.js
We export the request handler function from routes.js
and import it into the main (root) file
In the future, and in your assignment we will see further separation of concerns
*/



