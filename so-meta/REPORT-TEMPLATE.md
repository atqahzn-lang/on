# Reusable Meta report popup

The required format for all upcoming case studies is documented in [CASE-STUDY-FORMAT.md](CASE-STUDY-FORMAT.md). See [STYLE-GUIDE.md](STYLE-GUIDE.md) for typography, frame dimensions and active selectors.

`report-template.js` owns one closable native dialog, report navigation, case selection and the shared case 01 renderer. `cases.js` supplies the current four numbered records and menu labels.

| Case | Report files | Scoped root / prefix |
| --- | --- | --- |
| 01 — E-Commerce / ROAS | `report-template.js`, `report.css`, `cases.js` | `.case-report` |
| 02 — Child Enrichment | `case-02.js`, `case-02.css` | `.sw-report`, `sw-` |
| 03 — Professional Services | `case-03.js`, `case-03.css` | `.rn-report`, `rn-` |
| 04 — Financial Services | `case-04.js`, `case-04.css` | `.fs-report`, `fs-` |

Case-specific markup is registered in `MetaCaseTemplates`; its scoped initializer is registered in `MetaCaseInitializers`. The shared renderer mounts the trusted repository-owned markup, invokes the initializer and adds case navigation. Edits to report copy belong in the case script; keep `cases.js` summary metadata consistent.

The latest adaptations use comparison charts, data-scaled visuals, an execution dial and the complete-process disclosure instead of flip cards. The timeline is the single source for dial copy. Unique prefixes avoid cross-case styles and duplicate-selector collisions.

Reports retain the X-close popup. Native dialog behavior provides Escape dismissal, focus trapping and background inertness. Closing restores focus and page scroll. The console's case selection remains on its upper display under Campaign Results. Strategy & Systems remains In progress.

API: `MetaReports.open(index)`, `MetaReports.openMenu({caseIds})`, `MetaReports.close()`, and `MetaReports.isOpen()`. Indices are zero-based; case IDs are 01–04. Load case scripts before `report-template.js`.

The financial-services report remains anonymised; employment/audience context about government employees is permitted. Preserve the measurement caveats in all reports. See the format guide for evidence-specific requirements and validation.
