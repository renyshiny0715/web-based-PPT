gsap.registerPlugin(ScrollTrigger);

const navItems = [
  "hero",
  "features",
  "chapter-2",
  "chapter-founder",
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
const threeCanvas = document.getElementById("three-canvas");
const sceneLabel = document.getElementById("scene-label");
const isMobile = window.matchMedia("(max-width: 980px)").matches || window.matchMedia("(pointer: coarse)").matches;

if (isMobile) {
  document.body.classList.add("is-mobile");
}

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
  const activeEl = document.getElementById(navItems[active]);
  const title = activeEl?.querySelector("h2")?.textContent || "Immersive Deck";
  sceneLabel.textContent = title;
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

window.addEventListener("touchmove", (e) => {
  const touch = e.touches?.[0];
  if (!touch) return;
  mouseGlow.style.left = `${touch.clientX}px`;
  mouseGlow.style.top = `${touch.clientY}px`;
}, { passive: true });

const initThreeScene = () => {
  if (!window.THREE || !threeCanvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog("#050813", 6, 18);

  const renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const camera = new THREE.PerspectiveCamera(isMobile ? 52 : 45, window.innerWidth / window.innerHeight, 0.1, 80);
  camera.position.set(0, 0.2, 6.6);

  const ambient = new THREE.AmbientLight("#9cc8ff", 0.7);
  scene.add(ambient);
  const key = new THREE.PointLight("#7c6dff", 1.6, 24);
  key.position.set(2.5, 1.8, 2.6);
  scene.add(key);
  const rim = new THREE.DirectionalLight("#62d7ff", 1.1);
  rim.position.set(-2.8, -1.5, 3.3);
  scene.add(rim);

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.35, 1),
    new THREE.MeshPhysicalMaterial({
      color: "#7f7bff",
      metalness: 0.42,
      roughness: 0.2,
      transmission: 0.2,
      thickness: 1.5,
      clearcoat: 1,
      clearcoatRoughness: 0.15
    })
  );
  scene.add(core);

  const shardGroup = new THREE.Group();
  const shardMat = new THREE.MeshBasicMaterial({ color: "#83c8ff", transparent: true, opacity: 0.45, wireframe: true });
  for (let i = 0; i < 8; i += 1) {
    const shard = new THREE.Mesh(new THREE.TetrahedronGeometry(0.26 + Math.random() * 0.16), shardMat);
    const angle = (i / 8) * Math.PI * 2;
    shard.position.set(Math.cos(angle) * (2.2 + Math.random()), (Math.random() - 0.5) * 1.6, Math.sin(angle) * (2.2 + Math.random()));
    shardGroup.add(shard);
  }
  scene.add(shardGroup);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.03, 16, 160),
    new THREE.MeshBasicMaterial({ color: "#64d5ff", transparent: true, opacity: 0.55 })
  );
  ring.rotation.x = Math.PI / 2.6;
  scene.add(ring);

  const particleCount = 260;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 1) {
    positions[i] = (Math.random() - 0.5) * 16;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const particles = new THREE.Points(
    particleGeometry,
    new THREE.PointsMaterial({ size: 0.03, color: "#8ccaff", transparent: true, opacity: 0.75 })
  );
  scene.add(particles);

  const sceneState = { progress: 0 };
  gsap.to(sceneState, {
    progress: 1,
    ease: "none",
    scrollTrigger: {
      trigger: ".page",
      start: "top top",
      end: "bottom bottom",
      scrub: true
    }
  });

  const mouse = { x: 0, y: 0 };
  const onPointerMove = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  const onTouchMove = (event) => {
    const touch = event.touches?.[0];
    if (!touch) return;
    mouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (touch.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("touchmove", onTouchMove, { passive: true });

  let raf = 0;
  const render = () => {
    const p = sceneState.progress;
    core.rotation.x += 0.003 + p * 0.001;
    core.rotation.y += 0.004 + p * 0.0014;
    ring.rotation.z += 0.0026;
    particles.rotation.y += 0.0009 + p * 0.0007;
    shardGroup.rotation.y += 0.0016 + p * 0.0008;
    shardGroup.rotation.x = Math.sin(p * Math.PI * 2) * 0.35;

    core.position.y = Math.sin(p * Math.PI * 2) * 0.4;
    core.position.x = Math.cos(p * Math.PI * 1.5) * 0.35;
    camera.position.z = 6.6 - p * (isMobile ? 2.45 : 2.1);
    camera.position.y = 0.2 + p * (isMobile ? 1.05 : 0.8);
    camera.position.x += (mouse.x * (isMobile ? 0.34 : 0.45) - camera.position.x) * 0.03;
    camera.lookAt(core.position);

    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  };
  raf = requestAnimationFrame(render);

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", onResize);

  const sectionConfigs = [
    { id: "hero", z: 6.6, y: 0.2, x: 0 },
    { id: "features", z: 5.8, y: 0.45, x: -0.1 },
    { id: "chapter-2", z: 5.4, y: -0.2, x: 0.2 },
    { id: "chapter-founder", z: 5.2, y: 0.6, x: -0.18 },
    { id: "chapter-3", z: 4.95, y: 0.75, x: -0.2 },
    { id: "chapter-4", z: 4.72, y: 0.15, x: 0.25 },
    { id: "chapter-5", z: 4.55, y: -0.35, x: -0.15 },
    { id: "chapter-6", z: 4.3, y: 0.55, x: 0.18 },
    { id: "chapter-7", z: 4.16, y: -0.18, x: -0.22 },
    { id: "chapter-8", z: 3.98, y: 0.48, x: 0.16 },
    { id: "chapter-9", z: 3.82, y: -0.22, x: -0.12 },
    { id: "chapter-10", z: 3.62, y: 0.32, x: 0.22 },
    { id: "chapter-11", z: 3.46, y: 0.15, x: -0.18 },
    { id: "contact", z: 3.3, y: 0.05, x: 0 }
  ];
  const mobileSectionConfigs = [
    { id: "hero", z: 7.2, y: 0.28, x: 0 },
    { id: "features", z: 6.35, y: 0.72, x: -0.08 },
    { id: "chapter-2", z: 6.1, y: -0.3, x: 0.14 },
    { id: "chapter-founder", z: 5.95, y: 0.88, x: -0.14 },
    { id: "chapter-3", z: 5.72, y: 0.95, x: -0.12 },
    { id: "chapter-4", z: 5.5, y: 0.26, x: 0.15 },
    { id: "chapter-5", z: 5.3, y: -0.42, x: -0.1 },
    { id: "chapter-6", z: 5.08, y: 0.74, x: 0.14 },
    { id: "chapter-7", z: 4.92, y: -0.3, x: -0.14 },
    { id: "chapter-8", z: 4.76, y: 0.63, x: 0.12 },
    { id: "chapter-9", z: 4.6, y: -0.26, x: -0.1 },
    { id: "chapter-10", z: 4.38, y: 0.45, x: 0.12 },
    { id: "chapter-11", z: 4.16, y: 0.2, x: -0.12 },
    { id: "contact", z: 4.05, y: 0.08, x: 0 }
  ];
  const activeSectionConfigs = isMobile ? mobileSectionConfigs : sectionConfigs;
  activeSectionConfigs.forEach((cfg, idx) => {
    ScrollTrigger.create({
      trigger: `#${cfg.id}`,
      start: "top 60%",
      onEnter: () => {
        const spinBoost = isMobile ? 1.02 : 0.85;
        gsap.to(camera.position, { x: cfg.x, y: cfg.y, z: cfg.z, duration: 0.85, ease: "power2.out" });
        gsap.to(core.rotation, { y: core.rotation.y + spinBoost, duration: 0.85, ease: "power2.out" });
        gsap.to(document.documentElement, {
          "--theme-hue": `${(idx * 19) % 180}deg`,
          duration: 0.7,
          ease: "power2.out"
        });
      },
      onEnterBack: () => {
        gsap.to(camera.position, { x: cfg.x, y: cfg.y, z: cfg.z, duration: 0.7, ease: "power2.out" });
      }
    });
  });

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("touchmove", onTouchMove);
    renderer.dispose();
    particleGeometry.dispose();
  };
};

gsap.from(".hero .stagger", {
  opacity: 0,
  y: 30,
  scale: 0.98,
  duration: 0.8,
  stagger: 0.12,
  ease: "power2.out"
});

gsap.to("#hero", {
  y: isMobile ? -16 : -24,
  opacity: isMobile ? 0.985 : 0.97,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: isMobile ? "bottom 68%" : "bottom 62%",
    scrub: true
  }
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

gsap.from("#chapter-founder .founder-stat", {
  opacity: 0,
  y: 24,
  scale: 0.95,
  duration: 0.62,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#chapter-founder",
    start: "top 78%",
    once: true
  }
});

gsap.from(".funnel-step", {
  opacity: 0,
  x: -18,
  duration: 0.65,
  stagger: 0.13,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#chapter-8",
    start: "top 78%",
    once: true
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

if (isMobile) {
  gsap.utils.toArray(".deck-section").forEach((section) => {
    gsap.to(section, {
      rotateX: -4,
      y: -14,
      transformPerspective: 900,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
}

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
  gsap.fromTo(el, { scale: 0.8, opacity: 0.6 }, {
    scale: 1,
    opacity: 1,
    duration: 0.55,
    ease: "back.out(2.3)",
    scrollTrigger: {
      trigger: el,
      start: "top 88%",
      once: true
    }
  });
});

gsap.utils.toArray(".metric-card, .chip-card, .layer-card, .highlight-grid div, .chapter-stat, .funnel-step, .founder-stat").forEach((card) => {
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

gsap.from("#contact > *", {
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

initThreeScene();
setProgress();
setActiveNav();
