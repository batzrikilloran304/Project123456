// This is a simple Node.js program that generates a random number between 1 and 10
const http = require('http');

http.createServer((req, res) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Random number: ' + randNum);
}).listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
