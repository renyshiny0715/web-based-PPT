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
        <p className="eyebrow">SUPER INDIVIDUALS GLOBAL AI Operting system</p>
        <h1>超级个体出海AI操作系统</h1>
        <p>
          全球首个全链路 AI 跨境出海操作系统：以“0风险无货源 + 有货源进阶”双模式，
          覆盖选品、建站、营销、合规、质检、履约与售后，让普通人也能像使用应用一样完成全球生意。
        </p>
        <p className="hero-one-liner">把全球化出海能力，交到每个人手中</p>
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
            <strong>20%-40%</strong>
            <span>认证驱动溢价提升</span>
          </div>
        </div>
        <a href="#features" className="primary-btn">
          Investor Narrative
        </a>
      </div>
      <div className="hero-scene-shell">
        <img
          className="hero-scene-poster"
          src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=1100&q=80"
          alt="global digital network"
          loading="eager"
        />
        {allow3D ? <HeroScene /> : <div className="hero-scene-fallback-layer" />}
      </div>
    </header>
  );
};

export default HeroSection;
