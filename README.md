# Atiqah portfolio

The root URL temporarily redirects to `./so-meta/`. The original portfolio homepage is preserved in Git history (before the temporary redirect); its CSS, configuration, and app files remain in the repository for restoration. The other pages remain available at their existing paths.

Static GitHub Pages site adapted from the supplied Wix HTML embeds. No build step or Wix runtime required.

## Pages

- `/on/`: main portfolio (`index.html`).
- `/on/so-meta/`: So Meta case studies.
- `/on/ugc-marketing/`: UGC campaigns.

Each page has its own styles and scripts. The homepage archive opens Meta case studies in a closable popup using the shared So Meta report template and includes a UGC Marketing tile. Homepage hashtags filter Meta case studies, UGC Marketing, Kredit Rakyat, and other projects. Other archive destinations remain unconfigured until their pages are available. The UGC portfolio button returns to this homepage.

## Edit the homepage

- `index.html`: structure, biography, hashtags, and archive tiles.
- `styles.css`: colors, typography, and desktop layout.
- `responsive.css`: mobile and reduced-motion rules; loaded last.
- `config.js`: archive destinations, carousel images, and guestbook endpoint.
- `app.js`: carousel, archive filters, preset Q&A, guestbook, and social buttons. Edit the `prompts` array for the preset replies.

Add photo paths to `carouselImages` in `config.js`, for example `./assets/selfie.jpg`. Empty or unavailable photos show the supplied placeholders. Configure remaining archive links in `CONFIG.pages` as their pages become available. Like and save states reset on reload.

## Preview

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/`. Check carousel arrows/dots/keyboard, archive and hashtag filters, both published project links, and comments.

## Guestbook

The homepage retains the public Supabase Edge Function URL from the supplied code. It reads comments with GET and submits comments with POST. No private credentials belong in these frontend files. The backend must permit CORS for `https://atqahzn-lang.github.io` (and localhost for development). Publishing static files does not deploy or configure the Supabase function. Moderation and storage are backend responsibilities; the page displays approved comments and handles unavailable-service errors. Preset Q&A works locally without posting a guestbook entry.

## Publish

Push these files to `main`. GitHub Pages must publish the branch from `/(root)`.

Homepage: https://atqahzn-lang.github.io/on/

Project links use relative paths so the `/on/` repository prefix is preserved. Google Fonts (DM Sans) and the guestbook are external services; the stylesheet includes fallback fonts.

Meta report customization: see `so-meta/REPORT-TEMPLATE.md`. The X button or Escape returns to the homepage without navigating to another page.
