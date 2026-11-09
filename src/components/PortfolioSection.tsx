import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';
import { ArrowUpRight, Check, X, Layers, ExternalLink } from 'lucide-react';

interface PortfolioSectionProps {
  onBookConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onBookConsultation,
}) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section id="portfolio" className="relative py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
              <span>Featured Work</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Proven Commercial Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
              Selected Projects Delivered for Growing Brands.
            </h2>
            <p className="text-slate-400 mt-3 text-base leading-relaxed">
              Real results backed by clean engineering, thoughtful design, and obsessive attention to customer conversion.
            </p>
          </div>

          <button
            onClick={onBookConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/20 hover:bg-cyan-950/40 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Have a project in mind?</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="group cursor-pointer rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Media frame */}
                <div className="aspect-[4/3] relative bg-slate-900 overflow-hidden border-b border-slate-800/80">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Overlaid outcome stat */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs backdrop-blur-md bg-slate-950/80 border border-slate-800 px-3 py-2 rounded-lg">
                    <span className="text-[11px] text-slate-300 font-medium">Outcome Metric</span>
                    <span className="font-bold text-cyan-400 tabular-nums">{item.metric}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{item.serviceCategory}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.year}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {item.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="p-6 pt-0 border-t border-slate-800/40 mt-4 flex items-center justify-between text-xs text-slate-400">
                <span className="group-hover:text-cyan-400 transition-colors font-medium">
                  View full case study
                </span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1">
                  Case Study · {selectedCase.client}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">{selectedCase.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{selectedCase.serviceName}</p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close case study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Featured Image */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden my-5 bg-slate-950 border border-slate-800">
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Metric Banner */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-cyan-300 block font-medium">Primary Business Metric</span>
                <span className="text-xs text-slate-400">{selectedCase.metricLabel}</span>
              </div>
              <span className="text-2xl font-extrabold text-cyan-400 tabular-nums">
                {selectedCase.metric}
              </span>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">The Challenge</h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{selectedCase.challenge}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Our Solution</h4>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">{selectedCase.solution}</p>
              </div>
            </div>

            {/* Quantified Results */}
            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Key Results Delivered</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedCase.results.map((res, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-800">
              <button
                onClick={() => setSelectedCase(null)}
                className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCase(null);
                  onBookConsultation();
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Discuss Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
