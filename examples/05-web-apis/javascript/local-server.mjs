// Minimal local HTTP server example using Node.js built-ins.
// This is a real JavaScript example, not UNICORN syntax.
import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'content-type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(404, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ error: { code: 'NOT_FOUND' } }));
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Example API listening on http://127.0.0.1:8080');
});

function shutdown() {
  server.close((error) => {
    if (error) process.exitCode = 1;
  });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
