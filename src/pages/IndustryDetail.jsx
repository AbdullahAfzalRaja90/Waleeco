import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { industries, insights } from '../data/siteData';

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

  const relatedInsights = insights.slice(0, 3);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="page-hero" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${industry.heroImg})` }}
        />
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/industries">Industries</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{industry.title}</span>
          </nav>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {industry.eyebrow || industry.title.toUpperCase()}
          </motion.p>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {industry.heroTitle}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 32 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to an Expert <FiArrowRight />
            </Link>
            <Link to="/insights" className="btn btn-outline btn-lg">
              Read Insights
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) 0', background: 'var(--clr-bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,100px)', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="section-label"><span>Overview</span></div>
              <h2 className="display-sm" style={{ marginBottom: 24 }}>
                Transforming {industry.title}
              </h2>
              <p style={{ fontSize: 16, color: 'var(--clr-muted2)', lineHeight: 1.8 }}>
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
              <img
                src={industry.img}
                alt={industry.title}
                style={{ width: '100%', borderRadius: 'var(--radius-xl)', aspectRatio: '4/3', objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────── */}
      {industry.stats?.length > 0 && (
        <section className="industry-stats">
          <div className="container">
            <div className="industry-stats-grid">
              {industry.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="industry-stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="industry-stat-num">{s.number}</div>
                  <div className="industry-stat-label">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── OFFERINGS ────────────────────────────────────────── */}
      {industry.offerings?.length > 0 && (
        <section className="industry-offerings">
          <div className="container">
            <div style={{ marginBottom: 48 }}>
              <div className="section-label"><span>Our Offerings</span></div>
              <h2 className="display-md">
                What we do in {industry.title}
              </h2>
            </div>
            <div className="offerings-grid">
              {industry.offerings.map((offering, i) => (
                <motion.div
                  key={offering.title}
                  className="offering-item"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: (i % 4) * 0.1 }}
                >
                  <span className="offering-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="offering-title">{offering.title}</h3>
                    {offering.desc && <p className="offering-desc">{offering.desc}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY SYSTEMS ──────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) 0', background: 'var(--clr-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }}>
            <div>
              <div className="section-label"><span>Why Waleeco</span></div>
              <h2 className="display-sm" style={{ marginBottom: 24 }}>
                A partner you can trust for the long run
              </h2>
              <p style={{ color: 'var(--clr-muted)', fontSize: 14, lineHeight: 1.8 }}>
                With 48+ years of technology leadership and deep expertise in {industry.title.toLowerCase()}, Waleeco delivers outcomes that create lasting competitive advantage.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
                Talk to an Expert <FiArrowRight />
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
                  style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <div style={{ width: 24, height: 24, background: 'rgba(230,51,41,0.12)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                    <FiCheck size={13} color="var(--clr-primary)" />
                  </div>
                  <p style={{ fontSize: 14, color: 'var(--clr-muted2)', lineHeight: 1.6 }}>{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED INSIGHTS ─────────────────────────────────── */}
      <section className="insights-section">
        <div className="container">
          <div className="insights-header">
            <div>
              <div className="section-label"><span>Insights</span></div>
              <h2 className="display-sm">Related perspectives</h2>
            </div>
            <Link to="/insights" className="btn btn-ghost">All Insights <FiArrowRight /></Link>
          </div>
          <div className="insights-grid">
            {relatedInsights.map((ins, i) => (
              <motion.article
                key={ins.id}
                className="insight-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="insight-card-img-wrap">
                  <img src={ins.img} alt={ins.title} className="insight-card-img" loading="lazy" />
                </div>
                <div className="insight-card-body">
                  <span className="insight-tag">{ins.tag}</span>
                  <h3 className="insight-card-title">{ins.title}</h3>
                  <p className="insight-card-excerpt">{ins.excerpt}</p>
                  <div className="insight-card-meta">
                    <span className="insight-card-date">{ins.date}</span>
                    <Link to={`/insights/${ins.id}`} className="insight-read-more">
                      Read more <FiArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Ready to transform your {industry.title} business?</h2>
          <p className="cta-subtitle">
            Connect with our {industry.title} specialists to explore how we can drive your digital transformation.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get in Touch <FiArrowRight />
            </Link>
            <Link to="/company-overview" className="btn btn-outline btn-lg">About Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
