import React from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, Zap, Sparkles, Check } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
  onExploreWork: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookConsultation,
  onExploreWork,
  onOpenEstimator,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-slate-100">
      {/* Subtle ambient lighting gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-violet-600/15 blur-3xl pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-10 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean unboxed category kicker without pill badges */}
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-wider uppercase text-cyan-400 mb-4">
              <span>Full-Stack Digital Agency</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Web · Apps · AI · Growth</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 text-balance">
              Digital Products Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Real Growth</span> and Impact.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              We design and build high-performance websites, scalable e-commerce systems, custom software applications, and AI automations for ambitious businesses and growing startups.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onBookConsultation}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer group"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Our Work</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                Calculate Project Cost →
              </button>
            </div>

            {/* Trust bullet features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-6 pt-6 border-t border-slate-900/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>14-Day MVP Launch</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Fixed-Scope Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>30-Day Post-Launch Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative subtle border frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl shadow-cyan-950/30 group">
                {/* Visual Asset */}
                <div className="aspect-[16/10] relative bg-slate-900 overflow-hidden">
                  <img
                    src="/src/assets/images/hero_digital_agency_1794215534968.jpg"
                    alt="Hatua Studios modern digital engineering and interface design showcase"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container if local asset failed
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Overlaid project preview badge bar */}
                <div className="p-4 sm:p-5 bg-slate-900/90 border-t border-slate-800/80 backdrop-blur-sm">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="font-semibold text-white">Project Blueprint v2.4</span>
                    </div>
                    <span className="text-slate-400">High-Performance Architecture</span>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
                    <div>
                      <span className="block text-slate-500">Speed</span>
                      <span className="font-semibold text-slate-200 tabular-nums">0.68s First Paint</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">Uptime</span>
                      <span className="font-semibold text-slate-200 tabular-nums">99.98% Cloud SLA</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">Conversion</span>
                      <span className="font-semibold text-cyan-400 tabular-nums">+142% Average</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-900/95 border border-slate-700/80 backdrop-blur-md rounded-xl p-3.5 shadow-xl items-center gap-3 max-w-xs z-20">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Full-Cycle Digital Agency</p>
                  <p className="text-slate-400">From wireframe to scalable production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
