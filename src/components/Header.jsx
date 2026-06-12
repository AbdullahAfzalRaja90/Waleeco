import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiChevronDown, FiSearch, FiX, FiGlobe, FiArrowRight } from 'react-icons/fi';
import { navData } from '../data/siteData';

const regions = [
  { label: 'Global',   flag: '🌐', href: '/' },
  { label: 'MEA',      flag: '🇦🇪', href: '/' },
  { label: 'KSA',      flag: '🇸🇦', href: '/' },
  { label: 'APAC',     flag: '🇸🇬', href: '/' },
  { label: 'Europe',   flag: '🇬🇧', href: '/' },
];

export default function Header() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [searchOpen, setSearchOpen]     = useState(false);
  const [expandedMobile, setExpanded]   = useState(null);
  const [searchQuery, setSearchQuery]   = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef  = useRef(null);
  const location   = useLocation();
  const navigate   = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); setExpanded(null); }, [location]);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Search filtering logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = [];

    // Search through navigation items
    navData.forEach((item) => {
      // Check main label
      if (item.label.toLowerCase().includes(query)) {
        results.push({
          type: 'page',
          title: item.label,
          href: item.href,
          category: 'Pages',
        });
      }

      // Check children (services and industries)
      if (item.children) {
        item.children.forEach((group) => {
          group.links.forEach((link) => {
            if (link.label.toLowerCase().includes(query)) {
              results.push({
                type: item.label.toLowerCase(),
                title: link.label,
                href: link.href,
                category: group.group,
                icon: link.icon,
              });
            }
          });
        });
      }
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
  }, [searchQuery]);

  const handleSearchResultClick = (href) => {
    setSearchOpen(false);
    setSearchQuery('');
    navigate(href);
  };

  const toggleMobile = (label) => setExpanded(p => p === label ? null : label);

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container header-inner">

          {/* ── Logo ─────────────────────────────────────────── */}
          <Link to="/" className="logo">
            <img src="/MainLogo.png" alt="Waleeco logo" className="logo-img" />
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav aria-label="Main navigation">
            <ul className="nav-list">
              {navData.map((item) => (
                <li key={item.label} className="nav-item">
                  {item.children ? (
                    <>
                      <button className="nav-link">
                        {item.label}
                        <FiChevronDown size={12} />
                      </button>
                      <div className="megamenu">
                        <div
                          className="megamenu-grid"
                          style={{ gridTemplateColumns: `repeat(${item.children.length}, 1fr)` }}
                        >
                          {item.children.map((grp) => (
                            <div key={grp.group} className="megamenu-group">
                              <div className="megamenu-group-title">{grp.group}</div>
                              {grp.links.map((lnk) => (
                                <Link key={lnk.label} to={lnk.href} className="megamenu-link">
                                  <span className="megamenu-link-icon">{lnk.icon}</span>
                                  {lnk.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : item.href ? (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                    >
                      {item.label}
                    </NavLink>
                  ) : null}
                </li>
              ))}

            </ul>
          </nav>

          {/* ── Header right ──────────────────────────────────── */}
          <div className="header-right">
            <button
              className="header-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <FiSearch size={17} />
            </button>
            <Link to="/contact" className="btn btn-primary btn-sm">
              Get in Touch
            </Link>
            <button
              className={`hamburger${mobileOpen ? ' open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Nav ───────────────────────────────────────── */}
      <nav className={`mobile-nav${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navData.map((item) => (
          <div key={item.label}>
            {item.children ? (
              <>
                <button
                  className="mobile-nav-link"
                  style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontWeight: 'inherit', fontFamily: 'inherit' }}
                  onClick={() => toggleMobile(item.label)}
                >
                  {item.label}
                  <FiChevronDown
                    size={14}
                    style={{ transform: expandedMobile === item.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
                  />
                </button>
                {expandedMobile === item.label && (
                  <div className="mobile-nav-sub">
                    {item.children.flatMap(grp => grp.links.map(lnk => (
                      <Link key={lnk.label} to={lnk.href}>{lnk.label}</Link>
                    )))}
                  </div>
                )}
              </>
            ) : item.href ? (
              <Link to={item.href} className="mobile-nav-link">{item.label}</Link>
            ) : null}
          </div>
        ))}


        <Link
          to="/contact"
          className="btn btn-primary"
          style={{ marginTop: 24, width: '100%', justifyContent: 'center' }}
        >
          Get in Touch <FiArrowRight />
        </Link>
      </nav>

      {/* ── Search modal ─────────────────────────────────────── */}
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)}>
          <div className="search-box" onClick={e => e.stopPropagation()}>
            <div className="search-input-row">
              <FiSearch size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search services and industries…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setSearchOpen(false);
                }}
              />
              <button onClick={() => setSearchOpen(false)} style={{ color: 'var(--text-muted)' }}>
                <FiX size={20} />
              </button>
            </div>
            {searchQuery.trim() && (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      className="search-result-item"
                      onClick={() => handleSearchResultClick(result.href)}
                    >
                      <div className="search-result-icon">{result.icon || '→'}</div>
                      <div className="search-result-content">
                        <div className="search-result-title">{result.title}</div>
                        <div className="search-result-category">{result.category}</div>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="search-no-results">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
            {!searchQuery.trim() && (
              <div className="search-hint">Start typing to search across Waleeco…</div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
