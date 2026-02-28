import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { industries } from '../data/siteData';

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export default function Industries() {
  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <FadeUp><p className="eyebrow">Industries</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="hero-title">
                Deep expertise<br /><span className="text-red">across every</span><br />sector
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="hero-subtitle">
                We bring industry-specific knowledge and proven frameworks to help enterprises
                in every sector navigate transformation and unlock lasting growth.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY CARDS GRID ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow" style={{ textAlign: 'center' }}>Sectors We Serve</p>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>
              Transforming industries<br />around the <span className="text-red">globe</span>
            </h2>
          </FadeUp>
          <div className="industries-grid">
            {industries.map((ind, i) => (
              <motion.div key={ind.id} className="industry-card"
                initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <img src={ind.img} alt={ind.title} className="industry-card-img" />
                <div className="industry-card-overlay">
                  <h3>{ind.title}</h3>
                  <p>{ind.desc}</p>
                  <Link to={`/industries/${ind.id}`} className="industry-learn">
                    Learn More <FiArrowUpRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY BRIEF LIST ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow" style={{ marginBottom: 48 }}>Explore by sector</p>
          </FadeUp>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/industries/${ind.id}`}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '28px 0', borderBottom: '1px solid var(--clr-border)', gap: 24, textDecoration: 'none', color: 'inherit' }}
                  onMouseOver={e => { e.currentTarget.querySelector('.ind-title').style.color = `${ind.color}`; e.currentTarget.querySelector('.ind-arrow').style.opacity = 1; }}
                  onMouseOut={e => { e.currentTarget.querySelector('.ind-title').style.color = ''; e.currentTarget.querySelector('.ind-arrow').style.opacity = 0; }}
                >
                  <div style={{ flex: 1 }}>
                    <h3 className="ind-title" style={{ fontSize: 20, fontWeight: 700, marginBottom: 6, transition: 'color 0.25s' }}>{ind.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--clr-muted)', lineHeight: 1.5 }}>{ind.desc}</p>
                  </div>
                  <FiArrowRight className="ind-arrow" size={20} style={{ opacity: 0, transition: 'opacity 0.25s', color: ind.color, flexShrink: 0 }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section contact-cta-section">
        <div className="container">
          <div className="contact-cta-inner">
            <FadeUp>
              <h2>Ready to transform<br />your industry?</h2>
              <p>Our sector specialists are ready to partner with you on every step of the journey.</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="contact-cta-actions">
                <Link to="/contact" className="btn btn-primary">Let's Talk <FiArrowRight /></Link>
                <Link to="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
