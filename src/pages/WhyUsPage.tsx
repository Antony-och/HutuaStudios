import React from 'react';
import { PageType } from '../types';
import { VALUE_PROPS } from '../data/agencyData';
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Clock3,
  Cpu,
  HeartHandshake,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from 'lucide-react';

interface WhyUsPageProps {
  onNavigate: (page: PageType) => void;
}

const comparisonRows = [
  ['Delivery rhythm', 'Visible milestones and focused 14-day sprints', 'Open-ended timelines and handoff delays'],
  ['Commercial clarity', 'Fixed-scope pricing with defined deliverables', 'Unclear estimates that expand as work moves'],
  ['People in the room', 'Direct access to the makers doing the work', 'Layers of account management between you and delivery'],
  ['Technology choices', 'Modern, maintainable systems selected for the outcome', 'Generic templates and unnecessary complexity'],
  ['After launch', '30-day warranty, handover, and optional ongoing care', 'A project ends when the invoice is paid'],
  ['Ownership', 'Full transfer of code, assets, and design files', 'Platform lock-in or recurring access fees'],
];

const principles = [
  { number: '01', icon: <Target className="h-5 w-5" />, title: 'Start with the business problem', text: 'We begin with the commercial outcome, audience, and constraint—not a favorite tool or template.' },
  { number: '02', icon: <Cpu className="h-5 w-5" />, title: 'Make the complex usable', text: 'Strategy, design, content, and technology are shaped into an experience your team can actually run.' },
  { number: '03', icon: <HeartHandshake className="h-5 w-5" />, title: 'Stay useful after launch', text: 'We document, hand over, train, and remain available when the real-world work starts.' },
];

export const WhyUsPage: React.FC<WhyUsPageProps> = ({ onNavigate }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="h-5 w-5" />;
      case 'Cpu': return <Cpu className="h-5 w-5" />;
      case 'ShieldCheck': return <ShieldCheck className="h-5 w-5" />;
      case 'LifeBuoy': return <LifeBuoy className="h-5 w-5" />;
      default: return <Sparkles className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#FAF8F5] text-[#272727] dark:bg-[#272727] dark:text-[#FAF8F5]">
      <section className="relative overflow-hidden bg-[#272727] pb-20 pt-32 text-[#FAF8F5] dark:bg-[#1E1E1E] sm:pb-28 sm:pt-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#BF603C]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D97852]">
                <span>Why Hutua Studios</span>
                <span className="text-white/30">/</span>
                <span>A better operating model</span>
              </div>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-7xl">
                Good work should feel <span className="text-[#D97852]">clearer</span> from day one.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#C5BFB8] sm:text-lg">
                Hutua is built for teams that want senior thinking, practical execution, and a partner who treats time, budget, and ownership as seriously as the final craft.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A6502E]">
                  Talk to the team <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => onNavigate('process')} className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#D97852] hover:text-[#D97852]">
                  See how we work <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['48', 'specialist services'],
                ['14d', 'average launch sprint'],
                ['100%', 'client satisfaction'],
                ['30d', 'post-launch warranty'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="block text-3xl font-extrabold tracking-tight text-[#D97852]">{value}</span>
                  <span className="mt-2 block text-[10px] font-bold uppercase tracking-wider text-[#A8A39D]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#E5DFC8] bg-[#F2EDE4] py-20 dark:border-[#404040] dark:bg-[#1E1E1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">The partnership experience</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#272727] dark:text-[#FAF8F5] sm:text-5xl">The difference shows up in the way the work runs.</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#6B655F] dark:text-[#C5BFB8]">These are not abstract promises. They are the operating standards we use to make every engagement more predictable and more useful.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {VALUE_PROPS.map((prop, index) => (
              <article key={prop.id} className="group rounded-3xl border border-[#E5DFC8] bg-[#FAF8F5] p-6 transition-all hover:-translate-y-1 hover:border-[#BF603C]/50 hover:shadow-lg dark:border-[#444444] dark:bg-[#323232] sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#BF603C]/20 bg-[#BF603C]/10 text-[#BF603C]">{getIcon(prop.iconName)}</div>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8C857D]">0{index + 1}</span>
                </div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <h3 className="max-w-xs text-xl font-bold tracking-tight text-[#272727] group-hover:text-[#BF603C] dark:text-[#FAF8F5]">{prop.title}</h3>
                  <span className="text-2xl font-extrabold tracking-tight text-[#BF603C]">{prop.metric}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{prop.description}</p>
                <div className="mt-6 flex items-center gap-2 border-t border-[#E5DFC8] pt-4 text-[10px] font-bold uppercase tracking-wider text-[#8C857D] dark:border-[#444444]"><Award className="h-3.5 w-3.5 text-[#BF603C]" /> {prop.metricLabel}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F5] py-20 dark:bg-[#272727]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">Our operating principles</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#272727] dark:text-[#FAF8F5] sm:text-5xl">The rules we bring into every room.</h2>
            </div>
            <span className="max-w-xs text-xs leading-relaxed text-[#8C857D]">A small senior team, a broad capability set, and no unnecessary theatre.</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.number} className="rounded-3xl border border-[#E5DFC8] bg-white p-6 dark:border-[#444444] dark:bg-[#323232]">
                <div className="flex items-center justify-between text-[#BF603C]"><span className="text-xs font-bold tracking-[0.18em]">{principle.number}</span>{principle.icon}</div>
                <h3 className="mt-12 text-lg font-bold text-[#272727] dark:text-[#FAF8F5]">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6B655F] dark:text-[#C5BFB8]">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#E5DFC8] bg-[#F2EDE4] py-20 dark:border-[#404040] dark:bg-[#1E1E1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">Where the difference becomes tangible</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] text-[#272727] dark:text-[#FAF8F5] sm:text-4xl">A more accountable alternative to agency friction.</h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#E5DFC8] bg-white dark:border-[#444444] dark:bg-[#323232]">
            <div className="grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-[#E5DFC8] bg-[#272727] text-[10px] font-bold uppercase tracking-[0.16em] text-[#A8A39D] dark:border-[#444444]">
              <div className="p-4 sm:p-5">What matters</div><div className="p-4 text-[#D97852] sm:p-5">Hutua</div><div className="p-4 sm:p-5">The usual alternative</div>
            </div>
            {comparisonRows.map(([factor, hutua, traditional]) => (
              <div key={factor} className="grid grid-cols-[1fr_1.2fr_1.2fr] border-b border-[#E5DFC8]/70 last:border-b-0 dark:border-[#444444]">
                <div className="p-4 text-xs font-bold text-[#272727] dark:text-[#FAF8F5] sm:p-5 sm:text-sm">{factor}</div>
                <div className="flex items-start gap-2 bg-[#FAF8F5] p-4 text-xs leading-relaxed text-[#5C5854] dark:bg-[#272727] dark:text-[#C5BFB8] sm:p-5"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#BF603C]" />{hutua}</div>
                <div className="flex items-start gap-2 p-4 text-xs leading-relaxed text-[#8C857D] sm:p-5"><X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B77B6B]" />{traditional}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#272727] py-20 text-center text-[#FAF8F5] dark:bg-[#1E1E1E]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">A better next step</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">Bring us the problem worth solving.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#C5BFB8]">Tell us where the friction is. We’ll help you identify the most useful place to start.</p>
          <button onClick={() => onNavigate('contact')} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A6502E]">Book a free consultation <ArrowRight className="h-4 w-4" /></button>
        </div>
      </section>
    </div>
  );
};
