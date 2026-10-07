"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestDriveModal from "@/components/TestDriveModal";
import CarCard from "@/components/CarCard";
import { CARS_DATA, Car } from "@/data/cars";
import {
  ChevronRight,
  Sparkles,
  Gauge,
  Zap,
  Fuel,
  ShieldCheck,
  Calendar,
  Layers,
  Compass,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Phone,
  Share2,
  Heart,
} from "lucide-react";

export default function CarDetailPage() {
  const params = useParams();
  const carId = params?.id as string;

  const car = CARS_DATA.find((c) => c.id === carId);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Simple dynamic financing calculator state
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [loanTermMonths, setLoanTermMonths] = useState<number>(48);

  if (!car) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-40 px-4 space-y-4">
          <h1 className="text-3xl font-bold">Vehicle Not Found</h1>
          <p className="text-neutral-400 text-sm">
            The requested automobile could not be located in our current inventory.
          </p>
          <Link
            href="/cars"
            className="inline-block px-6 py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs"
          >
            Return to Fleet Inventory
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Gallery array
  const gallery = car.gallery && car.gallery.length > 0 ? car.gallery : [car.image];
  const activeImage = gallery[activeImageIndex] || car.image;

  // Financing calculation
  const downPaymentAmount = (car.price * downPaymentPercent) / 100;
  const loanPrincipal = car.price - downPaymentAmount;
  const annualInterestRate = 0.049; // 4.9% APR
  const monthlyRate = annualInterestRate / 12;
  const calculatedMonthly = Math.round(
    (loanPrincipal *
      (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
      (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
  );

  // Similar vehicles (same bodyType or brand, excluding current)
  const similarCars = CARS_DATA.filter((c) => c.id !== car.id).slice(0, 3);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      <Navbar onOpenTestDrive={() => setModalOpen(true)} />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs & Utility Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <nav className="flex items-center gap-2 text-xs text-neutral-400">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/cars" className="hover:text-white transition-colors">
                Cars
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-neutral-400">{car.brand}</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-amber-400 font-semibold truncate max-w-[200px]">
                {car.name}
              </span>
            </nav>

            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? "Link Copied!" : "Share Vehicle"}</span>
              </button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-1.5 rounded-lg border transition-colors ${
                  isSaved
                    ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                    : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
                }`}
                aria-label="Save to favorites"
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-rose-400" : ""}`} />
              </button>
            </div>
          </div>

          {/* Vehicle Title & Pricing Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-neutral-800/80 pb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  {car.brand}
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Model Year {car.year}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  {car.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {car.name}
              </h1>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Colorway: <span className="text-neutral-200">{car.exteriorColor}</span> • Interior: <span className="text-neutral-200">{car.interiorColor}</span>
              </p>
            </div>

            {/* Price Box */}
            <div className="flex flex-col sm:items-end bg-neutral-900/60 border border-neutral-800/80 p-4 sm:p-5 rounded-2xl">
              <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                Showroom Vehicle Price
              </div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {car.priceFormatted}
              </div>
              <div className="text-xs text-amber-400/90 font-medium mt-1">
                Est. Lease from {car.monthlyEstimate}
              </div>
            </div>
          </div>

          {/* Top Gallery & Quick Action Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Gallery Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Showcase Image */}
              <div className="relative h-[340px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
                <Image
                  src={activeImage}
                  alt={`${car.brand} ${car.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-950/80 backdrop-blur-md text-white border border-white/10">
                    High-Definition Showroom Gallery
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {gallery.map((imgUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-amber-400 scale-[1.02] shadow-md shadow-amber-500/20"
                          : "border-neutral-800 hover:border-neutral-700 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={imgUrl}
                        alt={`Gallery view ${idx + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky Action & Highlights Box (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Experience This Vehicle
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    Private viewing and tailored track route available at our Beverly Hills facility or arranged directly at your residence.
                  </p>
                </div>

                {/* Primary CTA */}
                <div className="space-y-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-98 text-neutral-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Book a Test Drive</span>
                  </button>

                  <Link
                    href="/#contact"
                    className="w-full py-3.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs tracking-wide transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Inquire with Senior Specialist</span>
                  </Link>
                </div>

                {/* Quick Showroom Guarantees */}
                <div className="pt-4 border-t border-neutral-800 space-y-3 text-xs text-neutral-300">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>150-Point Certified Provenance Inspection Verified</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Clean Carfax Title Guarantee & Full Provenance File</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Compass className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Complimentary Nationwide Enclosed Transporter Delivery</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Financing Estimator Widget */}
              <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                    <Calculator className="w-4 h-4 text-amber-400" />
                    <span>Financing Estimator</span>
                  </div>
                  <span className="text-[11px] text-neutral-500">4.9% APR Est.</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>Down Payment ({downPaymentPercent}%):</span>
                      <span className="text-white font-mono font-semibold">
                        ${Math.round(downPaymentAmount).toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={5}
                      value={downPaymentPercent}
                      onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-neutral-400 mb-1">
                      <span>Loan Horizon:</span>
                      <span className="text-white font-medium">{loanTermMonths} Months</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[24, 36, 48, 60].map((term) => (
                        <button
                          key={term}
                          onClick={() => setLoanTermMonths(term)}
                          className={`py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            loanTermMonths === term
                              ? "bg-amber-500 text-neutral-950 font-bold"
                              : "bg-neutral-800 text-neutral-300 hover:text-white"
                          }`}
                        >
                          {term}m
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                    <span className="text-neutral-400">Estimated Monthly:</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">
                      ${calculatedMonthly.toLocaleString()}/mo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Specifications & Features Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Left 7 cols: Specifications Table */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Gauge className="w-5 h-5 text-amber-400" />
                <span>Technical Specifications</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Powertrain Engine</span>
                  <span className="text-white font-semibold text-right max-w-[55%] truncate">
                    {car.engine}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Horsepower Output</span>
                  <span className="text-amber-400 font-bold">{car.power}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Peak Torque</span>
                  <span className="text-white font-semibold">{car.torque}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Acceleration (0-60 mph)</span>
                  <span className="text-amber-400 font-bold">{car.acceleration}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Top Track Speed</span>
                  <span className="text-white font-semibold">{car.topSpeed}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Transmission</span>
                  <span className="text-white font-semibold">{car.transmission}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Drivetrain</span>
                  <span className="text-white font-semibold">{car.drivetrain}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Fuel & Energy</span>
                  <span className="text-white font-semibold">{car.fuelType}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Odometer Mileage</span>
                  <span className="text-white font-semibold">{car.mileage}</span>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex justify-between items-center">
                  <span className="text-neutral-400">Body Configuration</span>
                  <span className="text-white font-semibold">{car.bodyType}</span>
                </div>
              </div>

              {/* Vehicle Description Paragraph */}
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
                <h3 className="text-base font-bold text-white">
                  Vehicle Curatorial Overview
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                  {car.description}
                </p>
              </div>
            </div>

            {/* Right 5 cols: Key Features List */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Factory Features & Options</span>
              </h2>

              <div className="bg-neutral-900/60 border border-neutral-800/80 rounded-2xl p-6 space-y-3">
                {car.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/60 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Similar Vehicles Grid */}
          <div className="pt-12 border-t border-neutral-800/80 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Similar Automobiles
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Other hand-curated models currently in our Beverly Hills gallery
                </p>
              </div>
              <Link
                href="/cars"
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCars.map((simCar) => (
                <CarCard
                  key={simCar.id}
                  car={simCar}
                  onBookTestDrive={() => {
                    setModalOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCarId={car.id}
      />
    </div>
  );
}
