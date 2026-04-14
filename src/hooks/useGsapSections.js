import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginRegistered = false;

const registerPlugin = () => {
  if (!pluginRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginRegistered = true;
  }
};

export const useGsapSections = () => {
  useEffect(() => {
    registerPlugin();

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tiltCleanups = [];
      const countups = [];

      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.09,
        ease: "power2.out"
      });

      gsap.utils.toArray(".reveal-item").forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          y: 46,
          scale: 0.96,
          duration: 0.85,
          ease: "power3.out",
          delay: index * 0.02,
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            once: true
          }
        });
      });

      gsap.to(".orb-1", {
        yPercent: 35,
        ease: "none",
        scrollTrigger: {
          trigger: ".app",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

      gsap.to(".orb-2", {
        yPercent: -22,
        xPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: ".app",
          start: "top top",
          end: "bottom bottom",
          scrub: true
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#chapter-6",
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.6
        }
      });

      timeline
        .from("#chapter-6 .section-head", { opacity: 0, x: -60, duration: 1 }, 0)
        .from("#chapter-6 .chapter-image", { opacity: 0, y: 40, scale: 0.94, duration: 1 }, 0.2)
        .from("#chapter-6 .bullet-list li", { opacity: 0, x: 20, stagger: 0.1, duration: 0.6 }, 0.3);

      gsap.utils.toArray(".chapter-image").forEach((img) => {
        gsap.to(img, {
          yPercent: 9,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      gsap.utils.toArray(".chapter-bar-fill").forEach((fill) => {
        const target = Number(fill.dataset.fill || "0");
        gsap.fromTo(
          fill,
          { width: "0%" },
          {
            width: `${target}%`,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: fill.closest(".chapter-bar-chart"),
              start: "top 88%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray(".chapter-meta h2, .chapter-summary, .bullet-list li").forEach((item, idx) => {
        gsap.from(item, {
          opacity: 0,
          y: 22,
          duration: 0.6,
          delay: idx * 0.01,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item.closest(".chapter-section"),
            start: "top 82%"
          }
        });
      });

      gsap.utils.toArray(".stat-number").forEach((el) => {
        const raw = Number(el.dataset.count || "");
        if (!Number.isFinite(raw)) return;
        const suffix = el.dataset.suffix || "";
        const decimals = Number(el.dataset.decimals || "0");
        const obj = { val: 0 };
        const tween = gsap.to(obj, {
          val: raw,
          duration: 1.15,
          ease: "power2.out",
          paused: true,
          onUpdate: () => {
            el.textContent = `${obj.val.toFixed(decimals)}${suffix}`;
          }
        });
        countups.push(tween);
        ScrollTrigger.create({
          trigger: el,
          start: "top 88%",
          once: true,
          onEnter: () => tween.play(0)
        });
      });

      if (window.innerWidth > 980) {
        gsap.utils
          .toArray(".feature-card, .highlight-grid div, .kpi-grid div, .chapter-stat")
          .forEach((el) => {
          const onMove = (event) => {
            const rect = el.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width - 0.5;
            const py = (event.clientY - rect.top) / rect.height - 0.5;
            gsap.to(el, {
              rotateY: px * 5,
              rotateX: -py * 5,
              transformPerspective: 700,
              transformOrigin: "center",
              duration: 0.25
            });
          };
          const onLeave = () => {
            gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.35 });
          };
          el.addEventListener("pointermove", onMove);
          el.addEventListener("pointerleave", onLeave);
          tiltCleanups.push(() => {
            el.removeEventListener("pointermove", onMove);
            el.removeEventListener("pointerleave", onLeave);
          });
        });
      }

      return () => {
        countups.forEach((tw) => tw.kill());
        tiltCleanups.forEach((fn) => fn());
      };
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
};
