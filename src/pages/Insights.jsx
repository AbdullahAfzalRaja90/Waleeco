import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { allInsights, chronicles } from '../data/siteData';

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const TABS = ['ALL', 'NEWSROOM', 'BLOG', 'CASE STUDY', 'WHITEPAPER'];

export default function Insights() {
  const [tab, setTab] = useState('ALL');
  const [search, setSearch] = useState('');
  const scrollRef = useRef(null);

  const filtered = allInsights.filter(item => {
    const matchTab = tab === 'ALL' || item.type === tab;
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const featured = allInsights[0];

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero insights-hero">
        <div className="container">
          <div className="page-hero-content">
            <FadeUp><p className="eyebrow">Insights</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="hero-title">
                Perspectives,<br /><span className="text-red">articles</span> &<br />research
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="hero-subtitle">
                Thought leadership from our experts — covering AI, cloud, digital transformation,
                and the trends reshaping industries globally.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── SPOTLIGHT / FEATURED ────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp><p className="eyebrow" style={{ marginBottom: 32 }}>Spotlight</p></FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center' }}>
            <motion.div style={{ borderRadius: 16, overflow: 'hidden', height: 400 }}
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img src={featured.img} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            <FadeUp delay={0.15}>
              <span className="tag">{featured.type}</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800, lineHeight: 1.2, margin: '16px 0 16px' }}>
                {featured.title}
              </h2>
              <p style={{ color: 'var(--clr-muted)', lineHeight: 1.7, marginBottom: 28 }}>{featured.excerpt}</p>
              <Link to={featured.link} className="btn btn-primary">
                Read More <FiArrowUpRight />
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CHRONICLES OF CHANGE ────────────────────────────── */}
      <section className="section chronicles-section" style={{ background: 'var(--clr-bg)', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
            <FadeUp>
              <p className="eyebrow" style={{ marginBottom: 6 }}>Chronicles of Change</p>
              <h2 style={{ fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 800 }}>Stories that move the world</h2>
            </FadeUp>
            <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
              <button
                aria-label="Scroll left"
                onClick={() => scrollRef.current?.scrollBy({ left: -340, behavior: 'smooth' })}
                style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--clr-border)', background: 'var(--clr-surface)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                aria-label="Scroll right"
                onClick={() => scrollRef.current?.scrollBy({ left: 340, behavior: 'smooth' })}
                style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--clr-border)', background: 'var(--clr-surface)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div
          ref={scrollRef}
          style={{ display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingLeft: 'max(24px, calc((100vw - 1280px)/2 + 24px))', paddingRight: 24, paddingBottom: 8, scrollbarWidth: 'none' }}
        >
          {chronicles.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ minWidth: 320, maxWidth: 320, background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-lg)', padding: '28px 24px', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--clr-primary)', textTransform: 'uppercase' }}>{c.label}</span>
              <h3 style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.4, color: 'var(--clr-white)' }}>{c.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--clr-muted)', lineHeight: 1.6, flex: 1 }}>{c.sub}</p>
              <Link to={c.link} style={{ fontSize: 12, fontWeight: 700, color: 'var(--clr-primary)', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Read More <FiArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ─────────────────────────────────────── */}
      <section style={{ background: 'var(--clr-bg3)', padding: '64px 0' }}>
        <div className="container">
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', color: 'var(--clr-primary)', lineHeight: 1, marginBottom: 24 }}>"</div>
            <p style={{ fontSize: 'clamp(1.1rem,2vw,1.4rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>
              Waleeco's ability to deliver on large-scale projects is second to none.
              Their industry-savvy business consultants and technical team's open, responsive and
              highly professional approach helped us go live in under six months.
            </p>
            <div>
              <p style={{ fontWeight: 700, marginBottom: 4 }}>Rehan Qadri</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--clr-muted)' }}>Director Digital Business Transformation, Khaadi</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL INSIGHTS ────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <h2 className="section-title" style={{ marginBottom: 32 }}>Latest Posts</h2>
          </FadeUp>

          {/* Search + Tabs */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: 240 }}>
              <FiSearch style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-text-dim)' }} />
              <input
                value={search} onChange={e => setSearch(e.target.value)}
                placeholder="Search insights..."
                style={{ width: '100%', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 8, padding: '11px 16px 11px 40px', color: '#fff', fontSize: '0.88rem', outline: 'none' }}
              />
            </div>
            <div className="insights-tabs" style={{ margin: 0 }}>
              {TABS.map(t => (
                <button key={t} className={`insight-tab${tab === t ? ' active' : ''}`} onClick={() => setTab(t)}>{t}</button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={tab + search}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}>
              {filtered.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--clr-muted)' }}>
                  No results found. Try a different search or filter.
                </div>
              ) : (
                <div className="insights-grid">
                  {filtered.map((item, i) => (
                    <motion.div key={item.id} className="insight-card card-hover"
                      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}>
                      <div className="insight-card-img">
                        <img src={item.img} alt={item.title} loading="lazy" />
                      </div>
                      <div className="insight-card-body">
                        <span className="tag">{item.type}</span>
                        <h3>{item.title}</h3>
                        <p>{item.excerpt}</p>
                        <Link to={item.link} className="insight-read-more">
                          Read more <FiArrowUpRight />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section contact-cta-section">
        <div className="container">
          <div className="contact-cta-inner">
            <FadeUp>
              <h2>Stay ahead of<br />the curve</h2>
              <p>Subscribe to our newsletter for the latest insights from our thought leaders.</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="contact-cta-actions">
                <div style={{ display: 'flex', gap: 8, width: '100%', maxWidth: 420 }}>
                  <input type="email" placeholder="Your email address"
                    style={{ flex: 1, background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 4, padding: '12px 16px', color: '#fff', fontSize: '0.88rem', outline: 'none' }} />
                  <button className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>Subscribe</button>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

