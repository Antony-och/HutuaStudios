import React from 'react';
import { ServiceItem } from '../types';
import { X, Check, ArrowRight, Clock, DollarSign, Sparkles } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#272727]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#272727] dark:text-[#FAF8F5] overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E5DFC8] dark:border-[#444444]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#BF603C] block mb-1">
              Hutua Studios Service
            </span>
            <h3 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5]">{service.title}</h3>
            <p className="text-sm text-[#BF603C] font-semibold mt-0.5">{service.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#8C857D] hover:text-[#272727] dark:hover:text-[#FAF8F5] rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#272727] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Meta Stats Row */}
        <div className="grid grid-cols-2 gap-4 my-5 p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444]">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#BF603C] shrink-0" />
            <div>
              <span className="text-[11px] text-[#8C857D] uppercase tracking-wider block">Estimated Timeline</span>
              <span className="text-xs sm:text-sm font-semibold text-[#272727] dark:text-[#FAF8F5]">{service.estimatedTimeline}</span>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <DollarSign className="w-4 h-4 text-[#BF603C] shrink-0" />
            <div>
              <span className="text-[11px] text-[#8C857D] uppercase tracking-wider block">Starting Investment</span>
              <span className="text-xs sm:text-sm font-semibold text-[#272727] dark:text-[#FAF8F5]">{service.startingPrice}</span>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-2">Scope Overview</h4>
          <p className="text-sm text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed">{service.fullDesc}</p>
        </div>

        {/* Deliverables List */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-3">Key Deliverables</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#272727] dark:text-[#FAF8F5]">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-[#E5DFC8] dark:border-[#444444]">
          <div className="text-xs text-[#8C857D]">
            Includes 30-day warranty &amp; 100% intellectual property transfer.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-[#6B655F] dark:text-[#A8A39D] hover:text-[#272727] dark:hover:text-[#FAF8F5] bg-[#F2EDE4] dark:bg-[#272727] rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectService(service.title);
                onClose();
              }}
              className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
