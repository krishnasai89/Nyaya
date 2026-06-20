"use client";
import Link from "next/link";

// Mock Data structure for the chapters matching the Nyāya Sūtras
const CHAPTERS = [
  {
    id: "1",
    title: "Chapter 1: Prathamādhyāya",
    description:
      "The Core Blueprint. Establishes the 16 Padārthas (categories of logic), the 4 Pramāṇas (valid inputs of knowledge), and initializes the legendary 5-step proof syllogism.",
    totalVerses: 41,
  },
  {
    id: "2",
    title: "Chapter 2: Dvitīyādhyāya",
    description:
      "The Testing Environment. Focuses entirely on critical cross-examination (Anuvyavasāya). Systematically processes and refutes structural doubts about perception and inference.",
    totalVerses: 68,
  },
  {
    id: "3",
    title: "Chapter 3: Tṛtīyādhyāya",
    description:
      "The Metaphysical Layer. Explores the nature of the Self (Ātman), physical body mechanics, material sense-organs, and how raw mental cognition operates within the self grid.",
    totalVerses: 73,
  },
  {
    id: "4",
    title: "Chapter 4: Caturthādhyāya",
    description:
      "The Manifestation Engine. Breaks down human activity, cosmic defects (Doṣas), psychological rebirth models, and details how right knowledge uninstalls karmic suffering to reach Liberation (Mokṣa).",
    totalVerses: 50,
  },
  {
    id: "5",
    title: "Chapter 5: Pañcamādhyāya",
    description:
      "The Dialectical Firewall. A rigorous classification system detailing the 24 types of futile refutations (Jāti) and the 22 categories of logical defeat (Nigrahasthāna) to safeguard debates from bad-faith actors.",
    totalVerses: 43,
  },
];

export default function ChaptersPage() {
  return (
    <main className="min-h-screen text-white p-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="border-b border-white/[0.05] pb-6">
          <span className="text-xs text-purple-400 font-bold">
            THE STRUCTURAL CORE
          </span>
          <h1 className="text-4xl font-black uppercase mt-1">
            Nyāya Sūtra Text Maps
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHAPTERS.map((ch) => (
            <div
              key={ch.id}
              className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.05] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
            >
              <div>
                <span className="text-xs text-gray-500 font-bold">
                  MODULE // 0{ch.id}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-purple-400 transition-colors">
                  {ch.title}
                </h3>
                <p className="text-xs text-gray-400 font-sans mt-3 leading-relaxed line-clamp-3">
                  {ch.description}
                </p>
              </div>

              {/* Functional Next.js Routing Link */}
              <div className="mt-6 pt-4 border-t border-white/[0.03] flex justify-between items-center">
                <span className="text-[10px] text-gray-500">
                  {ch.totalVerses} INDEXED NODES
                </span>
                <Link
                  href={`/chapters/${ch.id}`}
                  className="text-xs text-purple-400 font-bold hover:underline flex items-center gap-1"
                >
                  OPEN SYSTEM ──►
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
