# La Vida Verde — Gateway V2.1

Update of the approved V2.0 country-choice screen.

## Changes
- The exact-brand La Vida Verde wordmark is a separate scalable SVG derived from the original approved logo, used on desktop Arabic and both mobile languages.
- English is selected **by default**.
- Selected language is continuously highlighted **#d0d3ad** and underlined, on desktop and mobile.
- Hovering a language label highlights it, with a subtle 180ms transition.
- Selecting Arabic highlights العربية; selecting English highlights EN.
- Existing destination URLs, page art, layout, typography, country-choice CTA and base colours remain unchanged.

## Production files
- `lvv-wordmark.svg` — brand wordmark asset.
- `lvv-v2-1.css` — original V2 styles plus the narrowly scoped adjustments.
- `lvv-v2-1.js` — language logic, kept scoped to the gateway.
- `tilda-snippet.html` — complete T123 HTML code.

## Deploy
1. Open the existing country-selection page in Tilda (whichever page has the existing V2 T123 block).
2. Open the T123 block and **replace its entire existing contents** with `tilda-snippet.html`.
3. Save and publish **only that page**.
4. Check desktop English initial active state, desktop Arabic toggle, mobile English and Arabic.
5. Test both country links: `https://lavidaverde.ae/uae` and `https://lavidaverde.ae/egypt`.

Do not place this code in global HEAD. Do not replace the UAE or Egypt site pages. Keep V2.0 files for rollback.

### Rollback
Restore the previous T123 contents from `gateway/v2/tilda-snippet.html`, save and republish the same page.

**Note**: The only change not live until Tilda republish is switching the T123 embed from V2.0 to V2.1. Files in this folder are separate from the currently referenced V2.0 files.
