"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

const phoneNumber = "+358401851127";
const whatsappUrl = "https://wa.me/358401851127";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Determine styles based on scroll state
  const navStyles = isScrolled
    ? "nav-blur bg-background/95 border-b border-border"
    : "bg-forest/95 backdrop-blur-md";

  const textColor = isScrolled ? "text-forest" : "text-text-inverse";
  const textHoverColor = isScrolled ? "hover:text-forest" : "hover:text-text-inverse";
  const buttonStyle = isScrolled
    ? "bg-forest text-text-inverse hover:bg-forest-dark"
    : "bg-text-inverse text-forest hover:bg-champagne-light";

  const navLinks = [
    { href: "#home", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#giftcards", label: t.nav.giftcards },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          navStyles
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + Brand */}
            <a href="#home" className="flex-shrink-0 flex items-center gap-3 group">
              {/* Logo SVG */}
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm p-2 group-hover:bg-white/20 transition-colors">
                <img src="/logo.svg" alt="LifeHarmony Logo" className="w-full h-full object-contain" />
              </div>
              {/* Brand Name with Gradient */}
              <div className="hidden sm:flex flex-col">
                <span
                  className="font-serif text-xl font-bold tracking-wide bg-gradient-to-r from-forest to-gold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: isScrolled
                      ? "linear-gradient(to right, #2D4A3E, #B8A582)"
                      : "linear-gradient(to right, #FDFCF9, #D4C4A8)",
                  }}
                >
                  LifeHarmony
                </span>
              </div>
              {/* Mobile Brand Name */}
              <div className="sm:hidden flex flex-col">
                <span
                  className="font-serif text-lg font-bold tracking-wide bg-gradient-to-r from-forest to-gold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: isScrolled
                      ? "linear-gradient(to right, #2D4A3E, #B8A582)"
                      : "linear-gradient(to right, #FDFCF9, #D4C4A8)",
                  }}
                >
                  LifeHarmony
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "transition-colors duration-300 text-sm tracking-wide",
                    textColor,
                    textHoverColor
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right section: Language Switcher + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher />
              <a
                href={whatsappUrl}
                className={cn(
                  "inline-flex items-center px-6 py-2.5 text-sm tracking-wide rounded-full transition-colors duration-300 btn-press",
                  buttonStyle
                )}
              >
                {t.nav.bookNow}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn("p-2", textColor)}
                aria-label="Avaa valikko"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="relative h-full flex flex-col">
              <div className="flex items-center justify-between p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest/10 p-2">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <defs>
                        <linearGradient id="mobileForestGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#2D4A3E" stopOpacity="1" />
                          <stop offset="100%" stopColor="#1A3A2A" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="mobileGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4C4A8" stopOpacity="1" />
                          <stop offset="100%" stopColor="#B8A582" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="mobileChampagneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#E8DFD0" stopOpacity="1" />
                          <stop offset="100%" stopColor="#D4C4A8" stopOpacity="1" />
                        </linearGradient>
                        <radialGradient id="mobileGlowGradient" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#D4C4A8" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#B8A582" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="100" cy="100" r="98" fill="url(#mobileGlowGradient)" opacity="0.5" />
                      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#mobileGoldGradient)" strokeWidth="2.5" opacity="0.9" />
                      <circle cx="100" cy="100" r="90" fill="url(#mobileForestGradient)" />
                      <circle cx="100" cy="100" r="88" fill="none" stroke="url(#mobileChampagneGradient)" strokeWidth="1" opacity="0.4" />
                      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#mobileChampagneGradient)" strokeWidth="0.8" opacity="0.2" />
                      <g id="petals">
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.95" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.9" transform="rotate(45 100 100)" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.85" transform="rotate(90 100 100)" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.8" transform="rotate(135 100 100)" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.9" transform="rotate(180 100 100)" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.85" transform="rotate(225 100 100)" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.8" transform="rotate(270 100 100)" />
                        <path d="M 100 30 Q 85 50 82 70 Q 80 85 100 92 Q 120 85 118 70 Q 115 50 100 30" fill="url(#mobileChampagneGradient)" opacity="0.9" transform="rotate(315 100 100)" />
                      </g>
                      <circle cx="100" cy="100" r="32" fill="rgba(26, 58, 42, 0.3)" />
                      <g id="inner-petals">
                        <path d="M 100 75 Q 92 82 90 90 Q 89 95 100 100 Q 111 95 110 90 Q 108 82 100 75" fill="url(#mobileGoldGradient)" opacity="0.95" />
                        <path d="M 100 75 Q 92 82 90 90 Q 89 95 100 100 Q 111 95 110 90 Q 108 82 100 75" fill="url(#mobileGoldGradient)" opacity="0.9" transform="rotate(90 100 100)" />
                        <path d="M 100 75 Q 92 82 90 90 Q 89 95 100 100 Q 111 95 110 90 Q 108 82 100 75" fill="url(#mobileGoldGradient)" opacity="0.85" transform="rotate(180 100 100)" />
                        <path d="M 100 75 Q 92 82 90 90 Q 89 95 100 100 Q 111 95 110 90 Q 108 82 100 75" fill="url(#mobileGoldGradient)" opacity="0.9" transform="rotate(270 100 100)" />
                      </g>
                      <circle cx="100" cy="100" r="8" fill="url(#mobileGoldGradient)" opacity="0.95" />
                      <circle cx="100" cy="100" r="6" fill="url(#mobileChampagneGradient)" opacity="0.8" />
                      <ellipse cx="88" cy="88" rx="12" ry="12" fill="white" opacity="0.12" />
                      <circle cx="100" cy="75" r="1.5" fill="url(#mobileGoldGradient)" opacity="0.6" />
                      <circle cx="125" cy="100" r="1.5" fill="url(#mobileGoldGradient)" opacity="0.6" />
                      <circle cx="100" cy="125" r="1.5" fill="url(#mobileGoldGradient)" opacity="0.6" />
                      <circle cx="75" cy="100" r="1.5" fill="url(#mobileGoldGradient)" opacity="0.6" />
                    </svg>
                  </div>
                  <span className="font-serif text-xl font-bold text-forest bg-gradient-to-r from-forest to-gold bg-clip-text text-transparent">
                    LifeHarmony
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-forest"
                  aria-label="Sulje valikko"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col items-center justify-center space-y-8">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-2xl font-serif text-forest hover:text-forest-dark transition-colors"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-6 space-y-4">
                <a
                  href={whatsappUrl}
                  className="block w-full text-center py-3 bg-forest text-text-inverse rounded-full"
                >
                  {t.nav.bookNow}
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="block w-full text-center py-3 border border-forest text-forest rounded-full"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}