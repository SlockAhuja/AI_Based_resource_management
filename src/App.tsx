import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ResearcherProfile } from './components/ResearcherProfile';
import { SupervisorSection } from './components/SupervisorSection';
import { AuthorsSection } from './components/AuthorsSection';
import { ProblemSection } from './components/ProblemSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { AiPipelineSection } from './components/AiPipelineSection';
import { LiveDemoSection } from './components/LiveDemoSection';
import { AiVsBaselineSection } from './components/AiVsBaselineSection';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { DatasetSection } from './components/DatasetSection';
import { ResearchResultsSection } from './components/ResearchResultsSection';
import { TechStackSection } from './components/TechStackSection';
import { PaperInfoSection } from './components/PaperInfoSection';
import { ConferenceMode } from './components/ConferenceMode';
import { ContactSection } from './components/ContactSection';

export const App: React.FC = () => {
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTriggerSimulationRun = () => {
    scrollToSection('live-demo');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Fullscreen Conference Presentation Mode */}
      {isPresentationMode ? (
        <ConferenceMode onExit={() => setIsPresentationMode(false)} />
      ) : (
        <>
          {/* Top Navigation Bar */}
          <Navbar
            isPresentationMode={isPresentationMode}
            onTogglePresentationMode={() => setIsPresentationMode(true)}
          />

          {/* Main Document Flow */}
          <main>
            {/* SECTION 1: HERO */}
            <HeroSection
              onExploreClick={() => scrollToSection('problem')}
              onLaunchDemoClick={() => scrollToSection('live-demo')}
            />

            {/* SECTION 2: RESEARCHER PROFILE (Slock Ahuja) */}
            <ResearcherProfile />

            {/* SECTION 3: RESEARCH SUPERVISOR (Prof. Dr. Praveen Kumar Sharma) */}
            <SupervisorSection />

            {/* SECTION 4: AUTHORS OF PAPER 272 */}
            <AuthorsSection />

            {/* SECTION 5: PROBLEM STATEMENT & CHALLENGES */}
            <ProblemSection />

            {/* SECTION 6: MULTI-TIER NTN-6G ARCHITECTURE */}
            <ArchitectureSection />

            {/* SECTION 7: HOW THE AI (PPO) WORKS */}
            <AiPipelineSection />

            {/* SECTION 8: FLAGSHIP LIVE NTN-6G SIMULATION DEMO */}
            <LiveDemoSection />

            {/* SECTION 9: AI VS BASELINE RULE-BASED COMPARISON */}
            <AiVsBaselineSection />

            {/* SECTION 10: PERFORMANCE DASHBOARD & CHARTS */}
            <PerformanceDashboard onTriggerSimulationRun={handleTriggerSimulationRun} />

            {/* SECTION 11: RESEARCH DATASET (~12,000 SAMPLES) */}
            <DatasetSection />

            {/* SECTION 12: PUBLISHED RESEARCH RESULTS */}
            <ResearchResultsSection />

            {/* SECTION 13: RESEARCH TECHNOLOGY STACK */}
            <TechStackSection />

            {/* SECTION 14: IEEE ACROSET PAPER INFORMATION & BIBTEX */}
            <PaperInfoSection />

            {/* SECTION 16: CONTACT & NETWORKING (Section 15 is Presentation Mode toggle) */}
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
};
