/* ==========================================================
   16 — APP STATE AND HELPERS
========================================================== */

const $ = id => document.getElementById(id);

let mode = "home";
let selectionMode = "read";
let selectedCaseIndex = 0;
let questIndex = 0;
let questMoving = false;

function text(id, value) {
  $(id).textContent = value ?? "";
}

function number(value) {
  return String(value).padStart(2, "0");
}

function selectedCase() {
  return META_CONFIG.cases[selectedCaseIndex];
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

  META_CONFIG.cases.forEach((data, index) => {
    const button = document.createElement("button");
    button.className = "case-menu-item";

    const num = document.createElement("span");
    num.className = "case-menu-number";
    num.textContent = data.id;

    const info = document.createElement("span");

    const title = document.createElement("strong");
    title.textContent = data.menuTitle ?? data.title;

    const niche = document.createElement("small");
    niche.textContent = data.niche;
    niche.hidden = Boolean(data.menuTitle);

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

// Reports share the same reusable popup as the homepage.
function openReader(index = selectedCaseIndex) {
  if (!questMoving) MetaReports.open(index);
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

document.addEventListener("keydown", event => {
  if (event.key.toLowerCase() === "a" &&
      mode === "quest" &&
      !MetaReports.isOpen()) {
    advanceGame();
  }
});

/* ==========================================================
   27 — INITIALISE
========================================================== */

showHome();
