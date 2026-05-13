import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const OFFICES = [
  {
    city: 'Islamabad',
    country: 'Pakistan',
    address: '3rd Floor, Evacuee Trust Complex, F-5/1, Islamabad',
    phone: '+92 312 5612116',
    email: 'info@waleeco.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────────── */}
      <section className="page-hero contact-hero">
        <div className="container">
          <div className="page-hero-content" style={{ maxWidth: 640 }}>
            <FadeUp><p className="eyebrow">Contact</p></FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="hero-title">
                How can we<br /><span className="text-red">help you?</span>
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="hero-subtitle">
                Whether you're exploring a partnership, seeking a custom solution, or have a question about our services — we'd love to hear from you.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── FORM + OFFICES ──────────────────────────────────── */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">

            {/* ── Contact Form */}
            <FadeUp>
              <div className="contact-form-panel">
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: 8 }}>Send us a message</h2>
              <p style={{ color: 'var(--clr-text-muted)', marginBottom: 36, fontSize: '0.95rem' }}>
                Fill in the form and a member of our team will be in touch within one business day.
              </p>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: '48px 40px', background: 'var(--clr-surface)', border: '1px solid var(--clr-primary)', borderRadius: 12, textAlign: 'center' }}>
                  <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 8 }}>Message sent!</h3>
                  <p style={{ color: 'var(--clr-text-muted)' }}>Thank you for reaching out. We'll get back to you within one business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, color: 'var(--clr-text-muted)' }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith"
                        style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, color: 'var(--clr-text-muted)' }}>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com"
                        style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, color: 'var(--clr-text-muted)' }}>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000"
                        style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, color: 'var(--clr-text-muted)' }}>Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                        style={inputStyle} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: 6, color: 'var(--clr-text-muted)' }}>How can we help? *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your project, challenges, or questions..."
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 140 }} />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', padding: '14px 36px', fontSize: '0.95rem' }}>
                    Submit <FiArrowRight />
                  </button>
                </form>
              )}
              </div>
            </FadeUp>

            {/* ── Office Info */}
            <div className="contact-office-column">
              <FadeUp delay={0.15}>
                <div className="contact-office-header">
                  <div className="contact-office-kicker">Our office</div>
                  <h2>Islamabad</h2>
                  <p>Our main point of contact for partnerships, delivery, and support.</p>
                </div>
                <div className="contact-office-list">
                  {OFFICES.map((office, i) => (
                    <motion.div key={i}
                      className="contact-office-card"
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    >
                      <div className="contact-office-card-top">
                        <div className="contact-office-icon-wrap">
                          <FiMapPin className="contact-office-icon" />
                        </div>
                        <div>
                          <div className="contact-office-city-row">
                            <span className="contact-office-city">{office.city}</span>
                            <span className="contact-office-country">{office.country}</span>
                          </div>
                          <div className="contact-office-badges">
                            <span>HQ</span>
                            <span>By appointment</span>
                            <span>Mon-Fri</span>
                          </div>
                        </div>
                      </div>
                      <p className="contact-office-address">{office.address}</p>
                      <div className="contact-office-links">
                        <a href={`tel:${office.phone}`} className="contact-office-link">
                          <FiPhone size={11} />{office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} className="contact-office-link primary">
                          <FiMail size={11} />{office.email}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  width: '100%',
  background: 'var(--clr-surface)',
  border: '1px solid var(--clr-border)',
  borderRadius: 8,
  padding: '12px 16px',
  color: '#fff',
  fontSize: '0.88rem',
  outline: 'none',
  transition: 'border-color 0.25s',
  boxSizing: 'border-box',
};
