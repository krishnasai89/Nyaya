// src/components/spatial/PramanasModule.js
"use client";
import { useState } from "react";

const PRAMANAS_DATA = [
  {
    id: "pratyaksha",
    title: "Pratyakṣa (Perception)",
    desc: "Direct sensory experience. In the digital space, this is your raw WebGL context and user input tracking.",
    ascii: " [☉] EYE -> CANVAS ",
  },
  {
    id: "anumana",
    title: "Anumāna (Inference)",
    desc: "Logical deduction based on observation. Computing structural layouts based on browser dimensions.",
    ascii: " [∴] LOGIC -> RENDERING ",
  },
  {
    id: "upamana",
    title: "Upamāna (Comparison)",
    desc: "Knowledge acquired by analogy. Translating real-world skeuomorphic materials into code art.",
    ascii: " [≏] ANALOGY -> CODE ",
  },
  {
    id: "shabda",
    title: "Śabda (Testimony)",
    desc: "Knowledge gained from trustworthy experts or reliable foundational specifications.",
    ascii: " [📖] SPEC -> COMPILE ",
  },
];

export default function PramanasModule() {
  const [activeTab, setActiveTab] = useState("pratyaksha");
  const current = PRAMANAS_DATA.find((p) => p.id === activeTab);

  return (
    <div className="p-6 rounded-2xl bg-[#121214] border border-white/[0.08] backdrop-blur-md flex flex-col justify-between h-full font-mono">
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs text-purple-400 font-bold">
            MEANS OF KNOWLEDGE
          </span>
          <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-full">
            Pramāṇas
          </span>
        </div>

        {/* Chips Interface Selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PRAMANAS_DATA.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                activeTab === p.id
                  ? "bg-purple-500/20 border-purple-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                  : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:border-white/20"
              }`}
            >
              {p.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Dynamic Panel Display */}
        <div className="min-h-[100px]">
          <h3 className="text-lg font-bold text-white mb-2">{current.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {current.desc}
          </p>
        </div>
      </div>

      {/* Code to Art ASCII Footprint */}
      <div className="mt-6 pt-4 border-t border-white/[0.05]">
        <pre className="text-xs text-yellow-400/80 font-black tracking-widest bg-black/40 p-2 rounded border border-black">
          {current.ascii}
        </pre>
      </div>
    </div>
  );
}
