import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiAward, FiUsers, FiHeart, FiTarget, FiGlobe, FiStar } from 'react-icons/fi';

const tabs = [
  { id: 'philosophy', label: 'Our Philosophy' },
  { id: 'values',     label: 'Core Values'    },
  { id: 'way',        label: 'The Waleeco Way' },
  { id: 'esg',        label: 'ESG'             },
];

const coreValues = [
  { icon: <FiUsers size={20} />, title: 'People First',    desc: 'We believe our greatest asset is our people. We invest in their growth, wellbeing, and success.' },
  { icon: <FiStar size={20} />,  title: 'Integrity',       desc: 'We act with honesty and transparency in everything we do — with our clients, partners, and each other.' },
  { icon: <FiTarget size={20} />,title: 'Innovation',      desc: 'We foster a culture of continuous learning and creative problem-solving to stay ahead of the curve.' },
  { icon: <FiHeart size={20} />, title: 'Empathy',         desc: 'We genuinely care about the impact of our work on clients, employees, communities, and the environment.' },
  { icon: <FiGlobe size={20} />, title: 'Collaboration',   desc: 'We achieve more together. Cross-functional teams, global mindsets, and diverse perspectives drive our best work.' },
  { icon: <FiAward size={20} />, title: 'Excellence',      desc: 'We hold ourselves to the highest standards of quality, delivery, and client satisfaction.' },
];

const philosophyPillars = [
  { title: 'Integrity',   desc: 'Dependable, honest, and transparent in every client relationship.',         icon: <FiStar size={18} /> },
  { title: 'Innovation',  desc: 'Bold ideas, practical execution, and technology that creates value.',         icon: <FiTarget size={18} /> },
  { title: 'Dedication',  desc: 'Precise delivery and long-term commitment to customer success.',              icon: <FiAward size={18} /> },
];

const waleecoWayItems = [
  { step: '01', title: 'Discovery',     desc: 'Deep-dive into your business challenges, goals, and landscape to frame the right problem.' },
  { step: '02', title: 'Strategy',      desc: 'Co-create a transformation roadmap aligned with your strategic priorities and technology landscape.' },
  { step: '03', title: 'Delivery',      desc: 'Agile, outcome-driven execution with transparent progress tracking and continuous improvement.' },
  { step: '04', title: 'Scale & Sustain', desc: 'Ensure long-term success with managed services, adoption support, and continuous innovation.' },
];

const esgPillars = [
  { icon: '🌱', title: 'Environmental', desc: 'Committed to reducing our carbon footprint through sustainable operations, green data centers, and responsible resource management.' },
  { icon: '🤝', title: 'Social',        desc: 'Investing in communities through education initiatives, STEM programs, and promoting diversity and inclusion across all levels.' },
  { icon: '⚖️', title: 'Governance',    desc: 'Maintaining the highest standards of corporate governance, data privacy, ethics, and regulatory compliance globally.' },
];

const fadeSlide = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="prem-hero">
        <div className="prem-hero-bg" style={{
          backgroundImage: "linear-gradient(100deg,rgba(0,0,0,0.93) 0%,rgba(0,0,0,0.60) 55%,rgba(0,0,0,0.80) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
        }} />
        <div className="prem-hero-grid-overlay" />
        <div className="container prem-hero-content">
          <motion.nav className="breadcrumb" initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <Link to="/">Home</Link><span className="breadcrumb-sep">/</span><span>Company Overview</span>
          </motion.nav>
          <motion.div className="eyebrow" style={{ marginTop:28 }} initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.5 }}>
            Who We Are
          </motion.div>
          <motion.h1 className="prem-hero-title" initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.18, duration:0.85, ease:[0.16,1,0.3,1] }}>
            We reimagine<br /><span className="prem-hero-accent">tomorrow</span>
          </motion.h1>
          <motion.p className="prem-hero-sub" initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.32, duration:0.65 }}>
            Waleeco is a global technology company that helps enterprises embrace AI, data, digital, and cloud to drive transformative business outcomes across 3+ countries.
          </motion.p>
          <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.46, duration:0.6 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch <FiArrowRight /></Link>
          </motion.div>
        </div>
      </section>

      {/* ── TABS ─────────────────────────────────────────────── */}
      <section className="prem-section prem-section--dark">
        <div className="container">
          {/* Tab nav */}
          <div className="prem-tabs-nav">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`prem-tab-btn${activeTab === t.id ? ' active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">

            {/* ── PHILOSOPHY ─────────────────────────────────── */}
            {activeTab === 'philosophy' && (
              <motion.div key="philosophy" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }} transition={{ duration:0.38 }}>
                <div className="prem-about-two-col">
                  <div className="prem-about-two-col-text">
                    <div className="prem-section-label">Our Philosophy</div>
                    <h2 className="prem-h2" style={{ marginBottom:20 }}>
                      Driven by purpose,<br />powered by technology
                    </h2>
                    <p className="prem-body" style={{ marginBottom:16 }}>
                      We dedicatedly master the power of technology in bespoke ways for our customers, guided by three core values: integrity, innovation, and dedication.
                    </p>
                    <p className="prem-body">
                      At Waleeco, we combine deep domain expertise with cutting-edge capabilities to help clients, communities, and teams thrive through change while building trusted partnerships that deliver outcomes designed to last.
                    </p>
                    <div className="prem-philosophy-pillars">
                      {philosophyPillars.map((p) => (
                        <div key={p.title} className="prem-philosophy-pillar">
                          <div className="prem-philosophy-pillar-icon">{p.icon}</div>
                          <div>
                            <div className="prem-philosophy-pillar-name">{p.title}</div>
                            <div className="prem-philosophy-pillar-desc">{p.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop:32 }}>
                      Partner with Us <FiArrowRight />
                    </Link>
                  </div>
                  <div className="prem-about-two-col-visual">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                      alt="Our Philosophy"
                      className="prem-about-img"
                    />
                    <div className="prem-about-img-badge">
                      <span className="prem-about-img-badge-icon">✦</span>
                      <div>
                        <div className="prem-about-img-badge-title">Trusted for 3+ years</div>
                        <div className="prem-about-img-badge-sub">Human-led. Technology-powered.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prem-philosophy-cta-block">
                  <div className="prem-philosophy-cta-left">
                    <div className="prem-section-label">Core Values</div>
                    <h3 className="prem-h3">Integrity, innovation, and dedication guide every engagement</h3>
                    <p className="prem-body">These three values shape how we think, build, and deliver for every client relationship.</p>
                  </div>
                  <div className="prem-philosophy-cta-right">
                    <div className="prem-philosophy-cta-kicker">Join 300+ changemakers</div>
                    <p className="prem-body" style={{ marginBottom:24 }}>
                      Be part of a global team transforming industries through AI, data, and digital innovation.
                    </p>
                    <Link to="/contact" className="btn btn-primary btn-lg">Contact Us <FiArrowRight /></Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── VALUES ──────────────────────────────────────── */}
            {activeTab === 'values' && (
              <motion.div key="values" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }} transition={{ duration:0.38 }}>
                <div style={{ marginBottom:48 }}>
                  <div className="prem-section-label">Our Core Values</div>
                  <h2 className="prem-h2">The principles that guide everything we do</h2>
                </div>
                <div className="prem-values-grid">
                  {coreValues.map((v, i) => (
                    <motion.div key={v.title} className="prem-value-card" custom={i} initial="hidden" animate="visible" variants={fadeSlide}>
                      <div className="prem-value-icon">{v.icon}</div>
                      <h3 className="prem-value-title">{v.title}</h3>
                      <p className="prem-value-desc">{v.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── THE WALEECO WAY ──────────────────────────────── */}
            {activeTab === 'way' && (
              <motion.div key="way" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }} transition={{ duration:0.38 }}>
                <div style={{ maxWidth:680, marginBottom:56 }}>
                  <div className="prem-section-label">The Waleeco Way</div>
                  <h2 className="prem-h2">Our proven approach to transformation</h2>
                  <p className="prem-body" style={{ marginTop:16 }}>
                    The Waleeco Way is our delivery philosophy — a structured yet flexible approach that ensures we consistently deliver exceptional outcomes for our clients.
                  </p>
                </div>
                <div className="prem-way-steps">
                  {waleecoWayItems.map((item, i) => (
                    <motion.div key={item.step} className="prem-way-step" custom={i} initial="hidden" animate="visible" variants={fadeSlide}>
                      <div className="prem-way-step-num">{item.step}</div>
                      <div className="prem-way-step-line" />
                      <h3 className="prem-way-step-title">{item.title}</h3>
                      <p className="prem-way-step-desc">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── ESG ─────────────────────────────────────────── */}
            {activeTab === 'esg' && (
              <motion.div key="esg" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-12 }} transition={{ duration:0.38 }}>
                <div style={{ maxWidth:680, marginBottom:56 }}>
                  <div className="prem-section-label">ESG</div>
                  <h2 className="prem-h2">Committed to a sustainable future</h2>
                  <p className="prem-body" style={{ marginTop:16 }}>
                    At Waleeco, we take our responsibility to people, planet, and society seriously. Our ESG commitments shape how we operate, invest, and grow.
                  </p>
                </div>
                <div className="prem-esg-grid">
                  {esgPillars.map((pillar, i) => (
                    <motion.div key={pillar.title} className="prem-esg-card" custom={i} initial="hidden" animate="visible" variants={fadeSlide}>
                      <div className="prem-esg-icon">{pillar.icon}</div>
                      <h3 className="prem-value-title">{pillar.title}</h3>
                      <p className="prem-value-desc">{pillar.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
