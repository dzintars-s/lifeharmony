"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const mapsUrl = "https://www.google.com/maps?q=Isolinnankatu+22+B+Pori+Finland";

export function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative py-16 lg:py-20 bg-forest text-text-inverse">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <MapPin className="w-12 h-12 mx-auto mb-6 text-gold" />
          <h2 className="font-serif text-3xl lg:text-4xl mb-4">
            {t.map.title}
          </h2>
          <p className="text-champagne-light text-lg mb-6">
            {t.map.subtitle}
          </p>
          <div className="space-y-2 mb-8">
            <p className="text-text-inverse">Isolinnankatu 22 B</p>
            <p className="text-champagne-light text-sm">{t.map.floor}</p>
            <p className="text-text-inverse">28100 Pori, Suomi</p>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest rounded-full text-sm hover:bg-gold-light transition-colors duration-300"
          >
            {t.map.cta}
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}