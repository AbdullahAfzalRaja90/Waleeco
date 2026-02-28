import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiArrowRight, FiAward, FiUsers, FiHeart, FiTarget, FiGlobe, FiStar } from 'react-icons/fi';
import { leadership, awards, offices } from '../data/siteData';

const tabs = [
  { id: 'philosophy', label: 'OUR PHILOSOPHY' },
  { id: 'values',     label: 'OUR CORE VALUES' },
  { id: 'way',        label: 'THE SYSTEMS WAY' },
  { id: 'esg',        label: 'ESG' },
];

const coreValues = [
  { icon: <FiUsers size={20} />, title: 'People First', desc: 'We believe our greatest asset is our people. We invest in their growth, wellbeing, and success.' },
  { icon: <FiStar size={20} />, title: 'Integrity', desc: 'We act with honesty and transparency in everything we do — with our clients, partners, and each other.' },
  { icon: <FiTarget size={20} />, title: 'Innovation', desc: 'We foster a culture of continuous learning and creative problem-solving to stay ahead of the curve.' },
  { icon: <FiHeart size={20} />, title: 'Empathy', desc: 'We genuinely care about the impact of our work on clients, employees, communities, and the environment.' },
  { icon: <FiGlobe size={20} />, title: 'Collaboration', desc: 'We achieve more together. Cross-functional teams, global mindsets, and diverse perspectives drive our best work.' },
  { icon: <FiAward size={20} />, title: 'Excellence', desc: 'We hold ourselves to the highest standards of quality, delivery, and client satisfaction.' },
];

const systemsWayItems = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive into your business challenges, goals, and landscape to frame the right problem.' },
  { step: '02', title: 'Strategy', desc: 'Co-create a transformation roadmap aligned with your strategic priorities and technology landscape.' },
  { step: '03', title: 'Delivery', desc: 'Agile, outcome-driven execution with transparent progress tracking and continuous improvement.' },
  { step: '04', title: 'Scale & Sustain', desc: 'Ensure long-term success with managed services, adoption support, and continuous innovation.' },
];

const esgPillars = [
  { icon: '🌱', title: 'Environmental', desc: 'Committed to reducing our carbon footprint through sustainable operations, green data centers, and responsible resource management.' },
  { icon: '🤝', title: 'Social', desc: 'Investing in communities through education initiatives, STEM programs, and promoting diversity and inclusion across all levels.' },
  { icon: '⚖️', title: 'Governance', desc: 'Maintaining the highest standards of corporate governance, data privacy, ethics, and regulatory compliance globally.' },
];

const awardIcons = ['🏆', '🥇', '⭐', '🏅', '🎖️', '✨'];

export default function About() {
  const [activeTab, setActiveTab] = useState('philosophy');

  return (
    <main>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)' }}
        />
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Company Overview</span>
          </nav>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Who We Are
          </motion.p>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            We reimagine<br /><span>tomorrow</span>
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Systems Limited is a global technology company that helps enterprises embrace AI, data, digital, and cloud to drive transformative business outcomes across 16+ countries.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY / VALUES / WAY / ESG TABS ─────────────── */}
      <section className="about-tabs-section">
        <div className="container">
          <div className="tabs-header">
            {tabs.map((t) => (
              <button
                key={t.id}
                className={`tab-btn${activeTab === t.id ? ' active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'philosophy' && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="philosophy-content">
                  <div className="philosophy-text">
                    <div className="section-label"><span>Our Philosophy</span></div>
                    <h2>Driven by purpose,<br />powered by technology</h2>
                    <p>
                      At Systems Limited, we believe that technology is only as powerful as the human intelligence, creativity, and empathy that drives it. Our philosophy is simple: we exist to help our clients, communities, and people thrive in an era of exponential change.
                    </p>
                    <p>
                      We combine deep domain expertise with cutting-edge technology capabilities to deliver transformative outcomes — not just for today, but for the long term. We don't just implement technology; we reimagine the art of the possible.
                    </p>
                    <p>
                      For over four decades, we've been a trusted partner to enterprises across banking, telecom, government, health, and retail sectors — helping them navigate disruption, seize opportunity, and build lasting competitive advantage.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ marginTop: 24 }}>
                      Partner with Us <FiArrowRight />
                    </Link>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                    alt="Our Philosophy"
                    className="philosophy-img"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'values' && (
              <motion.div
                key="values"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ maxWidth: 720, marginBottom: 40 }}>
                  <div className="section-label"><span>Our Core Values</span></div>
                  <h2 className="display-sm">The principles that guide everything we do</h2>
                </div>
                <div className="values-grid">
                  {coreValues.map((v, i) => (
                    <motion.div
                      key={v.title}
                      className="value-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <div className="value-icon">{v.icon}</div>
                      <h3 className="value-title">{v.title}</h3>
                      <p className="value-desc">{v.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'way' && (
              <motion.div
                key="way"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ maxWidth: 680, marginBottom: 56 }}>
                  <div className="section-label"><span>The Systems Way</span></div>
                  <h2 className="display-sm">Our proven approach to transformation</h2>
                  <p style={{ color: 'var(--clr-muted)', fontSize: 15, lineHeight: 1.8, marginTop: 16 }}>
                    The Systems Way is our delivery philosophy — a structured yet flexible approach that ensures we consistently deliver exceptional outcomes for our clients.
                  </p>
                </div>
                <div className="readiness-steps" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                  {systemsWayItems.map((item, i) => (
                    <motion.div
                      key={item.step}
                      className="readiness-step"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12 }}
                    >
                      <div className="readiness-step-num">{item.step}</div>
                      <h3 className="readiness-step-title">{item.title}</h3>
                      <ul className="readiness-step-list">
                        <li>{item.desc}</li>
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'esg' && (
              <motion.div
                key="esg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div style={{ maxWidth: 680, marginBottom: 48 }}>
                  <div className="section-label"><span>ESG</span></div>
                  <h2 className="display-sm">Committed to a sustainable future</h2>
                  <p style={{ color: 'var(--clr-muted)', fontSize: 15, lineHeight: 1.8, marginTop: 16 }}>
                    At Systems Limited, we take our responsibility to people, planet, and society seriously. Our ESG commitments shape how we operate, invest, and grow.
                  </p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
                  {esgPillars.map((pillar, i) => (
                    <motion.div
                      key={pillar.title}
                      className="value-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12 }}
                    >
                      <div style={{ fontSize: 36, marginBottom: 16 }}>{pillar.icon}</div>
                      <h3 className="value-title">{pillar.title}</h3>
                      <p className="value-desc">{pillar.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── LEADERSHIP ────────────────────────────────────────── */}
      <section className="leadership-section" id="leadership">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="section-label"><span>Our Leadership</span></div>
            <h2 className="display-md">The team behind the vision</h2>
          </div>
          <div className="leadership-grid">
            {leadership.map((person, i) => (
              <motion.div
                key={person.name}
                className="leader-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 4) * 0.1 }}
              >
                <div className="leader-img-wrap">
                  <img src={person.img} alt={person.name} className="leader-img" loading="lazy" />
                  <div className="leader-overlay" />
                </div>
                <div className="leader-info">
                  <h3 className="leader-name">{person.name}</h3>
                  <p className="leader-role">{person.title}</p>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      className="leader-li"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                    >
                      <FiLinkedin size={15} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS ────────────────────────────────────────────── */}
      <section className="awards-section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="section-label"><span>Recognition</span></div>
            <h2 className="display-md">Awards & accolades</h2>
          </div>
          <div className="awards-grid">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                className="award-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 4) * 0.08 }}
              >
                <div className="award-icon">{awardIcons[i % awardIcons.length]}</div>
                <h3 className="award-title">{award.title}</h3>
                {award.sub && <p className="award-sub">{award.sub}</p>}
                {award.year && <span className="award-year">{award.year}</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFICES ───────────────────────────────────────────── */}
      <section className="offices-section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="section-label"><span>Global Presence</span></div>
            <h2 className="display-md">Operating across 16+ countries</h2>
            <p style={{ color: 'var(--clr-muted)', fontSize: 15, maxWidth: 560, marginTop: 16, lineHeight: 1.8 }}>
              From our headquarters in Islamabad to delivery centers across Asia, the Middle East, Africa, and beyond — we're wherever our clients need us.
            </p>
          </div>
          <div className="offices-grid">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                className="office-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 4) * 0.07 }}
              >
                <div className="office-flag">{
                  { Pakistan: '🇵🇰', UAE: '🇦🇪', Egypt: '🇪🇬', Qatar: '🇶🇦', 'South Africa': '🇿🇦', Kenya: '🇰🇪', UK: '🇬🇧', Malaysia: '🇲🇾', Singapore: '🇸🇬' }[office.country] || '🌍'
                }</div>
                {office.city.includes('HQ') && <div className="office-hq-badge">Headquarters</div>}
                <h3 className="office-city">{office.city}</h3>
                <p className="office-country">{office.country}</p>
                {office.address && <p className="office-address">{office.address}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Join 7,700+ changemakers</h2>
          <p className="cta-subtitle">
            Be part of a global team transforming industries through AI, data, and digital innovation.
          </p>
          <div className="cta-btns">
            <Link to="/careers" className="btn btn-primary btn-lg">Explore Careers <FiArrowRight /></Link>
            <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
