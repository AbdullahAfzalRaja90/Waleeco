import { Link } from 'react-router-dom';
import {
  FiLinkedin, FiTwitter, FiFacebook, FiYoutube, FiInstagram,
  FiMail, FiMapPin, FiArrowRight,
} from 'react-icons/fi';

const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'AI Transformation', href: '/services/ai-transformation' },
      { label: 'Data & Analytics',  href: '/services/data' },
      { label: 'Digital',           href: '/services/digital' },
      { label: 'Cloud',             href: '/services/cloud' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Banking & Financial Services', href: '/industries/banking-financial-services' },
      { label: 'Communication',               href: '/industries/communication' },
      { label: 'Public Sector',               href: '/industries/public-sector' },
      { label: 'Health',                      href: '/industries/health' },
      { label: 'Retail',                      href: '/industries/retail' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',            href: '/about' },
      { label: 'Leadership',          href: '/about' },
      { label: 'Careers',             href: '/careers' },
      { label: 'Insights',            href: '/insights' },
      { label: 'Contact Us',          href: '/contact' },
      { label: 'Investor Relations',  href: '/investors' },
    ],
  },
];

const socials = [
  { Icon: FiLinkedin,  href: 'https://www.linkedin.com/company/systems-limited/', label: 'LinkedIn' },
  { Icon: FiTwitter,   href: 'https://twitter.com/SystemsLtd',                    label: 'Twitter'  },
  { Icon: FiFacebook,  href: 'https://www.facebook.com/SystemsLimited/',           label: 'Facebook' },
  { Icon: FiYoutube,   href: 'https://www.youtube.com/SystemsLimited',             label: 'YouTube'  },
  { Icon: FiInstagram, href: 'https://www.instagram.com/systemsltd/',              label: 'Instagram'},
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Newsletter strip ────────────────────────────── */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-text">
            <div className="footer-newsletter-title">Stay ahead of the curve</div>
            <div className="footer-newsletter-sub">Get our latest insights, reports, and company news delivered to your inbox.</div>
          </div>
          <form
            className="footer-newsletter-form"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              className="footer-newsletter-input"
              placeholder="Enter your email address"
            />
            <button type="submit" className="btn btn-primary">
              Subscribe <FiArrowRight />
            </button>
          </form>
        </div>

        {/* ── Main grid ────────────────────────────────────── */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/" className="logo" style={{ marginBottom: 0 }}>
              <div className="logo-icon">
                <div className="logo-icon-bg">SL</div>
              </div>
              <div className="logo-text-wrap">
                <span className="logo-name">Systems Limited</span>
                <span className="logo-tagline">Technology Transformation</span>
              </div>
            </Link>

            <p className="footer-brand-desc">
              A global technology and IT services company helping businesses reimagine
              their future through digital transformation, AI, and cloud-powered solutions.
            </p>

            <div className="footer-social">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="social-btn"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 11 }}>
              <a
                href="mailto:inquiry@systemsltd.com"
                style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
              >
                <FiMail size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                inquiry@systemsltd.com
              </a>
              <span style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, color: 'var(--text-secondary)' }}>
                <FiMapPin size={14} style={{ color: 'var(--red)', flexShrink: 0 }} />
                Islamabad, Pakistan (HQ)
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerCols.map(col => (
            <div key={col.title}>
              <div className="footer-col-title">{col.title}</div>
              <ul className="footer-links">
                {col.links.map(lnk => (
                  <li key={lnk.label}>
                    <Link to={lnk.href} className="footer-link">{lnk.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {year} Systems Limited. All rights reserved.
          </div>
          <nav className="footer-legal-links">
            <a href="/" className="footer-legal-link">Privacy Policy</a>
            <a href="/" className="footer-legal-link">Terms of Use</a>
            <a href="/" className="footer-legal-link">Cookie Policy</a>
            <a href="/" className="footer-legal-link">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
