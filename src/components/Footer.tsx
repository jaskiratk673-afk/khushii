"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SHOWROOM_INFO } from "@/data/cars";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-neutral-950 text-lg tracking-tighter">
                A
              </div>
              <div className="font-extrabold tracking-wider text-lg text-white">
                <span>APEX</span>
                <span className="text-amber-400 font-light tracking-widest text-xs ml-1">
                  MOTORS
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              The premier destination for exotic, performance, and ultra-luxury automobiles. Curated with obsessive standards and delivered with private white-glove hospitality.
            </p>

            <div className="flex items-center gap-2 text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-[11px]">Licensed California Exotic Auto Dealer #48921</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cars" className="hover:text-amber-400 transition-colors">
                  Car Inventory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Showroom
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  VIP Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Marque Inventory */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">
              Marques
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cars?brand=Porsche" className="hover:text-amber-400 transition-colors">
                  Porsche
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=Ferrari" className="hover:text-amber-400 transition-colors">
                  Ferrari
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=BMW" className="hover:text-amber-400 transition-colors">
                  BMW M Power
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=Mercedes-Benz" className="hover:text-amber-400 transition-colors">
                  Mercedes-AMG
                </Link>
              </li>
              <li>
                <Link href="/cars?brand=Aston Martin" className="hover:text-amber-400 transition-colors">
                  Aston Martin
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Private Allocations */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Private Allocation Alerts</span>
            </h4>
            <p className="text-neutral-400 text-xs leading-relaxed">
              Receive confidential off-market vehicle arrivals and limited supercar allocations directly to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Thank you. You have been added to our private dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Join
                </button>
              </form>
            )}

            <div className="text-[11px] text-neutral-500 pt-1">
              Direct Concierge: {SHOWROOM_INFO.phone}
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Apex Motors. All rights reserved. Precision craftsmanship.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer">Dealer Disclosures</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
