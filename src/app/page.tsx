"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import CarFilters, { FilterState } from "@/components/CarFilters";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TestDriveModal from "@/components/TestDriveModal";
import { CARS_DATA } from "@/data/cars";
import { ArrowRight, Sparkles, SlidersHorizontal } from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Filters state
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    brand: "All",
    priceRange: "All",
    fuelType: "All",
    transmission: "All",
    bodyType: "All",
  });

  const availableBrands = useMemo(() => {
    return Array.from(new Set(CARS_DATA.map((c) => c.brand)));
  }, []);

  const handleOpenTestDrive = (carId?: string) => {
    setSelectedCarId(carId);
    setModalOpen(true);
  };

  const handleCloseTestDrive = () => {
    setModalOpen(false);
  };

  // Filtered cars
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Search
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesName = car.name.toLowerCase().includes(query);
        const matchesBrand = car.brand.toLowerCase().includes(query);
        const matchesDesc = car.description.toLowerCase().includes(query);
        const matchesEngine = car.engine.toLowerCase().includes(query);
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesEngine) {
          return false;
        }
      }

      // Brand
      if (filters.brand !== "All" && car.brand !== filters.brand) {
        return false;
      }

      // Fuel
      if (filters.fuelType !== "All" && car.fuelType !== filters.fuelType) {
        return false;
      }

      // Transmission
      if (
        filters.transmission !== "All" &&
        car.transmission !== filters.transmission
      ) {
        return false;
      }

      // Price
      if (filters.priceRange === "under-150k" && car.price >= 150000) {
        return false;
      }
      if (
        filters.priceRange === "150k-250k" &&
        (car.price < 150000 || car.price > 250000)
      ) {
        return false;
      }
      if (filters.priceRange === "above-250k" && car.price <= 250000) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      {/* Navigation */}
      <Navbar onOpenTestDrive={() => handleOpenTestDrive()} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onOpenTestDrive={() => handleOpenTestDrive("porsche-911-gt3-rs")} />

        {/* Cars Showcase Section */}
        <section id="cars" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Fleet</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Featured Automobiles
                </h2>
                <p className="text-neutral-400 text-sm max-w-xl font-light">
                  Handpicked selection of premier sports cars, luxury grand tourers, and exotic electric flagships.
                </p>
              </div>

              {/* Toggle Filters Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                    showAdvancedFilters
                      ? "bg-amber-500 text-neutral-950 border-amber-500 shadow-md shadow-amber-500/20"
                      : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700"
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>
                    {showAdvancedFilters ? "Hide Filters" : "Filter Inventory"}
                  </span>
                </button>

                <Link
                  href="/cars"
                  className="px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>All Cars</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Brand Quick-Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
              <button
                onClick={() => setFilters({ ...filters, brand: "All" })}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  filters.brand === "All"
                    ? "bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20"
                    : "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                }`}
              >
                All Marques ({CARS_DATA.length})
              </button>
              {availableBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setFilters({ ...filters, brand })}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    filters.brand === brand
                      ? "bg-amber-500 text-neutral-950 shadow-md shadow-amber-500/20"
                      : "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {/* Filter Control Box (collapsible / toggleable) */}
            {showAdvancedFilters && (
              <div className="mb-10 animate-fadeIn">
                <CarFilters
                  filters={filters}
                  onChange={setFilters}
                  totalResults={filteredCars.length}
                  availableBrands={availableBrands}
                />
              </div>
            )}

            {/* Car Cards Grid */}
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredCars.slice(0, 6).map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onBookTestDrive={(id) => handleOpenTestDrive(id)}
                  />
                ))}
              </div>
            ) : (
              <div className="py-16 text-center rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 text-amber-400 flex items-center justify-center mx-auto text-lg">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-white">
                  No vehicles match your active criteria
                </h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Try adjusting the fuel type, transmission, or price range filters to view our available stock.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      search: "",
                      brand: "All",
                      priceRange: "All",
                      fuelType: "All",
                      transmission: "All",
                      bodyType: "All",
                    })
                  }
                  className="px-4 py-2 rounded-xl bg-amber-500 text-neutral-950 text-xs font-bold"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* View Full Collection Button */}
            <div className="mt-14 text-center">
              <Link
                href="/cars"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-amber-500/50 text-white text-xs font-bold transition-all shadow-lg hover:shadow-amber-500/10 group"
              >
                <span>Browse Complete Showroom Inventory ({CARS_DATA.length} Vehicles)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection onOpenTestDrive={() => handleOpenTestDrive()} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* VIP Test Drive Booking Modal */}
      <TestDriveModal
        isOpen={modalOpen}
        onClose={handleCloseTestDrive}
        selectedCarId={selectedCarId}
      />
    </div>
  );
}
