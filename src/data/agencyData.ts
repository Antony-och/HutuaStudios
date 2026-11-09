import { ServiceItem, CaseStudy, Testimonial, FaqItem, ProcessStep, ValueProp } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'basic-website-design',
    title: 'Basic Website Design',
    tagline: 'Simple, clean, and effective web presence.',
    shortDesc: 'Establish credibility and introduce your business with an elegant, responsive site built for conversion and clarity.',
    fullDesc: 'A thoughtfully crafted multi-page website engineered to communicate your value proposition clearly. We handle everything from wireframing and design to semantic frontend development, SEO fundamentals, and contact integration.',
    category: 'web',
    iconName: 'Globe',
    deliverables: [
      '3–5 custom responsive pages (Home, About, Services, Contact, Blog/Team)',
      'Mobile-first responsive layout tested across iOS, Android, and Desktop',
      'Fast-loading semantic markup with SEO meta tags & structured data',
      'Contact inquiry forms with direct email alerts & spam filtering',
      'CMS configuration for easy self-editing without coding knowledge'
    ],
    estimatedTimeline: '7–12 business days',
    startingPrice: '$750',
    highlight: false,
  },
  {
    id: 'online-marketplace-setup',
    title: 'Online Marketplace Setup',
    tagline: 'Launch your digital storefront.',
    shortDesc: 'Connect buyers and sellers seamlessly with multi-vendor architecture, secure escrow or payment split workflows.',
    fullDesc: 'End-to-end multi-seller marketplace infrastructure tailored for product or service platforms. We configure vendor onboarding portals, commission split logic, product inventory, order routing, and buyer verification systems.',
    category: 'web',
    iconName: 'Store',
    deliverables: [
      'Multi-vendor management dashboard & vendor onboarding flow',
      'Automated commission splitting and escrow payment integration (Stripe Connect / PayPal)',
      'Customer search, facet filters, vendor reviews & rating mechanisms',
      'Dispute resolution and seller compliance verification workflows',
      'Full administrative oversight panel with revenue analytics'
    ],
    estimatedTimeline: '3–5 weeks',
    startingPrice: '$2,800',
    highlight: true,
  },
  {
    id: 'ecommerce-website-design',
    title: 'E-Commerce Website Design',
    tagline: 'Sell online with secure, scalable platforms.',
    shortDesc: 'High-converting online shops engineered for frictionless checkout, inventory syncing, and repeat purchases.',
    fullDesc: 'Custom online retail storefronts built to maximize average order value (AOV) and reduce cart abandonment. Powered by Shopify, WooCommerce, or headless commerce stacks with global payment gateways, tax calculation, and automated shipping.',
    category: 'web',
    iconName: 'ShoppingBag',
    deliverables: [
      'Custom storefront UI with seamless brand styling and mobile cart optimization',
      'Secure payment gateways (Stripe, Apple Pay, Google Pay, PayPal, Klarna)',
      'Inventory tracking, automated order confirmations & customer account portals',
      'Speed-optimized product image galleries, variant selectors, and live search',
      'Abandoned cart recovery automation and discount coupon engine'
    ],
    estimatedTimeline: '2–3 weeks',
    startingPrice: '$1,650',
    highlight: true,
  },
  {
    id: 'one-page-responsive-website',
    title: 'One Page Responsive Website',
    tagline: 'High-impact landing pages that fit any screen.',
    shortDesc: 'Laser-focused single-page experience designed to turn paid or organic traffic into booked calls and qualified leads.',
    fullDesc: 'A unified single-page layout that guides users through your value story without distractions. Perfect for product drops, service launchpads, event registrations, or local service professionals wanting fast turnaround.',
    category: 'web',
    iconName: 'Layout',
    deliverables: [
      'High-impact hero section with persuasive headline architecture',
      'Interactive service breakdown and client proof highlights',
      'Instant lead capture form with calendar scheduling hookup',
      'Sub-second page load times with asset optimization',
      'Social share preview cards & Google Analytics / Meta Pixel setup'
    ],
    estimatedTimeline: '3–5 business days',
    startingPrice: '$490',
    highlight: false,
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    tagline: 'Reach more customers through targeted campaigns.',
    shortDesc: 'Drive qualified traffic, build brand authority, and turn attention into measurable pipeline and revenue.',
    fullDesc: 'Data-informed creative campaigns across Meta (Instagram/Facebook), LinkedIn, TikTok, and X. We combine eye-catching brand creative, precise audience segmentation, and A/B tested copy to deliver measurable customer acquisition.',
    category: 'marketing-it',
    iconName: 'Share2',
    deliverables: [
      'Targeted paid advertising campaign setup & audience persona mapping',
      'Content calendar and creative design templates for brand consistency',
      'Conversion tracking setup (Meta Pixel, Google Tag Manager, Conversion API)',
      'Weekly performance reporting with return-on-ad-spend (ROAS) dashboards',
      'A/B creative testing to progressively lower customer acquisition costs'
    ],
    estimatedTimeline: 'Ongoing retainer (Monthly)',
    startingPrice: '$650/mo',
    highlight: false,
  },
  {
    id: 'software-and-applications',
    title: 'Software & Applications',
    tagline: 'Building smart apps that boost efficiency and business growth.',
    shortDesc: 'Custom web portals, internal operating tools, and customer SaaS platforms built to streamline operations.',
    fullDesc: 'Purpose-built web and mobile-ready software designed around your specific business processes. From internal staff portals and inventory management to customer-facing SaaS dashboards, we build robust, scalable applications.',
    category: 'software-ai',
    iconName: 'Code2',
    deliverables: [
      'Full-stack architecture using modern TypeScript, React, Node.js & secure databases',
      'Role-based access control (RBAC), multi-tenant security & audit logs',
      'REST & GraphQL API design with third-party service webhooks',
      'Responsive interface optimized for desktop workstations and mobile teams',
      'Comprehensive testing suite, automated deployment pipeline & documentation'
    ],
    estimatedTimeline: '4–8 weeks',
    startingPrice: '$3,500',
    highlight: true,
  },
  {
    id: 'artificial-intelligence-solutions',
    title: 'Artificial Intelligence Solutions',
    tagline: 'Automate customer support and engagement.',
    shortDesc: 'Deploy intelligent automation, custom conversational bots, and automated workflows that save hundreds of hours.',
    fullDesc: 'Practical, high-ROI AI implementations for small and medium businesses. We build customized customer support agents, automated inquiry triaging, CRM data enrichment, and document intelligence workflows that run 24/7.',
    category: 'software-ai',
    iconName: 'Bot',
    deliverables: [
      'Custom knowledge-base trained support bot with zero hallucination guardrails',
      'Omnichannel deployment across your website, WhatsApp, Slack, or email',
      'Automated lead qualification and CRM pipeline updating',
      'Human handoff escalation workflows for complex customer queries',
      'Analytics dashboard tracking answer accuracy, deflection rate & sentiment'
    ],
    estimatedTimeline: '2–3 weeks',
    startingPrice: '$1,800',
    highlight: false,
  },
  {
    id: 'it-support-and-consultancy',
    title: 'IT Support & Consultancy',
    tagline: 'Expert advice to guide your technology decisions.',
    shortDesc: 'Strategic guidance on cloud infrastructure, security audits, software selection, and day-to-day tech operations.',
    fullDesc: 'Senior technical advisory without the overhead of an in-house CTO. We evaluate your current systems, patch vulnerabilities, migrate legacy tools to cloud platforms, and establish reliable backup & uptime continuity protocols.',
    category: 'marketing-it',
    iconName: 'LifeBuoy',
    deliverables: [
      'Comprehensive technology stack audit & cost optimization report',
      'Cloud hosting architecture (Google Cloud / AWS / Vercel) & domain setup',
      'Data backup, SSL compliance, firewall & security hardening',
      'Business email setup (Google Workspace / Microsoft 365) & identity policies',
      'Dedicated on-call technical support desk with rapid SLA response'
    ],
    estimatedTimeline: 'Hourly / Monthly Retainer',
    startingPrice: '$450/mo',
    highlight: false,
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'rapid-turnaround',
    title: 'Rapid & Predictable Delivery',
    description: 'We eliminate agency bloat and endless meetings. With streamlined sprints and transparent milestone roadmaps, standard web builds launch in under 14 days.',
    metric: '14 Days',
    metricLabel: 'Average project MVP turnaround',
    iconName: 'Zap'
  },
  {
    id: 'tailored-architecture',
    title: 'Tailored High-Performance Solutions',
    description: 'No generic bloated templates. Every line of code and user interface is engineered specifically to convert your target audience and scale effortlessly.',
    metric: '99.4%',
    metricLabel: 'Lighthouse speed & performance score',
    iconName: 'Cpu'
  },
  {
    id: 'transparent-pricing',
    title: 'Transparent Fixed-Scope Pricing',
    description: 'Surprise bills erode trust. We scope every project thoroughly upfront with clear milestone pricing, guaranteed deliverables, and zero hidden fees.',
    metric: '100%',
    metricLabel: 'Fixed scope guarantee with zero surprises',
    iconName: 'ShieldCheck'
  },
  {
    id: 'ongoing-support',
    title: 'Dedicated Post-Launch Partnership',
    description: 'Our work does not end at deployment. Every project includes a 30-day warranty, staff onboarding walkthroughs, and optional proactive maintenance retainers.',
    metric: '24/7',
    metricLabel: 'System monitoring & proactive care',
    iconName: 'LifeBuoy'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Phase 1',
    title: 'Discover & Strategy',
    description: 'We align deeply on your commercial objectives, audience pain points, technical constraints, and competitive benchmarks.',
    activities: [
      '30-minute discovery workshop to clarify project scope & requirements',
      'User journey mapping & high-level system architecture outline',
      'Fixed-price milestone agreement & transparent sprint timeline'
    ],
    deliverable: 'Project Blueprint & Technical Specification Document',
    duration: '1–2 Days'
  },
  {
    number: '02',
    phase: 'Phase 2',
    title: 'Design & Prototype',
    description: 'We design high-fidelity interactive prototypes focused on usability, aesthetic refinement, and conversion triggers.',
    activities: [
      'Wireframing core user flows and information architecture',
      'Modern responsive UI design matching your brand guidelines',
      'Clickable prototype review session with iterative revisions'
    ],
    deliverable: 'Figma Interactive Prototype & Design Token System',
    duration: '3–5 Days'
  },
  {
    number: '03',
    phase: 'Phase 3',
    title: 'Build & Test',
    description: 'We turn designs into clean, responsive, and secure software. Continuous integration ensures quality at every commit.',
    activities: [
      'Clean TypeScript & Tailwind implementation with semantic accessibility',
      'Database integration, payment gateway configuration & API wiring',
      'Cross-device responsive QA, performance benchmarking & security audit'
    ],
    deliverable: 'Staging Environment Preview with Live Test Data',
    duration: '5–14 Days'
  },
  {
    number: '04',
    phase: 'Phase 4',
    title: 'Launch & Support',
    description: 'We deploy to production cloud infrastructure, configure analytics, train your team, and stand by with continuous care.',
    activities: [
      'Zero-downtime domain connection, SSL certificate & DNS configuration',
      'Google Analytics, search console indexing & SEO structured data check',
      'Recorded team training session + 30 days of complimentary bug warranty'
    ],
    deliverable: 'Live Production Website / App + Admin Training Kit',
    duration: 'Continuous'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'noir-atelier',
    title: 'Noir Atelier Luxury Retail',
    client: 'Noir Atelier Ltd.',
    serviceCategory: 'E-Commerce Website Design',
    serviceName: 'E-Commerce Website Design',
    year: '2026',
    summary: 'A minimalist digital flagship store engineered for high-ticket designer apparel with ultra-fast mobile checkout.',
    metric: '+142%',
    metricLabel: 'Mobile checkout conversion rate',
    image: '/src/assets/images/portfolio_ecommerce_1794215535855.jpg',
    tags: ['Shopify Plus', 'Custom Checkout', 'Global Currency', 'Speed Optimization'],
    challenge: 'The brand was losing mobile shoppers due to heavy unoptimized product imagery and a cumbersome multi-step checkout funnel.',
    solution: 'Designed an editorial-grade catalog with instant visual search, 1-click Apple Pay & Google Pay checkout, and sub-second asset caching.',
    results: [
      '+142% mobile conversion increase within 60 days of launch',
      'Average order value grew by 28% through curated bundling recommendations',
      'Page load time reduced from 4.8s down to 0.72s worldwide'
    ]
  },
  {
    id: 'synergy-analytics',
    title: 'Synergy Cloud Operations Hub',
    client: 'Synergy Tech Systems',
    serviceCategory: 'Software & Applications',
    serviceName: 'Software & Applications',
    year: '2026',
    summary: 'A centralized operations platform replacing four legacy spreadsheets and automating daily revenue tracking.',
    metric: '35 hrs/wk',
    metricLabel: 'Saved in manual administrative operations',
    image: '/src/assets/images/portfolio_software_app_1794215536541.jpg',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Role-Based Access'],
    challenge: 'Operations teams spent 7+ hours every weekday manually compiling sales records, campaign performance, and inventory balances across branches.',
    solution: 'Engineered a unified real-time dashboard featuring automated data sync, visual analytics widgets, and automated monthly PDF exports.',
    results: [
      'Eliminated 35+ hours of manual data entry every single week',
      '100% adoption rate across 45 branch managers within two weeks',
      'Zero database sync discrepancies reported across 180,000+ monthly records'
    ]
  },
  {
    id: 'flowmatrix-ai',
    title: 'FlowMatrix AI Concierge',
    client: 'FlowMatrix Logistics',
    serviceCategory: 'Artificial Intelligence Solutions',
    serviceName: 'Artificial Intelligence Solutions',
    year: '2026',
    summary: 'An intelligent customer triage bot handling package inquiries, shipping updates, and booking support 24/7.',
    metric: '78%',
    metricLabel: 'Inquiries resolved with zero human intervention',
    image: '/src/assets/images/portfolio_ai_assistant_1794215536671.jpg',
    tags: ['AI Agent', 'WhatsApp API', 'CRM Webhooks', 'Multilingual'],
    challenge: 'Customer support queues were overwhelmed during peak freight hours, resulting in 4-hour response delays and lost bookings.',
    solution: 'Implemented a domain-trained AI agent connected directly to shipment tracking APIs, handling multi-lingual queries on WhatsApp & Web.',
    results: [
      '78% of incoming customer requests resolved autonomously in under 5 seconds',
      'Support backlog dropped from 4 hours to instantaneous answers',
      'Customer satisfaction rating jumped from 3.4/5 to 4.9/5'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'marcus-vance',
    quote: 'Hutua Studios completely redefined how our brand presents itself online. The new e-commerce storefront is blazing fast, and our checkout drop-off rate fell by half in the very first month.',
    author: 'Marcus Vance',
    role: 'Founder & Creative Director',
    company: 'Noir Atelier',
    avatarText: 'MV',
    metricHighlight: '+142% Mobile Conversion'
  },
  {
    id: 'elena-rostova',
    quote: 'Most agencies over-promise and disappear for weeks. Hutua Studios worked with disciplined weekly milestones. The software application they built transformed our entire regional management workflow.',
    author: 'Elena Rostova',
    role: 'VP of Product Operations',
    company: 'Synergy Tech Systems',
    avatarText: 'ER',
    metricHighlight: '35 hrs/wk Saved'
  },
  {
    id: 'tariq-al-mansoor',
    quote: 'Their AI automated support assistant saved our agency from hiring three additional tier-1 support reps. It answered our customer queries accurately from day one with zero hallucination.',
    author: 'Tariq Al-Mansoor',
    role: 'Managing Partner',
    company: 'FlowMatrix Solutions',
    avatarText: 'TA',
    metricHighlight: '78% Auto-Resolution'
  },
  {
    id: 'sarah-jenkins',
    quote: 'As a startup founder, speed and budget certainty were everything. Hutua Studios delivered our responsive marketing site in 4 business days. The attention to typography and mobile details is top tier.',
    author: 'Sarah Jenkins',
    role: 'Co-Founder',
    company: 'Kinetix Health',
    avatarText: 'SJ',
    metricHighlight: 'Launched in 4 Days'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-turnaround',
    question: 'How fast can you design and launch my website or application?',
    answer: 'Turnaround depends on project scope. A one-page responsive landing page typically launches in 3 to 5 business days. A multi-page custom business website takes 7 to 12 days, while custom software or online marketplaces usually take 3 to 6 weeks. We provide a firm launch schedule upfront before beginning work.',
    category: 'process'
  },
  {
    id: 'faq-pricing',
    question: 'How does your pricing work, and are there any surprise fees?',
    answer: 'We believe in 100% transparent, fixed-scope milestone billing. Once we review your requirements, we present an all-inclusive quote covering design, development, testing, and deployment. We do not bill unexpected hourly overages without prior written approval.',
    category: 'pricing'
  },
  {
    id: 'faq-tech-stack',
    question: 'What technologies and platforms do you build with?',
    answer: 'We select the optimal stack based on your commercial objectives. For custom websites and web applications, we specialize in modern React, Next.js/Vite, TypeScript, Tailwind CSS, and cloud backends. For e-commerce and retail, we support Shopify, WooCommerce, or bespoke headless commerce engines depending on your catalog size.',
    category: 'technical'
  },
  {
    id: 'faq-ownership',
    question: 'Do I own the code, design, and intellectual property after launch?',
    answer: 'Yes, 100%. Upon final project delivery and settlement, all design source files, codebase repositories, domain configurations, and credentials are completely transferred to your organization with full commercial rights.',
    category: 'general'
  },
  {
    id: 'faq-maintenance',
    question: 'What happens after the website or application goes live?',
    answer: 'Every project includes a complimentary 30-day post-launch warranty covering any bugs or unexpected issues. After that, we offer optional monthly proactive maintenance retainers covering security updates, content updates, server uptime monitoring, and ongoing feature expansion.',
    category: 'process'
  },
  {
    id: 'faq-communication',
    question: 'How will we collaborate and communicate during the build?',
    answer: 'You receive access to a dedicated shared project board (or WhatsApp/Slack channel) with weekly video or summary check-ins. You will always know who is working on what, review live staging previews, and give feedback in real time.',
    category: 'general'
  }
];

export const TRUST_STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '8', label: 'Core Disciplines' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '99.4%', label: 'On-Time Milestones' }
];

export const CLIENT_LOGOS = [
  { name: 'Lumina Retail', symbol: 'LUMINA' },
  { name: 'Nexa Global', symbol: 'NEXA' },
  { name: 'VeloPay', symbol: 'VELO' },
  { name: 'Kinetix Health', symbol: 'KINETIX' },
  { name: 'Aura Logistics', symbol: 'AURA' },
  { name: 'Beacon Media', symbol: 'BEACON' }
];
