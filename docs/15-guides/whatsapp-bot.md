# Guide proposal: WhatsApp bot with UNICORN Ω

This guide describes a future integration architecture, not an executable bot shipped in this archive.

## Proposed layers
1. UNICORN source expresses bot behavior.
2. UNICORN runtime and Node.js binding expose async/event APIs.
3. Baileys handles WhatsApp Web connection/session/message transport.
4. Application layer handles commands and business rules.
5. Database adapter stores history and state.
6. Optional AI adapter processes user text under explicit privacy and cost controls.

## Requirements
- Pin and verify a supported Baileys package/version.
- Use the package's documented authentication and pairing flow.
- Persist session credentials securely.
- Reconnect with bounded backoff and avoid reconnect storms.
- Deduplicate/reconcile message events where needed.
- Enforce rate limits and queue bounds.
- Handle media size limits and validate inputs.
- Store only needed conversation data, with access controls and retention policy.
- Test disconnections, malformed events, storage outages, and duplicate messages.

## Surface sketch
```unicorn
#program "UNICORN_WA"
#language "HYBRID"
#level "HIGH"

bot::buat, :"Rasya"
bot::gunakan, :"BAILEYS_BINDING"
whatsapp::saat_pesan, :pesan:
    percakapan::proses, :pesan:, :jawaban:
    whatsapp::balas, :pesan:, :jawaban:
:selesai
:akhir
```

This code requires a real `BAILEYS_BINDING`, message event API, database/runtime implementations, and correct authentication logic. It is not a pairing-code implementation by itself.
