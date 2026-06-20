// src/app/page.js
"use client";
import ChaptersPage from "@/components/spatial/ChaptersPage";
import NyayaAiIntegration from "@/components/spatial/NyayaAiIntegration";
import NyayaHero from "@/components/spatial/NyayaHero";
import NyayaModernFuture from "@/components/spatial/NyayaModernFuture";
import PramanasModule from "@/components/spatial/PramanasModule";
import SyllogismSequence from "@/components/spatial/SyllogismSequence";
import UpgradeMap from "@/components/spatial/UpgradeMap";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-x-hidden p-6 md:p-12">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141416_1px,transparent_1px),linear-gradient(to_bottom,#141416_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <NyayaHero />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 lg:sticky lg:top-12">
            <PramanasModule />
          </div>
          <div className="lg:col-span-2">
            <SyllogismSequence />
          </div>
        </div>
        <UpgradeMap />
        <NyayaAiIntegration />
        <NyayaModernFuture />
        <ChaptersPage />
      </div>
    </main>
  );
}
