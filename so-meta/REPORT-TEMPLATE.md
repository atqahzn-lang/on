# Shared e-commerce master report template

The e-commerce report (now case 04) is the master for all four reports. See CASE-STUDY-FORMAT.md and AGENTS.md for the user's explicit requirements.

- `report-template.js`: one popup, one report HTML structure, one execution dial/process view and one outcome renderer for every case.
- `report.css`: shared dimensions, typography, spacing, comparison-card layout, context visuals, dial and outcome styling.
- `cases.js`: base metadata and e-commerce data (case 04).
- `case-02.js`, `case-03.js`, `case-01.js`: case-specific data only; no custom markup or layout registration.
- `case-02.css`, `case-03.css`, `case-04.css`: comments only, directing edits to the shared master.

Evidence-specific comparisons and context quantities are documented in CASE-STUDY-FORMAT.md. Preserve the actual metric and its scope; do not force every report into a cost-per-result or ROAS narrative.

API: MetaReports.open(index), MetaReports.openMenu({caseIds}), MetaReports.close(), MetaReports.isOpen(). Reports retain the same X/Escape, native focus handling, scroll behavior and case navigation.
