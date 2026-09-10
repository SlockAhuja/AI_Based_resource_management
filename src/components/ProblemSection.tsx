import React from 'react';
import {
  AlertTriangle,
  ArrowDown,
  Layers,
  Zap,
  Globe2,
  SignalZero,
  Cpu,
  RefreshCw,
  TrendingDown,
  Compass,
  Activity,
  Radio,
  Clock,
  BatteryCharging
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Traditional Terrestrial Networks',
      desc: 'Base stations (gNBs) constrained to urban and sub-urban corridors with fiber backhaul.',
      icon: Radio,
      color: 'blue'
    },
    {
      step: '02',
      title: 'Coverage Limitations',
      desc: 'High economic barrier & physical terrain barriers prevent ground mast deployments.',
      icon: SignalZero,
      color: 'amber'
    },
    {
      step: '03',
      title: 'Remote / Maritime / Disaster Gap',
      desc: 'Oceans, aircraft, rural valleys, and disaster-struck regions lose all communication links.',
      icon: Globe2,
      color: 'orange'
    },
    {
      step: '04',
      title: 'NTN Integration Solution',
      desc: 'Deploying multi-orbit LEO satellite constellations and High-Altitude Platform Stations (HAPS).',
      icon: Layers,
      color: 'blue'
    },
    {
      step: '05',
      title: 'Dynamic LEO Topology',
      desc: 'LEO satellites move at ~7.5 km/s, causing rapid elevation shifts and high Doppler.',
      icon: Compass,
      color: 'purple'
    },
    {
      step: '06',
      title: 'Changing Channel Conditions',
      desc: 'Atmospheric rain fade, slant path loss, and moving antenna directivity create severe fading.',
      icon: Activity,
      color: 'red'
    },
    {
      step: '07',
      title: 'Resource Allocation Bottleneck',
      desc: 'Multi-dimensional optimization of spot-beams, RF power, frequency channels & handovers.',
      icon: Cpu,
      color: 'orange'
    }
  ];

  const challenges = [
    {
      title: 'Dynamic Topology',
      desc: 'Constantly changing orbital geometry at 7.5 km/s velocity.',
      icon: Compass,
      badge: 'Orbital Kinematics'
    },
    {
      title: 'User Mobility',
      desc: 'Ground, aerial, and maritime users moving with unpredictable velocity vectors.',
      icon: RefreshCw,
      badge: 'Heterogeneous Traffic'
    },
    {
      title: 'Changing Channel Quality',
      desc: 'Slant path attenuation, elevation angle fluctuations, and Rician fading.',
      icon: Activity,
      badge: 'RF Propagation'
    },
    {
      title: 'Limited Bandwidth',
      desc: 'Finite allocated Ka/S-band frequency spectrum shared across thousands of users.',
      icon: Radio,
      badge: 'Spectral Constraint'
    },
    {
      title: 'Satellite Power Constraints',
      desc: 'On-board solar array power budgets (200W - 400W) must be strictly partitioned.',
      icon: BatteryCharging,
      badge: 'Energy Budget'
    },
    {
      title: 'Frequent Handovers',
      desc: 'Short LEO visibility windows (5-10 min) cause ping-pong handoffs and packet drops.',
      icon: TrendingDown,
      badge: 'Control Overhead'
    },
    {
      title: 'Differential Propagation Delays',
      desc: 'Slant distance varies from 550 km at zenith to >1500 km near horizon.',
      icon: Clock,
      badge: 'Slant Range'
    },
    {
      title: 'Resource Allocation Complexity',
      desc: 'NP-hard combinatorial optimization of user-to-satellite, power, and channel slots.',
      icon: Cpu,
      badge: 'AI Opportunity'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-100/80 text-orange-700 mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            SECTION 5 — RESEARCH MOTIVATION & PROBLEM
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            Why AI-Enabled NTN Resource Management?
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Integrating Non-Terrestrial Networks (NTN) with 6G requires solving complex, rapid-varying channel conditions and high orbital kinematics that traditional static rule-based systems fail to handle.
          </p>
        </div>

        {/* Step-by-Step Problem Cascade Flow */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6 text-center">
            Evolution from Terrestrial Limits to the AI Resource Challenge
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 relative">
            {steps.map((item, idx) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-full h-full p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {item.step}
                      </span>
                      <item.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <h4 className="font-display font-bold text-xs text-slate-900 mb-1.5 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {idx < steps.length - 1 && (
                  <div className="my-2 md:hidden">
                    <ArrowDown className="w-4 h-4 text-slate-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 8 Key Challenges Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold font-display text-slate-900">
              The 8 Core Technical Challenges in 6G NTN
            </h3>
            <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Targeted by Paper 272 PPO Formulation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {challenges.map((c, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-300 hover:translate-y-[-2px] transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                    <c.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {c.badge}
                  </span>
                </div>
                <h4 className="font-display font-bold text-sm text-slate-900 mb-1">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
