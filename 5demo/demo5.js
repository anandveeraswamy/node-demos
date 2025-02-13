const http = require('http');
const fs = require('fs'); 

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method; 
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html'); // this is required
        res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
                res.write('<body>');
                    res.write('<form action="/message" method="POST">'); // GET, POST, etc
                        res.write('<input type="text" name="message">'); // POST will send all the data within the form elements
                        res.write('<button type="submit">Send</button>');
                    res.write('</form>')
                res.write('</body>');
        res.write('</html>');
        return res.end(); // return is required otherwise the next code block below will be executed
    }
    
    if (url === '/message' && method === 'POST') {        
        fs.writeFileSync('message.txt', 'DUMMY'); 
        res.statusCode = 302; // code for redirection. 
        res.setHeader('Location', '/'); // url to redirect to
        return res.end();
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

server.listen(3001);

/*
Here we create and open a new file called message.txt and add placeholder content to it
We also redirect to the base '/' url
In the next version we will look at getting the content of the message field and entering that
into the message.txt file
*/



