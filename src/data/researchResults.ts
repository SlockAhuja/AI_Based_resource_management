/**
 * Published Research Results and Dataset Metadata for IEEE ACROSET 2026 Paper 272
 * "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems"
 */

export interface BenchmarkMetric {
  id: string;
  name: string;
  unit: string;
  baseline: number;
  aiBased: number;
  improvement: string;
  direction: 'higher' | 'lower';
  description: string;
  significance: string;
}

export const reportedResearchMetrics: BenchmarkMetric[] = [
  {
    id: 'throughput',
    name: 'Average System Throughput',
    unit: 'Mbps',
    baseline: 2253.55,
    aiBased: 2587.56,
    improvement: '+14.82% Higher Capacity',
    direction: 'higher',
    description: 'Aggregated sum-rate delivered across multi-beam LEO satellite footprint to distributed ground user clusters.',
    significance: 'Dynamic channel and power allocation by PPO maximizes spectral efficiency across high-interference scenarios.'
  },
  {
    id: 'packet_loss',
    name: 'Packet Loss Rate',
    unit: '%',
    baseline: 8.0,
    aiBased: 3.0,
    improvement: '-62.50% Loss Reduction',
    direction: 'lower',
    description: 'Percentage of dropped data packets during rapid beam transitions and heavy concurrent traffic spikes.',
    significance: 'AI predictive channel tracking preempts deep fading dips and dynamically reroutes mission-critical traffic.'
  },
  {
    id: 'latency',
    name: 'Handover Latency',
    unit: 'ms',
    baseline: 55.0,
    aiBased: 30.0,
    improvement: '-45.45% Latency Drop',
    direction: 'lower',
    description: 'Control-plane reconnection delay when transferring active links between fast-moving LEO orbital satellites.',
    significance: 'Proactive satellite-user association decision eliminates ping-pong handovers and reduces execution overhead.'
  }
];

export interface QualitativeComparison {
  dimension: string;
  baseline: string;
  aiBased: string;
  benefit: string;
}

export const qualitativeComparisons: QualitativeComparison[] = [
  {
    dimension: 'Scalability',
    baseline: 'Limited (Heuristic / Greedy)',
    aiBased: 'High (PPO Policy Generalization)',
    benefit: 'Seamlessly handles hundreds of concurrent users across fluctuating LEO orbital topologies without exponential computational explosion.'
  },
  {
    dimension: 'Adaptability',
    baseline: 'Rule-Based (Static Thresholds)',
    aiBased: 'Learning-Based (Continuous State Feedback)',
    benefit: 'Adapts in real-time to atmospheric turbulence, Doppler shifts, user mobility bursts, and changing rain fade.'
  },
  {
    dimension: 'Resource Allocation',
    baseline: 'Fixed / Pre-planned Grid',
    aiBased: 'Adaptive Multi-Dimensional',
    benefit: 'Jointly optimizes power levels, beam steering angles, and carrier frequency slots based on instantaneous demand.'
  },
  {
    dimension: 'Decision Making',
    baseline: 'Static / Reactive',
    aiBased: 'AI-Assisted (Predictive Optimization)',
    benefit: 'Anticipates upcoming beam exits and proactively provisions backup links before link degradation occurs.'
  },
  {
    dimension: 'System Reliability',
    baseline: 'Moderate (QoS violations under surge)',
    aiBased: 'High (Guaranteed QoS Constraints)',
    benefit: 'Maintains ultra-reliable low latency communications (URLLC) even in remote, maritime, and disaster rescue zones.'
  }
];

export const datasetSpecifications = {
  sampleCount: "~12,000 Communication Samples",
  collectionScope: "Synthetic LEO constellation trajectory (550 km - 1200 km orbital altitude) mapped to multi-tier heterogeneous user clusters across varied topological terrains.",
  features: [
    { name: "User Latitude", symbol: "Lat_u", unit: "deg", desc: "Geographic north-south position of the terrestrial user terminal" },
    { name: "User Longitude", symbol: "Lon_u", unit: "deg", desc: "Geographic east-west position of the ground node" },
    { name: "Satellite Latitude", symbol: "Lat_s", unit: "deg", desc: "Sub-satellite point orbital latitude coordinates" },
    { name: "Satellite Longitude", symbol: "Lon_s", unit: "deg", desc: "Sub-satellite point orbital longitude coordinates" },
    { name: "Satellite Altitude", symbol: "Alt_s", unit: "km", desc: "Orbital altitude above ground (550 km – 1200 km)" },
    { name: "Channel Gain", symbol: "|h|^2", unit: "dB", desc: "Combined large-scale path loss, shadow fading, and Rician small-scale gain" },
    { name: "SINR", symbol: "γ", unit: "dB", desc: "Signal-to-Interference-plus-Noise Ratio at user receiver" },
    { name: "Bandwidth Allocation", symbol: "B_k", unit: "MHz", desc: "Allocated subcarrier bandwidth from available pool" },
    { name: "Transmit Power", symbol: "P_tx", unit: "dBm", desc: "Satellite spot-beam radio transmission power" },
    { name: "Propagation Delay", symbol: "τ", unit: "ms", desc: "One-way slant-range propagation time plus processing latency" },
    { name: "Packet Loss Rate", symbol: "PLR", unit: "%", desc: "Empirical packet discard ratio per transmission window" }
  ],
  sampleDistributions: [
    { zone: "Urban Dense", percentage: 35, users: "High-density clusters, severe multipath, high traffic" },
    { zone: "Rural & Sub-urban", percentage: 25, users: "Dispersed ground terminals, line-of-sight dominant" },
    { zone: "Maritime / Ocean", percentage: 20, users: "Zero terrestrial fallback, pure satellite feeder links" },
    { zone: "Remote / Mountainous", percentage: 12, users: "Deep shadowing, elevated terrain obstructions" },
    { zone: "Disaster / Emergency", percentage: 8, users: "Destroyed ground infrastructure, urgent URLLC demand" }
  ]
};

export const technologiesUsed = [
  { name: "Python", category: "Core Language", role: "Scientific simulation scripts, gym environment definitions, and data pipelines" },
  { name: "PyTorch", category: "Deep Learning", role: "Actor-Critic neural network architecture, gradient backprop & tensor ops" },
  { name: "Stable-Baselines3", category: "RL Framework", role: "Proximal Policy Optimization (PPO) training algorithms & policy checkpoints" },
  { name: "Gymnasium", category: "Simulation Env", role: "Standardized MDP environment with discrete/continuous action spaces" },
  { name: "MATLAB", category: "RF & Channel Modeling", role: "3GPP NTN channel modeling (TR 38.811/38.821) & orbital trajectory verification" },
  { name: "NumPy", category: "Numerical Computing", role: "Vectorized link budget calculations, SINR matrices & Doppler calculations" },
  { name: "Pandas", category: "Data Analysis", role: "Feature extraction, time-series telemetry curation, and logging of ~12,000 samples" },
  { name: "SciPy", category: "Optimization & Math", role: "Spatial KD-Trees for nearest-neighbor geometric queries & Rician distributions" },
  { name: "Matplotlib", category: "Data Visualization", role: "Research paper figures, Pareto curves, and cumulative distribution plots" }
];

export const paperDetails = {
  title: "AI-Enabled Resource Management for Non-Terrestrial Network Integrated 6G Communication Systems",
  paperId: "272",
  conference: "IEEE ACROSET 2026",
  conferenceFullName: "International Conference on Advanced Communication, Robotics and Space Engineering Technologies",
  dates: "12–13 September 2026",
  location: "Indore, Madhya Pradesh, India",
  authors: [
    "Slock Ahuja",
    "Prof. Dr. Praveen Kumar Sharma",
    "Dr. C. D. Parmar",
    "Indu Jaiswal"
  ],
  affiliation: "Department of Information and Communication Technology, Marwadi University, Gujarat, India",
  keywords: [
    "6G Wireless Systems",
    "Non-Terrestrial Networks (NTN)",
    "LEO Satellite Constellations",
    "Proximal Policy Optimization (PPO)",
    "Dynamic Resource Allocation",
    "Beamforming & Power Control",
    "Handover Management"
  ],
  abstract: "The integration of Non-Terrestrial Networks (NTN) with terrestrial 6G architectures offers ubiquitous global coverage for maritime, aerial, remote, and disaster-prone environments. However, the high orbital velocity of Low Earth Orbit (LEO) satellites, rapidly changing propagation delays, and heterogeneous user traffic introduce severe resource management and handover challenges. This paper introduces an intelligent, deep reinforcement learning framework using Proximal Policy Optimization (PPO) to dynamically allocate spot-beam bandwidth, transmission power, and satellite-user link associations. Evaluated over a dataset of ~12,000 realistic NTN communication samples, the proposed AI framework achieves an average throughput of 2587.56 Mbps (compared to 2253.55 Mbps for baseline heuristic rules), decreases packet loss from 8.0% to 3.0%, and cuts handover latency from 55 ms down to 30 ms."
};
