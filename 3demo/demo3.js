const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req.url, req.method, req.headers);
    // The following sets the response header to 'text/html'
    res.setHeader('Content-Type', 'text/html'); 
    // Allows us to send a response to the client
    res.write('<html>'); 
    res.write('<head>');
    res.write('<title>This is my cool website</title>');
    res.write('</head>');
    res.write('<body><h1>Welcome to my website</h1></body>');
    res.write('</html>');
    res.end();
    //res.write(); // this line will result in an error since you cannot write after called res.end()
})

server.listen(3004);

// open the chrome developer tools and show the response and headers
// Express will make the process of sending html data a lot easier but 
// we have learnt to do this by writing the raw html code ourselves

