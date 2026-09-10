import React from 'react';
import { technologiesUsed } from '../data/researchResults';
import { Code2, Terminal, Cpu, Layers, Sparkles, Binary } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-700 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            SECTION 13 — TECHNOLOGY & TOOLCHAIN
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
            Research & Simulation Toolchain
          </h2>
          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            Standardized scientific libraries, deep reinforcement learning frameworks, and 3GPP channel modeling platforms utilized in Paper 272.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologiesUsed.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 font-mono font-bold text-xs">
                    {tech.name}
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {tech.category}
                  </span>
                </div>
                <h4 className="font-display font-bold text-slate-900 text-base mb-1.5">
                  {tech.name}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tech.role}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                <Code2 className="w-3.5 h-3.5" />
                <span>Paper 272 Scientific Stack</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
