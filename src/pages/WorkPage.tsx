import React, { useState } from 'react';
import { PageType, CaseStudy } from '../types';
import { CASE_STUDIES, TESTIMONIALS } from '../data/agencyData';
import { ArrowUpRight, ArrowRight, Check, X, Quote, CheckCircle2 } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageType) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<'all' | 'ecommerce' | 'software' | 'ai'>('all');

  const filteredCases = CASE_STUDIES.filter((c) => {
    if (filter === 'ecommerce') return c.serviceCategory.includes('E-Commerce');
    if (filter === 'software') return c.serviceCategory.includes('Software');
    if (filter === 'ai') return c.serviceCategory.includes('Artificial Intelligence');
    return true;
  });

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-3">
            <span>Portfolio &amp; Case Studies</span>
            <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
            <span>Measurable Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
            Real Work Built for Scalable Enterprises.
          </h1>
          <p className="text-base sm:text-lg text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed">
            Every project represents a commercial challenge transformed into an elegant, high-converting digital product. Explore our verified client outcomes below.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {[
            { label: 'All Projects', value: 'all' },
            { label: 'E-Commerce Storefronts', value: 'ecommerce' },
            { label: 'Custom Software & SaaS', value: 'software' },
            { label: 'AI & Automation', value: 'ai' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === tab.value
                  ? 'bg-[#BF603C] text-white shadow-sm'
                  : 'bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Detailed Cards */}
        <div className="space-y-16 mb-20">
          {filteredCases.map((cs, idx) => (
            <div
              key={cs.id}
              className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview */}
                <div className="lg:col-span-6">
                  <div
                    onClick={() => setSelectedCase(cs)}
                    className="aspect-[4/3] rounded-xl overflow-hidden bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] cursor-pointer group relative shadow-inner"
                  >
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#272727]/60 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs bg-white/95 dark:bg-[#272727]/95 px-4 py-2.5 rounded-lg border border-[#E5DFC8] dark:border-[#444444]">
                      <span className="font-medium text-[#6B655F] dark:text-[#A8A39D]">Core Metric: {cs.metricLabel}</span>
                      <span className="font-extrabold text-[#BF603C] text-sm tabular-nums">{cs.metric}</span>
                    </div>
                  </div>
                </div>

                {/* Case Info */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#8C857D] mb-2">
                      <span className="font-semibold text-[#BF603C]">{cs.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cs.serviceCategory}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cs.year}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-3">
                      {cs.title}
                    </h2>

                    <p className="text-sm text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed mb-6">
                      {cs.summary}
                    </p>

                    {/* Challenge & Solution snippets */}
                    <div className="space-y-3 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#404040] text-xs mb-6">
                      <div>
                        <strong className="text-[#272727] dark:text-[#FAF8F5] block mb-0.5">The Challenge:</strong>
                        <p className="text-[#6B655F] dark:text-[#A8A39D]">{cs.challenge}</p>
                      </div>
                      <div className="pt-2 border-t border-[#E5DFC8]/60 dark:border-[#383838]">
                        <strong className="text-[#272727] dark:text-[#FAF8F5] block mb-0.5">The Solution:</strong>
                        <p className="text-[#6B655F] dark:text-[#A8A39D]">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Quantified Results list */}
                    <ul className="space-y-2 text-xs text-[#272727] dark:text-[#FAF8F5] mb-6">
                      {cs.results.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#BF603C] shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E5DFC8]/60 dark:border-[#404040] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {cs.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-[11px] font-medium text-[#8C857D] bg-[#FAF8F5] dark:bg-[#272727] px-2 py-0.5 rounded border border-[#E5DFC8] dark:border-[#444444]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate('contact')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                    >
                      Book Similar Build →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Review Strip */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-8 text-center">
            Client Testimonials Across All Completed Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#BF603C] mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Result: {t.metricHighlight}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5854] dark:text-[#C5BFB8] italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#E5DFC8]/60 dark:border-[#404040]">
                  <div className="w-9 h-9 rounded-full bg-[#BF603C] text-white font-bold flex items-center justify-center text-xs">
                    {t.avatarText}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#272727] dark:text-[#FAF8F5]">{t.author}</h4>
                    <span className="text-[11px] text-[#8C857D]">{t.role} · {t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-10 rounded-2xl bg-[#272727] text-[#FAF8F5]">
          <h3 className="text-2xl font-bold font-display text-white mb-2">
            Have a product, store, or app ready to build?
          </h3>
          <p className="text-xs sm:text-sm text-[#C5BFB8] max-w-lg mx-auto mb-6">
            Let's discuss how our sprint framework can turn your roadmap into a live, scalable production release.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all cursor-pointer"
          >
            Schedule a Free Consultation Call
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#272727]/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#272727] dark:text-[#FAF8F5] overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E5DFC8] dark:border-[#444444]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#BF603C] block mb-1">
                  Case Study · {selectedCase.client}
                </span>
                <h3 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5]">{selectedCase.title}</h3>
                <p className="text-xs text-[#8C857D] mt-0.5">{selectedCase.serviceName}</p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 text-[#8C857D] hover:text-[#272727] dark:hover:text-[#FAF8F5] rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#272727] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-xl overflow-hidden my-5 bg-[#272727] border border-[#E5DFC8] dark:border-[#444444]">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#BF603C]/10 border border-[#BF603C]/30 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-[#BF603C] block font-semibold">Primary Business Metric</span>
                <span className="text-xs text-[#6B655F] dark:text-[#A8A39D]">{selectedCase.metricLabel}</span>
              </div>
              <span className="text-2xl font-extrabold text-[#BF603C] tabular-nums">
                {selectedCase.metric}
              </span>
            </div>

            <div className="space-y-4 mb-6 text-xs sm:text-sm text-[#5C5854] dark:text-[#C5BFB8]">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-1">The Challenge</h4>
                <p>{selectedCase.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-1">Our Solution</h4>
                <p>{selectedCase.solution}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-3">Key Results Delivered</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#272727] dark:text-[#FAF8F5]">
                {selectedCase.results.map((res, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#BF603C] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-[#E5DFC8] dark:border-[#444444]">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 text-xs font-medium text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5] bg-[#F2EDE4] dark:bg-[#272727] rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onNavigate('contact');
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Discuss Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
