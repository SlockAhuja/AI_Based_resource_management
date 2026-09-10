import React from 'react';
import { reportedResearchMetrics, qualitativeComparisons } from '../data/researchResults';
import { Award, CheckCircle2, TrendingUp, Sparkles, Layers, ShieldCheck, Zap, Activity } from 'lucide-react';

export const ResearchResultsSection: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-100/80 text-orange-700 mb-3">
            <Award className="w-3.5 h-3.5" />
            SECTION 12 — RESEARCH RESULTS & BENCHMARKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            Published Experimental Results
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Official benchmark evaluation of Paper ID: 272 submitted to IEEE ACROSET 2026.
          </p>
        </div>

        {/* Primary Benchmark Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md bg-white mb-12">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-base">
                Core Numerical Benchmarks (Paper 272)
              </h3>
              <p className="text-xs text-blue-200">Averaged across ~12,000 communication samples</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-300 border border-orange-400/30">
              Verified Published Data
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Performance Metric</th>
                  <th className="px-6 py-4">Baseline (Heuristic)</th>
                  <th className="px-6 py-4 text-blue-700 font-black">AI-Based (Proposed PPO)</th>
                  <th className="px-6 py-4 text-emerald-700">Net Improvement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {reportedResearchMetrics.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{row.name}</p>
                      <p className="text-xs text-slate-500">{row.description}</p>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-slate-600 text-base">
                      {row.baseline} {row.unit}
                    </td>
                    <td className="px-6 py-4 font-mono font-black text-blue-600 text-lg bg-blue-50/30">
                      {row.aiBased} {row.unit}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {row.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Qualitative Matrix Grid */}
        <div>
          <h3 className="text-lg font-bold font-display text-slate-900 mb-6">
            Qualitative Evaluation & Operational Paradigm
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {qualitativeComparisons.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Dimension 0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-slate-900 text-sm mb-3">
                    {item.dimension}
                  </h4>

                  <div className="space-y-2 text-xs mb-4">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                      <span className="text-[10px] text-slate-500 uppercase font-bold block">Baseline</span>
                      <span className="font-semibold text-slate-700">{item.baseline}</span>
                    </div>

                    <div className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-900">
                      <span className="text-[10px] text-blue-700 uppercase font-bold block">Proposed AI</span>
                      <span className="font-bold">{item.aiBased}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
