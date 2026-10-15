// Runnable with a modern Node.js runtime. Public demo API only.
const payload = { title: 'UNICORN API sample', body: 'Test payload only', userId: 1 };
const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(5000),
});

const bodyText = await response.text();
if (!response.ok) {
  throw new Error(`HTTP ${response.status}: ${bodyText.slice(0, 500)}`);
}
let data;
try { data = JSON.parse(bodyText); }
catch { throw new TypeError('Response was not valid JSON'); }
console.log(data);
