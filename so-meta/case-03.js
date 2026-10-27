// Current approved format: comparisons → scale/context → execution dial + full process → outcome.
// See CASE-STUDY-FORMAT.md. Client identity remains anonymised where required.
window.MetaCaseTemplates = window.MetaCaseTemplates || {};
window.MetaCaseInitializers = window.MetaCaseInitializers || {};
window.MetaCaseTemplates["03"] = "<article class=\"rn-report renovation-report\" id=\"renovation-case-study\" data-case=\"03\">\n\n  <header>\n    <p class=\"rn-meta\">\n      Meta Advertising · Home Services · Singapore · January–March 2026\n    </p>\n    <p class=\"rn-case-title\">\n      Daily Lead Costs of 25–50 After Creative Reselection\n    </p>\n  </header>\n\n  <section class=\"rn-problem\" aria-labelledby=\"rn-problem-title\">\n    <span class=\"rn-kicker\">The problem</span>\n\n    <h1 id=\"rn-problem-title\">\n      Too many active ads.<br>\n      Too little evidence of efficient leads.\n    </h1>\n\n    <p class=\"rn-intro\">\n      A renovation company’s main campaign targeted a broad audience\n      with a daily budget of $1,000.\n    </p>\n\n    <ul>\n      <li>Up to 50 ads were active in the main campaign.</li>\n      <li>Some creatives generated leads at costs as high as $300.</li>\n      <li>Other creatives received too little spend to establish their performance.</li>\n    </ul>\n\n    <div class=\"rn-context\">\n      <span>Daily budget <strong>$1,000 · main campaign</strong></span>\n      <span>Audience <strong>Broad</strong></span>\n      <span>Objective <strong>Lead generation</strong></span>\n    </div>\n  </section>\n\n  <!-- Comparisons adapted to the available evidence. -->\n  <section class=\"rn-comparisons\" aria-label=\"Campaign changes and lead costs\">\n\n    <article class=\"rn-comparison\">\n      <h3>Active ads in the main campaign</h3>\n      <p class=\"rn-subtitle\">Before and after creative selection</p>\n\n      <div class=\"rn-chart\"\n           role=\"img\"\n           aria-label=\"Up to 50 active ads before selection, reduced to five active ads.\">\n\n        <div class=\"rn-bar-group\">\n          <div class=\"rn-bar-label\">\n            <span>Before selection</span>\n            <strong>Up to 50</strong>\n          </div>\n          <div class=\"rn-track\">\n            <span class=\"rn-bar\" style=\"--width:100%\"></span>\n          </div>\n        </div>\n\n        <div class=\"rn-bar-group\">\n          <div class=\"rn-bar-label\">\n            <span>After selection</span>\n            <strong>5</strong>\n          </div>\n          <div class=\"rn-track\">\n            <span class=\"rn-bar is-pink\" style=\"--width:10%\"></span>\n          </div>\n        </div>\n\n        <div class=\"rn-axis\">\n          <span>0 ads</span>\n          <span>50 ads</span>\n        </div>\n      </div>\n\n      <div class=\"rn-comparison-summary\">\n        <strong class=\"rn-summary-value\">Up to 50 → 5</strong>\n        <p>\n          A smaller active set, selected using lead-generation performance.\n        </p>\n      </div>\n    </article>\n\n    <article class=\"rn-comparison\">\n      <h3>Reported cost per lead</h3>\n      <p class=\"rn-subtitle\">Earlier creative peak and subsequent daily range</p>\n\n      <div class=\"rn-chart\"\n           role=\"img\"\n           aria-label=\"Earlier individual creatives reached $300 per lead. Subsequent reported daily CPL ranged from $25 to $50 during January to March 2026. These are different measurement scopes.\">\n\n        <div class=\"rn-bar-group\">\n          <div class=\"rn-bar-label\">\n            <span>Earlier creative-level peak</span>\n            <strong>$300</strong>\n          </div>\n          <div class=\"rn-track\">\n            <span class=\"rn-bar\" style=\"--width:100%\"></span>\n          </div>\n        </div>\n\n        <div class=\"rn-bar-group\">\n          <div class=\"rn-bar-label\">\n            <span>Daily CPL · January–March</span>\n            <strong>25–50</strong>\n          </div>\n          <div class=\"rn-track\">\n            <span class=\"rn-bar is-pink\"\n                  style=\"--start:8.3333%;--width:8.3334%\"></span>\n          </div>\n        </div>\n\n        <div class=\"rn-axis\">\n          <span>$0</span>\n          <span>$150</span>\n          <span>$300</span>\n        </div>\n      </div>\n\n      <div class=\"rn-comparison-summary\">\n        <strong class=\"rn-summary-value\">25–50</strong>\n        <p>\n          Reported daily CPL after expensive creatives were paused\n          and alternatives introduced.\n        </p>\n      </div>\n    </article>\n\n  </section>\n\n  <p class=\"rn-note rn-comparison-note\">\n    The earlier $300 figure is a creative-level peak; 25–50 is a\n    subsequent daily CPL range. They are not matched campaign averages,\n    so no percentage reduction is calculated.\n  </p>\n\n  <!-- PH-style visual context -->\n  <section class=\"rn-change\" aria-labelledby=\"rn-change-title\">\n    <h2 id=\"rn-change-title\">Fewer active ads. More deliberate selection.</h2>\n\n    <div class=\"rn-change-layout\">\n      <div>\n        <strong class=\"rn-big-number\">5</strong>\n        <p class=\"rn-change-copy\">\n          Active ads after reviewing\n          <strong>clicks, actual leads and acquisition cost.</strong>\n        </p>\n        <p class=\"rn-legend\">Each dot represents one active ad.</p>\n      </div>\n\n      <div>\n        <div class=\"rn-dot-group\">\n          <div class=\"rn-dot-label\">\n            <span>Before selection</span>\n            <strong>Up to 50</strong>\n          </div>\n          <div class=\"rn-dots\" data-dots=\"50\" aria-hidden=\"true\"></div>\n        </div>\n\n        <div class=\"rn-dot-group\">\n          <div class=\"rn-dot-label\">\n            <span>After selection</span>\n            <strong>5</strong>\n          </div>\n          <div class=\"rn-dots\" data-dots=\"5\" aria-hidden=\"true\"></div>\n        </div>\n      </div>\n    </div>\n\n    <p class=\"rn-note\">\n      The change combined a smaller active set with creative replacement.\n      Previously underfunded ads were given an opportunity to establish\n      performance; fewer ads alone were not isolated as the cause of the result.\n    </p>\n  </section>\n\n  <section class=\"rn-execution\" aria-labelledby=\"rn-execution-title\">\n    <span class=\"rn-kicker\">Execution</span>\n    <h2 id=\"rn-execution-title\">The decisions behind the results.</h2>\n\n    <div class=\"rn-solution\">\n      <h3>Solution</h3>\n      <p>\n        Assess creatives by the enquiries they generated, pause expensive\n        ads and give previously underfunded alternatives a chance\n        within a smaller active set.\n      </p>\n    </div>\n\n    <div class=\"rn-dial-layout\">\n\n      <div class=\"rn-dial\" role=\"group\" aria-label=\"Select an execution stage\">\n        <svg viewBox=\"0 0 250 300\" fill=\"none\" aria-hidden=\"true\">\n          <path d=\"M32 10 C250 55 250 245 32 290\"\n                stroke=\"#e8e4ec\" stroke-width=\"2\"/>\n        </svg>\n\n        <button type=\"button\" class=\"rn-node\" data-stage=\"0\"\n                style=\"--x:37%;--y:10%\"\n                aria-label=\"Stage 1: Evaluate clicks against leads\"\n                aria-pressed=\"true\"\n                aria-controls=\"rn-stage-panel\">01</button>\n\n        <button type=\"button\" class=\"rn-node\" data-stage=\"1\"\n                style=\"--x:73%;--y:36%\"\n                aria-label=\"Stage 2: Pause expensive creatives\"\n                aria-pressed=\"false\"\n                aria-controls=\"rn-stage-panel\">02</button>\n\n        <button type=\"button\" class=\"rn-node\" data-stage=\"2\"\n                style=\"--x:73%;--y:64%\"\n                aria-label=\"Stage 3: Give overlooked creatives a chance\"\n                aria-pressed=\"false\"\n                aria-controls=\"rn-stage-panel\">03</button>\n\n        <button type=\"button\" class=\"rn-node\" data-stage=\"3\"\n                style=\"--x:37%;--y:90%\"\n                aria-label=\"Stage 4: Focus on five active ads\"\n                aria-pressed=\"false\"\n                aria-controls=\"rn-stage-panel\">04</button>\n      </div>\n\n      <div class=\"rn-stage\">\n        <div id=\"rn-stage-panel\" aria-live=\"polite\" aria-atomic=\"true\">\n          <span class=\"rn-stage-number\">STAGE 01</span>\n          <h3 class=\"rn-stage-title\">Evaluate clicks against leads</h3>\n          <p class=\"rn-stage-description\">\n            Reviewed cost per click and unique click-through rate\n            alongside actual leads and cost per result. Used these\n            measures together to assess whether engagement translated\n            into efficient enquiries.\n          </p>\n        </div>\n\n        <div class=\"rn-controls\">\n          <button type=\"button\" class=\"rn-prev\" disabled>← PREVIOUS</button>\n          <span class=\"rn-page-count\" aria-label=\"Stage 1 of 4\">1 / 4</span>\n          <button type=\"button\" class=\"rn-next\">NEXT →</button>\n        </div>\n      </div>\n\n    </div>\n\n    <details class=\"rn-process\">\n      <summary>\n        Skip the dial — view the complete process\n        <small>All 4 campaign decisions in one timeline</small>\n      </summary>\n\n      <ol class=\"rn-timeline\">\n        <li>\n          <h3>Evaluate clicks against leads</h3>\n          <p>\n            Reviewed cost per click and unique click-through rate\n            alongside actual leads and cost per result. Used these\n            measures together to assess whether engagement translated\n            into efficient enquiries.\n          </p>\n        </li>\n\n        <li>\n          <h3>Pause expensive creatives</h3>\n          <p>\n            Paused creatives generating expensive enquiries, including\n            ads reaching $300 per lead, to stop further spend on\n            demonstrated poor performers.\n          </p>\n        </li>\n\n        <li>\n          <h3>Give overlooked creatives a chance</h3>\n          <p>\n            Introduced alternative creatives that had previously\n            received insufficient budget to establish performance.\n            Distinguished limited delivery from evidence of poor results.\n          </p>\n        </li>\n\n        <li>\n          <h3>Focus on five active ads</h3>\n          <p>\n            Reduced the main campaign to five active ads at a time,\n            combining a smaller creative set with selection based\n            on actual lead-generation performance.\n          </p>\n        </li>\n      </ol>\n    </details>\n  </section>\n\n  <section class=\"rn-outcome\" aria-labelledby=\"rn-outcome-title\">\n    <span class=\"rn-kicker\">Outcome</span>\n    <h2 id=\"rn-outcome-title\">Was the objective met?</h2>\n\n    <p class=\"rn-outcome-intro\">\n      Reported daily CPL settled within 25–50 after creative\n      reselection and a reduction to five active ads.\n    </p>\n\n    <div class=\"rn-outcome-grid\">\n      <article class=\"rn-outcome-item\">\n        <span class=\"rn-outcome-label\">Reduce lead acquisition costs</span>\n        <strong class=\"rn-status\">MET*</strong>\n        <p>\n          Daily CPL was reported at 25–50 during January–March 2026.\n          Earlier individual creatives had reached $300 per lead.\n        </p>\n      </article>\n\n      <article class=\"rn-outcome-item\">\n        <span class=\"rn-outcome-label\">Sales conversion data</span>\n        <strong class=\"rn-status is-muted\">NOT SHARED</strong>\n        <p>\n          Closed renovation projects and revenue impact could\n          not be assessed.\n        </p>\n      </article>\n    </div>\n\n    <ul class=\"rn-limits\">\n      <li>\n        *The earlier creative peak and subsequent daily range are\n        different measures; no percentage reduction is claimed.\n      </li>\n      <li>\n        Results demonstrate reported acquisition costs, not verified\n        lead quality or sales conversion.\n      </li>\n    </ul>\n  </section>\n\n  <footer class=\"rn-footer\">\n    <p class=\"rn-note\">\n      Reporting period: January–March 2026.\n    </p>\n  </footer>\n\n</article>";
window.MetaCaseInitializers["03"] = function(container) {

(() => {
  const root = container.querySelector("#renovation-case-study");
  if (!root) return;

  /* Exact ad counts; equal-sized dots in both groups. */
  root.querySelectorAll("[data-dots]").forEach(group => {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < Number(group.dataset.dots); i++) {
      const dot = document.createElement("span");
      dot.className = "rn-dot";
      fragment.appendChild(dot);
    }

    group.replaceChildren(fragment);
  });

  /* Timeline supplies the dial content. */
  const steps = [...root.querySelectorAll(".rn-timeline li")].map(item => ({
    title: item.querySelector("h3").textContent.trim(),
    description: item.querySelector("p")
      .textContent.trim().replace(/\s+/g, " ")
  }));

  const nodes = [...root.querySelectorAll(".rn-node")];
  const number = root.querySelector(".rn-stage-number");
  const title = root.querySelector(".rn-stage-title");
  const description = root.querySelector(".rn-stage-description");
  const count = root.querySelector(".rn-page-count");
  const previous = root.querySelector(".rn-prev");
  const next = root.querySelector(".rn-next");

  let current = 0;

  function render(index) {
    current = Math.max(0, Math.min(index, steps.length - 1));

    number.textContent =
      `STAGE ${String(current + 1).padStart(2, "0")}`;

    title.textContent = steps[current].title;
    description.textContent = steps[current].description;

    count.textContent = `${current + 1} / ${steps.length}`;
    count.setAttribute(
      "aria-label",
      `Stage ${current + 1} of ${steps.length}`
    );

    nodes.forEach((node, i) => {
      node.setAttribute("aria-pressed", String(i === current));
    });

    previous.disabled = current === 0;
    next.disabled = current === steps.length - 1;
  }

  nodes.forEach((node, index) => {
    node.addEventListener("click", () => render(index));

    node.addEventListener("keydown", event => {
      let destination;

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        destination = (index + 1) % nodes.length;
      } else if (
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp"
      ) {
        destination = (index - 1 + nodes.length) % nodes.length;
      } else if (event.key === "Home") {
        destination = 0;
      } else if (event.key === "End") {
        destination = nodes.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      render(destination);
      nodes[destination].focus();
    });
  });

  previous.addEventListener("click", () => {
    render(current - 1);
    if (previous.disabled) next.focus();
  });

  next.addEventListener("click", () => {
    render(current + 1);
    if (next.disabled) previous.focus();
  });

  render(0);
})();

};
