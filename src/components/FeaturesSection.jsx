const painPoints = [
  "平台垄断：20%-30% 高佣金 + 封号风险，用户资产难沉淀。",
  "独立站门槛高：开发、营销、合规、供应链并行，试错成本超50万/年。",
  "工具碎片化：学习成本高，不适配新手，也难满足成熟卖家效率需求。",
  "信任与溢价不足：缺乏国际认证导致中国品牌平均溢价能力低30%-50%。"
];

const productSystem = [
  "系统内核：AI决策引擎 + 数据系统 + 自动化流程",
  "功能模块：选品｜建站｜营销｜合规质检｜售后",
  "0风险无货源：AI自动选品 + 一件代发，零库存零投入快速起量",
  "有货源进阶：品牌独立站 + 精准流量 + 私域沉淀 + 国际质检接入"
];

const FeaturesSection = () => (
  <section className="section features" id="features">
    <div className="section-head">
      <p>I · II · III · V · VI</p>
      <h2>问题、窗口与系统级解法</h2>
    </div>

    <div className="story-grid">
      <article className="feature-card reveal-item">
        <h3>二、核心痛点</h3>
        <ul className="bullet-list">
          {painPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <p className="quote-line">
          结构性机会：不仅解决“能卖”，更解决“卖得更贵”。
        </p>
      </article>

      <article className="feature-card reveal-item">
        <h3>三、愿景与使命</h3>
        <p>
          <strong>愿景：</strong>用 AI 重构全球商业，让普通人也能做全球生意。
        </p>
        <p>
          <strong>使命：</strong>打造零门槛、模块化的跨境出海操作系统，覆盖全链路经营场景。
        </p>
      </article>

      <article className="feature-card reveal-item">
        <h3>五、为什么是现在</h3>
        <ul className="bullet-list">
          <li>AI 技术成熟，全流程自动化成为现实。</li>
          <li>国家推动产业链出海，品牌升级趋势明确。</li>
          <li>超级个体与一人公司快速崛起。</li>
          <li>全球消费者更愿意为品质认证支付溢价。</li>
        </ul>
        <p className="quote-line">技术、结构、需求三重窗口叠加。</p>
      </article>

      <article className="feature-card reveal-item">
        <h3>六、核心产品与双模式</h3>
        <ul className="bullet-list">
          {productSystem.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="quote-line">从“赚差价”升级为“做品牌”。</p>
      </article>
    </div>
  </section>
);

export default FeaturesSection;
