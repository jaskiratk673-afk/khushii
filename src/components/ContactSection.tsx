"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { SHOWROOM_INFO } from "@/data/cars";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Purchase Inquiry",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-semibold tracking-wider uppercase">
            <span>VIP Client Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect with Our Showroom
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            Whether inquiring about an acquisition, custom ordering a vehicle, or booking private showroom viewing hours, our advisors are at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Showroom Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-7 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Beverly Hills Flagship
              </h3>

              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Showroom Location</div>
                    <div className="text-white font-medium mt-0.5">{SHOWROOM_INFO.address}</div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline mt-1"
                    >
                      <span>Get Driving Directions</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Direct Telephone</div>
                    <a
                      href={`tel:${SHOWROOM_INFO.phone}`}
                      className="text-white font-medium hover:text-amber-400 transition-colors mt-0.5 block"
                    >
                      {SHOWROOM_INFO.phone}
                    </a>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      24/7 VIP Client Line
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Email Address</div>
                    <a
                      href={`mailto:${SHOWROOM_INFO.email}`}
                      className="text-white font-medium hover:text-amber-400 transition-colors mt-0.5 block"
                    >
                      {SHOWROOM_INFO.email}
                    </a>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Average response time: under 30 minutes
                    </div>
                  </div>
                </div>
              </div>

              {/* Showroom Hours */}
              <div className="pt-6 border-t border-neutral-800/80">
                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider mb-3">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Showroom Visiting Hours</span>
                </div>
                <div className="space-y-2 text-xs">
                  {SHOWROOM_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-neutral-800/50 last:border-0">
                      <span className="text-neutral-400">{h.days}</span>
                      <span className="text-neutral-200 font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A dedicated senior client advisor has received your request regarding{" "}
                    <span className="text-amber-400">{formData.subject}</span> and will contact you promptly at {formData.email || formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "Purchase Inquiry",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-neutral-800/80 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Our advisors provide confidential, discreet consultations
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Julian Carter"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="julian@carter.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 392-8172"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-neutral-100 focus:outline-none focus:border-amber-500 transition-colors"
                      >
                        <option value="Purchase Inquiry">Vehicle Purchase Inquiry</option>
                        <option value="VIP Test Drive">VIP Private Test Drive</option>
                        <option value="Financing & Lease">Financing & Lease Customization</option>
                        <option value="Vehicle Consignment">Consignment & Trade-In</option>
                        <option value="Service & Maintenance">Master Technician Servicing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Message or Specific Vehicle of Interest *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please let us know how we may assist you with specifications, pricing, trade-ins, or delivery schedules..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-sm text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 active:scale-98 text-neutral-950 font-bold rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? "Sending Inquiry..." : "Transmit Private Inquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
