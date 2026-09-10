/**
 * Slock Ahuja - Researcher Profile Configuration
 * Centralized configuration for presenter and author profiles.
 * Replace placeholder constants with your actual profile links when ready.
 */

export const SLOCK_LINKEDIN_URL: string = "SLOCK_LINKEDIN_URL";
export const SLOCK_GITHUB_URL: string = "https://github.com/SlockAhuja";
export const SLOCK_EMAIL: string = "slockahuja321@gmail.com";

export interface ResearcherProfile {
  name: string;
  role: string;
  affiliation: {
    department: string;
    institution: string;
    state: string;
    country: string;
  };
  email: string;
  linkedin: string;
  github: string;
  googleScholar?: string;
  bio: string;
  researchInterests: string[];
  conference: {
    name: string;
    paperId: string;
    paperTitle: string;
    date: string;
    location: string;
    role: string;
  };
}

export const presenterProfile: ResearcherProfile = {
  name: "Slock Ahuja",
  role: "Student Researcher & Presenter",
  affiliation: {
    department: "Department of Information and Communication Technology",
    institution: "Marwadi University",
    state: "Gujarat",
    country: "India",
  },
  email: SLOCK_EMAIL,
  linkedin: SLOCK_LINKEDIN_URL,
  github: SLOCK_GITHUB_URL,
  bio: "Undergraduate researcher at Marwadi University specializing in Next-Generation Non-Terrestrial Networks (NTN), 6G communication architectures, and AI-driven radio resource management algorithms. Lead author and presenter of Paper 272 at IEEE ACROSET 2026.",
  researchInterests: [
    "6G Communication Systems",
    "Non-Terrestrial Networks (NTN)",
    "Artificial Intelligence & Machine Learning",
    "Deep Reinforcement Learning (PPO / DRL)",
    "Wireless Communication & Signal Processing",
    "Satellite Communication & LEO Constellations",
    "Intelligent Dynamic Resource Management",
  ],
  conference: {
    name: "IEEE ACROSET 2026",
    paperId: "272",
    paperTitle: "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems",
    date: "12–13 September 2026",
    location: "Indore, Madhya Pradesh, India",
    role: "Paper Presenter & Lead Author",
  },
};
