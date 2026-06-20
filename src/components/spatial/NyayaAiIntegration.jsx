"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AI_MAPPING_DATA = [
  {
    id: "xai",
    title: "Explainable AI (XAI) Engine",
    subtitle: "Mapping the 5-Step Proof Model",
    description:
      "Deep neural networks are often untrustworthy black boxes. By wrapping neural nodes in Nyāya's five-step syllogism, machines are forced to structurally declare their thesis, evidence, universal rule, and case application before outputting a terminal decision.",
    metric: "TRANSPARENCY: 100%",
    asciiCode: `// XAI DECONSTRUCTION LOOP
[BlackBox_Output] 
  └──► Step_1: Pratijñā (Declare Thesis)
  └──► Step_2: Hetu (Expose Raw Feature Weights)
  └──► Step_3: Udāharaṇa (Verify Ground Truth Link)
  └──► Step_4: Upanaya (Map Weights to Rule)
  └──► Step_5: Nigamana (Compute Safe Inference)`,
  },
  {
    id: "neuro-symbolic",
    title: "Neuro-Symbolic Architecture",
    subtitle: "Navya-Nyāya Cognitive Graphs",
    description:
      "Fusing statistical deep learning with symbolic reasoning. Navya-Nyāya provides a formalized semantic language that maps real-world objects and limiting conditions directly to their meaning, preventing machine hallucinations and model drifting.",
    metric: "HALLUCINATION_RISK: 0.00%",
    asciiCode: `// SEMANTIC ONTOLOGY CONSTRAINTS
const NodeRelation = {
  entity: "Neural_Vector_Space",
  limitingQualifier: "Avacchedakatā",
  counterCorrelate: "Pratiyogitā",
  strictRelation: "Samsarga"
};`,
  },
  {
    id: "knowledge-rep",
    title: "Knowledge Representation",
    subtitle: "Sensor Data Pramāṇas Validation",
    description:
      "AI architectures emulate the 4 Pramāṇas to validate raw inputs. Sensor arrays act as Perception (Pratyakṣa), predictive algorithms run as Inference (Anumāna), semantic matching executes as Comparison (Upamāna), and secure API protocols act as Testimony (Śabda).",
    metric: "DATA_INTEGRITY: SECURE",
    asciiCode: `// MULTI-MODAL DATA INGESTION
switch(sensorInput.type) {
  case RAW_VISION  : return Pratyakṣa(input);
  case PREDICTION  : return Anumāna(input);
  case VECTOR_COMP : return Upamāna(input);
  case CRYPTO_AUTH : return Śabda(input);
}`,
  },
];

export default function NyayaAiIntegration() {
  const [activeLayer, setActiveLayer] = useState("xai");
  const sectionRef = useRef(null);
  const currentData = AI_MAPPING_DATA.find((item) => item.id === activeLayer);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade-and-slide entry for sub-layout modules
      gsap.fromTo(
        ".ai-bento-grid",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-6 py-20 font-mono text-white relative"
    >
      {/* Structural Accent lines */}
      <div className="absolute top-0 right-10 w-[1px] h-full bg-white/[0.03] z-0 pointer-events-none" />

      {/* Dynamic Module Header Section */}
      <div className="mb-12 border-b border-white/[0.05] pb-6 flex flex-col lg:flex-row justify-between items-start lg:items-end z-10 relative select-none">
        <div>
          <span className="text-xs text-purple-400 font-bold tracking-widest">
            REVIVAL OF CLASSICAL LOGIC
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-1 uppercase tracking-tight">
            Nyāya & Artificial Intelligence
          </h2>
        </div>
        <p className="text-gray-500 font-medium text-xs max-w-md mt-4 lg:mt-0 font-sans leading-relaxed">
          Integrating ancient epistemic frameworks into next-generation semantic
          computing, neural logic verification, and Explainable AI (XAI) layers.
        </p>
      </div>

      {/* Main Interactive AI Dashboard Bento */}
      <div className="ai-bento-grid grid grid-cols-1 lg:grid-cols-12 gap-6 z-10 relative">
        {/* Left Side Navigation Menu (Col Span 4) */}
        <div className="lg:col-span-4 space-y-3 flex flex-col justify-start">
          <span className="text-[11px] text-gray-500 font-bold tracking-wider px-1">
            CHANNELS OF INTEGRATION
          </span>
          {AI_MAPPING_DATA.map((layer) => (
            <button
              key={layer.id}
              onClick={() => setActiveLayer(layer.id)}
              className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                activeLayer === layer.id
                  ? "bg-purple-600/[0.06] border-purple-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.15)]"
                  : "bg-white/[0.01] border-white/[0.04] text-gray-400 hover:border-white/20 hover:bg-white/[0.02]"
              }`}
            >
              <div className="flex flex-col">
                <span
                  className={`text-[10px] font-bold tracking-widest uppercase ${activeLayer === layer.id ? "text-purple-400" : "text-gray-500"}`}
                >
                  {layer.id.replace("-", " ")}
                </span>
                <span className="text-md font-bold mt-1 tracking-tight">
                  {layer.title}
                </span>
              </div>
              <span className="text-[10px] opacity-60 font-medium tracking-normal mt-4 block font-mono">
                {layer.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side Dynamic Visualization Sub-stage (Col Span 8) */}
        <div className="lg:col-span-8 p-8 rounded-2xl bg-white/[0.01] border border-white/[0.06] backdrop-blur-sm flex flex-col justify-between min-h-[420px] transition-all duration-500 hover:border-white/[0.1]">
          {/* Header metadata display row */}
          <div className="flex justify-between items-center border-b border-white/[0.04] pb-4 mb-6 select-none">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {currentData.title}
              </h3>
              <span className="text-xs text-gray-400 mt-0.5">
                {currentData.subtitle}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-black border border-purple-500/20 px-2.5 py-1 bg-purple-500/5 text-purple-400 rounded-md">
                {currentData.metric}
              </span>
            </div>
          </div>

          {/* Core Descriptive Context */}
          <div className="flex-1">
            <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-3xl">
              {currentData.description}
            </p>
          </div>

          {/* Structured Dynamic Code-To-Art Preview Box */}
          <div className="mt-8">
            <div className="flex justify-between items-center bg-black/60 px-4 py-2 border-t border-x border-white/[0.05] rounded-t-lg text-[10px] text-gray-500 select-none">
              <span>
                INTERFACE_PROTOTYPE_STREAM // {currentData.id.toUpperCase()}
                _LOGIC
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <pre className="text-[10px] md:text-[11px] leading-[15px] text-purple-300/90 bg-black/40 border border-white/[0.05] p-5 rounded-b-lg overflow-x-auto shadow-inner tracking-normal font-medium select-text">
              {currentData.asciiCode}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
