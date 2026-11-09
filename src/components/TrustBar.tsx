import React from 'react';
import { TRUST_STATS, CLIENT_LOGOS } from '../data/agencyData';
import { Award, CheckCircle2, ShieldCheck, TrendingUp } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="relative border-y border-slate-900 bg-slate-950/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stat strip with tabular numerals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-10 border-b border-slate-900/80">
          {TRUST_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white tabular-nums">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300">
                  {stat.value}
                </span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Client Trust Logotypes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 shrink-0">
            Trusted by founders &amp; growing brands
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <div className="w-5 h-5 rounded-md bg-slate-900 border border-slate-800 flex items-center justify-center text-[10px] font-bold text-cyan-400">
                  {client.symbol[0]}
                </div>
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
