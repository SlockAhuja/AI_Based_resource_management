/**
 * Paper 272 Authors and Research Supervisor Configuration
 * Contains official co-author details, institutional affiliations, and configurable profile links.
 */

export const PRAVEEN_LINKEDIN_URL: string = "PRAVEEN_LINKEDIN_URL";
export const PRAVEEN_GOOGLE_SCHOLAR_URL: string = "PRAVEEN_GOOGLE_SCHOLAR_URL";
export const PRAVEEN_RESEARCH_PROFILE_URL: string = "PRAVEEN_RESEARCH_PROFILE_URL";
export const PRAVEEN_EMAIL: string = "impraveenkumarsharma@gmail.com";

export interface Author {
  id: string;
  name: string;
  title: string;
  role: string;
  department: string;
  institution: string;
  location: string;
  email?: string;
  linkedin?: string;
  googleScholar?: string;
  researchProfile?: string;
  bio?: string;
  highlights?: string[];
  isSupervisor?: boolean;
  isPresenter?: boolean;
}

export const authorsList: Author[] = [
  {
    id: "slock-ahuja",
    name: "Slock Ahuja",
    title: "Student Researcher",
    role: "Lead Author & Conference Presenter",
    department: "Department of Information and Communication Technology",
    institution: "Marwadi University",
    location: "Gujarat, India",
    email: "slockahuja321@gmail.com",
    linkedin: "SLOCK_LINKEDIN_URL",
    isPresenter: true,
    bio: "Student researcher at Marwadi University investigating intelligent resource allocation mechanisms and deep reinforcement learning policies for 6G NTN networks.",
    highlights: [
      "Lead Researcher & System Simulator Architect",
      "PPO Reinforcement Learning Policy Designer",
      "Conference Presenter for Paper 272"
    ]
  },
  {
    id: "praveen-kumar-sharma",
    name: "Prof. Dr. Praveen Kumar Sharma",
    title: "Professor & Research Supervisor",
    role: "Research Mentor & Co-Author",
    department: "Department of Information and Communication Technology",
    institution: "Marwadi University",
    location: "Gujarat, India",
    email: PRAVEEN_EMAIL,
    linkedin: PRAVEEN_LINKEDIN_URL,
    googleScholar: PRAVEEN_GOOGLE_SCHOLAR_URL,
    researchProfile: PRAVEEN_RESEARCH_PROFILE_URL,
    isSupervisor: true,
    bio: "Distinguished academician, researcher, and mentor in the Department of Information and Communication Technology at Marwadi University. Mentoring advanced research initiatives in wireless communication systems, satellite networking, next-generation cellular architectures, and AI-enabled telecommunications.",
    highlights: [
      "Research Supervisor & Academic Mentor",
      "Theoretical Framework & NTN Architecture Oversight",
      "Wireless Communication Systems Research Leader"
    ]
  },
  {
    id: "c-d-parmar",
    name: "Dr. C. D. Parmar",
    title: "Associate Professor / Faculty Researcher",
    role: "Co-Author",
    department: "Department of Information and Communication Technology",
    institution: "Marwadi University",
    location: "Gujarat, India",
    bio: "Faculty member and researcher in ICT at Marwadi University, contributing to telecommunication modeling, signal analysis, and networking methodologies.",
    highlights: [
      "Telecommunication Channel Modeling",
      "Methodology Review & Co-Author"
    ]
  },
  {
    id: "indu-jaiswal",
    name: "Indu Jaiswal",
    title: "Researcher / Co-Author",
    role: "Co-Author",
    department: "Department of Information and Communication Technology",
    institution: "Marwadi University",
    location: "Gujarat, India",
    bio: "Researcher at Marwadi University collaborating on emerging wireless communication architectures and non-terrestrial network performance analysis.",
    highlights: [
      "Data Analysis & Experimental Validation",
      "Performance Benchmark Co-Author"
    ]
  }
];

export const supervisorProfile = authorsList.find(a => a.isSupervisor)!;
