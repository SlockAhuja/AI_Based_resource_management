import React, { useState, useEffect, useRef } from 'react';
import { NTNSimulationEngine } from '../simulation/engine';
import {
  SimulationParams,
  SimulationMetrics,
  GroundUser,
  LEOSatellite,
  AllocationDecision,
  TrafficLoadLevel,
  MobilityLevel
} from '../simulation/types';
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Cpu,
  Radio,
  Satellite as SatIcon,
  Users,
  Activity,
  Zap,
  Sliders,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Layers,
  HelpCircle,
  Maximize2
} from 'lucide-react';

interface LiveDemoSectionProps {
  onRunSimulation?: () => void;
  isCompactView?: boolean;
}

export const LiveDemoSection: React.FC<LiveDemoSectionProps> = ({ isCompactView = false }) => {
  // Controls state
  const [numUsers, setNumUsers] = useState<number>(60);
  const [numSatellites, setNumSatellites] = useState<number>(6);
  const [numChannels, setNumChannels] = useState<number>(16);
  const [trafficLoad, setTrafficLoad] = useState<TrafficLoadLevel>('medium');
  const [userMobility, setUserMobility] = useState<MobilityLevel>('medium');
  const [isAiEnabled, setIsAiEnabled] = useState<boolean>(true);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [speed, setSpeed] = useState<number>(1); // 1x, 2x

  // Simulation Engine instance ref
  const engineRef = useRef<NTNSimulationEngine | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Live Metrics & selected entity inspection
  const [metrics, setMetrics] = useState<SimulationMetrics | null>(null);
  const [selectedUser, setSelectedUser] = useState<GroundUser | null>(null);
  const [selectedSatellite, setSelectedSatellite] = useState<LEOSatellite | null>(null);
  const [decisions, setDecisions] = useState<AllocationDecision[]>([]);

  // Initialize Engine
  useEffect(() => {
    const initialParams: SimulationParams = {
      numUsers,
      numSatellites,
      numChannels,
      trafficLoad,
      userMobility,
      isAiEnabled,
      satelliteAltitudeKm: 600,
      noiseFloorDbm: -105,
    };
    engineRef.current = new NTNSimulationEngine(initialParams);
  }, []);

  // Sync parameter updates to engine
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.updateParams({
        numUsers,
        numSatellites,
        numChannels,
        trafficLoad,
        userMobility,
        isAiEnabled,
      });
    }
  }, [numUsers, numSatellites, numChannels, trafficLoad, userMobility, isAiEnabled]);

  // Main Animation Loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTickTime = Date.now();

    const render = () => {
      const now = Date.now();
      const interval = 50 / speed;

      if (isRunning && engineRef.current && now - lastTickTime >= interval) {
        lastTickTime = now;
        const currentMetrics = engineRef.current.step();
        setMetrics(currentMetrics);
        setDecisions(engineRef.current.getRecentDecisions());

        // Update selected entity if present
        if (selectedUser) {
          const updatedUser = engineRef.current.getUsers().find(u => u.id === selectedUser.id);
          if (updatedUser) setSelectedUser({ ...updatedUser });
        }
        if (selectedSatellite) {
          const updatedSat = engineRef.current.getSatellites().find(s => s.id === selectedSatellite.id);
          if (updatedSat) setSelectedSatellite({ ...updatedSat });
        }
      }

      // Draw Canvas
      drawSimulationCanvas();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isRunning, speed, selectedUser, selectedSatellite]);

  // Canvas Drawing Routine
  const drawSimulationCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !engineRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // Sky Background Gradient (Deep Space to Atmosphere)
    const skyGradient = ctx.createLinearGradient(0, 0, 0, height);
    skyGradient.addColorStop(0, '#0B132B'); // Deep space
    skyGradient.addColorStop(0.35, '#1C2541'); // Upper atmosphere
    skyGradient.addColorStop(0.75, '#3A506B'); // Troposphere
    skyGradient.addColorStop(1, '#F8FAFC'); // Ground / sea line
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, width, height);

    // Draw Orbit track lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.setLineDash([6, 6]);
    [12, 20, 28].forEach(orbitalYPercent => {
      ctx.beginPath();
      ctx.moveTo(0, (orbitalYPercent / 100) * height);
      ctx.lineTo(width, (orbitalYPercent / 100) * height);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // Draw Terrain Zones on ground
    const zones = [
      { name: 'Urban Smart City', minX: 0.05, maxX: 0.30, color: 'rgba(59, 130, 246, 0.15)' },
      { name: 'Rural Agri', minX: 0.30, maxX: 0.50, color: 'rgba(16, 185, 129, 0.15)' },
      { name: 'Maritime Ocean', minX: 0.50, maxX: 0.70, color: 'rgba(6, 182, 212, 0.2)' },
      { name: 'Remote Mtn', minX: 0.70, maxX: 0.85, color: 'rgba(139, 92, 246, 0.15)' },
      { name: 'Disaster Relief', minX: 0.85, maxX: 0.95, color: 'rgba(239, 68, 68, 0.2)' },
    ];

    const groundY = height * 0.80;
    zones.forEach(z => {
      ctx.fillStyle = z.color;
      ctx.fillRect(z.minX * width, groundY, (z.maxX - z.minX) * width, height - groundY);
      
      // Zone boundary divider
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.beginPath();
      ctx.moveTo(z.minX * width, groundY);
      ctx.lineTo(z.minX * width, height);
      ctx.stroke();

      // Zone label
      ctx.fillStyle = '#64748B';
      ctx.font = '10px Inter, sans-serif';
      ctx.fillText(z.name, z.minX * width + 6, height - 10);
    });

    const satellites = engineRef.current.getSatellites();
    const users = engineRef.current.getUsers();
    const aerials = engineRef.current.getAerialPlatforms();
    const gNBs = engineRef.current.getBaseStations();

    // 1. Draw Satellite Beams / Spot Coverage Cones
    satellites.forEach(sat => {
      const satX = (sat.x / 100) * width;
      const satY = (sat.y / 100) * height;
      const beamRadius = (sat.coverageRadius / 100) * width;

      // Semi-transparent Spot Beam Cone
      const coneGradient = ctx.createRadialGradient(satX, satY, 10, satX, groundY, beamRadius);
      coneGradient.addColorStop(0, `${sat.beamColor}33`);
      coneGradient.addColorStop(0.7, `${sat.beamColor}15`);
      coneGradient.addColorStop(1, `${sat.beamColor}00`);

      ctx.fillStyle = coneGradient;
      ctx.beginPath();
      ctx.moveTo(satX, satY);
      ctx.lineTo(satX - beamRadius, groundY);
      ctx.lineTo(satX + beamRadius, groundY);
      ctx.closePath();
      ctx.fill();

      // Beam ground footprint ellipse
      ctx.strokeStyle = `${sat.beamColor}66`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(satX, groundY + 8, beamRadius, 10, 0, 0, Math.PI * 2);
      ctx.stroke();
    });

    // 2. Draw Active Communication Links (Beams) from Satellites to Users
    users.forEach(user => {
      if (user.connectedSatelliteId) {
        const sat = satellites.find(s => s.id === user.connectedSatelliteId);
        if (sat) {
          const satX = (sat.x / 100) * width;
          const satY = (sat.y / 100) * height;
          const userX = (user.x / 100) * width;
          const userY = (user.y / 100) * height;

          ctx.strokeStyle = isAiEnabled ? '#38BDF8' : '#F97316';
          ctx.lineWidth = user.priority === 'URLLC' ? 2 : 1;
          ctx.globalAlpha = user.handoverState === 'handoff_active' ? 0.9 : 0.45;

          if (user.handoverState === 'handoff_active') {
            ctx.setLineDash([4, 4]); // Animated dashed line for handover in progress
          } else {
            ctx.setLineDash([]);
          }

          ctx.beginPath();
          ctx.moveTo(satX, satY);
          ctx.lineTo(userX, userY);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.globalAlpha = 1.0;
        }
      }
    });

    // 3. Draw Aerial Segment (HAPS / UAVs)
    aerials.forEach(a => {
      const ax = (a.x / 100) * width;
      const ay = (a.y / 100) * height;

      ctx.fillStyle = a.type === 'HAPS' ? '#A855F7' : '#06B6D4';
      ctx.beginPath();
      ctx.arc(ax, ay, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label
      ctx.fillStyle = '#CBD5E1';
      ctx.font = '9px Inter, sans-serif';
      ctx.fillText(a.name, ax - 25, ay - 10);
    });

    // 4. Draw Terrestrial Base Stations (gNBs)
    gNBs.forEach(gnb => {
      const gx = (gnb.x / 100) * width;
      const gy = (gnb.y / 100) * height;

      ctx.fillStyle = gnb.status === 'active' ? '#10B981' : '#EF4444';
      // Draw tower triangle
      ctx.beginPath();
      ctx.moveTo(gx, gy - 12);
      ctx.lineTo(gx - 6, gy);
      ctx.lineTo(gx + 6, gy);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#475569';
      ctx.font = '9px Inter, sans-serif';
      ctx.fillText(gnb.name, gx - 30, gy + 12);
    });

    // 5. Draw Ground Users
    users.forEach(user => {
      const ux = (user.x / 100) * width;
      const uy = (user.y / 100) * height;

      // Color code by priority/connection
      if (user.connectedSatelliteId) {
        ctx.fillStyle = user.priority === 'URLLC' ? '#EF4444' : user.zone === 'maritime' ? '#06B6D4' : '#2563EB';
      } else {
        ctx.fillStyle = '#94A3B8'; // Disconnected / Out of coverage
      }

      ctx.beginPath();
      ctx.arc(ux, uy, user.priority === 'URLLC' ? 4.5 : 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Selected ring
      if (selectedUser?.id === user.id) {
        ctx.strokeStyle = '#F97316';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(ux, uy, 7, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    // 6. Draw Satellites on Orbits
    satellites.forEach(sat => {
      const sx = (sat.x / 100) * width;
      const sy = (sat.y / 100) * height;

      // Satellite glow halo
      ctx.fillStyle = `${sat.beamColor}44`;
      ctx.beginPath();
      ctx.arc(sx, sy, 14, 0, Math.PI * 2);
      ctx.fill();

      // Solar wings
      ctx.fillStyle = '#38BDF8';
      ctx.fillRect(sx - 16, sy - 3, 10, 6);
      ctx.fillRect(sx + 6, sy - 3, 10, 6);

      // Central payload body
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(sx - 4, sy - 5, 8, 10);
      ctx.strokeStyle = sat.beamColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(sx - 4, sy - 5, 8, 10);

      // Label & Channel Load
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 10px Outfit, sans-serif';
      ctx.fillText(sat.name, sx - 22, sy - 14);

      ctx.fillStyle = '#94A3B8';
      ctx.font = '9px JetBrains Mono, monospace';
      const usedChannels = sat.totalChannels - sat.availableChannels;
      ctx.fillText(`${usedChannels}/${sat.totalChannels} ch`, sx - 16, sy + 18);

      // Selected ring
      if (selectedSatellite?.id === sat.id) {
        ctx.strokeStyle = '#F97316';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, 18, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
  };

  // Canvas Click Handler (Select user or satellite)
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !engineRef.current) return;
    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    // Check satellites first
    const clickedSat = engineRef.current.getSatellites().find(s => {
      const dist = Math.hypot(s.x - clickX, s.y - clickY);
      return dist < 6;
    });

    if (clickedSat) {
      setSelectedSatellite(clickedSat);
      setSelectedUser(null);
      return;
    }

    // Check users
    const clickedUser = engineRef.current.getUsers().find(u => {
      const dist = Math.hypot(u.x - clickX, u.y - clickY);
      return dist < 4;
    });

    if (clickedUser) {
      setSelectedUser(clickedUser);
      setSelectedSatellite(null);
    } else {
      setSelectedUser(null);
      setSelectedSatellite(null);
    }
  };

  const handleResetSimulation = () => {
    if (engineRef.current) {
      engineRef.current.initializeEnvironment();
      setSelectedUser(null);
      setSelectedSatellite(null);
    }
  };

  return (
    <section id="live-demo" className={`py-16 ${isCompactView ? 'bg-transparent py-4' : 'bg-slate-900 text-white border-y border-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!isCompactView && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                SECTION 8 — FLAGSHIP INTERACTIVE TESTBED
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-white">
                LIVE NTN-6G RESOURCE MANAGEMENT DEMO
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Real-time 3GPP TR 38.811 LEO constellation kinematics, beam steering, and AI (PPO) vs Baseline resource scheduling.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${
                  isRunning
                    ? 'bg-amber-500 hover:bg-amber-600 text-slate-950'
                    : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                }`}
              >
                {isRunning ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isRunning ? 'Pause Simulation' : 'Resume Simulation'}</span>
              </button>

              <button
                onClick={handleResetSimulation}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs border border-slate-700 transition-colors"
                title="Reset simulation parameters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        )}

        {/* Real-Time Telemetry Ticker Bar */}
        {metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg Throughput</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black font-display text-blue-400">{metrics.avgThroughputMbps}</span>
                <span className="text-[10px] font-semibold text-slate-400">Mbps</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Sum: {metrics.totalCapacityGbps} Gbps</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Packet Loss Rate</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className={`text-xl font-black font-display ${metrics.avgPacketLossPercent <= 4 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {metrics.avgPacketLossPercent}%
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Under dynamic fading</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Handover Latency</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black font-display text-purple-400">{metrics.avgHandoverLatencyMs}</span>
                <span className="text-[10px] font-semibold text-slate-400">ms</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">{metrics.totalHandoversInProgress} active handoffs</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Resource Utilization</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black font-display text-orange-400">{metrics.resourceUtilizationPercent}%</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Channel occupancy</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Served / Total Users</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black font-display text-emerald-400">{metrics.servedUsers}</span>
                <span className="text-xs text-slate-400 font-bold">/ {metrics.activeUsers}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">
                {metrics.unservedUsersCount > 0 ? `${metrics.unservedUsersCount} out of beam` : '100% covered'}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700/80">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Jain's Fairness</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-black font-display text-cyan-400">{metrics.jainsFairnessIndex}</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5">Max: 1.000</p>
            </div>
          </div>
        )}

        {/* Interactive Simulation Display & Control Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Visualizer (Canvas) */}
          <div className="lg:col-span-8 flex flex-col space-y-3">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
              {/* Top Canvas Overlay Bar */}
              <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="font-bold text-white">Multi-Tier 6G NTN Orbital View</span>
                  <span className="text-slate-400 text-[10px]">(Click any entity to inspect)</span>
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <div className="px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-900/80 backdrop-blur-md border border-slate-700">
                    Mode:{' '}
                    <span className={isAiEnabled ? 'text-blue-400 font-black' : 'text-orange-400 font-black'}>
                      {isAiEnabled ? 'PPO AI AGENT (ON)' : 'BASELINE RULE-BASED (OFF)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Simulation Canvas */}
              <canvas
                ref={canvasRef}
                width={880}
                height={460}
                onClick={handleCanvasClick}
                className="w-full h-[360px] sm:h-[440px] block cursor-crosshair"
              />

              {/* Bottom Canvas Legend */}
              <div className="bg-slate-950/90 border-t border-slate-800 px-4 py-2.5 text-[11px] text-slate-400 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> LEO Satellite
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> HAPS / UAV
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> 6G Base Station
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> URLLC / Disaster
                  </span>
                </div>
                <div className="text-slate-500 text-[10px]">
                  Carrier: Ka-Band (28 GHz) • 3GPP TR 38.811
                </div>
              </div>
            </div>

            {/* Disclaimer required by user */}
            <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60 text-xs text-slate-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-orange-400 shrink-0" />
              <span>
                <strong>Research Note:</strong> Interactive simulation is a visualization of the NTN resource-management concept. Reported research results are shown separately.
              </span>
            </div>
          </div>

          {/* Right Column: Controls & Inspector */}
          <div className="lg:col-span-4 space-y-4">
            {/* Control Panel */}
            <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-blue-400" />
                  <h3 className="font-display font-bold text-sm text-white">Simulation Controls</h3>
                </div>
                {/* AI Toggle Switch */}
                <button
                  onClick={() => setIsAiEnabled(!isAiEnabled)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isAiEnabled
                      ? 'bg-blue-600 text-white shadow-glow-blue'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>AI: {isAiEnabled ? 'ON' : 'OFF'}</span>
                </button>
              </div>

              {/* Slider 1: Number of Users (5 -> 500) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    Number of Users
                  </span>
                  <span className="font-mono font-bold text-blue-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                    {numUsers}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="500"
                  step="5"
                  value={numUsers}
                  onChange={(e) => setNumUsers(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                  <span>5 users</span>
                  <span>250</span>
                  <span>500 users</span>
                </div>
              </div>

              {/* Slider 2: Number of LEO Satellites (1 -> 50) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <SatIcon className="w-3.5 h-3.5 text-orange-400" />
                    Number of LEO Satellites
                  </span>
                  <span className="font-mono font-bold text-orange-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                    {numSatellites}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={numSatellites}
                  onChange={(e) => setNumSatellites(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-0.5">
                  <span>1 sat</span>
                  <span>25</span>
                  <span>50 sats</span>
                </div>
              </div>

              {/* Slider 3: Channels per Satellite */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-purple-400" />
                    Channels per Satellite
                  </span>
                  <span className="font-mono font-bold text-purple-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                    {numChannels}
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="64"
                  step="4"
                  value={numChannels}
                  onChange={(e) => setNumChannels(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Selectors: Traffic Load & Mobility */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1.5">Traffic Load</label>
                  <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-700">
                    {(['low', 'medium', 'high'] as TrafficLoadLevel[]).map((level) => (
                      <button
                        key={level}
                        onClick={() => setTrafficLoad(level)}
                        className={`py-1 text-[10px] font-bold rounded-lg capitalize transition-colors ${
                          trafficLoad === level ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-400 block mb-1.5">User Mobility</label>
                  <div className="grid grid-cols-3 gap-1 bg-slate-900 p-1 rounded-xl border border-slate-700">
                    {(['low', 'medium', 'high'] as MobilityLevel[]).map((level) => (
                      <button
                        key={level}
                        onClick={() => setUserMobility(level)}
                        className={`py-1 text-[10px] font-bold rounded-lg capitalize transition-colors ${
                          userMobility === level ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Entity Inspector Panel (When entity clicked) */}
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
                <span>Real-Time Node Telemetry</span>
                {selectedUser || selectedSatellite ? (
                  <button
                    onClick={() => { setSelectedUser(null); setSelectedSatellite(null); }}
                    className="text-[10px] text-blue-400 hover:underline"
                  >
                    Clear selection
                  </button>
                ) : null}
              </h4>

              {selectedUser ? (
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{selectedUser.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {selectedUser.priority}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700">
                    <div>
                      <p className="text-[10px] text-slate-400">Connected Sat:</p>
                      <p className="font-bold text-slate-200">{selectedUser.connectedSatelliteId || 'None (Searching)'}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Throughput:</p>
                      <p className="font-bold text-emerald-400">{selectedUser.throughputMbps} Mbps</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">SINR:</p>
                      <p className="font-bold text-cyan-400">{selectedUser.sinrDb} dB</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Packet Loss:</p>
                      <p className="font-bold text-amber-400">{selectedUser.packetLossPercent}%</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Allocated Power:</p>
                      <p className="font-bold text-slate-200">{selectedUser.allocatedPowerDbm} dBm</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Bandwidth:</p>
                      <p className="font-bold text-slate-200">{selectedUser.allocatedBandwidthMhz} MHz</p>
                    </div>
                  </div>
                </div>
              ) : selectedSatellite ? (
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{selectedSatellite.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                      Alt: {selectedSatellite.altitudeKm} km
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700">
                    <div>
                      <p className="text-[10px] text-slate-400">Active Links:</p>
                      <p className="font-bold text-blue-400">{selectedSatellite.connectedUserIds.length} users</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Available Channels:</p>
                      <p className="font-bold text-emerald-400">{selectedSatellite.availableChannels} / {selectedSatellite.totalChannels}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Doppler Shift:</p>
                      <p className="font-bold text-purple-400">{selectedSatellite.dopplerShiftKhz} kHz</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400">Battery Level:</p>
                      <p className="font-bold text-slate-200">{selectedSatellite.batteryLevelPercent}%</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-slate-400 text-[11px] py-4 text-center">
                  <p>Click on any user dot or satellite in the canvas to view real-time RF channel gain, SINR, power level, and handover state.</p>
                </div>
              )}
            </div>

            {/* PPO Decisions Log Stream */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-xs max-h-48 overflow-y-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-white text-[11px]">Recent AI Scheduling Decisions</span>
                <span className="text-[10px] text-emerald-400 font-mono">● Active</span>
              </div>
              <div className="space-y-1.5">
                {decisions.slice(0, 4).map((d, i) => (
                  <div key={i} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px]">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="font-bold text-blue-300">{d.userName}</span>
                      <span className="text-orange-400 font-semibold">{d.satelliteName}</span>
                    </div>
                    <p className="text-slate-400 text-[9px] mt-0.5 truncate">{d.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
