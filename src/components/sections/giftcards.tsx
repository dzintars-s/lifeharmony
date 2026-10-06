"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const whatsappUrl = "https://wa.me/358401851127?text=Hei!%20Haluaisin%20kysy%C3%A4%20LifeHarmonyn%20lahjakorteista.";

export function GiftCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="giftcards" className="relative py-24 lg:py-32 bg-forest text-text-inverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Gift className="w-12 h-12 mx-auto mb-6 text-gold" />
          <h2 className="font-serif text-4xl lg:text-5xl mb-4">
            {t.giftcards.title}
          </h2>
          <p className="text-champagne-light text-lg max-w-2xl mx-auto">
            {t.giftcards.subtitle}
          </p>
        </motion.div>

        {/* Gift Card Mockup */}
        <div className="mb-12 relative">
          {/* Glowing background effect */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.9, 0.5]
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gold/40 to-champagne/20 rounded-full blur-3xl pointer-events-none"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileHover={{ y: -15, rotateZ: 2, boxShadow: "0 30px 60px rgba(0,0,0,0.15)" }}
            animate={isInView ? { opacity: 1, y: [0, -8, 0], rotateZ: [0, 1, 0] } : { opacity: 0, y: 40 }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              rotateZ: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="relative max-w-md mx-auto aspect-[1.6/1] rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all cursor-pointer"
          >
            {/* Card Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-forest to-forest-dark" />

            {/* Card Pattern */}
            <div className="absolute inset-0 opacity-10 m-2">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            {/* Glowing border effect with breathing animation */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute inset-0 rounded-xl border-3 border-gold pointer-events-none"
            />

            {/* Card Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <motion.p
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="font-serif text-sm tracking-widest text-champagne uppercase mb-2"
              >
                {t.giftcards.cardLabel}
              </motion.p>
              <h3 className="font-serif text-4xl mb-4 text-text-inverse">LifeHarmony</h3>
              <p className="text-champagne-light text-sm">
                {t.hero.tagline}
              </p>
              <div className="mt-6 pt-6 border-t border-champagne/20 w-full">
                <p className="text-xs text-champagne/60">Pori · Isolinnankatu 22 B</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Occasions */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {t.giftcards.occasions.map((occasion, index) => (
            <motion.span
              key={occasion}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="px-4 py-2 bg-white/10 rounded-full text-sm text-champagne-light"
            >
              {occasion}
            </motion.span>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-forest text-base tracking-wider rounded-full hover:bg-gold-light transition-colors duration-300 btn-press"
          >
            {t.giftcards.cta}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}