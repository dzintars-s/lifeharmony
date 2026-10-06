"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const whatsappUrl = "https://wa.me/358401851127";

export function FirstVisitOffer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative py-16 lg:py-20 bg-forest-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Label */}
          <p className="text-gold text-sm tracking-widest uppercase mb-4">
            {t.firstVisit.label}
          </p>

          {/* Main Offer */}
          <h2 className="font-serif text-3xl lg:text-4xl text-text-inverse mb-4">
            {t.firstVisit.title}
          </h2>

          {/* Discount */}
          <p className="font-serif text-7xl lg:text-9xl text-gold mb-4">
            {t.firstVisit.discount}
          </p>

          {/* Subtext */}
          <p className="text-champagne-light text-lg mb-8">
            {t.firstVisit.subtitle}
          </p>

          {/* CTA */}
          <a
            href={whatsappUrl}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-forest text-base tracking-wider rounded-full hover:bg-gold-light transition-colors duration-300 btn-press"
          >
            {t.firstVisit.cta}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}