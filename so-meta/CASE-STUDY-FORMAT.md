# Approved case-study format

This is the required format for upcoming So Meta case studies, as selected by the user on 27 October 2026. Use this format only unless the user explicitly requests a different one. The latest combined reference has been adapted into case 02 (swim school), case 03 (renovation) and case 04 (financial services). Case 01 remains the E-Commerce / ROAS baseline.

## Evaluation of the adaptations

The common sequence makes reports easier to compare without forcing different evidence into identical charts. The strongest improvement over the earlier layouts is that the execution dial and full-process view share one set of copy, and measurement limits sit beside the claims they qualify.

| Case | Evidence-specific adaptation | What must stay qualified |
| --- | --- | --- |
| 01 — E-Commerce / ROAS | Baseline-to-goal comparisons; budget-to-revenue dot illustration; solution in Execution | Target revenue is illustrative, not actual revenue or profit; individual weeks are not campaign-period averages |
| 02 — Child Enrichment | Registration and CPL comparisons; 100-registration dot context; five decisions; monthly CPL ranges | Leads mean online sharing-session registrations, not lesson enrolments; November extended above the CPL limit; no invented starting registration baseline or verified enrolment impact |
| 03 — Professional Services | Up to 50 versus five ads; separate earlier creative-peak and later daily-CPL range; four decisions | Peak creative CPL and later daily range are different reporting bases; no matched-average percentage reduction or sales-conversion claim |
| 04 — Financial Services | Historical benchmark and campaign comparisons; exact financing-opportunity dot amounts; five decisions | Unknown historical records are not confirmed ineligible; post-change eligibility rate is unverified; financing opportunity values are not revenue or proof of Meta attribution |

This format is better for scanning than the old flip cards: the report explains the problem and comparisons first, then lets readers either step through execution or read the complete process. Watch long outcome labels on mobile; keep them readable rather than forcing them into short fixed-height cards.

## Required order

1. **Metadata:** industry/objective, country and reporting period. Follow with a concise, anonymised case title.
2. **The problem:** one clear H1, short context, a few factual bullets, and a compact budget/audience/conversion context strip where relevant.
3. **Comparisons:** use horizontal charts with labels, units, period/scope and a short summary. Match the chart to available evidence: targets, baselines, observations and peaks are distinct. Missing baselines must be stated, not invented as zero.
4. **Scale or context visual:** equal-sized dots or another approved simple quantitative visual. State the value of each dot and preserve exact counts. Label illustrations as illustrations.
5. **Execution:** section heading, a plain solution statement, the numbered interactive execution dial, Previous/Next controls, a stage counter, and a complete-process disclosure. The visible full timeline supplies the dial text, avoiding duplicate editable copy.
6. **Additional observed results:** include only when the case needs evidence beyond the first comparison (for example, monthly ranges). Mark ranges and averages correctly.
7. **Outcome:** objective label, evidence-based status, brief supporting result, and visible measurement limits. Use MET, NOT MET*, NOT SHARED, IMPLEMENTED or INCREASE RECORDED as appropriate; the labels must not imply more evidence than exists.
8. **Footer and navigation:** reporting period/snapshot where helpful; existing Previous case / All case studies / Next case controls. Keep the shared X-close popup.

## Visual rules

- Use DM Sans and the approved purple/pink/white palette, with pale contextual sections.
- Maintain the H1 → H2 → H3 → body → supporting-label hierarchy in the canonical CSS.
- Keep the solution in Execution, without a separate pink solution box.
- Use the approved numbered dial and full-process disclosure. Do not substitute flip cards.
- Keep comparisons, narrative and outcome sections responsive. Avoid fixed content heights that clip longer text.
- Use unique case-scoped class prefixes (`sw-`, `rn-`, `fs-`, or a new neutral prefix) beneath `.meta-report`.
- Allow longer case wording to wrap. Keep keyboard focus indicators and reduced-motion support.

## Implementation pattern

Use the existing report registrations:

```js
window.MetaCaseTemplates = window.MetaCaseTemplates || {};
window.MetaCaseInitializers = window.MetaCaseInitializers || {};
window.MetaCaseTemplates['CASE_ID'] = '...trusted, anonymised report markup...';
window.MetaCaseInitializers['CASE_ID'] = function (container) {
  // Query only inside container. Generate exact dots and bind the dial.
  // Derive the dial's stage title/description from the visible full timeline.
};
```

Load that case's stylesheet and script in `index.html`; load its script before `report-template.js`. Add its record to `META_CONFIG.cases`, including a short industry/objective menu label. The shared popup supplies navigation and close behavior. Initializers run again on reopen; avoid persistent window listeners that accumulate.

Dial keyboard support: arrows select stages, Home/End select the first/last stage, and Enter/Space activate buttons. Call preventDefault when consuming a key. The global console keyboard handler must respect an already-handled event.

## Confidentiality and reporting

Keep direct client identifiers out of markup, CSS/JS naming, comments, metadata and accessible descriptions. Financial services may refer to a Malaysian provider and government employees. Preserve country, currency, employment audience and verified results where authorised. An uploaded reference containing a client name does not override the user's anonymisation request.

Before publishing, check charts and dot counts against the supplied figures, distinguish targets from actuals, confirm definitions/periods, and retain all caveats about missing data or attribution. Never invent a metric to fill a template slot.

## Validation

Test all four report entry points, Previous/Next, numbered dial clicks and keyboard behavior, disclosure expansion, X/Escape, and reopen/reset. Check at 320, 390, 768 and 1360px widths. Ensure no horizontal report overflow and no conflicting console/dial keyboard handlers. Preserve the console, sound mute preference and group navigation.
