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

const createCharts = () => {
  if (!window.Chart) return;

  Chart.defaults.color = "#c3d4f7";
  Chart.defaults.borderColor = "#2f446f";
  Chart.defaults.font.family = '"Noto Sans SC","Microsoft YaHei",sans-serif';

  const marketCtx = document.getElementById("market-size-chart");
  if (marketCtx) {
    new Chart(marketCtx, {
      type: "line",
      data: {
        labels: ["2024", "2025", "2026", "2027E"],
        datasets: [
          {
            label: "全球跨境电商规模（亿美元）",
            data: [44200, 48000, 52000, 56200],
            borderColor: "#56ccf2",
            backgroundColor: "rgba(86,204,242,.2)",
            fill: true,
            tension: 0.35
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } }
      }
    });
  }

  const userCtx = document.getElementById("user-structure-chart");
  if (userCtx) {
    new Chart(userCtx, {
      type: "doughnut",
      data: {
        labels: ["超级个体/副业人群", "中小卖家", "工厂/品牌企业"],
        datasets: [
          {
            data: [62, 28, 10],
            backgroundColor: ["#7b61ff", "#56ccf2", "#4ade80"],
            borderWidth: 0
          }
        ]
      },
      options: {
        plugins: { legend: { position: "bottom" } }
      }
    });
  }

  const funnelCtx = document.getElementById("funnel-chart");
  if (funnelCtx) {
    new Chart(funnelCtx, {
      type: "bar",
      data: {
        labels: ["曝光触达", "注册体验", "激活留存", "付费转化"],
        datasets: [
          {
            label: "2年目标人数",
            data: [3000000, 300000, 120000, 30000],
            backgroundColor: ["#3b82f6", "#06b6d4", "#22c55e", "#f59e0b"]
          }
        ]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: {
            ticks: {
              callback: (value) => Number(value).toLocaleString("zh-CN")
            }
          }
        }
      }
    });
  }

  const financeCtx = document.getElementById("finance-chart");
  if (financeCtx) {
    new Chart(financeCtx, {
      data: {
        labels: ["Year 1", "Year 2"],
        datasets: [
          {
            type: "bar",
            label: "营收（万元）",
            data: [1200, 6000],
            backgroundColor: "#56ccf2"
          },
          {
            type: "line",
            label: "净利润（万元）",
            data: [120, 1800],
            borderColor: "#fbbf24",
            backgroundColor: "#fbbf24",
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }
};

const bindGsapAnimations = () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero h1, .hero .lead, .hero .hero-tags span", {
    opacity: 0,
    y: 26,
    stagger: 0.12,
    duration: 0.75,
    ease: "power2.out"
  });

  gsap.utils.toArray(".panel").forEach((panel) => {
    gsap.from(panel, {
      scrollTrigger: {
        trigger: panel,
        start: "top 78%"
      },
      opacity: 0,
      y: 34,
      duration: 0.72,
      ease: "power2.out"
    });
  });

  gsap.to(".hero-visual img", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero",
      scrub: true
    }
  });
};

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
createCharts();
bindGsapAnimations();
