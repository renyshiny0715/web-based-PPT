const features = [
  {
    title: "0 风险无货源模式",
    text: "AI 一键连接全球货源与物流，一件代发，零库存零投入，3天完成首轮验证。"
  },
  {
    title: "有货源进阶模式",
    text: "独立站搭建、流量投放、私域沉淀、供应链协同，支持从代运营向品牌化升级。"
  },
  {
    title: "国际质检体系",
    text: "SGS / Intertek / UL 全流程对接，强化海外信任与溢价能力，提升品牌全球信誉。"
  },
  {
    title: "AI 全链路自动化",
    text: "选品、建站、营销、售后一体化闭环，预计效率提升 60%+，显著降低试错成本。"
  }
];

const FeaturesSection = () => (
  <section className="section features" id="features">
    <div className="section-head">
      <p>Features</p>
      <h2>Scroll-driven Product Story</h2>
    </div>
    <div className="feature-grid">
      {features.map((feature) => (
        <article className="feature-card reveal-item" key={feature.title}>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
