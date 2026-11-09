import React, { useState } from 'react';
import { PageType } from '../types';
import { PROCESS_STEPS } from '../data/agencyData';
import { Check, Clock, FileCheck, ArrowRight, Layers, Workflow, ShieldCheck, Sparkles } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageType) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <div className="pt-28 pb-20 bg-[#FAF8F5] dark:bg-[#272727] text-[#272727] dark:text-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-3">
            <span>Engineering Methodology</span>
            <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
            <span>Predictable Sprints</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-[#272727] dark:text-[#FAF8F5] mb-4">
            A Transparent 4-Stage Delivery Framework.
          </h1>
          <p className="text-base sm:text-lg text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed">
            We adhere to a battle-tested sprint methodology designed to eliminate ambiguity, ship production-grade code rapidly, and keep you in total control of every milestone.
          </p>
        </div>

        {/* 4 Steps Interactive Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-6 rounded-2xl text-left border transition-all cursor-pointer relative ${
                activeStepIndex === idx
                  ? 'bg-white dark:bg-[#323232] border-[#BF603C] shadow-md'
                  : 'bg-[#F2EDE4]/60 dark:bg-[#222222] border-[#E5DFC8] dark:border-[#383838] hover:border-[#BF603C]/50'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    activeStepIndex === idx
                      ? 'bg-[#BF603C] text-white'
                      : 'bg-[#FAF8F5] dark:bg-[#272727] text-[#8C857D]'
                  }`}
                >
                  Phase {step.number}
                </span>
                <span className="text-[11px] text-[#8C857D] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {step.duration}
                </span>
              </div>
              <h3 className={`text-base font-bold font-display ${activeStepIndex === idx ? 'text-[#BF603C]' : 'text-[#272727] dark:text-[#FAF8F5]'}`}>
                {step.title}
              </h3>
              <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] mt-1 line-clamp-2">
                {step.description}
              </p>
            </button>
          ))}
        </div>

        {/* Deep Dive Card for Selected Step */}
        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#323232] border border-[#E5DFC8] dark:border-[#444444] shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#BF603C] mb-2">
                <span>Phase {activeStep.number} Breakdown</span>
                <span aria-hidden="true" className="text-[#BF603C]/40">·</span>
                <span>Sprint Duration: {activeStep.duration}</span>
              </div>
              <h2 className="text-3xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-4">
                {activeStep.number}. {activeStep.title}
              </h2>
              <p className="text-sm sm:text-base text-[#5C5854] dark:text-[#C5BFB8] leading-relaxed mb-8">
                {activeStep.description}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] mb-4">
                Core Milestone Activities:
              </h4>
              <ul className="space-y-3.5">
                {activeStep.activities.map((activity, aIdx) => (
                  <li key={aIdx} className="flex items-start gap-3 text-sm text-[#272727] dark:text-[#FAF8F5]">
                    <div className="w-5 h-5 rounded-full bg-[#BF603C]/10 text-[#BF603C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] dark:bg-[#272727] p-8 rounded-xl border border-[#E5DFC8] dark:border-[#444444] flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8C857D] block mb-2">
                  Official Milestone Deliverable
                </span>
                <div className="flex items-start gap-3 mt-3">
                  <FileCheck className="w-6 h-6 text-[#BF603C] shrink-0 mt-1" />
                  <div>
                    <h5 className="text-base font-bold font-display text-[#272727] dark:text-[#FAF8F5]">
                      {activeStep.deliverable}
                    </h5>
                    <p className="text-xs text-[#6B655F] dark:text-[#A8A39D] mt-1.5 leading-relaxed">
                      Delivered directly to your organization with full access, documentation, and walkthrough presentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5DFC8] dark:border-[#383838] flex items-center justify-between text-xs">
                <span className="text-[#8C857D]">
                  Step {activeStepIndex + 1} of 4
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % 4)}
                  className="font-semibold text-[#BF603C] hover:text-[#A6502E] flex items-center gap-1 cursor-pointer"
                >
                  <span>{activeStepIndex === 3 ? 'Back to Step 1' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Onboarding Checklist */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#F2EDE4]/60 dark:bg-[#1E1E1E] border border-[#E5DFC8] dark:border-[#404040] mb-20">
          <h3 className="text-xl font-bold font-display text-[#272727] dark:text-[#FAF8F5] mb-2">
            What We Need From You to Kick Off
          </h3>
          <p className="text-xs sm:text-sm text-[#6B655F] dark:text-[#A8A39D] mb-6">
            We respect your time. To begin sprint execution, we only require three simple assets:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#404040]">
              <span className="w-6 h-6 rounded-full bg-[#BF603C]/10 text-[#BF603C] font-bold text-xs flex items-center justify-center mb-3">1</span>
              <h4 className="text-sm font-bold text-[#272727] dark:text-[#FAF8F5] mb-1">Commercial Goals</h4>
              <p className="text-xs text-[#6B655F] dark:text-[#A8A39D]">A 15-minute alignment on what success looks like for this build.</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#404040]">
              <span className="w-6 h-6 rounded-full bg-[#BF603C]/10 text-[#BF603C] font-bold text-xs flex items-center justify-center mb-3">2</span>
              <h4 className="text-sm font-bold text-[#272727] dark:text-[#FAF8F5] mb-1">Brand Assets or Guidelines</h4>
              <p className="text-xs text-[#6B655F] dark:text-[#A8A39D]">Logo files, preferred typography, or reference designs you admire.</p>
            </div>
            <div className="p-5 rounded-xl bg-white dark:bg-[#272727] border border-[#E5DFC8] dark:border-[#404040]">
              <span className="w-6 h-6 rounded-full bg-[#BF603C]/10 text-[#BF603C] font-bold text-xs flex items-center justify-center mb-3">3</span>
              <h4 className="text-sm font-bold text-[#272727] dark:text-[#FAF8F5] mb-1">Content or Key Messaging</h4>
              <p className="text-xs text-[#6B655F] dark:text-[#A8A39D]">Rough notes or copy points (we can help refine and edit).</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-sm font-semibold text-white bg-[#BF603C] hover:bg-[#A6502E] rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Kick Off Phase 01: Discover &amp; Strategy</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
