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
    budget: prefilledBudget || '$1,500 – $3,000',
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
    <section id="contact" className="relative py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                <span>Start Your Project</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Direct Lead Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-4">
                Let's Build Something High-Performing Together.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Share your requirements, existing site URL, or high-level idea. You will receive a structured scope review, timeline estimate, and milestone quote within 2 business hours.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 pt-4 border-t border-slate-900">
                <a
                  href="https://wa.me/15550194821?text=Hello%20Hutua%20Studios,%20I'd%20like%20to%20discuss%20a%20new%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Instant Messaging</span>
                      <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Start Chat →
                  </span>
                </a>

                <a
                  href="mailto:hello@hutuastudios.com?subject=Project%20Inquiry%20-%20Hutua%20Studios"
                  className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">Direct Email</span>
                      <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        hello@hutuastudios.com
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Send Email →
                  </span>
                </a>
              </div>
            </div>

            {/* Response Promise Card */}
            <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
              <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="font-semibold text-white block">Guaranteed SLA Response</span>
                <span>We review all inquiries and respond within 2 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">
                    Reference ID: {referenceId}
                  </p>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A senior solutions architect from Hutua Studios is reviewing your project details for <strong className="text-cyan-300">{formData.service}</strong> and will email you at <strong className="text-white">{formData.email}</strong> within 2 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 max-w-sm mx-auto text-left text-xs space-y-1.5 mb-6 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-medium text-slate-200">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Budget:</span>
                      <span className="font-medium text-slate-200">{formData.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Target Timeline:</span>
                      <span className="font-medium text-slate-200">{formData.timeline}</span>
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
                        budget: '$1,500 – $3,000',
                        timeline: 'Within 2–4 weeks',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-4">
                    <h3 className="text-xl font-bold font-display text-white">
                      Book a Free Consultation &amp; Scope Review
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Tell us about your project. No commitment required.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border ${
                          errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        } text-slate-100 placeholder-slate-600 focus:outline-none transition-colors`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Work Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        } text-slate-100 placeholder-slate-600 focus:outline-none transition-colors`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 placeholder-slate-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Primary Service Needed <span className="text-cyan-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 focus:outline-none transition-colors cursor-pointer"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-slate-900 text-slate-200">
                            {srv.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Target Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="$500 – $1,500" className="bg-slate-900 text-slate-200">$500 – $1,500 (Basic / Single-Page)</option>
                        <option value="$1,500 – $3,000" className="bg-slate-900 text-slate-200">$1,500 – $3,000 (E-Commerce / Custom Site)</option>
                        <option value="$3,000 – $5,000+" className="bg-slate-900 text-slate-200">$3,000 – $5,000+ (Marketplace / Custom App)</option>
                        <option value="Flexible / Retainer" className="bg-slate-900 text-slate-200">Flexible / Monthly Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Target Launch Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 text-slate-100 focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="Within 7–14 days" className="bg-slate-900 text-slate-200">Express (Within 7–14 days)</option>
                        <option value="Within 2–4 weeks" className="bg-slate-900 text-slate-200">Standard (Within 2–4 weeks)</option>
                        <option value="1–2 months" className="bg-slate-900 text-slate-200">1–2 months</option>
                        <option value="Exploring / Planning stage" className="bg-slate-900 text-slate-200">Exploring / Planning stage</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Goals &amp; Scope Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you want to achieve, existing systems, or links to references..."
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-950 border ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      } text-slate-100 placeholder-slate-600 focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit CTA button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600 disabled:opacity-50 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Validating and Sending...</span>
                      ) : (
                        <>
                          <span>Book a Free Consultation</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-2.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
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
