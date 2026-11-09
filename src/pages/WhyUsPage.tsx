import React from 'react';
import { PageType } from '../types';
import { VALUE_PROPS } from '../data/agencyData';
import { Zap, Cpu, ShieldCheck, LifeBuoy, Check, X, ArrowRight, Award, Clock, HeartHandshake } from 'lucide-react';

interface WhyUsPageProps {
  onNavigate: (page: PageType) => void;
}

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-6 h-6 text-[#BF603C]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#BF603C]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#BF603C]" />;
      case 'LifeBuoy': return <LifeBuoy className="w-6 h-6 text-[#BF603C]" />;
      default: return <Zap className="w-6 h-6 text-[#BF603C]" />;
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
      hutua: 'Fixed-Scope Milestones (Zero surprise overages)',
      traditional: 'Vague hourly rates with escalating invoices',
    },
    {
      factor: 'Code Quality & Tech Stack',
      hutua: 'Bespoke TypeScript & modern cloud hosting (99+ Speed)',
      traditional: 'Bloated multi-purpose WordPress templates & plugins',
    },
    {
      factor: 'Direct Communication',
      hutua: 'Direct line to your lead engineer & designer',
      traditional: 'Slow telephone game through non-technical account reps',
    },
    {
      factor: 'Post-Launch Care',
      hutua: '30-Day Free Bug Warranty & Dedicated Retainers',
      traditional: 'Charges extra for simple bug fixes on day one',
    },
    {
      factor: 'Intellectual Property',
      hutua: '100% full transfer of all code, assets & design files',
      traditional: 'Proprietary lock-in or recurring license fees',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-3">
            <span>Why Hutua Studios</span>
            <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
            <span>Agency Philosophy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
            Built to Eliminate the Waste, Delays, and Frustrations of Traditional Agencies.
          </h1>
          <p className="text-base sm:text-lg text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed">
            We operate with startup velocity and senior engineering discipline. When you partner with Hutua Studios, you work directly with makers who care about your balance sheet as much as the craft.
          </p>
        </div>

        {/* 4 Value Pillars Detailed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {VALUE_PROPS.map((prop, idx) => (
            <div
              key={prop.id}
              className="p-8 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] flex items-center justify-center">
                    {getIcon(prop.iconName)}
                  </div>
                  <span className="text-2xl font-black font-display text-[#BF603C] tabular-nums">
                    {prop.metric}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed mb-6">
                  {prop.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DFC8]/60 dark:border-[#404040]">
                <span className="text-xs text-[#8C857D] font-medium">
                  Verified Benchmark: {prop.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Advantage Table */}
        <div className="rounded-2xl border border-[#E5DFC8] dark:border-[#444444] bg-white dark:bg-[#323232] p-6 sm:p-10 shadow-sm mb-20">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-2">
              Side-by-Side Evaluation: Hutua Studios vs. Traditional Agencies
            </h2>
            <p className="text-xs sm:text-sm text-[#6B655F] dark:text-[#A8A39D]">
              Clear expectations, honest commitments, and predictable deliverables from day one.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E5DFC8] dark:border-[#404040] text-[#8C857D]">
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px]">Deliverable Standard</th>
                  <th className="py-3 px-4 font-bold text-[#BF603C] uppercase tracking-wider text-[11px] bg-[#FAF8F5] dark:bg-[#272727] rounded-t-lg">
                    Hutua Studios
                  </th>
                  <th className="py-3 px-4 font-semibold uppercase tracking-wider text-[11px] text-[#8C857D]">
                    Traditional Agencies / Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5DFC8]/60 dark:divide-[#404040]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/60 dark:hover:bg-[#2A2A2A] transition-colors">
                    <td className="py-4 px-4 font-medium text-[#272727] dark:text-[#FAF8F5]">
                      {row.factor}
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#272727] dark:text-[#FAF8F5] bg-[#FAF8F5]/80 dark:bg-[#272727]/80">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#BF603C] shrink-0" />
                        <span>{row.hutua}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-[#6B655F] dark:text-[#A8A39D]">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#272727] text-[#FAF8F5] text-center">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
            Experience the Difference of Working with Real Builders.
          </h3>
          <p className="text-xs sm:text-sm text-[#C5BFB8] max-w-xl mx-auto mb-8">
            Tell us about your upcoming website, app, or marketing requirements for a free, transparent feasibility review.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Your Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
