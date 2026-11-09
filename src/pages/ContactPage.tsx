import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { SERVICES_DATA } from '../data/agencyData';
import {
  Send,
  CheckCircle2,
  Mail,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  prefilledService?: string;
  prefilledBudget?: string;
  prefilledNotes?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  prefilledService,
  prefilledBudget,
  prefilledNotes,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: prefilledService || 'Basic Website Design',
    budget: prefilledBudget || '$1,500 – $3,000',
    timeline: 'Within 2–4 weeks',
    message: prefilledNotes || '',
  });

  useEffect(() => {
    if (prefilledService) setFormData((prev) => ({ ...prev, service: prefilledService }));
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledBudget) setFormData((prev) => ({ ...prev, budget: prefilledBudget }));
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`HUT-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 600);
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct channels and reassurance */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-3">
                <span>Start Your Project</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>Direct Lead Architecture</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
                Let's Build Something High-Performing Together.
              </h1>
              <p className="text-sm sm:text-base text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed mb-8">
                Share your requirements, existing site link, or upcoming vision. You'll receive a detailed scope analysis, fixed-price quote, and technical sprint timeline within 2 business hours.
              </p>

              {/* Instant WhatsApp & Email CTA buttons */}
              <div className="space-y-4 pt-4 border-t border-[#E5DFC8] dark:border-[#404040]">
                <a
                  href="https://wa.me/15550194821?text=Hello%20Hutua%20Studios,%20I'd%20like%20to%20discuss%20a%20new%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] hover:border-[#BF603C] shadow-sm flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#8C857D] block font-medium">Fastest Response</span>
                      <span className="text-sm font-bold text-[#272727] dark:text-[#FAF8F5] group-hover:text-[#BF603C] transition-colors">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Open Chat →
                  </span>
                </a>

                <a
                  href="mailto:hello@hutuastudios.com?subject=Project%20Inquiry%20-%20Hutua%20Studios"
                  className="p-5 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] hover:border-[#BF603C] shadow-sm flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#8C857D] block font-medium">Direct Inquiries</span>
                      <span className="text-sm font-bold text-[#272727] dark:text-[#FAF8F5] group-hover:text-[#BF603C] transition-colors">
                        hello@hutuastudios.com
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#BF603C]">
                    Send Email →
                  </span>
                </a>
              </div>
            </div>

            {/* SLA Promise */}
            <div className="mt-8 p-5 rounded-2xl bg-[#F2EDE4]/80 dark:bg-[#1E1E1E] border border-[#E5DFC8] dark:border-[#404040] flex items-center gap-3.5 text-xs text-[#5C5854] dark:text-[#C5BFB8]">
              <Clock className="w-6 h-6 text-[#BF603C] shrink-0" />
              <div>
                <span className="font-bold text-[#272727] dark:text-[#FAF8F5] block">2-Hour SLA Response</span>
                <span>All consultation requests are reviewed directly by our lead engineer &amp; architect.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] p-6 sm:p-10 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-2">
                    Consultation Request Confirmed!
                  </h3>
                  <p className="text-xs font-mono text-[#BF603C] mb-4">
                    Reference ID: {referenceId}
                  </p>
                  <p className="text-sm text-[#5C5854] dark:text-[#C5BFB8] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-[#272727] dark:text-[#FAF8F5]">{formData.name}</strong>. We have received your inquiry for <strong className="text-[#BF603C]">{formData.service}</strong> and will email you at <strong className="text-[#272727] dark:text-[#FAF8F5]">{formData.email}</strong> within 2 business hours.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] max-w-sm mx-auto text-left text-xs space-y-1.5 mb-6 text-[#5C5854] dark:text-[#C5BFB8]">
                    <div className="flex justify-between">
                      <span className="text-[#8C857D]">Selected Service:</span>
                      <span className="font-medium text-[#272727] dark:text-[#FAF8F5]">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C857D]">Budget Range:</span>
                      <span className="font-medium text-[#272727] dark:text-[#FAF8F5]">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C857D]">Timeline Target:</span>
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
                        company: '',
                        service: 'Basic Website Design',
                        budget: '$1,500 – $3,000',
                        timeline: 'Within 2–4 weeks',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] bg-[#F2EDE4] dark:bg-[#272727] hover:bg-[#E5DFC8] dark:hover:bg-[#3B3B3B] rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#E5DFC8] dark:border-[#404040] pb-3 mb-4">
                    <h2 className="text-xl font-bold font-display text-[#272727] dark:text-[#FAF8F5]">
                      Book a Free Consultation &amp; Scope Review
                    </h2>
                    <p className="text-xs text-[#8C857D] mt-0.5">
                      Fixed-price proposal · Zero obligation · Senior engineer reply
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                        Your Full Name <span className="text-[#BF603C]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Chen"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border ${
                          errors.name ? 'border-rose-500' : 'border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C]'
                        } text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                        Work Email Address <span className="text-[#BF603C]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="michael@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border ${
                          errors.email ? 'border-rose-500' : 'border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C]'
                        } text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Studio"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                        Service Needed <span className="text-[#BF603C]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-white dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5]">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="$500 – $1,500">$500 – $1,500 (Basic Site / One-Page)</option>
                        <option value="$1,500 – $3,000">$1,500 – $3,000 (E-Commerce / Custom Portal)</option>
                        <option value="$3,000 – $5,000+">$3,000 – $5,000+ (Marketplace / Custom App)</option>
                        <option value="Monthly Retainer">Monthly Retainer ($650+/mo)</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                      Target Completion Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Rush: 3–7 Days">Rush: 3–7 Days</option>
                      <option value="Fast: 1–2 Weeks">Fast Track: 1–2 Weeks</option>
                      <option value="Within 2–4 weeks">Standard: Within 2–4 Weeks</option>
                      <option value="1–2 Months">1–2 Months (Complex Custom App)</option>
                      <option value="Planning / Exploring">Planning / Exploring Phase</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#272727] dark:text-[#FAF8F5] mb-1.5">
                      Project Requirements &amp; Goals <span className="text-[#BF603C]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you want to achieve, existing pain points, links to references, or current website URL..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF8F5] dark:bg-[#272727] border ${
                        errors.message ? 'border-rose-500' : 'border-[#E5DFC8] dark:border-[#444444] focus:border-[#BF603C]'
                      } text-[#272727] dark:text-[#FAF8F5] placeholder-[#8C857D] focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] disabled:opacity-50 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating and Submitting...</span>
                      ) : (
                        <>
                          <span>Book a Free Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C857D] mt-3">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#BF603C]" />
                      <span>Zero spam · Complete confidentiality · Direct senior developer reply</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
