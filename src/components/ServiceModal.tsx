import React from 'react';
import { ServiceItem } from '../types';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  DollarSign,
  Layers3,
  X,
} from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

const categoryLabels: Record<string, string> = {
  branding: 'Branding & creative',
  web: 'Web & commerce',
  'software-ai': 'Software & AI',
  'marketing-it': 'Marketing & IT',
  'advertising-pr': 'Advertising & PR',
  'activations-events': 'Activations & events',
  'strategy-consulting': 'Strategy & consulting',
};

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#272727]/80 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        className="relative grid w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-[#E5DFC8] bg-[#FAF8F5] text-[#272727] shadow-2xl dark:border-[#444444] dark:bg-[#272727] dark:text-[#FAF8F5] md:grid-cols-[0.78fr_1.22fr]"
        onClick={(event) => event.stopPropagation()}
      >
        <aside className="relative overflow-hidden bg-[#272727] p-6 text-[#FAF8F5] dark:bg-[#1E1E1E] sm:p-8">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#BF603C]/25 blur-3xl" />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">
                <Layers3 className="h-3.5 w-3.5" />
                {categoryLabels[service.category] || 'Specialized service'}
              </span>
              <button
                onClick={onClose}
                className="rounded-xl p-2 text-[#A8A39D] transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-16 sm:mt-24">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A8A39D]">Scope review</span>
              <h2 id="service-modal-title" className="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-[#D97852]">{service.tagline}</p>
            </div>

            <div className="mt-auto grid gap-3 pt-12 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Clock3 className="h-4 w-4 text-[#D97852]" />
                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#A8A39D]">Typical timeline</span>
                <span className="mt-1 block text-sm font-semibold text-white">{service.estimatedTimeline}</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <DollarSign className="h-4 w-4 text-[#D97852]" />
                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#A8A39D]">Starting investment</span>
                <span className="mt-1 block text-sm font-semibold text-white">{service.startingPrice}</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex max-h-[90vh] flex-col overflow-y-auto p-6 sm:p-8">
          <div className="flex-1">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#BF603C]">What this includes</span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#272727] dark:text-[#FAF8F5]">A clear scope built around the outcome.</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">{service.fullDesc}</p>
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8C857D]">Key deliverables</h4>
                <span className="text-xs text-[#8C857D]">{service.deliverables.length} included items</span>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {service.deliverables.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#E5DFC8] bg-white/70 p-3.5 dark:border-[#444444] dark:bg-[#323232]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#BF603C]/10 text-[10px] font-bold text-[#BF603C]">{String(index + 1).padStart(2, '0')}</span>
                    <div className="flex items-start gap-2 text-xs leading-relaxed text-[#5C5854] dark:text-[#C5BFB8]">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#BF603C]" />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[#E5DFC8] pt-5 dark:border-[#444444] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold text-[#272727] dark:text-[#FAF8F5]">Ready to make this real?</p>
              <p className="mt-1 text-[11px] text-[#8C857D]">30-day warranty · 100% IP transfer · clear milestone scope</p>
            </div>
            <div className="flex w-full items-center gap-2 sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 rounded-xl bg-[#F2EDE4] px-4 py-2.5 text-xs font-semibold text-[#6B655F] transition-colors hover:bg-[#E5DFC8] hover:text-[#272727] dark:bg-[#323232] dark:text-[#C5BFB8] dark:hover:bg-[#444444] dark:hover:text-[#FAF8F5] sm:flex-none"
              >
                Keep browsing
              </button>
              <button
                onClick={() => {
                  onSelectService(service.title);
                  onClose();
                }}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#BF603C] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-colors hover:bg-[#A6502E] sm:flex-none"
              >
                Start a conversation
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
