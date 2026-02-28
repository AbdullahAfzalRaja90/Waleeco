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
    city: 'Islamabad (HQ)',
    country: 'Pakistan',
    address: '3rd Floor, Evacuee Trust Complex, F-5/1, Islamabad',
    phone: '+92 51 111 797 836',
    email: 'info@waleeco.com',
  },
  {
    city: 'Karachi',
    country: 'Pakistan',
    address: 'Suite 1001, 10th Floor, Lakson Square Building No. 3, Sarwar Shaheed Road, Karachi',
    phone: '+92 21 111 797 836',
    email: 'info@waleeco.com',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    address: 'Office 1901, Level 19, Boulevard Plaza Tower 1, Downtown Dubai',
    phone: '+971 4 123 4567',
    email: 'uae@waleeco.com',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '1 Canada Square, Canary Wharf, London E14 5AB',
    phone: '+44 20 1234 5678',
    email: 'uk@waleeco.com',
  },
  {
    city: 'Doha',
    country: 'Qatar',
    address: 'West Bay Business Centre, Doha',
    phone: '+974 44 123 456',
    email: 'qatar@waleeco.com',
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia',
    address: 'King Fahd Road, Al Olaya District, Riyadh',
    phone: '+966 11 234 5678',
    email: 'ksa@waleeco.com',
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
      <section className="section" style={{ background: 'var(--clr-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'start' }}>

            {/* ── Contact Form */}
            <FadeUp>
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
            </FadeUp>

            {/* ── Office Info */}
            <div>
              <FadeUp delay={0.15}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 8 }}>Our offices</h2>
                <p style={{ color: 'var(--clr-text-muted)', marginBottom: 32, fontSize: '0.9rem' }}>
                  Presence across Pakistan, Middle East, UK, Africa and Southeast Asia.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {OFFICES.map((office, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                      style={{ padding: '22px 24px', background: 'var(--clr-surface)', border: '1px solid var(--clr-border)', borderRadius: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                        <FiMapPin style={{ color: 'var(--clr-primary)', flexShrink: 0 }} />
                        <div>
                          <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{office.city}</span>
                          <span style={{ color: 'var(--clr-text-muted)', fontSize: '0.8rem', marginLeft: 8 }}>{office.country}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: 'var(--clr-text-muted)', lineHeight: 1.5, paddingLeft: 24, marginBottom: 4 }}>{office.address}</p>
                      <div style={{ paddingLeft: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                        <a href={`tel:${office.phone}`} style={{ fontSize: '0.78rem', color: 'var(--clr-text-dim)', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
                          <FiPhone size={11} />{office.phone}
                        </a>
                        <a href={`mailto:${office.email}`} style={{ fontSize: '0.78rem', color: 'var(--clr-primary)', display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
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
