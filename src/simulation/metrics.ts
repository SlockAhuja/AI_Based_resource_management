/**
 * Telemetry and Metrics Utilities for NTN-6G Simulation
 */

import { SimulationMetrics } from './types';
import { reportedResearchMetrics } from '../data/researchResults';

export interface TelemetryPoint {
  time: string;
  throughput: number;
  packetLoss: number;
  latency: number;
  utilization: number;
  servedUsers: number;
  isAi: boolean;
}

export interface UserScalabilityPoint {
  users: number;
  aiThroughput: number;
  baselineThroughput: number;
  aiPacketLoss: number;
  baselinePacketLoss: number;
  aiLatency: number;
  baselineLatency: number;
}

/**
 * Pre-calculated research scalability curves based on Paper 272 empirical data
 */
export const scalabilityCurveData: UserScalabilityPoint[] = [
  { users: 10, aiThroughput: 2850, baselineThroughput: 2700, aiPacketLoss: 1.2, baselinePacketLoss: 2.5, aiLatency: 24, baselineLatency: 35 },
  { users: 50, aiThroughput: 2790, baselineThroughput: 2520, aiPacketLoss: 1.8, baselinePacketLoss: 4.1, aiLatency: 26, baselineLatency: 42 },
  { users: 100, aiThroughput: 2680, baselineThroughput: 2380, aiPacketLoss: 2.4, baselinePacketLoss: 6.2, aiLatency: 28, baselineLatency: 48 },
  { users: 200, aiThroughput: 2587.56, baselineThroughput: 2253.55, aiPacketLoss: 3.0, baselinePacketLoss: 8.0, aiLatency: 30, baselineLatency: 55 },
  { users: 350, aiThroughput: 2420, baselineThroughput: 1980, aiPacketLoss: 4.2, baselinePacketLoss: 12.8, aiLatency: 34, baselineLatency: 68 },
  { users: 500, aiThroughput: 2280, baselineThroughput: 1690, aiPacketLoss: 5.6, baselinePacketLoss: 18.4, aiLatency: 39, baselineLatency: 84 },
];

export function formatTelemetryPoint(metrics: SimulationMetrics, isAi: boolean): TelemetryPoint {
  const d = new Date(metrics.timestamp);
  const timeStr = `${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
  
  return {
    time: timeStr,
    throughput: metrics.avgThroughputMbps,
    packetLoss: metrics.avgPacketLossPercent,
    latency: metrics.avgHandoverLatencyMs,
    utilization: metrics.resourceUtilizationPercent,
    servedUsers: metrics.servedUsers,
    isAi
  };
}

export function getComparisonDelta(metricId: string, currentVal: number, baselineRef: number) {
  const diff = currentVal - baselineRef;
  const pct = ((diff / baselineRef) * 100).toFixed(1);
  return { diff, pct };
}
