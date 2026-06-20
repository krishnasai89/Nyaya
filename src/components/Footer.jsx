"use client";
import React from "react";
import Link from "next/link";
import { BookOpen, GitBranch, ArrowUpRight, Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Mapping the 5 structural layout chapters of the framework text
  const frameworkChapters = [
    { id: "1", name: "Ch 1: The Core Blueprint" },
    { id: "2", name: "Ch 2: Testing & Epistemology" },
    { id: "3", name: "Ch 3: The Metaphysical Substrate" },
    { id: "4", name: "Ch 4: Error Neutralization" },
    { id: "5", name: "Ch 5: The Defeat Appendix" },
  ];

  return (
    <footer className="w-full bg-[#030305] border-t border-white/[0.03] text-mono mt-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* Top Tier: Responsive Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-6 pb-10 border-b border-slate-900">
          {/* Identity Block (Spans 4 cols on desktop) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5 text-slate-200 font-sans font-black tracking-wider text-sm uppercase">
              <div className="p-1 rounded bg-purple-500/10 border border-purple-500/20">
                <Scale className="h-3.5 w-3.5 text-purple-400" />
              </div>
              <span>Nyāya Philosophy</span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              An open-source, digital encyclopedia tracking the formal logic,
              epistemology, and physical atomic frameworks authored by Sage
              Akṣapāda Gautama.
            </p>
          </div>

          {/* Chapter Navigation Track Block (Spans 5 cols on desktop) */}
          <div className="md:col-span-5 space-y-3">
            <span className="text-[10px] text-slate-500 font-bold tracking-widest block uppercase">
              System Chapters Registry //
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {frameworkChapters.map((ch) => (
                <Link
                  key={ch.id}
                  href={`/chapters/${ch.id}`}
                  className="text-slate-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-1 group truncate"
                >
                  <span className="text-slate-600 group-hover:text-purple-500/60 font-sans">
                    0{ch.id}.
                  </span>
                  <span>{ch.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* External Verification Endpoints (Spans 3 cols on desktop) */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-[10px] text-slate-500 font-bold tracking-widest block uppercase">
              External Verification //
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href="https://github.com/krishnasai89"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors duration-200 flex items-center justify-between group border border-white/[0.02] bg-white/[0.01] p-2 rounded hover:bg-slate-900/40"
              >
                <div className="flex items-center gap-2">
                  <GitBranch className="h-3 w-3 text-slate-500 group-hover:text-cyan-400" />
                  <span>Repository Source</span>
                </div>
                <ArrowUpRight className="h-3 w-3 text-slate-600 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Telemetry Status Lines */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-bold tracking-tight">
          {/* Copyright Signature */}
          <div className="font-sans text-center sm:text-left">
            &copy; {currentYear} NYĀYA_PHILOSOPHY_PROJECT.
            VERIFIED_PRODUCTION_STATE.
          </div>

          {/* Core Framework Build Tags */}
          <div className="flex items-center gap-4 text-[9px]">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-600">SCHEMAS:</span>
              <span className="text-purple-400">528_SŪTRAS</span>
            </div>
            <span className="text-slate-800">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-slate-600">COMPILER:</span>
              <span className="text-slate-300">NEXT.JS_16</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
