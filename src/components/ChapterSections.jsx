const chapterData = [
  {
    id: "features",
    title: "一、核心定位",
    icon: "🧭",
    summary: "全球首个全链路 AI 跨境出海操作系统，双模式覆盖从新手到企业卖家。",
    stats: [
      { value: "5", label: "核心模块", count: 5, suffix: "" },
      { value: "2", label: "增长模式", count: 2, suffix: "" },
      { value: "4+", label: "国际认证体系", count: 4, suffix: "+" }
    ],
    bars: [
      { label: "系统覆盖度", value: 92 },
      { label: "流程闭环度", value: 88 },
      { label: "品牌信任提升", value: 84 }
    ],
    points: [
      "不是工具集合，而是系统底座 + 模块生态的商业基础设施。",
      "覆盖选品、建站、营销、合规、质检、履约、售后全链路。",
      "接入 SGS / Intertek / UL / TUV，提升全球信任与品牌溢价。"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-2",
    title: "二、核心痛点（实战与行业数据）",
    icon: "⚠️",
    summary: "平台垄断、门槛高、工具碎片化、品牌溢价不足形成结构性机会。",
    stats: [
      { value: "20%-30%", label: "平台佣金", count: 30, suffix: "%" },
      { value: "50万+", label: "年试错成本", count: 50, suffix: "万+" },
      { value: "30%-50%", label: "溢价损失", count: 50, suffix: "%" }
    ],
    bars: [
      { label: "平台依赖", value: 86 },
      { label: "试错成本", value: 78 },
      { label: "溢价受限", value: 72 }
    ],
    points: [
      "头部平台依赖严重，用户资产无法沉淀。",
      "独立站需开发+营销+合规+供应链复合能力。",
      "缺乏国际认证使高质量产品难建立信任。"
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-3",
    title: "三、愿景与使命",
    icon: "🎯",
    summary: "用 AI 重构全球商业，让普通人也能做全球生意。",
    stats: [
      { value: "0门槛", label: "系统体验", count: 0, suffix: "门槛" },
      { value: "100%", label: "全链路覆盖", count: 100, suffix: "%" },
      { value: "3层", label: "系统架构", count: 3, suffix: "层" }
    ],
    bars: [
      { label: "可用性", value: 91 },
      { label: "模块化", value: 87 },
      { label: "扩展性", value: 85 }
    ],
    points: [
      "愿景：打造人人可用的全球化经营能力。",
      "使命：构建可持续迭代的跨境出海操作系统。",
      "方法：系统化替代工具化，降低认知和执行门槛。"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-4",
    title: "四、市场机遇",
    icon: "📈",
    summary: "跨境电商高增长 + 超级个体崛起，供给端与需求端同步爆发。",
    stats: [
      { value: "4.8T", label: "2025 全球市场", count: 4.8, suffix: "T", decimals: 1 },
      { value: "5.2T", label: "2026 预测规模", count: 5.2, suffix: "T", decimals: 1 },
      { value: "10亿+", label: "潜在新增人群", count: 10, suffix: "亿+" }
    ],
    bars: [
      { label: "市场增速", value: 82 },
      { label: "需求弹性", value: 89 },
      { label: "创业渗透", value: 76 }
    ],
    points: [
      "中国跨境卖家规模超 2000 万。",
      "一人公司成为全球创业主流，创业结构变化明显。",
      "跨境基础设施完善，窗口期已到。"
    ],
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-5",
    title: "五、为什么是现在",
    icon: "⏱️",
    summary: "AI成熟、产业政策、创业趋势、消费升级四重共振。",
    stats: [
      { value: "4", label: "关键驱动因素", count: 4, suffix: "" },
      { value: "60%+", label: "自动化效率潜力", count: 60, suffix: "%+" },
      { value: "20%-40%", label: "认证溢价空间", count: 40, suffix: "%" }
    ],
    bars: [
      { label: "技术成熟度", value: 88 },
      { label: "政策支持", value: 84 },
      { label: "需求强度", value: 86 }
    ],
    points: [
      "AI 全流程自动化能力已可规模化落地。",
      "国家推动产业链出海，品牌化成为主旋律。",
      "消费者越来越重视认证与品质。"
    ],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-6",
    title: "六、核心产品与双模式",
    icon: "⚙️",
    summary: "系统内核 + 模块体系 + 双模式设计，形成闭环经营能力。",
    stats: [
      { value: "3", label: "内核组件", count: 3, suffix: "" },
      { value: "5", label: "功能模块", count: 5, suffix: "" },
      { value: "2", label: "增长路径", count: 2, suffix: "" }
    ],
    bars: [
      { label: "执行自动化", value: 90 },
      { label: "模块协同", value: 86 },
      { label: "品牌升级潜力", value: 83 }
    ],
    points: [
      "0风险无货源：零库存零投入，快速验证与起量。",
      "有货源进阶：品牌独立站 + 精准流量 + 私域沉淀 + 质检认证。",
      "从赚差价升级为做品牌。"
    ],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-7",
    title: "七、商业模式",
    icon: "💳",
    summary: "订阅 + Credits + 质检收费，形成多元稳定收入结构。",
    stats: [
      { value: "3", label: "收入层级", count: 3, suffix: "" },
      { value: "75%+", label: "SaaS毛利潜力", count: 75, suffix: "%+" },
      { value: "稳定", label: "现金流质量" }
    ],
    bars: [
      { label: "订阅收入占比", value: 68 },
      { label: "Credits弹性", value: 72 },
      { label: "增值服务占比", value: 61 }
    ],
    points: [
      "免费试用负责激活，订阅负责持续收入。",
      "质检按单收费增强高毛利收入占比。",
      "可随企业级需求扩展定制化套餐。"
    ],
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-8",
    title: "八、市场推广",
    icon: "🚀",
    summary: "国内外双引擎 + 裂变机制，构建低成本高转化增长飞轮。",
    stats: [
      { value: "300万+", label: "曝光目标", count: 300, suffix: "万+" },
      { value: "30万+", label: "注册目标", count: 30, suffix: "万+" },
      { value: "3万+", label: "付费目标", count: 3, suffix: "万+" }
    ],
    bars: [
      { label: "国内触达", value: 84 },
      { label: "海外触达", value: 77 },
      { label: "裂变效率", value: 73 }
    ],
    points: [
      "国内：小红书、抖音、社群，强化盈利案例传播。",
      "海外：TikTok、Facebook，突出供应链与认证优势。",
      "裂变 + 激励机制形成复利增长。"
    ],
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-9",
    title: "九、核心竞争优势",
    icon: "🛡️",
    summary: "模式、效率、体验、认证、闭环五重壁垒构建长期优势。",
    stats: [
      { value: "60%+", label: "效率提升", count: 60, suffix: "%+" },
      { value: "40%+", label: "留存率", count: 40, suffix: "%+" },
      { value: "20%-40%", label: "认证溢价", count: 40, suffix: "%" }
    ],
    bars: [
      { label: "模式壁垒", value: 88 },
      { label: "体验壁垒", value: 82 },
      { label: "信任壁垒", value: 85 }
    ],
    points: [
      "唯一覆盖无货源与品牌化双路径。",
      "全链路 AI 驱动降低人力依赖和运营复杂度。",
      "国际认证体系增强高端市场信任和议价能力。"
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-10",
    title: "十、成本与盈利规划",
    icon: "💰",
    summary: "2年投入 1080 万，目标营收 6000 万，净利润 1800 万。",
    stats: [
      { value: "1080万", label: "2年总投入", count: 1080, suffix: "万" },
      { value: "6000万", label: "目标营收", count: 6000, suffix: "万" },
      { value: "30%+", label: "目标净利率", count: 30, suffix: "%+" }
    ],
    bars: [
      { label: "研发投入占比", value: 37 },
      { label: "获客投入占比", value: 32 },
      { label: "运营与技术占比", value: 31 }
    ],
    points: [
      "成本结构：研发400万、获客350万、技术120万、运营合规210万。",
      "用户目标：8万+个体用户、3000+企业客户。",
      "具备高毛利 + 规模效应的盈利模型。"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1300&q=80"
  },
  {
    id: "chapter-11",
    title: "十一、投资亮点",
    icon: "✨",
    summary: "趋势红利 + 模式壁垒 + 盈利确定性，共同构成操作系统级机会。",
    stats: [
      { value: "3大", label: "趋势叠加", count: 3, suffix: "" },
      { value: "2模式", label: "全客群覆盖", count: 2, suffix: "" },
      { value: "长期", label: "生态网络效应" }
    ],
    bars: [
      { label: "商业价值", value: 89 },
      { label: "社会价值", value: 81 },
      { label: "长期增长潜力", value: 87 }
    ],
    points: [
      "AI + 个体经济 + 出海三大趋势同频共振。",
      "AI + 质检构建难复制护城河，盈利路径清晰可验证。",
      "从工具竞争升级为基础设施竞争。"
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1300&q=80"
  }
];

const ChapterSections = () => (
  <>
    {chapterData.map((chapter) => (
      <section className="section chapter-section reveal-item" id={chapter.id} key={chapter.id}>
        <div className="chapter-meta">
          <span className="icon-pill">{chapter.icon}</span>
          <h2>{chapter.title}</h2>
        </div>
        <p className="chapter-summary">{chapter.summary}</p>
        <div className="chapter-stat-grid">
          {chapter.stats.map((stat) => (
            <article className="chapter-stat" key={`${chapter.id}-${stat.label}`}>
              <strong
                className="stat-number"
                data-count={stat.count ?? ""}
                data-suffix={stat.suffix ?? ""}
                data-decimals={stat.decimals ?? 0}
              >
                {stat.value}
              </strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
        <div className="chapter-bar-chart">
          {chapter.bars.map((bar) => (
            <div className="chapter-bar-row" key={`${chapter.id}-${bar.label}`}>
              <span>{bar.label}</span>
              <div className="chapter-bar-track">
                <i className="chapter-bar-fill" data-fill={bar.value} />
              </div>
              <b>{bar.value}%</b>
            </div>
          ))}
        </div>
        <div className="chapter-layout">
          <div className="chapter-media-stack">
            <img className="chapter-image" src={chapter.image} alt={chapter.title} loading="lazy" />
          </div>
          <ul className="bullet-list">
            {chapter.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>
    ))}

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
