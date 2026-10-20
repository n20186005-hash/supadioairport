# Independent Supadio guide

Indonesian and English visitor information about Supadio Airport (PNK/WIOO), Limbung, Sungai Raya, Kubu Raya, West Kalimantan. This site is not the airport operator, airline or government and provides no flight-status feed or booking service.

## Validation and delivery

Use Node 24.19.0 and pnpm 11.22.0. Run `pnpm install --frozen-lockfile`, `pnpm check` and `pnpm build`. The verified Worker name is `supadioairport`. The ASSETS Worker enforces HTTPS/apex redirects while preserving path/query, and adds noindex to missing-page responses. Rebuild generated assets with source changes.

## Public sources

- https://hubud.kemenhub.go.id/bandara/123 — regulator identity, codes, operator and locality. Its profile address differs from Maps wording; the visitor pages disclose both. Technical ARP and visitor map pin must not be conflated.
- https://www.setneg.go.id/baca/index/resmikan_terminal_baru_bandara_supadio_presiden_minta_pelayanan_penumpang_ditingkatkan — terminal inauguration, 28 December 2017, historical context.
- https://tni-au.mil.id/tentang-kami/profilsatuan-detail/lanud-supadio/1108 — air-base history, distinct from permission for civil or military access.
- https://maps.app.goo.gl/tPiTuQvcWjzH4WDTA — dated third-party location snapshot; no listed hours, telephone or operator website.

No recurring hours, live route availability, current fares, free terminal access or facility operation is guaranteed. Photograph credits and licence links are visible beside the images. Optional analytics defaults off; a tab-session refusal overrides old permanent permission when a preference write fails. Native language links do not store language preferences. No contact/email, account or booking interface is provided.

Local source, artifact and HTTP checks do not establish production visual acceptance.
