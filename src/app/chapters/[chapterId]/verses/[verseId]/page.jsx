"use client";
import { use } from "react";
import Link from "next/link";
import nyayaData from "@/data/nyayaDb.json";

export default function VerseDeepDivePage({ params }) {
  const resolvedParams = use(params);
  const { chapterId, verseId } = resolvedParams;

  // Traverse down the database tree to find the correct nodes
  const chapter = nyayaData.find((c) => c.id === chapterId);
  const verse = chapter?.verses?.find((v) => v.id === verseId);

  if (!verse) {
    return (
      <main className="min-h-screen bg-[#050507] text-white flex items-center justify-center font-mono">
        <p className="text-red-400"> ERROR: VERSE_NODE_NOT_FOUND</p>
      </main>
    );
  }

  // Helper logic to split the IAST string into interactive categorical chips for Sūtra 1.1.1
  const categoriesList =
    verse.id === "1-1-1"
      ? verse.transliteration.split("-tattvajñānāt")[0].split("-")
      : [];

  return (
    <main className="min-h-screen bg-[#050507] text-white p-6 md:p-12 font-mono flex flex-col justify-between">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        {/* Navigation Breadcrumbs with explicit Āhnika structural separation parameters */}
        <div className="flex gap-3 text-xs text-gray-500 select-none items-center flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">
            CORE
          </Link>
          <span>/</span>
          <Link
            href={`/chapters/${chapterId}`}
            className="hover:text-white transition-colors"
          >
            CHAPTER {chapterId}
          </Link>
          <span>/</span>
          <span className="text-gray-600 bg-white/5 px-1.5 py-0.5 rounded text-[10px]">
            ĀHNIKA {verse.āhnika}
          </span>
          <span>/</span>
          <span className="text-purple-400 font-bold">
            SŪTRA {verse.sūtraNum}
          </span>
        </div>

        {/* 1. Primary Source Core Header Box */}
        <div className="space-y-4 border-l-2 border-purple-500 pl-6 py-3 bg-gradient-to-r from-purple-500/[0.02] to-transparent rounded-r-xl">
          <div className="flex items-center gap-4 text-xs font-bold select-none text-purple-400">
            <span>PLATFORM SOURCE MATRIX</span>
            <span className="text-[10px] px-1.5 py-0.5 border border-purple-500/20 bg-purple-500/5 text-purple-300 rounded uppercase tracking-widest font-mono">
              SECTION {verse.āhnika}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-sans font-bold tracking-wide text-white leading-relaxed">
            {verse.sanskrit}
          </h1>
          <p className="text-xs md:text-sm text-purple-300/80 italic tracking-wide font-sans pt-1">
            {verse.transliteration}
          </p>
        </div>

        {/* 2. Custom Category Chip Parser Engine (Only triggers for 1.1.1 matrix) */}
        {categoriesList.length > 0 && (
          <div className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.04] space-y-3">
            <span className="text-[10px] text-gray-500 font-bold tracking-widest block">
              PARSED DATA MATRIX NODES (THE 16 PADĀRTHAS)
            </span>
            <div className="flex flex-wrap gap-2">
              {categoriesList.map((category, index) => (
                <span
                  key={index}
                  className="text-[10px] px-2 py-1 rounded bg-purple-500/5 border border-purple-500/20 text-purple-300 hover:border-purple-400/50 transition-colors capitalize cursor-crosshair"
                >
                  {category
                    .replace("ā", "a")
                    .replace("ṃ", "m")
                    .replace("ṇ", "n")}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 3. Literal English Translation Box */}
        <div className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.05] space-y-2">
          <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase block">
            LITERAL ENGLISH DECODING
          </span>
          <p className="text-sm text-gray-300 font-sans leading-relaxed tracking-wide">
            {verse.english}
          </p>
        </div>

        {/* 4. High Contrast Comparative Layout Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Box A: What People Think (Misconception Node) */}
          <div className="p-6 rounded-xl bg-red-500/[0.02] border border-red-500/10 space-y-2">
            <span className="text-[10px] text-red-400 font-bold tracking-widest uppercase block">
              COMMON MISCONCEPTION
            </span>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              {verse.peopleThink}
            </p>
          </div>

          {/* Box B: Real Truth (Verification Node) */}
          <div className="p-6 rounded-xl bg-emerald-500/[0.02] border border-emerald-500/10 space-y-2">
            <span className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase block">
              LOGICAL DECONSTRUCTION (TRUTH)
            </span>
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              {verse.realTruth}
            </p>
          </div>
        </div>

        {/* 5. Commentary & Functional Code Art Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-xl bg-white/[0.01] border border-white/[0.05] space-y-4">
            <div>
              <h3 className="text-xs font-bold text-purple-400 tracking-wider mb-1">
                COGNITIVE PHILOSOPHY RUNTIME
              </h3>
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                {verse.philosophy}
              </p>
            </div>
            <div className="border-t border-white/[0.04] pt-4">
              <h3 className="text-xs font-bold text-gray-500 tracking-wider mb-1">
                HISTORICAL COMMENTARY ANALYSIS
              </h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                {verse.commentary}
              </p>
            </div>
          </div>

          {/* Graphical Concept Output Block */}
          <div className="lg:col-span-1 p-6 rounded-xl bg-black/50 border border-white/[0.05] flex flex-col justify-center items-center">
            <pre className="text-[10px] leading-tight text-center text-cyan-400/80 font-black select-none">
              {`   [ SYSTEM VERIFIED ]
            │
            ▼
   [ DELUSION REMOVED ]
            │
            ▼
   [ LOGIC OVERRIDE ]`}
            </pre>
          </div>
        </div>
      </div>

      <footer className="max-w-5xl mx-auto w-full border-t border-white/[0.05] pt-4 mt-16 text-center text-[10px] text-gray-600 select-none">
        NYAYA ENGINE ROUTER COMPILER // VERSION 2026
      </footer>
    </main>
  );
}
