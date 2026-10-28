// Financial-services evidence; shared report design remains the e-commerce master.
(() => {
const data=META_CONFIG.cases.find(item=>item.id==="01");
Object.assign(data,{
  "report": {
    "challengeTitle": "Lead volume offered limited visibility into eligibility.",
    "intro": "",
    "showIntro": false,
    "problemPoints": [
      "Baseline channel reporting recorded 1,830 leads: 1,290 with unknown eligibility and 540 labelled ineligible.",
      "Employment screening was essential for financing aimed at government employees.",
      "Overnight spend produced lower-quality enquiries and sometimes no leads, increasing CPL."
    ],
    "solution": "Screen employment eligibility, allocate budget across audience types and use acquisition performance to guide testing and scheduled spending.",
    "comparisons": [
      {
        "title": "Cost per lead against target",
        "subtitle": "October result · lower is better",
        "prefix": "RM",
        "decimals": 2,
        "scaleMax": 40,
        "reference": 30,
        "rows": [
          {
            "label": "Historical benchmark",
            "value": 30
          },
          {
            "label": "October · 119 leads",
            "value": 21.9,
            "tone": "target"
          }
        ],
        "note": "RM21.90 across 119 leads, 1–27 October 2026: RM8.10 below RM30. The target was informed by historical performance, not a guaranteed cap."
      },
      {
        "title": "Cost per lead against existing broad",
        "subtitle": "Specified campaigns and reporting periods",
        "prefix": "RM",
        "decimals": 2,
        "scaleMax": 40,
        "rows": [
          {
            "label": "Existing broad · October",
            "value": 34.19
          },
          {
            "label": "October result",
            "value": 21.9,
            "tone": "target"
          }
        ],
        "note": "RM12.29 lower per lead than the existing broad campaign at RM34.19. This compares campaign results, not an account-wide before-and-after test."
      }
    ],
    "outcomeHeading": "Were the objectives met?",
    "conclusions": [
      {
        "label": "CPL benchmark · RM30",
        "status": "MET",
        "tone": "met",
        "description": "RM21.90 across 119 leads, 1–27 October 2026."
      },
      {
        "label": "Meta account restrictions · Zero",
        "status": "MET",
        "tone": "met",
        "description": "Zero monthly restrictions recorded April–October 2026."
      },
      {
        "label": "Employment screening",
        "status": "IMPLEMENTED",
        "tone": "neutral",
        "description": "Employment eligibility questions added to Meta Instant Forms; government employees remained the relevant audience."
      },
      {
        "label": "Qualified financing opportunities",
        "status": "INCREASE RECORDED",
        "tone": "neutral",
        "description": "RM68,000 in August → RM102,000 in October (+50%); not revenue or proof of Meta attribution."
      }
    ],
    "footnote": "A verified current eligibility rate and baseline acquisition spend were unavailable; eligibility uplift and wasted spend cannot be quantified. Unknown eligibility and non-response do not establish ineligibility. Financing values are not revenue or proof of Meta attribution. Performance reporting snapshot: 27 October 2026. Budget configuration reflects the updated broad-campaign setup.",
    "evidenceSections": [
      {
        "title": "Reduce overnight exposure. Restore budget at 8 am.",
        "intro": "Available advertising budget: RM7,000. Primary conversion: financing enquiry. Overnight acquisition produced lower-quality enquiries and sometimes no leads despite spend. Scheduled changes reduced exposure for the broad campaign under testing.",
        "items": [
          {
            "title": "12:00 AM · REDUCE · RM10",
            "detail": "Set the campaign’s daily budget to RM10 at midnight."
          },
          {
            "title": "8:00 AM · RESTORE · RM300",
            "detail": "Restore the campaign’s daily budget to RM300 at 8 am."
          }
        ],
        "note": "Scheduled daily-budget settings, not actual spend within each time window. RM300 replaces RM10; the amounts are not additive. The schedule was one part of the approach alongside screening, audience and creative changes."
      },
      {
        "title": "Acquisition cost was only part of the picture.",
        "intro": "Baseline: 1,830 leads — 31 Facebook WhatsApp and 1,799 Instant Form leads. The baseline period was not specified.",
        "items": [
          {
            "title": "1,290 · Unknown eligibility",
            "detail": "70.5% of baseline leads."
          },
          {
            "title": "367 · No response",
            "detail": "20.1%, recorded under “ineligible”; non-response does not establish ineligibility."
          },
          {
            "title": "173 · Other disqualification reasons",
            "detail": "9.5% of baseline leads. These records did not meet the listed criteria."
          },
          {
            "title": "1,657 · Eligibility unresolved",
            "detail": "Unknown status and non-response combined. The original ineligible total of 540 included the 367 non-responsive contacts."
          }
        ],
        "note": "Percentages are rounded. Employment screening was introduced, but a verified current eligible-lead count was unavailable. Eligibility uplift cannot be quantified. Baseline spend and CPL were not supplied, so wasted spend cannot be estimated; unknown and non-responsive leads are not confirmed wasted spend."
      }
    ]
  },
  "dots": {
    "visualization": "context",
    "title": "Recorded qualified financing opportunities.",
    "hero": "+50%",
    "description": "RM68,000 in August increased to RM102,000 in October.",
    "unit": 2000,
    "unitLabel": "RM2,000 in financing opportunity value",
    "groups": [
      {
        "label": "August",
        "value": 68000,
        "display": "RM68,000"
      },
      {
        "label": "October",
        "value": 102000,
        "display": "RM102,000"
      }
    ],
    "note": "Includes applicants under document review and disbursed cases, excluding rejected applicants. These are financing values, not company revenue or proof of Meta attribution."
  },
  "execution": [
    {
      "title": "Applicant screening",
      "detail": "Added employment eligibility questions to Meta Instant Forms to screen out applicants outside the service criteria, including private-sector employees."
    },
    {
      "title": "Audience allocation",
      "detail": "Tested broad, lookalike and retargeting audiences with separate budgets. Broad targeting received the largest share of the available advertising budget."
    },
    {
      "title": "Scheduled budget controls",
      "detail": "Reduced the broad test campaign’s daily budget to RM10 at midnight and restored it to RM300 at 8 am following weaker overnight acquisition. Used a RM30 CPL target informed by historical performance. These are daily-budget settings, not spend allocations."
    },
    {
      "title": "Audience and creative testing",
      "detail": "Tested audiences and creatives during September, reviewing performance to inform subsequent campaign adjustments."
    },
    {
      "title": "Pre-publication review",
      "detail": "Introduced a keyword-risk rubric to review ad copy before publication and reduce restriction risk. Zero monthly Meta account restrictions were recorded during April–October."
    }
  ],
  "outcome": "October CPL was below the RM30 benchmark, alongside an increase in recorded financing opportunities."
});
})();
