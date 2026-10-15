// Runnable in a modern Node.js with fetch, or in a compatible browser context.
// Requires internet access. Uses a public demo API; do not send secrets here.
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const controller = new AbortController();
const timeoutMs = 5000;
const timer = setTimeout(() => controller.abort(), timeoutMs);

try {
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().includes('application/json')) {
    throw new TypeError(`Unexpected content type: ${contentType}`);
  }
  const post = await response.json();
  if (!post || typeof post.id !== 'number' || typeof post.title !== 'string') {
    throw new TypeError('Response schema mismatch');
  }
  console.log({ id: post.id, title: post.title });
} catch (error) {
  if (error?.name === 'AbortError') {
    console.error(`Request timed out after ${timeoutMs}ms`);
  } else {
    console.error('API request failed:', error instanceof Error ? error.message : 'Unknown error');
    process.exitCode = 1;
  }
} finally {
  clearTimeout(timer);
}
