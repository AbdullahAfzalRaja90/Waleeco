/* ================================================================
   WALEECO — EXACT CONTENT DATA
   Source: waleeco.com (thoroughly examined March 2026)
   ================================================================ */

// ── HERO SLIDES (exact text from homepage slider) ──────────────
export const heroSlides = [
  {
    id: 1,
    eyebrow: '',
    titleLine1: 'AI Powered',
    titleLine2: 'Business Focus',
    titleLine3: '',
    subtitle: '',
    cta: 'LEARN MORE',
    ctaLink: '/contact',
    videoSrc: '/Waleeco/video%202.mp4',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    accent: '#e63329',
  },
  {
    id: 2,
    eyebrow: '',
    titleLine1: 'Built for',
    titleLine2: 'modern business',
    titleLine3: '',
    subtitle: '',
    cta: 'LEARN MORE',
    ctaLink: '/services/ai-transformation',
    videoSrc: '/Waleeco/video%201.mp4',
    bg: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80',
    accent: '#e63329',
  },
];

// ── ROTATING WORDS (Services section) ─────────────────────────
export const rotatingWords = ['innovation', 'possibilities', 'impact'];

// ── SERVICES (homepage 4 cards) ───────────────────────────────
export const services = [
  {
    id: 'ai-transformation',
    title: 'AI transformation',
    desc: 'We maximize the power and promise of AI to drive transformative business outcomes through our comprehensive AI consulting services and solutions.',
    link: '/services/ai-transformation',
    color: '#7c3aed',
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    desc: 'We enable enterprises to transform data into a business advantage by tapping into the capabilities of ML, advanced analytics, generative AI, and connected intelligence.',
    link: '/services/data',
    color: '#0ea5e9',
  },
  {
    id: 'digital',
    title: 'Digital',
    desc: 'We offer core insights-driven digital transformation capabilities, modernize key systems to accelerate innovation, and provide a design-led, unified, and personalized experience.',
    link: '/services/digital',
    color: '#10b981',
  },
  {
    id: 'cloud',
    title: 'Cloud',
    desc: 'We help enterprises scale and adapt to evolving needs within a secure hybrid or pure cloud environment by leveraging end-to-end and outcome-based cloud solutions.',
    link: '/services/cloud',
    color: '#f59e0b',
  },
];

// ── SERVICE CATALOG (homepage + services page cards) ──────────
export const serviceCatalog = [
  {
    id: 'web-platforms',
    title: 'Custom Web Platforms',
    category: 'Web Development',
    blurb: 'Build scalable web applications, portals, and dashboards tailored to your business workflows.',
    link: '/services/web-platforms',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80',
  },
  {
    id: 'frontend-web',
    title: 'Frontend Engineering',
    category: 'Web Development',
    blurb: 'Create fast, accessible, and conversion-focused interfaces with modern frontend frameworks.',
    link: '/services/frontend-web',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
  },
  {
    id: 'backend-web',
    title: 'Backend & API Development',
    category: 'Web Development',
    blurb: 'Design secure APIs, business logic, and integrations that power reliable digital products.',
    link: '/services/backend-web',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80',
  },
  {
    id: 'ios-android-apps',
    title: 'iOS & Android Apps',
    category: 'App Development',
    blurb: 'Develop polished mobile apps with strong performance, offline support, and secure architecture.',
    link: '/services/ios-android-apps',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80',
  },
  {
    id: 'cross-platform-apps',
    title: 'Cross-Platform Apps',
    category: 'App Development',
    blurb: 'Launch shared-codebase applications for faster delivery across mobile ecosystems.',
    link: '/services/cross-platform-apps',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80',
  },
  {
    id: 'app-modernization',
    title: 'App Modernization',
    category: 'App Development',
    blurb: 'Refactor and modernize legacy apps to improve usability, stability, and release speed.',
    link: '/services/app-modernization',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80',
  },
  {
    id: 'ux-research',
    title: 'UX Research & Strategy',
    category: 'UI/UX Design',
    blurb: 'Validate user needs and design direction with research-led product strategy and testing.',
    link: '/services/ux-research',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
  },
  {
    id: 'ui-design-system',
    title: 'UI Design Systems',
    category: 'UI/UX Design',
    blurb: 'Create reusable component systems and visual standards for consistent digital products.',
    link: '/services/ui-design-system',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80',
  },
  {
    id: 'product-prototyping',
    title: 'Product Prototyping',
    category: 'UI/UX Design',
    blurb: 'Turn concepts into validated prototypes before full-scale engineering investment.',
    link: '/services/product-prototyping',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=900&q=80',
  },
  {
    id: 'desktop-enterprise',
    title: 'Enterprise Desktop Apps',
    category: 'Desktop Development',
    blurb: 'Build secure and high-performance desktop software for operational and enterprise teams.',
    link: '/services/desktop-enterprise',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80',
  },
  {
    id: 'desktop-modernization',
    title: 'Desktop App Modernization',
    category: 'Desktop Development',
    blurb: 'Upgrade legacy desktop software with modern UX, architecture, and maintainability.',
    link: '/services/desktop-modernization',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80',
  },
  {
    id: 'desktop-integration',
    title: 'Desktop Integrations',
    category: 'Desktop Development',
    blurb: 'Integrate desktop tools with APIs, ERPs, and internal systems for seamless operations.',
    link: '/services/desktop-integration',
    parent: 'digital',
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=900&q=80',
  },
];

// ── SERVICE LINES (focused domain offerings) ──────────────────
export const serviceLines = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'From marketing sites to enterprise web platforms, we build secure, scalable, and high-performing web experiences.',
    link: '/services/web-development',
    color: '#0ea5e9',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
  },
  {
    id: 'app-development',
    title: 'App Development',
    desc: 'We design and engineer native and cross-platform mobile apps with robust architecture and smooth user journeys.',
    link: '/services/app-development',
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    desc: 'Our design teams create intuitive interfaces, thoughtful interaction patterns, and consistent design systems.',
    link: '/services/ui-ux-design',
    color: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80',
  },
  {
    id: 'desktop-development',
    title: 'Desktop Development',
    desc: 'We deliver modern desktop applications for business-critical workflows, including upgrades for legacy desktop systems.',
    link: '/services/desktop-development',
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80',
  },
];

// ── STATS (homepage counters) ──────────────────────────────────
export const stats = [
  { number: 3, suffix: '+', label: 'Years of continual excellence' },
  { number: 30, suffix: '+', label: 'Change makers driving revolution' },
  { number: 3, suffix: '+', label: 'Countries with our presence and clientele' },
  { number: 5, suffix: '+', label: 'Active clients across the globe' },
];

// ── PARTNERS (exact companies from site) ──────────────────────
export const partners = [
  'Microsoft', 'IBM', 'Temenos', 'SAP', 'AWS',
  'Salesforce', 'Cloudera', 'Leapwork', 'Atlassian', 'Informatica',
  'Formpipe', 'Sprinklr', 'Oracle', 'Red Hat', 'Google Cloud',
  'ServiceNow', 'MuleSoft', 'Databricks',
];

// ── INDUSTRIES (homepage + industries page) ───────────────────
export const industries = [
  {
    id: 'banking',
    title: 'Banking & Financial Services',
    desc: 'Reimagining banks of the future with core modernization, digital banking, and AI-driven financial intelligence.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    link: '/industries/banking',
    eyebrow: 'BANKING & FINANCIAL SERVICES',
    heroTitle: 'Supercharge banking and create digital-first experiences',
    heroImg: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1400&q=80',
    intro: 'Banks and FIs are facing unprecedented disruption. In the new normal, banks need to create customer-centric business models and experiences to keep up. We help Banks reimagine their businesses using the perfect combination of technology and human ingenuity to build banks of the future.',
    offerings: [
      { title: 'Core modernization', desc: 'Accelerate your bank\'s success and build a rock-solid Core with our next-gen Core Modernization offerings.' },
      { title: 'Digital Banking Transformation', desc: 'Building innovative digital banks by leveraging modern technologies and digital frameworks to improve customer experience.' },
      { title: 'Global capability centers', desc: 'GCCs that boost innovation, compliance, and speed, optimizing costs, scaling operations, and accelerating transformation.' },
      { title: 'Banking on the cloud', desc: 'Unlock the potential of modern, scalable infrastructure with our modular cloud services, and step into the future of banking.' },
      { title: 'Consulting', desc: 'Designing and executing bespoke strategies for a seamless business transformation.' },
      { title: 'Risk & compliance', desc: 'Respond to changing regulatory requirements and manage risk efficiently with our reliable risk and compliance services.' },
      { title: 'Application engineering services', desc: 'Reengineering business applications with speed and agility to help banks meet their strategic priorities.' },
      { title: 'Data, AI & Integration', desc: 'Unlock the power of data-driven decision-making and seamless integration with our solid, end-to-end data management expertise.' },
    ],
    stats: [
      { number: '1200+', label: 'Global banking clients' },
      { number: '25+', label: 'Certified consultants and engineers on banking technology' },
      { number: '30', label: 'Years of experience in transforming banks' },
      { number: '150+', label: 'Million customers bank on the systems implemented by us' },
    ],
    color: '#0ea5e9',
  },
  {
    id: 'communication',
    title: 'Communications',
    desc: 'Unlocking growth beyond connectivity for CSPs with experience-led IT strategies and immersive customer experience models.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    link: '/industries/communication',
    eyebrow: 'COMMUNICATIONS',
    heroTitle: 'Unlocking growth beyond connectivity',
    heroImg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80',
    intro: 'The modern telco industry has been at the forefront of disruptive change. For CSPs, we offer experience-led IT strategies and immersive models to strengthen customer relationships and optimize operational efficiency.',
    offerings: [
      { title: 'Customer relationship management', desc: 'Holistic solutions spanning order management, sales & marketing, and customer service, focusing on business productivity, actionable insights, and customer experience.' },
      { title: 'Business process management & optimization', desc: 'Offering right tools to manage the flow of business activities effectively through operational decision management, monitoring, automated workflows, modernization, and integration.' },
      { title: 'Data-driven approach', desc: 'Advanced BI and data analytics, including data science, AI, ML, deep learning, for informed decision-making and identifying the next best course of action for telecoms.' },
      { title: 'Staying ahead with cloud', desc: 'Offering end-to-end cloud-centric capabilities by leveraging expertise in cloud solutions and DevOps. Accelerating time-to-market to make the telco sector robust and scalable.' },
      { title: 'Smart contact center for better interactions', desc: 'Enriching the telco sector with state-of-the-art BPO services, enabling omnichannel customer experience, and providing operational support and cost, time, and risk management.' },
      { title: 'Cross platform mobile development', desc: 'Driving an omnichannel telco experience through integration, automating billing system, user-friendly interface, globally-compliant security practices, and ensuring multi-user management.' },
    ],
    stats: [
      { number: '10', label: 'Strategic partnerships with leading telco operators' },
      { number: '93%', label: 'Increase in customer loyalty & retention for a leading telco' },
      { number: '30+', label: 'Channels unification enabled for a leading telco operator' },
    ],
    color: '#7c3aed',
  },
  {
    id: 'public-sector',
    title: 'Public Sector',
    desc: 'Transforming government services with citizen-centric digital solutions, smart infrastructure, and data-driven governance.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    link: '/industries/public-sector',
    eyebrow: 'PUBLIC SECTOR',
    heroTitle: 'Empowering governments through digital transformation',
    heroImg: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1400&q=80',
    intro: 'We help governments and public sector organizations deliver efficient, transparent, and citizen-centric services. Our solutions modernize legacy systems, digitize manual processes, and build smart infrastructure for the digital age.',
    offerings: [
      { title: 'E-Government solutions', desc: 'Building digital government portals and citizen service platforms that improve accessibility and service delivery.' },
      { title: 'Smart city infrastructure', desc: 'IoT-based smart city solutions for traffic management, utilities, and public safety.' },
      { title: 'Data analytics for governance', desc: 'Advanced analytics and dashboards that enable data-driven policy decisions and performance monitoring.' },
      { title: 'Cybersecurity for government', desc: 'Protecting sensitive government data with enterprise-grade security frameworks and compliance programs.' },
      { title: 'Enterprise resource planning', desc: 'End-to-end ERP solutions tailored for government agencies to streamline operations and financial management.' },
      { title: 'Cloud migration & modernization', desc: 'Migrating government systems to secure, compliant cloud environments for improved efficiency and cost savings.' },
    ],
    stats: [
      { number: '50+', label: 'Government projects delivered' },
      { number: '12', label: 'Countries with government clientele' },
      { number: '99.9%', label: 'System uptime for critical government services' },
    ],
    color: '#10b981',
  },
  {
    id: 'health',
    title: 'Health',
    desc: 'Reimagining patient care and healthcare operations through AI, digital health platforms, and clinical intelligence.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    link: '/industries/health',
    eyebrow: 'HEALTH',
    heroTitle: 'Reimagining healthcare for the digital era',
    heroImg: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1400&q=80',
    intro: 'We partner with healthcare organizations to modernize clinical and operational systems, improve patient outcomes, and reduce costs. From hospital information systems to AI-powered diagnostics, we drive the health sector\'s digital future.',
    offerings: [
      { title: 'Hospital Information Systems', desc: 'End-to-end digital hospital management systems that streamline clinical workflows and improve patient care.' },
      { title: 'AI-powered clinical intelligence', desc: 'AI clinical trial matching, medical front desk automation, and AI-powered physician\'s assistant for patient care.' },
      { title: 'Patient engagement platforms', desc: 'Digital patient portals, telehealth solutions, and mobile health apps that improve patient engagement and access.' },
      { title: 'Healthcare data & analytics', desc: 'Population health management, predictive analytics, and real-time clinical dashboards for data-driven healthcare.' },
      { title: 'EMR/EHR integration', desc: 'Seamless integration of electronic medical and health records across care settings for a unified patient view.' },
      { title: 'Healthcare cloud solutions', desc: 'HIPAA-compliant cloud migration and managed services for healthcare organizations seeking operational agility.' },
    ],
    stats: [
      { number: '100+', label: 'Healthcare organizations served' },
      { number: '5M+', label: 'Patient records managed on our platforms' },
      { number: '40%', label: 'Average reduction in operational costs' },
    ],
    color: '#ef4444',
  },
  {
    id: 'retail',
    title: 'Retail',
    desc: 'Enabling next-generation retail experiences through unified commerce, AI personalization, and intelligent supply chain.',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    link: '/industries/retail',
    eyebrow: 'RETAIL',
    heroTitle: 'Reimagining retail for the digital-first consumer',
    heroImg: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1400&q=80',
    intro: 'The retail industry is undergoing rapid transformation. We help retailers build unified commerce platforms, leverage AI for hyper-personalization, and optimize supply chains to deliver exceptional customer experiences.',
    offerings: [
      { title: 'Unified commerce platform', desc: 'Omnichannel retail platforms that unify online and offline channels for a seamless customer experience.' },
      { title: 'AI stylists & personalization', desc: 'AI-powered product recommendations, virtual stylists, and personalized shopping experiences that drive conversion.' },
      { title: 'Digital commerce', desc: 'End-to-end e-commerce platform development and optimization for enterprise retailers.' },
      { title: 'Supply chain intelligence', desc: 'AI-powered supply chain visibility, demand forecasting, and inventory optimization solutions.' },
      { title: 'Customer loyalty management', desc: 'Digital loyalty programs and CRM solutions that strengthen customer relationships and drive repeat purchases.' },
      { title: 'Retail analytics', desc: 'Advanced retail analytics for footfall analysis, basket analysis, and customer behavior insights.' },
    ],
    stats: [
      { number: '2M+', label: 'App downloads for a leading retail client' },
      { number: '35%', label: 'Increase in online conversion rates' },
      { number: '50+', label: 'Retail clients globally' },
    ],
    color: '#f59e0b',
  },
];

// ── LEADERSHIP (real names and titles from company-overview) ───
export const leadership = [
  { name: 'Asif Peer', title: 'Group CEO & Managing Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', linkedin: 'https://pk.linkedin.com/in/asif-peer-72b19334' },
  { name: 'Asif Akram', title: 'Chief Operating Officer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', linkedin: 'https://pk.linkedin.com/in/akramasif' },
  { name: 'Roohi Khan', title: 'Group CFO', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', linkedin: 'https://pk.linkedin.com/in/roohikhan1' },
  { name: 'Toima Asghar', title: 'Group CHRO', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', linkedin: 'https://pk.linkedin.com/in/toima' },
  { name: 'Khurram Majeed', title: 'General Manager, Waleeco MEA', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80', linkedin: 'https://ae.linkedin.com/in/khurram-majeed-34409b3' },
  { name: 'Rao Hamid Khan', title: 'General Manager, Waleeco Arabia & Bahrain', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', linkedin: 'https://www.linkedin.com/in/raohamid/' },
  { name: 'Muhammad Mairaj Yousuf', title: 'General Manager, Pakistan', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', linkedin: 'https://pk.linkedin.com/in/muhammad-mairaj-yousuf-52b5445' },
  { name: 'Waseem Yousaf', title: 'General Manager, Waleeco APAC', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', linkedin: 'https://www.linkedin.com/in/waseemyusaf/' },
  { name: 'Ahmed Kandil', title: 'General Manager, Waleeco Egypt', img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400&q=80', linkedin: 'https://eg.linkedin.com/in/anabil' },
  { name: 'Ammara Masood', title: 'General Manager, BFS', img: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80', linkedin: 'https://www.linkedin.com/in/ammara-masood-4624591/' },
  { name: 'Imran Soofi', title: 'General Manager, Telco', img: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&q=80', linkedin: 'https://pk.linkedin.com/in/imransoofi' },
  { name: 'Salman Wajid', title: 'Chief of Process Outsourcing', img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&q=80', linkedin: 'https://www.linkedin.com/in/salmanwajid/' },
  { name: 'Javeria Fahad', title: 'Head of Marketing', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80', linkedin: 'https://www.linkedin.com/in/javeria-fahad/' },
  { name: 'Tahir Saeed', title: 'Chief Investment Officer', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80', linkedin: 'https://www.linkedin.com/in/muhammad-tahir-saeed-cfa-802a6919/' },
  { name: 'Umar Wattoo', title: 'Head, Public Sector & Government Relations', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80', linkedin: 'https://www.linkedin.com/in/umar-h-wattoo-08a2544/' },
];

// ── AWARDS (exact titles from company-overview page) ──────────
export const awards = [
  { title: 'Best Sales Partner', sub: 'MEA Sales and Partner Summit 2022', img: null },
  { title: 'Best Digital Channel/Platform Implementation Award', sub: '2022', img: null },
  { title: 'Fastest growing company in Asia', sub: 'Multiple years', img: null },
  { title: 'Among top global technology partners', sub: 'Five times in a row — Microsoft Inner Circle 2025-2026', img: null },
  { title: 'Aspirant in BFSI IT Services PEAK Matrix® Assessment', sub: 'Everest Group 2025', img: null },
  { title: 'Outstanding Financial Technology Implementation', sub: 'Global Banking Tech 2024', img: null },
  { title: 'Winner: Infrastructure Technology-IT Services', sub: 'Middle East Technology Award', img: null },
  { title: 'Digital Banking Awards Implementation Excellence', sub: '2024', img: null },
  { title: 'Technology Excellence Awards for Digital IT Services in Banking', sub: '2023', img: null },
  { title: 'Regional Delivery Partner of the Year', sub: '2024', img: null },
  { title: 'Top IT & ITeS Exporter of 2024', sub: 'PSEB', img: null },
  { title: 'Top IT Consultancy Services Provider', sub: '2024 — PSEB', img: null },
  { title: 'Top BPO Services Provider', sub: '2024 — PSEB', img: null },
  { title: 'Partner of the Year — UAE', sub: '2023 — Microsoft', img: null },
  { title: 'Partner of the Year — Pakistan', sub: '2023 — Microsoft', img: null },
  { title: 'Delivery Partner of the year — MEA', sub: '2023', img: null },
  { title: 'Top New Partner and Service Excellence Awards', sub: 'Microsoft', img: null },
  { title: 'Most Outstanding Company', sub: 'Three times in a row', img: null },
];

// ── GLOBAL OFFICES (exact from company-overview) ───────────────
export const offices = [
  { city: 'Islamabad', country: 'Pakistan', address: 'Evacuee Trust Complex, Agha Khan Road, F-5/1, Islamabad', phone: '+92 312 5612116' },
  { city: 'Karachi', country: 'Pakistan', address: 'Suite 1001, 10th Floor, Lakson Square Building No.3, Sarwar Shaheed Road', phone: '+92 21 111 797 836' },
  { city: 'Lahore', country: 'Pakistan', address: '72-C, E/1, Gulberg III, Lahore', phone: '+92 42 111 797 836' },
  { city: 'Multan', country: 'Pakistan', address: '2nd Floor, Khawaja Ramzan Plaza, Chungi No.9, Multan', phone: '' },
  { city: 'Faisalabad', country: 'Pakistan', address: 'Office # 13-A, Block C, Peoples Colony No.1, Faisalabad', phone: '' },
  { city: 'United Arab Emirates', country: 'UAE', address: '404, Dubai Hills Business Park 3, Emaar Hills Estate, P.O. box: 500497, Dubai', phone: '+971 4 369 3525' },
  { city: 'Abu Dhabi', country: 'UAE', address: '208, Safiya Hamed Khadem building, Shk. Zayed Bin Sultan St, Al Danah', phone: '' },
  { city: 'Egypt', country: 'Egypt', address: 'Building B 2116, the Smart Village, 28 Kms, Cairo-Alexandria Desert Road, Giza', phone: '' },
  { city: 'Qatar', country: 'Qatar', address: 'Palm Towers, Floor 41 Westbay, Doha', phone: '+974 446 47664' },
  { city: 'South Africa', country: 'South Africa', address: 'Central Office Park No.4, 257 Jean Avenue, Centurion, 0157', phone: '' },
  { city: 'Kenya', country: 'Kenya', address: 'Vision Towers, Muthithi Road, Westlands Nairobi County, Nairobi', phone: '+254 727 376 376' },
  { city: 'United Kingdom', country: 'UK', address: 'London, United Kingdom', phone: '' },
  { city: 'Malaysia', country: 'Malaysia', address: 'Kuala Lumpur, Malaysia', phone: '' },
  { city: 'Singapore', country: 'Singapore', address: 'Singapore', phone: '' },
];

// ── WORLD MAP DOTS (for global presence animation) ────────────
export const mapDots = [
  { city: 'Islamabad', top: '36%', left: '62%' },
  { city: 'Lahore', top: '37%', left: '61.5%' },
  { city: 'Karachi', top: '40%', left: '60%' },
  { city: 'Dubai', top: '42%', left: '57%' },
  { city: 'London', top: '24%', left: '46%' },
  { city: 'Doha', top: '43%', left: '56%' },
  { city: 'Riyadh', top: '44%', left: '55%' },
  { city: 'Cairo', top: '40%', left: '52%' },
  { city: 'Nairobi', top: '54%', left: '55%' },
  { city: 'Kuala Lumpur', top: '57%', left: '75%' },
  { city: 'Singapore', top: '59%', left: '76%' },
  { city: 'Johannesburg', top: '67%', left: '53%' },
];

// ── CAREER STATS ───────────────────────────────────────────────
export const careerStats = [
  { number: 14000, suffix: '', label: 'Global Employee Count' },
  { number: 209, suffix: '', label: 'Strong social media community' },
  { number: 6500, suffix: '', label: 'Total Training sessions' },
  { number: 7000, suffix: '', label: 'Total participants' },
];

// ── CAREER TRACKS ──────────────────────────────────────────────
export const careerTracks = [
  {
    id: 'graduates',
    title: 'Graduates',
    desc: 'Kickstart your career with structured graduate programs. Hands-on experience from day one in real business challenges.',
  },
  {
    id: 'experienced',
    title: 'Experienced Professionals',
    desc: 'Bring your expertise and take it further. We offer senior-level roles across technology, consulting, and leadership.',
  },
  {
    id: 'internship',
    title: 'Internship/MTO',
    desc: 'Expose your fresh energy to real business challenges and allow your thinking to have a real impact through our internship and MTO programs.',
  },
];

// ── GLOBAL CAREER LOCATIONS ────────────────────────────────────
export const careerLocations = [
  'UK', 'UAE', 'QATAR', 'EGYPT', 'KSA', 'SOUTH AFRICA',
  'MALAYSIA', 'SINGAPORE', 'KENYA',
  'ISLAMABAD', 'KARACHI', 'MULTAN', 'FAISALABAD', 'LAHORE',
];

// ── WORKING AT WALEECO ─────────────────────────────────────────
export const workingAtWaleeco = [
  {
    title: 'Working at Waleeco',
    desc: 'Systems is a great place to start your working life and we offer our people the opportunity to feel good by doing good in their everyday work. Our supportive and inclusive environment enables you to learn, develop and be your best in the role that best suits you.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    title: 'Trainees',
    desc: 'We offer a range of graduate and internship opportunities around the world that will expose you to real business challenges and allow your energy and fresh thinking to have a real impact.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
  {
    title: 'Diversity & inclusion',
    desc: 'Systems practices a value driven culture that promotes diversity and inclusion. We\'re working to create a fairer, more socially inclusive world – in our community at work.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    title: 'Benefits',
    desc: 'Systems offers employee benefits that strive to attract and retain top talent. We also realize that as a global company, this can vary greatly from country to country.',
    link: '#',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
];

// ── HIRING PROCESS (exact from careers page) ──────────────────
export const hiringProcess = [
  {
    step: '01',
    label: 'APPLY',
    desc: 'Please browse through the job openings and submit your application for positions that match your skillset.',
    img: null,
  },
  {
    step: '02',
    label: 'REVIEW',
    desc: 'Our recruiters will review your application and match you with the best-fit opportunity.',
    img: null,
  },
  {
    step: '03',
    label: 'INTERVIEWS',
    desc: 'Our interviewing process is competency-based, designed to identify individuals who thrive.',
    img: null,
  },
  {
    step: '04',
    label: 'ONBOARDING',
    desc: 'Our onboarding process will refine and prepare you for your professional journey with Waleeco.',
    img: null,
  },
];

// ── JOB LISTINGS ───────────────────────────────────────────────
export const jobs = [
  { title: 'Senior AI/ML Engineer', dept: 'AI & Data', location: 'Islamabad, Pakistan', type: 'Full-time' },
  { title: 'Cloud Solutions Architect', dept: 'Cloud', location: 'Dubai, UAE', type: 'Full-time' },
  { title: 'Full Stack Developer (.NET)', dept: 'Engineering', location: 'Lahore, Pakistan', type: 'Full-time' },
  { title: 'Data Engineer — Databricks', dept: 'AI & Data', location: 'Karachi, Pakistan', type: 'Full-time' },
  { title: 'Business Development Manager', dept: 'Business Development', location: 'Riyadh, KSA', type: 'Full-time' },
  { title: 'Salesforce CRM Consultant', dept: 'Engineering', location: 'Islamabad, Pakistan', type: 'Full-time' },
  { title: 'DevOps Engineer', dept: 'Cloud', location: 'Islamabad, Pakistan', type: 'Full-time' },
  { title: 'UI/UX Designer', dept: 'Engineering', location: 'Lahore, Pakistan', type: 'Full-time' },
  { title: 'Talent Acquisition Specialist', dept: 'HR', location: 'Islamabad, Pakistan', type: 'Full-time' },
  { title: 'Finance Analyst', dept: 'Finance', location: 'Islamabad, Pakistan', type: 'Full-time' },
  { title: 'GenAI Solutions Architect', dept: 'AI & Data', location: 'London, UK', type: 'Full-time' },
  { title: 'Temenos Core Banking Consultant', dept: 'Engineering', location: 'Dubai, UAE', type: 'Full-time' },
];

// ── AI SERVICE (full detail for AI transformation sub-page) ───
export const aiService = {
  eyebrow: 'AI TRANSFORMATION',
  heroTitle: 'AI in motion: From experimentation to industry transformation',
  heroImg: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80',
  intro: 'As customer expectations evolve, enterprises must move beyond automation to create a dynamic synergy between humans and AI. With advances in cloud and data technologies, we are entering the era of AI industrialization. Its democratization makes responsible AI practices essential for building trust.',
  introDetail: 'At Waleeco, we drive AI strategy, execution, and adoption with a business-first approach to deliver lasting impact. We help businesses identify AI opportunities, make informed investments, and implement solutions that unlock new revenue streams, enhance productivity, automate operations, and provide deeper customer insights.',
  offerings: [
    { title: 'Predictive AI', desc: 'Anticipate what\'s next with predictive AI that analyzes patterns in historical data, enabling faster decisions through big data analytics and deep learning.' },
    { title: 'Generative AI', desc: 'Unlock creative solutions using generative AI powered by advanced ML. We offer end-to-end support through workshops, implementation, and seamless integration.' },
    { title: 'Machine Learning', desc: 'Design ML models tailored to your business needs, implement end-to-end pipelines, and integrate AI seamlessly into your existing IT infrastructure.' },
    { title: 'ML Ops', desc: 'Streamline AI operations by automating ML model deployment, monitoring, and retraining, ensuring high performance, scalability, and minimal latency.' },
    { title: 'AI Assessment Services', desc: 'Evaluate your current systems, identify AI opportunities, and receive a clear roadmap for adoption, including tools, talent needs, and technology fit.' },
  ],
  readinessSteps: [
    {
      step: 1,
      title: 'Align the strategy',
      items: ['Vision & objectives', 'Leadership support', 'Change management'],
    },
    {
      step: 2,
      title: 'Evaluate organizational readiness',
      items: ['Data availability, quality and data management', 'Infrastructure and existing technology stack', 'Skillset and expertise of internal stakeholders', 'Process and governance'],
    },
    {
      step: 3,
      title: 'Set the target state and timeline',
      items: ['Gap analysis & key themes', 'Enablement framework and operating model', 'Target infrastructure & data modernization plan', 'Budget requirements and ROI expectations', 'AI roadmap with short-term and long-term goals'],
    },
    {
      step: 4,
      title: 'Kick off the journey',
      items: ['Communication and cultural change', 'Pilot project and proof of concept', 'Feedback mechanism to measure the success', 'Regulations and ethical governance'],
    },
  ],
  industrySolutions: [
    { industry: 'IT & security', desc: 'Automated threat detection and risk mitigation' },
    { industry: 'Enterprise productivity', desc: 'AI Copilots for marketing, sales, HR & IT' },
    { industry: 'Retail & eCommerce', desc: 'AI stylists, personalized recommendations' },
    { industry: 'Healthcare & life sciences', desc: 'AI-powered clinical trial matching, medical front desk and AI-powered physician\'s assistant for patient care' },
  ],
  whyUs: [
    'Proven enterprise AI expertise',
    'Scalable and modular Copilot solutions',
    'Low code/no code AI application development',
    'Cloud-agnostic AI development (AWS, Azure, GCP)',
    'Secure and responsible AI implementation',
    'Strategic partnerships with AI innovators and cloud hyperscalers',
  ],
};

// ── NAV STRUCTURE (exact from live site) ──────────────────────
export const navData = [
  {
    label: 'Services',
    children: [
      {
        group: 'Core Services',
        links: [
          { label: 'Web Development', href: '/services/web-development', icon: '💻' },
          { label: 'App Development', href: '/services/app-development', icon: '📱' },
          { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: '🎨' },
          { label: 'Desktop Development', href: '/services/desktop-development', icon: '🖥️' },
        ],
      },
    ],
  },
  {
    label: 'Industries',
    children: [
      {
        group: 'Industries',
        links: [
          { label: 'Banking & Financial Services', href: '/industries/banking', icon: '🏦' },
          { label: 'Communications', href: '/industries/communication', icon: '📡' },
          { label: 'Public Sector', href: '/industries/public-sector', icon: '🏛️' },
          { label: 'Health', href: '/industries/health', icon: '⚕️' },
          { label: 'Retail', href: '/industries/retail', icon: '🛍️' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '/about',
  },
];

