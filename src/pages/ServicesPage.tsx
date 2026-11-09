import React, { useState } from 'react';
import { PageType, ServiceItem, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import {
  Globe,
  Store,
  ShoppingBag,
  Layout,
  Share2,
  Code2,
  Bot,
  LifeBuoy,
  Check,
  ArrowRight,
  ArrowUpRight,
  Clock,
  DollarSign,
  Sparkles,
} from 'lucide-react';
import { ProjectEstimator } from '../components/ProjectEstimator';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onSelectServiceModal: (service: ServiceItem) => void;
  onBookServiceDirect: (serviceTitle: string) => void;
  onApplyEstimate: (data: { service: string; budget: string; notes: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceModal,
  onBookServiceDirect,
  onApplyEstimate,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-[#BF603C]" />;
      case 'Store': return <Store className="w-6 h-6 text-[#BF603C]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#BF603C]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#BF603C]" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-[#BF603C]" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-[#BF603C]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#BF603C]" />;
      case 'LifeBuoy': return <LifeBuoy className="w-6 h-6 text-[#BF603C]" />;
      default: return <Globe className="w-6 h-6 text-[#BF603C]" />;
    }
  };

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: 'All Services (8)', value: 'all' },
    { label: 'Web & E-Commerce (4)', value: 'web' },
    { label: 'Software & AI (2)', value: 'software-ai' },
    { label: 'Marketing & IT (2)', value: 'marketing-it' },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-3">
            <span>Our Service Catalog</span>
            <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
            <span>8 Specialized Disciplines</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
            Purpose-Built Digital Services Engineered for Scalability.
          </h1>
          <p className="text-base sm:text-lg text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed">
            Every digital asset we produce is custom-crafted to solve specific operational friction, elevate brand authority, and turn visitors into long-term paying customers.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#F2EDE4] dark:bg-[#323232] rounded-xl border border-[#E5DFC8] dark:border-[#404040] mb-12 max-w-fit">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-[#BF603C] text-white shadow-sm'
                  : 'text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 8 Services Comprehensive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-[#8C857D] block tabular-nums">
                      0{SERVICES_DATA.findIndex((s) => s.id === service.id) + 1}
                    </span>
                    <span className="text-xs font-semibold text-[#BF603C]">
                      From {service.startingPrice}
                    </span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5]">
                  {service.title}
                </h2>
                <p className="text-sm font-semibold text-[#BF603C] mt-1 mb-3">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Key Deliverables */}
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] block mb-2.5">
                    What's Included:
                  </span>
                  <ul className="space-y-2 text-xs text-[#5C5854] dark:text-[#C5BFB8]">
                    {service.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#BF603C] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions & Meta */}
              <div className="pt-5 border-t border-[#E5DFC8]/80 dark:border-[#404040] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#8C857D]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline: {service.estimatedTimeline}</span>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={() => onSelectServiceModal(service)}
                    className="px-3 py-2 text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] hover:text-[#272727] dark:hover:text-[#FAF8F5] bg-[#F2EDE4] dark:bg-[#272727] rounded-lg transition-colors cursor-pointer"
                  >
                    Quick Specs
                  </button>
                  <button
                    onClick={() => onBookServiceDirect(service.title)}
                    className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Project Estimator Tool */}
        <div className="mb-20">
          <ProjectEstimator onApplyEstimate={onApplyEstimate} />
        </div>

        {/* CTA Footer Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#272727] text-[#FAF8F5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold font-display text-white mb-1">
              Need a tailored bundle combining multiple services?
            </h3>
            <p className="text-xs sm:text-sm text-[#C5BFB8]">
              We offer discounted package retainers for startups launching comprehensive web and marketing ecosystems.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Custom Scope &amp; Quote →
          </button>
        </div>
      </div>
    </div>
  );
};
