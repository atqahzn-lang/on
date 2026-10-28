// Case 01 supplied report content; execution remains the shared interactive dial.
window.MetaFinancialReport={mount(report,execution){
const before=document.createElement("div"),after=document.createElement("div");before.className=after.className="financial-layout";
before.innerHTML="\n\n  <header>\n    <p class=\"meta\">\n      Meta Advertising \u00b7 Financial Services \u00b7 Malaysia \u00b7 April\u2013October 2026\n    </p>\n    <p class=\"case-title\">\n      Improving Lead Screening, Acquisition Costs and Financing Opportunities\n    </p>\n  </header>\n\n  <!-- PROBLEM -->\n  <section class=\"problem\">\n    <span class=\"kicker\">The problem</span>\n    <h1>Advertising spend outpaced visibility into lead quality.</h1>\n\n    <ul class=\"bullets\">\n<li>Low-cost submissions required customer service to check employment eligibility after submission.</li>\n<li>Incomplete eligibility records limited visibility into whether enquiries met the criteria for financing aimed at government employees.</li>\n<li>Eligibility information needed to be collected earlier, with spending decisions informed by enquiry relevance as well as cost.</li>\n</ul>\n  </section>\n\n  <!-- BASELINE -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">Baseline \u00b7 January\u2013April 2026</span>\n    <h2>The scale of acquisition. The gaps in reporting.</h2>\n\n    <div class=\"stats\">\n      <div class=\"stat\">\n        <strong>RM91,232.52</strong>\n        <span>Actual advertising spend</span>\n        <small>January\u2013April 2026</small>\n      </div>\n\n      <div class=\"stat\">\n        <strong>8,275</strong>\n        <span>Recorded leads</span>\n        <small>Facebook WhatsApp and Instant Forms</small>\n      </div>\n\n      <div class=\"stat\">\n        <strong>72.05%</strong>\n        <span>Eligibility outcome not recorded</span>\n        <small>5,962 leads</small>\n      </div>\n    </div>\n\n    <figure class=\"column-chart spend-chart\" style=\"--count:4\">\n      <div class=\"chart-heading\">\n        <h3>Monthly advertising spend</h3>\n        <span>Actual spend \u00b7 RM0\u2013RM40,000</span>\n      </div>\n\n      <div class=\"plot\"\n           role=\"img\"\n           aria-label=\"January spend RM12,367.24; February RM20,404.48; March RM25,031.84; April RM33,428.96.\">\n        <div class=\"grid\" aria-hidden=\"true\">\n          <div class=\"gridline\" style=\"--position:0%\">\n            <span class=\"axis-label\">RM0</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:25%\">\n            <span class=\"axis-label\">RM10,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:50%\">\n            <span class=\"axis-label\">RM20,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:75%\">\n            <span class=\"axis-label\">RM30,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:100%\">\n            <span class=\"axis-label\">RM40,000</span>\n          </div>\n        </div>\n\n        <div class=\"columns\" aria-hidden=\"true\">\n          <div class=\"column\" style=\"--height:30.9181%\">\n            <span class=\"bar-value\">RM12,367.24</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:51.0112%\">\n            <span class=\"bar-value\">RM20,404.48</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:62.5796%\">\n            <span class=\"bar-value\">RM25,031.84</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:83.5724%;--color:var(--pink)\">\n            <span class=\"bar-value\">RM33,428.96</span>\n            <span class=\"bar\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"column-labels\" aria-hidden=\"true\">\n        <div class=\"column-label\">\n          <strong>January</strong>\n          <span>1,830 recorded leads</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>February</strong>\n          <span>2,772 recorded leads</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>March</strong>\n          <span>740 recorded leads</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>April</strong>\n          <span>2,933 recorded leads</span>\n        </div>\n      </div>\n    </figure>\n\n    <figure class=\"column-chart section-lined\"\n            style=\"--count:3;margin-top:38px\">\n      <div class=\"chart-heading\">\n        <h3>Recorded eligibility outcomes</h3>\n        <span>Lead counts \u00b7 shared scale</span>\n      </div>\n\n      <div class=\"plot\"\n           role=\"img\"\n           aria-label=\"5,962 leads had no recorded eligibility outcome; 2,299 were labelled ineligible; 14 were recorded eligible. Scale zero to 6,000 leads.\">\n        <div class=\"grid\" aria-hidden=\"true\">\n          <div class=\"gridline\" style=\"--position:0%\">\n            <span class=\"axis-label\">0</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:33.3333%\">\n            <span class=\"axis-label\">2,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:66.6667%\">\n            <span class=\"axis-label\">4,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:100%\">\n            <span class=\"axis-label\">6,000</span>\n          </div>\n        </div>\n\n        <div class=\"columns\" aria-hidden=\"true\">\n          <div class=\"column\" style=\"--height:99.3667%;--color:var(--pink)\">\n            <span class=\"bar-value\">5,962</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:38.3167%;--color:var(--lavender)\">\n            <span class=\"bar-value\">2,299</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:0.233333%\">\n            <span class=\"bar-value\">14</span>\n            <span class=\"bar\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"column-labels\" aria-hidden=\"true\">\n        <div class=\"column-label\">\n          <strong>Eligibility not recorded</strong>\n          <span>72.05%</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>Labelled ineligible</strong>\n          <span>27.78%</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>Recorded eligible</strong>\n          <span>0.17%</span>\n        </div>\n      </div>\n\n      <figcaption class=\"note chart-note\">\n        \u201cIneligible\u201d included non-response and missing remarks.\n        The recorded eligible share is not a verified eligibility rate.\n        Missing records do not establish wasted spend.\n      </figcaption>\n    </figure>\n\n    <div class=\"baseline-sales\">\n      <strong>RM30,500</strong>\n      <div>\n        <p>\n          Financing value across four accepted new-customer Facebook\n          cases identified in the available sales records.\n        </p>\n        <p class=\"note\">\n          Excludes repeat customers and red-highlighted, unaccepted\n          applications. April coverage is incomplete; customer\n          classifications were checked against earlier 2026 records.\n        </p>\n      </div>\n    </div>\n\n    <p class=\"note chart-note\">\n      Actual spend could not be reliably assigned to individual lead\n      outcomes. These accepted-sales records are separate from the\n      broader assessed opportunity values reported below.\n    </p>\n  </section>\n\n";
after.innerHTML="  <!-- CAMPAIGN RESULTS -->\n<section class=\"section section-lined cpl-comparison\">\n<span class=\"kicker\">Campaign results \u00b7 1\u201327 October 2026</span>\n<h2>Higher CPL after moving screening into the form.</h2>\n<p class=\"description\">Baseline Instant Form costs compared with October \u00b7 RM per submitted lead</p>\n<figure class=\"column-chart cpl-columns\" style=\"--count:4\">\n<div class=\"chart-heading\"><h3>Cost per submitted lead</h3><span>Shared scale \u00b7 RM0\u2013RM40</span></div>\n<div class=\"plot\" role=\"img\" aria-label=\"Baseline Instant Form CPL figures RM10, RM19.64 and RM20.34; January–April 2026 baseline records. October CPL RM21.90. Shared scale zero to RM40; dashed benchmark RM30.\">\n<div class=\"grid\" aria-hidden=\"true\"><div class=\"gridline\" style=\"--position:0.0%\"><span class=\"axis-label\">RM0</span></div><div class=\"gridline\" style=\"--position:25.0%\"><span class=\"axis-label\">RM10</span></div><div class=\"gridline\" style=\"--position:50.0%\"><span class=\"axis-label\">RM20</span></div><div class=\"gridline\" style=\"--position:75.0%\"><span class=\"axis-label\">RM30</span></div><div class=\"gridline\" style=\"--position:100.0%\"><span class=\"axis-label\">RM40</span></div></div><div class=\"cpl-benchmark\" aria-hidden=\"true\"><span>RM30 benchmark</span></div><div class=\"columns\" aria-hidden=\"true\"><div class=\"column\" style=\"--height:25.0%;--color:#b9b0c2\"><span class=\"bar-value\">RM10.00</span><span class=\"bar\"></span></div><div class=\"column\" style=\"--height:49.1%;--color:#b9b0c2\"><span class=\"bar-value\">RM19.64</span><span class=\"bar\"></span></div><div class=\"column\" style=\"--height:50.849999999999994%;--color:#b9b0c2\"><span class=\"bar-value\">RM20.34</span><span class=\"bar\"></span></div><div class=\"column\" style=\"--height:54.75%;--color:var(--purple)\"><span class=\"bar-value\">RM21.90</span><span class=\"bar\"></span></div></div></div><div class=\"column-labels\" aria-hidden=\"true\"><div class=\"column-label\"><strong>Baseline 1</strong><span>January–April 2026</span></div><div class=\"column-label\"><strong>Baseline 2</strong><span>January–April 2026</span></div><div class=\"column-label\"><strong>Baseline 3</strong><span>January–April 2026</span></div><div class=\"column-label\"><strong>October 2026</strong><span>1\u201327 October \u00b7 119 leads</span></div></div>\n<figcaption class=\"note chart-note cpl-period-note\">The three baseline figures are from January–April 2026; individual monthly assignments were not supplied. These figures compare submitted-lead costs across different form journeys, not verified eligible-lead costs.</figcaption></figure>\n<div class=\"screening-comparison\" aria-label=\"Before and after enquiry form change\">\n<article><h3>Before</h3><p>Customer service checked employment eligibility after submission.</p><p>CPL measured enquiries before that screening.</p></article>\n<article><h3>After</h3><p>Employment questions brought screening into the Instant Form.</p><p>CPL reflected submissions through the revised form.</p></article></div>\n<p class=\"description\">Screening can reduce submission volume and increase CPL. The decision prioritised relevant enquiries over submission volume; the available records do not isolate screening\u2019s effect on cost.</p>\n<p class=\"note chart-note\">Employment questions establish that eligibility information was collected earlier. Whether the form prevented unsuitable applicants from submitting was not verified; filtering and the number of excluded applicants are not claimed.</p>\n<aside class=\"broad-support\"><h3>Separate October campaign comparison</h3><p>Existing broad campaign: <strong>RM34.19</strong> per lead \u00b7 October result: <strong>RM21.90</strong> per lead.</p><p class=\"note\">These are separate campaign results, not evidence of improvement over the historical baseline or an account-wide before-and-after test. RM30 is a benchmark, not a guaranteed cap.</p></aside>\n</section>\n\n  <!-- BUDGET CLOCK DIRECTLY BELOW RESULTS -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">Budget scheduling</span>\n    <h2>Reduce overnight exposure. Restore budget at 8 am.</h2>\n\n    <div class=\"budget-context\">\n      <span>Available advertising budget: <strong>RM7,000</strong></span>\n      <span>Primary conversion: <strong>Financing enquiry</strong></span>\n    </div>\n\n    <p class=\"description\">\n      Overnight acquisition produced lower-quality enquiries and\n      sometimes no leads despite spend.\n    </p>\n\n    <div class=\"clock-panel\" data-period=\"night\">\n      <div class=\"clock-top\">\n        <span class=\"clock-eyebrow\">Broad test campaign \u00b7 Budget schedule</span>\n        <button class=\"clock-play\" type=\"button\"\n                aria-label=\"Pause automatic clock changes\">Pause</button>\n      </div>\n\n      <div class=\"clock-time\" role=\"img\"\n           aria-label=\"12:00 AM, Kuala Lumpur time\">\n        <span class=\"clock-digits\" aria-hidden=\"true\">12:00</span>\n        <span class=\"clock-meridiem\" aria-hidden=\"true\">AM</span>\n      </div>\n\n      <div class=\"clock-meta\">\n        <span class=\"clock-period\">Overnight</span>\n        <div class=\"clock-format\" role=\"group\" aria-label=\"Clock format\">\n          <button type=\"button\" data-format=\"12\"\n                  aria-label=\"12-hour format\" aria-pressed=\"true\">12h</button>\n          <button type=\"button\" data-format=\"24\"\n                  aria-label=\"24-hour format\" aria-pressed=\"false\">24h</button>\n        </div>\n      </div>\n\n      <div class=\"clock-location\">\n        <p class=\"clock-city\">Kuala Lumpur,<br>Malaysia</p>\n        <p class=\"clock-zone\">MYT \u00b7 UTC+08:00</p>\n      </div>\n\n      <div class=\"clock-detail\">\n        <h3>REDUCE \u00b7 RM10</h3>\n        <p>Lower the daily budget during weaker acquisition hours.</p>\n      </div>\n    </div>\n\n    <p class=\"note chart-note\">\n      Scheduled daily-budget settings, not spend per time window.\n      RM300 replaces RM10. CPL target: RM30.\n    </p>\n  </section>\n\n  <!-- POST-INTERVENTION TIMELINE -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">After the changes \u00b7 August\u2013October 2026</span>\n    <h2>Assessed financing opportunity value.</h2>\n\n    <p class=\"description\">\n      Values were assigned after assessing whether applicants had\n      sufficient deduction capacity to cover monthly repayments.\n      These opportunities count regardless of subsequent sales conversion.\n    </p>\n\n    <ol class=\"timeline\">\n      <li class=\"timeline-month\">\n        <span class=\"timeline-date\">AUGUST</span>\n        <div class=\"timeline-rail\" aria-hidden=\"true\"></div>\n        <article class=\"timeline-card\">\n          <span class=\"timeline-phase\">Lead generation</span>\n          <strong class=\"timeline-value\">RM97,500</strong>\n          <p>\n            Recorded opportunity value before September\u2019s\n            audience and creative testing.\n          </p>\n        </article>\n      </li>\n\n      <li class=\"timeline-month testing\">\n        <span class=\"timeline-date\">SEPTEMBER</span>\n        <div class=\"timeline-rail\" aria-hidden=\"true\"></div>\n        <article class=\"timeline-card\">\n          <span class=\"timeline-phase\">Audience &amp; creative testing</span>\n          <strong class=\"timeline-value\">RM6,000</strong>\n          <p>\n            Focused on testing audiences and creatives,\n            rather than maximising lead generation.\n          </p>\n        </article>\n      </li>\n\n      <li class=\"timeline-month october\">\n        <span class=\"timeline-date\">OCTOBER</span>\n        <div class=\"timeline-rail\" aria-hidden=\"true\"></div>\n        <article class=\"timeline-card\">\n          <span class=\"timeline-phase\">Lead generation following testing</span>\n          <strong class=\"timeline-value\">RM121,500</strong>\n          <p>\n            RM24,000 more in recorded assessed financing\n            opportunity value than August.\n          </p>\n        </article>\n      </li>\n    </ol>\n\n    <div class=\"timeline-growth\">\n      <strong>+24.6%</strong>\n      <p>\n        Higher recorded opportunity value in October than August.\n        September served a different campaign objective.\n      </p>\n    </div>\n\n    <details class=\"metric-details\">\n      <summary>How to read these values</summary>\n      <p class=\"note\">\n        Totals include assessed financing amounts above RM0,\n        irrespective of later sales conversion. They are not company\n        revenue or final financing approvals. The earlier RM30,500\n        baseline covers identified accepted sales, so it is not used\n        to calculate opportunity-value growth. October reflects the\n        supplied reporting snapshot, and the August\u2013October comparison\n        does not isolate the effect of testing.\n      </p>\n    </details>\n  </section>\n\n  <!-- CONCLUSION -->\n<section class=\"section outcome factual-outcome\"><span class=\"kicker\">Outcome</span><h2>What changed?</h2>\n<ul class=\"factual-outcomes\">\n<li><strong>Earlier screening:</strong> Employment eligibility questions introduced in Instant Forms.</li>\n<li><strong>Acquisition cost:</strong> October CPL was RM21.90 across 119 leads\u2014higher than the listed baseline figures, within the RM30 benchmark.</li>\n<li><strong>Assessed financing value:</strong> RM97,500 in August \u2192 RM121,500 in October; September focused on testing.</li>\n<li><strong>Measurement limit:</strong> A verified improvement in eligible-lead share could not be calculated.</li>\n</ul><p class=\"note chart-note\">January\u2013April advertising spend of RM91,232.52 is documented. Spend attributable to unsuitable leads remains unquantified. Baseline spend, accepted sales and assessed opportunities measure different parts of the journey; no ROAS is claimed.</p></section>\n\n  <footer class=\"footer\">\n    <p class=\"note\">\n      Baseline: January\u2013April 2026.\n      October CPL reporting: 1\u201327 October 2026.\n      Financing values reflect the supplied records and assessment criteria.\n    </p>\n  </footer>\n\n";
report.insertBefore(before,execution);execution.after(after);const root=after;



  const panel = root.querySelector(".clock-panel");
  const time = root.querySelector(".clock-time");
  const digits = root.querySelector(".clock-digits");
  const meridiem = root.querySelector(".clock-meridiem");
  const period = root.querySelector(".clock-period");
  const heading = root.querySelector(".clock-detail h3");
  const description = root.querySelector(".clock-detail p");
  const playback = root.querySelector(".clock-play");
  const formatButtons = [...root.querySelectorAll("[data-format]")];

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const states = [
    {
      hour: 0,
      period: "night",
      label: "Overnight",
      heading: "REDUCE · RM10",
      description: "Lower the daily budget during weaker acquisition hours."
    },
    {
      hour: 8,
      period: "morning",
      label: "Morning",
      heading: "RESTORE · RM300",
      description: "Restore the daytime daily-budget setting."
    }
  ];

  let activeState = 0;
  let format = 12;
  let playing = !reducedMotion.matches;
  let visible = !("IntersectionObserver" in window);
  let timer;

  function renderTime() {
    const hour = states[activeState].hour;

    if (format === 24) {
      digits.textContent = `${String(hour).padStart(2, "0")}:00`;
      meridiem.hidden = true;
    } else {
      digits.textContent = `${hour % 12 || 12}:00`;
      meridiem.textContent = hour < 12 ? "AM" : "PM";
      meridiem.hidden = false;
    }

    time.setAttribute(
      "aria-label",
      format === 24
        ? `${digits.textContent}, 24-hour format, Kuala Lumpur time`
        : `${digits.textContent} ${meridiem.textContent}, Kuala Lumpur time`
    );

    formatButtons.forEach(button => {
      button.setAttribute(
        "aria-pressed",
        String(Number(button.dataset.format) === format)
      );
    });
  }

  function renderState() {
    const state = states[activeState];
    panel.dataset.period = state.period;
    period.textContent = state.label;
    heading.textContent = state.heading;
    description.textContent = state.description;
    renderTime();
  }

  function updatePlayback() {
    playback.textContent = playing ? "Pause" : "Play";
    playback.setAttribute(
      "aria-label",
      playing
        ? "Pause automatic clock changes"
        : "Play automatic clock changes"
    );
  }

  function schedule() {
    clearTimeout(timer);

    if (!playing || !visible || document.hidden) return;

    timer = setTimeout(() => {
      activeState = (activeState + 1) % states.length;
      renderState();
      schedule();
    }, 5000);
  }

  playback.addEventListener("click", () => {
    playing = !playing;
    updatePlayback();
    schedule();
  });

  formatButtons.forEach(button => {
    button.addEventListener("click", () => {
      format = Number(button.dataset.format);
      renderTime();
      schedule();
    });
  });

  document.addEventListener("visibilitychange", schedule);
  let observer;

  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      schedule();
    }, { threshold: 0.15 });

    observer.observe(panel);
  }

  const motionChanged = event => {
    if (event.matches) {
      playing = false;
      updatePlayback();
      schedule();
    }
  };
  reducedMotion.addEventListener("change", motionChanged);

  renderState();
  updatePlayback();
  schedule();

return ()=>{clearTimeout(timer);observer?.disconnect();document.removeEventListener("visibilitychange",schedule);reducedMotion.removeEventListener("change",motionChanged);before.remove();after.remove();};
}};
