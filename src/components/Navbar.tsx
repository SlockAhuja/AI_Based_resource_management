import React, { useState, useEffect } from 'react';
import { Radio, Satellite, Play, Presentation, ExternalLink, Menu, X, BookOpen, Layers, Users, BarChart3 } from 'lucide-react';
import { presenterProfile } from '../config/profile';

interface NavbarProps {
  isPresentationMode: boolean;
  onTogglePresentationMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isPresentationMode, onTogglePresentationMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Research', href: '#problem', icon: BookOpen },
    { name: 'Architecture', href: '#architecture', icon: Layers },
    { name: 'AI Pipeline', href: '#ai-pipeline', icon: Radio },
    { name: 'Live Demo', href: '#live-demo', icon: Play, highlight: true },
    { name: 'AI vs Baseline', href: '#ai-vs-baseline', icon: BarChart3 },
    { name: 'Results', href: '#results', icon: BarChart3 },
    { name: 'Authors', href: '#authors', icon: Users },
  ];

  if (isPresentationMode) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/80 text-white px-6 py-3 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg text-white shadow-glow-blue flex items-center justify-center">
            <Satellite className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base tracking-wide text-white">IEEE ACROSET 2026</span>
              <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500/20 text-orange-400 border border-orange-500/40 rounded-full">
                Paper ID: 272
              </span>
            </div>
            <p className="text-xs text-slate-400 truncate max-w-md">AI-Enabled Resource Management for NTN-6G</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Presenter: <strong className="text-white">{presenterProfile.name}</strong> (Marwadi University)</span>
          </div>

          <button
            onClick={onTogglePresentationMode}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-medium text-xs rounded-xl shadow-glow-orange transition-all duration-200"
          >
            <Presentation className="w-4 h-4" />
            <span>Exit Presentation Mode</span>
          </button>
        </div>
      </nav>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/60 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Conference Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl shadow-md group-hover:scale-105 transition-transform duration-200">
              <Satellite className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-slate-900 tracking-tight text-lg group-hover:text-blue-600 transition-colors">
                  NTN-6G<span className="text-orange-500">.AI</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 rounded-md">
                  IEEE ACROSET 2026
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500">Paper ID: 272 • Marwadi University</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                  link.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-slate-100'
                }`}
              >
                <link.icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onTogglePresentationMode}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 hover:border-orange-500 bg-white hover:bg-orange-50/50 text-slate-700 hover:text-orange-600 transition-all duration-200 shadow-sm"
              title="Switch to Conference Presentation Mode"
            >
              <Presentation className="w-4 h-4 text-orange-500" />
              <span>Presentation Mode</span>
            </button>

            <a
              href="#live-demo"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md hover:shadow-glow-orange transition-all duration-200"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Launch Demo</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onTogglePresentationMode}
              className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-200 text-xs"
              title="Presentation Mode"
            >
              <Presentation className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="#live-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md"
            >
              Launch Live Simulation
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
