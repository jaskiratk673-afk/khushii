"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/cars";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span>Client Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Connoisseurs Worldwide
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Read authentic reviews from automotive collectors, private individuals, and luxury car enthusiasts who acquired their vehicles through Apex Motors.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-neutral-600 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-neutral-300 text-sm font-light leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author & Vehicle Acquired */}
              <div className="pt-5 border-t border-neutral-800/80 flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800 flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-neutral-400">
                    {t.role} • {t.location}
                  </div>
                  <div className="text-[11px] text-amber-400/90 font-medium mt-0.5">
                    Acquired: {t.carPurchased}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
