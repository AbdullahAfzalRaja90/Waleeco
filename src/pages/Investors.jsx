import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiExternalLink } from 'react-icons/fi';

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const REPORTS = [
  { year: '2024', title: 'Annual Report 2024', size: '4.2 MB', type: 'PDF' },
  { year: '2023', title: 'Annual Report 2023', size: '3.8 MB', type: 'PDF' },
  { year: '2022', title: 'Annual Report 2022', size: '3.5 MB', type: 'PDF' },
  { year: '2021', title: 'Annual Report 2021', size: '3.1 MB', type: 'PDF' },
];

const GOVERNANCE = [
  { title: 'Board of Directors', desc: 'Experienced leaders with deep expertise in technology, finance and governance.' },
  { title: 'Audit Committee', desc: 'Ensuring financial integrity, risk management and regulatory compliance.' },
  { title: 'HR & Remuneration Committee', desc: 'Overseeing executive compensation and talent strategies.' },
  { title: 'Technical Committee', desc: 'Guiding technology direction and innovation strategy.' },
];

export default function Investors() {
  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero investors-hero">
        <div className="container">
          <div className="page-hero-content">
            <FadeUp><p className="eyebrow">Investor Relations</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="hero-title">
                Creating value,<br /><span className="text-red">sustainably</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="hero-subtitle">
                Financial information, governance structure, and shareholder resources for current and prospective investors in Systems Limited (PSX: SYS).
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── STOCK SNAPSHOT ──────────────────────────────────── */}
      <section style={{ background: 'var(--clr-surface)', borderBottom: '1px solid var(--clr-border)', padding: '40px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 24 }}>
            {[
              { label: 'Share Price (PKR)', value: '134.37', change: '+0.04%', up: true },
              { label: 'Market Cap', value: '₨ 27.1B', change: '', up: null },
              { label: '52-Week High', value: '162.00', change: '', up: null },
              { label: '52-Week Low', value: '94.50', change: '', up: null },
              { label: 'Exchange', value: 'PSX', change: 'Ticker: SYS', up: null },
            ].map((stat, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.1rem,2vw,1.6rem)', fontWeight: 800, color: stat.up === true ? '#22c55e' : stat.up === false ? 'var(--clr-primary)' : '#fff' }}>
                    {stat.value}
                  </div>
                  {stat.change && <div style={{ fontSize: '0.78rem', color: stat.up === true ? '#22c55e' : 'var(--clr-text-muted)', marginTop: 2 }}>{stat.change}</div>}
                  <div style={{ fontSize: '0.75rem', color: 'var(--clr-text-dim)', marginTop: 4 }}>{stat.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANNUAL REPORTS ──────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">Reports</p>
            <h2 className="section-title">Annual <span className="text-red">Reports</span></h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20, marginTop: 48 }}>
            {REPORTS.map((r, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="card-hover" style={{ padding: '32px 28px', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 12 }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--clr-primary)', opacity: 0.2, lineHeight: 1, marginBottom: 16 }}>{r.year}</div>
                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, marginBottom: 4 }}>{r.title}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'var(--clr-text-dim)', marginBottom: 24 }}>{r.type} · {r.size}</p>
                  <button className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <FiDownload size={13} /> Download
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORPORATE GOVERNANCE ────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg2)' }}>
        <div className="container">
          <FadeUp>
            <p className="eyebrow">Governance</p>
            <h2 className="section-title">Corporate <span className="text-red">Governance</span></h2>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, marginTop: 48 }}>
            {GOVERNANCE.map((g, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div style={{ padding: '32px', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 12 }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: 10 }}>{g.title}</h3>
                  <p style={{ color: 'var(--clr-text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{g.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PSX NOTICE ──────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <FadeUp>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: 16 }}>
                Listed on the <span className="text-red">Pakistan Stock Exchange</span>
              </h2>
              <p style={{ color: 'var(--clr-text-muted)', lineHeight: 1.8, marginBottom: 32 }}>
                Systems Limited (SYS) is listed on the Pakistan Stock Exchange. For real-time share price data, company filings, and regulatory disclosures, visit the PSX website.
              </p>
              <a href="https://www.psx.com.pk" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View on PSX <FiExternalLink />
              </a>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
