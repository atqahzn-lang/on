// Case 01 supplied report content; execution remains the shared interactive dial.
window.MetaFinancialReport={mount(report,execution){
const before=document.createElement("div"),after=document.createElement("div");before.className=after.className="financial-layout";
before.innerHTML="\n\n  <header>\n    <p class=\"meta\">\n      Meta Advertising \u00b7 Financial Services \u00b7 Malaysia \u00b7 April\u2013October 2026\n    </p>\n    <p class=\"case-title\">\n      CASE 01 \u2014 Financial Services \u00b7 Government Employees\n    </p>\n  </header>\n\n  <!-- PROBLEM -->\n  <section class=\"problem\">\n    <span class=\"kicker\">The problem</span>\n    <h1>Low-cost enquiries offered limited visibility into eligibility.</h1>\n\n    <ul class=\"bullets\">\n      <li>\n        January\u2013April advertising spend totalled RM91,232.52,\n        alongside 8,275 recorded leads.\n      </li>\n      <li>\n        Customer service checked employment eligibility after\n        acquisition, but most eligibility outcomes were not recorded.\n      </li>\n      <li>\n        The priority was to bring screening earlier and assess\n        acquisition beyond the cost of a submitted enquiry.\n      </li>\n    </ul>\n  </section>\n\n<section class=\"summary-strip\" aria-labelledby=\"financial-summary-title\"><h2 id=\"financial-summary-title\">Earlier screening. Acquisition assessed beyond CPL.</h2><div class=\"summary-items\"><p><strong>Screening moved earlier</strong><span>Employment eligibility questions introduced in Instant Forms.</span></p><p><strong>RM21.90 October CPL</strong><span>119 leads, within the RM30 operating benchmark.</span></p><p><strong>RM121,500 assessed financing value</strong><span>Recorded October opportunities with assessed repayment capacity. Not established as all arising from the 119 leads.</span></p></div></section>\n  <!-- BASELINE -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">Baseline \u00b7 January\u2013April 2026</span>\n    <h2>The scale of acquisition. The gaps in reporting.</h2>\n\n    <div class=\"stats\">\n      <div class=\"stat\">\n        <strong>RM91,232.52</strong>\n        <span>Actual advertising spend</span>\n        <small>January\u2013April 2026</small>\n      </div>\n\n      <div class=\"stat\">\n        <strong>8,275</strong>\n        <span>Recorded leads</span>\n        <small>Facebook WhatsApp and Instant Forms</small>\n      </div>\n\n      <div class=\"stat\">\n        <strong>72.05%</strong>\n        <span>Eligibility outcome not recorded</span>\n        <small>5,962 leads</small>\n      </div>\n    </div>\n\n    <figure class=\"column-chart spend-chart\" style=\"--count:4\">\n      <div class=\"chart-heading\">\n        <h3>Monthly advertising spend</h3>\n        <span>Actual spend \u00b7 RM0\u2013RM40,000</span>\n      </div>\n\n      <div class=\"plot\"\n           role=\"img\"\n           aria-label=\"January: RM12,367.24 and 1,830 recorded leads. February: RM20,404.48 and 2,772 leads. March: RM25,031.84 and 740 leads. April: RM33,428.96 and 2,933 leads.\">\n        <div class=\"grid\" aria-hidden=\"true\">\n          <div class=\"gridline\" style=\"--position:0%\">\n            <span class=\"axis-label\">RM0</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:25%\">\n            <span class=\"axis-label\">RM10,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:50%\">\n            <span class=\"axis-label\">RM20,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:75%\">\n            <span class=\"axis-label\">RM30,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:100%\">\n            <span class=\"axis-label\">RM40,000</span>\n          </div>\n        </div>\n\n        <div class=\"columns\" aria-hidden=\"true\">\n          <div class=\"column\" style=\"--height:30.9181%\">\n            <span class=\"bar-value\">RM12,367.24</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:51.0112%\">\n            <span class=\"bar-value\">RM20,404.48</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:62.5796%\">\n            <span class=\"bar-value\">RM25,031.84</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:83.5724%\">\n            <span class=\"bar-value\">RM33,428.96</span>\n            <span class=\"bar\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"column-labels\" aria-hidden=\"true\">\n        <div class=\"column-label\">\n          <strong>January</strong>\n          <span>1,830 recorded leads</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>February</strong>\n          <span>2,772 recorded leads</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>March</strong>\n          <span>740 recorded leads</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>April</strong>\n          <span>2,933 recorded leads</span>\n        </div>\n      </div>\n    </figure>\n\n    <figure class=\"column-chart section-lined\"\n            style=\"--count:3;margin-top:38px\">\n      <div class=\"chart-heading\">\n        <h3>Recorded eligibility outcomes</h3>\n        <span>Lead counts \u00b7 shared scale</span>\n      </div>\n\n      <div class=\"plot\"\n           role=\"img\"\n           aria-label=\"5,962 leads had no recorded eligibility outcome, 72.05 percent. 2,299 were labelled ineligible, 27.78 percent. 14 were recorded eligible, 0.17 percent. Scale zero to 6,000 leads.\">\n        <div class=\"grid\" aria-hidden=\"true\">\n          <div class=\"gridline\" style=\"--position:0%\">\n            <span class=\"axis-label\">0</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:33.3333%\">\n            <span class=\"axis-label\">2,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:66.6667%\">\n            <span class=\"axis-label\">4,000</span>\n          </div>\n          <div class=\"gridline\" style=\"--position:100%\">\n            <span class=\"axis-label\">6,000</span>\n          </div>\n        </div>\n\n        <div class=\"columns\" aria-hidden=\"true\">\n          <div class=\"column\"\n               style=\"--height:99.3667%;--color:var(--lavender)\">\n            <span class=\"bar-value\">5,962</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\"\n               style=\"--height:38.3167%;--color:#ada3b7\">\n            <span class=\"bar-value\">2,299</span>\n            <span class=\"bar\"></span>\n          </div>\n          <div class=\"column\" style=\"--height:0.233333%\">\n            <span class=\"bar-value\">14</span>\n            <span class=\"bar\"></span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"column-labels\" aria-hidden=\"true\">\n        <div class=\"column-label\">\n          <strong>Eligibility not recorded</strong>\n          <span>72.05%</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>Labelled ineligible</strong>\n          <span>27.78%</span>\n        </div>\n        <div class=\"column-label\">\n          <strong>Recorded eligible</strong>\n          <span>0.17%</span>\n        </div>\n      </div>\n\n      <figcaption class=\"note chart-note\">\n        \u201cIneligible\u201d included non-response and missing remarks.\n        The recorded eligible share is not a verified eligibility rate.\n        Unknown outcomes do not establish wasted spend.\n      </figcaption>\n    </figure>\n\n    <details class=\"metric-details baseline-sales-note\"><summary>Baseline sales records: scope and limitations</summary><p class=\"note\">Four accepted new-customer Facebook cases totalled RM30,500 in financing value.</p><ul class=\"bullets note\"><li>Repeat customers and unaccepted applications were excluded.</li><li>April coverage was incomplete; customer classifications were checked against earlier 2026 records.</li><li>These accepted-sales values are a different measure from assessed financing opportunities and are not used to calculate growth or ROAS.</li></ul></details>\n\n    <p class=\"note chart-note\">\n      Actual spend could not be reliably assigned to individual lead\n      outcomes. Accepted-sales values are separate from the assessed\n      financing opportunities reported below.\n    </p>\n  </section>\n\n";
after.innerHTML="  <!-- CAMPAIGN RESULTS -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">Campaign results \u00b7 1\u201327 October 2026</span>\n    <h2>Higher CPL after introducing form screening.</h2>\n<p class=\"description\">October recorded 119 leads at RM21.90 per lead. Previously supplied Instant Form CPL figures were RM10, RM19.64 and RM20.34.</p>\n<div class=\"october-result\"><strong>RM21.90</strong><span>October CPL \u00b7 119 leads</span><small>Within the RM30 operating benchmark</small></div>\n<p class=\"note chart-note\">Historical figures represent separate reported results; their periods and campaign scope were not specified. They are not a combined average or a controlled before-and-after comparison.</p>\n    <div class=\"screening-comparison\">\n      <div class=\"screening-step\">\n        <span>Before</span>\n        <h3>Screening after acquisition</h3>\n        <p>\n          Customer service checked employment eligibility after\n          an enquiry had been submitted.\n        </p>\n      </div>\n\n      <div class=\"screening-step\">\n        <span>After</span>\n        <h3>Screening within the enquiry form</h3>\n        <p>\n          Employment questions brought an eligibility check into\n          the acquisition journey, before customer-service follow-up.\n        </p>\n      </div>\n    </div>\n\n    <div class=\"tradeoff\"><h3>Prioritise relevant enquiries over submission volume.</h3><p>Employment questions moved screening into the enquiry form. The decision accepted the possibility of fewer submissions and a higher CPL in exchange for checking suitability earlier.</p><p>October CPL remained within the RM30 benchmark. Recorded financing opportunity values provided additional context beyond submission cost.</p></div><p class=\"note chart-note\">The available records do not isolate screening\u2019s effect on CPL or establish the change in eligible-lead share.</p>\n\n    <details class=\"metric-details\">\n      <summary>Supporting context: existing broad campaign</summary>\n      <p class=\"note\">\n        The existing broad campaign recorded RM34.19 CPL, compared\n        with RM21.90 for the reported October campaign. This is a\n        separate campaign comparison, not an account-wide\n        before-and-after measure or evidence of improved eligibility.\n      </p>\n    </details>\n  </section>\n\n  <!-- BUDGET CLOCK -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">Budget scheduling</span>\n    <h2>Reduce overnight exposure. Restore budget at 8 am.</h2>\n\n    <div class=\"budget-context\">\n      <span>Available advertising budget: <strong>RM7,000</strong></span>\n      <span>Primary conversion: <strong>Financing enquiry</strong></span>\n    </div>\n\n    <p class=\"description\">\n      Overnight acquisition produced lower-quality enquiries and\n      sometimes no leads despite spend. Scheduled changes reduced\n      exposure for the broad campaign under testing.\n    </p>\n\n<div class=\"clock-panel compact-clock\" data-period=\"night\">\n<div class=\"clock-top\"><div><span class=\"clock-eyebrow\">Scheduled budget changes</span><p class=\"clock-zone\">Kuala Lumpur, Malaysia \u00b7 MYT</p></div><div class=\"clock-controls\"><div class=\"clock-format\" role=\"group\" aria-label=\"Clock format\"><button type=\"button\" data-format=\"12\" aria-label=\"12-hour format\" aria-pressed=\"true\">12h</button><button type=\"button\" data-format=\"24\" aria-label=\"24-hour format\" aria-pressed=\"false\">24h</button></div><button class=\"clock-play\" type=\"button\" aria-label=\"Pause automatic clock changes\">Pause</button></div></div>\n<div class=\"clock-body\"><div><div class=\"clock-time\" role=\"img\" aria-label=\"12:00 AM, Kuala Lumpur time\"><span class=\"clock-digits\" aria-hidden=\"true\">12:00</span><span class=\"clock-meridiem\" aria-hidden=\"true\">AM</span></div><span class=\"clock-period\">Overnight</span></div><div class=\"clock-detail\"><h3>REDUCE \u00b7 RM10</h3><p>Set the broad test campaign\u2019s daily budget to RM10.</p></div></div></div>\n<p class=\"note chart-note\">Daily-budget settings, not spending allocations per time window. RM300 replaces RM10.</p>\n</section>\n\n  <!-- OPPORTUNITY TIMELINE -->\n  <section class=\"section section-lined\">\n    <span class=\"kicker\">Recorded opportunities \u00b7 August\u2013October 2026</span>\n    <h2>Look beyond submission cost to financing potential.</h2>\n\n    <p class=\"description\">\n      Financing values were assigned after assessing whether applicants\n      had sufficient deduction capacity to cover monthly repayments.\n      These assessed opportunities count regardless of subsequent\n      sales conversion.\n    </p>\n\n    <ol class=\"timeline\">\n      <li class=\"timeline-month\">\n        <span class=\"timeline-date\">AUGUST</span>\n        <div class=\"timeline-rail\" aria-hidden=\"true\"></div>\n        <article class=\"timeline-card\">\n          <span class=\"timeline-phase\">Lead generation</span>\n          <strong class=\"timeline-value\">RM97,500</strong>\n          <p>\n            Recorded assessed financing opportunity value before\n            September\u2019s testing phase.\n          </p>\n        </article>\n      </li>\n\n      <li class=\"timeline-month testing\">\n        <span class=\"timeline-date\">SEPTEMBER</span>\n        <div class=\"timeline-rail\" aria-hidden=\"true\"></div>\n        <article class=\"timeline-card\">\n          <span class=\"timeline-phase\">Audience &amp; creative testing</span>\n          <strong class=\"timeline-value\">RM6,000</strong>\n          <p>\n            The campaign objective focused on testing audiences\n            and creatives, rather than maximising lead volume.\n          </p>\n        </article>\n      </li>\n\n      <li class=\"timeline-month october\">\n        <span class=\"timeline-date\">OCTOBER</span>\n        <div class=\"timeline-rail\" aria-hidden=\"true\"></div>\n        <article class=\"timeline-card\">\n          <span class=\"timeline-phase\">Lead generation following testing</span>\n          <strong class=\"timeline-value\">RM121,500</strong>\n          <p>\n            RM24,000 more in recorded assessed financing\n            opportunity value than August.\n          </p>\n        </article>\n      </li>\n    </ol>\n\n    <div class=\"timeline-growth\">\n      <strong>+24.6%</strong>\n      <p>\n        Higher recorded opportunity value in October than August.\n        September served a testing objective.\n      </p>\n    </div>\n\n    <details class=\"metric-details\">\n      <summary>How to read these values</summary>\n      <p class=\"note\">\n        Totals include assessed financing amounts above RM0, irrespective\n        of later sales conversion. They are not company revenue or\n        final financing approvals. The RM30,500 baseline covers\n        identified accepted sales and is not used to calculate\n        opportunity-value growth. These records do not establish\n        verified Meta attribution or isolate the effects of screening\n        and testing. Comparable spend and coverage would be needed\n        to assess changes in efficiency.\n      </p>\n    </details>\n  </section>\n\n  <!-- OUTCOME -->\n  <section class=\"section outcome\">\n    <span class=\"kicker\">Outcome</span>\n    <h2>What changed?</h2>\n\n    <p class=\"outcome-intro\">\n      Screening moved earlier. October CPL was higher than the\n      listed historical Instant Form figures but remained within\n      the operating benchmark. Recorded financing opportunity\n      value also increased from August to October.\n    </p>\n\n    <div class=\"outcome-grid\">\n      <article class=\"outcome-item\">\n        <span class=\"outcome-label\">Employment screening</span>\n        <strong class=\"outcome-status\">Earlier in the journey</strong>\n        <p>\n          Employment eligibility questions introduced in Instant Forms\n          before customer-service follow-up.\n        </p>\n      </article>\n\n      <article class=\"outcome-item\">\n        <span class=\"outcome-label\">October acquisition cost</span>\n        <strong class=\"outcome-status\">RM21.90 CPL</strong>\n        <p>\n          119 leads, 1\u201327 October. Higher than the listed historical\n          figures; within the RM30 benchmark.\n        </p>\n      </article>\n\n      <article class=\"outcome-item\">\n        <span class=\"outcome-label\">Assessed financing opportunities</span>\n        <strong class=\"outcome-status\">RM121,500</strong>\n        <p>\n          October\u2019s recorded financing opportunity value was\n          RM24,000 above August.\n        </p>\n      </article>\n\n      <article class=\"outcome-item\">\n        <span class=\"outcome-label\">Meta account restrictions</span>\n        <strong class=\"outcome-status\">Zero recorded</strong>\n        <p>\n          Zero monthly restrictions recorded during April\u2013October.\n        </p>\n      </article>\n    </div>\n\n    <ul class=\"bullets note\">\n      <li>\n        Eligibility-rate improvement and spending attributable\n        to unsuitable leads could not be quantified.\n      </li>\n      <li>\n        Baseline spend, accepted sales and assessed opportunities\n        measure different parts of the journey; no ROAS is claimed.\n      </li>\n    </ul>\n  </section>\n\n  <footer class=\"footer\">\n    <p class=\"note\">\n      Baseline: January\u2013April 2026.\n      October CPL reporting: 1\u201327 October 2026.\n      Financing values reflect the supplied reporting snapshot\n      and assessment criteria.\n    </p>\n  </footer>\n\n";
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
      description: "Set the broad test campaign’s daily budget to RM10."
    },
    {
      hour: 8,
      period: "morning",
      label: "Morning",
      heading: "RESTORE · RM300",
      description: "Restore the campaign’s daily budget to RM300."
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
