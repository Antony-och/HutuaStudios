import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MessageCircle,
} from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledBudget?: string;
  prefilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService,
  prefilledBudget,
  prefilledNotes,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Basic Website Design',
    budget: prefilledBudget || 'KSh 75,000 – 150,000',
    timeline: 'Within 2–4 weeks',
    message: prefilledNotes || '',
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledBudget) {
      setFormData((prev) => ({ ...prev, budget: prefilledBudget }));
    }
  }, [prefilledBudget]);

  useEffect(() => {
    if (prefilledNotes) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${prefilledNotes}` : prefilledNotes,
      }));
    }
  }, [prefilledNotes]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide a brief description of your project (at least 10 characters)';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`HUT-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-[#E5DFC8] bg-[#F2EDE4] py-24 text-[#272727] dark:border-[#383838] dark:bg-[#1E1E1E] dark:text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#BF603C]">
                <span>Talk to Us</span>
                <span aria-hidden="true" className="text-[#8C857D]">·</span>
                <span>Scope review</span>
              </div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-[-0.03em] text-[#272727] dark:text-[#FAF8F5] sm:text-5xl">
                Bring us the brief. Leave with a direction.
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-[#6B655F] dark:text-[#C5BFB8] sm:text-base">
                Share what you are trying to achieve. We will turn the rough idea into a practical scope, timeline, and next step within 2 business hours.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 pt-4 border-t border-[#E5DFC8] dark:border-[#383838]">
                <a
                  href="https://wa.me/15550194821?text=Hello%20Hatua%20Studios,%20I'd%20like%20to%20discuss%20a%20new%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] hover:border-[#BF603C]/50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#8C857D] dark:text-[#A8A39D] block font-medium">Instant Messaging</span>
                      <span className="text-sm font-semibold text-[#272727] dark:text-[#FAF8F5] group-hover:text-[#BF603C] transition-colors">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#BF603C] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Start Chat →
                  </span>
                </a>

                <a
                  href="mailto:hello@hutuastudios.com?subject=Project%20Inquiry%20-%20Hatua%20Studios"
                  className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] hover:border-[#BF603C]/50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#8C857D] dark:text-[#A8A39D] block font-medium">Direct Email</span>
                      <span className="text-sm font-semibold text-[#272727] dark:text-[#FAF8F5] group-hover:text-[#BF603C] transition-colors">
                        hello@hutuastudios.com
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#BF603C] font-semibold group-hover:translate-x-0.5 transition-transform">
                    Send Email →
                  </span>
                </a>
              </div>
            </div>

            {/* Response Promise Card */}
            <div className="mt-8 p-4 rounded-xl bg-[#F2EDE4] dark:bg-[#1E1E1E] border border-[#E5DFC8] dark:border-[#444444] flex items-center gap-3 text-xs text-[#6B655F] dark:text-[#C5BFB8]">
              <Clock className="w-5 h-5 text-[#BF603C] shrink-0" />
              <div>
                <span className="font-semibold text-[#272727] dark:text-[#FAF8F5] block">Guaranteed SLA Response</span>
                <span>We review all inquiries and respond within 2 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[1.75rem] border border-[#E5DFC8] bg-[#FAF8F5] p-5 shadow-2xl dark:border-[#444444] dark:bg-[#272727] sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#BF603C]/10 border border-[#BF603C]/30 text-[#BF603C] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs font-mono text-[#BF603C] mb-4">
                    Reference ID: {referenceId}
                  </p>
                  <p className="text-sm text-[#6B655F] dark:text-[#C5BFB8] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-[#272727] dark:text-[#FAF8F5]">{formData.name}</strong>. A senior solutions architect from Hatua Studios is reviewing your project details for <strong className="text-[#BF603C] dark:text-[#D97852]">{formData.service}</strong> and will email you at <strong className="text-[#272727] dark:text-[#FAF8F5]">{formData.email}</strong> within 2 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF8F5]/80 dark:bg-[#272727]/80 border border-[#E5DFC8] dark:border-[#444444] max-w-sm mx-auto text-left text-xs space-y-1.5 mb-6 text-[#6B655F] dark:text-[#C5BFB8]">
                    <div className="flex justify-between">
                      <span className="text-[#8C857D]">Service:</span>
                      <span className="font-medium text-[#272727] dark:text-[#FAF8F5]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C857D]">Target Budget:</span>
                      <span className="font-medium text-[#272727] dark:text-[#FAF8F5]">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C857D]">Target Timeline:</span>
                      <span className="font-medium text-[#272727] dark:text-[#FAF8F5]">{formData.timeline}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Basic Website Design',
                        budget: 'KSh 75,000 – 150,000',
                        timeline: 'Within 2–4 weeks',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] hover:text-[#272727] dark:text-[#FAF8F5] bg-[#F2EDE4] dark:bg-[#323232] hover:bg-[#E5DFC8] dark:bg-[#444444] rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-6 rounded-2xl bg-[#272727] p-5 text-[#FAF8F5] dark:bg-[#1E1E1E]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D97852]">01 / Your brief</span>
                        <h3 className="mt-2 text-xl font-bold tracking-tight text-white">Talk to Us &amp; Scope Review</h3>
                      </div>
                      <ShieldCheck className="h-5 w-5 shrink-0 text-[#D97852]" />
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#C5BFB8]">No commitment required. Give us enough context to make the first conversation useful.</p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                        Your Name <span className="text-[#BF603C]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border ${
                          errors.name ? 'border-[#A6502E]' : 'border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C]'
                        } text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-[#A6502E] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                        Work Email <span className="text-[#BF603C]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border ${
                          errors.email ? 'border-[#A6502E]' : 'border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C]'
                        } text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-[#A6502E] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                        Primary Service Needed <span className="text-[#BF603C]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="KSh 25,000 – 75,000" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">KSh 25,000 – 75,000 (Starter / Single-Page)</option>
                        <option value="KSh 75,000 – 150,000" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">KSh 75,000 – 150,000 (E-Commerce / Custom Site)</option>
                        <option value="KSh 150,000 – 300,000+" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">KSh 150,000 – 300,000+ (Marketplace / Custom App)</option>
                        <option value="Flexible / Retainer" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">Flexible / Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                        Target Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Within 7–14 days" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">Express (Within 7–14 days)</option>
                        <option value="Within 2–4 weeks" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">Standard (Within 2–4 weeks)</option>
                        <option value="1–2 months" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">1–2 months</option>
                        <option value="Exploring / Planning stage" className="bg-[#F2EDE4] dark:bg-[#1E1E1E] text-[#272727] dark:text-[#FAF8F5]">Exploring / Planning stage</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-[#6B655F] dark:text-[#C5BFB8] mb-1.5">
                      Project Goals &amp; Scope Details <span className="text-[#BF603C]">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you want to achieve, existing systems, or links to references..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#272727] border ${
                        errors.message ? 'border-[#A6502E]' : 'border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C]'
                      } text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-[#A6502E] mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit CTA button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-[#272727] dark:text-[#FAF8F5] bg-[#BF603C] hover:bg-[#A6502E] disabled:opacity-50 rounded-xl shadow-lg shadow-[#BF603C]/20 hover:shadow-[#BF603C]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating and Sending...</span>
                      ) : (
                        <>
                          <span>Talk to Us</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C857D] dark:text-[#A8A39D] mt-2.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#BF603C]" />
                      <span>Zero spam · Complete NDA privacy · Direct senior engineer reply</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
