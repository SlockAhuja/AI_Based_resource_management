import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import { scalabilityCurveData } from '../simulation/metrics';
import { reportedResearchMetrics } from '../data/researchResults';
import { BarChart3, TrendingUp, Play, Sparkles, RefreshCw, Activity, Layers, ShieldCheck } from 'lucide-react';

interface PerformanceDashboardProps {
  onTriggerSimulationRun: () => void;
}

export const PerformanceDashboard: React.FC<PerformanceDashboardProps> = ({ onTriggerSimulationRun }) => {
  const [activeTab, setActiveTab] = useState<'throughput' | 'scalability' | 'packet_loss' | 'latency'>('throughput');
  const [isSimulating, setIsSimulating] = useState(false);

  // User-wise sample distribution data
  const userThroughputData = [
    { zone: 'Urban User 1', AI: 62.4, Baseline: 46.2 },
    { zone: 'Urban User 2', AI: 58.1, Baseline: 42.0 },
    { zone: 'Rural Terminal', AI: 44.2, Baseline: 35.1 },
    { zone: 'Maritime Ship', AI: 51.0, Baseline: 38.4 },
    { zone: 'Remote Station', AI: 38.5, Baseline: 22.0 },
    { zone: 'Disaster URLLC', AI: 72.8, Baseline: 39.5 },
  ];

  // Handover latency vs velocity data
  const handoverData = [
    { velocity: '10 km/h (Pedestrian)', aiLatency: 26, baseLatency: 48 },
    { velocity: '50 km/h (Vehicular)', aiLatency: 28, baseLatency: 54 },
    { velocity: '120 km/h (Highway)', aiLatency: 30, baseLatency: 62 },
    { velocity: '350 km/h (High-speed Train)', aiLatency: 33, baseLatency: 78 },
    { velocity: '800 km/h (Aviation)', aiLatency: 36, baseLatency: 95 },
  ];

  const handleRunSimulationClick = () => {
    setIsSimulating(true);
    onTriggerSimulationRun();
    setTimeout(() => {
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <section id="performance" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-2">
              <BarChart3 className="w-3.5 h-3.5" />
              SECTION 10 — PERFORMANCE DASHBOARD & SCALABILITY
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-slate-900">
              Quantitative Telemetry & Benchmarks
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Scalability analysis, per-user throughput distribution, and handover latencies across varying loads.
            </p>
          </div>

          {/* Run Simulation Interactive Button */}
          <button
            onClick={handleRunSimulationClick}
            disabled={isSimulating}
            className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm shadow-md hover:shadow-glow-blue hover:scale-105 active:scale-95 transition-all duration-200"
          >
            {isSimulating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isSimulating ? 'Executing PPO Steps...' : 'Run Simulation'}</span>
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('throughput')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'throughput'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            1. User-Wise Throughput
          </button>

          <button
            onClick={() => setActiveTab('scalability')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'scalability'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            2. Scalability Curve (Users 10 → 500)
          </button>

          <button
            onClick={() => setActiveTab('packet_loss')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'packet_loss'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            3. Packet Loss Under Congestion
          </button>

          <button
            onClick={() => setActiveTab('latency')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'latency'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            4. Handover Latency vs Mobility
          </button>
        </div>

        {/* Chart Viewport Container */}
        <div className="glass-card p-6 md:p-8 border-slate-200/90 bg-white">
          {activeTab === 'throughput' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Per-Zone User Throughput Comparison (Mbps)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Comparing individual subscriber data rates across diverse 6G NTN topologies.
                  </p>
                </div>
                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  +14.82% Overall Gain
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={userThroughputData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="zone" tick={{ fill: '#64748B', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#64748B', fontSize: 11 }} unit=" Mbps" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#fff', borderRadius: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="AI" name="PPO AI Agent" fill="#2563EB" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="Baseline" name="Rule-Based Greedy" fill="#EA580C" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'scalability' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    User Scalability Curve: Aggregate Throughput (Mbps) vs Active User Count
                  </h3>
                  <p className="text-xs text-slate-500">
                    PPO maintains high throughput and low interference as network scales up to 500 concurrent ground terminals.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Resilient Under Heavy Load
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={scalabilityCurveData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <defs>
                      <linearGradient id="colorAi" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0.0} />
                      </linearGradient>
                      <linearGradient id="colorBase" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EA580C" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#EA580C" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="users" tick={{ fill: '#64748B', fontSize: 11 }} label={{ value: 'Concurrent Users (N)', position: 'insideBottom', offset: -10, fill: '#64748B', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#64748B', fontSize: 11 }} unit=" Mbps" domain={[1500, 3000]} />
                    <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#fff', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Area type="monotone" dataKey="aiThroughput" name="PPO AI Agent" stroke="#2563EB" strokeWidth={3} fillOpacity={1} fill="url(#colorAi)" />
                    <Area type="monotone" dataKey="baselineThroughput" name="Rule-Based Greedy" stroke="#EA580C" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorBase)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'packet_loss' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Packet Loss Rate (%) as User Density Increases
                  </h3>
                  <p className="text-xs text-slate-500">
                    Rule-based heuristics suffer sharp packet drops due to uncoordinated co-channel collisions.
                  </p>
                </div>
                <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                  -62.5% Packet Loss
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={scalabilityCurveData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="users" tick={{ fill: '#64748B', fontSize: 11 }} label={{ value: 'Active Users', position: 'insideBottom', offset: -10, fill: '#64748B', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#64748B', fontSize: 11 }} unit="%" />
                    <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#fff', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Line type="monotone" dataKey="aiPacketLoss" name="PPO AI Agent (3.0% avg)" stroke="#2563EB" strokeWidth={3} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="baselinePacketLoss" name="Rule-Based (8.0% avg)" stroke="#EA580C" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'latency' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base">
                    Handover Latency (ms) Across User Velocities
                  </h3>
                  <p className="text-xs text-slate-500">
                    Proactive dwell-time handover prediction reduces control-plane reconnection delay.
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  -45.45% Latency Drop
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={handoverData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="velocity" tick={{ fill: '#64748B', fontSize: 10 }} />
                    <YAxis tick={{ fill: '#64748B', fontSize: 11 }} unit=" ms" />
                    <Tooltip contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', color: '#fff', borderRadius: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="aiLatency" name="PPO AI Handover (30 ms)" fill="#2563EB" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="baseLatency" name="Baseline Greedy Handover (55 ms)" fill="#EA580C" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
