(() => {
  "use strict";

  const translations = {
    en: {
      meta: {
        title: "Zhongchi Wang | 王仲池 · Jinan University",
        description:
          "Zhongchi Wang (王仲池) — Faculty member and Qinglan Scholar at Jinan University. Research in data privacy and security, multi-agent collaboration, and federated evaluation."
      },
      access: {
        skip: "Skip to main content",
        primaryNav: "Primary navigation",
        language: "Choose language",
        chinese: "Switch to Chinese",
        english: "Switch to English"
      },
      nav: {
        about: "About",
        news: "News",
        publications: "Publications",
        students: "Students",
        projects: "Projects",
        awards: "Awards"
      },
      profile: {
        avatarAlt: "Portrait of Zhongchi Wang",
        kicker: "ACADEMIC PROFILE",
        role: "Faculty Member · Qinglan Scholar, Jinan University",
        focus:
          "Data privacy and security, multi-agent collaboration, and federated evaluation for LLM fine-tuning."
      },
      about: {
        eyebrow: "RESEARCH · EDUCATION · COLLABORATION",
        title: "About Me",
        body: `I am a <strong>faculty member</strong> and <strong>Qinglan Scholar</strong> at the <strong>College of Cyber Security, Jinan University</strong>, Guangzhou, China. I received my <strong>Ph.D. in Software Engineering</strong> from the ACT Lab, <a href="https://scse.buaa.edu.cn/" target="_blank" rel="noopener">School of Computer Science and Engineering</a>, Beihang University in June 2026, supervised by <strong>Prof. Hailong Sun</strong>. My research investigates <strong>data privacy and security, multi-agent collaboration, and federated evaluation of data value for LLM fine-tuning</strong>. I was a key contributor to China's National Key R&amp;D Program on industrial IoT data analytics, participated in defense and national science foundation projects, and co-authored the MIIT textbook on crowdsourcing data annotation.`
      },
      education: {
        title: "Education",
        phd: `<strong>Ph.D. in Software Engineering</strong><span>School of Computer Science and Engineering, Beihang University</span>`
      },
      news: {
        eyebrow: "LATEST UPDATES",
        title: "News",
        d3em: `<span class="news-date">[08/2026]</span><span class="new-badge">NEW</span>Our paper <a href="https://ieeexplore.ieee.org/document/11666998" target="_blank" rel="noopener"><strong><em>D<sup>3</sup>EM: A Dual-layer Dynamic Debiasing Evaluation Mechanism for Client Contribution in Federated Learning</em></strong></a> was published as an Early Access article in <strong>IEEE Transactions on Cognitive Communications and Networking (IEEE TCCN)</strong> (CAS Tier 1 Top Journal, 2025 / JCR Q1)!`,
        demus: `<span class="news-date">[06/2026]</span>On June 18, 2026, <em>DeMuS: Learning Decoupled Matching and Scoring for Batch Zero-Shot Industrial Anomaly Detection</em> was accepted to <strong>ECCV 2026</strong> (CCF-B)!`,
        phdDegree: `<span class="news-date">[06/2026]</span>Received my <strong>Ph.D. in Software Engineering</strong> from <strong>Beihang University</strong>!`,
        fed4fed: `<span class="news-date">[05/2026]</span>Our paper <em>Fed4Fed: A Privacy-Preserving Federated Statistical Approach for Evaluating Federated Learning Models</em> was formally published in <strong>IEEE Transactions on Dependable and Secure Computing (IEEE TDSC)</strong>, Vol. 23, No. 3, 2026 (CCF-A / JCR Q1 / CAS Zone I)!`,
        fede3: `<span class="news-date">[04/2026]</span>Our paper <strong><em>Fed-e<sup>3</sup></em></strong> was formally published in <strong>Information Fusion</strong>, Vol. 128, Article 103949 (CAS Zone I / JCR Q1, five-year IF 17.9)!`,
        fedevalfairPresentation: `<span class="news-date">[10/2024]</span>Presented <em>FedEvalFair</em> at <strong>ACM Multimedia 2024</strong> in Melbourne!`,
        iioT: `<span class="news-date">[09/2024]</span>Began leading the large-model industrial IoT analytics sub-project within the National Key R&amp;D Program!`,
        fedevalfairAccepted: `<span class="news-date">[07/2024]</span>Our paper <strong><em>FedEvalFair</em></strong> was accepted to <strong>ACM Multimedia 2024</strong> (CCF-A / CAAI-A)!`,
        scholarship: `<span class="news-date">[04/2024]</span>Received the <strong>Beihang University Graduate Academic Scholarship</strong>!`,
        cncc: `<span class="news-date">[10/2023]</span>Shared federated learning fairness insights at <strong>CNCC 2023</strong>!`,
        textbook: `<span class="news-date">[07/2022]</span>Completed co-authoring the MIIT textbook <em>Crowdsourced Data Annotation</em>!`,
        graduate: `<span class="news-date">[06/2021]</span>Honored as <strong>Outstanding Graduate &amp; Outstanding Thesis</strong>!`,
        mcm: `<span class="news-date">[03/2017]</span>Earned the <strong>International First Prize</strong> in the MCM/ICM mathematical modeling contest!`
      },
      publications: {
        eyebrow: "SELECTED RESEARCH OUTPUT",
        title: "Selected Publications",
        d3em: `<strong>Zhongchi Wang</strong>, Zhengyang Zhao, Hailong Sun. <strong><em>D<sup>3</sup>EM: A Dual-layer Dynamic Debiasing Evaluation Mechanism for Client Contribution in Federated Learning.</em></strong> IEEE Transactions on Cognitive Communications and Networking (TCCN), Early Access, 2026. (CAS Tier 1 Top Journal, 2025 / JCR Q1).`,
        demus: `Zhengyang Zhao, Hailong Sun*, Binhang Qi, Hongrui Yu, <strong>Zhongchi Wang</strong>, Hang Xu. <strong><em>DeMuS: Learning Decoupled Matching and Scoring for Batch Zero-Shot Industrial Anomaly Detection.</em></strong> European Conference on Computer Vision (ECCV), accepted, 2026. (CCF-B)`,
        fed4fed: `<strong>Zhongchi Wang</strong>, Hailong Sun, Zhengyang Zhao, Li Duan, Wei Ni, Xiang Gao. <strong><em>Fed4Fed: A Privacy-Preserving Federated Statistical Approach for Evaluating Federated Learning Models.</em></strong> IEEE Transactions on Dependable and Secure Computing (TDSC), Vol. 23, No. 3, pp. 5029&ndash;5042, May&ndash;June 2026. (CCF-A / JCR Q1 / CAS Zone I).`,
        fede3: `<strong>Zhongchi Wang</strong>, Hailong Sun, Zhengyang Zhao. <strong><em>Fed-e<sup>3</sup>: A Tri-level Federated Fairness Evaluation Framework with Statistical Guarantees and Privacy Preservation.</em></strong> Information Fusion, Vol. 128, Article 103949, April 2026. (CAS Zone I / JCR Q1, five-year IF 17.9).`,
        fedevalfair: `<strong>Zhongchi Wang*</strong>, H. Sun, Z. Zhao. <strong><em>FedEvalFair: A Privacy-Preserving and Statistically Grounded Federated Fairness Evaluation Framework.</em></strong> ACM Multimedia 2024 (CCF-A / CAAI-A).`,
        vem: `M. Li, J. Zhao, <strong>Zhongchi Wang</strong>, et al. <strong><em>Conservative Conforming and Nonconforming VEMs for Fourth Order Nonlinear Schr&ouml;dinger Equations with Trapped Term.</em></strong> Journal of Computational Mathematics, 2024, 42(2): 454&ndash;499. (SCI)`,
        superconvergence: `<strong>Zhongchi Wang*</strong>, M. Li. <strong><em>Superconvergence Analysis of Anisotropic Finite Element Method for the Time Fractional Substantial Diffusion Equation with Smooth and Nonsmooth Solutions.</em></strong> Mathematical Methods in the Applied Sciences, 2023, 46(5): 5545&ndash;5560. (SCI, JCR Q1)`,
        bootstrapHomogeneous: `R. Ye, <strong>Zhongchi Wang*</strong>, K. Luo, et al. <strong><em>Bootstrap Approaches for Homogeneous Test of Location Parameters under Skew-normal Settings.</em></strong> Communications in Statistics &mdash; Simulation and Computation, 2021, 52(10): 4739&ndash;4755. (Student first author, SCI)`,
        behrensFisher: `R. Ye, B. Fang, <strong>Zhongchi Wang</strong>, et al. <strong><em>Bootstrap Inference on the Behrens&ndash;Fisher-type Problem for the Skew-normal Population under Dependent Samples.</em></strong> Communications in Statistics &mdash; Theory and Methods, 2021, 52(11): 3751&ndash;3766. (SCI)`,
        confidenceIntervals: `R. Ye, <strong>Zhongchi Wang</strong>, K. Luo, et al. <strong><em>Bootstrap Confidence Intervals for Common Location Parameters of Multiple Skew-normal Populations.</em></strong> Acta Mathematica Scientia, 2021, 41(1): 194&ndash;216. (Student first author, National Tier-1 Journal, in Chinese)`,
        crankNicolson: `Z. Zhang, M. Li, <strong>Zhongchi Wang</strong>. <strong><em>A Linearized Crank&ndash;Nicolson Galerkin FEMs for the Nonlinear Fractional Ginzburg&ndash;Landau Equation.</em></strong> Applicable Analysis, 2019, 98(15): 2648&ndash;2667. (SCI)`
      },
      students: {
        eyebrow: "MENTORING",
        title: "Students",
        note: "Learning, exploring, and growing together.",
        xuName: `Xu Hao <span class="student-name-secondary" lang="zh-CN">徐昊</span>`,
        kongName: `Kong Xinrui <span class="student-name-secondary" lang="zh-CN">孔欣睿</span>`,
        xuRole: "M.S. Student · 2026 Cohort",
        kongRole: "Undergraduate Student · 2025 Cohort"
      },
      projects: {
        eyebrow: "RESEARCH EXPERIENCE",
        title: "Selected Projects",
        keyTitle: "National Key R&D Program · Multimodal Industrial IoT Analytics",
        keyBody:
          "Project backbone responsible for proposal writing, consortium coordination with Tsinghua University, Xi'an Jiaotong University, and AVIC, and the research agenda on LLM-driven crowdsensed analytics for IIoT data.",
        keyDate: "September 2024 – Present",
        nsfcTitle: "National Natural Science Foundation Key Project",
        nsfcBody:
          "Participated in the ubiquitous operating system open-source ecosystem initiative, contributing to governance and security evaluation research based on the crowdsourcing paradigm."
      },
      interests: {
        eyebrow: "BEYOND RESEARCH",
        title: "Personal Interests",
        openModels:
          "Beyond my core research, I closely follow and actively embrace open-source large language models and the wider open AI ecosystem—from model architectures and inference systems to agentic toolchains. I am especially interested in how open collaboration can bring together global innovation, broaden access to advanced intelligence, and help shape an AI future that is more inclusive, transparent, controllable, and trustworthy.",
        wellness:
          "I also keep a steady training routine: practicing Baduanjin and tai chi as part of a “Hundred-day Foundation” wellness plan, and swimming several times a week to stay balanced and energized for research."
      },
      awards: {
        eyebrow: "RECOGNITION & COMMUNITY",
        title: "Awards & Service",
        honorsTitle: "Selected Honors",
        phd: "Outstanding Ph.D. Graduate, Beihang University",
        scholarship: "Beihang University Graduate Academic Scholarship",
        graduate: "Outstanding Graduate & Outstanding Thesis",
        modeling: "National Third Prize, China Graduate Mathematical Modeling Competition",
        mcm: "International First Prize, Mathematical Contest in Modeling (MCM/ICM)",
        serviceTitle: "Service & Outreach",
        reviewer: "Reviewer for leading journals and conferences, including IEEE TDSC, Information Fusion, and ACM Multimedia",
        presentations: "Delivered conference presentations including ACM Multimedia 2024 and recurring CNCC sessions",
        acm: "ACM member and co-author of the MIIT “Crowdsourced Data Annotation” textbook"
      },
      footer: {
        copyright: `© <span id="year"></span> Zhongchi Wang. All rights reserved.`,
        totalVisits: "Visits since August 31, 2026",
        recentVisits: "Past month"
      }
    },
    zh: {
      meta: {
        title: "王仲池 | 暨南大学 · 个人主页",
        description:
          "王仲池，暨南大学网络空间安全学院教师、青蓝学者，研究方向包括数据隐私与安全、多智能体协作及联邦评估。"
      },
      access: {
        skip: "跳转到主要内容",
        primaryNav: "主导航",
        language: "选择语言",
        chinese: "切换为中文",
        english: "切换为英文"
      },
      nav: {
        about: "简介",
        news: "动态",
        publications: "论文",
        students: "学生",
        projects: "项目",
        awards: "荣誉"
      },
      profile: {
        avatarAlt: "王仲池个人照片",
        kicker: "学术主页",
        role: "暨南大学网络空间安全学院教师 · 青蓝学者",
        focus: "数据隐私与安全、多智能体协作，以及面向大语言模型微调的数据价值联邦评估。"
      },
      about: {
        eyebrow: "科研 · 育人 · 协作",
        title: "个人简介",
        body: `我现任<strong>暨南大学网络空间安全学院教师、青蓝学者</strong>。2026年6月博士毕业于北京航空航天大学<a href="https://scse.buaa.edu.cn/" target="_blank" rel="noopener">计算机学院</a>软件工程专业，在 ACT 实验室开展研究，师从<strong>孙海龙教授</strong>。我的研究聚焦<strong>数据隐私与安全、多智能体协作，以及面向大语言模型微调的数据价值联邦评估</strong>。我曾作为骨干参与国家重点研发计划工业物联网数据分析相关工作，参与国防及国家自然科学基金项目，并参编工信部《众包数据标注》教材。`
      },
      education: {
        title: "教育经历",
        phd: `<strong>软件工程博士</strong><span>北京航空航天大学计算机学院</span>`
      },
      news: {
        eyebrow: "最新动态",
        title: "动态",
        d3em: `<span class="news-date">[2026/08]</span><span class="new-badge">最新</span>我们的论文 <a href="https://ieeexplore.ieee.org/document/11666998" target="_blank" rel="noopener"><strong><em>D<sup>3</sup>EM: A Dual-layer Dynamic Debiasing Evaluation Mechanism for Client Contribution in Federated Learning</em></strong></a> 已在 <strong>IEEE Transactions on Cognitive Communications and Networking（IEEE TCCN）</strong>以 Early Access 形式在线发表（中科院一区 TOP 期刊，2025版 / JCR Q1）！`,
        demus: `<span class="news-date">[2026/06]</span>论文 <em>DeMuS: Learning Decoupled Matching and Scoring for Batch Zero-Shot Industrial Anomaly Detection</em> 于2026年6月18日被 <strong>ECCV 2026</strong> 录用（CCF-B）！`,
        phdDegree: `<span class="news-date">[2026/06]</span>获<strong>北京航空航天大学软件工程专业工学博士学位</strong>！`,
        fed4fed: `<span class="news-date">[2026/05]</span>论文 <em>Fed4Fed: A Privacy-Preserving Federated Statistical Approach for Evaluating Federated Learning Models</em> 已正式发表于 <strong>IEEE Transactions on Dependable and Secure Computing（IEEE TDSC）</strong>第23卷第3期（CCF-A / JCR Q1 / 中科院一区）！`,
        fede3: `<span class="news-date">[2026/04]</span>论文 <strong><em>Fed-e<sup>3</sup></em></strong> 已正式发表于 <strong>Information Fusion</strong>第128卷，文章号103949（中科院一区 / JCR Q1，五年影响因子17.9）！`,
        fedevalfairPresentation: `<span class="news-date">[2024/10]</span>赴澳大利亚墨尔本参加 <strong>ACM Multimedia 2024</strong> 并汇报 <em>FedEvalFair</em>！`,
        iioT: `<span class="news-date">[2024/09]</span>开始负责国家重点研发计划中大模型驱动的工业物联网数据分析子课题！`,
        fedevalfairAccepted: `<span class="news-date">[2024/07]</span>论文 <strong><em>FedEvalFair</em></strong> 被 <strong>ACM Multimedia 2024</strong> 录用（CCF-A / CAAI-A）！`,
        scholarship: `<span class="news-date">[2024/04]</span>获<strong>北京航空航天大学研究生学业奖学金</strong>！`,
        cncc: `<span class="news-date">[2023/10]</span>在 <strong>CNCC 2023</strong> 分享联邦学习公平性研究进展！`,
        textbook: `<span class="news-date">[2022/07]</span>完成工信部《众包数据标注》教材参编工作！`,
        graduate: `<span class="news-date">[2021/06]</span>获评<strong>优秀毕业生、优秀毕业论文</strong>！`,
        mcm: `<span class="news-date">[2017/03]</span>获美国大学生数学建模竞赛（MCM/ICM）<strong>国际一等奖</strong>！`
      },
      publications: {
        eyebrow: "代表性研究成果",
        title: "代表性论文",
        d3em: `<strong>Zhongchi Wang</strong>, Zhengyang Zhao, Hailong Sun. <strong><em>D<sup>3</sup>EM: A Dual-layer Dynamic Debiasing Evaluation Mechanism for Client Contribution in Federated Learning.</em></strong> IEEE Transactions on Cognitive Communications and Networking（TCCN），Early Access，2026。（中科院一区 TOP 期刊，2025版 / JCR Q1）`,
        demus: `Zhengyang Zhao, Hailong Sun*, Binhang Qi, Hongrui Yu, <strong>Zhongchi Wang</strong>, Hang Xu. <strong><em>DeMuS: Learning Decoupled Matching and Scoring for Batch Zero-Shot Industrial Anomaly Detection.</em></strong> European Conference on Computer Vision（ECCV），已录用，2026。（CCF-B）`,
        fed4fed: `<strong>Zhongchi Wang</strong>, Hailong Sun, Zhengyang Zhao, Li Duan, Wei Ni, Xiang Gao. <strong><em>Fed4Fed: A Privacy-Preserving Federated Statistical Approach for Evaluating Federated Learning Models.</em></strong> IEEE Transactions on Dependable and Secure Computing（TDSC），第23卷第3期，5029&ndash;5042页，2026年5&ndash;6月。（CCF-A / JCR Q1 / 中科院一区）`,
        fede3: `<strong>Zhongchi Wang</strong>, Hailong Sun, Zhengyang Zhao. <strong><em>Fed-e<sup>3</sup>: A Tri-level Federated Fairness Evaluation Framework with Statistical Guarantees and Privacy Preservation.</em></strong> Information Fusion，第128卷，文章号103949，2026年4月。（中科院一区 / JCR Q1，五年影响因子17.9）`,
        fedevalfair: `<strong>Zhongchi Wang*</strong>, H. Sun, Z. Zhao. <strong><em>FedEvalFair: A Privacy-Preserving and Statistically Grounded Federated Fairness Evaluation Framework.</em></strong> ACM Multimedia 2024（CCF-A / CAAI-A）。`,
        vem: `M. Li, J. Zhao, <strong>Zhongchi Wang</strong>, et al. <strong><em>Conservative Conforming and Nonconforming VEMs for Fourth Order Nonlinear Schr&ouml;dinger Equations with Trapped Term.</em></strong> Journal of Computational Mathematics，2024，42(2)：454&ndash;499。（SCI）`,
        superconvergence: `<strong>Zhongchi Wang*</strong>, M. Li. <strong><em>Superconvergence Analysis of Anisotropic Finite Element Method for the Time Fractional Substantial Diffusion Equation with Smooth and Nonsmooth Solutions.</em></strong> Mathematical Methods in the Applied Sciences，2023，46(5)：5545&ndash;5560。（SCI，JCR Q1）`,
        bootstrapHomogeneous: `R. Ye, <strong>Zhongchi Wang*</strong>, K. Luo, et al. <strong><em>Bootstrap Approaches for Homogeneous Test of Location Parameters under Skew-normal Settings.</em></strong> Communications in Statistics &mdash; Simulation and Computation，2021，52(10)：4739&ndash;4755。（学生一作，SCI）`,
        behrensFisher: `R. Ye, B. Fang, <strong>Zhongchi Wang</strong>, et al. <strong><em>Bootstrap Inference on the Behrens&ndash;Fisher-type Problem for the Skew-normal Population under Dependent Samples.</em></strong> Communications in Statistics &mdash; Theory and Methods，2021，52(11)：3751&ndash;3766。（SCI）`,
        confidenceIntervals: `R. Ye, <strong>Zhongchi Wang</strong>, K. Luo, et al. <strong><em>Bootstrap Confidence Intervals for Common Location Parameters of Multiple Skew-normal Populations.</em></strong> Acta Mathematica Scientia，2021，41(1)：194&ndash;216。（学生一作，国家一级期刊，中文）`,
        crankNicolson: `Z. Zhang, M. Li, <strong>Zhongchi Wang</strong>. <strong><em>A Linearized Crank&ndash;Nicolson Galerkin FEMs for the Nonlinear Fractional Ginzburg&ndash;Landau Equation.</em></strong> Applicable Analysis，2019，98(15)：2648&ndash;2667。（SCI）`
      },
      students: {
        eyebrow: "学生培养",
        title: "学生团队",
        note: "教学相长，共同探索与成长。",
        xuName: `徐昊 <span class="student-name-secondary" lang="en">Xu Hao</span>`,
        kongName: `孔欣睿 <span class="student-name-secondary" lang="en">Kong Xinrui</span>`,
        xuRole: "2026级硕士研究生",
        kongRole: "2025级本科生"
      },
      projects: {
        eyebrow: "科研经历",
        title: "代表性项目",
        keyTitle: "国家重点研发计划 · 多模态工业物联网数据分析",
        keyBody:
          "作为项目骨干，承担申报材料撰写、清华大学—西安交通大学—中航工业等单位的协同沟通，并推进大语言模型驱动的工业物联网众感数据分析研究。",
        keyDate: "2024年9月至今",
        nsfcTitle: "国家自然科学基金重点项目",
        nsfcBody: "参与泛在操作系统开源生态相关研究，围绕众包范式下的生态治理与安全评估开展工作。"
      },
      interests: {
        eyebrow: "科研之外",
        title: "个人兴趣",
        openModels:
          "科研之外，我持续关注并积极拥抱开源大模型及其开放协作生态，紧跟模型架构、推理系统与智能体工具链的演进。我尤其关注开放技术如何汇聚全球创新、降低前沿智能的应用门槛，并推动人工智能走向更加普惠、透明、可控与可信的未来。",
        wellness:
          "我保持规律运动，持续练习八段锦与太极拳，并将游泳作为每周的固定安排，在身体状态与科研节奏之间保持平衡。"
      },
      awards: {
        eyebrow: "荣誉与服务",
        title: "奖励与学术服务",
        honorsTitle: "代表性荣誉",
        phd: "北京航空航天大学优秀博士毕业生",
        scholarship: "北京航空航天大学研究生学业奖学金",
        graduate: "优秀毕业生、优秀毕业论文",
        modeling: "中国研究生数学建模竞赛全国三等奖",
        mcm: "美国大学生数学建模竞赛（MCM/ICM）国际一等奖",
        serviceTitle: "学术服务与交流",
        reviewer: "担任 IEEE TDSC、Information Fusion、ACM Multimedia 等顶级期刊与会议审稿人",
        presentations: "在 ACM Multimedia 2024、CNCC 等会议进行学术报告与交流",
        acm: "ACM 会员，工信部《众包数据标注》教材参编者"
      },
      footer: {
        copyright: `© <span id="year"></span> 王仲池。保留所有权利。`,
        totalVisits: "自2026年8月31日起访问",
        recentVisits: "近一个月"
      }
    }
  };

  const root = document.documentElement;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const languageButtons = document.querySelectorAll("[data-language-option]");
  const languageStorageKey = "preferredLanguageV2";

  const lookup = (language, key) =>
    key.split(".").reduce((value, part) => (value && value[part] !== undefined ? value[part] : undefined), translations[language]);

  const setYear = () => {
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();
  };

  const applyLanguage = (language, persist = true) => {
    const activeLanguage = language === "zh" ? "zh" : "en";

    root.lang = activeLanguage === "zh" ? "zh-CN" : "en";
    root.dataset.language = activeLanguage;
    document.title = translations[activeLanguage].meta.title;
    if (descriptionMeta) descriptionMeta.content = translations[activeLanguage].meta.description;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = lookup(activeLanguage, element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const value = lookup(activeLanguage, element.dataset.i18nHtml);
      if (typeof value === "string") element.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = lookup(activeLanguage, element.dataset.i18nAriaLabel);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = lookup(activeLanguage, element.dataset.i18nAlt);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.languageOption === activeLanguage));
    });

    setYear();

    if (persist) {
      try {
        localStorage.setItem(languageStorageKey, activeLanguage);
      } catch (_) {
        // Language switching remains available when storage is blocked.
      }
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.languageOption));
  });

  let initialLanguage = "en";
  try {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    if (savedLanguage === "en" || savedLanguage === "zh") {
      initialLanguage = savedLanguage;
    }
  } catch (_) {
    // English remains the default when storage is unavailable.
  }

  applyLanguage(initialLanguage, false);

  const initAnalytics = () => {
    const config = window.SITE_CONFIG || {};
    const siteCode = String(config.goatCounterCode || "").trim();
    const expectedHost = String(config.analyticsHost || "").trim();

    if (!siteCode || !/^[a-z0-9-]+$/i.test(siteCode)) return;
    if (expectedHost && window.location.hostname !== expectedHost) return;

    const endpoint = `https://${siteCode}.goatcounter.com`;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.v5.js";
    script.dataset.goatcounter = `${endpoint}/count`;
    script.crossOrigin = "anonymous";
    script.integrity = "sha384-atnOLvQb9t+jTSipvd75X2yginT4PjVbqDdlJAmxMm+wYElFmeR6EmLP5bYeoRVQ";

    if (config.showPublicCount) {
      const fetchCount = async (start) => {
        const url = new URL(`${endpoint}/counter/TOTAL.json`);
        if (start) url.searchParams.set("start", start);

        const response = await fetch(url, { mode: "cors" });
        if (!response.ok) return null;

        const data = await response.json();
        return data && typeof data.count === "string" ? data.count : null;
      };

      const updatePublicCounts = async () => {
        try {
          const start = String(config.analyticsStart || "").trim();
          const [total, recent] = await Promise.all([fetchCount(start), fetchCount("month")]);
          if (total === null && recent === null) return;

          const totalCount = document.getElementById("visitor-count-total");
          const recentCount = document.getElementById("visitor-count-recent");
          const stat = document.getElementById("visitor-stat");

          if (totalCount && total !== null) totalCount.textContent = total;
          if (recentCount && recent !== null) recentCount.textContent = recent;
          if (stat) stat.hidden = false;
        } catch (_) {
          // Analytics must never affect the rest of the page.
        }
      };

      void updatePublicCounts();
      window.setTimeout(updatePublicCounts, 12000);
    }

    document.body.appendChild(script);
  };

  initAnalytics();
})();
