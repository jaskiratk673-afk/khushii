"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ShieldCheck, ChevronRight, Sparkles } from "lucide-react";
import { SHOWROOM_INFO } from "@/data/cars";

interface NavbarProps {
  onOpenTestDrive?: (carId?: string) => void;
}

export default function Navbar({ onOpenTestDrive }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Cars", href: "/cars" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3.5"
          : "bg-gradient-to-b from-neutral-950/90 via-neutral-950/50 to-transparent py-5"
      }`}
    >
      {/* Top micro status bar on larger screens when not scrolled */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/5 pb-2.5 mb-2.5">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Showroom Open Today • 9:00 AM – 8:00 PM
              </span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Beverly Hills Flagship & Doorstep Delivery
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${SHOWROOM_INFO.phone}`}
                className="flex items-center gap-1.5 text-neutral-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                VIP Concierge: {SHOWROOM_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-black text-neutral-950 text-xl tracking-tighter shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            A
          </div>
          <div>
            <div className="font-extrabold tracking-wider text-lg sm:text-xl text-white flex items-center gap-1.5">
              <span>APEX</span>
              <span className="text-amber-400 font-light tracking-widest text-sm">MOTORS</span>
            </div>
            <div className="text-[9px] tracking-widest text-neutral-400 uppercase -mt-1 font-medium">
              Prestige Automobili
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1.5 rounded-full border border-neutral-800/80 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? "bg-neutral-800 text-white shadow-sm font-semibold"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onOpenTestDrive?.()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-amber-500 hover:bg-amber-400 active:scale-95 text-neutral-950 transition-all shadow-md shadow-amber-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Book a Test Drive
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-neutral-950/95 border-b border-neutral-800 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-neutral-200 hover:bg-neutral-900 hover:text-amber-400 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-neutral-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTestDrive?.();
              }}
              className="w-full py-3 rounded-xl text-center text-xs font-bold bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Book a Test Drive
            </button>
            <a
              href={`tel:${SHOWROOM_INFO.phone}`}
              className="block w-full py-2.5 rounded-xl text-center text-xs text-neutral-400 hover:text-white border border-neutral-800"
            >
              Direct Line: {SHOWROOM_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
