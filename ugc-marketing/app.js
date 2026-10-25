/* =========================================================
   25. DOM REFERENCES
========================================================= */

const mainVideo = document.getElementById("main-video");
const placeholder = document.getElementById("player-placeholder");

const videoTitle = document.getElementById("video-title");
const videoViews = document.getElementById("video-views");

const campaignDescription =
  document.getElementById("campaign-description");

const campaignRole =
  document.getElementById("campaign-role");

const campaignMetrics =
  document.getElementById("campaign-metrics");

const relatedList =
  document.getElementById("related-list");

const browserUrl =
  document.getElementById("browser-url");

const playButton =
  document.getElementById("play-button");

const muteButton =
  document.getElementById("mute-button");

const playerProgress =
  document.getElementById("player-progress");

const progressFill =
  document.getElementById("player-progress-fill");

const playerTime =
  document.getElementById("player-time");

const campaignSearch =
  document.getElementById("campaign-search");

const browserSearch =
  document.getElementById("browser-search");

let activeCampaignId = CONFIG.campaigns[0]?.id || null;

/* =========================================================
   26. UTILITY
========================================================= */

function formatTime(seconds) {

  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);

  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

function getActiveCampaign() {
  return CONFIG.campaigns.find(
    campaign => campaign.id === activeCampaignId
  );
}

/* =========================================================
   27. LOAD SELECTED CAMPAIGN
========================================================= */

function loadCampaign(id) {

  const campaign = CONFIG.campaigns.find(
    item => item.id === id
  );

  if (!campaign) return;

  activeCampaignId = campaign.id;

  // Stop previous video
  mainVideo.pause();
  mainVideo.removeAttribute("src");
  mainVideo.load();

  // Main title and browser address
  videoTitle.textContent = campaign.title;
  browserUrl.textContent =
    `http://www.youtube.com/watch?v=${campaign.id}`;

  videoViews.textContent = campaign.viewsLabel;

  // Case-study information
  campaignDescription.textContent =
    campaign.description;

  campaignRole.textContent =
    campaign.role;

  // Metrics
  campaignMetrics.replaceChildren();

  campaign.metrics.forEach(metric => {

    const box = document.createElement("div");
    box.className = "metric";

    const value = document.createElement("strong");
    value.textContent = metric.value;

    const label = document.createElement("span");
    label.textContent = metric.label;

    box.append(value, label);
    campaignMetrics.appendChild(box);

  });

  // Video
  if (campaign.video) {

    placeholder.style.display = "none";

    mainVideo.src = campaign.video;
    mainVideo.load();

  } else {

    placeholder.style.display = "flex";
  }

  playButton.textContent = "▶";
  progressFill.style.width = "0%";
  playerTime.textContent = `0:00 / ${campaign.duration}`;

  // Update selected sidebar item
  document.querySelectorAll(".related-item").forEach(item => {

    const selected = item.dataset.id === campaign.id;

    item.classList.toggle("active", selected);
    item.setAttribute("aria-current", selected ? "true" : "false");

  });

  // Update shareable URL
  history.replaceState(null, "", "#" + campaign.id);
}

/* =========================================================
   28. BUILD RELATED VIDEO THUMBNAILS
========================================================= */

function renderCampaigns(filter = "") {

  relatedList.replaceChildren();

  const query = filter.trim().toLowerCase();

  const filtered = CONFIG.campaigns.filter(campaign => {

    const searchable =
      `${campaign.title} ${campaign.brand} ${campaign.category}`
        .toLowerCase();

    return searchable.includes(query);
  });

  if (!filtered.length) {

    const empty = document.createElement("div");
    empty.className = "no-results";
    empty.textContent =
      "No campaigns found. Try another search.";

    relatedList.appendChild(empty);
    return;
  }

  filtered.forEach(campaign => {

    const item = document.createElement("button");
    item.type = "button";
    item.className = "related-item";
    item.dataset.id = campaign.id;

    if (campaign.id === activeCampaignId) {
      item.classList.add("active");
      item.setAttribute("aria-current", "true");
    }

    // Thumbnail
    const thumb = document.createElement("div");
    thumb.className = "related-thumb";

    if (campaign.thumbnail) {

      const img = document.createElement("img");
      img.src = campaign.thumbnail;
      img.alt = "";
      img.loading = "lazy";

      thumb.appendChild(img);

    } else {

      const placeholder = document.createElement("div");
      placeholder.className = "thumb-placeholder";
      placeholder.textContent = "▶";

      thumb.appendChild(placeholder);
    }

    // Optional hover preview
    if (campaign.preview) {

      const preview = document.createElement("video");
      preview.src = campaign.preview;
      preview.muted = true;
      preview.loop = true;
      preview.playsInline = true;
      preview.preload = "none";

      thumb.appendChild(preview);

      item.addEventListener("mouseenter", () => {
        thumb.classList.add("previewing");
        preview.play().catch(() => {});
      });

      item.addEventListener("mouseleave", () => {
        thumb.classList.remove("previewing");
        preview.pause();
        preview.currentTime = 0;
      });

      item.addEventListener("focus", () => {
        thumb.classList.add("previewing");
        preview.play().catch(() => {});
      });

      item.addEventListener("blur", () => {
        thumb.classList.remove("previewing");
        preview.pause();
        preview.currentTime = 0;
      });

    }

    // Duration
    const duration = document.createElement("span");
    duration.className = "thumb-duration";
    duration.textContent = campaign.duration;

    thumb.appendChild(duration);

    // Text
    const info = document.createElement("div");
    info.className = "related-info";

    const title = document.createElement("div");
    title.className = "related-title";
    title.textContent = campaign.title;

    const meta = document.createElement("div");
    meta.className = "related-meta";

    meta.textContent =
      `${campaign.brand}\n${campaign.date}`;

    meta.style.whiteSpace = "pre-line";

    info.append(title, meta);

    item.append(thumb, info);

    item.addEventListener("click", () => {
      loadCampaign(campaign.id);
    });

    relatedList.appendChild(item);

  });

}

/* =========================================================
   29. VIDEO PLAYER CONTROLS
========================================================= */

playButton.addEventListener("click", () => {

  if (!mainVideo.getAttribute("src")) return;

  if (mainVideo.paused) {
    mainVideo.play().catch(() => {});
  } else {
    mainVideo.pause();
  }

});

mainVideo.addEventListener("play", () => {
  playButton.textContent = "❚❚";
});

mainVideo.addEventListener("pause", () => {
  playButton.textContent = "▶";
});

muteButton.addEventListener("click", () => {

  mainVideo.muted = !mainVideo.muted;

  muteButton.textContent =
    mainVideo.muted ? "×" : "♪";

});

mainVideo.addEventListener("timeupdate", () => {

  const duration = mainVideo.duration || 0;
  const current = mainVideo.currentTime || 0;

  const percent = duration
    ? (current / duration) * 100
    : 0;

  progressFill.style.width = percent + "%";

  playerProgress.setAttribute(
    "aria-valuenow",
    String(Math.round(percent))
  );

  playerTime.textContent =
    `${formatTime(current)} / ${formatTime(duration)}`;

});

function seekToPercent(percent) {

  if (!Number.isFinite(mainVideo.duration) ||
      mainVideo.duration <= 0) return;

  const clamped = Math.min(100, Math.max(0, percent));

  mainVideo.currentTime =
    (clamped / 100) * mainVideo.duration;
}

playerProgress.addEventListener("click", event => {

  const rect = playerProgress.getBoundingClientRect();

  const percent =
    ((event.clientX - rect.left) / rect.width) * 100;

  seekToPercent(percent);
});

playerProgress.addEventListener("keydown", event => {

  const duration = mainVideo.duration || 0;
  if (!duration) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    mainVideo.currentTime =
      Math.min(duration, mainVideo.currentTime + 5);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    mainVideo.currentTime =
      Math.max(0, mainVideo.currentTime - 5);
  }

});

document.getElementById("fullscreen-button")
  .addEventListener("click", () => {

    if (mainVideo.requestFullscreen) {
      mainVideo.requestFullscreen().catch(() => {});
    }

  });

/* =========================================================
   30. SEARCH
========================================================= */

document.getElementById("search-form")
  .addEventListener("submit", event => {

    event.preventDefault();

    renderCampaigns(campaignSearch.value);
  });

browserSearch.addEventListener("input", () => {
  campaignSearch.value = browserSearch.value;
  renderCampaigns(browserSearch.value);
});

campaignSearch.addEventListener("input", () => {
  browserSearch.value = campaignSearch.value;
  renderCampaigns(campaignSearch.value);
});

/* =========================================================
   31. BROWSER / YOUTUBE ACTIONS
========================================================= */

function switchRelativeCampaign(direction) {

  const index = CONFIG.campaigns.findIndex(
    campaign => campaign.id === activeCampaignId
  );

  if (index < 0) return;

  const nextIndex =
    (index + direction + CONFIG.campaigns.length) %
    CONFIG.campaigns.length;

  loadCampaign(CONFIG.campaigns[nextIndex].id);
}

document.querySelectorAll("[data-action]").forEach(element => {

  element.addEventListener("click", event => {

    event.preventDefault();

    const action = element.dataset.action;

    if (action === "portfolio") {
      window.location.href = CONFIG.portfolioUrl;
    }

    if (action === "previous") {
      switchRelativeCampaign(-1);
    }

    if (action === "next") {
      switchRelativeCampaign(1);
    }

    if (action === "reload") {
      loadCampaign(activeCampaignId);
    }

    if (action === "all") {
      campaignSearch.value = "";
      browserSearch.value = "";
      renderCampaigns();
    }

    if (action === "fullscreen") {
      const browser = document.querySelector(".browser");

      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      } else if (browser.requestFullscreen) {
        browser.requestFullscreen().catch(() => {});
      }
    }

    if (action === "share") {

      const url = window.location.href;

      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(url).catch(() => {});
      } else {
        window.prompt("Copy this campaign link:", url);
      }
    }

    if (action === "favorite") {

      const button = element;

      const selected =
        button.getAttribute("aria-pressed") === "true";

      button.setAttribute(
        "aria-pressed",
        String(!selected)
      );

      button.textContent =
        selected ? "♥ Favorite" : "♥ Favorited";
    }

  });

});

/* =========================================================
   32. INITIALISE
========================================================= */

renderCampaigns();

const initialId =
  window.location.hash.replace("#", "");

const initialCampaign = CONFIG.campaigns.find(
  campaign => campaign.id === initialId
);

if (initialCampaign) {
  loadCampaign(initialCampaign.id);
} else if (CONFIG.campaigns.length) {
  loadCampaign(CONFIG.campaigns[0].id);
}

window.addEventListener("hashchange", () => {

  const id = window.location.hash.replace("#", "");

  if (CONFIG.campaigns.some(campaign => campaign.id === id)) {
    loadCampaign(id);
  }

});
