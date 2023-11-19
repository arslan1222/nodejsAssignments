
const http = require('http');

// Port for listen server
const port = 3000;

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
