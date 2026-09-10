import React from 'react';
import { authorsList } from '../config/authors';
import { presenterProfile, SLOCK_LINKEDIN_URL } from '../config/profile';
import { Users, GraduationCap, MapPin, Mail, Linkedin, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export const AuthorsSection: React.FC = () => {
  return (
    <section id="authors" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-2">
            <Users className="w-3.5 h-3.5" />
            SECTION 4 — AUTHORS OF PAPER 272
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Research Team & Co-Authors
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Department of Information and Communication Technology, Marwadi University, Gujarat, India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {authorsList.map((author, index) => {
            const isPresenter = author.isPresenter;
            const isSupervisor = author.isSupervisor;

            return (
              <div
                key={author.id}
                className={`glass-card p-6 flex flex-col justify-between transition-all duration-300 ${
                  isPresenter
                    ? 'border-blue-300 ring-2 ring-blue-500/20 bg-gradient-to-b from-blue-50/20 to-white'
                    : isSupervisor
                    ? 'border-orange-300 ring-2 ring-orange-500/20 bg-gradient-to-b from-orange-50/20 to-white'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-slate-400">0{index + 1}</span>
                    {isPresenter && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                        Lead & Presenter
                      </span>
                    )}
                    {isSupervisor && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                        Research Supervisor
                      </span>
                    )}
                    {!isPresenter && !isSupervisor && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        Co-Author
                      </span>
                    )}
                  </div>

                  {/* Avatar Initial Circle */}
                  <div className="w-14 h-14 rounded-2xl mb-4 flex items-center justify-center font-display font-black text-xl shadow-sm bg-gradient-to-tr from-slate-100 to-slate-200 text-slate-800 border border-slate-300">
                    {author.name.split(' ').filter(n => !n.startsWith('Prof.') && !n.startsWith('Dr.')).map(n => n[0]).slice(0, 2).join('')}
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-base leading-snug">
                    {author.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {author.title}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-start gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-[11px]">{author.department}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span className="text-[11px]">{author.institution}, {author.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  {author.email && (
                    <a
                      href={`mailto:${author.email}`}
                      className="text-[11px] font-medium text-blue-600 hover:underline flex items-center gap-1 mb-2 truncate"
                    >
                      <Mail className="w-3 h-3 shrink-0" />
                      <span className="truncate">{author.email}</span>
                    </a>
                  )}

                  {isPresenter && (
                    <a
                      href="#researcher"
                      className="w-full block text-center py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors"
                    >
                      View Presenter Profile
                    </a>
                  )}

                  {isSupervisor && (
                    <a
                      href="#supervisor"
                      className="w-full block text-center py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-700 font-bold text-xs transition-colors"
                    >
                      View Mentor Profile
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
