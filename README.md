# AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems

[![IEEE ACROSET 2026](https://img.shields.io/badge/IEEE%20ACROSET-2026-blue.svg)](https://acroset2026.org)
[![Paper ID](https://img.shields.io/badge/Paper%20ID-272-orange.svg)]()
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg?logo=react)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6.svg?logo=typescript)]()
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg?logo=tailwindcss)]()

Interactive research presentation and live simulation platform developed for **IEEE ACROSET 2026** (12–13 September 2026, Indore, Madhya Pradesh, India).

---

## 👥 Authors & Affiliation

- **Slock Ahuja** *(Lead Researcher & Presenter)*
- **Prof. Dr. Praveen Kumar Sharma** *(Research Mentor & Co-Author)*
- **Dr. C. D. Parmar** *(Co-Author)*
- **Indu Jaiswal** *(Co-Author)*

**Department of Information and Communication Technology, Marwadi University, Gujarat, India**

---

## 🛰️ Research Overview

Integrating Non-Terrestrial Networks (NTN) with terrestrial 6G architectures provides global coverage across remote, maritime, aerial, and disaster-affected zones. However, the high velocity of Low Earth Orbit (LEO) satellites (~7.5 km/s), rapid Doppler shifts, and heterogeneous traffic demands make traditional static rule-based scheduling insufficient.

This work introduces a deep reinforcement learning framework using **Proximal Policy Optimization (PPO)** to dynamically allocate:
1. Satellite-to-User link association (with predictive dwell time and handover hysteresis)
2. Subcarrier frequency channel assignments
3. Transmit RF power levels (water-filling inspired neural control)
4. Dynamic bandwidth slicing
5. Multi-tier link offloading (Space $\leftrightarrow$ Aerial HAPS $\leftrightarrow$ Terrestrial gNBs)

---

## 📊 Published Paper Benchmarks (Paper 272)

| Performance Metric | Baseline (Rule-Based Greedy) | Proposed AI (PPO Agent) | Net Improvement |
|---|---|---|---|
| **Average System Throughput** | 2253.55 Mbps | **2587.56 Mbps** | **+14.82% Higher Capacity** |
| **Packet Loss Rate** | 8.0 % | **3.0 %** | **-62.50% Loss Reduction** |
| **Handover Latency** | 55 ms | **30 ms** | **-45.45% Latency Drop** |
| **Scalability** | Limited ($O(N^2)$ heuristic search) | **High (PPO Policy Generalization)** | Resilient up to 500+ users |
| **Adaptability** | Static Rule-Based | **Continuous Learning-Based** | Dynamic channel feedback |

---

## 💻 Tech Stack & Architecture

- **Web Frontend:** React, Vite, TypeScript, Tailwind CSS, Framer Motion, Recharts, Lucide Icons
- **Research Stack:** Python, PyTorch, Stable-Baselines3, Gymnasium, MATLAB (3GPP TR 38.811 RF channel modeling), NumPy, Pandas, SciPy, Matplotlib
- **Dataset:** ~12,000 synthetic LEO communication samples across 11 primary telemetry dimensions

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/paper-272-acroset-ntn-6g.git
cd paper-272-acroset-ntn-6g

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📝 Citation

```bibtex
@inproceedings{ahuja2026ntn6g,
  author    = {Slock Ahuja and Praveen Kumar Sharma and C. D. Parmar and Indu Jaiswal},
  title     = {AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems},
  booktitle = {Proceedings of the IEEE International Conference on Advanced Communication, Robotics and Space Engineering Technologies (ACROSET)},
  year      = {2026},
  month     = {September},
  pages     = {Paper ID: 272},
  address   = {Indore, Madhya Pradesh, India},
  organization = {IEEE},
  institution  = {Department of Information and Communication Technology, Marwadi University}
}
```

---

## 📄 License
This research prototype and demonstration platform is developed for IEEE ACROSET 2026 academic presentation purposes.
