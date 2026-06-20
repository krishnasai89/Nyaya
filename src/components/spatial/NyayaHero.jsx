"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NyayaHero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const asciiRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry layout reveal timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".matrix-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, stagger: 0.1 },
      )
        .fromTo(
          ".char-reveal",
          { y: "100%", rotateX: -45, opacity: 0 },
          { y: "0%", rotateX: 0, opacity: 1, duration: 1.2, stagger: 0.05 },
          "-=0.8",
        )
        .fromTo(
          ".bento-item",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
          "-=1",
        );

      tl.fromTo(
        asciiRef.current,
        { opacity: 0, letterSpacing: "-0.2em" },
        {
          opacity: 1,
          letterSpacing: "0em",
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.5",
      );

      // Mouse trail loop with protective touch device interceptor
      const handleMouseMove = (e) => {
        if (window.innerWidth < 768) return;

        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const xPos = (clientX / innerWidth - 0.5) * 30;
        const yPos = (clientY / innerHeight - 0.5) * 30;

        gsap.to(".spatial-glow", {
          x: clientX,
          y: clientY,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(".parallax-layer", {
          rotateY: xPos * 0.5,
          rotateX: -yPos * 0.5,
          duration: 0.6,
          ease: "power1.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen text-white flex flex-col justify-between p-4 sm:p-6 md:p-12 overflow-hidden perspective-1000 font-mono"
    >
      {/* Interactive Spatial Dynamic Floating Fluid Pointer */}
      <div className="spatial-glow fixed w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen z-0 hidden md:block" />

      {/* Structural Geometry Line Array */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="matrix-line absolute top-1/4 left-0 w-full h-[1px] bg-white/[0.08] origin-left" />
        <div className="matrix-line absolute top-2/3 left-0 w-full h-[1px] bg-white/[0.08] origin-left" />
        <div className="matrix-line absolute left-1/4 top-0 h-full w-[1px] bg-white/[0.08] origin-top hidden md:block" />
        <div className="matrix-line absolute left-3/4 top-0 h-full w-[1px] bg-white/[0.08] origin-top hidden md:block" />
      </div>

      {/* Top Bar Navigation Meta Space */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row justify-between items-start gap-4 sm:items-center text-xs border-b border-white/[0.05] pb-4">
        <div>
          <span className="text-purple-400 text-[10px] tracking-widest font-bold">
            SCHOOL 01 OF 06
          </span>
          <h2 className="text-sm font-black text-gray-400 tracking-wider mt-0.5">
            ĀSTIKA / ORTHODOX LOGIC
          </h2>
        </div>
        <div className="sm:text-right font-mono text-[11px]">
          <span className="text-yellow-400 font-bold block">
            STATUS: ACTIVE COMPILING
          </span>
          <p className="text-gray-500 text-[10px] mt-0.5">NEXT.JS JSX V.2026</p>
        </div>
      </div>

      {/* Main Core Title Area */}
      <div className="parallax-layer relative z-10 my-auto grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-center pt-8 pb-8">
        <div className="lg:col-span-2 space-y-6">
          <div ref={headlineRef} className="py-2">
            {/* Mobile Viewports: Render Standard Type Header Block */}
            <h1 className="text-5xl sm:text-7xl font-black tracking-tighter leading-none block md:hidden select-none text-transparent bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text">
              NYĀYA
            </h1>

            {/* Tablets & Desktops: Instantly mounts the raw ASCII block container */}
            <div className="hidden md:block overflow-x-auto select-none [&::-webkit-scrollbar]:hidden w-full">
              <pre
                ref={asciiRef}
                className="text-[6.5px] sm:text-[8px] md:text-[8.5px] lg:text-[10px] leading-[9px] sm:leading-[10px] lg:leading-[11px] text-purple-400/70 bg-black/40 border border-white/[0.06] p-4 md:p-6 rounded-2xl shadow-2xl w-full flex items-center justify-center font-black whitespace-pre"
              >
                {`      _   _                      
     | \\ | |                    
     |  \\| |_   _  __ _ _   _  __ _
     | . \` | | | |/ _\` | | | |/ _\` |
     | |\\  | |_| | (_| | |_| | (_| |
     |_| \\_|\\__, |\\__,_|\\__, |\\__,_|
             __/ |       __/ |      
            |____/      |____/        `}
              </pre>
            </div>
          </div>

          <p className="max-w-xl text-sm md:text-base text-gray-400 leading-relaxed font-sans font-medium char-reveal">
            An ancient Sanskrit blueprint mapping ultimate reality. Dedicated
            entirely to systematic epistemology, valid knowledge extraction, and
            rigid logical cross-examination.
          </p>
        </div>

        {/* Text Pipeline Diagram Container */}
        <div className="lg:col-span-1 flex justify-end w-full select-none overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <pre className="text-[9px] sm:text-[10px] md:text-[11px] leading-[13px] sm:leading-[14px] text-purple-400/80 bg-black/50 border border-white/[0.06] p-4 sm:p-6 rounded-xl shadow-2xl min-w-[280px] w-full tracking-normal font-medium">
            {`        [ NYĀYA LOGIC PIPELINE ]
   
  INPUT CONFIGURATION:
  ┌───────────────────┐     ┌───────────────────┐
  │ 01 . Pratijñā     │     │ 02 . Hetu         │
  │      (Claim)      │     │      (Evidence)   │
  └─────────┬─────────┘     └─────────┬─────────┘
            ▼                         ▼
  ┌─────────────────────────────────────────────┐
  │ 03 . Udāharaṇa                              │
  │      (Universal Law / Ground Truth Link)    │
  └─────────────────────┬───────────────────────┘
                        ▼
                 [ ∴ VALID KNOWLEDGE ]
                        │
                       ▼
  ┌─────────────────────┴───────────────────────┐
  │ 04 . Upanaya (Application of Rule to Case)  │
  ├─────────────────────────────────────────────┤
  │ 05 . Nigamana (Final Logical Conclusion)    │
  └─────────────────────────────────────────────┘`}
          </pre>
        </div>
      </div>

      {/* Bottom Core Definition Bento Box Grid Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/[0.05] pt-6 mt-4">
        {/* Module 1: JUSTICE */}
        <div className="bento-item p-5 sm:p-6 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-purple-500/30 hover:bg-white/[0.02] transition-all group duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-purple-500 font-bold">
              TRANSLATION 01
            </span>
            <span className="text-[9px] tracking-wider uppercase font-black px-2 py-0.5 bg-purple-500/10 text-purple-400 rounded">
              JUSTICE
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
            Equitable Propriety
          </h3>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans">
            Eliminating illusion and universal suffering by maintaining complete
            truth and moral correctness of reality.
          </p>
        </div>

        {/* Module 2: RULE */}
        <div className="bento-item p-5 sm:p-6 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-yellow-500/30 hover:bg-white/[0.02] transition-all group duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-yellow-500 font-bold">
              TRANSLATION 02
            </span>
            <span className="text-[9px] tracking-wider uppercase font-black px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded">
              RULE
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors">
            Axiomatic Framework
          </h3>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans">
            An established universal constant. Defining boundaries through
            structural code syntax metrics.
          </p>
        </div>

        {/* Module 3: METHOD */}
        <div className="bento-item p-5 sm:p-6 rounded-xl bg-white/[0.01] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.02] transition-all group duration-300">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs text-cyan-500 font-bold">
              TRANSLATION 03
            </span>
            <span className="text-[9px] tracking-wider uppercase font-black px-2 py-0.5 bg-cyan-500/10 text-cyan-400 rounded">
              METHOD
            </span>
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
            Systematic Logic
          </h3>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed font-sans">
            The five-step logical syllogism applied safely to architectural
            rendering pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}
