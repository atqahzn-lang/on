# Reusable Meta report popup

`report-template.js` builds a single native dialog from the supplied Wix report design. `report.css` scopes all of its rules to `.meta-report`, so the homepage and console styles remain independent. Both the homepage archive and Nintendo reader use this component. No new page, tab, or URL is opened when selecting a report. The standalone `/so-meta/` console remains available.

The X button and Escape close the dialog. Native dialog behavior traps focus and keeps the background inert. Closing restores scroll state and focus. Reports have their own scrolling area and persistent close toolbar.

## Shared content

Edit `META_CONFIG.cases` in `cases.js`. The existing fields provide the challenge, solution, objectives, dot comparison, execution stages, results, and optional weekly data. Both gameplay and reports use these case records. Text is inserted as text, not executable HTML.

- The problem header supports `report.problemPoints` for short bullet points; other cases retain their narrative paragraph.
- Objective comparisons use horizontal bullet charts, target markers, and baseline-to-goal equations. Optional `scaleMax` on each objective fixes the axis maximum. Percent changes are calculated only when a verified positive baseline exists.
- Objective comparisons show the baseline and target with the appropriate currency/suffix. A missing baseline is labeled unavailable and is never drawn as zero.
- The date follows the country in the metadata line; there is no separate date banner.
- The solution overview appears in Execution, above the dial. Missing stages hide the dial and process disclosure while preserving any supplied solution. Missing dot comparisons omit their section. Pending cases retain their supplied placeholder text.
- Execution supports numbered SVG buttons, previous/next controls, swipe/drag, and a complete-process disclosure. The process length follows the case's actual stage count.
- Weekly graphs appear only when two or more verified values exist. With no values, the reporting note is shown instead. Do not invent weekly figures.
- Results display the supplied values unless explicit report conclusions are provided. The template does not infer that a target was met.

## Fine-tune a case

Add an optional `report` object inside the case record. Only the properties needed for that case are necessary:

```js
report: {
  date: "February – March 2026",
  challengeTitle: "Demand slowed after the holiday peak.",
  intro: "Optional replacement for the report's challenge paragraph.",
  solution: "Optional replacement for the report's solution copy.",
  executionHeading: "The decisions behind the results.",
  outcomeHeading: "Were the objectives met?",
  layout: "wide-narrative", // omit for equal narrative/chart columns
  hiddenSections: [], // objectives, dots, execution, outcome, weekly
  theme: {
    "soft-pink": "#F8F0F5",
    purple: "#35116F",
    pink: "#CE63B0",
    "report-padding": "26px 40px 60px",
    "section-gap": "40px"
  },
  conclusions: [
    {
      label: "ROAS target · 6.00×",
      status: "MET*",
      tone: "met", // met, not-met, or omit for neutral styling
      description: "Describe exactly what the evidence supports."
    }
  ],
  footnote: "*Clarify partial achievement or unavailable period averages."
}
```

Supported theme keys: `page`, `text`, `soft-pink`, `purple`, `pink`, `border`, `muted`, `report-padding`, and `section-gap`. Theme overrides reset on every case switch. They affect only the report dialog. For a layout that needs more adjustment, use the stable case ID selector in `report.css`, for example `.meta-report .case-report[data-case="01"] .solution-box`.

The Philippines case includes the dates and qualified conclusions from the latest attachment. Other case data is retained. Its illustrative ₱6M target is never labeled actual revenue, and the period-average limitation remains visible.

## Integration

Load `cases.js`, then `report-template.js`, then the page's app script (all with `defer`). Include `report.css`.

- `MetaReports.openMenu()` opens the case selector.
- `MetaReports.open(index)` opens a specific zero-based case.
- `MetaReports.close()` closes the dialog.
- `MetaReports.isOpen()` reports its state.

The homepage intercepts its Paid Media archive link to open the selector. That anchor retains `./so-meta/` as its fallback destination. The Nintendo reader's `openReader` calls the same popup component.

The Philippines dot chart now uses separate purple budget and pink revenue grids from the latest supplied design. Both grids use the same dot value; the target is not presented as actual revenue or profit. Solution text sits on the white Execution background.
