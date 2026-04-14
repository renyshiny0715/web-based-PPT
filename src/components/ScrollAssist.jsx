import { useEffect, useMemo, useState } from "react";

const sectionItems = [
  { id: "hero", label: "封面" },
  { id: "features", label: "一" },
  { id: "chapter-2", label: "二" },
  { id: "chapter-3", label: "三" },
  { id: "chapter-4", label: "四" },
  { id: "chapter-5", label: "五" },
  { id: "chapter-6", label: "六" },
  { id: "chapter-7", label: "七" },
  { id: "chapter-8", label: "八" },
  { id: "chapter-9", label: "九" },
  { id: "chapter-10", label: "十" },
  { id: "chapter-11", label: "十一" },
  { id: "contact", label: "联系" }
];

const ScrollAssist = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("hero");

  const ids = useMemo(() => sectionItems.map((item) => item.id), []);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const value = max <= 0 ? 0 : (window.scrollY / max) * 100;
      setProgress(Math.max(0, Math.min(100, value)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      observer.disconnect();
    };
  }, [ids]);

  return (
    <>
      <div className="scroll-progress">
        <i style={{ width: `${progress}%` }} />
      </div>
      <nav className="scroll-assist" aria-label="章节导航">
        {sectionItems.map((item) => (
          <button
            key={item.id}
            className={active === item.id ? "active" : ""}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </>
  );
};

export default ScrollAssist;
