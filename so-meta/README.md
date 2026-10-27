# So Meta

Standalone version of the supplied Wix HTML embed. No Wix SDK, build step, package installation, or secrets are required.

## Preview locally

From the repository root:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000/so-meta/`. Stop the server with Ctrl+C.

## Edit the report

- `report.css`: shared popup report design adapted from the latest Wix template.
- `styles.css`: shared color variables in `:root`, console shell, and game styles. Report colors use the `--report-*` variables.
- `responsive.css`: mobile and reduced-motion rules, loaded last. Check these when changing report layouts.
- `cases.js`: case-study text, metrics, execution stages, and weekly chart data in `META_CONFIG.cases`. Preserve `null` and empty lists for missing data.
- `index.html`: console and report HTML structure.
- `app.js`: keyboard/touch controls, collection tray, and report pause/resume.
- `catch-engine.js`: falling-file physics and catch detection.
- `catch-game.css`: game layout and compact lower-screen controls.
- `report-template.js`: shared report popup and rendering. See `REPORT-TEMPLATE.md` for per-case layout and styling options.

The pink console styling and reports are retained. The original cat sprite is hosted locally at `assets/cat-sprite.png` so gameplay does not rely on a remote image request.

## Publish on GitHub Pages

Commit the `so-meta` folder to your GitHub repository. In Settings → Pages, choose **Deploy from a branch**, select the branch containing these files, and select **/(root)**. The page will be at your repository’s Pages URL followed by `/so-meta/` (for this repository: `https://atqahzn-lang.github.io/on/so-meta/`). GitHub Pages availability depends on the repository and account settings.

For Wix, add an Embed a Site element pointing to the published HTTPS page URL. The page can also run independently of Wix. Future CSS updates are made in this folder, committed, and published through GitHub Pages.

## Current experience and checks

The upper display shows the original So Meta title, subtitle and cat. The lower display contains only the Play Game / Read Case Study experience menu, with no collection grid, movement buttons, or progress counter. Play Game shows In progress for 1.6 seconds and returns to the title/menu. Read Case Study opens the existing five-report selector and reports in a separate popup. Existing report designs remain unchanged.

Check the temporary notice and automatic return, all five reports, X/Escape to close, and mobile widths. Catch-game logic and assets remain in the repository for future work but the engine is not loaded or run.

Case 05 uses `case-05.js` and `case-05.css` for the anonymised Malaysian financial-services report, retaining the government-employee audience description. No direct client names are included in that report.
