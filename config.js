/* =====================================================
   12. CONFIGURATION
   Edit your image and page URLs here.
===================================================== */

const CONFIG = {

  guestbookEndpoint:
    "https://zabbolmrokkpjlkjljqa.supabase.co/functions/v1/portfolio-guestbook",

  pages: {
    kreditRakyat: "",
    paidMedia: "./so-meta/",
    ugcMarketing: "./ugc-marketing/",
    creative: "",
    automation: "",
    reporting: "",
    experiments: "",
    resume: ""
  }
};

/* =====================================================
   13. CAROUSEL IMAGES

   Replace the empty src values with your GitHub raw URLs.

   Example:
   src: "https://raw.githubusercontent.com/USERNAME/REPO/main/selfie.jpg"

   Supported:
   JPEG, PNG, WebP and GIF.

   Add more objects for additional photos.
===================================================== */

const carouselImages = [
  {
    src: "",
    alt: "Selfie",
    placeholder: "my beautiful face"
  },
  {
    src: "",
    alt: "Hiking photo",
    placeholder: "somewhere outside"
  },
  {
    src: "",
    alt: "Another personal photo",
    placeholder: "and other things"
  }
];
