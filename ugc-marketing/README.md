# UGC Marketing

Standalone version of the supplied Wix HTML embed, with the original Firefox/YouTube-style layout and campaign interactions. No Wix SDK, dependencies, or build step required.

## Edit

- `index.html`: page structure and static labels.
- `styles.css`: desktop layout, colors, typography, and player styling. Edit the `:root` variables for shared colors.
- `responsive.css`: mobile layouts and reduced-motion styles; loaded after the main stylesheet.
- `campaigns.js`: campaign titles, descriptions, roles, results, and media URLs in `CONFIG.campaigns`.
- `app.js`: campaign switching, search, share links, favorites, and video controls.

The three supplied campaigns contain placeholders. Add direct MP4 URLs to `video`, image URLs to `thumbnail`, and optional short MP4 URLs to `preview`. YouTube watch links are not direct MP4 files. For local files, create an `assets/` folder here and use paths such as `./assets/campaign-01.mp4`. Only add verified campaign metrics.

`portfolioUrl` defaults to `../` so the portfolio button targets the repository homepage on GitHub Pages. That homepage still needs to exist; change this setting to your actual portfolio URL if preferred. The unnecessary Google Fonts request was removed because the design uses the system Arial font.

## Preview

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/ugc-marketing/`. Campaign links support hashes, for example `#ugc02`.

## Publish

Commit and push this folder to `main`. With GitHub Pages already configured to publish `main` from `/(root)`, this page will be available at:

https://atqahzn-lang.github.io/on/ugc-marketing/

This is a separate page from `/so-meta/`; it does not replace the homepage. To embed it in Wix, use an Embed a Site element with the published HTTPS URL.

## Check after editing

Check campaign selection, next/previous controls, search and empty results, and opening `#ugc02` directly. After adding media, check playback, seeking, mute, fullscreen, and hover previews in a browser. Clipboard sharing requires a secure context and browser permission. Favorites are temporary and reset on reload.
