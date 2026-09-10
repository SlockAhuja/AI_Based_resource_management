import React from 'react';
import { presenterProfile, SLOCK_LINKEDIN_URL, SLOCK_GITHUB_URL, SLOCK_EMAIL } from '../config/profile';
import { Mail, Linkedin, Github, Send, Sparkles, MapPin, GraduationCap, Globe, Award } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const isLinkedInConfigured = SLOCK_LINKEDIN_URL !== "SLOCK_LINKEDIN_URL" && SLOCK_LINKEDIN_URL.startsWith('http');
  const isGitHubConfigured = SLOCK_GITHUB_URL !== "GITHUB_URL" && SLOCK_GITHUB_URL.startsWith('http');

  return (
    <footer id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          SECTION 16 — RESEARCH COLLABORATION & CONTACT
        </div>

        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-3">
          Let's Connect
        </h2>

        <p className="text-xl font-bold font-display text-blue-400 mb-1">
          {presenterProfile.name}
        </p>

        <p className="text-sm font-semibold text-slate-400 mb-8">
          Researcher | 6G Communication | Non-Terrestrial Networks | AI & Reinforcement Learning | Wireless Systems
        </p>

        {/* Contact Links Card */}
        <div className="max-w-xl mx-auto p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 shadow-2xl mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* LinkedIn Button */}
            {isLinkedInConfigured ? (
              <a
                href={SLOCK_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            ) : (
              <button
                onClick={() => alert(`LinkedIn placeholder: ${SLOCK_LINKEDIN_URL}\n(Configurable in src/config/profile.ts)`)}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A66C2]/80 hover:bg-[#0A66C2] text-white font-bold text-xs shadow-md transition-all"
                title="Configurable in src/config/profile.ts"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </button>
            )}

            {/* GitHub Button */}
            {isGitHubConfigured ? (
              <a
                href={SLOCK_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs border border-slate-700 shadow-md transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            ) : (
              <button
                onClick={() => alert(`GitHub placeholder: ${SLOCK_GITHUB_URL}\n(Configurable in src/config/profile.ts)`)}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 hover:bg-black text-white font-bold text-xs border border-slate-700 shadow-md transition-all"
                title="Configurable in src/config/profile.ts"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </button>
            )}

            {/* Email Button */}
            <a
              href={`mailto:${SLOCK_EMAIL}`}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Email Presenter</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 space-y-1">
            <p>
              <strong>Affiliation:</strong> {presenterProfile.affiliation.department}, {presenterProfile.affiliation.institution}
            </p>
            <p>
              <strong>Paper:</strong> IEEE ACROSET 2026 (Paper ID: 272) • Indore, Madhya Pradesh, India
            </p>
          </div>
        </div>

        {/* Copyright & Conference Tag */}
        <div className="text-xs text-slate-500 border-t border-slate-800 pt-8">
          <p>© 2026 IEEE ACROSET Paper ID: 272 • Marwadi University, Gujarat, India</p>
          <p className="mt-1 text-[11px] text-slate-600">
            "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems"
          </p>
        </div>
      </div>
    </footer>
  );
};
