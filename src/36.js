const http = require('http');

const hostname = 'www.example.com';
const port = 80;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = `
      <!DOCTYPE html>
      <html>
        <body>
          <h1>Welcome to GitHub!</h1>
          <p>Learn more about GitHub at <a href="https://www.github.com">GitHub</a>.</p>
          <p>If you are new here, we recommend reading our <a href="/docs/guide/index.md">tutorial</a></p>
        </body>
      </html>`;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  } else {
    const response = `HTTP/1.1 ${req.method} ${hostname}:${port}\r\n`;
    req.on('data', chunk => response += chunk);
    req.on('end', () => {
      if (req.url === '/favicon.ico') {
        response += 'Rounded icon';
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(response);
    });
  }
});

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));
