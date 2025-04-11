const http = require('http');

http.createServer((req, res) => {
  if(req.url === '/') {
    res.writeHead(200);
    res.end('<h1>Welcome to Project123456!</h1>');
  } else {
    res.writeHead(404);
    res.end('<h1>Page not found</h1>');
  }
}).listen(8080);
