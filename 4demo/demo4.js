const http = require('http');

const server = http.createServer( (req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html'); // this is required
        res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
                res.write('<body>');
                    res.write('<form action="/message" method="POST">'); // GET, POST,
                        res.write('<input type="text" name="message">'); // POST will send all the data within the form elements
                        res.write('<button type="submit">Send</button>');
                    res.write('</form>')
                res.write('</body>');
        res.write('</html>');
        return res.end(); // return is required otherwise the next code block below will be executed
    }
    
    res.setHeader('Content-Type', 'text/html');     
    res.write('<html>'); 
    res.write('<head>');
    res.write('<title>This is my cool website</title>');
    res.write('</head>');
    res.write('<body><h1>Welcome to my website</h1></body>');
    res.write('</html>');
    res.end();
    //res.write(); // this line will result in an error since you cannot write after called res.end()
})

server.listen(3008);

/*
This will display a form. You can submit it which will take you to /message

Show what happens when you type /anything on the address bar
*/



