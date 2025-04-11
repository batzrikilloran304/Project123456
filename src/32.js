const fs = require('fs');

console.log(fs.readFileSync('/path/to/file.txt', 'utf8').trim());
