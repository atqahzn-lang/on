# So Meta

Standalone version of the supplied Wix HTML embed. No Wix SDK, build step, package installation, or secrets are required.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000 --directory so-meta
```

Open `http://localhost:8000`. Stop the server with Ctrl+C.

## Edit the report

- `report.css`: shared popup report design adapted from the latest Wix template.
- `styles.css`: shared color variables in `:root`, console shell, and game styles. Report colors use the `--report-*` variables.
- `responsive.css`: mobile and reduced-motion rules, loaded last. Check these when changing report layouts.
- `cases.js`: case-study text, metrics, execution stages, and weekly chart data in `META_CONFIG.cases`. Preserve `null` and empty lists for missing data.
- `index.html`: console and report HTML structure.
- `app.js`: console navigation and gameplay.
- `report-template.js`: shared report popup and rendering. See `REPORT-TEMPLATE.md` for per-case layout and styling options.

The original styling, content, interactions, and externally hosted cat sprite are preserved. The sprite still loads from `raw.githubusercontent.com/atqahzn-lang/atiqahis`; hosting it locally is optional.

## Publish on GitHub Pages

Commit the `so-meta` folder to your GitHub repository. In Settings → Pages, choose **Deploy from a branch**, select the branch containing these files, and select **/(root)**. The page will be at your repository’s Pages URL followed by `/so-meta/` (for this repository: `https://atqahzn-lang.github.io/on/so-meta/`). GitHub Pages availability depends on the repository and account settings.

For Wix, add an Embed a Site element pointing to the published HTTPS page URL. The page can also run independently of Wix. Future CSS updates are made in this folder, committed, and published through GitHub Pages.

## Manual checks after edits

Open Read Case Study and select each case; check report navigation, execution stages, charts, and Escape to close. Open Play Game and advance through the checkpoints. Check the layout at desktop and mobile widths. Cases with missing metrics intentionally display placeholders.
