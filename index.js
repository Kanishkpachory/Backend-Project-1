const { createServer } = require('node:http');
const fs = require('fs').promises; // Using promises for fs
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Create and start the HTTP server
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('kesa h bhai');
});

// Start listening for incoming connections
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Define the path for the file
const filePath = path.join(__dirname, 'hey.txt');

// Check if directory exists and write content to a file
(async () => {
  try {
    // Ensure the directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    
    // Write the file
    await fs.writeFile(filePath, 'say hello to the file');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
})();
