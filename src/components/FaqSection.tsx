import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/agencyData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onAskQuestion: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onAskQuestion }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Clarity &amp; Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Everything You Need to Know Before Starting.
          </h2>
          <p className="text-slate-400 mt-3 text-base leading-relaxed">
            Straightforward answers regarding our delivery models, contracts, intellectual property, and tech stacks.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/90 border-cyan-500/50 shadow-md'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-1 rounded-lg text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950/40' : 'bg-slate-800'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-in fade-in-50 duration-150">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Have a specific question not covered here?</h4>
            <p className="text-xs text-slate-400">Our engineering leads respond directly without sales fluff.</p>
          </div>
          <button
            onClick={onAskQuestion}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Ask a Direct Question
          </button>
        </div>
      </div>
    </section>
  );
};
