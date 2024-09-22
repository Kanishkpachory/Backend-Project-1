const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('kesa h bhai  ');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fs = require('fs');

fs.writeFile("hey.txt","say hello ti the file", function(err){
    if(err){
        console.error(err);
    }
    else{
        console.log("done");
    }
})