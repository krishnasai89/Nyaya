"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE_DATA = [
  {
    version: "v1.0.0",
    title: "The Core Engine: Nyāya Sūtras",
    architect: "Akṣapāda Gautama",
    era: "c. 2nd Century CE or earlier",
    description:
      "Compiled the foundational 4 Pramāṇas (valid inputs) and the 5-step syllogism. Written as highly compressed, puzzle-like aphorisms designed to be memorized like compiled bytecode.",
    tag: "CORE RUNTIME",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    visual: `[ INPUTS ] ──► [ CORE PRATYAKṢA ] ──► [ PROOF ]`,
  },
  {
    version: "v1.5.0",
    title: "The Security Patches: Commentarial Era",
    architect: "Vātsyāyana, Uddyotakara, Vācaspati Miśra",
    era: "4th — 10th Century CE",
    description:
      "A thousand-year era of active debugging. Master philosophers wrote extensive system patches (Bhāṣyas) to protect the logical runtime against external debater logic attacks.",
    tag: "STABILITY OVERHAUL",
    tagColor: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    visual: `[ BUG FIX ] ──► [ REFUTATION ENGINE ] ──► [ PATCH ]`,
  },
  {
    version: "v2.0.0",
    title: "The Complete Language Overhaul: Navya-Nyāya",
    architect: "Gaṅgeśa Upādhyāya",
    era: "14th Century CE — Present",
    description:
      "Redesigned structural thinking by inventing a brand new, formal, pseudo-mathematical conceptual language. This language eliminates the vagueness of human words—reading remarkably like modern object-oriented code syntax.",
    tag: "LOGIC COMPILER",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    visual: `// PSEUDO-CODE LOGIC MATRIX
if ( smoke && rule.matches(smoke, fire) ) {
  return KNOWLEDGE_STABLE;
}`,
  },
];

export default function UpgradeMap() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const nodes = timelineRef.current.querySelectorAll(".timeline-node");

      // Animate lines and cards dynamically as the user scrolls down
      gsap.fromTo(
        nodes,
        { opacity: 0.2, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 75%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={timelineRef}
      className="w-full max-w-6xl mx-auto px-4 py-20 font-mono text-white relative"
    >
      {/* Decorative Module Header */}
      <div className="mb-16 border-b border-white/[0.05] pb-6">
        <span className="text-xs text-purple-400 font-bold tracking-widest">
          COMPILATION ROADMAP
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-1 tracking-tight uppercase">
          Nyāya System Evolution
        </h2>
      </div>

      {/* Main Structural Vertical Wire Grid */}
      <div className="relative border-l border-l-8 border-white/[0.08] ml-4 md:ml-32 space-y-12">
        {TIMELINE_DATA.map((item, idx) => (
          <div
            key={idx}
            className="timeline-node relative pl-8 md:pl-12 group transition-all duration-300"
          >
            {/* Pulsing Connecting Joint */}
            <div className="absolute -left-[10px] top-16 w-3 h-3 rounded-full bg-white border border-black shadow-[0_0_10px_rgba(255,255,255,0.8)] group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,1)] transition-all duration-500" />

            {/* Absolute Fixed Version Node Stamp on Desktop */}
            <span className="hidden md:block absolute -left-32 top-0 text-right w-24 text-sm font-black tracking-tighter text-gray-500 group-hover:text-white transition-colors duration-300">
              {item.version}
            </span>

            {/* Premium Content Box Layer */}
            <div className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.04] backdrop-blur-sm group-hover:border-white/[0.12] group-hover:bg-white/[0.02] transition-all duration-500 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Left Details block */}
              <div className="lg:col-span-2 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="md:hidden text-xs font-black bg-white/10 px-2 py-0.5 rounded text-gray-300">
                    {item.version}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 border font-bold rounded ${item.tagColor}`}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {item.era}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 font-sans leading-relaxed pt-1">
                  <strong className="font-mono text-gray-300">
                    Lead Architect:
                  </strong>{" "}
                  {item.architect} <br />
                  <span className="inline-block mt-2">{item.description}</span>
                </p>
              </div>

              {/* Right Code-to-Art Visual Node */}
              <div className="lg:col-span-1 h-full flex items-center lg:justify-end">
                <pre className="text-[10px] leading-relaxed text-purple-400/80 bg-black/40 border border-white/[0.05] p-4 rounded-lg w-full font-black select-none overflow-hidden text-left shadow-inner">
                  {item.visual}
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
