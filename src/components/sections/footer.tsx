"use client";

import { Share2, MessageSquare, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const phoneNumber = "+358401851127";
const whatsappUrl = "https://wa.me/358401851127";
const facebookUrl = "https://www.facebook.com/lifeharmonyrk";
const email = "lifeharmonyrk@gmail.com";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest text-text-inverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl mb-4">LifeHarmony</h3>
            <p className="text-champagne-light mb-6">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-champagne-light italic">
              {t.footer.quote}
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-lg mb-4">{t.footer.contact}</h4>
            <div className="space-y-3 text-sm">
              <p>Isolinnankatu 22 B, 2. kerros, huone 212</p>
              <p>28100 Pori, Finland</p>
              <a
                href={`tel:${phoneNumber}`}
                className="block text-champagne-light hover:text-gold transition-colors"
              >
                {phoneNumber}
              </a>
              <a
                href={`mailto:${email}`}
                className="block text-champagne-light hover:text-gold transition-colors"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h4 className="font-serif text-lg mb-4">{t.footer.links}</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <a
                href="#home"
                className="text-champagne-light hover:text-gold transition-colors"
              >
                {t.nav.home}
              </a>
              <a
                href="#pricing"
                className="text-champagne-light hover:text-gold transition-colors"
              >
                {t.nav.pricing}
              </a>
              <a
                href="#giftcards"
                className="text-champagne-light hover:text-gold transition-colors"
              >
                {t.nav.giftcards}
              </a>
              <a
                href="#contact"
                className="text-champagne-light hover:text-gold transition-colors"
              >
                {t.nav.contact}
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-light hover:text-gold transition-colors"
              >
                Facebook
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-champagne-light hover:text-gold transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-champagne/20">
          <p className="text-xs text-champagne-light">
            © {new Date().getFullYear()} LifeHarmony. {t.footer.allRights}
          </p>
          <div className="flex items-center gap-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-champagne-light hover:text-gold transition-colors"
              aria-label="LifeHarmony Facebookissa"
            >
              <Share2 size={18} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-champagne-light hover:text-gold transition-colors"
              aria-label="Varaa aika WhatsAppissa"
            >
              <MessageSquare size={18} />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2 text-champagne-light hover:text-gold transition-colors"
              aria-label="Sähköposti"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}