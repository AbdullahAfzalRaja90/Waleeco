import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiDatabase, FiMonitor, FiCloud } from 'react-icons/fi';
import { services } from '../data/siteData';

const serviceIcons = {
  'ai-transformation': <FiZap size={28} />,
  'data-analytics':    <FiDatabase size={28} />,
  digital:             <FiMonitor size={28} />,
  cloud:               <FiCloud size={28} />,
};

const serviceLongDesc = {
  'ai-transformation': [
    'We maximize the power and promise of AI to drive transformative business outcomes. From AI strategy and readiness assessments to full-scale GenAI implementation, MLOps, and intelligent automation — we guide enterprises through every stage of the AI journey.',
    'Our AI transformation practice combines cutting-edge technology with deep domain expertise across banking, telecom, retail, and healthcare to create measurable, lasting impact.',
  ],
  'data-analytics': [
    'We enable enterprises to transform data into a true business advantage. By tapping into ML, advanced analytics, generative AI, and connected intelligence, we help organizations make smarter, faster, and more confident decisions.',
    'From data strategy and governance to real-time analytics platforms and AI-powered insights — we build the data foundation that powers your transformation.',
  ],
  digital: [
    'We offer core insights-driven digital transformation capabilities, modernize key systems to accelerate innovation, and provide a design-led, unified, and personalized experience.',
    'Whether you\'re building a new digital product or reimagining your enterprise systems, our digital practice combines human-centered design with cutting-edge engineering.',
  ],
  cloud: [
    'We help enterprises scale and adapt to evolving needs within a secure hybrid or pure cloud environment by leveraging end-to-end and outcome-based cloud solutions.',
    'From cloud strategy and migration to cloud-native development and managed services — we ensure your cloud journey is secure, efficient, and value-driven.',
  ],
};

export default function Services() {
  return (
    <main>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="page-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)' }}
        />
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <span>Services</span>
          </nav>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            What We Do
          </motion.p>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Services that drive<br /><span>transformation</span>
          </motion.h1>
          <motion.p className="page-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            We combine deep domain expertise with cutting-edge technology to deliver AI, data, digital, and cloud solutions that create lasting business value.
          </motion.p>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) 0', background: 'var(--clr-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <div className="section-label"><span>Our Services</span></div>
            <h2 className="display-md">Four pillars of transformation</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: i % 2 === 0 ? 'auto 1fr auto' : 'auto 1fr auto',
                  gap: 32,
                  background: 'var(--clr-surface)',
                  border: '1px solid var(--clr-border)',
                  borderLeft: `4px solid ${svc.color}`,
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(28px,4vw,48px)',
                  alignItems: 'center',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{ scale: 1.005, boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: 'var(--radius-lg)',
                  background: `${svc.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: svc.color, flexShrink: 0,
                }}>
                  {serviceIcons[svc.id]}
                </div>
                <div>
                  <h2 style={{ fontSize: 'clamp(20px,2.5vw,28px)', fontWeight: 800, color: 'var(--clr-white)', marginBottom: 12, letterSpacing: '-0.02em' }}>
                    {svc.title}
                  </h2>
                  {(serviceLongDesc[svc.id] || []).map((para, pi) => (
                    <p key={pi} style={{ fontSize: 15, color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 8 }}>
                      {para}
                    </p>
                  ))}
                </div>
                <Link
                  to={svc.link}
                  className="btn btn-primary"
                  style={{ flexShrink: 0, alignSelf: 'flex-start' }}
                >
                  Explore <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) 0', background: 'var(--clr-bg2)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-label" style={{ justifyContent: 'center' }}><span>Our Reach</span></div>
            <h2 className="display-md">Global capabilities, local expertise</h2>
            <p style={{ color: 'var(--clr-muted)', fontSize: 15, maxWidth: 520, margin: '16px auto 0', lineHeight: 1.8 }}>
              With 7,700+ changemakers across 16+ countries, we combine global scale with deep local knowledge.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--clr-border)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            {[
              { number: '48+', label: 'Years of expertise' },
              { number: '7700+', label: 'Changemakers globally' },
              { number: '16+', label: 'Countries served' },
              { number: '300+', label: 'Global clients' },
            ].map((s) => (
              <div key={s.label} className="stat-item">
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Start your transformation</h2>
          <p className="cta-subtitle">
            Let's discuss how Systems Limited can accelerate your digital transformation journey.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">Get in Touch <FiArrowRight /></Link>
            <Link to="/company-overview" className="btn btn-outline btn-lg">About Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
