"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      {/* Floating WhatsApp — desktop visible, mobile hidden */}
      <a
        href="https://wa.me/358401851127"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="fixed bottom-28 right-6 z-50 hidden md:flex items-center gap-3 bg-forest border border-gold/40 text-champagne-light px-5 py-3 rounded-full text-xs tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl hover:border-gold transition-all duration-300 group backdrop-blur-md"
      >
        <span className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
          <img src="/logo.svg" alt="" className="w-3.5 h-3.5" />
        </span>
        <span>{t.contact.whatsappValue}</span>
      </a>

      {/* Mobile floating circular button */}
      <a
        href="https://wa.me/358401851127"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-forest border-2 border-gold/40 rounded-full shadow-2xl text-gold hover:scale-110 hover:border-gold transition-all duration-300 animate-pulse-subtle"
        aria-label="WhatsApp"
      >
        <img src="/logo.svg" alt="" className="w-6 h-6" />
      </a>
    </>
  );
}
