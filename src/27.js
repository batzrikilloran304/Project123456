let fs = require('fs');
let path = require('path');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${filePath}`);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file: ${filePath}`);
        reject(err);
      } else {
        resolve(`File ${filePath} has been written`);
      }
    });
  });
}

function main() {
  try {
    const filePath = path.join(__dirname, 'data.txt');
    readFile(filePath)
      .then(data => {
        writeFile(filePath, data);
      })
      .catch(err => console.error('An error occurred while reading or writing the file:', err));
  } catch (err) {
    console.error(`Error in main function: ${err.message}`);
  }
}

main();
