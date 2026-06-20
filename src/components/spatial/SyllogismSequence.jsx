// src/components/spatial/SyllogismSequence.js
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    step: "01",
    title: "Pratijñā (Proposition)",
    body: 'The statement of the thesis to be proven (e.g., "The viewport is dynamic").',
  },
  {
    step: "02",
    title: "Hetu (Reason)",
    body: 'The cause or explanation backing up the claim (e.g., "Because it listens to continuous window resize hooks").',
  },
  {
    step: "03",
    title: "Udāharaṇa (Universal Example)",
    body: 'The undeniable baseline rule (e.g., "All event listeners running debounced callbacks compute structural pixel variants successfully").',
  },
  {
    step: "04",
    title: "Upanaya (Application)",
    body: 'Connecting the baseline rule directly to the current state (e.g., "This specific container is actively modifying its vector space right now").',
  },
  {
    step: "05",
    title: "Nigamana (Conclusion)",
    body: 'The final, absolute deduction (e.g., "Therefore, the viewport is dynamic").',
  },
];

export default function SyllogismSequence() {
  const listRef = useRef(null);

  useEffect(() => {
    // Registering ScrollTrigger inline inside client runtime
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const elements = listRef.current.querySelectorAll(".syllogism-step");

      gsap.fromTo(
        elements,
        { opacity: 0.2, x: -20 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.3,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            end: "bottom 40%",
            scrub: true,
          },
        },
      );
    }
  }, []);

  return (
    <div className="w-full bg-white/[0.01] border border-white/[0.05] rounded-3xl p-8 font-mono">
      <div className="mb-8">
        <span className="text-xs text-yellow-500 font-bold tracking-widest">
          RIGOROUS ARGUMENTATION ENGINE
        </span>
        <h2 className="text-3xl font-black text-white mt-1">
          THE 5-STEP SYLLOGISM
        </h2>
      </div>

      <div ref={listRef} className="space-y-4">
        {STEPS.map((s, idx) => (
          <div
            key={s.step}
            className="syllogism-step p-5 rounded-xl bg-black/40 border border-white/[0.05] hover:border-purple-500/40 transition-colors duration-300 flex flex-col md:flex-row md:items-start gap-4"
          >
            <div className="text-purple-500 font-bold text-lg">{s.step}.</div>
            <div>
              <h4 className="text-white font-bold text-md mb-1">{s.title}</h4>
              <p className="text-sm text-gray-400">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
