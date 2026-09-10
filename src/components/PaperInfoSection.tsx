import React, { useState } from 'react';
import { paperDetails } from '../data/researchResults';
import { presenterProfile } from '../config/profile';
import { BookOpen, Copy, Check, Calendar, MapPin, Award, FileText, Sparkles, Share2 } from 'lucide-react';

export const PaperInfoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const bibtexCitation = `@inproceedings{ahuja2026ntn6g,
  author    = {Slock Ahuja and Praveen Kumar Sharma and C. D. Parmar and Indu Jaiswal},
  title     = {AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems},
  booktitle = {Proceedings of the IEEE International Conference on Advanced Communication, Robotics and Space Engineering Technologies (ACROSET)},
  year      = {2026},
  month     = {September},
  pages     = {Paper ID: 272},
  address   = {Indore, Madhya Pradesh, India},
  organization = {IEEE},
  institution  = {Department of Information and Communication Technology, Marwadi University}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="paper-info" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-100/80 text-orange-700 mb-3">
            <Award className="w-3.5 h-3.5" />
            SECTION 14 — CONFERENCE CITATION & PAPER DETAILS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            IEEE ACROSET 2026 Paper Information
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Official conference proceedings metadata, author sequence, and academic citation reference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Paper Meta Card */}
          <div className="lg:col-span-6 glass-card p-6 md:p-8 bg-white border-slate-200/90 shadow-sm space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200">
                  {paperDetails.conference}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                  Paper ID: {paperDetails.paperId}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-slate-900 leading-snug mt-3">
                {paperDetails.title}
              </h3>
            </div>

            {/* Conference Details */}
            <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                <span>
                  <strong>Date:</strong> {paperDetails.dates}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                <span>
                  <strong>Location:</strong> {paperDetails.location}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Conference:</strong> {paperDetails.conferenceFullName} (ACROSET)
                </span>
              </div>
            </div>

            {/* Authors Sequence */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Author Sequence
              </p>
              <div className="space-y-1.5 text-xs text-slate-800">
                {paperDetails.authors.map((author, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="font-bold text-blue-600 w-5">0{i + 1}.</span>
                    <span className="font-semibold">{author}</span>
                    {i === 0 && <span className="text-[10px] text-blue-700 font-bold bg-blue-50 px-1.5 py-0.5 rounded">Presenter</span>}
                    {i === 1 && <span className="text-[10px] text-orange-700 font-bold bg-orange-50 px-1.5 py-0.5 rounded">Mentor</span>}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 mt-3">{paperDetails.affiliation}</p>
            </div>
          </div>

          {/* Right Column: Abstract & BibTeX Citation */}
          <div className="lg:col-span-6 space-y-6">
            {/* Abstract */}
            <div className="glass-card p-6 bg-white border-slate-200/90 shadow-sm">
              <h4 className="font-display font-bold text-sm text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                Executive Abstract
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                {paperDetails.abstract}
              </p>
            </div>

            {/* BibTeX Card */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-white shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 font-mono">BibTeX Reference</span>
                <button
                  onClick={handleCopyBibtex}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied BibTeX!' : 'Copy BibTeX'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-[11px] text-blue-300 overflow-x-auto leading-relaxed">
                {bibtexCitation}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
