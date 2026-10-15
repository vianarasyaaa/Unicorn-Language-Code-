# Clipboard and geolocation capabilities

Clipboard and geolocation are sensitive browser capabilities. Access may require a secure context, permission, user gesture, or browser-specific policy. The exact permission behavior must be delegated to the host platform and surfaced to the application.

## Clipboard concept

```unicorn
#target "BROWSER"
clipboard::tulis_teks, :"Teks yang diminta pengguna", :result:
```

Do not copy secrets, tokens, or private data without clear user intent. Handle permission denial and unavailable capability.

## Geolocation concept

```unicorn
#target "BROWSER"
geo::minta_posisi, :options:, :position_result:
```

Location is sensitive personal data. Request it only when necessary, explain why, honor denial, and avoid logging raw coordinates unnecessarily. A browser permission prompt is not a substitute for an application privacy policy.
