import { Link, useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiSmartphone,
  FiPenTool,
  FiMonitor,
} from 'react-icons/fi';
import { serviceCatalog, serviceLines } from '../data/siteData';

const iconMap = {
  'web-development': FiCode,
  'app-development': FiSmartphone,
  'ui-ux-design': FiPenTool,
  'desktop-development': FiMonitor,
};

const categoryIcons = {
  'Web Development': FiCode,
  'App Development': FiSmartphone,
  'UI/UX Design': FiPenTool,
  'Desktop Development': FiMonitor,
};

const categoryDetails = {
  'Web Development': {
    tagline: 'Responsive websites, portals, dashboards, and full-stack web platforms built for performance.',
    intro: 'We design and build modern web applications that are fast, secure, and ready to scale with your business. From public-facing websites to internal enterprise tools, our team handles strategy, UI engineering, backend integration, and deployment.',
    points: [
      'Responsive websites and business portals',
      'Frontend development with modern frameworks',
      'Backend APIs and enterprise integrations',
      'Performance, accessibility, and SEO optimization',
    ],
  },
  'App Development': {
    tagline: 'Native and cross-platform mobile experiences that feel polished and reliable.',
    intro: 'We build mobile apps that balance great design with dependable engineering. Whether you need iOS, Android, or cross-platform delivery, we help you ship products that users actually want to keep using.',
    points: [
      'iOS and Android development',
      'Cross-platform app delivery',
      'Offline-first and secure app architecture',
      'App modernization and feature enhancement',
    ],
  },
  'UI/UX Design': {
    tagline: 'Research-led interfaces and design systems that improve usability and conversion.',
    intro: 'Our design practice turns messy workflows into clear product experiences. We start with user research, then shape interaction patterns, visual systems, and prototypes that help product teams move with confidence.',
    points: [
      'UX audits and product research',
      'Wireframes and interactive prototypes',
      'Design systems and component libraries',
      'User testing and iterative refinement',
    ],
  },
  'Desktop Development': {
    tagline: 'Secure desktop applications for operational teams, power users, and legacy modernization.',
    intro: 'We build desktop software for environments where reliability, speed, and tight integrations matter. This includes new desktop products as well as modernization projects for older applications that need a better user experience and cleaner architecture.',
    points: [
      'Enterprise desktop applications',
      'Legacy desktop modernization',
      'System integrations and data workflows',
      'Secure deployment and maintenance support',
    ],
  },
};

const specificDetails = {
  'web-platforms': {
    tagline: 'Build scalable web platforms, customer portals, and internal dashboards tailored to your workflows.',
    intro: 'This service is designed for companies that need a full web product, not just a landing page. We shape the architecture, user journeys, and integrations needed to run business-critical web systems.',
    points: ['Custom web portals', 'Business dashboards', 'API-driven workflows', 'Scalable architecture'],
  },
  'frontend-web': {
    tagline: 'Create fast, accessible, and conversion-focused interfaces with modern frontend frameworks.',
    intro: 'Frontend engineering turns product vision into responsive, intuitive interfaces. We build component-driven frontends that feel polished across desktop and mobile.',
    points: ['Component libraries', 'Responsive layouts', 'Performance tuning', 'Accessibility and UX polish'],
  },
  'backend-web': {
    tagline: 'Design secure APIs and backend services that keep your web product reliable.',
    intro: 'Backend development is where logic, security, and integrations come together. We create APIs and services that support growth, automate workflows, and connect your platforms.',
    points: ['REST and integration APIs', 'Business logic services', 'Data and authentication layers', 'Scalable backend architecture'],
  },
  'ios-android-apps': {
    tagline: 'Native mobile apps for iOS and Android that feel fast, intuitive, and dependable.',
    intro: 'For mobile-first products, we build native experiences that maximize performance and platform-specific quality. Each app is structured for clean navigation, offline use, and maintainable releases.',
    points: ['Native iOS apps', 'Native Android apps', 'Offline-capable experiences', 'App store release support'],
  },
  'cross-platform-apps': {
    tagline: 'Shared-code mobile apps that accelerate delivery without compromising quality.',
    intro: 'Cross-platform development is ideal when speed and consistency matter. We help you launch on both major platforms with a single codebase and a strong product experience.',
    points: ['Single-codebase delivery', 'Faster time to market', 'Consistent UI across devices', 'Lower maintenance overhead'],
  },
  'app-modernization': {
    tagline: 'Modernize legacy apps to improve usability, stability, and release speed.',
    intro: 'We refactor and modernize aging applications to keep them useful for the next phase of growth. That can include UX improvements, architectural changes, and integration updates.',
    points: ['Legacy refactoring', 'UX improvement', 'Architecture upgrades', 'Release stabilization'],
  },
  'ux-research': {
    tagline: 'Use research to uncover user needs, pain points, and product opportunities.',
    intro: 'UX research grounds product decisions in real behavior. We help teams understand what users need, where friction exists, and how to prioritize design changes.',
    points: ['User interviews', 'Journey mapping', 'Usability testing', 'Insight synthesis'],
  },
  'ui-design-system': {
    tagline: 'Build reusable design systems that keep digital products consistent and efficient.',
    intro: 'A strong UI design system removes guesswork from design and development. We define components, states, tokens, and usage rules so teams can move faster.',
    points: ['Design tokens', 'Reusable components', 'Visual consistency', 'Handoff-ready documentation'],
  },
  'product-prototyping': {
    tagline: 'Validate concepts early with interactive prototypes before investing in full build.',
    intro: 'Prototyping helps teams test ideas quickly and make better product decisions. We turn concepts into clickable flows that are easy to review, refine, and validate.',
    points: ['Clickable prototypes', 'Concept validation', 'Stakeholder alignment', 'Design iteration support'],
  },
  'desktop-enterprise': {
    tagline: 'Build secure and high-performance desktop software for operational and enterprise teams.',
    intro: 'Enterprise desktop software needs to be dependable, secure, and easy for teams to use all day. We design and build desktop applications that support intensive workflows and business operations.',
    points: ['Operational desktop apps', 'Secure enterprise workflows', 'Internal tool development', 'Reliability-focused delivery'],
  },
  'desktop-modernization': {
    tagline: 'Upgrade legacy desktop software with modern UX, architecture, and maintainability.',
    intro: 'Modernization gives older desktop tools a second life. We improve usability, reduce technical debt, and align your desktop systems with current business needs.',
    points: ['Legacy desktop upgrades', 'User experience refresh', 'Maintainability improvements', 'Integration updates'],
  },
  'desktop-integration': {
    tagline: 'Connect desktop tools with APIs, ERPs, and internal systems for seamless operations.',
    intro: 'Desktop tools are most useful when they move data cleanly across systems. We build integrations that make your software work as part of a larger operational ecosystem.',
    points: ['API connections', 'ERP integrations', 'Workflow automation', 'Data sync and orchestration'],
  },
};

const serviceGroups = [
  {
    title: 'Core delivery',
    items: ['Discovery and scoping', 'UI/UX design', 'Frontend and backend build', 'Quality assurance'],
  },
  {
    title: 'Operational value',
    items: ['Release planning', 'Performance tuning', 'Support and maintenance', 'Iteration and enhancement'],
  },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = serviceCatalog.find((item) => item.id === serviceId) || serviceLines.find((item) => item.id === serviceId);
  const category = service?.category || 'Web Development';
  const categoryDetail = categoryDetails[category] || categoryDetails['Web Development'];
  const specificDetail = specificDetails[serviceId] || {};
  const detail = {
    title: service?.title || 'Service',
    tagline: specificDetail.tagline || categoryDetail.tagline,
    intro: specificDetail.intro || `${service?.blurb || ''} ${categoryDetail.intro}`.trim(),
    points: specificDetail.points || categoryDetail.points,
  };

  if (!service) {
    return (
      <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: 12, color: 'var(--text-white)' }}>Service not found</h1>
          <button className="btn btn-primary" onClick={() => navigate('/services')}>
            Back to Services
          </button>
        </div>
      </main>
    );
  }

  const Icon = iconMap[serviceId] || categoryIcons[category] || FiCode;

  return (
    <main>
      <section className="page-hero service-detail-hero">
        <div className="service-detail-hero-bg" style={{ backgroundImage: `url(${service.image})` }} />
        <div className="container page-hero-content">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-sep">/</span>
            <Link to="/services">Services</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{detail.title}</span>
          </nav>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            {service.category || 'Service'}
          </motion.p>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            {detail.title}
          </motion.h1>
          <motion.p className="page-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }}>
            {detail.tagline}
          </motion.p>
          <motion.div className="services-page-hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a project <FiArrowRight />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              View all services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="service-detail-section section">
        <div className="container">
          <div className="service-detail-grid">
            <motion.div className="service-detail-copy" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="service-detail-icon"><Icon size={24} /></div>
              <h2 className="section-title" style={{ marginTop: 16 }}>{detail.title} for modern product teams</h2>
              <p className="service-detail-intro">{detail.intro}</p>
              <div className="service-detail-points">
                {detail.points.map((point) => (
                  <div key={point} className="service-detail-point">
                    <FiCheck size={14} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="service-detail-visual" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={service.image} alt={service.title} className="service-detail-image" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="service-detail-section alt">
        <div className="container">
          <div className="service-detail-cards">
            {serviceGroups.map((group) => (
              <div key={group.title} className="service-detail-card">
                <div className="service-detail-card-title">{group.title}</div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>
                      <FiCheck size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container cta-content">
          <h2 className="cta-title">Want this service delivered for your team?</h2>
          <p className="cta-subtitle">
            We can scope the work, define milestones, and move from idea to delivery.
          </p>
          <div className="cta-btns">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Talk to us <FiArrowRight />
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Back to services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
