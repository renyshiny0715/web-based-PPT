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
const threeCanvas = document.getElementById("three-canvas");

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

const initThreeScene = () => {
  if (!window.THREE || !threeCanvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog("#050813", 6, 18);

  const renderer = new THREE.WebGLRenderer({
    canvas: threeCanvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 80);
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

  let raf = 0;
  const render = () => {
    const p = sceneState.progress;
    core.rotation.x += 0.003 + p * 0.001;
    core.rotation.y += 0.004 + p * 0.0014;
    ring.rotation.z += 0.0026;
    particles.rotation.y += 0.0009 + p * 0.0007;

    core.position.y = Math.sin(p * Math.PI * 2) * 0.4;
    core.position.x = Math.cos(p * Math.PI * 1.5) * 0.35;
    camera.position.z = 6.6 - p * 2.1;
    camera.position.y = 0.2 + p * 0.8;
    camera.position.x += (mouse.x * 0.45 - camera.position.x) * 0.03;
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

  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", onResize);
    window.removeEventListener("pointermove", onPointerMove);
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
