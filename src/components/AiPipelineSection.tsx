import React, { useState } from 'react';
import {
  BrainCircuit,
  Eye,
  Activity,
  Compass,
  Zap,
  Cpu,
  Layers,
  BarChart,
  RefreshCw,
  Radio,
  Sliders,
  CheckCircle,
  Sparkles,
  ArrowDown
} from 'lucide-react';

export const AiPipelineSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const pipelineStages = [
    {
      step: 1,
      title: 'Network Environment',
      icon: Layers,
      desc: 'LEO orbits, ground user clusters, atmospheric attenuation, and co-channel interference fields.',
      detail: 'Continuous physical 3GPP TR 38.811 simulation space with multi-beam satellite footprints.'
    },
    {
      step: 2,
      title: 'State Observation',
      icon: Eye,
      desc: 'Real-time telemetry vectors aggregated across satellite payloads and ground terminals.',
      detail: 'Includes normalized coordinates, remaining orbital dwell time, Doppler frequency offsets, and buffer backlogs.'
    },
    {
      step: 3,
      title: 'Channel Conditions',
      icon: Activity,
      desc: 'Instantaneous SINR, Rician small-scale fading factor, shadow fading, and elevation angles.',
      detail: 'Calculates slant range propagation loss $L_{fs} = 20\\log_{10}(4\\pi d / \\lambda)$ and rain fade margins.'
    },
    {
      step: 4,
      title: 'User Mobility & Traffic',
      icon: Compass,
      desc: 'Velocity vectors and heterogeneous traffic profiles (eMBB vs URLLC vs mMTC).',
      detail: 'Differentiates critical emergency streams from best-effort ground broadband bursts.'
    },
    {
      step: 5,
      title: 'PPO Agent Decision',
      icon: BrainCircuit,
      desc: 'Actor-Critic Deep Neural Network with clipped surrogate objective policy.',
      detail: 'Evaluates action probability distribution $r_t(\\theta) = \\frac{\\pi_\\theta(a_t|s_t)}{\\pi_{\\theta_{old}}(a_t|s_t)}$ with $\\epsilon = 0.2$ clipping.'
    },
    {
      step: 6,
      title: 'Multi-Resource Allocation',
      icon: Sliders,
      desc: 'Simultaneous joint optimization of 5 key radio parameters.',
      detail: 'User-satellite association, orthogonal channel slot, adaptive power level, bandwidth slicing, and link selection.'
    },
    {
      step: 7,
      title: 'Performance Evaluation',
      icon: BarChart,
      desc: 'Calculates multi-objective reward: Throughput - $\\alpha$ PacketLoss - $\\beta$ Latency - $\\gamma$ HandoverPenalty.',
      detail: 'Ensures fairness across all user zones without starvations.'
    },
    {
      step: 8,
      title: 'Policy Update & Convergence',
      icon: RefreshCw,
      desc: 'Gradient backpropagation updates actor and critic networks to maximize cumulative return.',
      detail: 'Trained over ~12,000 realistic NTN communication samples.'
    }
  ];

  const resourceDecisions = [
    {
      title: 'User → Satellite Association',
      icon: Radio,
      desc: 'Predictive dwell-time matching that eliminates ping-pong handovers when crossing beam boundaries.',
      benefit: 'Reduces Handover Latency by 45.45%'
    },
    {
      title: 'User → Channel Assignment',
      icon: Cpu,
      desc: 'Orthogonal sub-band channel scheduling to minimize co-channel inter-beam interference.',
      benefit: 'Zero Co-Channel Collision'
    },
    {
      title: 'Adaptive Power Allocation',
      icon: Zap,
      desc: 'Dynamic water-filling power control distributing more RF power to shadowed and URLLC links.',
      benefit: 'Lowers Packet Loss to 3.0%'
    },
    {
      title: 'Bandwidth Slicing',
      icon: Sliders,
      desc: 'Dynamically scales channel bandwidth (10 MHz – 50 MHz) based on real-time application priority.',
      benefit: 'Boosts Throughput to 2587.56 Mbps'
    },
    {
      title: 'Multi-Tier Link Selection',
      icon: Layers,
      desc: 'Seamlessly shifts load between LEO satellites, HAPS relays, and terrestrial gNBs.',
      benefit: 'Guarantees 99.99% Reliability'
    }
  ];

  return (
    <section id="ai-pipeline" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-100/80 text-orange-700 mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            SECTION 7 — HOW THE AI WORKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            Reinforcement Learning Decision Pipeline
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            The AI observes live network telemetry and dynamically decides multi-dimensional resource allocations instead of relying solely on fixed, static rules.
          </p>
        </div>

        {/* 8-Stage Visual Linear Flow */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineStages.map((stage) => {
              const Icon = stage.icon;
              const isSelected = activeStage === stage.step;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStage(isSelected ? null : stage.step)}
                  className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-500 shadow-md ring-2 ring-blue-300/30'
                      : 'bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">
                      0{stage.step}
                    </span>
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 mb-1">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    {stage.desc}
                  </p>
                  <p className="text-[11px] text-blue-700 font-mono bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                    {stage.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resource Allocation Decisions Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold font-display text-slate-900">
              5 Core Radio Resource Decisions Managed by PPO
            </h3>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
              Joint Multi-Objective Action Space
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {resourceDecisions.map((dec, i) => {
              const Icon = dec.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-orange-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 w-fit mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-slate-900 mb-2">
                      {dec.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {dec.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50/80 px-2 py-1 rounded-md block text-center">
                      {dec.benefit}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
