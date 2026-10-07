"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Users, Compass, CheckCircle2 } from "lucide-react";
import { SHOWROOM_STATS } from "@/data/cars";

export default function AboutSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "150-Point Provenance Verification",
      description:
        "Every supercar and luxury automobile undergoes exhaustive structural, telemetry, and forensic mechanical inspection before showroom staging.",
    },
    {
      icon: Award,
      title: "Bespoke Acquisition & Sourcing",
      description:
        "Looking for an ultra-rare allocation, Paint-to-Sample specification, or numbered collector edition? Our private acquisition desk sources globally.",
    },
    {
      icon: Users,
      title: "White-Glove VIP Concierge",
      description:
        "From discreet home trials to nationwide climate-controlled enclosed carrier transit, our client experience mirrors the world's premier luxury houses.",
    },
    {
      icon: Compass,
      title: "Transparent Provenance",
      description:
        "Complete factory service logbooks, paint meter depth readings, clean title histories, and unencumbered provenance certificates provided upfront.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-neutral-950">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 group">
              <div className="relative h-[420px] sm:h-[480px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80"
                  alt="Apex Motors Beverly Hills Showroom Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              </div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg">
                    18+
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Eighteen Years of Curated Excellence
                    </h4>
                    <p className="text-xs text-neutral-400">
                      Private automotive galleries in Beverly Hills & Newport Beach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase">
              <span>About Apex Motors</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              A Private Sanctuary for the World’s Discerning Drivers
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Founded in 2008, Apex Motors was conceived to bridge the gap between pure motorsport exhilaration and elevated private client service. We bypass conventional dealership friction, creating an unhurried atmosphere where vehicle collectors and performance connoisseurs select their next dream machine.
            </p>

            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Every car on our showroom floor is hand-curated by certified master technicians, detailed using ceramic protection systems, and delivered with immaculate title guarantees.
            </p>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-amber-400 mb-2" />
                    <h4 className="text-xs font-bold text-white mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
