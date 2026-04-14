gsap.registerPlugin(ScrollTrigger);

const navItems = [
  "hero",
  "features",
  "chapter-2",
  "chapter-3",
  "chapter-4",
  "chapter-5",
  "chapter-6",
  "chapter-7",
  "chapter-8",
  "chapter-9",
  "chapter-10",
  "chapter-11",
  "contact"
];

const sideNav = document.getElementById("side-nav");
const progressBar = document.getElementById("scroll-progress-bar");
const mouseGlow = document.getElementById("mouse-glow");

navItems.forEach((id, idx) => {
  const btn = document.createElement("button");
  btn.textContent = idx === 0 ? "封" : idx === navItems.length - 1 ? "联" : String(idx);
  btn.type = "button";
  btn.addEventListener("click", () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  sideNav.appendChild(btn);
});

const navButtons = Array.from(sideNav.querySelectorAll("button"));

const setActiveNav = () => {
  let active = 0;
  navItems.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top <= window.innerHeight * 0.42) active = i;
  });
  navButtons.forEach((btn, i) => btn.classList.toggle("active", i === active));
};

const setProgress = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const value = max > 0 ? (window.scrollY / max) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, value))}%`;
};

window.addEventListener("scroll", () => {
  setProgress();
  setActiveNav();
}, { passive: true });
window.addEventListener("resize", () => {
  setProgress();
  setActiveNav();
});

window.addEventListener("pointermove", (e) => {
  mouseGlow.style.left = `${e.clientX}px`;
  mouseGlow.style.top = `${e.clientY}px`;
}, { passive: true });

gsap.from(".hero .stagger", {
  opacity: 0,
  y: 30,
  scale: 0.98,
  duration: 0.8,
  stagger: 0.12,
  ease: "power2.out"
});

gsap.utils.toArray(".deck-section").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 34,
    scale: 0.985,
    duration: 0.85,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,
      start: "top 84%",
      once: true
    }
  });

  const localStaggers = section.querySelectorAll(".stagger-item");
  if (localStaggers.length) {
    gsap.from(localStaggers, {
      opacity: 0,
      y: 20,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.14,
      scrollTrigger: {
        trigger: section,
        start: "top 78%",
        once: true
      }
    });
  }
});

gsap.utils.toArray(".parallax").forEach((img) => {
  gsap.to(img, {
    yPercent: 8,
    ease: "none",
    scrollTrigger: {
      trigger: img,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
});

gsap.utils.toArray(".bar-fill").forEach((fill) => {
  const target = Number(fill.dataset.fill || "0");
  gsap.fromTo(fill, { width: "0%" }, {
    width: `${target}%`,
    duration: 1.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fill.closest(".bar-chart"),
      start: "top 86%",
      once: true
    }
  });
});

gsap.utils.toArray(".chapter-bar-fill").forEach((fill) => {
  const target = Number(fill.dataset.fill || "0");
  gsap.fromTo(fill, { width: "0%" }, {
    width: `${target}%`,
    duration: 1.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: fill.closest(".chapter-bar-chart"),
      start: "top 86%",
      once: true
    }
  });
});

gsap.utils.toArray(".bar-fill-vertical").forEach((bar) => {
  const target = Number(bar.dataset.fill || "0");
  gsap.fromTo(bar, { height: "0%" }, {
    height: `${target}%`,
    duration: 1.05,
    ease: "power2.out",
    scrollTrigger: {
      trigger: bar.closest(".market-bars"),
      start: "top 86%",
      once: true
    }
  });
});

gsap.utils.toArray(".count").forEach((el) => {
  const value = Number(el.dataset.value || "");
  const suffix = el.dataset.suffix || "";
  if (!Number.isFinite(value)) return;
  const counter = { value: 0 };
  gsap.to(counter, {
    value,
    duration: 1.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
      once: true
    },
    onUpdate: () => {
      el.textContent = `${Math.round(counter.value).toLocaleString("zh-CN")}${suffix}`;
    }
  });
});

gsap.utils.toArray(".metric-card, .chip-card, .layer-card, .highlight-grid div, .chapter-stat").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    gsap.to(card, {
      rotateY: px * 6,
      rotateX: -py * 6,
      duration: 0.25,
      transformPerspective: 700,
      transformOrigin: "center"
    });
  });
  card.addEventListener("pointerleave", () => {
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.35 });
  });
});

gsap.from("#contact .cta > *", {
  opacity: 0,
  y: 36,
  duration: 1,
  ease: "power2.out",
  stagger: 0.16,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%"
  }
});

setProgress();
setActiveNav();
