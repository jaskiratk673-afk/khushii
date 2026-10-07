"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Shield, Gauge, Fuel, Zap } from "lucide-react";
import { SHOWROOM_STATS } from "@/data/cars";

interface HeroProps {
  onOpenTestDrive?: () => void;
}

export default function Hero({ onOpenTestDrive }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden hero-glow">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full"></div>
      <div className="absolute -top-10 left-10 w-96 h-96 bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* VIP Label Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Beverly Hills Luxury Showroom</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Find Your <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-amber-400">
                Perfect Drive
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Explore an extraordinary curation of exotic supercars, high-performance coupes, and luxury electric automobiles. Each hand-inspected to immaculate standards and ready for immediate delivery.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/cars"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Explore Cars</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={onOpenTestDrive}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800/90 active:scale-95 text-white border border-neutral-700/80 font-medium text-sm tracking-wide transition-all hover:border-neutral-500 flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book a Test Drive</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 border-t border-neutral-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {SHOWROOM_STATS.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Luxury Showcase Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container with Glass Aesthetic */}
              <div className="relative rounded-3xl overflow-hidden border border-neutral-800/80 bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 p-4 sm:p-5 shadow-2xl group">
                {/* Image Wrapper */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-neutral-950">
                  <Image
                    src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"
                    alt="Porsche 911 GT3 RS Luxury Car"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/20" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider">
                      Featured Showcase
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-neutral-950/80 backdrop-blur-md text-neutral-200 border border-white/10">
                      2024 Model
                    </span>
                  </div>

                  {/* Speed Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-950/80 backdrop-blur-md text-amber-400 border border-white/10 flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-amber-400" />
                    0-60 in 3.0s
                  </div>

                  {/* Bottom Vehicle Title Inside Image */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">
                      Porsche
                    </div>
                    <div className="text-lg font-bold text-white tracking-tight flex items-center justify-between">
                      <span>911 GT3 RS Weissach</span>
                      <span className="text-amber-400 font-extrabold text-base">$241,300</span>
                    </div>
                  </div>
                </div>

                {/* Micro Spec Pills */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 text-[10px] uppercase font-semibold flex items-center justify-center gap-1">
                      <Gauge className="w-3 h-3 text-amber-400" /> Power
                    </div>
                    <div className="text-white font-bold text-xs mt-0.5">518 HP</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 text-[10px] uppercase font-semibold flex items-center justify-center gap-1">
                      <Fuel className="w-3 h-3 text-amber-400" /> Fuel
                    </div>
                    <div className="text-white font-bold text-xs mt-0.5">4.0L Boxer-6</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-neutral-950/80 border border-neutral-800">
                    <div className="text-neutral-400 text-[10px] uppercase font-semibold flex items-center justify-center gap-1">
                      <Shield className="w-3 h-3 text-amber-400" /> Warranty
                    </div>
                    <div className="text-white font-bold text-xs mt-0.5">Certified 4-Yr</div>
                  </div>
                </div>

                {/* Quick Interactive Button */}
                <div className="mt-4">
                  <Link
                    href="/cars/porsche-911-gt3-rs"
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Specifications & Gallery</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Decorative Floating Mini-Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 px-4 py-2.5 rounded-2xl bg-neutral-900/95 border border-neutral-800 backdrop-blur-xl shadow-2xl items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">White-Glove Delivery</div>
                  <div className="text-[10px] text-neutral-400">Available Nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
