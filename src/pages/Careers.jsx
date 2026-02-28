import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiSearch } from 'react-icons/fi';
import {
  jobs, careerStats, careerTracks, careerLocations,
  workingAtSystems, hiringProcess,
} from '../data/siteData';

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const DEPARTMENTS = ['ALL', 'Engineering', 'AI & Data', 'Cloud', 'Business Development', 'HR', 'Finance'];

export default function Careers() {
  const [dept, setDept] = useState('ALL');
  const [search, setSearch] = useState('');
  const [activeTrack, setActiveTrack] = useState(0);

  const filteredJobs = jobs.filter(j => {
    const matchDept = dept === 'ALL' || j.dept === dept;
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.location.toLowerCase().includes(search.toLowerCase());
    return matchDept && matchSearch;
  });

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero careers-hero">
        <div className="container">
          <div className="page-hero-content">
            <FadeUp><p className="eyebrow">Careers</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="hero-title">
                Take your career<br />to the <span className="text-red">next level</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="hero-subtitle">
                6,500+ professionals. 15 countries. One shared mission: using technology to solve the world's hardest problems.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 8 }}>
                <a href="#jobs" className="btn btn-primary">Explore Jobs <FiArrowRight /></a>
                <a href="#working" className="btn btn-outline">Life at Systems</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CAREER TRACKS ───────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">Career Tracks</p>
            <h2 className="section-title">Where do you <span className="text-red">fit in?</span></h2>
          </FadeUp>
          <div style={{ display: 'flex', gap: 12, marginTop: 36, marginBottom: 32, borderBottom: '1px solid var(--clr-border)' }}>
            {careerTracks.map((track, i) => (
              <button key={track.id} onClick={() => setActiveTrack(i)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '12px 24px', fontSize: 14, fontWeight: 600, color: activeTrack === i ? 'var(--clr-primary)' : 'var(--clr-muted)', borderBottom: activeTrack === i ? '2px solid var(--clr-primary)' : '2px solid transparent', marginBottom: -1, transition: 'color 0.2s', fontFamily: 'inherit' }}>
                {track.title}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeTrack} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', paddingTop: 16 }}>
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>{careerTracks[activeTrack].title}</h3>
                  <p style={{ color: 'var(--clr-muted)', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>{careerTracks[activeTrack].desc}</p>
                  <a href="#jobs" className="btn btn-primary">See Openings <FiArrowRight /></a>
                </div>
                <div style={{ height: 280, borderRadius: 14, overflow: 'hidden', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)' }}>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt={careerTracks[activeTrack].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--clr-surface)', borderBottom: '1px solid var(--clr-border)', padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
            {careerStats.map((s, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: 'var(--clr-primary)' }}>{s.number}{s.suffix}</div>
                  <div style={{ color: 'var(--clr-muted)', marginTop: 4, fontSize: '0.9rem' }}>{s.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM THE PEOPLE ─────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <FadeUp>
              <p className="eyebrow">Our People</p>
              <h2 className="section-title">We are <span className="text-red">people first</span></h2>
              <p style={{ color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 24, fontSize: '1.05rem' }}>
                At Systems Limited, people are our greatest asset. We invest in your growth because when you thrive, our clients thrive.
                From graduate trainees to senior architects, every voice shapes our direction.
              </p>
              <p style={{ color: 'var(--clr-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                With offices across Pakistan, the Middle East, UK, Africa, and Southeast Asia, you'll collaborate with world-class
                professionals on projects that matter.
              </p>
              <a href="#jobs" className="btn btn-primary">View Open Roles <FiArrowRight /></a>
            </FadeUp>
            <motion.div style={{ borderRadius: 16, overflow: 'hidden', height: 420 }}
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Team collaboration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LOCATION BUBBLES ─────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">We're Hiring In</p>
            <h2 className="section-title" style={{ marginBottom: 40 }}>Offices across <span className="text-red">4 continents</span></h2>
          </FadeUp>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {careerLocations.map((loc, i) => (
              <motion.div
                key={loc}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 240, damping: 18 }}
                style={{ padding: '10px 22px', borderRadius: 40, border: '1px solid var(--clr-border)', background: 'var(--clr-surface)', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', color: 'var(--clr-text)', cursor: 'default' }}
              >
                {loc}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKING AT SYSTEMS ──────────────────────────────── */}
      <section id="working" className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">Life at Systems</p>
            <h2 className="section-title">Working at <span className="text-red">Systems</span></h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginTop: 48 }}>
            {workingAtSystems.map((card, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="card-hover" style={{ borderRadius: 12, overflow: 'hidden', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', height: '100%' }}>
                  <div style={{ height: 220, overflow: 'hidden' }}>
                    <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      onMouseOver={e => e.target.style.transform = 'scale(1.07)'}
                      onMouseOut={e => e.target.style.transform = 'scale(1)'} />
                  </div>
                  <div style={{ padding: '28px 32px 36px' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: 12, textTransform: 'capitalize' }}>{card.title}</h3>
                    <p style={{ color: 'var(--clr-muted)', lineHeight: 1.7, marginBottom: 20, fontSize: '0.92rem' }}>{card.desc}</p>
                    <button className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '8px 20px' }}>Learn More <FiArrowRight /></button>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">How We Hire</p>
            <h2 className="section-title">Our hiring <span className="text-red">process</span></h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, marginTop: 48 }}>
            {hiringProcess.map((s, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div style={{ padding: 32, background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 12, height: '100%' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--clr-primary)', opacity: 0.3, lineHeight: 1, marginBottom: 16 }}>{s.step}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 12 }}>{s.label}</h3>
                  <p style={{ color: 'var(--clr-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB LISTINGS ────────────────────────────────────── */}
      <section id="jobs" className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">Open Positions</p>
            <h2 className="section-title">Find your <span className="text-red">role</span></h2>
          </FadeUp>

          {/* Filters */}
          <div style={{ display: 'flex', gap: 12, marginTop: 40, marginBottom: 32, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <FiSearch style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--clr-muted)' }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search roles or locations..."
                style={{ background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 8, padding: '10px 16px 10px 38px', color: '#fff', fontSize: '0.88rem', outline: 'none', width: 280 }} />
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {DEPARTMENTS.map(d => (
                <button key={d} onClick={() => setDept(d)}
                  style={{ padding: '8px 16px', borderRadius: 6, border: `1px solid ${dept === d ? 'var(--clr-primary)' : 'var(--clr-border)'}`, background: dept === d ? 'var(--clr-primary)' : 'transparent', color: '#fff', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.25s' }}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={dept + search}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {filteredJobs.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--clr-muted)' }}>No positions found. Try adjusting your search.</div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {filteredJobs.map((job, i) => (
                    <motion.div key={job.title + i}
                      initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 28px', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 10, gap: 16, flexWrap: 'wrap', cursor: 'pointer', transition: 'border-color 0.25s' }}
                      onMouseOver={e => e.currentTarget.style.borderColor = 'var(--clr-primary)'}
                      onMouseOut={e => e.currentTarget.style.borderColor = 'var(--clr-border)'}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: 4 }}>{job.title}</h4>
                        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>{job.dept}</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)' }}>·</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--clr-muted)', display: 'flex', alignItems: 'center', gap: 4 }}><FiMapPin size={11} />{job.location}</span>
                          <span style={{ fontSize: '0.75rem', color: 'var(--clr-primary)', background: 'rgba(230,51,41,0.1)', padding: '2px 10px', borderRadius: 20, fontWeight: 600 }}>{job.type}</span>
                        </div>
                      </div>
                      <button className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '8px 20px', whiteSpace: 'nowrap' }}>
                        Apply Now <FiArrowRight />
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── COMMUNITY CTA ───────────────────────────────────── */}
      <section className="section contact-cta-section">
        <div className="container">
          <div className="contact-cta-inner">
            <FadeUp>
              <h2>Join our talent<br />community</h2>
              <p>Not seeing the right role? Stay connected and be the first to hear about new openings that match your profile.</p>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="contact-cta-actions">
                <a href="#jobs" className="btn btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>
                  Explore Roles <FiArrowRight />
                </a>
                <button className="btn btn-outline">Join Talent Network</button>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}

