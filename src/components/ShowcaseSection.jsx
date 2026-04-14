const items = [
  {
    title: "市场增长曲线",
    value: "4.8T -> 5.2T USD",
    meta: "Cross-border eCommerce 2025-2026",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "增长漏斗",
    value: "300万 -> 3万",
    meta: "曝光触达 -> 付费转化",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "盈利模型",
    value: "Y2 净利 1800万",
    meta: "SaaS + Credits + 质检增值",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  }
];

const ShowcaseSection = () => (
  <section className="section showcase" id="showcase">
    <div className="section-head">
      <p>Showcase</p>
      <h2>Interactive Metrics Gallery</h2>
    </div>
    <div className="showcase-grid">
      {items.map((item) => (
        <article className="showcase-card reveal-item" key={item.title}>
          <img src={item.image} alt={item.title} loading="lazy" />
          <div className="showcase-copy">
            <h3>{item.title}</h3>
            <strong>{item.value}</strong>
            <p>{item.meta}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ShowcaseSection;
