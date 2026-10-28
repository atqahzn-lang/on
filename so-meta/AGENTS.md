# So Meta requirements

The original E-Commerce / ROAS report (now case 04) is the user's master format for every case study. This explicitly supersedes the earlier instruction treating the attached case-02/03/04 layouts as canonical. Read CASE-STUDY-FORMAT.md.

- Use the single renderer in report-template.js and single layout/typography stylesheet report.css for all reports. Do not create case-specific HTML/CSS layout families, standalone report pages, or resurrect MetaCaseTemplates/MetaCaseInitializers.
- case-02.js, case-03.js and case-01.js provide only case-specific data/copy. Keep the same 1050px content frame, master typography, spacing, solution placement, dial, horizontal full-process disclosure, and outcome cards as the original e-commerce master (now case 04).
- Preserve evidence-specific differences. CPR/CPL/ROAS need not be every report's main metric. Use report.comparisons rows for observations/ranges and dots.visualization=context for exact quantity illustrations, without changing the design.
- Preserve reporting periods, lead definitions, units and measurement limits. Never invent baselines, averages, attribution, conversion outcomes or targets. Keep unknown eligibility distinct from ineligibility; financing values are not revenue.
- Preserve anonymisation. Use a general Malaysian financial-services identifier; government-employee audience context is allowed. Uploaded examples containing client names do not authorise restoring them.
- Preserve the console title, Play/Read menu, groups, D-pad/keyboard control and optional sound unless requested otherwise. Reports stay in the existing X/Escape popup.
- Validate all four reports, shared visual metrics, case navigation, dial/disclosure controls, exact dot counts and mobile overflow. Keep STYLE-GUIDE.md accurate.

## Case 01 exception — latest explicit user request

The user supplied a replacement financial-services report and explicitly requested its design for all non-execution sections. `financial-report.js` mounts that supplied content inside the existing popup; its styles are scoped to `.financial-layout` in `report.css`. Preserve the shared execution dial and full-process disclosure, with updated approach copy. Other cases retain the e-commerce master. This exception supersedes the data-only/shared-layout rule for case 01 only. Preserve the distinction between baseline accepted sales and later assessed opportunities; the latest figures replace earlier opportunity totals.
