
const http = require('http');
const client = require('prom-client');
client.collectDefaultMetrics();

const PORT = process.env.PORT || 80;
const server = http.createServer((req, res) => {
  if (req.url === '/metrics') {
    res.writeHead(200, { 'Content-Type': client.register.contentType });
    res.end(client.register.metrics());
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🚀 DoorFeed App Running with Metrics!');
  }
});
server.listen(PORT);
