"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { Car } from "@/data/cars";

interface CarCardProps {
  car: Car;
  onBookTestDrive?: (carId: string) => void;
}

export default function CarCard({ car, onBookTestDrive }: CarCardProps) {
  const [imageError, setImageError] = useState(false);

  // Fallback high quality automotive image if any network failure occurs
  const fallbackImg =
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full">
      {/* Image Container with Badges */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-neutral-900">
        <Image
          src={imageError ? fallbackImg : car.image}
          alt={`${car.brand} ${car.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-950/80 backdrop-blur-md text-neutral-200 border border-white/10">
            {car.bodyType}
          </span>

          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-md border ${
              car.status === "Available"
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : car.status === "Reserved"
                ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                : "bg-purple-500/20 text-purple-400 border-purple-500/30"
            }`}
          >
            {car.status}
          </span>
        </div>

        {/* Fuel & Accel Micro Tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-900/90 text-neutral-300 backdrop-blur-sm border border-neutral-800">
            {car.acceleration}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neutral-900/90 text-neutral-300 backdrop-blur-sm border border-neutral-800">
            {car.power}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Brand & Model */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400/90">
              {car.brand}
            </span>
            <span className="text-xs text-neutral-400 font-mono">
              {car.year}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white tracking-tight mt-0.5 group-hover:text-amber-300 transition-colors line-clamp-1">
            {car.name}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-2 mt-1.5 leading-relaxed font-light">
            {car.description}
          </p>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 gap-2 mt-3.5 pt-3.5 border-t border-neutral-800/80 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
              <span className="truncate">{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-neutral-500 flex-shrink-0" />
              <span className="truncate">{car.transmission}</span>
            </div>
          </div>
        </div>

        {/* Price & Action Button Footer */}
        <div className="pt-3 border-t border-neutral-800/80 space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                Price
              </div>
              <div className="text-xl font-black text-white tracking-tight">
                {car.priceFormatted}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-neutral-500">Est. Lease</div>
              <div className="text-xs font-semibold text-neutral-300">
                {car.monthlyEstimate}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/cars/${car.id}`}
              className="py-2.5 px-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-98 text-white text-xs font-semibold text-center transition-all flex items-center justify-center gap-1 group/btn"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>

            <button
              onClick={() => onBookTestDrive?.(car.id)}
              className="py-2.5 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-neutral-950 border border-amber-500/30 hover:border-amber-500 active:scale-98 text-xs font-semibold transition-all flex items-center justify-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Test Drive</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
