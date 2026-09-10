import React from 'react';
import { Play, BookOpen, Award, Sparkles, Satellite, Radio, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { presenterProfile } from '../config/profile';

interface HeroSectionProps {
  onExploreClick: () => void;
  onLaunchDemoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onLaunchDemoClick }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
      {/* Background Animated NTN Multi-Tier Constellation Visual */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Orbital path ellipses */}
          <ellipse cx="720" cy="180" rx="680" ry="120" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="6 6" className="animate-pulse-slow" />
          <ellipse cx="720" cy="260" rx="620" ry="100" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 8" />
          
          {/* Animated Satellites */}
          <g className="animate-float" style={{ animationDuration: '8s' }}>
            <circle cx="280" cy="140" r="14" fill="#1D4ED8" fillOpacity="0.1" />
            <circle cx="280" cy="140" r="6" fill="#2563EB" />
            <line x1="280" y1="140" x2="360" y2="480" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          </g>
          
          <g className="animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
            <circle cx="720" cy="110" r="16" fill="#EA580C" fillOpacity="0.1" />
            <circle cx="720" cy="110" r="7" fill="#F97316" />
            <line x1="720" y1="110" x2="680" y2="520" stroke="#F97316" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.7" />
            <line x1="720" y1="110" x2="820" y2="500" stroke="#F97316" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
          </g>

          <g className="animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}>
            <circle cx="1140" cy="150" r="14" fill="#1D4ED8" fillOpacity="0.1" />
            <circle cx="1140" cy="150" r="6" fill="#2563EB" />
            <line x1="1140" y1="150" x2="1080" y2="510" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          </g>

          {/* Aerial HAPS/UAV tier */}
          <circle cx="480" cy="340" r="5" fill="#8B5CF6" />
          <circle cx="980" cy="360" r="5" fill="#06B6D4" />

          {/* Ground tier nodes */}
          <line x1="100" y1="560" x2="1340" y2="560" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="360" cy="560" r="4" fill="#475569" />
          <circle cx="680" cy="560" r="5" fill="#0F172A" />
          <circle cx="820" cy="560" r="4" fill="#475569" />
          <circle cx="1080" cy="560" r="4" fill="#475569" />
        </svg>

        {/* Ambient color blurs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Conference & Paper Metadata Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200 shadow-sm">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            IEEE ACROSET 2026
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-100/80 text-orange-800 border border-orange-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            Paper ID: 272
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            Indore, Madhya Pradesh, India
          </span>
        </div>

        {/* Main Research Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 leading-[1.15] mb-6 max-w-5xl mx-auto">
          AI-Enabled Resource Management for{' '}
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Non-Terrestrial Network
          </span>{' '}
          Integrated <span className="text-orange-600">6G Communication Systems</span>
        </h1>

        {/* Presenter & Institutional Tag */}
        <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-glass">
          <p className="text-xs font-bold tracking-wider text-slate-500 uppercase mb-1">Presented by</p>
          <p className="text-xl sm:text-2xl font-bold font-display text-slate-900">
            {presenterProfile.name}
          </p>
          <p className="text-sm font-medium text-blue-700 mt-0.5">
            {presenterProfile.affiliation.department}
          </p>
          <p className="text-xs font-semibold text-slate-600">
            {presenterProfile.affiliation.institution}, {presenterProfile.affiliation.state}, {presenterProfile.affiliation.country}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onLaunchDemoClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-glow-orange hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            <span>Launch Live Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 hover:text-blue-700 font-bold text-base border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Explore Research</span>
          </button>
        </div>

        {/* 30-Second Core Research Story Quick-Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-blue-100 text-blue-700 text-xs font-bold">01</span>
              <span className="text-xs font-bold text-slate-800">Dynamic NTN</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">LEO satellites + HAPS + 6G terrestrial integration</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-orange-100 text-orange-700 text-xs font-bold">02</span>
              <span className="text-xs font-bold text-slate-800">PPO RL Agent</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">Continuous observation of channel, Doppler & traffic</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-emerald-100 text-emerald-700 text-xs font-bold">03</span>
              <span className="text-xs font-bold text-slate-800">Adaptive Power</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">Joint channel, power & spot-beam allocation</p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/80 shadow-sm hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-purple-100 text-purple-700 text-xs font-bold">04</span>
              <span className="text-xs font-bold text-slate-800">Proven Gains</span>
            </div>
            <p className="text-[11px] text-slate-500 leading-relaxed">2587.56 Mbps throughput, 3% loss & 30ms latency</p>
          </div>
        </div>
      </div>
    </section>
  );
};
