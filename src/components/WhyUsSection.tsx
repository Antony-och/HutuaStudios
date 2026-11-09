import React from 'react';
import { VALUE_PROPS } from '../data/agencyData';
import { Zap, Cpu, ShieldCheck, LifeBuoy, Check, X } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'LifeBuoy':
        return <LifeBuoy className="w-5 h-5 text-amber-400" />;
      default:
        return <Zap className="w-5 h-5 text-cyan-400" />;
    }
  };

  const comparisonRows = [
    {
      factor: 'Project Delivery Speed',
      hutua: '14-Day Average Launch Sprints',
      traditional: '3 to 6 months of scope creep & delays',
    },
    {
      factor: 'Pricing Structure',
      hutua: 'Fixed-Scope Milestones (Zero hidden fees)',
      traditional: 'Vague hourly rates with surprise invoices',
    },
    {
      factor: 'Architecture & Code Quality',
      hutua: 'Bespoke, clean, 99+ Lighthouse performance',
      traditional: 'Bloated multi-purpose WordPress templates',
    },
    {
      factor: 'Direct Communication',
      hutua: 'Direct line to your lead engineer & designer',
      traditional: 'Slow telephone game with junior account managers',
    },
    {
      factor: 'Post-Launch Care',
      hutua: '30-Day Free Bug Warranty & Dedicated Retainers',
      traditional: 'Charges extra for simple bug fixes on day one',
    },
  ];

  return (
    <section id="why-us" className="relative py-24 bg-slate-950/90 border-t border-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Why Hatua Studios</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Agency Built for Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Built to Eliminate the Pain Points of Traditional Agencies.
          </h2>
          <p className="text-slate-400 mt-3 text-base leading-relaxed">
            We operate with startup agility, engineering rigor, and complete transparency so you can launch fast and scale with confidence.
          </p>
        </div>

        {/* 4 Value Props Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.id}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-5">
                  {getIcon(prop.iconName)}
                </div>
                <h3 className="text-base font-bold font-display text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <span className="text-lg font-extrabold text-cyan-400 tabular-nums block">
                  {prop.metric}
                </span>
                <span className="text-[11px] text-slate-400">
                  {prop.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Advantage Matrix */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 overflow-hidden">
          <h3 className="text-lg font-bold font-display text-white mb-2">
            The Hatua Studios Advantage
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            How we compare against traditional agencies and unvetted freelancers.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px]">Evaluation Criteria</th>
                  <th className="py-3 px-4 font-bold text-cyan-400 uppercase tracking-wider text-[11px] bg-cyan-950/20 rounded-t-lg">
                    Hatua Studios
                  </th>
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px] text-slate-500">
                    Traditional Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-slate-300">
                      {row.factor}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-100 bg-cyan-950/10">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{row.hutua}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      <div className="flex items-center gap-2 text-slate-500">
                        <X className="w-4 h-4 text-rose-400/80 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
