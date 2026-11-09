import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem, ServiceCategory } from '../types';
import {
  Globe,
  Store,
  ShoppingBag,
  Layout,
  Share2,
  Code2,
  Bot,
  LifeBuoy,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  onBookServiceDirect: (serviceTitle: string) => void;
  onBookConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceModal,
  onBookServiceDirect,
  onBookConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = SERVICES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Store':
        return <Store className="w-6 h-6 text-blue-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-violet-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-pink-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-400" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-emerald-400" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-6 h-6 text-amber-400" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: 'All Services (8)', value: 'all' },
    { label: 'Web & E-Commerce', value: 'web' },
    { label: 'Software & AI', value: 'software-ai' },
    { label: 'Marketing & IT Advisory', value: 'marketing-it' },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span>Core Capabilities</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>8 Core Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              End-to-End Digital Solutions Tailored for Scalability.
            </h2>
            <p className="text-slate-400 mt-3 text-base leading-relaxed">
              From high-converting storefronts to enterprise software automation, we turn complex technical hurdles into revenue drivers.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.value
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl p-6 bg-slate-900/70 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                service.highlight
                  ? 'border-cyan-500/40 hover:border-cyan-400/80 shadow-lg shadow-cyan-950/20'
                  : 'border-slate-800/80 hover:border-slate-700/80 shadow-md shadow-black/20'
              }`}
            >
              <div>
                {/* Top Row: Icon + Service Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono tabular-nums text-slate-500">
                    0{SERVICES_DATA.findIndex((s) => s.id === service.id) + 1}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400/90 mt-1 mb-3">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Quick Deliverables Preview */}
                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-800/60">
                  {service.deliverables.slice(0, 2).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectServiceModal(service)}
                  className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3 text-cyan-400 transition-transform group-hover:translate-x-0.5" />
                </button>

                <button
                  onClick={() => onBookServiceDirect(service.title)}
                  className="px-3 py-1.5 text-[11px] font-semibold text-white bg-slate-800 hover:bg-cyan-600 rounded-lg transition-colors cursor-pointer"
                >
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mid-section Primary Call to Action Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold font-display text-white">
              Not sure which service fits your current stage?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Talk directly with a senior solutions architect for a zero-obligation 20-minute feasibility review.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={onBookConsultation}
              className="px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
