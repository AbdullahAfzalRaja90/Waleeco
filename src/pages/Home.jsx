import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FiArrowRight, FiArrowUpRight, FiChevronLeft, FiChevronRight,
  FiZap, FiDatabase, FiMonitor, FiCloud, FiShield, FiTrendingUp,
} from 'react-icons/fi';
import {
  heroSlides, stats, services, insights, partners,
  industries,
} from '../data/siteData';

/* ── Service icon map ─────────────────────────────────────────── */
const serviceIcons = {
  'ai-transformation': FiZap,
  'data-analytics':    FiDatabase,
  digital:             FiMonitor,
  cloud:               FiCloud,
};

/* ── CTA feature items ───────────────────────────────────────── */
const ctaFeatures = [
  { icon: <FiZap />,       title: 'AI-first delivery',    desc: 'Every engagement powered by machine learning and advanced analytics.' },
  { icon: <FiShield />,    title: 'Enterprise security',  desc: 'ISO 27001 certified with SOC 2 compliant processes end-to-end.' },
  { icon: <FiTrendingUp />,title: 'Measurable outcomes',  desc: 'SLA-backed commitments with real-time dashboards and KPIs.' },
];

/* ── Animation variant ───────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Animated counter ────────────────────────────────────────── */
function CountUp({ end, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const dur = 2000;
    const step = end / (dur / 16);
    let current = 0;
    const id = setInterval(() => {
      current += step;
      if (current >= end) { setValue(end); clearInterval(id); }
      else setValue(Math.floor(current));
    }, 16);
    return () => clearInterval(id);
  }, [inView, end]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [slide, setSlide] = useState(0);
  const total = heroSlides.length;

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setSlide(s => (s - 1 + total) % total);
  const next = () => setSlide(s => (s + 1) % total);
  const current = heroSlides[slide];
  const doubled = [...partners, ...partners];

  return (
    <main>
      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-mesh">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              className="hero-mesh-bg"
              style={{ backgroundImage: `url(${current.bg})` }}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid-overlay" />
        </div>

        <div className="hero-content">
          <div className="container">
            <div className="hero-content-inner">

              <AnimatePresence mode="wait">
                <motion.h1
                  key={`headline-${slide}`}
                  className="hero-headline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {current.titleLine1 && (
                    <span className="hero-headline-line">
                      <motion.span
                        initial={{ y: '105%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {current.titleLine1}
                      </motion.span>
                    </span>
                  )}
                  {current.titleLine2 && (
                    <span className="hero-headline-line">
                      <motion.span
                        className="grad-text"
                        initial={{ y: '105%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {current.titleLine2}
                      </motion.span>
                    </span>
                  )}
                  {current.titleLine3 && (
                    <span className="hero-headline-line">
                      <motion.span
                        initial={{ y: '105%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {current.titleLine3}
                      </motion.span>
                    </span>
                  )}
                </motion.h1>
              </AnimatePresence>

              {current.subtitle && (
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`sub-${slide}`}
                    className="hero-sub"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {current.subtitle}
                  </motion.p>
                </AnimatePresence>
              )}

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={current.ctaLink} className="btn btn-primary btn-lg">
                  {current.cta} <FiArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg">
                  Our Story
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Floating stats (desktop) */}
        <div className="hero-stats-float">
          {stats.map(s => (
            <div className="hero-stat-cell" key={s.label}>
              <div className="hero-stat-num">
                <CountUp end={s.number} suffix={s.suffix} />
              </div>
              <div className="hero-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Slide dots */}
        <div className="hero-controls">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === slide ? ' active' : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="hero-arrows">
          <button className="hero-arrow" onClick={prev} aria-label="Previous"><FiChevronLeft size={20} /></button>
          <button className="hero-arrow" onClick={next} aria-label="Next"><FiChevronRight size={20} /></button>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══ PARTNERS MARQUEE ════════════════════════════════════ */}
      <div className="partners-strip">
        <div className="partners-label">Trusted by industry leaders worldwide</div>
        <div className="marquee-track-wrap">
          <div className="marquee-track">
            {doubled.map((p, i) => (
              <div className="partner-pill" key={i}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ STATS BAND ══════════════════════════════════════════ */}
      <section className="stats-band">
        <div className="container">
          <div className="stats-band-grid">
            {stats.map((s, i) => (
              <motion.div
                className="stat-block"
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
              >
                <div className="stat-num">
                  <CountUp end={s.number} suffix={s.suffix} />
                </div>
                <div className="stat-lbl">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES — panel list ════════════════════════════════ */}
      <section className="services-section section">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 className="section-title services-title">
                End-to-end technology<br />transformation
              </h2>
            </div>
            <div>
              <p className="section-subtitle">
                From strategy through deployment, we deliver technology solutions that create measurable, lasting impact across your enterprise.
              </p>
              <Link to="/services" className="btn btn-outline" style={{ marginTop: '20px' }}>
                All services <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="services-list">
            {services.map((s, i) => {
              const Icon = serviceIcons[s.id] || FiZap;
              return (
                <motion.div
                  key={s.id}
                  className="service-panel"
                  style={{ '--panel-color': s.color }}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={fadeUp}
                >
                  <div>
                    <div className="service-panel-icon"><Icon size={22} /></div>
                    <div className="service-panel-title">{s.title}</div>
                    <div className="service-panel-tags">
                      <span className="service-tag">Consulting</span>
                      <span className="service-tag">Implementation</span>
                      <span className="service-tag">Managed</span>
                    </div>
                  </div>
                  <div className="service-panel-desc">{s.desc}</div>
                  <Link to={s.link} className="service-panel-cta" aria-label={`Learn about ${s.title}`}>
                    <FiArrowUpRight size={20} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES — bento grid ══════════════════════════════ */}
      <section className="industries-section">
        <div className="container">
          <div className="industries-header">
            <div>
              <div className="eyebrow">Industries</div>
              <h2 className="section-title" style={{ marginTop: '16px' }}>
                Serving every<br />vertical at scale
              </h2>
            </div>
            <div>
              <p className="section-subtitle">
                Deep domain expertise across banking, telco, retail, healthcare and more — delivering sector-specific outcomes that matter.
              </p>
              <Link to="/industries" className="btn btn-outline" style={{ marginTop: '20px' }}>
                All industries <FiArrowRight />
              </Link>
            </div>
          </div>

          <div className="industries-bento">
            {industries.slice(0, 5).map((ind, i) => (
              <Link
                to={`/industries/${ind.id}`}
                key={ind.id}
                className={`ind-bento-card ind-bento-${i + 1}`}
                style={{ '--ind-color': ind.color || 'var(--red)' }}
              >
                {ind.img && (
                  <img src={ind.img} alt={ind.title} className="ind-card-img" loading="lazy" />
                )}
                <div className="ind-card-overlay">
                  <div className="ind-card-eyebrow">Industry</div>
                  <div className="ind-card-title">{ind.title}</div>
                  <div className="ind-card-link">Explore <FiArrowUpRight size={12} /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSIGHTS ════════════════════════════════════════════ */}
      <section className="insights-section section">
        <div className="container">
          <div className="insights-header">
            <div>
              <div className="eyebrow">Insights</div>
              <h2 className="section-title" style={{ marginTop: '16px' }}>
                Ideas shaping<br />the industry
              </h2>
            </div>
            <Link to="/insights" className="btn btn-outline">View all <FiArrowRight /></Link>
          </div>

          <div className="insights-grid">
            {insights.slice(0, 3).map((item, i) => (
              <motion.div
                className="insight-card"
                key={item.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <div className="insight-card-img-wrap">
                  <img src={item.img} alt={item.title} className="insight-card-img" loading="lazy" />
                </div>
                <div className="insight-card-body">
                  <span className="insight-type-tag">{item.type}</span>
                  <div className="insight-card-title">{item.title}</div>
                  <div className="insight-card-excerpt">{item.excerpt}</div>
                  <div className="insight-card-footer">
                    <Link to={item.link} className="insight-read-more">
                      Read more <FiArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ QUOTE ════════════════════════════════════════════════ */}
      <section className="quote-section">
        <div className="container">
          <motion.div
            className="quote-inner"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="quote-mark-lg">"</span>
            <p className="quote-body">
              Waleeco's ability to deliver on large-scale projects is second to none.
              Their team seamlessly integrated with ours, and we went live in under six months —
              a feat that seemed impossible before our partnership began.
            </p>
            <div className="quote-divider" />
            <div className="quote-author-name">Rehan Qadri</div>
            <div className="quote-author-role">Director Digital Business Transformation · Khaadi</div>
          </motion.div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════════ */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-grid">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="eyebrow" style={{ marginBottom: '24px' }}>Let's build together</div>
              <h2 className="cta-headline">
                Ready to<br />
                <span className="line2">reimagine</span><br />
                your future?
              </h2>
              <p className="cta-body">
                Join 300+ enterprise clients who trust Waleeco to deliver complex technology transformations — on time, on budget, with measurable ROI.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-xl">Get started <FiArrowRight /></Link>
                <Link to="/about" className="btn btn-outline btn-xl">Our story</Link>
              </div>
            </motion.div>

            <motion.div
              className="cta-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {ctaFeatures.map((f, i) => (
                <div className="cta-feature-item" key={i}>
                  <div className="cta-feat-icon">{f.icon}</div>
                  <div>
                    <div className="cta-feat-title">{f.title}</div>
                    <div className="cta-feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
