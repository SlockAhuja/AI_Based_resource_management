import React from 'react';
import { presenterProfile, SLOCK_LINKEDIN_URL, SLOCK_GITHUB_URL, SLOCK_EMAIL } from '../config/profile';
import { User, Mail, Linkedin, Github, MapPin, GraduationCap, Sparkles, BookCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ResearcherProfile: React.FC = () => {
  const isLinkedInConfigured = SLOCK_LINKEDIN_URL !== "SLOCK_LINKEDIN_URL" && SLOCK_LINKEDIN_URL.startsWith('http');
  const isGitHubConfigured = SLOCK_GITHUB_URL !== "GITHUB_URL" && SLOCK_GITHUB_URL.startsWith('http');

  return (
    <section id="researcher" className="py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              SECTION 2 — PRESENTER & RESEARCHER
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              About the Researcher
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
            Presenter: IEEE ACROSET 2026 (Paper ID: 272)
          </span>
        </div>

        {/* Profile Glass Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 border-slate-200/90 hover:border-blue-300 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Avatar & Quick Info */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/40 border border-slate-200/80">
              {/* Profile Image / Academic Portrait Placeholder */}
              <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-orange-500 p-1 shadow-lg shadow-blue-500/20 mb-4">
                <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center text-slate-700 overflow-hidden">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-display font-black text-2xl mb-1">
                    SA
                  </div>
                  <span className="text-[11px] font-bold text-slate-600">Slock Ahuja</span>
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 bg-emerald-500 text-white rounded-full shadow-md border-2 border-white" title="Active Conference Presenter">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-black font-display text-slate-900">
                {presenterProfile.name}
              </h3>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-wider mt-0.5">
                {presenterProfile.role}
              </p>

              <div className="mt-4 w-full space-y-2 text-left text-xs text-slate-600 border-t border-slate-200 pt-4">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{presenterProfile.affiliation.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{presenterProfile.affiliation.institution}, {presenterProfile.affiliation.state}, {presenterProfile.affiliation.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  <a href={`mailto:${presenterProfile.email}`} className="text-blue-600 hover:underline truncate">
                    {presenterProfile.email}
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 w-full space-y-2">
                {isLinkedInConfigured ? (
                  <a
                    href={SLOCK_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </a>
                ) : (
                  <button
                    onClick={() => alert(`LinkedIn placeholder: ${SLOCK_LINKEDIN_URL}\n(You can configure your real LinkedIn link in src/config/profile.ts)`)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2]/90 hover:bg-[#0A66C2] text-white font-bold text-xs shadow-md transition-colors"
                    title="Configurable in src/config/profile.ts"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded ml-1">Configurable</span>
                  </button>
                )}

                <div className="flex gap-2 w-full">
                  <a
                    href={`mailto:${presenterProfile.email}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-600" />
                    <span>Email</span>
                  </a>
                  {isGitHubConfigured ? (
                    <a
                      href={SLOCK_GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-xs transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => alert(`GitHub placeholder: ${SLOCK_GITHUB_URL}\n(Configure in src/config/profile.ts)`)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-semibold text-xs transition-colors"
                      title="Configurable in src/config/profile.ts"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Conference Presentation Role & Research Interests */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <BookCheck className="w-5 h-5 text-blue-600" />
                  Research Focus & Background
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {presenterProfile.bio}
                </p>

                <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-700 leading-relaxed space-y-1">
                  <p className="font-bold text-blue-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    Conference Presentation Role:
                  </p>
                  <p>
                    Lead investigator responsible for mathematical formulating the PPO state-action space, building the continuous multi-beam LEO simulation testbed, benchmarking ~12,000 communication samples, and presenting Paper 272 at IEEE ACROSET 2026.
                  </p>
                </div>
              </div>

              {/* Research Interests Tags */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Research Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {presenterProfile.researchInterests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50/50 transition-all cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <p className="text-xl font-black font-display text-blue-700">272</p>
                  <p className="text-[11px] font-semibold text-slate-500">IEEE Paper ID</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <p className="text-xl font-black font-display text-orange-600">~12,000</p>
                  <p className="text-[11px] font-semibold text-slate-500">Dataset Samples</p>
                </div>
                <div className="text-center p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <p className="text-xl font-black font-display text-emerald-600">6G NTN</p>
                  <p className="text-[11px] font-semibold text-slate-500">Domain Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
