// Here we will read the content of nodejs_architecture by this code 

const fs = require('fs');

// We will read the content of nodejs_architecture by this code
fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('Content of nodejs_architecture.txt:');
    console.log(data);
  }
});
