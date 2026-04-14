const PhotoStrip = ({ images }) => (
  <div className="photo-strip reveal-item">
    {images.map((image) => (
      <img key={image} src={image} alt="chapter visual" loading="lazy" />
    ))}
  </div>
);

const ChapterSections = () => (
  <>
    <section className="section chapter-section reveal-item" id="features">
      <div className="section-head">
        <h2>一、核心定位</h2>
      </div>
      <div className="chapter-layout">
        <img
          className="chapter-image"
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1300&q=80"
          alt="核心定位"
          loading="lazy"
        />
        <div>
          <ul className="bullet-list">
            <li>全球首个全链路 AI 跨境出海操作系统，双模式覆盖从新手到企业卖家。</li>
            <li>不是工具集合，而是“系统底座 + 模块生态”的商业基础设施。</li>
            <li>覆盖选品、建站、营销、合规、质检、履约、售后全链路。</li>
            <li>接入 SGS / Intertek / UL / TUV 国际认证，建立高端市场信任。</li>
          </ul>
          <p className="quote-line">本质：让全球商业运行的操作系统。</p>
        </div>
      </div>
      <div className="kpi-grid">
        <div><strong>5</strong><span>核心功能模块</span></div>
        <div><strong>2</strong><span>增长模式引擎</span></div>
        <div><strong>4+</strong><span>国际质检体系</span></div>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-2">
      <div className="section-head">
        <h2>二、核心痛点（实战与行业数据）</h2>
      </div>
      <div className="pain-grid">
        <article className="feature-card"><h3>平台垄断</h3><p>佣金 20%-30%，封号风险高，资产难沉淀。</p></article>
        <article className="feature-card"><h3>独立站门槛</h3><p>试错成本超50万/年，成功率不足10%。</p></article>
        <article className="feature-card"><h3>工具碎片化</h3><p>学习与协同成本高，效率提升有限。</p></article>
        <article className="feature-card"><h3>溢价不足</h3><p>缺认证导致品牌溢价能力低30%-50%。</p></article>
      </div>
      <div className="bar-wrap">
        <p>问题严重度（行业均值）</p>
        <div className="bar-row"><span>平台依赖</span><div><i style={{ width: "86%" }} /></div><b>86</b></div>
        <div className="bar-row"><span>试错成本</span><div><i style={{ width: "78%" }} /></div><b>78</b></div>
        <div className="bar-row"><span>溢价受限</span><div><i style={{ width: "72%" }} /></div><b>72</b></div>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-3">
      <div className="section-head">
        <h2>三、愿景与使命</h2>
      </div>
      <div className="vision-panel">
        <article className="feature-card">
          <h3>愿景</h3>
          <p>用 AI 重构全球商业，让普通人也能做全球生意。</p>
        </article>
        <article className="feature-card">
          <h3>使命</h3>
          <p>打造零门槛、模块化跨境出海操作系统，覆盖全链路经营场景。</p>
        </article>
      </div>
    </section>

    <section className="section chapter-section reveal-item" id="chapter-4">
      <div className="section-head">
        <h2>四、市场机遇</h2>
      </div>
      <div className="market-chart">
        <div className="market-col"><span>2024</span><i style={{ height: "52%" }} /><b>4.4T</b></div>
        <div className="market-col"><span>2025</span><i style={{ height: "70%" }} /><b>4.8T</b></div>
        <div className="market-col"><span>2026E</span><i style={{ height: "82%" }} /><b>5.2T</b></div>
      </div>
      <div className="kpi-grid">
        <div><strong>2000万+</strong><span>中国跨境卖家</span></div>
        <div><strong>10亿+</strong><span>潜在新增人群</span></div>
        <div><strong>27%</strong><span>一人公司增长率</span></div>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-5">
      <div className="section-head">
        <h2>五、为什么是现在</h2>
      </div>
      <div className="timeline-list">
        <div><b>1</b><p>AI 成熟：全流程自动化成为现实。</p></div>
        <div><b>2</b><p>产业升级：国家推动制造向品牌化出海。</p></div>
        <div><b>3</b><p>创业变迁：超级个体与一人公司崛起。</p></div>
        <div><b>4</b><p>消费升级：品质认证驱动全球溢价支付。</p></div>
      </div>
      <p className="quote-line">技术、结构与需求三重窗口叠加。</p>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-6">
      <div className="section-head">
        <h2>六、核心产品与双模式</h2>
      </div>
      <div className="split-grid">
        <article className="feature-card">
          <h3>系统架构</h3>
          <ul className="bullet-list">
            <li>系统内核：AI 决策引擎 / 数据系统 / 自动化流程</li>
            <li>功能模块：选品｜建站｜营销｜合规质检｜售后</li>
            <li>核心能力：从操作工具升级为经营系统</li>
          </ul>
        </article>
        <article className="feature-card">
          <h3>双模式设计</h3>
          <ul className="bullet-list">
            <li>0风险无货源：零库存、零投入、快速起量</li>
            <li>有货源进阶：独立站 + 精准流量 + 私域沉淀 + 认证质检</li>
            <li>价值升级：从赚差价到做品牌</li>
          </ul>
        </article>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-7">
      <div className="section-head">
        <h2>七、商业模式</h2>
      </div>
      <div className="business-layers">
        <div><strong>Layer 1</strong><p>订阅制 + Credits 计费</p></div>
        <div><strong>Layer 2</strong><p>免费试用驱动激活和转化</p></div>
        <div><strong>Layer 3</strong><p>质检服务按单收费</p></div>
        <div><strong>Layer 4</strong><p>多元收入结构增强抗周期能力</p></div>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-8">
      <div className="section-head">
        <h2>八、市场推广</h2>
      </div>
      <div className="split-grid">
        <article className="feature-card">
          <h3>国内增长路径</h3>
          <p>小红书 / 抖音 / 社群，以真实盈利案例激发副业需求。</p>
        </article>
        <article className="feature-card">
          <h3>海外增长路径</h3>
          <p>TikTok / Facebook，突出供应链优势 + 品质认证。</p>
        </article>
      </div>
      <div className="funnel-line">
        <span>曝光 300万+</span>
        <span>注册 30万+</span>
        <span>激活 12万+</span>
        <span>付费 3万+</span>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-9">
      <div className="section-head">
        <h2>九、核心竞争优势</h2>
      </div>
      <table className="compare-table">
        <thead>
          <tr><th>维度</th><th>我方</th><th>常见工具方案</th></tr>
        </thead>
        <tbody>
          <tr><td>模式</td><td>无货源 + 品牌化双路径</td><td>单一路径</td></tr>
          <tr><td>AI效率</td><td>全链路提升 60%+</td><td>局部自动化</td></tr>
          <tr><td>认证溢价</td><td>20%-40% 溢价提升</td><td>缺乏权威认证</td></tr>
          <tr><td>系统闭环</td><td>数据持续优化</td><td>多工具割裂</td></tr>
        </tbody>
      </table>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-10">
      <div className="section-head">
        <h2>十、成本与盈利规划</h2>
      </div>
      <div className="mini-metrics">
        <div><strong>1080万</strong><span>2年总投入</span></div>
        <div><strong>6000万</strong><span>目标营收</span></div>
        <div><strong>1800万</strong><span>净利润</span></div>
        <div><strong>30%+</strong><span>净利率</span></div>
      </div>
      <div className="bar-wrap">
        <p>2年成本结构（万元）</p>
        <div className="bar-row"><span>研发 400</span><div><i style={{ width: "37%" }} /></div><b>37%</b></div>
        <div className="bar-row"><span>获客 350</span><div><i style={{ width: "32%" }} /></div><b>32%</b></div>
        <div className="bar-row"><span>技术 120</span><div><i style={{ width: "11%" }} /></div><b>11%</b></div>
        <div className="bar-row"><span>运营合规 210</span><div><i style={{ width: "20%" }} /></div><b>20%</b></div>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section chapter-section reveal-item" id="chapter-11">
      <div className="section-head">
        <h2>十一、投资亮点</h2>
      </div>
      <div className="highlight-grid">
        <div>AI + 个体经济 + 出海三大趋势叠加</div>
        <div>双模式驱动增长，覆盖全客群</div>
        <div>AI + 质检构建核心壁垒</div>
        <div>盈利路径清晰，可验证</div>
        <div>商业价值与社会价值兼具</div>
        <div>操作系统级机会：基础设施竞争</div>
      </div>
      <PhotoStrip
        images={[
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
        ]}
      />
    </section>

    <section className="section cta reveal-item" id="contact">
      <div className="cta-inner">
        <p>结尾 / Contact</p>
        <h2>任源</h2>
        <p>把全球化出海能力，交到每个人手中。</p>
        <div className="cta-actions">
          <a className="primary-btn" href="mailto:yuanren0715@gmail.com">yuanren0715@gmail.com</a>
          <a className="ghost-btn" href="#hero">回到顶部</a>
        </div>
      </div>
    </section>
  </>
);

export default ChapterSections;
