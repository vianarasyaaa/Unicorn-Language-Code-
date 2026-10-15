# JavaScript / Node.js interoperability

JavaScript uses garbage-collected objects and event-loop conventions. A UNICORN binding must define conversion of strings, buffers, numbers, promises, callbacks, exceptions, and asynchronous cancellation.

For a proposed Baileys integration, Node.js and the chosen Baileys package remain the actual WhatsApp connection layer unless UNICORN has a real binding that delegates to them. The language syntax alone does not implement WhatsApp Web protocol behavior or pairing.
