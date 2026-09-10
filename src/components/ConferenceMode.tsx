import React, { useState } from 'react';
import { LiveDemoSection } from './LiveDemoSection';
import { presenterProfile } from '../config/profile';
import { reportedResearchMetrics, paperDetails } from '../data/researchResults';
import {
  Presentation,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Award,
  Radio,
  Cpu,
  BarChart3,
  Sparkles,
  Layers,
  CheckCircle2,
  Scale
} from 'lucide-react';

interface ConferenceModeProps {
  onExit: () => void;
}

export const ConferenceMode: React.FC<ConferenceModeProps> = ({ onExit }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      id: 'title',
      title: 'Title & Introduction',
      icon: Award,
    },
    {
      id: 'problem',
      title: 'Problem & Dynamic 6G NTN',
      icon: Layers,
    },
    {
      id: 'ai-ppo',
      title: 'PPO AI Decision Engine',
      icon: Cpu,
    },
    {
      id: 'live-demo',
      title: 'Live Interactive Simulation',
      icon: Play,
    },
    {
      id: 'results',
      title: 'Experimental Research Results',
      icon: BarChart3,
    },
    {
      id: 'conclusion',
      title: 'Key Takeaways & Summary',
      icon: CheckCircle2,
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col overflow-hidden select-none">
      {/* Top Presentation Bar */}
      <header className="h-16 px-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-blue-600 font-display font-black text-xs">
              IEEE ACROSET 2026
            </span>
            <span className="px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-bold">
              Paper ID: 272
            </span>
          </div>

          <div className="hidden md:block h-5 w-px bg-slate-700" />

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-300">
            <span>Presenter:</span>
            <strong className="text-white">{presenterProfile.name}</strong>
            <span className="text-slate-500">({presenterProfile.affiliation.institution})</span>
          </div>
        </div>

        {/* Slide Indicator & Quick Jumper */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
            {slides.map((s, index) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    currentSlide === index
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onExit}
            className="flex items-center gap-1.5 px-4 py-2 bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-colors ml-2"
          >
            <X className="w-4 h-4" />
            <span>Exit Conference Mode</span>
          </button>
        </div>
      </header>

      {/* Main Slide Content Area */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">
          {/* SLIDE 0: TITLE SLIDE */}
          {currentSlide === 0 && (
            <div className="text-center space-y-6 animate-in fade-in duration-300">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/40">
                <Sparkles className="w-4 h-4" />
                IEEE ACROSET 2026 Presentation • Paper ID: 272
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white leading-tight max-w-4xl mx-auto">
                AI-Enabled Resource Management for{' '}
                <span className="text-blue-400">Non-Terrestrial Network</span> Integrated{' '}
                <span className="text-orange-500">6G Communication Systems</span>
              </h1>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-2xl mx-auto space-y-2">
                <p className="text-xs uppercase font-bold text-slate-400 tracking-wider">Presenter</p>
                <p className="text-2xl font-bold font-display text-white">{presenterProfile.name}</p>
                <p className="text-sm font-semibold text-blue-400">{presenterProfile.affiliation.department}</p>
                <p className="text-xs text-slate-400">{presenterProfile.affiliation.institution}, {presenterProfile.affiliation.state}, {presenterProfile.affiliation.country}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-left text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400">Conference</p>
                  <p className="font-bold text-white">IEEE ACROSET 2026</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400">Dates</p>
                  <p className="font-bold text-white">12–13 Sept 2026</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400">Location</p>
                  <p className="font-bold text-white">Indore, India</p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 1: PROBLEM STATEMENT */}
          {currentSlide === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-black font-display text-white mb-2">
                  The Research Problem in 6G NTN
                </h2>
                <p className="text-slate-400 text-sm">
                  Why traditional static heuristics fail in Low Earth Orbit (LEO) constellations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 w-fit">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-lg text-white">Rapid Orbital Kinematics</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    LEO satellites move at ~7.5 km/s, causing high Doppler shifts, short visibility windows (5–10 min), and frequent handovers.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400 w-fit">
                    <Radio className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-lg text-white">Dynamic Channel Fading</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Slant distance varies from 550 km to &gt;1500 km. Heavy rain fade and terrain shadowing degrade SINR rapidly.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="p-3 rounded-xl bg-purple-500/20 text-purple-400 w-fit">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold font-display text-lg text-white">Resource Bottleneck</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    NP-hard joint optimization of spot-beams, carrier frequencies, satellite power budgets, and handover hysteresis.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: AI PPO ENGINE */}
          {currentSlide === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-black font-display text-white mb-2">
                  Proposed Solution: PPO Reinforcement Learning
                </h2>
                <p className="text-slate-400 text-sm">
                  Continuous multi-dimensional state observation $\to$ Actor-Critic Policy Optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h3 className="font-bold font-display text-base text-blue-400 flex items-center gap-2">
                    <Cpu className="w-5 h-5" />
                    State Observation Vector
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">User Position $(Lat_u, Lon_u)$</div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">Sat Subpoint $(Lat_s, Lon_s)$</div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">Instantaneous SINR $\gamma$ (dB)</div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">Channel Gain $|h|^2$</div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">Dwell Time Remaining (s)</div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">QoS Profile (URLLC / eMBB)</div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                  <h3 className="font-bold font-display text-base text-orange-400 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Joint Multi-Resource Action Space
                  </h3>
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <span>1. Satellite-User Association</span>
                      <span className="text-emerald-400 font-bold">Predictive Hysteresis</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <span>2. Subcarrier Channel Slot</span>
                      <span className="text-emerald-400 font-bold">Orthogonal Reuse</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <span>3. Transmit Power Level</span>
                      <span className="text-emerald-400 font-bold">Adaptive Water-Filling</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                      <span>4. Handover Execution</span>
                      <span className="text-emerald-400 font-bold">Zero Ping-Pong</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 3: LIVE DEMO */}
          {currentSlide === 3 && (
            <div className="w-full h-full flex flex-col justify-center animate-in fade-in duration-300">
              <LiveDemoSection isCompactView={true} />
            </div>
          )}

          {/* SLIDE 4: PUBLISHED RESEARCH RESULTS */}
          {currentSlide === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-black font-display text-white mb-2">
                  Experimental Research Findings (Paper 272)
                </h2>
                <p className="text-slate-400 text-sm">
                  Evaluated across ~12,000 communication samples.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reportedResearchMetrics.map((m) => (
                  <div key={m.id} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <span className="text-xs font-bold text-slate-400 uppercase">{m.name}</span>
                    <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div>
                        <p className="text-[10px] text-slate-500">Baseline</p>
                        <p className="text-xl font-bold text-slate-400">{m.baseline} {m.unit}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-blue-400 font-bold">AI (PPO)</p>
                        <p className="text-2xl font-black text-blue-400">{m.aiBased} {m.unit}</p>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 text-xs font-bold text-center border border-emerald-500/30">
                      {m.improvement}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE 5: CONCLUSION & TAKEAWAY */}
          {currentSlide === 5 && (
            <div className="space-y-6 text-center max-w-3xl mx-auto animate-in fade-in duration-300">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 w-fit mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
                Summary & 30-Second Core Story
              </h2>

              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-left space-y-4 text-sm text-slate-300 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <p><strong>Dynamic Challenge:</strong> Users & network conditions change rapidly in LEO satellite constellations.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <p><strong>Integrated NTN:</strong> Space + Aerial + Terrestrial tiers provide global 6G connectivity.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <p><strong>AI-Enabled Observation:</strong> PPO agent continuously tracks channel gain, Doppler & mobility.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <p><strong>Proven Superiority:</strong> Boosts throughput to 2587.56 Mbps, slashes packet loss to 3%, and reduces handover latency to 30 ms.</p>
                </div>
              </div>

              <p className="text-xs text-slate-400">
                Presented by <strong>{presenterProfile.name}</strong> • Department of ICT, Marwadi University, Gujarat, India
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Slide Controller Navigation */}
      <footer className="h-16 px-6 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between shrink-0">
        <button
          onClick={handlePrev}
          disabled={currentSlide === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-bold transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        <div className="text-xs font-mono text-slate-400">
          Slide <strong className="text-white">{currentSlide + 1}</strong> of {slides.length} — {slides[currentSlide].title}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-30 disabled:pointer-events-none text-white text-xs font-bold shadow-glow-blue transition-colors"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};
