// Runnable Node.js built-in HTTP API example. No third-party packages required.
// Demo only: in-memory data resets on restart; add auth, persistence, logging, and tests for real deployment.
import { createServer } from 'node:http';

const host = '127.0.0.1';
const port = Number(process.env.PORT ?? 8080);
const MAX_BODY_BYTES = 64 * 1024;
const items = new Map([[1, { id: 1, name: 'Unicorn sample' }]]);
let nextId = 2;

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error('Request body too large');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (raw.length === 0) return {};
  const contentType = String(req.headers['content-type'] ?? '').toLowerCase();
  if (!contentType.includes('application/json')) {
    const error = new Error('Content-Type must be application/json');
    error.statusCode = 415;
    throw error;
  }
  try { return JSON.parse(raw); }
  catch {
    const error = new Error('Malformed JSON');
    error.statusCode = 400;
    throw error;
  }
}

function send(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body),
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  res.end(body);
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url ?? '/', `http://${req.headers.host ?? `${host}:${port}`}`);
    if (req.method === 'GET' && url.pathname === '/health') {
      return send(res, 200, { status: 'ok' });
    }
    if (req.method === 'GET' && url.pathname === '/v1/items') {
      return send(res, 200, { items: [...items.values()] });
    }

    const match = url.pathname.match(/^\/v1\/items\/(\d+)$/);
    if (match) {
      const id = Number(match[1]);
      if (!Number.isSafeInteger(id) || id < 1) return send(res, 422, { error: { code: 'INVALID_ID' } });
      if (req.method === 'GET') {
        const item = items.get(id);
        return item ? send(res, 200, item) : send(res, 404, { error: { code: 'NOT_FOUND' } });
      }
      if (req.method === 'PATCH') {
        const input = await readJson(req);
        if (typeof input.name !== 'string' || input.name.trim().length < 1 || input.name.length > 120) {
          return send(res, 422, { error: { code: 'INVALID_NAME' } });
        }
        const item = items.get(id);
        if (!item) return send(res, 404, { error: { code: 'NOT_FOUND' } });
        const updated = { ...item, name: input.name.trim() };
        items.set(id, updated);
        return send(res, 200, updated);
      }
      if (req.method === 'DELETE') {
        const didDelete = items.delete(id);
        return didDelete ? send(res, 200, { deleted: true, id }) : send(res, 404, { error: { code: 'NOT_FOUND' } });
      }
    }

    if (req.method === 'POST' && url.pathname === '/v1/items') {
      const input = await readJson(req);
      if (typeof input.name !== 'string' || input.name.trim().length < 1 || input.name.length > 120) {
        return send(res, 422, { error: { code: 'INVALID_NAME' } });
      }
      const item = { id: nextId++, name: input.name.trim() };
      items.set(item.id, item);
      return send(res, 201, item);
    }

    return send(res, 404, { error: { code: 'NOT_FOUND' } });
  } catch (error) {
    const status = Number.isInteger(error?.statusCode) ? error.statusCode : 500;
    return send(res, status, { error: { code: status === 500 ? 'INTERNAL_ERROR' : 'BAD_REQUEST' } });
  }
});

server.listen(port, host, () => {
  console.log(`Demo API listening at http://${host}:${port}`);
});

function shutdown() {
  server.close((error) => {
    if (error) process.exitCode = 1;
  });
}
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
