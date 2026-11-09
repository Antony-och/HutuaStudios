import React, { useState } from 'react';
import { PageType } from '../types';
import { FAQ_ITEMS } from '../data/agencyData';
import { ChevronDown, Search, MessageSquare, ArrowRight, HelpCircle } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageType) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'process' | 'pricing' | 'technical' | 'general'>('all');

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-3">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
            <span>Clarity &amp; Transparency</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
            Everything You Need to Know Before Starting.
          </h1>
          <p className="text-base text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed">
            Transparent answers regarding our delivery models, contracts, intellectual property rights, warranty, and tech stack choices.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C857D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. turnaround, pricing, tech stack, warranty)..."
              className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none focus:border-[#BF603C] transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Questions', value: 'all' },
              { label: 'Process & Sprints', value: 'process' },
              { label: 'Pricing & Contracts', value: 'pricing' },
              { label: 'Technical & Stacks', value: 'technical' },
              { label: 'IP & Ownership', value: 'general' },
            ].map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategoryFilter(cat.value as any)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  categoryFilter === cat.value
                    ? 'bg-[#BF603C] text-white shadow-sm'
                    : 'bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-[#323232] rounded-xl border border-[#E5DFC8] dark:border-[#444444] text-xs text-[#8C857D]">
              No questions matched your search query. Try another term or contact us directly.
            </div>
          ) : (
            filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-white dark:bg-[#323232] border-[#BF603C] shadow-sm'
                      : 'bg-white/80 dark:bg-[#2E2E2E] border-[#E5DFC8] dark:border-[#404040] hover:border-[#BF603C]/50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold font-display text-[#272727] dark:text-[#FAF8F5]">
                      {item.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg text-[#8C857D] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#BF603C] bg-[#BF603C]/10' : 'bg-[#FAF8F5] dark:bg-[#272727]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed border-t border-[#E5DFC8]/60 dark:border-[#404040] pt-4 animate-in fade-in-50 duration-150">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions banner */}
        <div className="p-8 rounded-2xl bg-[#272727] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-display text-white mb-1">
              Have a question specific to your industry or codebase?
            </h4>
            <p className="text-xs text-[#C5BFB8]">
              Our lead engineers reply directly within 2 business hours.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ask a Direct Question →
          </button>
        </div>
      </div>
    </div>
  );
};
