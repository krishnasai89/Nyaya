"use client";
import { use } from "react";
import Link from "next/link";
import nyayaData from "@/data/nyayaDb.json";

// Root level VerseCard to ensure global accessibility
function VerseCard({ verse, chapterId }) {
  return (
    <div className="p-5 rounded-xl bg-black/40 border border-white/[0.04] hover:border-purple-500/30 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex justify-between items-center text-[10px] mb-2 select-none">
          <span className="text-purple-400 font-bold">
            SŪTRA {verse.sūtraNum}
          </span>
          <span className="text-gray-600 font-mono">
            SEC // 0{verse.āhnika}
          </span>
        </div>
        <p className="text-md font-sans font-bold text-white mb-2 tracking-wide line-clamp-1 group-hover:text-purple-300 transition-colors">
          {verse.sanskrit}
        </p>
        <p className="text-xs text-gray-400 font-sans line-clamp-2 leading-relaxed">
          {verse.summary}
        </p>
      </div>

      <Link
        href={`/chapters/${chapterId}/verses/${verse.id}`}
        className="mt-5 text-[11px] text-cyan-400/90 font-bold hover:underline tracking-wider block"
      >
        DECODE VERSE VALUE ┌▀┐
      </Link>
    </div>
  );
}

export default function ChapterDetailView({ params }) {
  const resolvedParams = use(params);
  const { chapterId } = resolvedParams;

  // Normalizing string matching to prevent database type drops
  const chapter = nyayaData.find((c) => String(c.id) === String(chapterId));

  if (!chapter) {
    return (
      <main className="min-h-screen bg-[#050507] text-white flex flex-col items-center justify-center font-mono space-y-4">
        <p className="text-red-400"> ERROR: INVALID_CHAPTER_NODE</p>
        <p className="text-xs text-gray-500">
          Attempted to load ID parameter: "{chapterId}"
        </p>
        <Link href="/" className="text-xs text-purple-400 underline">
          Return Home
        </Link>
      </main>
    );
  }

  // Double-equal (==) comparison fallback to catch both string or integer types inside your json file safely
  const ahnika1Verses =
    chapter.verses?.filter((v) => String(v.āhnika) == "1") || [];
  const ahnika2Verses =
    chapter.verses?.filter((v) => String(v.āhnika) == "2") || [];

  return (
    <main className="min-h-screen bg-[#050507] text-white p-6 md:p-12 font-mono">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          ◄── RETURN TO PLATFORM ENGINE
        </Link>

        {/* Dynamic Chapter Identity Module */}
        <div className="p-8 rounded-2xl bg-white/[0.01] border border-white/[0.05] space-y-4">
          <span className="text-xs text-purple-400 font-bold">
            INSTANCE RUNTIME: {chapter.title.toUpperCase()}
          </span>
          <h1 className="text-3xl font-black tracking-tight">
            Comprehensive Epistemological Summary
          </h1>
          <p className="text-sm text-gray-400 font-sans leading-relaxed">
            {chapter.description}
          </p>
        </div>

        {/* 🛠️ LIVE STREAM RUNTIME SYSTEM LOGS (Debug Dashboard) */}
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-[11px] text-purple-300 space-y-1">
          <span className="font-bold block text-purple-400 text-xs mb-1">
            SYSTEM DATA TELEMETRY LOGS
          </span>
          <div>
            • Total raw items mapped inside this chapter's verses array:{" "}
            <span className="text-white font-bold">
              {chapter.verses?.length || 0}
            </span>
          </div>
          <div>
            • Evaluated Āhnika 1 items matching filter matrix:{" "}
            <span className="text-white font-bold">{ahnika1Verses.length}</span>
          </div>
          <div>
            • Evaluated Āhnika 2 items matching filter matrix:{" "}
            <span className="text-white font-bold">{ahnika2Verses.length}</span>
          </div>
        </div>

        {/* Dynamic Conditional Rendering Block */}
        {!chapter.verses || chapter.verses.length === 0 ? (
          <div className="p-8 rounded-xl bg-yellow-500/5 border border-yellow-500/10 text-xs text-yellow-400 tracking-wide text-center">
            [▲] COMPILER STATUS: NO VERSES REGISTERED INSIDE THE TARGET DATA
            OBJECT LAYER
          </div>
        ) : (
          <div className="space-y-12">
            {/* ĀHNIKA 1 RENDER BLOCK */}
            {ahnika1Verses.length > 0 && (
              <div className="space-y-4">
                <div className="border-b border-white/[0.05] pb-2 flex justify-between items-end">
                  <h2 className="text-sm font-bold text-purple-400 tracking-wider">
                    ĀHNIKA 1 : CORE METRICS & DEFINITIONS
                  </h2>
                  <span className="text-[10px] text-gray-500 font-bold">
                    {ahnika1Verses.length} REVERSED
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ahnika1Verses.map((v) => (
                    <VerseCard key={v.id} verse={v} chapterId={chapterId} />
                  ))}
                </div>
              </div>
            )}

            {/* ĀHNIKA 2 RENDER BLOCK */}
            {ahnika2Verses.length > 0 && (
              <div className="space-y-4">
                <div className="border-b border-white/[0.05] pb-2 flex justify-between items-end">
                  <h2 className="text-sm font-bold text-cyan-400 tracking-wider">
                    ĀHNIKA 2 : DIALECTICAL CRITERIA & ARGUMENT CODES
                  </h2>
                  <span className="text-[10px] text-gray-500 font-bold">
                    {ahnika2Verses.length} REVERSED
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {ahnika2Verses.map((v) => (
                    <VerseCard key={v.id} verse={v} chapterId={chapterId} />
                  ))}
                </div>
              </div>
            )}

            {/* CATCH-ALL FOR MISSING MAPPING ATTRIBUTES */}
            {ahnika1Verses.length === 0 && ahnika2Verses.length === 0 && (
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/10 text-xs text-red-400">
                [!] DATA INTEGRITY EXCEPTION: Items are registered inside the
                source file, but they lack a compatible "āhnika" integer
                variable property configuration to pass the data split metrics.
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
