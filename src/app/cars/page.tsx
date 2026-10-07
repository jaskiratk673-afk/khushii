"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import CarFilters, { FilterState } from "@/components/CarFilters";
import TestDriveModal from "@/components/TestDriveModal";
import { CARS_DATA } from "@/data/cars";
import { Sparkles, ArrowUpDown, ChevronRight } from "lucide-react";

export default function CarsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState<string | undefined>(undefined);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "year-desc">(
    "featured"
  );

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

  // Filter and sort cars
  const filteredAndSortedCars = useMemo(() => {
    let result = CARS_DATA.filter((car) => {
      // Search query
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

      // Brand filter
      if (filters.brand !== "All" && car.brand !== filters.brand) {
        return false;
      }

      // Fuel filter
      if (filters.fuelType !== "All" && car.fuelType !== filters.fuelType) {
        return false;
      }

      // Transmission filter
      if (
        filters.transmission !== "All" &&
        car.transmission !== filters.transmission
      ) {
        return false;
      }

      // Price filter
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

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "year-desc") return b.year - a.year;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });

    return result;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      <Navbar onOpenTestDrive={() => handleOpenTestDrive()} />

      <main className="flex-1 pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-400 font-medium">Car Inventory</span>
          </nav>

          {/* Page Title & Stats */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-neutral-800/80 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Showroom Inventory</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Luxury & Performance Vehicles
              </h1>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1 max-w-xl font-light">
                Discover your next automotive masterpiece. Each vehicle is prepared to showroom standards with comprehensive warranty and provenance.
              </p>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-2 rounded-xl text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-neutral-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "featured" | "price-asc" | "price-desc" | "year-desc"
                  )
                }
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-neutral-900">
                  Featured First
                </option>
                <option value="price-asc" className="bg-neutral-900">
                  Price: Low to High
                </option>
                <option value="price-desc" className="bg-neutral-900">
                  Price: High to Low
                </option>
                <option value="year-desc" className="bg-neutral-900">
                  Year: Newest
                </option>
              </select>
            </div>
          </div>

          {/* Filtering Section */}
          <div className="mb-10">
            <CarFilters
              filters={filters}
              onChange={setFilters}
              totalResults={filteredAndSortedCars.length}
              availableBrands={availableBrands}
            />
          </div>

          {/* Car Grid */}
          {filteredAndSortedCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredAndSortedCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onBookTestDrive={(id) => handleOpenTestDrive(id)}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-neutral-800 text-amber-400 flex items-center justify-center mx-auto text-xl">
                🏎️
              </div>
              <h3 className="text-xl font-bold text-white">
                No matching vehicles found
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                No automobiles currently match your specific filter criteria. You may reset filters or request a bespoke vehicle acquisition through our concierge.
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
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-neutral-950 text-xs font-bold shadow-lg shadow-amber-500/20"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCarId={selectedCarId}
      />
    </div>
  );
}
