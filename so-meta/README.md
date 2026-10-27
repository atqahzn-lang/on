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

## Manual checks after edits

Press Start to begin. Move with ←/→ or A/D, or hold the console D-pad on touch screens. Space starts, pauses or resumes when focus is on the game; the lower button becomes Play again after completion. The cat faces its movement direction. Catch four numbered files to unlock reports in the lower-screen collection; missed files return. Pause/Resume freezes play. Opening a caught case pauses the game; X or Escape closes the report and resumes play. Collected cases are remembered for the current browser tab using sessionStorage. Console buttons: A opens the selected caught case; B pauses or closes a report; X focuses the collected-case tray; Y restarts. Up/down selects caught cases, and left/right navigates them while paused. Enter opens a selected case, R restarts, and B or Escape closes a report. Moving focus away from the window pauses gameplay. Case 05 is still pending and is not part of the game. Verify desktop/mobile layouts, all four reports, and that the lower display remains free of report text and menus.

The console is centred. Case cards and the collection count appear only inside the lower screen; the upper display is reserved for gameplay and exit controls. The lower-screen Read case studies button and upper Back to menu button open the four-report selector without playing. Skip unlocks all reports in the lower collection. There are no duplicate movement buttons inside the lower display.
