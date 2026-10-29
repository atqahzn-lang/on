# So Meta

The original E-Commerce / ROAS report (now case 02) is the master design for every report. See [CASE-STUDY-FORMAT.md](CASE-STUDY-FORMAT.md), [AGENTS.md](AGENTS.md), and [STYLE-GUIDE.md](STYLE-GUIDE.md).

## Current experience

The console shows its So Meta title and cat above, and Play Game / Read Case Study below. Play Game briefly displays In progress and returns to the menu. Read Case Study opens the Campaign Results / Strategy & Systems groups. Campaign Results contains the four reports; Strategy & Systems is In progress.

Tap the menu, use the physical D-pad, or use keyboard arrows to select. A / Enter opens a selection; B / Escape returns. X opens the reading groups, Y returns to the title/menu. Sound on/off and M control optional interaction tones; no sound autoplays.

## Files to edit

- `index.html`: console structure, stylesheet/script order and font loading.
- `styles.css`, `responsive.css`, `catch-game.css`: console appearance and menu sizing.
- `app.js`, `console-sound.js`: console navigation and optional Web Audio sounds.
- `cases.js`: base report metadata, menu labels and e-commerce content (case 02).
- `case-04.js`, `case-03.js`, `case-01.js`: case-specific copy, comparisons, context quantities and outcomes; no custom report markup.
- `report-template.js`: one shared report renderer and interactions for all cases.
- `report.css`: one shared original e-commerce master layout and typography for all cases.
- `case-02.css`, `case-03.css`, `case-04.css`: comments only; do not add divergent layouts here.

The four cases are Financial Services, Child Enrichment, Professional Services and E-Commerce / ROAS, numbered 01–04. The financial-services report remains anonymised; government-employee audience context is retained.

## Preview and publish

From the repository root, run `python3 -m http.server 8000` and open `http://localhost:8000/so-meta/`. No build step, packages or secrets are needed. The cat sprite is hosted locally under `assets/`.

Push to `main` for the configured GitHub Pages deployment. Public URL: https://atqahzn-lang.github.io/on/so-meta/. The root portfolio URL temporarily redirects here.

## Validation

Check touch, D-pad and keyboard selection; the temporary game notice; sound/mute; all report navigation and X/Escape closing. Compare report frames, headings, body fonts and horizontal process disclosure against the e-commerce master (now case 02). Check evidence-specific charts, exact dot counts, caveats and mobile overflow at 320/390/768/1360px. Do not replace missing evidence with invented values.
