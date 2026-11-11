import React, { useState } from 'react';
import { PageType, CaseStudy } from '../types';
import { CASE_STUDIES, TESTIMONIALS } from '../data/agencyData';
import { ArrowRight, ArrowUpRight, Check, CheckCircle2, Quote, X } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageType) => void;
}

type Filter = 'all' | 'ecommerce' | 'software' | 'ai';

const filters: { label: string; value: Filter }[] = [
  { label: 'All outcomes', value: 'all' },
  { label: 'E-Commerce', value: 'ecommerce' },
  { label: 'Software & SaaS', value: 'software' },
  { label: 'AI & Automation', value: 'ai' },
];

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<Filter>('all');

  const filteredCases = CASE_STUDIES.filter((caseStudy) => {
    if (filter === 'ecommerce') return caseStudy.serviceCategory.includes('E-Commerce');
    if (filter === 'software') return caseStudy.serviceCategory.includes('Software');
    if (filter === 'ai') return caseStudy.serviceCategory.includes('Artificial Intelligence');
    return true;
  });

  const featuredCase = filteredCases[0];
  const supportingCases = filteredCases.slice(1);

  return (
    <div className="min-h-screen overflow-hidden bg-[#FAF8F5] text-[#272727] dark:bg-[#272727] dark:text-[#FAF8F5]">
      <section className="relative overflow-hidden bg-[#272727] pb-20 pt-32 text-[#FAF8F5] dark:bg-[#1E1E1E] sm:pb-28 sm:pt-40">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#BF603C]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#D97852]">
                <span>Portfolio &amp; Case Studies</span><span className="text-white/30">/</span><span>Commercial impact</span>
              </div>
              <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.96] tracking-[-0.05em] text-white sm:text-7xl">Work that earns its place in the roadmap.</h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-[#C5BFB8] sm:text-lg">A selection of digital products, commerce experiences, and automation systems built to create a measurable next move.</p>
              <button onClick={() => onNavigate('contact')} className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A6502E]">Talk to Us <ArrowRight className="h-4 w-4" /></button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ['50+', 'projects delivered'],
                ['+142%', 'featured outcome'],
                ['14d', 'average launch sprint'],
                ['99.4%', 'on-time milestones'],
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

      <section className="border-b border-[#E5DFC8] bg-[#F2EDE4] py-8 dark:border-[#404040] dark:bg-[#1E1E1E]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">Explore the work</span>
            <span className="mt-1 block text-sm text-[#6B655F] dark:text-[#C5BFB8]">Filter by the kind of problem you are solving.</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((tab) => (
              <button key={tab.value} onClick={() => setFilter(tab.value)} className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${filter === tab.value ? 'bg-[#BF603C] text-white shadow-sm' : 'border border-[#D9D0C2] bg-[#FAF8F5] text-[#6B655F] hover:border-[#BF603C] hover:text-[#BF603C] dark:border-[#484848] dark:bg-[#323232] dark:text-[#C5BFB8]'}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {featuredCase && (
          <article className="group mb-8 overflow-hidden rounded-[2rem] border border-[#E5DFC8] bg-white shadow-sm dark:border-[#444444] dark:bg-[#323232]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <button onClick={() => setSelectedCase(featuredCase)} className="relative min-h-[320px] overflow-hidden bg-[#272727] text-left lg:min-h-[500px]">
                <img src={featuredCase.image} alt={featuredCase.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#272727]/90 via-[#272727]/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:left-8 sm:right-8">
                  <div><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">Featured outcome</span><span className="mt-2 block text-4xl font-extrabold tracking-tight sm:text-5xl">{featuredCase.metric}</span><span className="mt-1 block text-xs text-white/70">{featuredCase.metricLabel}</span></div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-colors group-hover:bg-[#BF603C]"><ArrowUpRight className="h-5 w-5" /></span>
                </div>
              </button>
              <div className="flex flex-col justify-between p-6 sm:p-9">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#8C857D]"><span className="text-[#BF603C]">{featuredCase.client}</span><span>·</span><span>{featuredCase.serviceCategory}</span><span>·</span><span>{featuredCase.year}</span></div>
                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#272727] dark:text-[#FAF8F5] sm:text-4xl">{featuredCase.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{featuredCase.summary}</p>
                  <div className="mt-7 space-y-4 border-y border-[#E5DFC8] py-5 dark:border-[#444444]">
                    <div><span className="block text-[10px] font-bold uppercase tracking-wider text-[#BF603C]">The challenge</span><p className="mt-1 text-xs leading-relaxed text-[#6B655F] dark:text-[#A8A39D]">{featuredCase.challenge}</p></div>
                    <div><span className="block text-[10px] font-bold uppercase tracking-wider text-[#BF603C]">The solution</span><p className="mt-1 text-xs leading-relaxed text-[#6B655F] dark:text-[#A8A39D]">{featuredCase.solution}</p></div>
                  </div>
                </div>
                <div className="mt-7 flex flex-wrap items-center justify-between gap-4"><div className="flex flex-wrap gap-1.5">{featuredCase.tags.map((tag) => <span key={tag} className="rounded-full border border-[#E5DFC8] px-2.5 py-1 text-[10px] font-medium text-[#8C857D] dark:border-[#444444]">{tag}</span>)}</div><button onClick={() => setSelectedCase(featuredCase)} className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BF603C] hover:text-[#A6502E]">Read the case study <ArrowUpRight className="h-3.5 w-3.5" /></button></div>
              </div>
            </div>
          </article>
        )}

        {supportingCases.length > 0 && <div className="mb-20 grid gap-5 md:grid-cols-2">
          {supportingCases.map((cs) => (
            <article key={cs.id} className="group flex flex-col overflow-hidden rounded-3xl border border-[#E5DFC8] bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-[#444444] dark:bg-[#323232]">
              <button onClick={() => setSelectedCase(cs)} className="relative aspect-[16/9] overflow-hidden bg-[#272727] text-left">
                <img src={cs.image} alt={cs.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#272727]/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white"><div><span className="block text-[10px] font-bold uppercase tracking-wider text-[#D97852]">{cs.serviceCategory}</span><span className="mt-1 block text-2xl font-extrabold">{cs.metric}</span></div><ArrowUpRight className="h-5 w-5 text-[#D97852]" /></div>
              </button>
              <div className="flex flex-1 flex-col p-6"><div className="flex items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-wider text-[#8C857D]"><span className="text-[#BF603C]">{cs.client}</span><span>{cs.year}</span></div><h3 className="mt-4 text-xl font-bold tracking-tight text-[#272727] group-hover:text-[#BF603C] dark:text-[#FAF8F5]">{cs.title}</h3><p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#6B655F] dark:text-[#A8A39D]">{cs.summary}</p><div className="mt-6 flex items-center justify-between border-t border-[#E5DFC8] pt-4 dark:border-[#444444]"><span className="text-[10px] font-bold uppercase tracking-wider text-[#8C857D]">{cs.metricLabel}</span><button onClick={() => setSelectedCase(cs)} className="text-xs font-bold text-[#BF603C]">View outcome →</button></div></div>
            </article>
          ))}
        </div>}

        <section className="mb-20">
          <div className="mb-8 flex items-end justify-between gap-4"><div><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">Client perspective</span><h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#272727] dark:text-[#FAF8F5]">The work is only successful when it works for the people using it.</h2></div><Quote className="hidden h-10 w-10 text-[#BF603C]/30 sm:block" /></div>
          <div className="grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial) => <article key={testimonial.id} className="rounded-3xl border border-[#E5DFC8] bg-[#F2EDE4] p-6 dark:border-[#444444] dark:bg-[#1E1E1E]"><div className="flex items-center gap-2 text-xs font-bold text-[#BF603C]"><CheckCircle2 className="h-4 w-4" />{testimonial.metricHighlight}</div><p className="mt-6 text-base font-medium leading-relaxed text-[#272727] dark:text-[#FAF8F5]">“{testimonial.quote}”</p><div className="mt-6 flex items-center gap-3 border-t border-[#D9D0C2] pt-4 dark:border-[#444444]"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#BF603C] text-xs font-bold text-white">{testimonial.avatarText}</div><div><span className="block text-xs font-bold text-[#272727] dark:text-[#FAF8F5]">{testimonial.author}</span><span className="text-[11px] text-[#8C857D]">{testimonial.role} · {testimonial.company}</span></div></div></article>)}
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#272727] px-6 py-14 text-center text-[#FAF8F5] dark:bg-[#1E1E1E] sm:px-10"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">Your next outcome</span><h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Have a product, store, or app ready to move?</h2><p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#C5BFB8]">Tell us what you are trying to change. We’ll help you identify the most useful place to start.</p><button onClick={() => onNavigate('contact')} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A6502E]">Talk to Us <ArrowRight className="h-4 w-4" /></button></section>
      </main>

      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#272727]/80 p-4 backdrop-blur-md" onClick={() => setSelectedCase(null)}>
          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-[#E5DFC8] bg-[#FAF8F5] text-[#272727] shadow-2xl dark:border-[#444444] dark:bg-[#323232] dark:text-[#FAF8F5]" onClick={(event) => event.stopPropagation()}>
            <div className="relative overflow-hidden rounded-t-[2rem] bg-[#272727]">
              <img src={selectedCase.image} alt={selectedCase.title} className="aspect-[16/7] w-full object-cover opacity-70" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#272727] via-[#272727]/25 to-transparent" />
              <button aria-label="Close case study" onClick={() => setSelectedCase(null)} className="absolute right-5 top-5 rounded-xl border border-white/15 bg-black/20 p-2 text-white backdrop-blur transition-colors hover:bg-[#BF603C]"><X className="h-5 w-5" /></button>
              <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8 sm:right-8"><div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]"><span>Case study</span><span className="text-white/40">/</span><span>{selectedCase.client}</span><span className="text-white/40">/</span><span>{selectedCase.year}</span></div><h3 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">{selectedCase.title}</h3></div>
            </div>

            <div className="p-6 sm:p-9">
              <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr] lg:items-stretch">
                <div><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">Project snapshot</span><p className="mt-3 max-w-2xl text-base leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{selectedCase.summary}</p><div className="mt-5 flex flex-wrap gap-2">{selectedCase.tags.map((tag) => <span key={tag} className="rounded-full border border-[#E5DFC8] px-3 py-1.5 text-[10px] font-semibold text-[#6B655F] dark:border-[#444444] dark:text-[#C5BFB8]">{tag}</span>)}</div></div>
                <div className="rounded-2xl bg-[#272727] p-5 text-white dark:bg-[#1E1E1E]"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">Primary outcome</span><span className="mt-4 block text-4xl font-extrabold tracking-tight text-[#D97852]">{selectedCase.metric}</span><span className="mt-1 block text-xs leading-relaxed text-[#C5BFB8]">{selectedCase.metricLabel}</span><div className="mt-5 border-t border-white/10 pt-4 text-[10px] font-bold uppercase tracking-wider text-[#A8A39D]">{selectedCase.serviceCategory}</div></div>
              </div>

              <div className="my-8 grid gap-4 lg:grid-cols-2">
                <div className="rounded-2xl border border-[#E5DFC8] bg-[#F2EDE4]/60 p-5 dark:border-[#444444] dark:bg-[#272727]"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">01 / The challenge</span><p className="mt-3 text-sm leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{selectedCase.challenge}</p></div>
                <div className="rounded-2xl border border-[#E5DFC8] bg-white p-5 dark:border-[#444444] dark:bg-[#323232]"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">02 / The solution</span><p className="mt-3 text-sm leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{selectedCase.solution}</p></div>
              </div>

              <div className="border-t border-[#E5DFC8] pt-7 dark:border-[#444444]"><div className="flex items-end justify-between gap-4"><div><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">03 / Delivered outcomes</span><h4 className="mt-2 text-xl font-extrabold tracking-tight text-[#272727] dark:text-[#FAF8F5]">What changed after launch</h4></div><CheckCircle2 className="h-7 w-7 text-[#BF603C]/60" /></div><ul className="mt-5 grid gap-3 sm:grid-cols-2">{selectedCase.results.map((result, index) => <li key={result} className="flex items-start gap-3 rounded-xl border border-[#E5DFC8]/70 p-3 text-sm leading-relaxed text-[#5C5854] dark:border-[#444444] dark:text-[#C5BFB8]"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#BF603C]/10 text-[10px] font-bold text-[#BF603C]">0{index + 1}</span>{result}</li>)}</ul></div>

              <div className="mt-8 flex flex-col gap-3 border-t border-[#E5DFC8] pt-5 dark:border-[#444444] sm:flex-row sm:items-center sm:justify-between"><p className="text-xs text-[#8C857D]">Have a similar commercial problem to solve?</p><div className="flex flex-wrap items-center gap-3"><button onClick={() => setSelectedCase(null)} className="rounded-xl bg-[#F2EDE4] px-4 py-2.5 text-xs font-semibold text-[#6B655F] dark:bg-[#272727] dark:text-[#C5BFB8]">Close review</button>{selectedCase.liveUrl && <a href={selectedCase.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#BF603C] px-4 py-2.5 text-xs font-semibold text-[#BF603C] hover:bg-[#BF603C]/10">Visit live project <ArrowUpRight className="h-3.5 w-3.5" /></a>}<button onClick={() => { setSelectedCase(null); onNavigate('contact'); }} className="inline-flex items-center gap-2 rounded-xl bg-[#BF603C] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#A6502E]">Talk to Us <ArrowUpRight className="h-3.5 w-3.5" /></button></div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
