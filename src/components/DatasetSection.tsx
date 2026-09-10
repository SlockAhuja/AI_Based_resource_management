import React from 'react';
import { datasetSpecifications, technologiesUsed } from '../data/researchResults';
import { Database, FileSpreadsheet, Cpu, Sparkles, CheckCircle2, Layers, Binary, Server } from 'lucide-react';

export const DatasetSection: React.FC = () => {
  return (
    <section id="dataset" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-3">
            <Database className="w-3.5 h-3.5" />
            SECTION 11 — DATASET & TELEMETRY FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            NTN-6G Research Dataset Architecture
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Synthesized and validated over ~12,000 communication samples across dynamic LEO trajectories, multi-beam spot radiation patterns, and heterogeneous geographic deployments.
          </p>
        </div>

        {/* Dataset Key Overview Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl mb-12 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Total Dataset Volume</span>
              <p className="text-3xl font-black font-display text-white mt-1">~12,000 Samples</p>
              <p className="text-xs text-slate-300 mt-1">Full-state communication telemetry vectors</p>
            </div>
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">LEO Orbital Range</span>
              <p className="text-3xl font-black font-display text-white mt-1">550 – 1200 km</p>
              <p className="text-xs text-slate-300 mt-1">Circular Walker-Delta constellation</p>
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">3GPP Channel Compliance</span>
              <p className="text-3xl font-black font-display text-white mt-1">TR 38.811 / 821</p>
              <p className="text-xs text-slate-300 mt-1">Rician & shadow fading NTN profiles</p>
            </div>
          </div>
        </div>

        {/* 11 Primary Feature Attributes Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold font-display text-slate-900">
              The 11 Telemetry & State Observation Features
            </h3>
            <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
              PPO Input Tensor Representation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {datasetSpecifications.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-white transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-bold text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      {feature.symbol}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">{feature.unit}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1">
                    {feature.name}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Terrain Distribution */}
        <div className="mb-8">
          <h3 className="text-lg font-bold font-display text-slate-900 mb-4">
            User Zone Distribution in Dataset
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {datasetSpecifications.sampleDistributions.map((dist, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-800">{dist.zone}</span>
                  <span className="text-xs font-black text-blue-600 font-display">{dist.percentage}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${dist.percentage}%` }}></div>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">{dist.users}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
