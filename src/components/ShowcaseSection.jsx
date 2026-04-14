const items = [
  {
    title: "四、市场机遇",
    value: "4.8T -> 5.2T USD",
    meta: "2025规模4.8万亿美元，2026预计5.2万亿美元；潜在新增人群超10亿",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "七、商业模式",
    value: "Subscription + Credits",
    meta: "免费试用驱动转化，质检按单收费，多元收入结构增强抗风险能力",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "八、市场推广",
    value: "国内 + 海外 + 裂变",
    meta: "小红书/抖音/社群 + TikTok/Facebook，低成本高转化增长飞轮",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  }
];

const ShowcaseSection = () => (
  <section className="section showcase" id="showcase">
    <div className="section-head">
      <p>IV · VII · VIII · IX · X</p>
      <h2>市场空间、增长引擎与盈利路径</h2>
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

    <div className="split-grid">
      <article className="feature-card reveal-item">
        <h3>九、核心竞争优势</h3>
        <ul className="bullet-list">
          <li>模式壁垒：唯一覆盖“无货源 + 品牌化”双路径。</li>
          <li>AI效率壁垒：全链路AI驱动，整体效率提升60%+。</li>
          <li>转化体验壁垒：高转化界面设计，留存率 &gt; 40%。</li>
          <li>信任壁垒：SGS / Intertek / UL / TUV 认证体系。</li>
          <li>系统闭环壁垒：数据持续优化，形成长期竞争优势。</li>
        </ul>
        <p className="quote-line">不是工具升级，而是商业基础设施升级。</p>
      </article>

      <article className="feature-card reveal-item">
        <h3>十、成本与盈利规划（2年）</h3>
        <div className="mini-metrics">
          <div><strong>1080万</strong><span>总投入</span></div>
          <div><strong>6000万</strong><span>目标营收</span></div>
          <div><strong>1800万</strong><span>目标净利润</span></div>
          <div><strong>30%+</strong><span>净利率</span></div>
        </div>
        <ul className="bullet-list">
          <li>成本结构：研发400万、获客350万、技术120万、运营与合规210万。</li>
          <li>用户目标：8万+个体用户，3000+企业客户。</li>
          <li>具备高毛利与规模效应，盈利路径清晰可验证。</li>
        </ul>
      </article>
    </div>
  </section>
);

export default ShowcaseSection;
