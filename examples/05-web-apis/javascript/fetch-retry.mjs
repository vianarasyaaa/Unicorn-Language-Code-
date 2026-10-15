// Bounded exponential backoff for idempotent GET. Demonstration only.
const URL = 'https://jsonplaceholder.typicode.com/posts/1';
const MAX_ATTEMPTS = 3;
const BASE_DELAY_MS = 250;
const RETRYABLE_STATUS = new Set([408, 429, 500, 502, 503, 504]);

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function getWithRetry() {
  let lastError;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    let response;
    try {
      response = await fetch(URL, { signal: AbortSignal.timeout(4000) });
    } catch (error) {
      lastError = error;
      if (attempt === MAX_ATTEMPTS - 1) break;
      await sleep(Math.random() * Math.min(2000, BASE_DELAY_MS * (2 ** attempt)));
      continue;
    }

    if (response.ok) return await response.json();
    if (!RETRYABLE_STATUS.has(response.status) || attempt === MAX_ATTEMPTS - 1) {
      throw new Error(`Non-retryable or exhausted HTTP status ${response.status}`);
    }

    const retryAfter = Number(response.headers.get('retry-after'));
    const backoff = Math.min(2000, BASE_DELAY_MS * (2 ** attempt));
    const delay = Number.isFinite(retryAfter) && retryAfter > 0
      ? Math.min(5000, retryAfter * 1000)
      : Math.random() * backoff;
    await sleep(delay);
  }
  throw lastError ?? new Error('Request failed');
}

console.log(await getWithRetry());
