import React, { useState } from 'react';
import { reportedResearchMetrics, qualitativeComparisons } from '../data/researchResults';
import {
  TrendingUp,
  TrendingDown,
  Scale,
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Cpu,
  BarChart2,
  ArrowRight
} from 'lucide-react';

export const AiVsBaselineSection: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'ai' | 'baseline'>('ai');

  return (
    <section id="ai-vs-baseline" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-3">
            <Scale className="w-3.5 h-3.5" />
            SECTION 9 — AI VS BASELINE COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            Reinforcement Learning vs Rule-Based Heuristics
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Side-by-side empirical performance comparison between the proposed PPO Deep RL Agent and traditional static greedy rule-based allocation.
          </p>

          {/* Interactive Toggle Pill */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 mt-6 shadow-inner">
            <button
              onClick={() => setSelectedMode('ai')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 ${
                selectedMode === 'ai'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>AI-Based (PPO Agent)</span>
            </button>
            <button
              onClick={() => setSelectedMode('baseline')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-display font-bold text-xs sm:text-sm transition-all duration-200 ${
                selectedMode === 'baseline'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-500/25'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BarChart2 className="w-4 h-4" />
              <span>Rule-Based Baseline</span>
            </button>
          </div>
        </div>

        {/* Core Published Research Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reportedResearchMetrics.map((metric) => {
            const isThroughput = metric.id === 'throughput';
            const isLoss = metric.id === 'packet_loss';
            const isLatency = metric.id === 'latency';

            return (
              <div
                key={metric.id}
                className="glass-card p-6 border-slate-200/90 hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Reported Paper Benchmark
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {metric.improvement}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-900 mb-1">
                    {metric.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">{metric.description}</p>

                  {/* Side-by-side values */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/60 mb-4">
                    <div>
                      <p className="text-[11px] font-semibold text-slate-500">Baseline Rule</p>
                      <p className="text-2xl font-black font-display text-slate-700 mt-1">
                        {metric.baseline}{' '}
                        <span className="text-xs font-normal text-slate-500">{metric.unit}</span>
                      </p>
                    </div>

                    <div className="border-l border-slate-200 pl-4">
                      <p className="text-[11px] font-bold text-blue-700 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        AI (PPO)
                      </p>
                      <p className="text-2xl font-black font-display text-blue-600 mt-1">
                        {metric.aiBased}{' '}
                        <span className="text-xs font-normal text-blue-500">{metric.unit}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-50/50 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                  <strong>Why AI outperforms:</strong> {metric.significance}
                </div>
              </div>
            );
          })}
        </div>

        {/* Qualitative Architectural Comparison Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            <h3 className="font-display font-bold text-base">
              System Capabilities & Qualitative Dimensions
            </h3>
            <span className="text-xs text-slate-400 font-mono">IEEE ACROSET 2026 Evaluation</span>
          </div>

          <div className="divide-y divide-slate-200 bg-white">
            {qualitativeComparisons.map((row, idx) => (
              <div
                key={idx}
                className="p-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-slate-50/80 transition-colors"
              >
                <div className="md:col-span-3">
                  <span className="font-display font-bold text-slate-900 text-sm">{row.dimension}</span>
                </div>

                <div className="md:col-span-4">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <XCircle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-800">Baseline: </span>
                      {row.baseline}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5">
                  <div className="flex items-start gap-2 text-xs text-blue-900 bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-blue-950">AI Advantage: </span>
                      {row.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
