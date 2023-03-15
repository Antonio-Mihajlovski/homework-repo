import http from "http"

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to my new server!</h1><p>This is the HTML u requested.</p>');
  } else if (req.url === '/student') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <h1>Student Information</h1>
      <p>Student name: Antonio</p>
      <p>Student lastname: Mihajlovski</p>
      <p>Academy: SEDC</p>
      <p>Subject: Basic nodeJs</p>
    `);
  } else {
    res.statusCode = 404;q
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
