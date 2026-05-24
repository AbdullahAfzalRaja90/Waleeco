import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const OFFICES = [
  {
    city: 'Islamabad', country: 'Pakistan',
    address: '3rd Floor, Evacuee Trust Complex, F-5/1, Islamabad',
    phone: '+92 312 5612116', email: 'info@waleeco.com',
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="prem-hero prem-hero--compact">
        <div className="prem-hero-bg" style={{
          backgroundImage: "linear-gradient(108deg,rgba(0,0,0,0.94) 0%,rgba(0,0,0,0.70) 60%,rgba(0,0,0,0.88) 100%), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80')",
        }} />
        <div className="prem-hero-grid-overlay" />
        <div className="container prem-hero-content">
          <motion.div className="eyebrow" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            Contact
          </motion.div>
          <motion.h1 className="prem-hero-title" initial={{ opacity:0, y:32 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.12, duration:0.85, ease:[0.16,1,0.3,1] }}>
            How can we<br /><span className="prem-hero-accent">help you?</span>
          </motion.h1>
          <motion.p className="prem-hero-sub" style={{ maxWidth:520 }} initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3, duration:0.65 }}>
            Whether you're exploring a partnership, seeking a custom solution, or have a question about our services — we'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* ── FORM + OFFICES ───────────────────────────────────── */}
      <section className="prem-section prem-section--dark">
        <div className="container">
          <div className="prem-contact-grid">

            {/* ── Form panel ─────────────────────────────────── */}
            <motion.div className="prem-contact-form-card" initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div className="prem-section-label" style={{ marginBottom:10 }}>Send a Message</div>
              <h2 className="prem-h3" style={{ marginBottom:8 }}>Get in touch with our team</h2>
              <p className="prem-body" style={{ marginBottom:32 }}>
                Fill in the form and a member of our team will be in touch within one business day.
              </p>

              {sent ? (
                <motion.div className="prem-contact-success" initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }}>
                  <div className="prem-contact-success-icon">✓</div>
                  <h3>Message sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within one business day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="prem-contact-form">
                  <div className="prem-form-row">
                    <div className="prem-form-group">
                      <label className="prem-form-label">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className="prem-form-input" />
                    </div>
                    <div className="prem-form-group">
                      <label className="prem-form-label">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className="prem-form-input" />
                    </div>
                  </div>
                  <div className="prem-form-row">
                    <div className="prem-form-group">
                      <label className="prem-form-label">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="prem-form-input" />
                    </div>
                    <div className="prem-form-group">
                      <label className="prem-form-label">Company</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" className="prem-form-input" />
                    </div>
                  </div>
                  <div className="prem-form-group">
                    <label className="prem-form-label">How can we help? *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your project, challenges, or questions..."
                      className="prem-form-input prem-form-textarea" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf:'flex-start' }}>
                    Send Message <FiArrowRight />
                  </button>
                </form>
              )}
            </motion.div>

            {/* ── Office sidebar ─────────────────────────────── */}
            <motion.div className="prem-contact-sidebar" initial={{ opacity:0, x:32 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
              <div className="prem-section-label" style={{ marginBottom:10 }}>Our Office</div>
              <h2 className="prem-h3" style={{ marginBottom:8 }}>Islamabad</h2>
              <p className="prem-body" style={{ marginBottom:32 }}>
                Our main point of contact for partnerships, delivery, and support.
              </p>
              {OFFICES.map((o, i) => (
                <div key={i} className="prem-office-card">
                  <div className="prem-office-card-header">
                    <div className="prem-office-icon-wrap"><FiMapPin size={16} /></div>
                    <div>
                      <div className="prem-office-city">{o.city} <span className="prem-office-country">{o.country}</span></div>
                      <div className="prem-office-tags">
                        <span>HQ</span><span>Mon – Fri</span><span>By appointment</span>
                      </div>
                    </div>
                  </div>
                  <p className="prem-office-address">{o.address}</p>
                  <div className="prem-office-links">
                    <a href={`tel:${o.phone}`} className="prem-office-link"><FiPhone size={12} />{o.phone}</a>
                    <a href={`mailto:${o.email}`} className="prem-office-link prem-office-link--primary"><FiMail size={12} />{o.email}</a>
                  </div>
                </div>
              ))}

              {/* Quick links */}
              <div className="prem-contact-quick">
                <div className="prem-section-label" style={{ marginBottom:16 }}>Quick Links</div>
                <Link to="/services" className="prem-contact-quick-link">Our Services <FiArrowRight size={13} /></Link>
                <Link to="/industries" className="prem-contact-quick-link">Industries <FiArrowRight size={13} /></Link>
                <Link to="/about" className="prem-contact-quick-link">About Waleeco <FiArrowRight size={13} /></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
