"use client";
import React, { useEffect, useState } from "react";
import { ShieldCheck, Terminal, AlertTriangle } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Preloader() {
  const [logLine, setLogLine] = useState("INITIALIZING_LOGIC_KERNEL");
  const [progress, setProgress] = useState(0);
  const [currentLayer, setCurrentLayer] = useState("MITHYĀ_JÑĀNA");

  useEffect(() => {
    const breakdownSequence = [
      {
        time: 0,
        layer: "MITHYĀ_JÑĀNA",
        text: "CRITICAL_FAULT: DECEPTIVE_OVERLAY_DETECTED // PURGING_FALSE_KNOWLEDGE",
      },
      {
        time: 600,
        layer: "DOṢA",
        text: "EXCEPTION_CAUGHT: BIAS_HOOK_FOUND // DEACTIVATING_ATTRACTION_AND_AVERSION",
      },
      {
        time: 1200,
        layer: "PRAVṚTTI",
        text: "THROTTLING_NETWORK_BUS: HALTING_STALE_KARMIC_ACTIVITY_RUNS",
      },
      {
        time: 1800,
        layer: "JANMA",
        text: "CONTAINER_SECURITY: UNMOUNTING_RECURSIVE_LIFECYCLE_CONTAINERS",
      },
      {
        time: 2400,
        layer: "DUḤKHA",
        text: "ZERO_FRICTION_ACHIEVED: ERASING_RESIDUAL_STRUCTURAL_DISTRESS_LOGS",
      },
      {
        time: 3000,
        layer: "APAVARGA",
        text: "SUCCESS: SYSTEM_LOGOUT_CLEAN // CORE_CONSCIOUSNESS_SOVEREIGN",
      },
    ];

    breakdownSequence.forEach((phase) => {
      setTimeout(() => {
        setLogLine(phase.text);
        setCurrentLayer(phase.layer);
      }, phase.time);
    });

    // Accelerated progress math matching the text sequence bounds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 65);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050507] z-50 flex flex-col items-center justify-center font-mono select-none p-6">
      <div className="max-w-xl w-full border border-slate-800/80 bg-slate-950/60 rounded-xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Decorative Grid Accent Lines */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 blur-xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/5 blur-xl rounded-full" />

        {/* Status Dashboard Header */}
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-4 mb-6 text-[10px] text-slate-500 font-bold">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5 text-purple-400" />
            <span>GAUTAMA_REVERSE_COMPILER_V1.1.2</span>
          </div>
          <Badge
            variant="outline"
            className="border-purple-500/20 bg-purple-500/5 text-purple-400 px-1.5 py-0.5 text-[9px]"
          >
            STATUS // STACK_TRACE_DECONSTRUCTION
          </Badge>
        </div>

        {/* Current Active Metaphysical Layer Status Layout */}
        <div className="grid grid-cols-5 gap-1.5 mb-6 text-center text-[9px] font-bold">
          {["MITHYĀ_JÑĀNA", "DOṢA", "PRAVṚTTI", "JANMA", "DUḤKHA"].map(
            (layer, idx) => {
              const isCleared = progress >= (idx + 1) * 20;
              const isActive = currentLayer === layer;
              return (
                <div
                  key={layer}
                  className={`py-1.5 rounded transition-all duration-300 border ${
                    isCleared
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : isActive
                        ? "bg-purple-500/20 border-purple-500/50 text-purple-300 animate-pulse"
                        : "bg-slate-900/40 border-slate-800 text-slate-600"
                  }`}
                >
                  <div>0{idx + 1}</div>
                  <div className="mt-0.5 truncate text-[8px] tracking-tight">
                    {layer.split("_")[0]}
                  </div>
                </div>
              );
            },
          )}
        </div>

        {/* Interactive Telemetry Log Readout Block */}
        <div className="min-h-[64px] bg-black/40 border border-white/[0.02] rounded-lg p-3 flex items-start gap-3 mb-6">
          {currentLayer === "APAVARGA" ? (
            <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5 animate-bounce" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5 animate-pulse" />
          )}
          <div className="space-y-1">
            <span className="text-[10px] text-slate-500 block font-bold tracking-widest">
              EXECUTION_TRACE_LOG //
            </span>
            <p className="text-xs text-slate-200 leading-normal font-medium tracking-wide">
              {logLine}
            </p>
          </div>
        </div>

        {/* Unified Loading Track Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-slate-900/60 border border-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-600 via-purple-500 to-emerald-400 h-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 font-bold">
            <span>METRIC: REVERSED_CANCELLATION_ALGORITHM</span>
            <span
              className={
                progress === 100 ? "text-emerald-400" : "text-slate-400"
              }
            >
              {progress === 100 ? "MOKṢA_GA" : `${progress}%`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
