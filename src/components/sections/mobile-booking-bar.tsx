"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

const whatsappUrl = "https://wa.me/358401851127";
const phoneNumber = "+358401851127";

export default function MobileBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-2xl border-t border-champagne/30 px-4 py-3 pb-6 flex items-center justify-between gap-2 shadow-2xl"
    >
      <a
        href={whatsappUrl}
        className="flex-1 text-center py-2.5 px-2 bg-forest text-champagne text-[11px] font-medium tracking-[0.2em] uppercase rounded-full hover:bg-forest-dark transition-colors shadow-sm"
      >
        {t.nav.bookNow}
      </a>
      <a
        href={whatsappUrl}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-gold/15 border border-gold/40 text-forest text-[11px] font-medium tracking-[0.15em] uppercase rounded-full hover:bg-gold/25 transition-colors"
      >
        <img src="/logo.svg" alt="" className="w-3.5 h-3.5 text-gold" />
        <span>WHATSAPP</span>
      </a>
      <a
        href={`tel:${phoneNumber}`}
        className="flex-1 text-center py-2.5 px-2 border border-forest/30 text-forest text-[11px] font-medium tracking-[0.15em] uppercase rounded-full hover:bg-forest/5 transition-colors"
      >
        {t.contact.callCta}
      </a>
    </motion.div>
  );
}
