import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { Check, Clock, FileCheck, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Our Methodology</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>4-Step Delivery Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            A Disciplined Process from Concept to Production.
          </h2>
          <p className="text-slate-400 mt-3 text-base leading-relaxed">
            No bloated meetings or endless delays. We follow a structured four-stage workflow designed for rapid validation and reliable execution.
          </p>
        </div>

        {/* 4-Step Interactive Navigation Tabs / Timeline bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                activeStepIndex === idx
                  ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/30'
                  : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                    activeStepIndex === idx
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  Step {step.number}
                </span>
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" />
                  {step.duration}
                </span>
              </div>
              <h3
                className={`text-base font-bold font-display ${
                  activeStepIndex === idx ? 'text-white' : 'text-slate-300'
                }`}
              >
                {step.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {step.description}
              </p>

              {/* Progress indicator bottom bar */}
              {activeStepIndex === idx && (
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Deep Dive Card for Active Step */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                <span>Phase {activeStep.number} Deep Dive</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>{activeStep.duration}</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-3">
                {activeStep.number}. {activeStep.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Activities &amp; Milestones
              </h4>
              <ul className="space-y-3">
                {activeStep.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-950/60 p-6 rounded-xl border border-slate-800/80">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-1">
                  Key Milestone Deliverable
                </span>
                <div className="flex items-start gap-2.5 mt-2">
                  <FileCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {activeStep.deliverable}
                    </h5>
                    <p className="text-xs text-slate-400 mt-1">
                      Fully documented and shared via our collaborative project portal with tracked revisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Next up: Step {((activeStepIndex + 1) % 4) + 1}</span>
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % 4)}
                  className="font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>{activeStepIndex === 3 ? 'Back to Step 1' : 'View Next Phase'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
