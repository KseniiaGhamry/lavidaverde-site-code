# La Vida Verde — Approved Editable Country Gateway V3.0

This version replaces the baked-in copy and controls in the V2 image with real HTML elements. The image is solely the interior photograph + the approved olive overlay.

## Files
- `gateway.css` — desktop and mobile styling, scoped to `.lvvg3`.
- `gateway.js` — language toggle, restoring English from live HTML rather than hard-coding strings.
- `tilda-snippet.html` — complete HTML to insert in **one page's T123 block**, not global site settings.
- `background-photo.webp` — **must be uploaded to this folder before deploying**.
- `logo-wordmark.png` — **must be uploaded to this folder before deploying**.

Both image files are supplied in `La_Vida_Verde_V3_Editable_Approved_Ready.zip`.

## Safe deployment
1. Upload `background-photo.webp` and `logo-wordmark.png` to this same GitHub folder (`gateway/v3`) using **Add file > Upload files > Commit changes**.
2. Verify images load directly:
   - https://kseniiaghamry.github.io/lavidaverde-site-code/gateway/v3/background-photo.webp
   - https://kseniiaghamry.github.io/lavidaverde-site-code/gateway/v3/logo-wordmark.png
3. In Tilda, open the existing country-selection page (currently `lavidaverde.ae`, previously `/choose-country`).
4. Replace the full contents of that page's **T123** block with `tilda-snippet.html`; save and publish **only this page**.
5. Test EN default highlight, Arabic toggle, display on mobile and desktop, links to `/uae` and `/egypt`, and the visibly editable heading.
6. Do **not** change site-wide HEAD and do **not** touch the /uae or /egypt site pages.

## Text editing in Tilda
English headline is the real visible HTML heading:
`<h1 class="lvvg3__heading" data-ar="نباتات اصطناعية مصممة خصيصًا">Premium artificial greenery</h1>`

Change text between the `h1` tags and republish in Tilda. Edit the Arabic translation separately in `data-ar="..."`.
The same approach applies to description, country prompt and button names.
The script stores English copy from Tilda's actual HTML, so returning from Arabic to English restores your updated copy.

## Rollback
Restore the previous `gateway/v2-4/tilda-snippet.html` in that same Tilda T123 block and republish. The V2 assets are preserved.

This folder contains **code only** until the two images are uploaded. Adding these files alone does not change the live website.
