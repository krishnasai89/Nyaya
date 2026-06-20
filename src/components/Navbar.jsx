"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Shield, Layers, Menu, X, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#050507]/90 backdrop-blur-md border-b border-white/[0.04] sticky top-0 z-40 font-mono select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left Side: System Core Philosophy Logo Pointer */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
          >
            <div className="p-1.5 rounded bg-purple-500/10 border border-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300">
              <BookOpen className="h-4 w-4 text-purple-400" />
            </div>
            <span className="text-sm font-black tracking-tight text-slate-100 group-hover:text-purple-300 transition-colors duration-300 font-sans uppercase">
              Nyāya Philosophy
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded transition-all ${
                pathname === "/"
                  ? "text-purple-400 bg-purple-500/5 border border-purple-500/10"
                  : "hover:text-slate-200 hover:bg-slate-900/40 border border-transparent"
              }`}
            >
              PHILOSOPHY_ENGINE
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest px-2">
              FRAMEWORK: VALIDATED
            </span>
          </div>
        </div>

        {/* Right Side: Desktop Metrics Widgets */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Epistemic Port Input Checking Status */}
          <div className="flex items-center gap-1.5 bg-black/40 border border-white/[0.02] px-2.5 py-1 rounded border-slate-800/60 text-[10px] text-slate-400">
            <Shield className="h-3 w-3 text-purple-400" />
            <span className="text-slate-500">PORTS:</span>
            <span className="text-purple-400 font-bold">4_PRAMĀṆAS</span>
          </div>

          {/* Matrix Structural Index Categories Counter */}
          <div className="flex items-center gap-1.5 bg-black/40 border border-white/[0.02] px-2.5 py-1 rounded border-slate-800/60 text-[10px] text-slate-400">
            <Layers className="h-3 w-3 text-cyan-400" />
            <span className="text-slate-500">TAXONOMY:</span>
            <span className="text-slate-200 font-bold">16_PADĀRTHAS</span>
          </div>

          {/* Core Framework Core Version Badge */}
          <Badge
            variant="outline"
            className="font-mono text-purple-400 border-purple-500/20 bg-purple-500/5 px-2.5 py-0.5 text-[10px] tracking-wider rounded-md"
          >
            SŪTRA_528.MATRIX
          </Badge>
        </div>

        {/* Mobile & Tablet: Context Menu Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-900/60 focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile / Tablet Dropdown Drawer Panel */}
      <div
        className={`md:hidden border-t border-white/[0.04] bg-[#050507] transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen
            ? "max-h-60 opacity-100 p-4 space-y-4"
            : "max-h-0 opacity-0 p-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-xs px-3 py-2 rounded-md font-medium tracking-wide ${
              pathname === "/"
                ? "bg-purple-500/10 text-purple-400"
                : "text-slate-400 hover:bg-slate-900"
            }`}
          >
            ▲ CORE_PHILOSOPHY_ENGINE
          </Link>
        </div>

        {/* Mobile Meta Telemetry Logs Metrics Breakdown */}
        <div className="pt-2 border-t border-slate-900 grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded p-2 text-slate-400">
            <div className="text-slate-600 font-bold mb-0.5">VALID_INPUTS</div>
            <div className="text-purple-400 font-bold">4 Pramāṇas</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/60 rounded p-2 text-slate-400">
            <div className="text-slate-600 font-bold mb-0.5">CATEGORIES</div>
            <div className="text-cyan-400 font-bold">16 Padārthas</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
