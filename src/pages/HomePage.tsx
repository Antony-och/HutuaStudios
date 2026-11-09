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
} from 'lucide-react';
import { ProjectEstimator } from '../components/ProjectEstimator';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectServiceModal: (service: ServiceItem) => void;
  onApplyEstimate: (data: { service: string; budget: string; notes: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectServiceModal,
  onApplyEstimate,
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
      default: return <Globe className="w-5 h-5 text-[#BF603C]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] border-b border-[#E5DFC8] dark:border-[#404040]">
        {/* Subtle warm architectural glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#BF603C]/5 blur-3xl pointer-events-none rounded-full"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              {/* Clean unboxed kicker */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#BF603C] mb-4">
                <span>Digital Agency &amp; Software Solutions</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>Web · Commerce · Apps · AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-balance text-[#272727] dark:text-[#FAF8F5]">
                Digital Products Crafted for <span className="text-[#BF603C]">Real Commercial Growth</span> and Impact.
              </h1>

              <p className="text-lg sm:text-xl text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed max-w-2xl mb-8">
                Hutua Studios designs and engineers high-performance websites, scalable e-commerce systems, custom software applications, and AI workflows for modern businesses.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer group"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('work')}
                  className="px-6 py-3.5 text-sm font-semibold text-[#272727] dark:text-[#FAF8F5] bg-white dark:bg-[#323232] hover:bg-[#F2EDE4] dark:hover:bg-[#3B3B3B] border border-[#E5DFC8] dark:border-[#484848] rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>View Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-[#BF603C]" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="px-4 py-3.5 text-sm font-medium text-[#6B655F] dark:text-[#A8A39D] hover:text-[#BF603C] transition-colors cursor-pointer"
                >
                  Explore 8 Services →
                </button>
              </div>

              {/* Value metrics strip */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-[#E5DFC8] dark:border-[#404040] text-xs text-[#6B655F] dark:text-[#A8A39D]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#BF603C] shrink-0" />
                  <span>14-Day Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#BF603C] shrink-0" />
                  <span>Transparent Fixed Scope</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#BF603C] shrink-0" />
                  <span>30-Day Launch Warranty</span>
                </div>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden border border-[#E5DFC8] dark:border-[#444444] bg-white dark:bg-[#323232] shadow-xl group">
                  <div className="aspect-[16/10] relative bg-[#272727] overflow-hidden">
                    <img
                      src="/src/assets/images/hero_digital_agency_1794215534968.jpg"
                      alt="Hutua Studios high-performance digital engineering"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#272727]/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Overlaid stat bar */}
                  <div className="p-5 bg-white dark:bg-[#323232] border-t border-[#E5DFC8] dark:border-[#404040]">
                    <div className="flex items-center justify-between text-xs text-[#272727] dark:text-[#FAF8F5]">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#BF603C]" />
                        <span className="font-semibold">Hutua Delivery Standard</span>
                      </div>
                      <span className="text-xs text-[#6B655F] dark:text-[#A8A39D]">Continuous SLA</span>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-[#E5DFC8]/60 dark:border-[#404040] text-[11px] text-[#6B655F] dark:text-[#A8A39D]">
                      <div>
                        <span className="block text-[#8C857D]">Turnaround</span>
                        <span className="font-semibold text-[#272727] dark:text-[#FAF8F5] tabular-nums">14 Days Avg.</span>
                      </div>
                      <div>
                        <span className="block text-[#8C857D]">Code Quality</span>
                        <span className="font-semibold text-[#272727] dark:text-[#FAF8F5] tabular-nums">99+ Vitals</span>
                      </div>
                      <div>
                        <span className="block text-[#8C857D]">Conversion</span>
                        <span className="font-semibold text-[#BF603C] tabular-nums">+142% Avg.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-10 bg-[#F2EDE4]/60 dark:bg-[#1E1E1E] border-b border-[#E5DFC8] dark:border-[#404040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-8 border-b border-[#E5DFC8] dark:border-[#333333]">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-3xl sm:text-4xl font-extrabold font-display text-[#BF603C] tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-[#6B655F] dark:text-[#A8A39D] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#8C857D] shrink-0">
              Trusted by startups, local businesses &amp; entrepreneurs
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-3">
              {CLIENT_LOGOS.map((client, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[#5C5854] dark:text-[#C5BFB8]">
                  <div className="w-5 h-5 rounded bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] flex items-center justify-center text-[10px] font-bold text-[#BF603C]">
                    {client.symbol[0]}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 8 Services Preview */}
      <section className="py-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-2">
                <span>Our Capabilities</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>8 Core Disciplines</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5]">
                Full-Service Digital Solutions Built to Convert.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs sm:text-sm font-semibold text-[#BF603C] hover:text-[#A6502E] flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>View All 8 Services with Scope &amp; Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.map((srv, idx) => (
              <div
                key={srv.id}
                className="p-6 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] flex items-center justify-center">
                      {getServiceIcon(srv.iconName)}
                    </div>
                    <span className="text-xs font-mono text-[#8C857D] tabular-nums">0{idx + 1}</span>
                  </div>

                  <h3 className="text-base font-bold font-display text-[#272727] dark:text-[#FAF8F5] group-hover:text-[#BF603C] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#BF603C] mt-1 mb-2">
                    {srv.tagline}
                  </p>
                  <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] line-clamp-3 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5DFC8]/60 dark:border-[#404040] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#272727] dark:text-[#FAF8F5]">
                    From {srv.startingPrice}
                  </span>
                  <button
                    onClick={() => onSelectServiceModal(srv)}
                    className="text-xs font-medium text-[#BF603C] hover:text-[#A6502E] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process & Why Us Highlight */}
      <section className="py-20 bg-[#F2EDE4]/60 dark:bg-[#1E1E1E] border-y border-[#E5DFC8] dark:border-[#404040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-2">
                <span>The Hutua Standard</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>Structured Delivery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
                From Strategy to Scalable Launch in 4 Clear Sprints.
              </h2>
              <p className="text-sm text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed mb-6">
                We remove the guesswork with milestone-based delivery, dedicated staging environments, and daily async updates.
              </p>
              <div className="space-y-3 mb-8">
                {PROCESS_STEPS.map((step) => (
                  <div key={step.number} className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#272727] dark:text-[#FAF8F5]">
                    <div className="w-6 h-6 rounded-md bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center font-bold text-xs shrink-0">
                      {step.number}
                    </div>
                    <span>{step.title}</span>
                    <span className="text-xs text-[#8C857D] ml-auto">{step.duration}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('process')}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#272727] dark:bg-[#BF603C] hover:bg-[#BF603C] dark:hover:bg-[#A6502E] rounded-xl transition-colors cursor-pointer"
              >
                Explore Full 4-Step Process →
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUE_PROPS.map((prop) => (
                <div
                  key={prop.id}
                  className="p-5 rounded-2xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="text-lg font-extrabold font-display text-[#BF603C] tabular-nums block mb-1">
                      {prop.metric}
                    </span>
                    <h4 className="text-sm font-bold text-[#272727] dark:text-[#FAF8F5] mb-2">
                      {prop.title}
                    </h4>
                    <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                  <span className="text-[11px] text-[#8C857D] pt-3 mt-3 border-t border-[#E5DFC8]/60 dark:border-[#383838]">
                    {prop.metricLabel}
                  </span>
                </div>
              ))}
            </div>
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

      {/* 6. Interactive Estimator Tool on Home */}
      <section className="py-12 bg-[#F2EDE4]/40 dark:bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectEstimator onApplyEstimate={onApplyEstimate} />
        </div>
      </section>

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
              <span>Book a Free Consultation</span>
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
