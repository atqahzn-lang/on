# Master format: case 01

**The original E-Commerce / ROAS report (now case 04), is the user's chosen master.** All other reports must replicate its visual and interaction details. This supersedes the earlier interpretation that the separately attached adapted layouts were the standard. Similar section order alone is insufficient.

## What must be identical

All reports use the same `report-template.js` renderer and `report.css` styles:

- Native X/Escape popup, title bar and report navigation.
- 1050px maximum content width, master padding and section spacing.
- Master problem heading, bullets/intro hierarchy, body typography and supporting labels.
- Comparison cards in the master two-column chart region, stacking on mobile.
- Purple/pink dot context section with the master numeric callout, equal-sized dots, units and qualification.
- Solution text directly above the master execution dial, without a separate coloured solution box.
- Same partially cropped SVG dial, stage copy, Previous/Next buttons and stage counter.
- Same expandable **horizontal** complete-process view.
- Same outcome card format, evidence-based status and visible measurement footnote.

There must not be separate swim-school, renovation or financial-services layout implementations. The legacy case-specific CSS files contain explanatory comments only.

## Adapt the evidence, not the design

| Case | Evidence-specific content inside the master |
| --- | --- |
| 04 — E-Commerce / ROAS | Existing baseline/goal charts, illustrative ₱1M budget → ₱6M revenue requirement, weekly achievement caveats |
| 02 — Child Enrichment | 100 daily registrations target/result; monthly RM5–10 / RM10–13 / RM6–9 CPL ranges against RM10; 100 registration dots; five execution decisions |
| 03 — Professional Services | Up to 50 → 5 active ads; earlier creative-level peak $300 versus later daily $25–50 range; exact 50/5 dot illustration; four execution decisions |
| 01 — Financial Services | RM30 historical benchmark and specified campaign comparisons; financing opportunity values RM68K → RM102K; 34/51 dots at RM2,000 per dot; five execution decisions |

Registrations are not enrolments. Ranges are not averages. A previous creative peak and later daily range do not justify a matched-average percentage reduction. Opportunity values are not revenue or proof of attribution. Unknown historical eligibility does not mean confirmed ineligibility. Keep all case-specific definitions and measurement limits visible.

## Data model

`cases.js` defines IDs, menu labels and base metadata. Load `case-02.js` / `case-03.js` / `case-01.js` after it; each updates that case's report data before the shared renderer loads.

Common case fields: `title`, `industry`, `market`, `duration`, `problem`, `solution`, `execution`, `outcome`, `objectives`, `dots`, `weekly`.

`report` options:

- `challengeTitle`, `intro`, `showIntro`, `problemPoints`, `solution`: case-specific copy; set `showIntro` when both intro and bullets are needed.
- `comparisons`: evidence cards using the master layout. Each has title, subtitle, scaleMax, optional prefix/suffix/decimals, optional reference marker, rows and a qualification note. Each row uses either `value` or `min`/`max`, plus label/display/tone. Never supply invented data to fill a row.
- `conclusions`: label, status, tone and description. Status text may be MET, NOT MET*, NOT SHARED, IMPLEMENTED or INCREASE RECORDED. Neutral implementation/missing-data statuses are not success claims.
- `footnote`, `outcomeHeading`: qualifications and heading wording.

The original case 01 `objectives` renderer remains unchanged. `report.comparisons` is used when evidence is a range, a count, or a campaign observation rather than a baseline-to-target equation.

For other quantity visuals, `dots.visualization = 'context'` uses the same case 01 dot-section design. Supply title, hero, description, unit, unitLabel, groups (label/value/display), and note. Dot counts must be exact integers. No currency or ratio may be inferred unless explicitly supported by the data.

## Publishing and validation

Test all reports in the shared popup. Compare content width, H1/body/stage fonts, padding, disclosure direction and outcome styles against the e-commerce master (now case 04). Check all navigation and dial controls, exact dot counts, qualifications and mobile overflow at 320/390/768/1360px. Maintain anonymisation, console navigation and mute behavior. See STYLE-GUIDE.md for editing locations.
