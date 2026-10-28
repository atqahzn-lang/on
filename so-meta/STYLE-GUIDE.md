# So Meta — GitHub style editing guide

This guide maps the current styles without changing the design. CSS files now have an `EDITING MAP` comment at the top. Values below describe the current version; later edits can change them.

## Edit on GitHub

1. Open the [`so-meta` folder](https://github.com/atqahzn-lang/on/tree/main/so-meta).
2. Open the CSS file you need, then select **Edit this file** (the pencil).
3. Use your browser's Find to locate the exact selector below. Check all occurrences, including mobile rules and overrides near the bottom.
4. Change only the properties you need. Commit to `main` with a clear message.
5. Wait for **Actions → pages build and deployment** to finish, then reload the site. A Git push/commit is separate from a successful Pages deployment.
6. If a browser retains older CSS, hard refresh. The stylesheet URLs in `index.html` include `?v=...`; updating that suffix forces the browser to fetch a new asset URL. It does not change the filename.

## Which stylesheet to edit

| File | Controls |
| --- | --- |
| [styles.css](styles.css) | Base console shell, screens, controls, default colours and fonts |
| [responsive.css](responsive.css) | Mobile console geometry at viewport widths of 480px or less |
| [catch-game.css](catch-game.css) | Current console/menu overrides, group selectors, selection highlight, sound toggle |
| [report.css](report.css) | Shared popup and original e-commerce master layout/typography for ALL reports |
| [case-02.js](case-02.js) | Child Enrichment data/copy only; style it in report.css |
| [case-03.js](case-03.js) | Professional Services data/copy only; style it in report.css |
| [case-01.js](case-01.js) | Financial Services data/copy only; style it in report.css |
| [../site-notice.css](../site-notice.css) | Portfolio In progress notice above the console |

The root `/on/index.html` redirects to `/on/so-meta/`. The root-level `styles.css` belongs to the temporarily hidden homepage, not this console.

## Console containers and frames

| Area | File and selector | Current value / what to change |
| --- | --- | --- |
| Outer page spacing | `styles.css` → `.portfolio-page` | `padding: 40px 16px 70px`; mobile top padding is 24px in `catch-game.css` |
| Entire console width | `catch-game.css` → `.page-caption, .game-layout` | `max-width: 660px`; change this to grow/shrink the console and align its caption |
| Console child sizing | `catch-game.css` → `.console` | `width: 100%`; its parent sets the maximum width |
| Upper pink shell | `styles.css` → `.console-top` | `padding: 22px 35px 27px`, 3px border, `border-radius: 35px 35px 15px 15px` |
| Dark upper frame | `styles.css` → `.top-screen-frame` | `padding: 13px`, 3px border, 15px corner radius |
| Upper display | `styles.css` → `.top-screen` | `height: 285px`; mobile override is 240px in `responsive.css` |
| Hinge | `styles.css` → `.console-hinge` | `height: 17px` |
| Lower pink shell | `styles.css` → `.console-bottom` | `min-height: 300px`, `padding: 24px 17px`, `gap: 12px` |
| Lower display width | `styles.css` → `.console-bottom` | `grid-template-columns: 70px minmax(0,1fr) 70px`; the side columns reserve space for physical controls |
| Lower dark frame | `styles.css` → `.touchscreen-frame` | 3px border, `padding: 6px`, 10px corner radius |
| Lower display height | `styles.css` → `.touchscreen` | `min-height: 240px`; content can make it taller. This is not a fixed height |
| Lower content spacing | `styles.css` → `.touchscreen-body` | `padding: 14px`; mobile is 8px in `responsive.css` |
| Mobile side controls | `responsive.css` → `.console-bottom` | `42px minmax(0,1fr) 42px`, 6px gap, `padding: 14px 6px` |

**Measured desktop example:** at a 1360px viewport with the initial menu, console width is 660px; upper dark frame is 584 × 317px; upper display is 552 × 285px; lower dark frame width is 456px; lower display width is 438px. Lower and overall heights depend on text wrapping, fonts and content, so do not use a screenshot's height as a fixed CSS requirement.

Example: make the console 720px wide while keeping it responsive. Edit the existing rule in `catch-game.css`:

```css
.page-caption, .game-layout {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}
```

Increasing overall width does not automatically increase the upper display height. Adjust `.top-screen` separately if needed. Avoid a fixed width such as `width: 720px` without a responsive limit.

## Console typography

The console currently uses **Arial / Helvetica**, except the So Meta title, which uses **Georgia in italics**. Reports use **DM Sans**. Loading DM Sans does not automatically apply it to the console.

| Text | File → selector | Current font setting |
| --- | --- | --- |
| Console default font | `styles.css` → `body` | `Arial, Helvetica, sans-serif` |
| So Meta title | `styles.css` → `.game-title` | Georgia, italic; `clamp(45px, 9vw, 74px)`, line height 1, letter spacing -4px |
| Title subtitle | `styles.css` → `.title-subtitle` | 14px |
| Lower menu heading | `catch-game.css` → `.experience-menu .touch-heading` | 13px, line height 1.4 |
| Lower description | `catch-game.css` → `.experience-menu .touch-description` | 12px; mobile 11px |
| Play / Read button text | `styles.css` → `.touch-button` | 11px, bold; minimum button height is 44px in `catch-game.css` |
| Group titles | `catch-game.css` → `.group-choice strong` | 13px |
| Group subtitle | `catch-game.css` → `.group-choice small` | 11px |
| Case selector labels | `catch-game.css` → `#console-case-menu .case-menu-item strong` | 12px, line height 1.4, left-aligned |
| Strategy placeholder | `catch-game.css` → `.strategy-status` | 18px bold, uses `!important` |
| Sound toggle | `catch-game.css` → `#console-sound` | 10px |

Example: apply the already loaded DM Sans font to the console without changing other pages. Add this at the bottom of `catch-game.css`:

```css
.console {
  font-family: "DM Sans", Arial, sans-serif;
}
```

`.game-title` keeps its own Georgia font unless you change that selector too.

## Report window and content sizing

The **outer popup** and the **report content inside it** are separate containers.

| Area | Selector / location | Current value |
| --- | --- | --- |
| Shared popup width | `report.css` → `dialog.meta-report` | `width: min(1120px, calc(100% - 40px))` |
| Shared popup height | Same rule | `height: min(900px, calc(100dvh - 40px))` |
| Popup corners | Same rule | `border-radius: 16px` |
| Mobile popup | `report.css` → `@media (max-width: 520px)` → `dialog.meta-report` | Viewport width/height minus 16px; 10px corner radius |
| Close toolbar | `.meta-report .popup-toolbar` | `padding: 12px 20px`; close button is 44 × 44px |
| Scroll area | `.meta-report .popup-scroll` | `overflow-y: auto`; preserve this to keep the close toolbar accessible |
| Case 01 content width | `.meta-report .case-report` | Maximum 1050px |
| Case 01 content padding | `dialog.meta-report` → `--report-padding` | `26px 50px 60px`; smaller-screen overrides are later in the file |
| Case 01 section spacing | `--section-gap` | 46px; some sections have their own margins |
| Cases 02–04 content | Same `.case-report` and `--report-padding` as the original e-commerce master (now case 04) | Same 1050px maximum and responsive padding |


Changing the shared popup width affects all reports. Changing `--report-padding` affects all four cases. Inspect its mobile overrides too.

## Report fonts and hierarchy — one master for all cases

All four reports now use case 01's renderer and stylesheet. Edit `report.css` for EVERY report's font, width, spacing, execution dial and outcomes. There are no case-specific layout overrides. The old case-specific CSS files contain comments only.

| Role | Selector in report.css | Current style |
| --- | --- | --- |
| Report font | `.meta-report` | DM Sans |
| Content width | `.meta-report .case-report` | Maximum 1050px |
| Content padding | `dialog.meta-report` → `--report-padding` | 26px 50px 60px, with mobile overrides |
| Main heading | `.performance-section .report-narrative h1` | clamp(30px, 4vw, 42px) |
| Execution / outcome heading | `.execution-heading, .conclusion-heading` | clamp(26px, 3vw, 32px) |
| Stage title | `.stage-title` | clamp(22px, 2.8vw, 26px) |
| Body text | `.solution-box p, .stage-description, .conclusion-item p, .outcome-summary` | 15px / line height 1.7 |
| Evidence row text | `.evidence-label` | 12px / line height 1.5 |
| Comparison qualifications | `.comparison-note` | 12px / line height 1.65 |
| Process direction | `.process-timeline` | Horizontal, scrollable |
| Outcome qualification | `.conclusion-footnote` | 12px / line height 1.6 |

Report-specific text and chart values belong in `cases.js` or `case-02.js` / `case-03.js` / `case-01.js`. See CASE-STUDY-FORMAT.md for data options. Changing a report font in `report.css` applies consistently to all four cases.

## Choose a different web font

1. Get the font's CSS link from Google Fonts (or host approved font files yourself).
2. Update the Google Fonts `<link>` in [index.html](index.html).
3. Update the `font-family` in the console/report selectors you want to change.
4. Keep fallback fonts: `font-family: "Your Font", Arial, sans-serif;`.
5. Ensure the font link requests the weights you use. The current DM Sans link requests 400, 500, 600, 700 and 800.

Typography properties:

```css
font-family: "DM Sans", Arial, sans-serif; /* Typeface */
font-size: 16px;                          /* Text size */
font-weight: 400;                         /* Regular; 700 is bold */
line-height: 1.7;                         /* 1.7 times the font size */
letter-spacing: -0.3px;                   /* Character spacing */
text-align: left;                        /* Alignment */
max-width: 65ch;                         /* Approximate readable line length */
```

`clamp(30px, 4vw, 42px)` means a minimum of 30px, a fluid size of 4% of viewport width, and a maximum of 42px. `min-height` is a floor, not a fixed height. Padding is space inside a box; margin is space outside it. Two padding values mean vertical / horizontal; three mean top / horizontal / bottom; four mean top / right / bottom / left.

## Colour editing

- Console shell: `styles.css` → `:root`, especially `--shell`, `--shell-light`, `--shell-dark` and `--shell-ink`.
- Page pink background: `styles.css` → `body { background: #F1CAD8; }` (currently a literal colour, not the shell variable).
- Upper display sky/ground: `styles.css` → `.top-screen` → `linear-gradient(...)`.
- Shared report palette: `report.css` → `.meta-report` variables. The chart/ROAS sections define some local overrides too.
- Cases 02–04 use the same shared report variables as the original e-commerce master (now case 04).
- All outcome panels use `.conclusion-section` and the shared palette.

## Why a CSS edit may appear to do nothing

Styles load in this order in `so-meta/index.html`:

1. `styles.css`
2. `report.css`
3. `case-02.css`
4. `case-03.css`
5. `case-04.css`
6. `responsive.css`
7. `catch-game.css`
8. Google Fonts
9. `../site-notice.css`

Later rules win **when specificity and importance are otherwise equal**. A more specific selector or `!important` can override a later, weaker rule. Media queries apply only when their condition matches. `report.css` deliberately includes newer overrides near the end, so changing an early duplicate selector may not affect the final result.

Use browser **Inspect → Computed / Styles** on the element to see the winning rule. Edit that source rule instead of adding many competing overrides.

## After each visual edit

Check 320px and 390px mobile widths plus a desktop width. Open all four reports; test long execution descriptions, timelines and menus, X/Escape closing, and the small sound button. Check that text is not clipped and the page does not scroll horizontally. Keep visible focus outlines and reduced-motion styles.

## Case 01 financial report exception

`financial-report.js` contains the latest supplied non-execution markup and budget-clock behaviour. Its CSS in `report.css` is scoped to `.financial-layout`; other cases are unaffected. The case 01 frame uses 1100px maximum width, 48px/36px padding (32px/22px on mobile), DM Sans 14px/1.65, with the supplied baseline column charts, result bars, clock, opportunity timeline and outcome grid. The shared execution component remains outside this styling scope to preserve its dial design.

The schedule alternates every five seconds while visible, supports Pause/Play and 12h/24h, respects reduced motion, and disposes timers/listeners when leaving the report. It illustrates budget settings rather than actual spend or live time.

Case 01 CPL comparison uses vertical columns on one RM0–RM40 scale: neutral January–April baseline records (RM10, RM19.64, RM20.34), purple October RM21.90, and a dashed RM30 benchmark. Individual monthly assignments were not supplied; do not infer them. `.cpl-benchmark`, `.screening-comparison`, `.broad-support` and `.factual-outcomes` control the latest supporting presentation. Questions collect eligibility information earlier; do not assert submission blocking or quantify filtered leads.

Latest supplied case 01 refresh: non-execution design in `.financial-layout` includes the CPL trade-off explanation and a collapsed existing-broad comparison. The four historical/October columns remain on a shared RM0–RM40 scale. Retain January–April baseline labels confirmed by the user, even when source examples say periods were unspecified. September is a testing phase, not a like-for-like lead-generation comparison. Shared execution CSS and renderer are unchanged; only the four execution-stage descriptions follow the revised messaging.

Final case 01 presentation: `.summary-strip` has three compact context items. Historical CPL bars are removed pending confirmed individual periods and campaign scopes; `.october-result` emphasises RM21.90 with RM30 context. Accepted baseline sales are in a native details disclosure. Execution SVG controls carry short desktop labels; `.decision-labels` provides mobile text controls using the same four stage descriptions as the full-process disclosure. Compact clock digits are 90–110px on desktop, with time and action side by side. Its header preserves location, Pause/Play and 12h/24h controls.
