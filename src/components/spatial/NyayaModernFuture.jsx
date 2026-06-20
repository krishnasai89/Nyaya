"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NyayaModernFuture() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Dynamic cascade reveal loop
      gsap.fromTo(
        ".future-card",
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-6 py-24 font-mono text-white relative"
    >
      {/* Dynamic Module Floating Radial Mask */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      {/* Module Title Matrix Header */}
      <div className="mb-16 border-b border-white/[0.05] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <span className="text-xs text-cyan-400 font-bold tracking-widest">
            COGNITIVE OPERATING SYSTEM
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-1 uppercase tracking-tight">
            Nyāya in the Modern & Future World
          </h2>
        </div>
        <div className="text-gray-500 text-[10px] mt-4 md:mt-0 uppercase">
          [ Scale: Present ──► Tomorrow ]
        </div>
      </div>

      {/* Main Asymmetric Bento Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Box 1: THE PRESENT DEEPFAKE ARMOR (Col Span 2) */}
        <div className="future-card lg:col-span-2 p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md hover:border-purple-500/30 hover:bg-white/[0.02] transition-all duration-500 group flex flex-col justify-between min-h-[380px]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-purple-400 font-bold">
                PHASE 01 — AUTOMATED ILLUSION
              </span>
              <span className="text-[10px] font-black tracking-widest bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded">
                ZERO-TRUST EPISTEMOLOGY
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
              The Armor Against Generative AI & Deepfakes
            </h3>
            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-2xl">
              In an age of synthetic identities and automated confirmation bias,
              traditional trust vectors have collapsed. Nyāya transforms from
              historical philosophy into an active verification protocol.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-400 font-mono pt-2">
              <li className="bg-black/30 p-3 rounded-lg border border-white/[0.02] hover:border-white/[0.08] transition-colors">
                <strong className="text-white block mb-1">
                  Pratyakṣa (Perception)
                </strong>
                Evolves into cryptographic data provenance. If data lacks source
                signatures (C2PA), its sensory trust matrix is invalid.
              </li>
              <li className="bg-black/30 p-3 rounded-lg border border-white/[0.02] hover:border-white/[0.08] transition-colors">
                <strong className="text-white block mb-1">
                  Śabda (Testimony)
                </strong>
                Maps directly to immutable decentralized ledgers and
                zero-knowledge consensus layers to verify network experts.
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-white/[0.04]">
            <pre className="text-[10px] leading-relaxed text-purple-400/70 select-none bg-black/40 p-3 rounded border border-black overflow-x-auto">
              {`[ RAW SYNTHETIC DATA ] ──► [ PRAMĀṆAS VERIFICATION FILTER ] ──► [ CONFIRMED TRUE REALITY ]`}
            </pre>
          </div>
        </div>

        {/* Box 2: THE INTERACTIVE CONFLICT ENGINE (Col Span 1) */}
        <div className="future-card lg:col-span-1 p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md hover:border-yellow-500/30 hover:bg-white/[0.02] transition-all duration-500 group flex flex-col justify-between min-h-[380px]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-yellow-500 font-bold">
                PHASE 02 — INTERACTION
              </span>
              <span className="text-[10px] font-black tracking-widest bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-2 py-0.5 rounded">
                THE VĀDA PROTOCOL
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              Curing Echo Chambers
            </h3>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              Modern online layout parameters capitalize on **Jalpa** (arguing
              purely to win) and **Vitaṇḍā** (destructive trolling). Nyāya
              details **Vāda**—a truth-focused, collaborative discourse pipeline
              where parties interact to solve structural communication
              blindspots.
            </p>
          </div>

          <div className="space-y-2 font-mono text-[10px]">
            <div className="flex justify-between bg-red-500/5 p-2 rounded border border-red-500/10 text-red-400">
              <span>[!] OUTRAGE INTERACT (JALPA)</span>
              <span>BLOCKED</span>
            </div>
            <div className="flex justify-between bg-yellow-500/5 p-2 rounded border border-yellow-500/10 text-yellow-400">
              <span>[▲] COLLABORATIVE REASON (VĀDA)</span>
              <span>EXECUTED</span>
            </div>
          </div>
        </div>

        {/* Box 3: THE COMPILER ARCHITECTURE OF TOMORROW (Col Span 3) */}
        <div className="future-card lg:col-span-3 p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] backdrop-blur-md hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all duration-500 group grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[260px]">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-cyan-400 font-bold tracking-wider">
                PHASE 03 — FUTURE SYSTEM ENGINE
              </span>
              <span className="text-[10px] font-black tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded">
                NAVYA-NYĀYA LOGIC COMPILER
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
              The Architecture of Tomorrow's Autonomous Neural Networks
            </h3>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Gaṅgeśa’s 14th-century upgrade bypassed regular language
              restrictions, introducing a precise linguistic notation mapping
              relationships, limiting qualifiers, and inheritance loops. This
              system functions precisely like modern graph databases, semantic
              data nodes, and **Neuro-Symbolic AI models**—acting as the
              ultimate logical compiler for next-generation systems thinking.
            </p>
          </div>

          <div className="lg:col-span-1 h-full flex items-center">
            <pre className="text-[10px] md:text-[11px] leading-relaxed text-cyan-400/80 bg-black/50 border border-white/[0.06] p-5 rounded-xl w-full font-black select-none overflow-hidden shadow-2xl">
              {`// NEURO-SYMBOLIC COMPILER LAYERS
define relation Samsarga() {
  target: ObjectProperties;
  restrictor: Avacchedakatā;
  inversion: Pratiyogitā(!);
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
