"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  BadgeDollarSign,
  ShieldCheck,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/cars";

interface ServicesSectionProps {
  onOpenTestDrive?: () => void;
}

export default function ServicesSection({ onOpenTestDrive }: ServicesSectionProps) {
  // Map icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "SteeringWheel":
        return Compass;
      case "BadgeDollarSign":
        return BadgeDollarSign;
      case "ShieldCheck":
        return ShieldCheck;
      case "Wrench":
        return Wrench;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Ownership Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            White-Glove Automotive Services
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            From the initial private track trial to bespoke lease structuring and dedicated master technician maintenance, we provide seamless lifetime support.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Perks Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-neutral-800/80">
                    {service.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Card Action */}
                <div className="mt-8 pt-4">
                  {service.id === "test-drives" ? (
                    <button
                      onClick={onOpenTestDrive}
                      className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-amber-500 hover:text-neutral-950 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Book a Test Drive</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  ) : (
                    <Link
                      href={`/#contact?service=${service.id}`}
                      className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Inquire About {service.title.split(" ")[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
