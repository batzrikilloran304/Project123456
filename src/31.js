const https = require('https');

function fetch(url) {
  const req = https.get(url, (res) => {
    res.on("data", (chunk) => {
      console.log(`Received ${chunk.length} bytes`);
    });

    res.on("error", (e) => {
      console.error(`Failed to load ${url}:`, e);
    });
  }).on('error', (e) => {
    console.error('Error getting URL:', e);
  }).end();
}

fetch('https://raw.githubusercontent.com/your-username/project123456/master/data.txt');
