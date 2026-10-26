/* ==========================================================
   15 — CENTRAL CASE STUDY DATABASE

   To add another case study:
   - Fill in the metadata
   - Add objectives
   - Add execution stages
   - Add outcome metrics
   - Add weekly data if available

   PLAY GAME and READ CASE STUDY use this same database.
========================================================== */

const META_CONFIG = {

  catSprite:
    "https://raw.githubusercontent.com/atqahzn-lang/atiqahis/main/Frame%208%20%281%29.png",

  cases: [

    /* ------------------------------------------------------
       CASE 01 — MOBILE RETAIL / BNPL
    ------------------------------------------------------ */

    {
      id: "01",

      title:
        "Enquiries Below RM10, Sustained Over a Quarter",

      niche: "Mobile Retail / BNPL",
      industry: "Meta Advertising · Lead Generation",
      market: "Malaysia",
      duration: "One quarter",

      budget: null,

      nda:
        "Client identity withheld due to NDA.",

      achievement:
        "Below RM10 / enquiry",

      challengeTitle:
        "Reducing wasted enquiries while maintaining volume.",

      problem:
        "A mobile retailer needed 10 unique daily enquiries " +
        "across Johor, Negeri Sembilan and Kuala Lumpur. " +
        "Click-to-WhatsApp campaigns attracted accidental " +
        "interactions, while overlapping audiences complicated " +
        "campaign performance.",

      solution:
        "Rebuild the enquiry journey using Instant Forms, " +
        "separate campaigns by audience and location, and " +
        "introduce more deliberate cost controls.",

      objectives: [
        {
          title: "Cost per enquiry",
          baseline: null,
          target: 10,
          baselineLabel: "Starting value unavailable",
          targetLabel: "Below RM10",
          prefix: "RM",
          lowerIsBetter: true
        }
      ],

      dots: null,

      execution: [
        {
          title: "Objective",
          detail:
            "Establish a measurable target of 10 unique daily " +
            "enquiries at below RM10 per enquiry."
        },
        {
          title: "Customer Journey",
          detail:
            "Move from Click-to-WhatsApp to Instant Forms " +
            "to reduce accidental interactions and create " +
            "a more deliberate enquiry process."
        },
        {
          title: "Campaign Structure",
          detail:
            "Separate the campaigns into four structures " +
            "with equal budget allocation."
        },
        {
          title: "Audience Separation",
          detail:
            "Use Meta's A/B testing framework to separate " +
            "audiences and reduce overlap. This was an audience " +
            "partitioning exercise, not a creative A/B test."
        },
        {
          title: "Cost Controls",
          detail:
            "Introduce cost controls and monitor enquiry " +
            "quality alongside acquisition cost."
        },
        {
          title: "Audience Exclusions",
          detail:
            "Apply exclusions to limit repeated exposure " +
            "and unnecessary audience competition."
        }
      ],

      outcome:
        "Cost per enquiry remained below RM10 over a quarter.",

      results: [
        {
          value: "< RM10",
          label: "COST PER ENQUIRY",
          description:
            "Maintained below the target threshold " +
            "over a quarter."
        }
      ],

      weekly: null
    },

    /* ------------------------------------------------------
       CASE 02 — PHILIPPINES E-COMMERCE
    ------------------------------------------------------ */

    {
      id: "02",
      report: {
        date: "February – March 2026",
        objectiveOrder: [1, 0],
        problemPoints: [
          "Sales slowed in Q1 after stronger Q3 and Q4 trading.",
          "Popular colourways sold out while other options struggled."
        ],
        challengeTitle: "Demand slowed after the holiday peak.",
        outcomeHeading: "Were the objectives met?",
        conclusions: [
          { label: "ROAS target · 6.00×", status: "MET*", tone: "met",
            description: "ROAS exceeded 6.00× during individual weeks of the campaign." },
          { label: "CPP target · ₱1,500", status: "MET*", tone: "met",
            description: "The lowest recorded cost per purchase reached ₱1,300." }
        ],
        footnote: "*Targets were reached at individual points, not established as campaign-period averages. Complete period-level reporting is unavailable, so sustained achievement cannot be verified."
      },

      title:
        "Achieving Weekly ROAS Above 6",

      niche: "E-Commerce",
      industry: "Meta Advertising · E-Commerce",
      market: "Philippines",
      duration: "Q4 2025 – Q2 2026",

      budget: {
        amount: 1000000,
        currency: "PHP",
        period: "monthly"
      },

      nda:
        "Client details withheld due to NDA.",

      achievement:
        "6+ weekly ROAS",

      challengeTitle:
        "Sales slowed after the holiday peak.",

      problem:
        "After stronger Q3 and Q4 trading, sales slowed " +
        "in Q1 2026. Popular colourways sold out while " +
        "other options struggled. January ROAS averaged " +
        "3.00 and average cost per purchase was ₱2,600. " +
        "Products were priced between ₱12,990 and ₱35,000.",

      solution:
        "Refine audience segmentation, cost controls, " +
        "creative selection, pricing and promotional planning " +
        "to improve returns outside the Christmas period.",

      objectives: [
        {
          title: "Return on ad spend",
          baseline: 3,
          scaleMax: 7,
          target: 6,
          baselineLabel: "January average",
          targetLabel: "Target",
          suffix: "×",
          decimals: 2,
          lowerIsBetter: false
        },
        {
          title: "Cost per purchase",
          baseline: 2600,
          scaleMax: 3000,
          target: 1500,
          baselineLabel: "January average",
          targetLabel: "Target",
          prefix: "₱",
          lowerIsBetter: true
        }
      ],

      dots: {
        visualization: "roas-waffle",
        title: "₱1M in. ₱6M in revenue at 6× ROAS.",
        unit: 100000,
        unitLabel: "₱100,000",
        left: {
          value: 1000000,
          display: "₱1M",
          label: "Monthly advertising budget"
        },
        right: {
          value: 6000000,
          display: "₱6M",
          label: "Revenue required at 6.00 ROAS"
        },
        note:
          "Illustrative revenue requirement assuming the " +
          "full ₱1M monthly advertising budget is spent. " +
          "This is a target illustration, not actual revenue."
      },

      execution: [
        {
          title: "Audience Segmentation",
          detail:
            "Compare broad audiences, engaged-customer " +
            "retargeting and lookalike audiences up to 5% " +
            "to identify opportunities for stronger returns."
        },
        {
          title: "Cost Controls",
          detail:
            "Gradually adjust cost-per-result goals " +
            "alongside creative changes while monitoring " +
            "delivery and purchase costs."
        },
        {
          title: "Creative Optimisation",
          detail:
            "Use CTR and CPC to guide creative replacement, " +
            "while evaluating purchase cost and ROAS " +
            "for commercial performance."
        },
        {
          title: "Pricing & Product Selection",
          detail:
            "Adjust pricing for popular colourways " +
            "and feature those products more prominently " +
            "in advertising."
        },
        {
          title: "Promotional Planning",
          detail:
            "Introduce off-peak offers, including a " +
            "Valentine's Day 2026 carousel highlighting " +
            "discounts and popular colourways."
        }
      ],

      outcome:
        "Weekly ROAS exceeded 6.00, while the lowest " +
        "recorded cost per purchase reached ₱1,300.",

      results: [
        {
          value: "6+",
          label: "WEEKLY ROAS",
          description:
            "Weekly ROAS achieved above the 6.00 target. " +
            "This is not presented as the campaign-period average."
        },
        {
          value: "₱1,300",
          label: "LOWEST RECORDED CPP",
          description:
            "The lowest recorded cost per purchase, " +
            "13.3% below the ₱1,500 target."
        }
      ],

      /* ----------------------------------------------------
         WEEKLY CHART DATA

         IMPORTANT:
         Enter actual measured weekly ROAS figures here.

         Example FORMAT ONLY:
         { week: "2026-W06", roas: 6.25 }

         Do not insert estimated or invented values.

         Keep an empty array until verified figures exist.
      ---------------------------------------------------- */

      weekly: {
        title: "Weekly ROAS",
        target: 6,
        data: [],
        note:
          "Weekly values will be plotted once the " +
          "campaign's actual reporting data is available."
      }
    },

    /* ------------------------------------------------------
       CASES 03–05 — CONTENT PENDING
    ------------------------------------------------------ */

    {
      id: "03",
      title: "Case Study 03",
      niche: "Campaign pending",
      industry: "Meta Advertising",
      market: "To be added",
      duration: "To be added",
      budget: null,
      nda: "",
      achievement: null,
      challengeTitle: "Campaign details pending",
      problem: "Challenge to be added.",
      solution: "Solution to be added.",
      objectives: [],
      dots: null,
      execution: [],
      outcome: "Results to be added.",
      results: [],
      weekly: null
    },

    {
      id: "04",
      title: "Case Study 04",
      niche: "Campaign pending",
      industry: "Meta Advertising",
      market: "To be added",
      duration: "To be added",
      budget: null,
      nda: "",
      achievement: null,
      challengeTitle: "Campaign details pending",
      problem: "Challenge to be added.",
      solution: "Solution to be added.",
      objectives: [],
      dots: null,
      execution: [],
      outcome: "Results to be added.",
      results: [],
      weekly: null
    },

    {
      id: "05",
      title: "Case Study 05",
      niche: "Campaign pending",
      industry: "Meta Advertising",
      market: "To be added",
      duration: "To be added",
      budget: null,
      nda: "",
      achievement: null,
      challengeTitle: "Campaign details pending",
      problem: "Challenge to be added.",
      solution: "Solution to be added.",
      objectives: [],
      dots: null,
      execution: [],
      outcome: "Results to be added.",
      results: [],
      weekly: null
    }
  ]
};
