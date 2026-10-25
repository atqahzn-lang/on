/* ==========================================================
   16 — APP STATE AND HELPERS
========================================================== */

const $ = id => document.getElementById(id);

let mode = "home";
let selectionMode = "read";
let selectedCaseIndex = 0;
let readerIndex = 0;
let questIndex = 0;
let questMoving = false;
let activeStage = 0;
let lastFocusedElement = null;

const svgNS = "http://www.w3.org/2000/svg";

function text(id, value) {
  $(id).textContent = value ?? "";
}

function number(value) {
  return String(value).padStart(2, "0");
}

function selectedCase() {
  return CONFIG.cases[selectedCaseIndex];
}

function svgElement(tag, attributes = {}) {
  const el = document.createElementNS(svgNS, tag);

  Object.entries(attributes).forEach(([key, value]) => {
    el.setAttribute(key, value);
  });

  return el;
}

function showScreen(name) {
  $("title-screen").hidden = name !== "home";
  $("case-menu-screen").hidden = name !== "menu";
  $("quest-screen").hidden = name !== "quest";

  $("home-controls").hidden = name !== "home";
  $("menu-controls").hidden = name !== "menu";
  $("quest-controls").hidden = name !== "quest";

  mode = name;
}

/* ==========================================================
   17 — HOME / CASE SELECTION
========================================================== */

function showHome() {
  if (questMoving) return;
  showScreen("home");
}

function openCaseMenu(chosenMode = "read") {
  if (questMoving) return;

  selectionMode = chosenMode;
  showScreen("menu");

  text(
    "case-menu-mode",
    chosenMode === "play"
      ? "Choose a campaign to explore its decisions."
      : "Choose a campaign to read its report."
  );

  const list = $("case-menu-list");
  list.replaceChildren();

  CONFIG.cases.forEach((data, index) => {
    const button = document.createElement("button");
    button.className = "case-menu-item";

    const num = document.createElement("span");
    num.className = "case-menu-number";
    num.textContent = data.id;

    const info = document.createElement("span");

    const title = document.createElement("strong");
    title.textContent = data.title;

    const niche = document.createElement("small");
    niche.textContent = data.niche;

    info.append(title, niche);
    button.append(num, info);

    button.addEventListener("click", () => {
      selectCaseStudy(index);
    });

    list.appendChild(button);
  });
}

function selectCaseStudy(index) {
  selectedCaseIndex = index;

  if (selectionMode === "play") {
    startGame(index);
  } else {
    openReader(index);
  }
}

/* ==========================================================
   18 — GAMEPLAY / DYNAMIC CHECKPOINTS
========================================================== */

function startGame(index = selectedCaseIndex) {
  if (questMoving) return;

  selectedCaseIndex = index;
  questIndex = 0;

  showScreen("quest");
  renderQuest();
}

function renderQuest() {
  const data = selectedCase();
  const steps = data.execution || [];
  const total = steps.length;

  text("quest-title", `CASE ${data.id}`);
  text("quest-counter", `${questIndex} / ${total}`);

  const current = steps[questIndex];

  text(
    "quest-step-label",
    questIndex >= total
      ? "JOURNEY COMPLETE"
      : `CHECKPOINT ${number(questIndex + 1)}`
  );

  text(
    "quest-step-title",
    current?.title ||
      (total ? "All checkpoints reached" : "No checkpoints yet")
  );

  text(
    "quest-step-description",
    current?.detail ||
      (total
        ? "You've completed the execution journey. " +
          "Open the report to examine the full results."
        : "Execution stages will be added to this case.")
  );

  $("quest-advance").disabled =
    questMoving || questIndex >= total;

  $("quest-advance").textContent =
    questIndex >= total
      ? "COMPLETED"
      : "ADVANCE (A)";

  const progress = $("quest-progress");
  progress.replaceChildren();

  steps.forEach((step, index) => {
    const marker = document.createElement("span");
    marker.textContent = index + 1;

    if (index < questIndex) {
      marker.classList.add("done");
    }

    progress.appendChild(marker);
  });

  const track = $("quest-track");
  track.replaceChildren();

  const marker = document.createElement("div");
  marker.className = "quest-checkpoint";

  marker.textContent =
    current?.title || "FINISH";

  marker.style.left = "73%";

  track.appendChild(marker);

  $("quest-cat").style.left = "16%";
}

function advanceGame() {
  const steps = selectedCase().execution || [];

  if (mode !== "quest" || questMoving ||
      questIndex >= steps.length) return;

  questMoving = true;

  const cat = $("quest-cat");
  cat.classList.add("walking");

  requestAnimationFrame(() => {
    cat.style.left = "62%";
  });

  setTimeout(() => {
    questIndex++;
    questMoving = false;
    cat.classList.remove("walking");
    renderQuest();
  }, 550);
}

/* ==========================================================
   19 — REPORT ENTRY / EXIT
========================================================== */

function openReader(index = selectedCaseIndex) {
  if (questMoving) return;

  readerIndex = Math.max(
    0,
    Math.min(CONFIG.cases.length - 1, index)
  );

  lastFocusedElement = document.activeElement;

  $("report-overlay").hidden = false;
  document.body.style.overflow = "hidden";

  renderReader();

  $("report-overlay").scrollTop = 0;
  $("close-report").focus();
}

function closeReader() {
  $("report-overlay").hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement?.isConnected) {
    lastFocusedElement.focus();
  }
}

function backToCaseMenu() {
  closeReader();
  openCaseMenu("read");
}

/* ==========================================================
   20 — RENDER THE COMPLETE REPORT
========================================================== */

function renderReader() {
  const data = CONFIG.cases[readerIndex];

  text(
    "report-kicker",
    `CASE ${data.id} / ${number(CONFIG.cases.length)}`
  );

  text("report-title", data.title);
  text("report-duration", data.duration);

  const budgetText = data.budget
    ? ` · ${formatCurrency(
        data.budget.amount,
        data.budget.currency
      )} ${data.budget.period} budget`
    : "";

  text(
    "report-metadata",
    `${data.industry} · ${data.market}${budgetText}`
  );

  $("report-achievement").hidden = !data.achievement;
  text("report-achievement-value", data.achievement);

  text("report-nda", data.nda);

  text("report-challenge-title", data.challengeTitle);
  text("report-challenge", data.problem);
  text("report-solution", data.solution);

  renderObjectives(data.objectives || []);
  renderDots(data.dots);

  activeStage = 0;
  renderExecution(data.execution || []);

  renderResults(data);
  renderWeeklyChart(data.weekly);

  $("report-prev").disabled = readerIndex === 0;
  $("report-next").disabled =
    readerIndex === CONFIG.cases.length - 1;

  $("report-overlay").scrollTop = 0;
}

function formatCurrency(amount, currency) {
  if (currency === "PHP") {
    return "₱" + amount.toLocaleString("en-US");
  }

  if (currency === "MYR") {
    return "RM" + amount.toLocaleString("en-US");
  }

  return amount.toLocaleString("en-US");
}

/* ==========================================================
   21 — OBJECTIVE CHARTS
========================================================== */

function renderObjectives(objectives) {
  const container = $("report-objectives");
  container.replaceChildren();

  if (!objectives.length) {
    const empty = document.createElement("div");
    empty.className = "report-empty";
    empty.textContent = "Performance objectives to be added.";
    container.appendChild(empty);
    return;
  }

  objectives.forEach(metric => {
    const card = document.createElement("div");
    card.className = "objective-card";

    const title = document.createElement("h3");
    title.textContent = metric.title;
    card.appendChild(title);

    const description = document.createElement("p");
    description.textContent = "BASELINE VS TARGET";
    card.appendChild(description);

    const baseline = metric.baseline;
    const target = metric.target;

    if (!Number.isFinite(baseline) ||
        !Number.isFinite(target)) {
      const empty = document.createElement("div");
      empty.className = "report-empty";
      empty.textContent =
        "Target: " + formatMetric(target, metric) +
        ". Comparable baseline not available.";
      card.appendChild(empty);
      container.appendChild(card);
      return;
    }

    const max = Math.max(baseline, target, 1);

    const bars = document.createElement("div");
    bars.className = "objective-bars";

    [baseline, target].forEach((value, index) => {
      const wrap = document.createElement("div");
      wrap.className = "objective-bar-wrap";

      const bar = document.createElement("div");
      bar.className =
        "objective-bar " +
        (index === 0 ? "baseline" : "target");

      bar.style.height = `${value / max * 100}%`;
      bar.textContent = formatMetric(value, metric);

      wrap.appendChild(bar);
      bars.appendChild(wrap);
    });

    const labels = document.createElement("div");
    labels.className = "objective-labels";

    [metric.baselineLabel, metric.targetLabel]
      .forEach(value => {
        const label = document.createElement("span");
        label.textContent = value;
        labels.appendChild(label);
      });

    card.append(bars, labels);
    container.appendChild(card);
  });
}

function formatMetric(value, metric) {
  if (!Number.isFinite(value)) return "N/A";

  const decimals = metric.decimals ?? 0;

  return (
    (metric.prefix || "") +
    value.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }) +
    (metric.suffix || "")
  );
}

/* ==========================================================
   22 — DOT VISUALISATION

   Both quantities must use the same unit.
========================================================== */

function renderDots(data) {
  $("dot-section").hidden = !data;

  if (!data) return;

  text("dot-title", data.title);
  text("dot-scale", `1 dot = ${data.unitLabel}`);
  text("dot-left-value", data.left.display);
  text("dot-right-value", data.right.display);
  text("dot-left-label", data.left.label);
  text("dot-right-label", data.right.label);
  text("dot-note", data.note);

  const renderPile = (id, value) => {
    const pile = $(id);
    pile.replaceChildren();

    const count = Math.round(value / data.unit);

    if (!Number.isFinite(count) ||
        count < 0 || count > 300) {
      pile.textContent =
        "Quantity exceeds the current dot display limit.";
      return;
    }

    for (let i = 0; i < count; i++) {
      const dot = document.createElement("span");
      dot.className = "dot";
      dot.setAttribute("aria-hidden", "true");
      pile.appendChild(dot);
    }
  };

  renderPile("dot-left", data.left.value);
  renderPile("dot-right", data.right.value);
}

/* ==========================================================
   23 — EXECUTION DIAL

   Supports:
   - Clicking stage names
   - Clicking SVG numbers
   - Dragging horizontally
   - Previous / Next
========================================================== */

let executionSteps = [];

function renderExecution(steps) {
  executionSteps = steps;

  const index = $("stage-index");
  index.replaceChildren();

  if (!steps.length) {
    text("stage-detail-title", "Execution pending");
    text(
      "stage-detail-description",
      "Execution stages will be added."
    );
    text("dial-active-number", "—");
    text("dial-active-title", "");
    text("stage-counter", "0 / 0");
    text("stage-detail-label", "NO STAGES");

    $("execution-dial").replaceChildren();
    $("stage-prev").disabled = true;
    $("stage-next").disabled = true;
    return;
  }

  steps.forEach((step, i) => {
    const button = document.createElement("button");
    button.className = "stage-button";

    const num = document.createElement("span");
    num.textContent = number(i + 1);

    const label = document.createElement("strong");
    label.textContent = step.title;

    button.append(num, label);
    button.addEventListener("click", () => {
      selectStage(i);
    });

    index.appendChild(button);
  });

  selectStage(0);
}

function selectStage(index) {
  if (!executionSteps.length) return;

  const count = executionSteps.length;

  activeStage = ((index % count) + count) % count;

  const step = executionSteps[activeStage];

  text("dial-active-number", number(activeStage + 1));
  text("dial-active-title", step.title);

  text(
    "stage-detail-label",
    `DECISION ${number(activeStage + 1)} / ${number(count)}`
  );

  text("stage-detail-title", step.title);
  text("stage-detail-description", step.detail);

  text(
    "stage-counter",
    `${activeStage + 1} / ${count}`
  );

  [...$("stage-index").children].forEach(
    (button, index) => {
      button.classList.toggle(
        "active",
        index === activeStage
      );

      button.setAttribute(
        "aria-pressed",
        index === activeStage ? "true" : "false"
      );
    }
  );

  renderDial();
}

function renderDial() {
  const svg = $("execution-dial");
  svg.replaceChildren();

  const count = executionSteps.length;
  if (!count) return;

  /* Partially cropped circular track */
  const cx = -65;
  const cy = 157;
  const radius = 170;

  const circle = svgElement("circle", {
    cx, cy, r: radius,
    fill: "none",
    stroke: "#D2CBD0",
    "stroke-width": 1.5
  });

  svg.appendChild(circle);

  /*
    The selected number occupies the central position.
    Adjacent stages follow the circumference.

    This creates the rotational effect without
    requiring a continuously spinning animation.
  */

  const spread = Math.min(0.36, 1.45 / count);

  executionSteps.forEach((step, i) => {
    const relative = i - activeStage;
    const angle = relative * spread;

    const x = cx + (radius + 37) * Math.cos(angle);
    const y = cy + (radius + 37) * Math.sin(angle);

    const active = i === activeStage;

    const label = svgElement("text", {
      x,
      y: y + 8,
      "text-anchor": "middle",
      "font-size": active ? 37 : 24,
      "font-weight": 700,
      fill: active ? "#29272D" : "#B6AFB4",
      style: "cursor:pointer"
    });

    label.textContent = number(i + 1);

    label.addEventListener("click", () => {
      selectStage(i);
    });

    svg.appendChild(label);
  });
}

/* Drag to rotate */
let dragStartX = null;

$("dial-viewport").addEventListener(
  "pointerdown",
  event => {
    dragStartX = event.clientX;
    $("dial-viewport").classList.add("dragging");
  }
);

$("dial-viewport").addEventListener(
  "pointerup",
  event => {
    if (dragStartX === null) return;

    const delta = event.clientX - dragStartX;

    if (Math.abs(delta) > 35) {
      selectStage(
        activeStage + (delta < 0 ? 1 : -1)
      );
    }

    dragStartX = null;
    $("dial-viewport").classList.remove("dragging");
  }
);

$("dial-viewport").addEventListener(
  "pointercancel",
  () => {
    dragStartX = null;
    $("dial-viewport").classList.remove("dragging");
  }
);

/* ==========================================================
   24 — RESULTS
========================================================== */

function renderResults(data) {
  text("results-intro", data.outcome);

  const container = $("results-metrics");
  container.replaceChildren();

  if (!data.results?.length) {
    const empty = document.createElement("div");
    empty.className = "report-empty";
    empty.textContent = "Results to be added.";
    container.appendChild(empty);
    return;
  }

  data.results.forEach(metric => {
    const item = document.createElement("div");
    item.className = "result-metric";

    const value = document.createElement("div");
    value.className = "result-value";
    value.textContent = metric.value;

    const label = document.createElement("div");
    label.className = "result-label";
    label.textContent = metric.label;

    const description = document.createElement("p");
    description.className = "result-description";
    description.textContent = metric.description;

    item.append(value, label, description);
    container.appendChild(item);
  });
}

/* ==========================================================
   25 — WEEKLY ROAS SVG LINE CHART

   Only plots actual values in CONFIG.
   An empty dataset displays the target and a notice.
========================================================== */

function renderWeeklyChart(config) {
  $("timeline-section").hidden = !config;

  if (!config) return;

  text("timeline-title", config.title || "Weekly ROAS");
  text("chart-note", config.note || "");

  const svg = $("weekly-chart");
  svg.replaceChildren();

  const raw = Array.isArray(config.data)
    ? config.data
    : [];

  const data = raw.filter(
    d => d &&
      typeof d.week === "string" &&
      Number.isFinite(d.roas) &&
      d.roas >= 0
  );

  const hasData = data.length >= 2;

  $("chart-empty").hidden = hasData;

  const width = 900;
  const height = 350;

  const left = 62;
  const right = 28;
  const top = 25;
  const bottom = 58;

  const plotW = width - left - right;
  const plotH = height - top - bottom;

  const target = config.target ?? 6;

  const maxValue = Math.max(
    target,
    ...data.map(d => d.roas),
    1
  );

  const yMax = Math.ceil(maxValue * 1.2);

  const y = value =>
    top + plotH - value / yMax * plotH;

  const x = index =>
    left + index / Math.max(data.length - 1, 1) * plotW;

  /* Horizontal grid and labels */
  for (let i = 0; i <= 4; i++) {
    const value = yMax * i / 4;
    const yy = y(value);

    svg.appendChild(
      svgElement("line", {
        x1: left,
        x2: width - right,
        y1: yy,
        y2: yy,
        stroke: "#DDD7DA",
        "stroke-width": 1
      })
    );

    const label = svgElement("text", {
      x: left - 15,
      y: yy + 4,
      "text-anchor": "end",
      "font-size": 12,
      fill: "#89818A"
    });

    label.textContent = value.toFixed(1);
    svg.appendChild(label);
  }

  /* Target reference line */
  const targetY = y(target);

  svg.appendChild(
    svgElement("line", {
      x1: left,
      x2: width - right,
      y1: targetY,
      y2: targetY,
      stroke: "#A47693",
      "stroke-width": 2,
      "stroke-dasharray": "7 6"
    })
  );

  const targetLabel = svgElement("text", {
    x: width - right,
    y: targetY - 10,
    "text-anchor": "end",
    "font-size": 12,
    "font-weight": 700,
    fill: "#A47693"
  });

  targetLabel.textContent =
    `TARGET ${target.toFixed(2)}`;

  svg.appendChild(targetLabel);

  /* Never draw a fabricated performance curve */
  if (!hasData) {
    svg.setAttribute(
      "aria-label",
      "Weekly ROAS chart awaiting actual weekly data"
    );
    return;
  }

  const points = data.map(
    (d, i) => `${x(i)},${y(d.roas)}`
  ).join(" ");

  svg.appendChild(
    svgElement("polyline", {
      points,
      fill: "none",
      stroke: "#35116F",
      "stroke-width": 4,
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  );

  data.forEach((d, i) => {
    const px = x(i);
    const py = y(d.roas);

    const circle = svgElement("circle", {
      cx: px,
      cy: py,
      r: 6,
      fill: "#35116F",
      stroke: "white",
      "stroke-width": 2
    });

    const tooltip = svgElement("title");
    tooltip.textContent =
      `${d.week}: ${d.roas.toFixed(2)} ROAS`;

    circle.appendChild(tooltip);
    svg.appendChild(circle);

    const label = svgElement("text", {
      x: px,
      y: height - 25,
      "text-anchor": "middle",
      "font-size": 11,
      fill: "#89818A"
    });

    label.textContent = d.week;
    svg.appendChild(label);
  });

  svg.setAttribute(
    "aria-label",
    "Weekly ROAS performance against target"
  );
}

/* ==========================================================
   26 — EVENT LISTENERS
========================================================== */

$("play-game").addEventListener(
  "click",
  () => openCaseMenu("play")
);

$("read-case-study").addEventListener(
  "click",
  () => openCaseMenu("read")
);

$("menu-back").addEventListener(
  "click",
  showHome
);

$("quest-advance").addEventListener(
  "click",
  advanceGame
);

$("button-a").addEventListener(
  "click",
  advanceGame
);

$("button-b").addEventListener(
  "click",
  () => {
    if (mode === "quest" && !questMoving) {
      openCaseMenu("play");
    }
  }
);

$("quest-back").addEventListener(
  "click",
  () => openCaseMenu("play")
);

$("quest-read").addEventListener(
  "click",
  () => openReader(selectedCaseIndex)
);

$("close-report").addEventListener(
  "click",
  closeReader
);

$("report-menu").addEventListener(
  "click",
  backToCaseMenu
);

$("report-prev").addEventListener(
  "click",
  () => {
    if (readerIndex > 0) {
      readerIndex--;
      renderReader();
    }
  }
);

$("report-next").addEventListener(
  "click",
  () => {
    if (readerIndex < CONFIG.cases.length - 1) {
      readerIndex++;
      renderReader();
    }
  }
);

$("stage-prev").addEventListener(
  "click",
  () => selectStage(activeStage - 1)
);

$("stage-next").addEventListener(
  "click",
  () => selectStage(activeStage + 1)
);

document.addEventListener("keydown", event => {
  if (event.key === "Escape" &&
      !$("report-overlay").hidden) {
    closeReader();
  }

  if (event.key.toLowerCase() === "a" &&
      mode === "quest" &&
      $("report-overlay").hidden) {
    advanceGame();
  }
});

/* ==========================================================
   27 — INITIALISE
========================================================== */

showHome();
