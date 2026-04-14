const revealElements = document.querySelectorAll(".reveal");
const metricElements = document.querySelectorAll(".metric-value[data-target]");
const progressBar = document.getElementById("scroll-progress");
const dotNav = document.getElementById("dot-nav");
const panels = document.querySelectorAll(".panel[id]");

const dotButtons = [];

for (const panel of panels) {
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("aria-label", panel.dataset.title || panel.id);
  button.addEventListener("click", () => {
    panel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  dotNav.appendChild(button);
  dotButtons.push({ panel, button });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  { threshold: 0.2 }
);

for (const element of revealElements) {
  revealObserver.observe(element);
}

const animateValue = (el, target) => {
  const duration = 1400;
  const startTime = performance.now();

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = new Intl.NumberFormat("zh-CN").format(value);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const metricObserver = new IntersectionObserver(
  (entries, observer) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const target = Number(entry.target.getAttribute("data-target") || "0");
      animateValue(entry.target, target);
      observer.unobserve(entry.target);
    }
  },
  { threshold: 0.45 }
);

for (const metric of metricElements) {
  metricObserver.observe(metric);
}

const updateScrollUI = () => {
  const doc = document.documentElement;
  const scrollTop = doc.scrollTop;
  const maxScroll = doc.scrollHeight - doc.clientHeight;
  const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
  progressBar.style.width = `${progress}%`;

  let activeIndex = 0;
  for (let i = 0; i < dotButtons.length; i += 1) {
    const rect = dotButtons[i].panel.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.45) activeIndex = i;
  }

  dotButtons.forEach(({ button }, index) => {
    button.classList.toggle("active", index === activeIndex);
  });
};

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("resize", updateScrollUI);
updateScrollUI();
