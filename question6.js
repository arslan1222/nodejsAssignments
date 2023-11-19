const os = require('os');

// Our operating system name
const osName = os.type();
// our operating system release version
const osRelease = os.release();
// our operating system information
console.log(`operating system name: ${osName}`);
console.log(`operating system release: ${osRelease}`);
