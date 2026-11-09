import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyEstimate: (data: { service: string; budget: string; notes: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimate }) => {
  const [serviceType, setServiceType] = useState('Basic Website Design');
  const [scopeTier, setScopeTier] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'express'>('standard');
  const [addons, setAddons] = useState<string[]>(['seo']);

  const services = [
    { title: 'One Page Responsive Website', base: 490, days: '3–5 days' },
    { title: 'Basic Website Design', base: 750, days: '7–12 days' },
    { title: 'E-Commerce Website Design', base: 1650, days: '2–3 weeks' },
    { title: 'Online Marketplace Setup', base: 2800, days: '3–5 weeks' },
    { title: 'Software & Applications', base: 3500, days: '4–8 weeks' },
    { title: 'Artificial Intelligence Solutions', base: 1800, days: '2–3 weeks' },
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter((a) => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const selectedServiceObj = services.find((s) => s.title === serviceType) || services[1];

  let basePrice = selectedServiceObj.base;
  if (scopeTier === 'growth') basePrice *= 1.4;
  if (scopeTier === 'enterprise') basePrice *= 2.2;

  let speedMultiplier = timelineSpeed === 'express' ? 1.25 : 1.0;

  let addonCost = 0;
  if (addons.includes('seo')) addonCost += 280;
  if (addons.includes('ai')) addonCost += 450;
  if (addons.includes('maintenance')) addonCost += 350;

  const totalMin = Math.round((basePrice * speedMultiplier + addonCost) / 50) * 50;
  const totalMax = Math.round((totalMin * 1.2) / 50) * 50;

  const handleSendToContact = () => {
    const notes = `Estimated via Project Calculator: ${serviceType} (${scopeTier.toUpperCase()} tier, ${timelineSpeed} speed). Add-ons: ${addons.join(', ') || 'None'}. Estimated budget: $${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`;
    const budgetRange = totalMin > 3000 ? '$3,000 – $5,000+' : totalMin > 1500 ? '$1,500 – $3,000' : '$500 – $1,500';
    onApplyEstimate({
      service: serviceType,
      budget: budgetRange,
      notes,
    });
  };

  return (
    <div id="estimator" className="p-6 sm:p-10 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm my-12 text-[#272727] dark:text-[#FAF8F5]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E5DFC8] dark:border-[#404040]">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-1">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-[#272727] dark:text-[#FAF8F5]">
            Estimate Your Project Cost &amp; Timeline in 60 Seconds
          </h3>
          <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] mt-1">
            Transparent pricing metrics tailored for startups and small businesses.
          </p>
        </div>

        <button
          onClick={() => {
            setServiceType('Basic Website Design');
            setScopeTier('growth');
            setTimelineSpeed('standard');
            setAddons(['seo']);
          }}
          className="text-xs text-[#8C857D] hover:text-[#BF603C] flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Service Type */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-2">
              1. Select Primary Discipline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setServiceType(item.title)}
                  className={`p-3 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                    serviceType === item.title
                      ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5] shadow-xs'
                      : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#6B655F] dark:text-[#A8A39D] hover:border-[#BF603C]/50'
                  }`}
                >
                  <span className="block font-semibold">{item.title}</span>
                  <span className="text-[11px] text-[#8C857D] mt-0.5 block">From ${item.base} · {item.days}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Scope & Complexity Tier */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-2">
              2. Scope &amp; Scale Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setScopeTier('starter')}
                className={`p-3 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  scopeTier === 'starter'
                    ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5]'
                    : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#8C857D]'
                }`}
              >
                <span className="block font-semibold">Starter / MVP</span>
                <span className="text-[10px] text-[#8C857D]">Core essentials</span>
              </button>
              <button
                type="button"
                onClick={() => setScopeTier('growth')}
                className={`p-3 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  scopeTier === 'growth'
                    ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5]'
                    : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#8C857D]'
                }`}
              >
                <span className="block font-semibold">Growth Pro</span>
                <span className="text-[10px] text-[#8C857D]">Most Popular</span>
              </button>
              <button
                type="button"
                onClick={() => setScopeTier('enterprise')}
                className={`p-3 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  scopeTier === 'enterprise'
                    ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5]'
                    : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#8C857D]'
                }`}
              >
                <span className="block font-semibold">Scale / Custom</span>
                <span className="text-[10px] text-[#8C857D]">High volume</span>
              </button>
            </div>
          </div>

          {/* 3. Turnaround Speed */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-2">
              3. Delivery Velocity
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setTimelineSpeed('standard')}
                className={`p-3 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  timelineSpeed === 'standard'
                    ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5]'
                    : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#8C857D]'
                }`}
              >
                <span className="block font-semibold">Standard Sprint</span>
                <span className="text-[10px] text-[#8C857D]">Regular schedule</span>
              </button>
              <button
                type="button"
                onClick={() => setTimelineSpeed('express')}
                className={`p-3 text-center rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                  timelineSpeed === 'express'
                    ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5]'
                    : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#8C857D]'
                }`}
              >
                <span className="block font-semibold">Express Priority</span>
                <span className="text-[10px] text-[#8C857D]">+25% rush acceleration</span>
              </button>
            </div>
          </div>

          {/* 4. Add-ons */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-2">
              4. Optional Add-ons
            </label>
            <div className="space-y-2">
              {[
                { id: 'seo', title: 'Technical SEO & Speed Optimization (+ $280)', desc: 'Schema markup, core web vitals fine-tuning & meta audit.' },
                { id: 'ai', title: 'Automated AI Customer Support Integration (+ $450)', desc: 'Knowledge base bot configured on web & WhatsApp.' },
                { id: 'maintenance', title: '90-Day Priority Care Retainer (+ $350)', desc: 'Proactive backups, monthly feature updates & security checks.' }
              ].map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-colors ${
                    addons.includes(addon.id)
                      ? 'bg-[#FAF8F5] dark:bg-[#272727] border-[#BF603C] text-[#272727] dark:text-[#FAF8F5]'
                      : 'bg-white dark:bg-[#2B2B2B] border-[#E5DFC8] dark:border-[#3E3E3E] text-[#6B655F] dark:text-[#A8A39D] hover:border-[#BF603C]/50'
                  }`}
                >
                  <div>
                    <span className="font-semibold block text-[#272727] dark:text-[#FAF8F5]">{addon.title}</span>
                    <span className="text-[11px] text-[#8C857D]">{addon.desc}</span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                      addons.includes(addon.id)
                        ? 'bg-[#BF603C] border-[#BF603C] text-white'
                        : 'border-[#E5DFC8] dark:border-[#444444] bg-[#FAF8F5] dark:bg-[#272727]'
                    }`}
                  >
                    {addons.includes(addon.id) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#444444]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#BF603C] block mb-1">
              Estimated Investment
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-[#272727] dark:text-[#FAF8F5] font-display tabular-nums tracking-tight my-2">
              ${totalMin.toLocaleString()} – ${totalMax.toLocaleString()}
            </div>
            <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] leading-relaxed">
              Based on your selected specifications. All builds include 100% intellectual property transfer and a 30-day warranty.
            </p>

            <div className="mt-6 pt-6 border-t border-[#E5DFC8] dark:border-[#383838] space-y-3 text-xs text-[#5C5854] dark:text-[#C5BFB8]">
              <div className="flex justify-between">
                <span className="text-[#8C857D]">Target Delivery:</span>
                <span className="font-semibold text-[#272727] dark:text-[#FAF8F5]">
                  {timelineSpeed === 'express' ? 'Accelerated (1–2 weeks)' : selectedServiceObj.days}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C857D]">Milestone Structure:</span>
                <span className="font-semibold text-[#272727] dark:text-[#FAF8F5]">50% Deposit / 50% Completion</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8C857D]">Revisions:</span>
                <span className="font-semibold text-[#272727] dark:text-[#FAF8F5]">2 Iterative Review Rounds</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <button
              onClick={handleSendToContact}
              className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Lock in This Estimate &amp; Book Call</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-[11px] text-[#8C857D] text-center mt-2.5">
              Zero obligation · Auto-populates the consultation form
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
