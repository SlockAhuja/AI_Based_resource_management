import React, { useState } from 'react';
import {
  Satellite,
  Plane,
  Radio,
  Users,
  BrainCircuit,
  Layers,
  Sparkles,
  CheckCircle2,
  Info,
  X,
  ArrowRight,
  Shield,
  Activity,
  Cpu
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  segment: 'space' | 'aerial' | 'terrestrial' | 'users' | 'ai';
  title: string;
  subtitle: string;
  altitude: string;
  latency: string;
  role: string;
  techSpecs: string[];
  color: string;
  icon: any;
}

export const ArchitectureSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<ArchitectureNode | null>(null);

  const architectureNodes: ArchitectureNode[] = [
    {
      id: 'space',
      segment: 'space',
      title: 'Space Segment',
      subtitle: 'LEO Satellites (Multi-Beam Constellation)',
      altitude: '550 km – 1200 km',
      latency: '20 ms – 35 ms',
      role: 'High-speed wide-area feeder links, multi-spot beam coverage, and orbital direct-to-cell access.',
      techSpecs: [
        'Ka-Band & S-Band spot beam phased-array antennas',
        'Orbital velocity ~7.5 km/s (90-minute orbital period)',
        'Inter-Satellite Links (ISL) laser optical cross-links',
        'Dynamic beam-steering and frequency reuse patterns'
      ],
      color: 'blue',
      icon: Satellite
    },
    {
      id: 'aerial',
      segment: 'aerial',
      title: 'Aerial Segment',
      subtitle: 'HAPS & Tactical UAV Relays',
      altitude: '15 km – 25 km (Stratosphere)',
      latency: '2 ms – 5 ms',
      role: 'Intermediate relay tier for local hotspot capacity injection, disaster emergency restoration, and mobile edge computing.',
      techSpecs: [
        'High-Altitude Platform Stations (HAPS) with solar-electric endurance',
        'Tactical UAVs deployed for emergency search & rescue',
        'Line-of-Sight (LoS) dominant Rician channel conditions',
        'Local traffic aggregation before satellite feeder uplinks'
      ],
      color: 'purple',
      icon: Plane
    },
    {
      id: 'terrestrial',
      segment: 'terrestrial',
      title: 'Terrestrial Segment',
      subtitle: '5G / 6G Base Stations (gNodeB)',
      altitude: '0 – 50 m Ground Masts',
      latency: '< 1 ms (Ultra-low latency)',
      role: 'High-density urban cell sites, sub-6 GHz & mmWave dense micro-cells with direct fiber backhaul.',
      techSpecs: [
        'Massive MIMO beamforming arrays',
        'Dual-connectivity with NTN space feeder fallback',
        'Coordinated Multi-Point (CoMP) scheduling',
        'Offloads dense urban clusters to preserve satellite capacity'
      ],
      color: 'emerald',
      icon: Radio
    },
    {
      id: 'users',
      segment: 'users',
      title: 'Ground Users & Heterogeneous IoT',
      subtitle: 'Urban, Rural, Maritime, Remote & Disaster',
      altitude: 'Ground & Sea Level',
      latency: 'QoS Dependent',
      role: 'End-user terminals with diverse QoS service tiers (eMBB, URLLC, mMTC).',
      techSpecs: [
        'Urban smart cities: High traffic density & eMBB broadband',
        'Maritime vessels: Zero ground mast coverage, pure satellite links',
        'Remote / Mountainous: Severe terrain shadowing & low SNR',
        'Disaster zones: Mission-critical URLLC emergency telemetry'
      ],
      color: 'amber',
      icon: Users
    },
    {
      id: 'ai',
      segment: 'ai',
      title: 'AI Resource Management Engine',
      subtitle: 'Proximal Policy Optimization (PPO)',
      altitude: 'Centralized Cloud / Satellite MEC',
      latency: 'Real-time inference (< 5 ms)',
      role: 'Observes global network telemetry and dynamically decides power, channel, and handover allocations.',
      techSpecs: [
        'Actor-Critic deep neural network architecture',
        'State representation: SINR, Doppler, user mobility, traffic load',
        'Reward formulation: Maximize throughput + Penalize packet loss & handovers',
        'Adaptive exploration-exploitation policy clipping'
      ],
      color: 'orange',
      icon: BrainCircuit
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-2">
              <Layers className="w-3.5 h-3.5" />
              SECTION 6 — NTN-6G SYSTEM ARCHITECTURE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Multi-Tier 6G NTN Integrated Architecture
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            Click any segment for deep technical specifications
          </span>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="space-y-4">
          {architectureNodes.map((node) => {
            const isSelected = activeNode?.id === node.id;
            const Icon = node.icon;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNode(isSelected ? null : node)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-400/20'
                    : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        node.segment === 'space'
                          ? 'bg-blue-600 text-white shadow-glow-blue'
                          : node.segment === 'aerial'
                          ? 'bg-purple-600 text-white'
                          : node.segment === 'terrestrial'
                          ? 'bg-emerald-600 text-white'
                          : node.segment === 'users'
                          ? 'bg-amber-500 text-white'
                          : 'bg-orange-600 text-white shadow-glow-orange'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {node.segment.toUpperCase()} LAYER
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs font-semibold text-slate-500">{node.altitude}</span>
                      </div>
                      <h3 className="text-lg font-bold font-display text-slate-900">
                        {node.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-0.5">{node.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right hidden md:block">
                      <p className="text-[11px] font-semibold text-slate-500">Typical Latency</p>
                      <p className="text-xs font-bold text-slate-800">{node.latency}</p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                      <span>{isSelected ? 'Collapse' : 'Inspect Specs'}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Pane */}
                {isSelected && (
                  <div className="mt-5 pt-4 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Role & Function in 6G NTN
                        </h4>
                        <p className="text-xs text-slate-700 leading-relaxed mb-3">
                          {node.role}
                        </p>
                        <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                          <p className="font-bold text-slate-800">Altitude Range: <span className="font-normal text-slate-600">{node.altitude}</span></p>
                          <p className="font-bold text-slate-800">Propagation Delay: <span className="font-normal text-slate-600">{node.latency}</span></p>
                        </div>
                      </div>

                      <div className="md:col-span-7">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Technical Attributes & 3GPP Integration
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {node.techSpecs.map((spec, i) => (
                            <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-100 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
