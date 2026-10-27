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
| [report.css](report.css) | Shared popup window and case 01: E-Commerce / ROAS |
| [case-02.css](case-02.css) | Case 02: Child Enrichment / swim school |
| [case-03.css](case-03.css) | Case 03: Professional Services / renovation |
| [case-04.css](case-04.css) | Case 04: Financial Services |
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
| Case 02 content | `case-02.css` → `.meta-report .sw-report` | Maximum 1100px; `padding: 48px 36px` |
| Case 03 content | `case-03.css` → `.meta-report .rn-report` | Maximum 1100px; `padding: 48px 36px` |
| Case 04 content | `case-04.css` → `.meta-report .fs-report` | Maximum 1100px; `padding: 48px 36px` |

Changing the shared popup width affects all reports. Changing `--report-padding` affects the shared case 01 layout; the three case-specific templates have their own padding rules. Inspect their mobile overrides too.

## Report fonts and hierarchy

For cases 02–04, begin with the report wrapper's `font-family` in its own CSS file. For case 01 and the popup toolbar, use `.meta-report` in `report.css`.

Current shared case 01 hierarchy, in the **latest overrides near the bottom of `report.css`**:

| Role | Selector | Size / spacing |
| --- | --- | --- |
| Main problem heading | `.performance-section .report-narrative h1` | `clamp(30px, 4vw, 42px)`, line height 1.18 |
| Execution / outcome headings | `.execution-heading, .conclusion-heading` | `clamp(26px, 3vw, 32px)` |
| Execution stage title | `.stage-title` | `clamp(22px, 2.8vw, 26px)` |
| Solution subheading | `.solution-box h3` | 18px |
| Reading text | `.solution-box p, .stage-description, .conclusion-item p, .outcome-summary` | 15px, line height 1.7 |
| Problem bullet points | `.problem-list` | 15px, line height 1.75 |
| Chart card heading | `.goal-card h2` | 17px |
| Main chart values | `.equation-value` | `clamp(18px, 2.3vw, 25px)` |
| Small labels | `.stage-label, .conclusion-metric` | 11px |
| Footnote | `.conclusion-footnote` | 12px, line height 1.6 |

Prefix these selectors with `.meta-report` when adding report overrides, to avoid affecting the console.

### Case-specific reports use the approved execution format

The latest format uses execution dials and full-process disclosures, not flip cards. See [CASE-STUDY-FORMAT.md](CASE-STUDY-FORMAT.md).

| Case | Root selector | Heading / detail selectors |
| --- | --- | --- |
| 02 — Child Enrichment | `.meta-report .sw-report` | `.sw-stage-title`, `.sw-stage-description`, `.sw-outcome` |
| 03 — Professional Services | `.meta-report .rn-report` | `.rn-stage-title`, `.rn-stage-description`, `.rn-outcome` |
| 04 — Financial Services | `.meta-report .fs-report` | `.fs-stage-title`, `.fs-stage-description`, `.fs-outcome` |

Each root defines its own DM Sans font and colour tokens. Update the root's font-family and the specific H1/H2/H3/body/stage rules as needed; mobile overrides are later in the same file. The old flip-card title sizes and 20% card padding belong to a superseded layout and are no longer active.

Example: change the Child Enrichment execution title and detail text in `case-02.css`:

```css
.meta-report .sw-stage-title {
  font-size: 26px;
  line-height: 1.25;
}
.meta-report .sw-stage-description {
  font-size: 15px;
  line-height: 1.7;
}
```

Edit the existing matching rules and mobile overrides rather than stacking duplicate overrides.

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
- Cases 02–04: their report wrappers define their own `--purple`, `--pink`, `--muted`, `--wash` and other colours.
- Case-specific outcome panels: `.sw-outcome`, `.rn-outcome`, and `.fs-outcome` use their report palette.

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
