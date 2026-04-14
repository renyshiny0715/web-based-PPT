import { lazy, useMemo } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const HeroSection = () => {
  const allow3D = useMemo(() => {
    if (typeof window === "undefined") return true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return window.innerWidth >= 860 && !reduceMotion;
  }, []);

  return (
    <header className="section hero" id="hero">
      <div className="hero-copy">
        <p className="eyebrow">SUPER INDIVIDUALS GLOBAL AI SAAS</p>
        <h1>超级个体出海AI服务平台</h1>
        <p>
          全链路 AI + 双模式跨境出海 + 国际质检背书。为全球超级个体与中小企业提供
          零门槛增长引擎。
        </p>
        <div className="hero-kpis">
          <div>
            <strong>5.2万亿$</strong>
            <span>2026 全球市场规模</span>
          </div>
          <div>
            <strong>10万+</strong>
            <span>2年累计目标用户</span>
          </div>
          <div>
            <strong>30%+</strong>
            <span>目标付费转化率</span>
          </div>
        </div>
        <a href="#features" className="primary-btn">
          Explore Story
        </a>
      </div>
      {allow3D ? <HeroScene /> : <div className="hero-scene hero-scene-fallback" />}
    </header>
  );
};

export default HeroSection;
