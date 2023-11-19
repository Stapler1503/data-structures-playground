import * as http from 'http';

export const runServer = (callback: Function) => {
  const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});
const port = 3000;
const hostname = "0.0.0.0"
server.listen(port, hostname, callback());
}
