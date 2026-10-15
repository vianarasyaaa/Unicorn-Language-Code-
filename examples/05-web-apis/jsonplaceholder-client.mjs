/**
 * Real JavaScript reference example for the Fetch API.
 * Requires a modern Node.js environment with global fetch.
 * JSONPlaceholder is a public mock service; writes are simulated, not persistent.
 * Do not put secrets or private data in this example.
 */

const BASE_URL = "https://jsonplaceholder.typicode.com";
const TOTAL_TIMEOUT_MS = 8_000;
const MAX_RESPONSE_BYTES = 1_048_576;

async function requestJson(path, { method = "GET", body, headers = {} } = {}) {
  const url = new URL(path, BASE_URL);
  if (url.origin !== BASE_URL) {
    throw new Error("Refusing a URL outside the configured API origin");
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TOTAL_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        ...(body === undefined ? {} : { "Content-Type": "application/json" }),
        ...headers,
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: controller.signal,
      redirect: "error",
    });

    const contentLength = response.headers.get("content-length");
    if (contentLength !== null && Number(contentLength) > MAX_RESPONSE_BYTES) {
      throw new Error("Response exceeds configured byte limit");
    }

    // Stream the body and stop as soon as the limit is exceeded, rather than
    // buffering an arbitrarily large response before checking its length.
    const reader = response.body?.getReader();
    if (!reader) return null;
    const chunks = [];
    let totalBytes = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        totalBytes += value.byteLength;
        if (totalBytes > MAX_RESPONSE_BYTES) {
          await reader.cancel();
          throw new Error("Response exceeds configured byte limit");
        }
        chunks.push(value);
      }
    } catch (error) {
      try { await reader.cancel(); } catch { /* Body may already be closed. */ }
      throw error;
    }
    const bytes = new Uint8Array(totalBytes);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }

    const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${text.slice(0, 300)}`);
    }
    if (response.status === 204 || text.length === 0) return null;

    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().includes("application/json")) {
      throw new Error(`Expected JSON, received ${contentType || "unknown content type"}`);
    }
    return JSON.parse(text);
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const post = await requestJson("/posts/1");
  console.log("GET /posts/1:", { id: post.id, title: post.title });

  const created = await requestJson("/posts", {
    method: "POST",
    body: { title: "UNICORN Ω example", body: "Demo only", userId: 1 },
  });
  console.log("POST /posts (simulated):", created);

  const patched = await requestJson("/posts/1", {
    method: "PATCH",
    body: { title: "Updated demo title" },
  });
  console.log("PATCH /posts/1 (simulated):", patched);

  await requestJson("/posts/1", { method: "DELETE" });
  console.log("DELETE /posts/1 (simulated): completed");
}

main().catch((error) => {
  const reason = error?.name === "AbortError" ? "request timed out" : (error?.message ?? "unknown error");
  console.error("API demo failed:", reason);
  process.exitCode = 1;
});
