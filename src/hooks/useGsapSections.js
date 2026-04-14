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
          trigger: "#showcase",
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.6
        }
      });

      timeline
        .from("#showcase .section-head", { opacity: 0, x: -60, duration: 1 }, 0)
        .from("#showcase .showcase-card", { opacity: 0, y: 40, stagger: 0.18, duration: 1 }, 0.2);
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
};
