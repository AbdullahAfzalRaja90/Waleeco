import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { industries } from '../data/siteData';

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Industries() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="prem-hero">
        <div className="prem-hero-bg" style={{
          backgroundImage: "linear-gradient(120deg,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.65) 55%,rgba(0,0,0,0.82) 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')",
        }} />
        <div className="prem-hero-grid-overlay" />
        <div className="container prem-hero-content">
          <motion.div className="eyebrow" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            Industries
          </motion.div>
          <motion.h1 className="prem-hero-title" initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1, duration:0.85, ease:[0.16,1,0.3,1] }}>
            Deep expertise<br /><span className="prem-hero-accent">across every</span><br />sector
          </motion.h1>
          <motion.p className="prem-hero-sub" initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.28, duration:0.65 }}>
            We bring industry-specific knowledge and proven frameworks to help enterprises in every sector navigate transformation and unlock lasting growth.
          </motion.p>
          <motion.div className="prem-hero-actions" initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.42, duration:0.6 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Talk to a Specialist <FiArrowRight /></Link>
            <Link to="/services" className="btn btn-outline btn-lg">Our Services</Link>
          </motion.div>
        </div>
        <div className="prem-hero-scroll">
          <div className="prem-hero-scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── SECTOR LABEL ───────────────────────────────────── */}
      <section className="prem-section prem-section--dark">
        <div className="container">
          <motion.div className="prem-section-header prem-section-header--split"
            initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            transition={{ duration:0.7 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom:16 }}>Sectors We Serve</div>
              <h2 className="prem-h2">Transforming industries<br />around the <span className="prem-accent-text">globe</span></h2>
            </div>
            <p className="prem-body-lg" style={{ maxWidth:440, alignSelf:'flex-end' }}>
              Each sector we serve gets a dedicated team with deep domain expertise, purpose-built frameworks, and proven delivery.
            </p>
          </motion.div>

          {/* ── Bento card grid ─────────────────────────────── */}
          <div className="prem-industries-bento">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                className={`prem-ind-card prem-ind-card--${i}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, margin:'-60px' }}
                variants={fadeUp}
              >
                <Link to={`/industries/${ind.id}`} className="prem-ind-card-inner" style={{ '--ind-clr': ind.color || 'var(--red)' }}>
                  <img src={ind.img} alt={ind.title} className="prem-ind-card-img" loading="lazy" />
                  <div className="prem-ind-card-overlay" />
                  <div className="prem-ind-card-body">
                    <div className="prem-ind-card-chip">Industry</div>
                    <h3 className="prem-ind-card-title">{ind.title}</h3>
                    <p className="prem-ind-card-desc">{ind.desc}</p>
                    <div className="prem-ind-card-cta">
                      Explore <FiArrowUpRight size={13} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTOR LIST — editorial row list ───────────────── */}
      <section className="prem-section prem-section--mid">
        <div className="container">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.65 }}>
            <div className="eyebrow" style={{ marginBottom:12 }}>Explore by sector</div>
            <h2 className="prem-h2" style={{ marginBottom:48 }}>Every vertical, <span className="prem-accent-text">one partner</span></h2>
          </motion.div>

          <div className="prem-ind-list">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true, margin:'-40px' }}
                variants={fadeUp}
              >
                <Link to={`/industries/${ind.id}`} className="prem-ind-row" style={{ '--ind-clr': ind.color || 'var(--red)' }}>
                  <div className="prem-ind-row-num">0{i+1}</div>
                  <div className="prem-ind-row-body">
                    <h3 className="prem-ind-row-title">{ind.title}</h3>
                    <p className="prem-ind-row-desc">{ind.desc}</p>
                  </div>
                  <div className="prem-ind-row-arrow">
                    <FiArrowRight size={18} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="prem-cta-banner">
        <div className="prem-cta-banner-glow" />
        <div className="container prem-cta-banner-inner">
          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="eyebrow" style={{ justifyContent:'center', marginBottom:20 }}>Ready to get started?</div>
            <h2 className="prem-cta-heading">Ready to transform<br />your industry?</h2>
            <p className="prem-cta-sub">Our sector specialists are ready to partner with you on every step of the journey.</p>
            <div className="prem-cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Let's Talk <FiArrowRight /></Link>
              <Link to="/services" className="btn btn-outline btn-lg">Our Services</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
