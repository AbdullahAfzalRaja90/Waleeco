import { useMemo, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  FiArrowRight,
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiMonitor,
  FiDatabase,
  FiCloud,
  FiCheckCircle,
} from 'react-icons/fi';
import { serviceCatalog, serviceLines } from '../data/siteData';

const MotionLink = motion(Link);

const serviceIcons = {
  'web-development': FiCode,
  'app-development': FiSmartphone,
  'ui-ux-design': FiPenTool,
  'desktop-development': FiMonitor,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

function CountUp({ end, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const step = end / (duration / 16);
    let current = 0;

    const id = setInterval(() => {
      current += step;
      if (current >= end) {
        setValue(end);
        clearInterval(id);
      } else {
        setValue(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(id);
  }, [inView, end]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const unique = [...new Set(serviceCatalog.map((item) => item.category))];
    return ['All', ...unique];
  }, []);

  const filteredCatalog = useMemo(() => {
    if (activeCategory === 'All') return serviceCatalog;
    return serviceCatalog.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <section className="page-hero services-page-hero">
        <div
          className="services-page-hero-bg"
          style={{
            backgroundImage:
              "linear-gradient(102deg, rgba(7,10,18,0.88) 0%, rgba(7,10,18,0.78) 48%, rgba(7,10,18,0.92) 100%), url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=1700&q=80')",
          }}
        />
        <div className="container page-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Services
          </motion.p>
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Transform your business with
            <span> web, app, UI/UX and desktop engineering</span>
          </motion.h1>
          <motion.p
            className="page-hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            We help companies plan, design, and build digital products across web platforms,
            mobile applications, user experiences, and modern desktop software.
          </motion.p>
          <motion.div
            className="services-page-hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a conversation <FiArrowRight />
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              Why Waleeco
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="services-catalog-section section">
        <div className="container">
          <div className="services-catalog-header">
            <div className="eyebrow">Transform Your Business</div>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Explore our service portfolio
            </h2>
          </div>

          <div className="services-catalog-filters" role="tablist" aria-label="Service categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`services-filter-pill${activeCategory === category ? ' active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="services-showcase-grid services-showcase-grid-page">
            {filteredCatalog.map((item, i) => (
              <MotionLink
                key={item.id}
                className="service-showcase-card"
                to={item.link}
                aria-label={`Open ${item.title}`}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                variants={fadeUp}
              >
                <img src={item.image} alt={item.title} loading="lazy" className="service-showcase-image" />
                <div className="service-showcase-overlay" />
                <div className="service-showcase-content">
                  <div className="service-showcase-chip">{item.category}</div>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
                <div className="service-showcase-link">
                  Explore <FiArrowRight size={14} />
                </div>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      <section className="services-lines-section section">
        <div className="container">
          <div className="services-lines-header">
            <div>
              <div className="eyebrow">Core Service Lines</div>
              <h2 className="section-title" style={{ marginTop: '14px' }}>
                Development services in your domain
              </h2>
            </div>
            <p className="section-subtitle">
              Dedicated engineering and design teams focused on shipping reliable products,
              better user experiences, and scalable software architecture.
            </p>
          </div>

          <div className="services-lines-grid">
            {serviceLines.map((service, i) => {
              const Icon = serviceIcons[service.id] || FiCode;
              return (
                <MotionLink
                  key={service.id}
                  className="service-line-card"
                  to={service.link}
                  aria-label={`Open ${service.title}`}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-30px' }}
                  variants={fadeUp}
                >
                  <div className="service-line-image-wrap">
                    <img src={service.image} alt={service.title} loading="lazy" className="service-line-image" />
                  </div>
                  <div className="service-line-icon" style={{ '--line-color': service.color }}>
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul>
                    <li><FiCheckCircle size={14} /> Consulting</li>
                    <li><FiCheckCircle size={14} /> Engineering</li>
                    <li><FiCheckCircle size={14} /> Managed Services</li>
                  </ul>
                  <div className="btn btn-ghost">
                    Learn more <FiArrowRight />
                  </div>
                </MotionLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-impact-band">
        <div className="container services-impact-grid">
          <div className="services-impact-item">
            <div className="services-impact-number"><CountUp end={300} suffix="+" /></div>
            <div className="services-impact-label">Enterprise projects delivered</div>
          </div>
          <div className="services-impact-item">
            <div className="services-impact-number"><CountUp end={16} suffix="+" /></div>
            <div className="services-impact-label">Countries supported</div>
          </div>
          <div className="services-impact-item">
            <div className="services-impact-number"><CountUp end={95} suffix="%" /></div>
            <div className="services-impact-label">On-time delivery rate</div>
          </div>
          <div className="services-impact-item">
            <div className="services-impact-number"><CountUp end={24} suffix="/7" /></div>
            <div className="services-impact-label">Delivery and support coverage</div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: '18px' }}>Let us build with you</div>
              <h2 className="cta-headline">
                Need a tailored<br />
                <span className="line2">service roadmap</span>?
              </h2>
              <p className="cta-body">
                Share your goals and constraints. We will shape a practical, phased plan aligned
                to your priorities, budget, and operating model.
              </p>
              <div className="cta-actions">
                <Link to="/contact" className="btn btn-primary btn-xl">
                  Talk to our team <FiArrowRight />
                </Link>
              </div>
            </div>

            <div className="cta-right">
              <div className="cta-feature-item">
                <div className="cta-feat-icon"><FiCode /></div>
                <div>
                  <div className="cta-feat-title">Product-first planning</div>
                  <div className="cta-feat-desc">Roadmaps built around release goals, UX quality, and business impact.</div>
                </div>
              </div>
              <div className="cta-feature-item">
                <div className="cta-feat-icon"><FiDatabase /></div>
                <div>
                  <div className="cta-feat-title">Design-to-delivery process</div>
                  <div className="cta-feat-desc">From wireframes to production with transparent collaboration.</div>
                </div>
              </div>
              <div className="cta-feature-item">
                <div className="cta-feat-icon"><FiCloud /></div>
                <div>
                  <div className="cta-feat-title">Scalable engineering teams</div>
                  <div className="cta-feat-desc">Team structures and tooling that grow with your product roadmap.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
