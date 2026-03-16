/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Menu, PlayCircle, MessageCircle, Brain, TrendingUp, Linkedin, Github, Zap, ExternalLink, Globe, Mail, FileText, Award } from 'lucide-react';

const content = {
  en: {
    nav: {
      about: "About",
      impact: "Impact",
      projects: "Projects",
      experience: "Experience",
      contact: "Get in Touch"
    },
    hero: {
      greeting: "Hey, I'm",
      location: "Hong Kong / Beijing",
      description: "AI & Big Data postgraduate at Hong Kong Polytechnic University. Specialized in data-driven and intelligent algorithm system design, user growth strategies, and LTV optimization with proven results in leading tech companies.",
      tags: ["AI", "Big Data", "Growth Strategy", "Product Operations"],
      photoDesc: "Passionate about academia and travel. This photo captures a memorable moment from my visiting study in Southeast Asia."
    },
    strengths: {
      title: "Core Strengths",
      left: [
        { icon: <MessageCircle className="w-6 h-6 text-primary" />, text: "Fluent in Mandarin & English" },
        { icon: <Brain className="w-6 h-6 text-primary" />, text: "Research in AI-driven Design & Optimization" },
        { icon: <TrendingUp className="w-6 h-6 text-primary" />, text: "Specialized in Growth LTV Optimization" },
      ],
      right: [
        "Data-Driven Problem Solver",
        "Growth & User Centric Mindset",
        "Strategic Operations Execution",
        "Cross-functional Collaboration",
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          title: "Assistant Procurement (Bathroom KA Group)",
          company: "JD.com",
          date: "2026.01 — PRESENT",
          description: "Developed 'Product Optimization Agent' (JD Retail AI Innovation 1st Prize) for consumer LTV enhancement. Implemented AI-driven A/B testing for scene-based main images, achieving +15-30% CTR, +163% traffic, and +200% conversion. Formulated national subsidy risk control strategies (100% compliance) and orchestrated cross-brand virtual bundles, driving ATV over 6000 RMB and boosting platform penetration.",
          active: true,
        },
        {
          title: "Strategy Operations Intern (Partner Growth)",
          company: "TAL Education Group",
          date: "2025.09 — 2025.12",
          description: "Managed performance evaluation for 500+ teachers and designed incentive strategies based on multi-period SABC data. Conducted SWOT diagnosis across 50 campuses to optimize resource allocation. Executed user repurchase and retention strategies, achieving a 35% increase in renewal rates and 1,200+ new enrollments in pilot core campuses.",
          active: false,
        },
        {
          title: "User Growth Strategy Intern",
          company: "China Telecom",
          date: "2024.01 — 2024.02",
          description: "Analyzed regional user feedback to identify service gaps and define high-potential buyer segments, establishing buyer LTV baselines. Collaborated cross-departmentally on subsidy-style resource investments, facilitating 10 new base stations and 15 site upgrades, which increased regional satisfaction by 30% and drove user scale expansion.",
          active: false,
        }
      ]
    },
    works: {
      title: "Notable Work",
      core: [
        {
          title: "Product Optimization Agent",
          subtitle: "JD RETAIL AI INNOVATION 1ST PRIZE",
          image: "https://i.ibb.co/30Z0Z5y/jd-ops.png",
          content: (
            <>
              <p><strong>Core Features:</strong> AI Main Image Optimization (reduces 60 min work to 30s), Virtual Bundling (cross-brand scene generation in 30 mins), and Refined Operations (automated title/selling point generation).</p>
              <p><strong>Technical Highlights:</strong> Zero-code development via JoyGen, deep integration with JoyAgent+ and Oxygen Vision, and a data-driven closed loop supporting A/B testing.</p>
              <div>
                <p><strong>Business Value:</strong></p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>99%+ overall efficiency improvement, saving 500k RMB annually.</li>
                  <li>Significant growth in traffic, +15-30% CTR, and +200% transaction volume for bundled products.</li>
                  <li>Highly scalable model applicable across multiple JD categories.</li>
                </ul>
              </div>
            </>
          ),
          links: [
            { text: "Live Demo", icon: <Zap className="w-4 h-4" />, url: "https://ops-refiner.vercel.app/", outline: true }
          ],
          reverse: false,
          iframeUrl: "https://ops-refiner.vercel.app/"
        },
        {
          title: "Intelligent Parking Prediction (Q-Learning)",
          subtitle: "REINFORCEMENT LEARNING & SMART CITY",
          image: "https://i.ibb.co/6Yh2K6B/parking.png",
          content: (
            <>
              <p><strong>Context:</strong> Addressed urban "parking difficulties" by predicting future parking availability to improve resource utilization, using KLCC parking lot in Kuala Lumpur as a case study.</p>
              <p><strong>Methodology:</strong> Applied Q-learning (Reinforcement Learning) to model prediction as a sequential decision problem, considering states like time, historical availability, weather, and holidays.</p>
              <div>
                <p><strong>Results & Achievements:</strong></p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Utilized real 15-minute granularity sensor data and integrated map APIs.</li>
                  <li>Published EI-indexed paper as first author: <em>Optimizing Intelligent Parking Decisions using Q-Learning</em> (AIDML 2024).</li>
                </ul>
              </div>
            </>
          ),
          links: [
            { text: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/lzllzllzllzllzl/parking" },
            { text: "Live Demo", icon: <Zap className="w-4 h-4" />, url: "https://parking-lot-pi.vercel.app/", outline: true }
          ],
          reverse: true,
          iframeUrl: "https://parking-lot-pi.vercel.app/"
        },
        {
          title: "AeroVision: Flight Predictor",
          subtitle: "DATA ANALYTICS & LLM DECISION",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
          content: (
            <>
              <p><strong>Overview:</strong> A comprehensive dashboard for flight ticket analysis and prediction.</p>
              <p><strong>Technology:</strong> Combines data analytics with Large Language Models (LLMs) to provide actionable, data-driven decisions on the optimal time to purchase tickets based on historical trends.</p>
            </>
          ),
          links: [
            { text: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/lzllzllzllzllzl/AeroVision" },
            { text: "Live Demo", icon: <Zap className="w-4 h-4" />, url: "https://aero-vision-gamma.vercel.app/", outline: true }
          ],
          reverse: false,
          iframeUrl: "https://aero-vision-gamma.vercel.app/"
        }
      ],
      interactiveTitle: "Interactive AI Experiments",
      interactive: [
        {
          title: "AI Pictionary",
          description: "An interactive web app where users draw and Gemini 2.5 guesses the sketch in real-time.",
          url: "https://ai-pictionary-delta.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/ai-pictionary"
        },
        {
          title: "Dream Interpreter",
          description: "AI-powered application that analyzes dreams and provides psychological insights and answers.",
          url: "https://dream-interpreter-bay-alpha.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/dream-interpreter"
        },
        {
          title: "Poem Sort Game",
          description: "Educational tool where AI infinitely generates ancient poems for users to sort correctly.",
          url: "https://poem-sort-game.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/poem-sort-game"
        },
        {
          title: "Brain Teaser",
          description: "A human-vs-computer interactive game featuring riddles to test cognitive skills.",
          url: "https://brain-teaser-lovat.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/brain-teaser"
        }
      ]
    },
    impactSection: {
      title: "Impact & Publications",
      summary: "1 EI Paper Published, 3 Software Copyrights Granted.",
      items: [
        "Lin Z. Optimizing Intelligent Parking Decisions using Q-Learning[J]. Transactions on Computer Science and Intelligent Systems Research, 2024, AIDML 2024(5): 98-105. (ISSN 2960-1800; EI Indexed; First Author; Published)",
        "Todo list Software V1.0, Registration No. 2024R1062449, National Copyright Administration, 2024-07-25, (Sole Copyright Owner, Granted)",
        "Data Processing Platform Software V1.0, Registration No. 2024R1069168, National Copyright Administration, 2024-07-26, (Sole Copyright Owner, Granted)",
        "Solid-state Lithium Battery Production Management Software V1.0, Registration No. 2025R1237082, National Copyright Administration, 2025-07-11, (Co-Copyright Owner, Granted)"
      ]
    }
  },
  zh: {
    nav: {
      about: "关于我",
      impact: "影响力",
      projects: "项目作品",
      experience: "工作经历",
      contact: "联系我"
    },
    hero: {
      greeting: "你好，我是",
      location: "香港 / 北京",
      description: "香港理工大学人工智能与大数据专业研究生。专注于数据驱动与智能算法系统设计、用户增长策略及LTV优化，在头部科技公司拥有丰富的落地经验与成果。",
      tags: ["人工智能", "大数据", "增长策略", "产品运营"],
      photoDesc: "热爱学术与旅行。这张照片记录了我在东南亚访学时的难忘瞬间。"
    },
    strengths: {
      title: "核心优势",
      left: [
        { icon: <MessageCircle className="w-6 h-6 text-primary" />, text: "流利的中文与英文沟通能力" },
        { icon: <Brain className="w-6 h-6 text-primary" />, text: "AI驱动设计与优化研究经验" },
        { icon: <TrendingUp className="w-6 h-6 text-primary" />, text: "专注于用户增长与LTV优化" },
      ],
      right: [
        "数据驱动的解决问题能力",
        "以用户和增长为中心的思维",
        "战略级运营执行力",
        "跨部门协同合作能力",
      ]
    },
    experience: {
      title: "工作经历",
      items: [
        {
          title: "采销助理 (卫浴KA组)",
          company: "京东集团",
          date: "2026.01 — 至今",
          description: "开发“商品优化智能体”（获京东零售AI提效大赛一等奖），提升消费者LTV。实施AI驱动的场景化主图A/B测试，实现点击率+15-30%，流量+163%，转化率+200%。制定国补风控策略（100%合规），策划跨品牌虚拟组套，推动客单价突破6000元，提升平台渗透率。",
          active: true,
        },
        {
          title: "策略运营实习生 (合伙人增长)",
          company: "学而思 (好未来)",
          date: "2025.09 — 2025.12",
          description: "管理500+教师的绩效评估，基于多期SABC数据设计激励策略。对50个校区进行SWOT诊断以优化资源配置。执行用户复购与留存策略，在试点核心校区实现续报率提升35%，新增报名1200+人。",
          active: false,
        },
        {
          title: "用户增长策略实习生",
          company: "中国电信",
          date: "2024.01 — 2024.02",
          description: "分析区域用户反馈以识别服务缺口，定义高潜买家群体，建立买家LTV基线。跨部门推进补贴式资源投入，促成10个新基站建设和15个站点升级，区域满意度提升30%，有效推动用户规模扩张。",
          active: false,
        }
      ]
    },
    works: {
      title: "核心作品",
      core: [
        {
          title: "商品优化智能体",
          subtitle: "京东零售AI提效大赛一等奖",
          image: "https://i.ibb.co/30Z0Z5y/jd-ops.png",
          content: (
            <>
              <p><strong>核心功能：</strong> AI主图优化（将60分钟工作缩短至30秒）、虚拟组套（30分钟内生成跨品牌场景图）、精细化运营（自动生成标题与卖点）。</p>
              <p><strong>技术亮点：</strong> 基于JoyGen零代码开发，深度整合JoyAgent+与京点点Oxygen Vision，形成支持A/B测试的数据驱动闭环。</p>
              <div>
                <p><strong>商业价值：</strong></p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>整体效率提升99%以上，年节约成本50万元。</li>
                  <li>流量显著增长，点击率提升15-30%，组套商品成交量提升200%。</li>
                  <li>高度可复制，适用于京东多个品类。</li>
                </ul>
              </div>
            </>
          ),
          links: [
            { text: "在线演示", icon: <Zap className="w-4 h-4" />, url: "https://ops-refiner.vercel.app/", outline: true }
          ],
          reverse: false,
          iframeUrl: "https://ops-refiner.vercel.app/"
        },
        {
          title: "智能停车场预测 (Q-Learning)",
          subtitle: "强化学习与智慧城市",
          image: "https://i.ibb.co/6Yh2K6B/parking.png",
          content: (
            <>
              <p><strong>项目背景：</strong> 以吉隆坡KLCC停车场为例，通过预测未来可用停车位数量来解决城市“停车难”问题，提高资源利用率。</p>
              <p><strong>研究方法：</strong> 应用Q-learning（强化学习）算法，将预测建模为序贯决策问题，综合考虑时间、历史空位数、天气和节假日等状态。</p>
              <div>
                <p><strong>成果与亮点：</strong></p>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>使用15分钟粒度的真实传感器数据，并接入地图API。</li>
                  <li>以第一作者身份发表EI检索论文：<em>Optimizing Intelligent Parking Decisions using Q-Learning</em> (AIDML 2024)。</li>
                </ul>
              </div>
            </>
          ),
          links: [
            { text: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/lzllzllzllzllzl/parking" },
            { text: "在线演示", icon: <Zap className="w-4 h-4" />, url: "https://parking-lot-pi.vercel.app/", outline: true }
          ],
          reverse: true,
          iframeUrl: "https://parking-lot-pi.vercel.app/"
        },
        {
          title: "AeroVision: 机票预测看板",
          subtitle: "数据分析与大模型决策",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
          content: (
            <>
              <p><strong>项目概述：</strong> 一个用于机票分析和预测的综合数据看板。</p>
              <p><strong>技术方案：</strong> 结合数据分析与大语言模型（LLM），基于历史趋势为用户提供何时购买机票的最佳决策建议。</p>
            </>
          ),
          links: [
            { text: "GitHub", icon: <Github className="w-4 h-4" />, url: "https://github.com/lzllzllzllzllzl/AeroVision" },
            { text: "在线演示", icon: <Zap className="w-4 h-4" />, url: "https://aero-vision-gamma.vercel.app/", outline: true }
          ],
          reverse: false,
          iframeUrl: "https://aero-vision-gamma.vercel.app/"
        }
      ],
      interactiveTitle: "互动AI实验",
      interactive: [
        {
          title: "AI你画我猜",
          description: "一个有趣的互动网页，用户画图，Gemini 2.5模型实时猜测你画的内容。",
          url: "https://ai-pictionary-delta.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/ai-pictionary"
        },
        {
          title: "梦境解释器",
          description: "AI驱动的应用，分析用户的梦境并提供心理学视角的见解与解答。",
          url: "https://dream-interpreter-bay-alpha.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/dream-interpreter"
        },
        {
          title: "古诗排序游戏",
          description: "教育类工具，AI会无限生成古诗词，考验用户的诗词储备和排序能力。",
          url: "https://poem-sort-game.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/poem-sort-game"
        },
        {
          title: "脑筋急转弯",
          description: "一个人机互动的脑筋急转弯游戏，考验你的脑力和反应速度。",
          url: "https://brain-teaser-lovat.vercel.app/",
          github: "https://github.com/lzllzllzllzllzl/brain-teaser"
        }
      ]
    },
    impactSection: {
      title: "影响力与学术成果",
      summary: "共发表 EI 论文 1 篇、软件著作权 3 项（均已授权）",
      items: [
        "Lin Z. Optimizing Intelligent Parking Decisions using Q-Learning[J]. Transactions on Computer Science and Intelligent Systems Research, 2024, AIDML 2024(5): 98-105. (ISSN 2960-1800; EI 收录；第一作者；已发表)",
        "代办事项清单软件（Todo list）V1.0，登记号 2024R1062449，国家版权局，2024-07-25，（唯一著作权人，已授权）",
        "数据处理平台软件 V1.0，登记号 2024R1069168，国家版权局，2024-07-26，（唯一著作权人，已授权）",
        "固态锂电生产管理软件 V1.0，登记号 2025R1237082，国家版权局，2025-07-11，（共同著作权人，已授权）"
      ]
    }
  }
};

function Navbar({ lang, setLang }: { lang: 'en' | 'zh', setLang: (l: 'en' | 'zh') => void }) {
  const t = content[lang].nav;
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">LZ</div>
          <span className="font-bold text-xl tracking-tight uppercase">Lin Zhili</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{t.about}</a>
          <a href="#impact" className="text-sm font-medium hover:text-primary transition-colors">{t.impact}</a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">{t.projects}</a>
          <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">{t.experience}</a>
          <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">{t.contact}</a>
          
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1 text-sm font-bold text-slate-600 hover:text-primary transition-colors ml-4"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? '中文' : 'EN'}
          </button>
        </div>
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1 text-sm font-bold text-slate-600"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <button>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ lang }: { lang: 'en' | 'zh' }) {
  const t = content[lang].hero;
  return (
    <section id="about" className="pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative aspect-video bg-slate-200 rounded-xl overflow-hidden shadow-lg group border-4 border-white">
            <img src="https://raw.githubusercontent.com/lzllzllzllzllzl/my-images/main/IMG20240407143820_20241018214408.JPG" alt="Profile" className="w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="space-y-4 text-sm md:text-base text-slate-600">
            <p className="flex items-start gap-2">
              <span className="text-xl">🌍</span>
              <span>{t.photoDesc}</span>
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              {t.tags.map((tag, i) => (
                <span key={i} className="bg-slate-900 text-white px-3 py-1 rounded-sm">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">👋</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">{t.greeting} <span className="text-primary">Lin Zhili!</span></h1>
          </div>
          <p className="text-slate-500 font-medium mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> {t.location}
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
            {t.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {t.tags.map((tag, i) => (
              <span key={i} className="bg-slate-900 text-white px-3 py-1 text-xs font-bold rounded-sm">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/lzllzllzllzllzl" target="_blank" rel="noreferrer" className="inline-block text-slate-900 hover:text-primary transition-colors">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="inline-block text-slate-900 hover:text-primary transition-colors">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Strengths({ lang }: { lang: 'en' | 'zh' }) {
  const t = content[lang].strengths;
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center md:text-left">{t.title}</h3>
          <ul className="space-y-6">
            {t.left.map((s, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-slate-600">
                <span className="mt-1">{s.icon}</span>
                <span>{s.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-10 text-center md:text-left">{t.title}</h3>
          <ul className="space-y-4">
            {t.right.map((s, i) => (
              <li key={i} className="flex items-center gap-3 text-lg text-slate-600">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Experience({ lang }: { lang: 'en' | 'zh' }) {
  const t = content[lang].experience;
  return (
    <section id="experience" className="py-24 md:py-40 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">{t.title}</h2>
        <div className="space-y-0">
          {t.items.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative pl-8 md:pl-12 border-l-2 ${i === t.items.length - 1 ? 'border-transparent' : 'border-primary/20'} pb-12`}
            >
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ${exp.active ? 'bg-primary ring-4 ring-primary/20' : 'bg-slate-300'}`}></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <div>
                  <h4 className="text-2xl font-bold">{exp.title}</h4>
                  <p className="text-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">{exp.date}</span>
              </div>
              <p className="text-slate-600 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotableWork({ lang }: { lang: 'en' | 'zh' }) {
  const t = content[lang].works;
  return (
    <section id="projects" className="py-24 md:py-40 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-20 text-center">{t.title}</h2>
        
        {/* Core Projects */}
        <div className="space-y-32 mb-32">
          {t.core.map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className={`rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-white h-[400px] relative ${work.reverse ? 'md:order-2' : ''}`}>
                {work.iframeUrl ? (
                  <iframe 
                    src={work.iframeUrl} 
                    title={work.title}
                    className="w-full h-full border-0 absolute inset-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                ) : (
                  <img src={work.image} alt={work.title} className="w-full h-full object-cover object-center" />
                )}
              </div>
              <div className={`space-y-6 ${work.reverse ? 'md:order-1' : ''}`}>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{work.title}</h3>
                  <p className="text-primary font-semibold uppercase tracking-wider text-sm">{work.subtitle}</p>
                </div>
                <div className="space-y-4 text-slate-600">
                  {work.content}
                </div>
                <div className="flex gap-4 pt-4">
                  {work.links.map((link, j) => (
                    <a 
                      key={j} 
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2 px-6 py-2 rounded-full font-bold text-sm transition-all ${
                        link.outline 
                          ? 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' 
                          : 'bg-slate-900 text-white hover:opacity-80'
                      }`}
                    >
                      {link.icon}
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive AI Experiments Grid */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">{t.interactiveTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.interactive.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-bold mb-3">{work.title}</h4>
                <p className="text-slate-600 text-sm flex-grow mb-6">{work.description}</p>
                <div className="flex items-center gap-3 mt-auto">
                  <a href={work.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={work.url} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                    {lang === 'en' ? 'Try it out' : '立即体验'} <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function Impact({ lang }: { lang: 'en' | 'zh' }) {
  const t = content[lang].impactSection;
  return (
    <section id="impact" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-10 text-center">{t.title}</h2>
        <p className="text-xl text-center text-slate-600 mb-12 font-medium">{t.summary}</p>
        <div className="space-y-6">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold text-lg">[{i + 1}]</span>
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: 'en' | 'zh' }) {
  return (
    <footer id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight">
          {lang === 'en' ? (
            <>Let's build something <br/><span className="text-primary italic">extraordinary.</span></>
          ) : (
            <>让我们共创 <br/><span className="text-primary italic">非凡。</span></>
          )}
        </h2>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:zhillin0220@163.com" className="bg-primary text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Mail className="w-6 h-6" />
              {lang === 'en' ? 'Email Me' : '发送邮件'}
            </a>
            <a href="https://drive.google.com/file/d/18CrPh93PWLP5aWETZCdux49IJYH4c1ke/view?usp=drive_link" target="_blank" rel="noreferrer" className="bg-slate-800 text-white px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <FileText className="w-6 h-6" />
              {lang === 'en' ? 'View Resume' : '查看简历'}
            </a>
          </div>
          <div className="flex gap-8 items-center text-slate-400">
            <a href="mailto:zhillin0220@163.com" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-6 h-6" />
              zhillin0220@163.com
            </a>
            <a href="https://github.com/lzllzllzllzllzl" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
              <Github className="w-6 h-6" />
              GitHub
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-10">
            {lang === 'en' ? '© 2026 Lin Zhili. Built with precision and AI.' : '© 2026 Lin Zhili. 结合AI与匠心打造。'}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh');

  return (
    <div className="bg-white text-slate-900 antialiased font-sans selection:bg-blue-200">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Strengths lang={lang} />
      <Experience lang={lang} />
      <NotableWork lang={lang} />
      <Impact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
