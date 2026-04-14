import { Suspense } from "react";
import HeroSection from "./components/HeroSection";
import ChapterSections from "./components/ChapterSections";
import ScrollAssist from "./components/ScrollAssist";
import { useGsapSections } from "./hooks/useGsapSections";

const App = () => {
  useGsapSections();

  return (
    <div className="app">
      <ScrollAssist />
      <div className="noise-layer" />
      <div className="gradient-orb orb-1" />
      <div className="gradient-orb orb-2" />
      <Suspense fallback={<div className="loading-state">Loading experience...</div>}>
        <HeroSection />
      </Suspense>
      <ChapterSections />
    </div>
  );
};

export default App;
