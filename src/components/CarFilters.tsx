"use client";

import React from "react";
import { Search, RotateCcw, SlidersHorizontal, Check } from "lucide-react";

export interface FilterState {
  search: string;
  brand: string;
  priceRange: string;
  fuelType: string;
  transmission: string;
  bodyType: string;
}

interface CarFiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalResults: number;
  availableBrands: string[];
}

export default function CarFilters({
  filters,
  onChange,
  totalResults,
  availableBrands,
}: CarFiltersProps) {
  const handleReset = () => {
    onChange({
      search: "",
      brand: "All",
      priceRange: "All",
      fuelType: "All",
      transmission: "All",
      bodyType: "All",
    });
  };

  const hasActiveFilters =
    filters.search !== "" ||
    filters.brand !== "All" ||
    filters.priceRange !== "All" ||
    filters.fuelType !== "All" ||
    filters.transmission !== "All" ||
    filters.bodyType !== "All";

  return (
    <div className="bg-neutral-900/80 border border-neutral-800/80 rounded-2xl p-5 backdrop-blur-md shadow-xl space-y-4">
      {/* Search Input Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          placeholder="Search by model, brand, or feature (e.g. GT3, Twin-Turbo, V8)..."
          className="w-full pl-10 pr-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
        />
        {filters.search && (
          <button
            onClick={() => onChange({ ...filters, search: "" })}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
          >
            Clear
          </button>
        )}
      </div>

      {/* Filter Select Dropdowns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Brand Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
            Brand / Marque
          </label>
          <select
            value={filters.brand}
            onChange={(e) => onChange({ ...filters, brand: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-neutral-200 focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="All">All Marques</option>
            {availableBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
            Price Range
          </label>
          <select
            value={filters.priceRange}
            onChange={(e) => onChange({ ...filters, priceRange: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-neutral-200 focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="All">All Price Ranges</option>
            <option value="under-150k">Under $150,000</option>
            <option value="150k-250k">$150,000 – $250,000</option>
            <option value="above-250k">Above $250,000</option>
          </select>
        </div>

        {/* Fuel Type Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
            Fuel Type
          </label>
          <select
            value={filters.fuelType}
            onChange={(e) => onChange({ ...filters, fuelType: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-neutral-200 focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="All">All Powertrains</option>
            <option value="Petrol">Petrol / Gasoline</option>
            <option value="Electric">100% Electric</option>
            <option value="Hybrid">Plug-in Hybrid</option>
          </select>
        </div>

        {/* Transmission Filter */}
        <div>
          <label className="block text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-1.5">
            Transmission
          </label>
          <select
            value={filters.transmission}
            onChange={(e) => onChange({ ...filters, transmission: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-xs text-neutral-200 focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="All">All Transmissions</option>
            <option value="Dual-Clutch PDK">Dual-Clutch PDK</option>
            <option value="Automatic">Automatic</option>
            <option value="Single-Speed">Single-Speed Electric</option>
          </select>
        </div>
      </div>

      {/* Filter Status Bar with Reset Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-neutral-800/80 text-xs">
        <div className="flex items-center gap-2 text-neutral-400">
          <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
          <span>
            Showing <strong className="text-white">{totalResults}</strong> precision vehicles
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3 h-3 text-amber-400" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
