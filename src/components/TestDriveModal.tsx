"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle2, Car as CarIcon, Sparkles } from "lucide-react";
import { CARS_DATA, Car } from "@/data/cars";

interface TestDriveModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCarId?: string;
}

export default function TestDriveModal({
  isOpen,
  onClose,
  selectedCarId,
}: TestDriveModalProps) {
  const [carId, setCarId] = useState<string>(selectedCarId || CARS_DATA[0].id);
  const [driveLocation, setDriveLocation] = useState<"showroom" | "residence">("showroom");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "11:00 AM",
    licenseConfirmed: false,
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update car if selectedCarId changes
  React.useEffect(() => {
    if (selectedCarId) {
      setCarId(selectedCarId);
    }
  }, [selectedCarId]);

  if (!isOpen) return null;

  const currentCar = CARS_DATA.find((c) => c.id === carId) || CARS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <CarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                VIP Private Test Drive
              </h3>
              <p className="text-xs text-neutral-400">
                Experience unparalleled automotive performance
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Reservation Confirmed
                </h4>
                <p className="text-neutral-400 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you, <span className="text-white font-medium">{formData.name || "valued client"}</span>. 
                  Your VIP test drive for the <strong className="text-amber-400">{currentCar.brand} {currentCar.name}</strong> has been secured for{" "}
                  <span className="text-white">{formData.date || "your selected date"} at {formData.timeSlot}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-neutral-400">
                  <span>VIP Reservation Ref:</span>
                  <span className="font-mono text-amber-400 font-semibold">APX-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Location:</span>
                  <span className="text-neutral-200 capitalize">{driveLocation === "showroom" ? "Beverly Hills Flagship" : "Private Residence Delivery"}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Concierge Specialist:</span>
                  <span className="text-neutral-200">Julian Vance (Senior Advisor)</span>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                A verification SMS and digital confirmation have been dispatched to {formData.phone || "your phone"}.
              </p>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                Close & Return to Showroom
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Vehicle Preview Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Select Vehicle
                </label>
                <select
                  value={carId}
                  onChange={(e) => setCarId(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                >
                  {CARS_DATA.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.brand} {c.name} ({c.year}) - {c.priceFormatted}
                    </option>
                  ))}
                </select>

                <div className="mt-3 p-3 rounded-xl bg-neutral-950/60 border border-neutral-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>{currentCar.power} • {currentCar.acceleration} • {currentCar.engine}</span>
                  </div>
                  <span className="text-amber-400 font-bold">{currentCar.priceFormatted}</span>
                </div>
              </div>

              {/* Experience Location Radio */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Experience Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDriveLocation("showroom")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      driveLocation === "showroom"
                        ? "bg-amber-500/10 border-amber-500/60 text-white"
                        : "bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <div className="font-semibold text-xs flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Showroom VIP Suite
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Private dynamic road circuit in Beverly Hills
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDriveLocation("residence")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      driveLocation === "residence"
                        ? "bg-amber-500/10 border-amber-500/60 text-white"
                        : "bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                    }`}
                  >
                    <div className="font-semibold text-xs flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      White-Glove Delivery
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      Vehicle brought to your private residence or office
                    </div>
                  </button>
                </div>
              </div>

              {/* Schedule Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" /> Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" /> Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Air)</option>
                    <option value="12:00 PM">12:00 PM (Midday)</option>
                    <option value="02:30 PM">02:30 PM (Afternoon)</option>
                    <option value="05:00 PM">05:00 PM (Sunset Cruise)</option>
                  </select>
                </div>
              </div>

              {/* Driver Contact Info */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Full Legal Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Richard Hendricks"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500 placeholder:text-neutral-600"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="richard@apex.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500 placeholder:text-neutral-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Direct Mobile Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500 placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Special Inquiries or Route Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specify highway preferences, track mode questions, or trade-in appraisal interest..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-100 text-sm focus:outline-none focus:border-amber-500 placeholder:text-neutral-600 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Driver License Agreement */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="license"
                  required
                  checked={formData.licenseConfirmed}
                  onChange={(e) =>
                    setFormData({ ...formData, licenseConfirmed: e.target.checked })
                  }
                  className="mt-1 rounded border-neutral-700 bg-neutral-950 text-amber-500 focus:ring-0"
                />
                <label htmlFor="license" className="text-xs text-neutral-400">
                  I hold a valid, unencumbered driver’s license and am at least 21 years old. I agree to receive a brief concierge phone confirmation prior to vehicle staging.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-neutral-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/25 disabled:opacity-50"
                >
                  {submitting ? "Reserving Vehicle..." : "Confirm VIP Test Drive Reservation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
