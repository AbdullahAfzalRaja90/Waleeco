import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import { industries } from '../data/siteData';

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function IndustryDetail() {
  const { industryId } = useParams();
  const navigate = useNavigate();

  const industry = industries.find(
    (ind) => ind.id === industryId || ind.id === industryId?.replace(/-financial-services$/, '')
  ) || industries.find((ind) => ind.id === 'banking' && industryId === 'banking-financial-services');

  if (!industry) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'var(--clr-white)', marginBottom: 16 }}>Industry not found</h1>
          <button className="btn btn-primary" onClick={() => navigate('/industries')}>
            View All Industries
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="ind-detail-hero">
        <div
          className="ind-detail-hero-bg"
          style={{ backgroundImage: `url(${industry.heroImg})` }}
        />
        <div className="ind-detail-hero-overlay" />
        <div className="container ind-detail-hero-content">
          <motion.div
            className="eyebrow"
            style={{ marginTop: 32, marginBottom: 20 }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {industry.eyebrow || industry.title.toUpperCase()}
          </motion.div>

          <motion.h1
            className="ind-detail-hero-title"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {industry.heroTitle}
          </motion.h1>

          <motion.div
            className="ind-detail-hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to an Expert <FiArrowRight />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Accent bar */}
        <div className="ind-detail-hero-accent" style={{ background: industry.color || 'var(--red)' }} />
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="ind-detail-intro-section">
        <div className="container">
          <div className="ind-detail-intro-grid">
            <motion.div
              className="ind-detail-intro-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="ind-detail-label">
                <span className="ind-detail-label-dot" style={{ background: industry.color || 'var(--red)' }} />
                Overview
              </div>
              <h2 className="ind-detail-section-heading">
                Transforming {industry.title}
              </h2>
              <p className="ind-detail-body-text">
                {industry.intro}
              </p>
              <Link to="/contact" className="btn btn-ghost" style={{ marginTop: 32 }}>
                Get Started <FiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="ind-detail-image-wrap">
                <img
                  src={industry.img}
                  alt={industry.title}
                  className="ind-detail-image"
                />
                <div className="ind-detail-image-badge" style={{ borderColor: industry.color || 'var(--red)' }}>
                  <span className="ind-detail-image-badge-icon" style={{ color: industry.color || 'var(--red)' }}>✦</span>
                  <span>Industry Leader</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      {industry.stats?.length > 0 && (
        <section className="ind-detail-stats-section">
          <div className="container">
            <div className="ind-detail-stats-grid">
              {industry.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="ind-detail-stat"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="ind-detail-stat-num" style={{ color: industry.color || 'var(--red)' }}>
                    {s.number}
                  </div>
                  <div className="ind-detail-stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── OFFERINGS ─────────────────────────────────────────── */}
      {industry.offerings?.length > 0 && (
        <section className="ind-detail-offerings-section">
          <div className="container">
            <div className="ind-detail-offerings-header">
              <div className="ind-detail-label">
                <span className="ind-detail-label-dot" style={{ background: industry.color || 'var(--red)' }} />
                Our Offerings
              </div>
              <h2 className="ind-detail-section-heading">
                What we do in {industry.title}
              </h2>
              <p className="ind-detail-body-text" style={{ maxWidth: 560 }}>
                Comprehensive solutions built for the demands of modern {industry.title.toLowerCase()} organizations.
              </p>
            </div>

            <div className="ind-detail-offerings-grid">
              {industry.offerings.map((offering, i) => (
                <motion.div
                  key={offering.title}
                  className="ind-detail-offering-card"
                  custom={i % 4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <div className="ind-detail-offering-num" style={{ color: industry.color || 'var(--red)', borderColor: `${industry.color || 'var(--red)'}30` }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="ind-detail-offering-body">
                    <h3 className="ind-detail-offering-title">{offering.title}</h3>
                    {offering.desc && (
                      <p className="ind-detail-offering-desc">{offering.desc}</p>
                    )}
                  </div>
                  <div className="ind-detail-offering-arrow">
                    <FiArrowUpRight size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY WALEECO ───────────────────────────────────────── */}
      <section className="ind-detail-why-section">
        <div className="container">
          <div className="ind-detail-why-grid">
            <motion.div
              className="ind-detail-why-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="ind-detail-label">
                <span className="ind-detail-label-dot" style={{ background: industry.color || 'var(--red)' }} />
                Why Waleeco
              </div>
              <h2 className="ind-detail-section-heading">
                A partner you can trust for the long run
              </h2>
              <p className="ind-detail-body-text">
                With 48+ years of technology leadership and deep expertise in {industry.title.toLowerCase()}, Waleeco delivers outcomes that create lasting competitive advantage.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 36 }}>
                Talk to an Expert <FiArrowRight />
              </Link>
            </motion.div>

            <div className="ind-detail-why-right">
              {[
                `Deep ${industry.title} domain expertise spanning decades`,
                'Global delivery capabilities across 16+ countries',
                'AI-first approach to solving complex business problems',
                'Certified partnerships with Microsoft, IBM, SAP, Temenos and more',
                'Proven track record with leading enterprises worldwide',
                'End-to-end services from strategy to managed operations',
              ].map((point, i) => (
                <motion.div
                  key={point}
                  className="ind-detail-why-point"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div className="ind-detail-why-check" style={{ background: `${industry.color || 'var(--red)'}18` }}>
                    <FiCheck size={13} style={{ color: industry.color || 'var(--red)' }} />
                  </div>
                  <p className="ind-detail-why-text">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="ind-detail-cta-section">
        <div className="ind-detail-cta-glow" style={{ background: `${industry.color || 'var(--red)'}22` }} />
        <div className="container ind-detail-cta-content">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="eyebrow" style={{ marginBottom: 24, justifyContent: 'center' }}>
              Ready to get started?
            </div>
            <h2 className="ind-detail-cta-title">
              Ready to transform your<br />
              <span style={{ color: industry.color || 'var(--red)' }}>{industry.title}</span> business?
            </h2>
            <p className="ind-detail-cta-sub">
              Connect with our {industry.title} specialists to explore how we can drive your digital transformation.
            </p>
            <div className="ind-detail-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get in Touch <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">About Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
