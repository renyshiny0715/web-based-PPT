import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import CtaSection from "./components/CtaSection";
import { useGsapSections } from "./hooks/useGsapSections";

const App = () => {
  useGsapSections();

  return (
    <div className="app">
      <div className="noise-layer" />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <Suspense fallback={<div className="loading-state">Loading experience...</div>}>
        <HeroSection />
      </Suspense>
      <FeaturesSection />
      <ShowcaseSection />
      <CtaSection />
    </div>
  );
};

export default App;
