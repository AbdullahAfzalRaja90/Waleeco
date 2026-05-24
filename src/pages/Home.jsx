import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FiArrowRight, FiArrowUpRight, FiChevronLeft, FiChevronRight,
  FiZap, FiShield, FiTrendingUp,
} from 'react-icons/fi';
import {
  heroSlides, stats,
  industries, serviceCatalog,
} from '../data/siteData';

const MotionLink = motion(Link);

/* ── CTA feature items ───────────────────────────────────────── */
const ctaFeatures = [
  { icon: <FiZap />,       title: 'AI-first delivery',    desc: 'Every engagement powered by machine learning and advanced analytics.' },
  { icon: <FiShield />,    title: 'Enterprise security',  desc: 'ISO 27001 certified with SOC 2 compliant processes end-to-end.' },
  { icon: <FiTrendingUp />,title: 'Measurable outcomes',  desc: 'SLA-backed commitments with real-time dashboards and KPIs.' },
];

const testimonials = [
  {
    quote: 'Waleeco brought structure, speed, and clarity to a complex transformation program. Their team felt like an extension of ours from day one.',
    name: 'Rehan Qadri',
    role: 'Director Digital Business Transformation',
    company: 'Khaadi',
    initials: 'RQ',
    accent: 'rgba(30, 95, 214, 0.18)',
  },
  {
    quote: 'The team translated strategy into delivery with rare consistency. We saw faster decisions, cleaner execution, and a much stronger operating rhythm.',
    name: 'Ayesha Malik',
    role: 'Chief Operating Officer',
    company: 'Nexa Retail Group',
    initials: 'AM',
    accent: 'rgba(230, 51, 41, 0.18)',
  },
  {
    quote: 'What stood out most was the quality of collaboration. Waleeco kept the program moving without losing sight of business outcomes.',
    name: 'Hamza Shah',
    role: 'VP Technology',
    company: 'Atlas Financial',
    initials: 'HS',
    accent: 'rgba(16, 185, 129, 0.18)',
  },
  {
    quote: 'They helped us modernize a legacy environment without disrupting service. The rollout was disciplined, practical, and well-managed.',
    name: 'Sara Ahmed',
    role: 'Head of Digital Platforms',
    company: 'Mena Connect',
    initials: 'SA',
    accent: 'rgba(245, 158, 11, 0.18)',
  },
  {
    quote: 'We needed a partner that could think beyond implementation. Waleeco delivered a roadmap, a delivery engine, and measurable progress.',
    name: 'Omar Farooq',
    role: 'Managing Director',
    company: 'Northstar Holdings',
    initials: 'OF',
    accent: 'rgba(124, 58, 237, 0.18)',
  },
  {
    quote: 'Their combination of technical depth and business understanding made the difference. It was a smooth engagement with real impact.',
    name: 'Mariam Yusuf',
    role: 'Chief Transformation Officer',
    company: 'Crescent Enterprises',
    initials: 'MY',
    accent: 'rgba(59, 130, 246, 0.18)',
  },
];

/* ── Animation variant ───────────────────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerFadeUp = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
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
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const total = heroSlides.length;
  const testimonialTotal = testimonials.length;

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % total), 7000);
    return () => clearInterval(t);
  }, [total]);

  useEffect(() => {
    const t = setInterval(() => setTestimonialIndex(s => (s + 1) % testimonialTotal), 6500);
    return () => clearInterval(t);
  }, [testimonialTotal]);

  const prev = () => setSlide(s => (s - 1 + total) % total);
  const next = () => setSlide(s => (s + 1) % total);
  const prevTestimonial = () => setTestimonialIndex(s => (s - 1 + testimonialTotal) % testimonialTotal);
  const nextTestimonial = () => setTestimonialIndex(s => (s + 1) % testimonialTotal);
  const current = heroSlides[slide];
  const currentTestimonial = testimonials[testimonialIndex];

  return (
    <main>
      {/* ══ HERO ════════════════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-mesh">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              className="hero-mesh-bg"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <video
                className="hero-mesh-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={current.bg}
              >
                <source src={current.videoSrc} type="video/mp4" />
              </video>
              <div className="hero-mesh-overlay" />
            </motion.div>
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
                  {[
                    { text: current.titleLine1, className: '' , delay: 0 },
                    { text: current.titleLine2, className: 'grad-text', delay: 0.08 },
                    { text: current.titleLine3, className: '', delay: 0.16 },
                  ].map(({ text, className, delay }, index) => (
                    <span className="hero-headline-line" key={`${slide}-line-${index}`}>
                      <motion.span
                        className={className || undefined}
                        initial={{ y: '105%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
                        style={{ visibility: text ? 'visible' : 'hidden' }}
                      >
                        {text || '\u00A0'}
                      </motion.span>
                    </span>
                  ))}
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
                  LEARN MORE <FiArrowRight />
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg">
                  Our Story
                </Link>
              </motion.div>
            </div>
          </div>
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

      {/* ══ SERVICES — transformation grid ═══════════════════════ */}
      <section className="services-section section">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="eyebrow">Our Services</div>
              <h2 className="section-title services-title">
                Transform Your Business
              </h2>
            </div>
            <div>
              <p className="section-subtitle">
                We specialize in web development, app development, UI/UX design, and desktop engineering to help you launch and scale digital products.
              </p>
            </div>
          </div>

          <motion.div
            className="services-showcase-grid"
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {serviceCatalog.map((item) => (
              <MotionLink
                key={item.id}
                className="service-showcase-card"
                to={item.link}
                aria-label={`Open ${item.title}`}
                variants={fadeUpItem}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="service-showcase-image" />
                <div className="service-showcase-overlay" />
                <div className="service-showcase-content">
                  <div className="service-showcase-chip">{item.category}</div>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
                <div className="service-showcase-link">
                  Explore <FiArrowUpRight size={14} />
                </div>
              </MotionLink>
            ))}
          </motion.div>

          <div className="services-showcase-footer">
            <Link to="/services" className="btn btn-outline">
              View all services <FiArrowRight />
            </Link>
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

      {/* ══ QUOTE ════════════════════════════════════════════════ */}
      <section className="quote-section">
        <div className="container">
          <motion.div
            className="testimonial-slider"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="testimonial-slider-head">
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Testimonials</div>
                <h2 className="section-title" style={{ margin: 0 }}>What clients say about working with us</h2>
              </div>
              <div className="testimonial-controls">
                <button className="testimonial-arrow" onClick={prevTestimonial} aria-label="Previous testimonial">
                  <FiChevronLeft size={18} />
                </button>
                <button className="testimonial-arrow" onClick={nextTestimonial} aria-label="Next testimonial">
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="testimonial-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  className="testimonial-card"
                  style={{ '--testimonial-accent': currentTestimonial.accent }}
                  initial={{ opacity: 0, y: 24, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="testimonial-quote-mark">“</div>
                  <p className="testimonial-quote">{currentTestimonial.quote}</p>

                  <div className="testimonial-meta">
                    <div className="testimonial-avatar" aria-hidden="true">
                      {currentTestimonial.initials}
                    </div>
                    <div>
                      <div className="testimonial-name">{currentTestimonial.name}</div>
                      <div className="testimonial-role">{currentTestimonial.role}</div>
                      <div className="testimonial-company">{currentTestimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="testimonial-footer">
              <div className="testimonial-dots" aria-label="Testimonial navigation">
                {testimonials.map((item, index) => (
                  <button
                    key={item.name}
                    className={`testimonial-dot${index === testimonialIndex ? ' active' : ''}`}
                    onClick={() => setTestimonialIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="testimonial-counter">
                {String(testimonialIndex + 1).padStart(2, '0')} / {String(testimonialTotal).padStart(2, '0')}
              </div>
            </div>
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
