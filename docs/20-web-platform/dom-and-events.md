# DOM and browser events

A DOM binding, if implemented, would let a browser-targeted UNICORN module query nodes, listen to events, and update document content. The API should remain unavailable in non-browser targets unless a DOM host is explicitly embedded.

## Proposed conceptual example

```unicorn
#target "BROWSER"

browser::dom_element, :"#greeting", :node:
event::listen, :node:, :"click", :on_click:
ungsi::buat, :"on_click"
    dom::text_set, :node:, :"Halo dari UNICORN Ω!"
:selesai
```

The handler capture/closure syntax is intentionally not finalized. A real DOM binding should define event listener lifetime, cancellation, thread/context restrictions, and output escaping.

## Safety

- Prefer text-node APIs over interpreting untrusted strings as HTML.
- Avoid unsafe HTML injection with untrusted data.
- Remove listeners when the owning component is disposed.
- Do not assume a node exists; handle null/missing elements explicitly.
