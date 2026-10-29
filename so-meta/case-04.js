// Case-specific evidence and copy; all layout and interactions use the case 01 master.
(() => {
  const data=META_CONFIG.cases.find(item=>item.id==="04");
  Object.assign(data, {
  "report": {
    "challengeTitle": "Growing registrations while keeping lead costs within target.",
    "intro": "A swim school operating across Penang, Kedah, Johor Bahru, Kajang, Petaling Jaya and Puchong used an online sharing session as its first customer touchpoint.",
    "showIntro": true,
    "problemPoints": [
      "Audience overlap across campaigns.",
      "High drop-off during early enquiries.",
      "Different centre prices made the client hesitant to advertise fees."
    ],
    "solution": "Consolidate campaigns by centre, test creative formats and clarify the offer. Introduce regular creative replacement when fatigue affected registration costs.",
    "comparisons": [
      {
        "title": "Daily session registrations",
        "subtitle": "Across all centres · higher is better",
        "scaleMax": 120,
        "rows": [
          {
            "label": "Daily target",
            "value": 100
          },
          {
            "label": "Reported achievement",
            "value": 100,
            "tone": "target"
          }
        ],
        "note": "100 daily online session registrations, not confirmed swimming lesson enrolments. No starting registration baseline was supplied."
      },
      {
        "title": "Cost per registration",
        "subtitle": "Reported monthly ranges · lower is better",
        "prefix": "RM",
        "scaleMax": 15,
        "reference": 10,
        "rows": [
          {
            "label": "October",
            "min": 5,
            "max": 10,
            "display": "RM5–RM10"
          },
          {
            "label": "November",
            "min": 10,
            "max": 13,
            "display": "RM10–RM13",
            "tone": "target"
          },
          {
            "label": "December",
            "min": 6,
            "max": 9,
            "display": "RM6–RM9"
          }
        ],
        "note": "Marker: maximum target RM10. Ranges are not monthly averages. November was above target at times; school-holiday demand may have contributed in December, but its effect was not isolated."
      }
    ],
    "outcomeHeading": "Were the objectives met?",
    "conclusions": [
      {
        "label": "Registration target · 100 per day",
        "status": "MET",
        "tone": "met",
        "description": "Reached 100 daily online sharing-session registrations across all centres."
      },
      {
        "label": "CPL target · ≤RM10 throughout the quarter",
        "status": "NOT MET*",
        "tone": "not-met",
        "description": "Within target in October at RM5–RM10 and December at RM6–RM9. November’s reported range was RM10–RM13."
      }
    ],
    "footnote": "*The CPL target was met in two of three months, not consistently throughout the quarter. Registrations do not represent confirmed swimming lesson enrolments. Client follow-up data was insufficient to measure changes in early drop-off, session attendance or enrolment conversion."
  },
  "dots": {
    "visualization": "context",
    "title": "What does 100 registrations look like?",
    "hero": "100",
    "description": "Daily online sharing-session registrations across all centres.",
    "unit": 1,
    "unitLabel": "one registration",
    "groups": [
      {
        "label": "Daily registration target achieved",
        "value": 100,
        "display": "100"
      }
    ],
    "note": "Registrations are the first touchpoint, not confirmed swimming lesson enrolments. No claim about session attendance or enrolment conversion is made."
  },
  "execution": [
    {
      "title": "Consolidate campaigns by centre",
      "detail": "Recommended one campaign per centre to reduce unnecessary fragmentation and address audience overlap. Additional campaigns were reserved for seasonal initiatives."
    },
    {
      "title": "Test three creative formats",
      "detail": "Used one Reel, one static image and one carousel per campaign. Compared cost per registration to identify which creatives should receive more budget."
    },
    {
      "title": "Clarify value and pricing",
      "detail": "Broadened messaging beyond the athlete coach to include water safety and practical swimming skills. Recommended advertising a starting fee, with centre-specific prices clarified during follow-up."
    },
    {
      "title": "Return lead-quality feedback",
      "detail": "Used Meta Instant Forms to collect session registrations and return feedback on relevant versus irrelevant leads. Downstream attendance and enrolment reporting remained limited."
    },
    {
      "title": "Introduce fortnightly creative replacement",
      "detail": "Following November fatigue alerts, declining unique CTR and fewer registrations, replaced affected creatives and introduced a two-week replacement schedule. Began exploring AI-generated assets to support production."
    }
  ],
  "outcome": "The daily registration target was achieved. CPL stayed within target in October and December."
});
})();
