/**
 * Types and Data Contracts for NTN-6G Simulation Engine
 * Modeling LEO satellite constellations, Aerial UAV/HAPS platforms, Terrestrial Base Stations,
 * Heterogeneous User Terminals, and AI (PPO) vs Baseline Resource Allocation.
 */

export type UserZone = 'urban' | 'rural' | 'maritime' | 'remote' | 'disaster';

export type TrafficLoadLevel = 'low' | 'medium' | 'high';
export type MobilityLevel = 'low' | 'medium' | 'high';

export interface GroundUser {
  id: string;
  name: string;
  zone: UserZone;
  x: number; // normalized coordinate 0..100
  y: number; // normalized coordinate 0..100
  vx: number; // velocity x
  vy: number; // velocity y
  trafficDemandMbps: number; // required data rate (e.g. 5 - 120 Mbps)
  priority: 'URLLC' | 'eMBB' | 'mMTC';
  connectedSatelliteId: string | null;
  connectedChannelId: number | null;
  allocatedPowerDbm: number;
  allocatedBandwidthMhz: number;
  sinrDb: number;
  throughputMbps: number;
  packetLossPercent: number;
  latencyMs: number;
  handoverCount: number;
  handoverState: 'stable' | 'handover_pending' | 'handoff_active';
}

export interface LEOSatellite {
  id: string;
  name: string;
  orbitIndex: number;
  x: number; // 0..100 horizontal position
  y: number; // orbital elevation / height
  vx: number; // orbital velocity vector
  altitudeKm: number; // 550 - 1200 km
  elevationAngleDeg: number;
  coverageRadius: number; // beam footprint radius in canvas %
  totalChannels: number; // e.g. 8 - 32 channels
  availableChannels: number;
  totalPowerWatts: number; // e.g. 150 - 400 W
  usedPowerWatts: number;
  connectedUserIds: string[];
  beamColor: string;
  isActive: boolean;
  batteryLevelPercent: number;
  dopplerShiftKhz: number;
}

export interface AerialPlatform {
  id: string;
  type: 'HAPS' | 'UAV';
  name: string;
  x: number;
  y: number;
  altitudeKm: number; // 15 - 25 km
  coverageRadius: number;
  connectedUserIds: string[];
}

export interface TerrestrialBaseStation {
  id: string;
  name: string;
  x: number;
  y: number;
  coverageRadius: number;
  connectedUserIds: string[];
  status: 'active' | 'congested' | 'offline_disaster';
}

export interface SimulationParams {
  numUsers: number;
  numSatellites: number;
  numChannels: number;
  trafficLoad: TrafficLoadLevel;
  userMobility: MobilityLevel;
  isAiEnabled: boolean; // true = PPO AI agent, false = Baseline rule-based greedy
  satelliteAltitudeKm: number;
  noiseFloorDbm: number;
}

export interface SimulationMetrics {
  timestamp: number;
  activeUsers: number;
  servedUsers: number;
  avgThroughputMbps: number;
  totalCapacityGbps: number;
  avgPacketLossPercent: number;
  avgHandoverLatencyMs: number;
  resourceUtilizationPercent: number;
  jainsFairnessIndex: number;
  energyEfficiencyBitsPerJoule: number;
  totalHandoversInProgress: number;
  unservedUsersCount: number;
}

export interface AllocationDecision {
  userId: string;
  userName: string;
  zone: UserZone;
  satelliteId: string;
  satelliteName: string;
  channelId: number;
  powerDbm: number;
  bandwidthMhz: number;
  allocatedBy: 'PPO_AI_AGENT' | 'RULE_BASED_GREEDY';
  sinr: number;
  expectedThroughput: number;
  reason: string;
}
