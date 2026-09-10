import React from 'react';
import {
  supervisorProfile,
  PRAVEEN_LINKEDIN_URL,
  PRAVEEN_GOOGLE_SCHOLAR_URL,
  PRAVEEN_RESEARCH_PROFILE_URL,
  PRAVEEN_EMAIL
} from '../config/authors';
import { Award, GraduationCap, Mail, Linkedin, BookOpen, ExternalLink, ShieldAlert, CheckCircle2, UserCheck } from 'lucide-react';

export const SupervisorSection: React.FC = () => {
  const isLinkedInConfigured = PRAVEEN_LINKEDIN_URL !== "PRAVEEN_LINKEDIN_URL" && PRAVEEN_LINKEDIN_URL.startsWith('http');
  const isScholarConfigured = PRAVEEN_GOOGLE_SCHOLAR_URL !== "PRAVEEN_GOOGLE_SCHOLAR_URL" && PRAVEEN_GOOGLE_SCHOLAR_URL.startsWith('http');
  const isResearchProfileConfigured = PRAVEEN_RESEARCH_PROFILE_URL !== "PRAVEEN_RESEARCH_PROFILE_URL" && PRAVEEN_RESEARCH_PROFILE_URL.startsWith('http');

  return (
    <section id="supervisor" className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-100/80 text-orange-700 mb-2">
              <Award className="w-3.5 h-3.5" />
              SECTION 3 — RESEARCH SUPERVISOR & CO-AUTHOR
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Research Supervisor & Mentor
            </h2>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
            Faculty Advisor & Research Leader
          </span>
        </div>

        {/* Mentor Card */}
        <div className="glass-card p-6 sm:p-8 md:p-10 border-slate-200/90 bg-white hover:border-orange-300 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Avatar & Affiliation */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-gradient-to-b from-orange-50/40 via-amber-50/30 to-white border border-orange-100">
              <div className="relative w-36 h-36 rounded-2xl bg-gradient-to-tr from-orange-600 via-amber-500 to-blue-600 p-1 shadow-lg shadow-orange-500/20 mb-4">
                <div className="w-full h-full bg-white rounded-[14px] flex flex-col items-center justify-center text-slate-700">
                  <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-display font-black text-2xl mb-1">
                    PS
                  </div>
                  <span className="text-[11px] font-bold text-slate-600">Prof. Praveen</span>
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 bg-blue-600 text-white rounded-full shadow-md border-2 border-white" title="Research Mentor">
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                {supervisorProfile.name}
              </h3>
              <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-0.5">
                {supervisorProfile.role}
              </p>

              <div className="mt-4 w-full space-y-2 text-left text-xs text-slate-600 border-t border-slate-200 pt-4">
                <div className="flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{supervisorProfile.department}</span>
                </div>
                <div className="text-slate-700 font-medium pl-6">
                  {supervisorProfile.institution}, {supervisorProfile.location}
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  <a
                    href={`mailto:${PRAVEEN_EMAIL}`}
                    className="text-blue-600 hover:underline font-semibold truncate"
                    title="Official Paper Email"
                  >
                    {PRAVEEN_EMAIL}
                  </a>
                </div>
              </div>

              {/* Action Buttons for Supervisor */}
              <div className="mt-6 w-full space-y-2">
                {/* LinkedIn */}
                {isLinkedInConfigured ? (
                  <a
                    href={PRAVEEN_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                  </a>
                ) : (
                  <div
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium cursor-help"
                    title="Configurable in src/config/authors.ts"
                  >
                    <Linkedin className="w-4 h-4 text-slate-400" />
                    <span>LinkedIn (Profile link to be added)</span>
                  </div>
                )}

                {/* Google Scholar */}
                {isScholarConfigured ? (
                  <a
                    href={PRAVEEN_GOOGLE_SCHOLAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Google Scholar</span>
                  </a>
                ) : (
                  <div
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium cursor-help"
                    title="Configurable in src/config/authors.ts"
                  >
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span>Google Scholar (Profile link to be added)</span>
                  </div>
                )}

                {/* Research Profile */}
                {isResearchProfileConfigured ? (
                  <a
                    href={PRAVEEN_RESEARCH_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Institutional Research Profile</span>
                  </a>
                ) : (
                  <div
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 text-xs font-medium cursor-help"
                    title="Configurable in src/config/authors.ts"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                    <span>Research Profile (Profile link to be added)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Col: Biography & Research Mentorship Role */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Academic Biography & Leadership
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {supervisorProfile.bio}
                </p>

                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-slate-700 leading-relaxed space-y-2">
                  <p className="font-bold text-orange-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-600" />
                    Supervisory Oversight in Paper 272:
                  </p>
                  <p>
                    Guided the mathematical formulation for non-terrestrial 3GPP channel dynamics, supervised the design of Proximal Policy Optimization (PPO) reward constraints, and reviewed the empirical benchmarking against baseline greedy heuristic algorithms.
                  </p>
                </div>
              </div>

              {/* Research Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Supervisory Pillars & Contributions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {supervisorProfile.highlights?.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="font-bold text-slate-900 block mb-1">0{idx + 1}.</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Contact Box */}
              <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-slate-800">Direct Inquiries & Collaboration</p>
                  <p className="text-xs text-slate-600">Department of ICT, Marwadi University, Gujarat, India</p>
                </div>
                <a
                  href={`mailto:${PRAVEEN_EMAIL}`}
                  className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
