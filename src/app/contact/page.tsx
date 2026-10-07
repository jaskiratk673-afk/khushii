"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import TestDriveModal from "@/components/TestDriveModal";
import { ChevronRight, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100">
      <Navbar onOpenTestDrive={() => setModalOpen(true)} />

      <main className="flex-1 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-amber-400 font-medium">Contact & Location</span>
          </nav>
        </div>

        <ContactSection />
      </main>

      <Footer />

      <TestDriveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
