// Note: Quetion No.1 is the only creation of package.json file 


// Here we will add the information about nodeJS
const fs = require('fs');

// Information about Node.js architecture
const nodejsArchitectureInfo = `
Node.js is built on the V8 JavaScript engine, which is an open-source JavaScript engine developed by Google.
Node.js uses an event-driven, non-blocking I/O model that makes it efficient and lightweight for handling asynchronous operations.
It has a built-in module system and a rich ecosystem of third-party libraries available through npm (Node Package Manager).
Node.js allows developers to build scalable and high-performance network applications.
`;

// We create the 'nodejs_architecture.txt' file and write the information
fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
  if (err) {
    console.error('Error creating and writing to the file:', err);
  } else {
    console.log('Node.js architecture information has been added to nodejs_architecture.txt');
  }
});
