let fs = require('fs');
fs.readFile('./index.js', 'utf8', function(error, data) {
  if (error) throw error;
  console.log(data);
});
