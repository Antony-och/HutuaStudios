import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/agencyData';
import { Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[activeIndex];

  return (
    <section className="relative py-24 bg-slate-950/80 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Client Proof</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>100% Client Satisfaction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            What Founders Say About Working with Hutua Studios.
          </h2>
          <p className="text-slate-400 mt-3 text-base leading-relaxed">
            Direct feedback from teams that accelerated their digital transformation with our engineering and design sprints.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-8 sm:p-12 relative overflow-hidden mb-8">
          <div className="absolute top-6 right-8 text-slate-800/60 pointer-events-none">
            <Quote className="w-24 h-24" />
          </div>

          <div className="relative z-10 max-w-3xl">
            {/* Outcome tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-6 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Commercial Impact: {active.metricHighlight}</span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 leading-relaxed mb-8">
              "{active.quote}"
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-700 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {active.avatarText}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{active.author}</h3>
                  <p className="text-xs text-slate-400">
                    {active.role} · <span className="text-slate-200 font-medium">{active.company}</span>
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous quote"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 px-2 tabular-nums">
                  0{activeIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next quote"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small thumbnail cards for all 4 clients */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeIndex === idx
                  ? 'bg-slate-900 border-cyan-500/50 shadow-md'
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-white">{t.company}</span>
                <span className="text-cyan-400 font-mono text-[11px]">{t.metricHighlight}</span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-2">
                "{t.quote}"
              </p>
              <span className="block text-[11px] text-slate-500 mt-2">
                — {t.author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
