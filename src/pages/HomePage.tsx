import React from 'react';
import { PageType, ServiceItem } from '../types';
import { SERVICES_DATA, TRUST_STATS, CLIENT_LOGOS, VALUE_PROPS, PROCESS_STEPS, CASE_STUDIES } from '../data/agencyData';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Globe,
  Store,
  ShoppingBag,
  Layout,
  Share2,
  Code2,
  Bot,
  LifeBuoy,
  Sparkles,
  ShieldCheck,
  Zap,
  Clock,
  PartyPopper,
  Rocket,
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectServiceModal: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectServiceModal,
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5 text-[#BF603C]" />;
      case 'Store': return <Store className="w-5 h-5 text-[#BF603C]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#BF603C]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#BF603C]" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-[#BF603C]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-[#BF603C]" />;
      case 'Bot': return <Bot className="w-5 h-5 text-[#BF603C]" />;
      case 'LifeBuoy': return <LifeBuoy className="w-5 h-5 text-[#BF603C]" />;
      case 'PartyPopper': return <PartyPopper className="w-5 h-5 text-[#BF603C]" />;
      case 'Rocket': return <Rocket className="w-5 h-5 text-[#BF603C]" />;
      default: return <Globe className="w-5 h-5 text-[#BF603C]" />;
    }
  };

  const featuredTitles = [
    'Logo & Corporate Identity',
    'Basic Website Design',
    'E-Commerce Website Design',
    'Social Media Packages',
    'Creative Ad Design',
    'Brand Activations',
    'Software & Applications',
    'Go-To-Market Strategy',
  ];
  const featuredServices = featuredTitles
    .map((title) => SERVICES_DATA.find((service) => service.title === title))
    .filter((service): service is ServiceItem => Boolean(service));

  const homepageCategories = [
    ['01', 'Branding & Creative Design', 'Identity systems, content, and visual production.', '6 services'],
    ['02', 'Website & E-Commerce', 'Websites, stores, marketplaces, and care plans.', '5 services'],
    ['03', 'Digital Marketing & Social Media', 'Content, community, campaigns, and analytics.', '6 services'],
    ['04', 'Advertising, SEO & Public Relations', 'Paid media, search visibility, and reputation.', '11 services'],
    ['05', 'Brand Activations, Promotions & Events', 'Experiences, promotions, print, and events.', '11 services'],
    ['06', 'Technology & Software Solutions', 'Apps, AI, IT support, and digital products.', '6 services'],
    ['07', 'Strategy & Consulting', 'Transformation, market entry, and research.', '3 services'],
  ];

  return (
    <div className="space-y-0">
      {/* 1. Editorial Hero */}
      <section className="relative overflow-hidden border-b border-[#E5DFC8] bg-[#F2EDE4] pb-16 pt-28 text-[#272727] dark:border-[#404040] dark:bg-[#1E1E1E] dark:text-[#FAF8F5] sm:pb-24 sm:pt-36">
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#BF603C]/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-12rem] h-64 w-64 rounded-full bg-[#E5DFC8]/70 blur-3xl dark:bg-[#BF603C]/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">
                <span>Hutua Studios</span>
                <span className="text-[#BF603C]/40">/</span>
                <span>Digital systems for ambitious businesses</span>
              </div>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] text-[#272727] dark:text-[#FAF8F5] sm:text-7xl lg:text-[5.5rem]">
                Make your next move <span className="text-[#BF603C]">impossible to ignore.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#5C5854] dark:text-[#C5BFB8] sm:text-lg">
                We turn brand ambition into high-performing websites, commerce experiences, software, campaigns, and launch moments that move the business forward.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#BF603C]/20 transition-colors hover:bg-[#A6502E]"
                >
                  Start with a brief
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('work')}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#D9D0C2] bg-[#FAF8F5]/70 px-5 py-3.5 text-sm font-semibold text-[#272727] transition-colors hover:border-[#BF603C] hover:text-[#BF603C] dark:border-[#484848] dark:bg-[#323232]/70 dark:text-[#FAF8F5]"
                >
                  See the work
                  <ArrowUpRight className="h-4 w-4 text-[#BF603C]" />
                </button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 border-t border-[#D9D0C2] pt-5 dark:border-[#404040]">
                <div>
                  <span className="block text-2xl font-bold tracking-tight text-[#272727] dark:text-[#FAF8F5]">48</span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-[#8C857D]">Services</span>
                </div>
                <div className="border-l border-[#D9D0C2] pl-4 dark:border-[#404040]">
                  <span className="block text-2xl font-bold tracking-tight text-[#272727] dark:text-[#FAF8F5]">14d</span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-[#8C857D]">Avg. launch</span>
                </div>
                <div className="border-l border-[#D9D0C2] pl-4 dark:border-[#404040]">
                  <span className="block text-2xl font-bold tracking-tight text-[#272727] dark:text-[#FAF8F5]">30d</span>
                  <span className="mt-1 block text-[10px] font-bold uppercase tracking-wider text-[#8C857D]">Warranty</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Proof & Trust */}
      <section className="border-b border-[#404040] bg-[#272727] py-12 text-[#FAF8F5] dark:bg-[#1E1E1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">Proof over promises</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">Built to create momentum, not just deliverables.</h2>
            </div>
            <span className="max-w-xs text-xs leading-relaxed text-[#A8A39D]">A focused partner for the work that needs to perform after launch.</span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <span className="block text-3xl font-extrabold tracking-tight text-[#D97852] sm:text-4xl">{stat.value}</span>
                <span className="mt-2 block text-[10px] font-bold uppercase tracking-wider text-[#A8A39D]">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/10 pt-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
              <div className="shrink-0">
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#D97852]">Selected collaborators</span>
                <span className="mt-1 block text-xs text-[#A8A39D]">Trusted by startups, local businesses &amp; entrepreneurs</span>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {CLIENT_LOGOS.map((client, idx) => (
                  <div key={idx} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[#C5BFB8]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#BF603C]/15 text-[10px] font-bold text-[#D97852]">{client.symbol[0]}</span>
                    <span className="truncate text-[11px] font-semibold">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capability Categories */}
      <section className="bg-[#FAF8F5] py-24 text-[#272727] dark:bg-[#272727] dark:text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#BF603C]">
                <span>Our Capabilities</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>7 disciplines / 48 services</span>
              </div>
              <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.03em] text-[#272727] dark:text-[#FAF8F5] sm:text-5xl">
                The right specialist for every stage of growth.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6B655F] dark:text-[#C5BFB8]">Move from first impression to full-scale operation with one connected team across brand, growth, experience, technology, and strategy.</p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs sm:text-sm font-semibold text-[#BF603C] hover:text-[#A6502E] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Explore All 48 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            {homepageCategories.map(([number, title, description, count], idx) => (
              <div
                key={title}
                onClick={() => onNavigate('services')}
                className={`group relative flex min-h-[190px] cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#BF603C]/60 hover:shadow-xl dark:bg-[#323232] ${idx === 0 || idx === 4 ? 'md:col-span-6 border-[#BF603C]/50' : 'md:col-span-3 border-[#E5DFC8] dark:border-[#444444]'}`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#BF603C]/5 transition-transform duration-500 group-hover:scale-150" />
                <div>
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">Category {number}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#BF603C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h3 className="max-w-sm text-lg font-bold leading-snug text-[#272727] transition-colors group-hover:text-[#BF603C] dark:text-[#FAF8F5]">{title}</h3>
                  <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#6B655F] dark:text-[#A8A39D]">{description}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#E5DFC8]/60 pt-3 text-[10px] font-bold uppercase tracking-wider text-[#8C857D] dark:border-[#404040]">
                  <span>{count}</span>
                  <span className="text-[#BF603C]">Explore category</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Hutua Standard */}
      <section className="border-y border-[#404040] bg-[#272727] py-24 text-[#FAF8F5] dark:bg-[#1E1E1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D97852]">
                <span>The Hutua Standard</span>
                <span className="text-white/30">/</span>
                <span>How work moves</span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-5xl">A calm, accountable path from idea to impact.</h2>
            </div>
            <div className="max-w-sm">
              <p className="text-sm leading-relaxed text-[#C5BFB8]">No black boxes or disappearing handoffs. Every project has a visible next step, a named owner, and a clear definition of done.</p>
              <button onClick={() => onNavigate('why-us')} className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#D97852] transition-colors hover:text-white">
                Explore the full delivery process <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="group relative bg-[#2D2D2D] p-6 transition-colors hover:bg-[#353535] dark:bg-[#242424] dark:hover:bg-[#2D2D2D]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.18em] text-[#D97852]">{step.number}</span>
                  {index < PROCESS_STEPS.length - 1 && <ArrowRight className="hidden h-4 w-4 text-white/20 md:block" />}
                </div>
                <h3 className="mt-12 text-base font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#A8A39D]">{step.description}</p>
                <span className="mt-6 block border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-wider text-[#A8A39D]">{step.duration}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE_PROPS.map((prop) => (
              <div key={prop.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="block text-xl font-extrabold tracking-tight text-[#D97852]">{prop.metric}</span>
                <span className="mt-1 block text-xs font-semibold text-white">{prop.title}</span>
                <span className="mt-2 block text-[10px] leading-relaxed text-[#A8A39D]">{prop.metricLabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Selected Work Spotlight */}
      <section className="py-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-2">
                <span>Featured Case Studies</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>Commercial Impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5]">
                Proven Outcomes for Ambitious Brands.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="text-xs sm:text-sm font-semibold text-[#BF603C] hover:text-[#A6502E] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Explore All Case Studies &amp; Outcomes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c) => (
              <div
                key={c.id}
                onClick={() => onNavigate('work')}
                className="group cursor-pointer rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] relative bg-[#272727] overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-2.5 right-2.5 bg-white/95 dark:bg-[#272727]/95 px-2.5 py-1 rounded text-xs font-bold text-[#BF603C] border border-[#E5DFC8] dark:border-[#444444]">
                      {c.metric}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-[#8C857D] uppercase tracking-wider block mb-1">
                      {c.serviceCategory}
                    </span>
                    <h3 className="text-base font-bold font-display text-[#272727] dark:text-[#FAF8F5] group-hover:text-[#BF603C] transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] mt-1.5 line-clamp-2">
                      {c.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between text-xs text-[#BF603C] font-semibold">
                  <span>Read case study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Form on Home */}
      <ContactSection />

      {/* 7. Bottom Conversion Banner */}
      <section className="py-20 bg-[#272727] text-[#FAF8F5] border-t border-[#404040]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#BF603C] block mb-2">
            Start Your Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">
            Ready to Launch or Upgrade Your Digital Presence?
          </h2>
          <p className="text-sm sm:text-base text-[#C5BFB8] max-w-2xl mx-auto mb-8">
            Schedule a free 20-minute consultation. We'll review your objectives, suggest the optimal technology stack, and provide a fixed-scope milestone proposal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Talk to Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/15550194821?text=Hello%20Hutua%20Studios,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 text-sm font-semibold text-[#FAF8F5] bg-[#323232] hover:bg-[#3E3E3E] border border-[#484848] rounded-xl transition-all cursor-pointer"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
