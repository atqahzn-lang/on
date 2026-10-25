/* =====================================================
   14. CAROUSEL FUNCTIONALITY
===================================================== */

const carousel = document.getElementById("carousel");
const carouselTrack = document.getElementById("carouselTrack");
const carouselDots = document.getElementById("carouselDots");
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselCounter = document.getElementById("carouselCounter");

let currentSlide = 0;
let touchStartX = null;

function makePlaceholder(label) {
  const holder = document.createElement("div");
  holder.className = "slide-placeholder";

  holder.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <path d="m3 17 5-5 4 4 3-3 6 6"/>
    </svg>
  `;

  const text = document.createElement("span");
  text.textContent = label;
  holder.appendChild(text);

  return holder;
}

function buildCarousel() {
  carouselTrack.replaceChildren();
  carouselDots.replaceChildren();

  carouselImages.forEach((item, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const placeholder = makePlaceholder(
      item.placeholder || "add your photo"
    );

    slide.appendChild(placeholder);

    if (item.src && item.src.trim()) {
      const img = document.createElement("img");
      img.alt = item.alt || `Photo ${index + 1}`;
      img.loading = index === 0 ? "eager" : "lazy";
      img.decoding = "async";
      img.hidden = true;

      img.onload = () => {
        img.hidden = false;
        placeholder.hidden = true;
      };

      img.onerror = () => {
        img.hidden = true;
        placeholder.hidden = false;
      };

      img.src = item.src;
      slide.appendChild(img);
    }

    carouselTrack.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to photo ${index + 1}`);

    dot.addEventListener("click", () => {
      goToSlide(index);
    });

    carouselDots.appendChild(dot);
  });

  goToSlide(0);
}

function goToSlide(index) {
  if (!carouselImages.length) return;

  currentSlide = Math.max(
    0,
    Math.min(index, carouselImages.length - 1)
  );

  carouselTrack.style.transform =
    `translateX(-${currentSlide * 100}%)`;

  carouselCounter.textContent =
    `${currentSlide + 1}/${carouselImages.length}`;

  carouselPrev.disabled = currentSlide === 0;
  carouselNext.disabled =
    currentSlide === carouselImages.length - 1;

  [...carouselDots.children].forEach((dot, index) => {
    const active = index === currentSlide;

    dot.classList.toggle("active", active);
    dot.setAttribute("aria-current", String(active));
  });

  const multiple = carouselImages.length > 1;
  carouselDots.hidden = !multiple;
  carouselCounter.hidden = !multiple;
  carouselPrev.hidden = !multiple;
  carouselNext.hidden = !multiple;
}

carouselPrev.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

carouselNext.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

/* Swipe left/right on mobile */

carousel.addEventListener("touchstart", event => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

carousel.addEventListener("touchend", event => {
  if (touchStartX === null) return;

  const touchEndX = event.changedTouches[0].screenX;
  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) > 40) {
    if (distance < 0) {
      goToSlide(currentSlide + 1);
    } else {
      goToSlide(currentSlide - 1);
    }
  }

  touchStartX = null;
}, { passive: true });

/* Keyboard navigation */

carousel.addEventListener("keydown", event => {
  if (event.target !== carousel) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToSlide(currentSlide + 1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToSlide(currentSlide - 1);
  }
});

buildCarousel();

/* =====================================================
   15. ARCHIVE NAVIGATION
===================================================== */

const archiveOverlay =
  document.getElementById("archiveOverlay");

const archiveTiles = [
  ...document.querySelectorAll(".archive-tile")
];

function openArchive(category = null) {
  archiveTiles.forEach(tile => {
    tile.hidden =
      category !== null &&
      tile.dataset.category !== category;
  });

  archiveOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeArchive() {
  archiveOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("openArchive")
  .addEventListener("click", () => openArchive());

document.getElementById("moreButton")
  .addEventListener("click", () => openArchive());

document.getElementById("closeArchive")
  .addEventListener("click", closeArchive);

archiveOverlay.addEventListener("click", event => {
  if (event.target === archiveOverlay) {
    closeArchive();
  }
});

/* Hashtag navigation */

document.querySelectorAll(".hashtags a").forEach(tag => {
  tag.addEventListener("click", event => {
    event.preventDefault();
    openArchive(tag.dataset.category);
  });
});

/* =====================================================
   16. PRESET QUESTIONS AND ANSWERS
   Edit the text here whenever needed.
===================================================== */

const prompts = [
  {
    question: "Who is Atiqah?",
    answer:
      "A marketer who likes systems, creative experiments and figuring out how things work."
  },
  {
    question: "What does Atiqah do?",
    answer:
      "Paid media, creative R&D, customer journeys, lead qualification, CRM workflows and performance reporting."
  },
  {
    question: "Show me her work",
    answer:
      "Click my profile picture to browse the full archive."
  },
  {
    question: "What is she learning?",
    answer:
      "Figma, coding and turning ideas into small functional tools."
  },
  {
    question: "Where is her résumé?",
    answer:
      "You can find it through my portfolio archive once the résumé page is linked."
  }
];

/* =====================================================
   17. COMMENT PANEL
===================================================== */

const commentPanel =
  document.getElementById("commentPanel");

const commentInput =
  document.getElementById("commentInput");

const suggestions =
  document.getElementById("suggestions");

const submitComment =
  document.getElementById("submitComment");

const commentThread =
  document.getElementById("commentThread");

const guestbookNameWrap =
  document.getElementById("guestbookNameWrap");

const guestbookUsername =
  document.getElementById("guestbookUsername");

const guestbookStatus =
  document.getElementById("guestbookStatus");

const guestbookFeed =
  document.getElementById("guestbookFeed");

let guestbookPosting = false;
let guestbookLoading = false;

function setGuestbookStatus(message) {
  guestbookStatus.textContent = message;
}

function showComments() {
  commentPanel.classList.add("open");
  renderSuggestions();
  commentInput.focus();
  loadGuestbookComments();
}

function hideComments() {
  commentPanel.classList.remove("open");
}

document.getElementById("commentButton")
  .addEventListener("click", showComments);

document.getElementById("viewComments")
  .addEventListener("click", showComments);

document.getElementById("closeComments")
  .addEventListener("click", hideComments);

/* =====================================================
   18. PREDICTIVE QUESTIONS
===================================================== */

function findExactPrompt(value) {
  return prompts.find(item =>
    item.question.toLowerCase() ===
    value.trim().toLowerCase()
  );
}

function renderSuggestions() {
  const query = commentInput.value.trim().toLowerCase();

  const matching = query
    ? prompts.filter(item =>
        item.question.toLowerCase().includes(query)
      )
    : prompts.slice(0, 3);

  suggestions.replaceChildren();

  matching.forEach(item => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "suggestion";
    button.textContent = item.question;

    button.addEventListener("click", () => {
      commentInput.value = item.question;
      renderSuggestions();
      commentInput.focus();
    });

    suggestions.appendChild(button);
  });

  const value = commentInput.value.trim();
  const isPreset = Boolean(findExactPrompt(value));

  guestbookNameWrap.hidden = !value || isPreset;

  submitComment.disabled =
    guestbookPosting || !value || value.length > 280;

  submitComment.textContent =
    guestbookPosting ? "Posting..." : "Post";
}

commentInput.addEventListener("input", () => {
  setGuestbookStatus("");
  renderSuggestions();
});

commentInput.addEventListener("keydown", event => {
  if (event.key === "Enter" && !submitComment.disabled) {
    postComment();
  }
});

/* =====================================================
   19. PRESET ANSWER
===================================================== */

function showPresetReply(match) {
  const visitorComment =
    document.getElementById("visitorComment");

  const presetReply =
    document.getElementById("presetReply");

  visitorComment.replaceChildren();
  presetReply.replaceChildren();

  const visitorName = document.createElement("strong");
  visitorName.textContent = "visitor";

  const replyName = document.createElement("strong");
  replyName.textContent = "atiqah.is";

  visitorComment.append(
    visitorName,
    document.createTextNode(match.question)
  );

  presetReply.append(
    replyName,
    document.createTextNode(match.answer)
  );

  commentThread.classList.add("visible");

  commentInput.value = "";
  renderSuggestions();
}

/* =====================================================
   20. SUBMIT COMMENT TO SUPABASE
===================================================== */

async function postComment() {
  if (guestbookPosting) return;

  const message = commentInput.value.trim();
  if (!message) return;

  const match = findExactPrompt(message);

  if (match) {
    setGuestbookStatus("");
    showPresetReply(match);
    return;
  }

  const username = guestbookUsername.value.trim();

  if (username.length < 2 || username.length > 24) {
    setGuestbookStatus(
      "Enter a username between 2 and 24 characters."
    );
    guestbookUsername.focus();
    return;
  }

  if (message.length > 280) {
    setGuestbookStatus(
      "Keep your comment under 280 characters."
    );
    return;
  }

  guestbookPosting = true;
  renderSuggestions();
  setGuestbookStatus("Posting your comment...");

  try {
    const response = await fetch(CONFIG.guestbookEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, message })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok || data.success === false) {
      throw new Error(
        data.error ||
        data.message ||
        "Could not post your comment."
      );
    }

    commentInput.value = "";
    guestbookUsername.value = "";
    commentThread.classList.remove("visible");

    setGuestbookStatus("Your comment has been posted.");
    await loadGuestbookComments();

  } catch (error) {
    setGuestbookStatus(
      error.message || "Could not post. Please try again."
    );
  } finally {
    guestbookPosting = false;
    renderSuggestions();
  }
}

submitComment.addEventListener("click", postComment);

/* =====================================================
   21. LOAD APPROVED GUESTBOOK COMMENTS
===================================================== */

async function loadGuestbookComments() {
  if (guestbookLoading) return;

  guestbookLoading = true;
  guestbookFeed.textContent = "Loading comments...";

  try {
    const response = await fetch(CONFIG.guestbookEndpoint, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    const payload =
      await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(
        payload.error || "Unable to load comments."
      );
    }

    const items = Array.isArray(payload)
      ? payload
      : Array.isArray(payload.comments)
        ? payload.comments
        : Array.isArray(payload.data)
          ? payload.data
          : [];

    guestbookFeed.replaceChildren();

    const approved = items.filter(item =>
      item &&
      (item.status == null || item.status === "approved")
    );

    approved.sort((a, b) =>
      new Date(b.created_at || 0) -
      new Date(a.created_at || 0)
    );

    if (!approved.length) {
      guestbookFeed.textContent = "No comments yet.";
      return;
    }

    approved.slice(0, 30).forEach(item => {
      const entry = document.createElement("div");
      entry.className = "guestbook-entry";

      const name = document.createElement("strong");
      name.textContent = String(item.username || "visitor");

      const body = document.createElement("span");
      body.textContent = String(item.message || "");

      entry.append(name, body);

      if (item.created_at) {
        const date = new Date(item.created_at);

        if (!Number.isNaN(date.getTime())) {
          const time = document.createElement("time");
          time.dateTime = date.toISOString();
          time.textContent = date.toLocaleDateString();

          entry.append(time);
        }
      }

      guestbookFeed.appendChild(entry);
    });

  } catch (error) {
    guestbookFeed.textContent =
      "Comments could not be loaded right now.";

    console.warn("Guestbook load failed:", error);

  } finally {
    guestbookLoading = false;
  }
}

/* =====================================================
   22. LIKE / BOOKMARK / SHARE
===================================================== */

const likeButton =
  document.getElementById("likeButton");

const saveButton =
  document.getElementById("saveButton");

const shareButton =
  document.getElementById("shareButton");

likeButton.addEventListener("click", () => {
  const liked = likeButton.classList.toggle("liked");

  likeButton.setAttribute(
    "aria-pressed",
    String(liked)
  );
});

saveButton.addEventListener("click", () => {
  const saved = saveButton.classList.toggle("saved");

  saveButton.setAttribute(
    "aria-pressed",
    String(saved)
  );
});

shareButton.addEventListener("click", async () => {
  const url = window.location.href;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "atiqah.is",
        url
      });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      shareButton.title = "Link copied";
    }
  } catch (error) {
    // Sharing cancelled or unavailable.
  }
});

/* =====================================================
   23. ARCHIVE DESTINATIONS
===================================================== */

archiveTiles.forEach(tile => {
  const key = tile.dataset.page;
  const destination = CONFIG.pages[key];

  tile.addEventListener("click", event => {
    if (!destination) {
      event.preventDefault();
      return;
    }

    tile.href = destination;
  });

  if (destination) {
    tile.href = destination;
  }
});

/* =====================================================
   24. ESCAPE KEY
===================================================== */

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hideComments();
    closeArchive();
  }
});
