const fs = require('fs');
const path = require('path');
const http = require('http');

const contentText = fs.readFileSync(path.join(__dirname, 'me.html'), { encoding: 'utf8' });
const interval = 0;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  let i = 0;
  const ln = contentText.length;

  setTimeout(function fn() {
    res.write(contentText.charAt(i));
    i += 1;
    if (i >= ln) {
      return;
    }
    setTimeout(fn, interval);
  }, interval);
}).listen(8080);
