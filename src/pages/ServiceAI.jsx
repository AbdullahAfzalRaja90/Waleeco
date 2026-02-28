import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { aiService } from '../data/siteData';

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ServiceAI() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="page-hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(13,14,16,0.6) 0%, rgba(13,14,16,0.95) 100%), url('${aiService.heroImg}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <div className="page-hero-content" style={{ maxWidth: 760 }}>
            <FadeUp>
              <p className="eyebrow">{aiService.eyebrow}</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="hero-title">{aiService.heroTitle}</h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="hero-subtitle">{aiService.intro}</p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}>
                <Link to="/contact" className="btn btn-primary">
                  Start your AI journey <FiArrowRight />
                </Link>
                <Link to="/insights" className="btn btn-outline">
                  Read our research
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ─────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeUp>
              <p className="eyebrow">Our Approach</p>
              <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 24 }}>
                AI strategy that delivers <span className="text-red">real business impact</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.15}>
              <p style={{ color: 'var(--clr-muted)', lineHeight: 1.8, fontSize: 16 }}>
                {aiService.introDetail}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── AI OFFERINGS ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 12 }}>AI Services</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, marginBottom: 48 }}>
              End-to-end AI capabilities
            </h2>
          </FadeUp>
          <div className="ai-offerings-grid">
            {aiService.offerings.map((item, i) => (
              <motion.div
                key={item.title}
                className="ai-offering-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(230,51,41,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  fontSize: 20,
                  color: 'var(--clr-primary)',
                  fontWeight: 800,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--clr-muted)', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI READINESS STEPS ────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 12 }}>AI Readiness</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, marginBottom: 16 }}>
              Our 4-step readiness approach
            </h2>
            <p style={{ color: 'var(--clr-muted)', maxWidth: 600, marginBottom: 52 }}>
              A structured methodology to assess, plan, and execute your AI transformation with confidence.
            </p>
          </FadeUp>

          <div className="readiness-steps">
            {aiService.readinessSteps.map((s, i) => (
              <motion.div
                key={s.step}
                className="readiness-step"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 20 }}>
                  <div style={{
                    minWidth: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'var(--clr-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 16,
                    color: '#fff',
                    flexShrink: 0,
                  }}>
                    {String(s.step).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, lineHeight: 1.3, marginTop: 10 }}>
                    {s.title}
                  </h3>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--clr-muted)', fontSize: 14, lineHeight: 1.6 }}>
                      <FiCheck style={{ color: 'var(--clr-primary)', flexShrink: 0, marginTop: 2 }} size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY SOLUTIONS ────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Industry Solutions</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, marginBottom: 52 }}>
              AI purpose-built for every sector
            </h2>
          </FadeUp>

          <div style={{ display: 'flex', gap: 16, marginBottom: 36, borderBottom: '1px solid var(--clr-border)' }}>
            {aiService.industrySolutions.map((sol, i) => (
              <button
                key={sol.industry}
                onClick={() => setActiveTab(i)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '12px 20px',
                  fontSize: 14,
                  fontWeight: 600,
                  color: activeTab === i ? 'var(--clr-primary)' : 'var(--clr-muted)',
                  borderBottom: activeTab === i ? '2px solid var(--clr-primary)' : '2px solid transparent',
                  marginBottom: -1,
                  transition: 'color 0.2s',
                  fontFamily: 'inherit',
                  textTransform: 'capitalize',
                  whiteSpace: 'nowrap',
                }}
              >
                {sol.industry}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: 'var(--clr-surface)',
              border: '1px solid var(--clr-border)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px 40px',
              maxWidth: 680,
            }}
          >
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
              {aiService.industrySolutions[activeTab].industry}
            </h3>
            <p style={{ color: 'var(--clr-muted)', fontSize: 16, lineHeight: 1.7 }}>
              {aiService.industrySolutions[activeTab].desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Why Systems Limited</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3.5vw,2.4rem)', fontWeight: 800, marginBottom: 52 }}>
              Why companies trust us for AI
            </h2>
          </FadeUp>

          <div className="why-us-grid">
            {aiService.whyUs.map((point, i) => (
              <motion.div
                key={point}
                className="why-us-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: 'rgba(230,51,41,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 14,
                }}>
                  <FiCheck size={16} color="var(--clr-primary)" />
                </div>
                <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.5, color: 'var(--clr-text)' }}>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to industrialize AI?</h2>
          <p className="cta-subtitle">
            Let's build an AI roadmap tailored to your business goals — from strategy to execution.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary">
              Talk to an AI expert <FiArrowRight />
            </Link>
            <Link to="/insights" className="btn btn-outline">
              Explore AI research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
