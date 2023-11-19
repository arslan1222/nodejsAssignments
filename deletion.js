// Here we will delete our existing file nodejs_archtecture.txt
const fs = require('fs');

const fileToDelete = 'nodejs_architecture.txt';

// Check if the file exists before attempting to delete
if (fs.existsSync(fileToDelete)) {
  // Delete our file
  fs.unlink(fileToDelete, (err) => {
    if (err) {
      console.error('Error deleting the file!', err);
    } else {
      console.log('File Deleted Successfully!');
    }
  });
} else {
  console.log('File does not exist. Nothing to delete!');
}
