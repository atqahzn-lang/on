/* =========================================================
   24. CONFIGURATION
   EDIT YOUR CAMPAIGNS HERE.

   VIDEO:
   Use direct MP4 URLs.

   THUMBNAIL:
   Use direct JPG, PNG or WebP URLs.

   HOVER PREVIEW:
   Optional short MP4 URL.
   Leave empty to disable.

   RESULTS:
   Use only verified campaign figures.
========================================================= */

const CONFIG = {

  // EDIT: Main portfolio URL
  portfolioUrl: "../",

  campaigns: [

    {
      id: "ugc01",

      title: "UGC Campaign 01 — Campaign Name",

      brand: "Brand / Client Name",

      date: "2026",

      category: "UGC Marketing",

      // EDIT: Main video
      video: "",

      // EDIT: Thumbnail
      thumbnail: "",

      // EDIT: Optional short preview clip
      preview: "",

      duration: "0:30",

      // EDIT: Displayed alongside the video
      viewsLabel: "Campaign performance",

      description:
        "Campaign objective:\n" +
        "Describe what the campaign was intended to achieve.\n\n" +
        "Approach:\n" +
        "Explain the creative concept, target audience " +
        "and why UGC was used.",

      role:
        "Campaign planning, creator coordination, " +
        "creative direction and performance evaluation.",

      metrics: [
        { label: "Reach", value: "—" },
        { label: "Engagement", value: "—" }
      ]
    },

    {
      id: "ugc02",

      title: "UGC Campaign 02 — Campaign Name",

      brand: "Brand / Client Name",

      date: "2026",

      category: "UGC Marketing",

      video: "",
      thumbnail: "",
      preview: "",

      duration: "0:45",

      viewsLabel: "Campaign performance",

      description:
        "Campaign objective:\n" +
        "Add the campaign objective.\n\n" +
        "Approach:\n" +
        "Explain the content direction and execution.",

      role:
        "Creator sourcing, briefing and campaign management.",

      metrics: [
        { label: "Views", value: "—" },
        { label: "Engagement rate", value: "—" }
      ]
    },

    {
      id: "ugc03",

      title: "UGC Campaign 03 — Campaign Name",

      brand: "Brand / Client Name",

      date: "2026",

      category: "UGC Marketing",

      video: "",
      thumbnail: "",
      preview: "",

      duration: "1:00",

      viewsLabel: "Campaign performance",

      description:
        "Campaign objective:\n" +
        "Add the campaign objective.\n\n" +
        "Approach:\n" +
        "Explain the creative direction and distribution.",

      role:
        "UGC strategy, content review and reporting.",

      metrics: [
        { label: "Reach", value: "—" },
        { label: "Conversions", value: "—" }
      ]
    }

  ]

};
