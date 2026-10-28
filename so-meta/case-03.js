// Case-specific evidence and copy; all layout and interactions use the case 01 master.
(() => {
  const data=META_CONFIG.cases.find(item=>item.id==="03");
  Object.assign(data, {
  "report": {
    "challengeTitle": "Too many active ads. Too little evidence of efficient leads.",
    "intro": "A renovation company’s main campaign targeted a broad audience with a daily budget of $1,000.",
    "showIntro": true,
    "problemPoints": [
      "Up to 50 ads were active in the main campaign.",
      "Some creatives generated leads at costs as high as $300.",
      "Other creatives received too little spend to establish their performance."
    ],
    "solution": "Assess creatives by the enquiries they generated, pause expensive ads and give previously underfunded alternatives a chance within a smaller active set.",
    "comparisons": [
      {
        "title": "Active ads in the main campaign",
        "subtitle": "Before and after deliberate creative selection",
        "scaleMax": 50,
        "suffix": " ads",
        "rows": [
          {
            "label": "Before selection",
            "value": 50,
            "display": "Up to 50"
          },
          {
            "label": "After selection",
            "value": 5,
            "display": "5",
            "tone": "target"
          }
        ],
        "note": "The earlier count is an upper bound. Fewer active ads were combined with deliberate creative replacement."
      },
      {
        "title": "Reported cost per lead",
        "subtitle": "Different measurement scopes",
        "prefix": "$",
        "scaleMax": 300,
        "rows": [
          {
            "label": "Earlier creative-level peak",
            "value": 300
          },
          {
            "label": "Daily CPL · January–March",
            "min": 25,
            "max": 50,
            "display": "$25–$50",
            "tone": "target"
          }
        ],
        "note": "A creative-level peak and later daily range are not matched campaign averages. No percentage reduction is calculated."
      }
    ],
    "outcomeHeading": "Was the objective met?",
    "conclusions": [
      {
        "label": "Reduce lead acquisition costs",
        "status": "MET*",
        "tone": "met",
        "description": "Reported daily CPL was $25–$50 during January–March 2026, following earlier creative-level peaks up to $300."
      },
      {
        "label": "Sales conversion data",
        "status": "NOT SHARED",
        "tone": "neutral",
        "description": "Closed renovation projects, verified lead quality and revenue impact could not be assessed."
      }
    ],
    "footnote": "*The earlier creative peak and subsequent daily range are different measures; no percentage reduction is claimed. Results demonstrate reported acquisition costs, not verified lead quality or sales conversion."
  },
  "dots": {
    "visualization": "context",
    "title": "Fewer active ads. More deliberate selection.",
    "hero": "5",
    "description": "From up to 50 active ads to five, selected using actual lead-generation performance.",
    "unit": 1,
    "unitLabel": "one active ad",
    "groups": [
      {
        "label": "Before selection · upper-bound illustration",
        "value": 50,
        "display": "Up to 50"
      },
      {
        "label": "After selection",
        "value": 5,
        "display": "5"
      }
    ],
    "note": "The change combined fewer active ads with creative replacement. The earlier ad count was up to 50; selection used clicks, actual leads and acquisition cost."
  },
  "execution": [
    {
      "title": "Evaluate clicks against leads",
      "detail": "Reviewed cost per click and unique click-through rate alongside actual leads and cost per result. Used these measures together to assess whether engagement translated into efficient enquiries."
    },
    {
      "title": "Pause expensive creatives",
      "detail": "Paused creatives generating expensive enquiries, including ads reaching $300 per lead, to stop further spend on demonstrated poor performers."
    },
    {
      "title": "Give overlooked creatives a chance",
      "detail": "Introduced alternative creatives that had previously received insufficient budget to establish performance. Distinguished limited delivery from evidence of poor results."
    },
    {
      "title": "Focus on five active ads",
      "detail": "Reduced the main campaign to five active ads at a time, combining a smaller creative set with selection based on actual lead-generation performance."
    }
  ],
  "outcome": "Reported daily CPL settled within 25–50 after creative reselection and a reduction to five active ads."
});
})();
