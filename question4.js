// Here we will append the additional data to 'nodejs_architecture.txt'

const fs = require('fs');

// Additional data to append
const additionalData = `
Additional Advantages:

6. Scalability: Node.js is highly scalable, making it suitable for applications with varying workloads.
7. Real-Time Applications: It is ideal for real-time applications such as chat applications and online gaming.
8. Cross-Platform: Node.js is cross-platform and can run on various operating systems.
`;

fs.appendFile('nodejs_architecture.txt', additionalData, (err) => {
  if (err) {
    console.error('Error appending data to the file:', err);
  } else {
    console.log('Additional data has been appended to nodejs_architecture.txt');
  }
});

