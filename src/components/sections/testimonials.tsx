"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const testimonials = [
    {
      quote: "Jos nautit hyvästä hieronnasta, rentouttavasta musiikista sekä tykkäät olla hiljaa kun sinua hierotaan, niin tämä on just sulle.",
      author: "Teresa Uusitalo",
      role: "Asiakas",
    },
    {
      quote: "Rauhallinen ja ammattimainen palvelu. Tunsi, että minua oikeasti kuunneltiin ja hoidettiin. Suosittelen lämpimästi!",
      author: "Matti Virtanen",
      role: "Asiakas",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 zen-bg-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="zen-title font-serif text-4xl lg:text-5xl text-forest mb-4">
            {t.testimonials.title}
          </h2>
          <div className="zen-divider mx-auto max-w-xs" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="zen-card rounded-lg p-8"
            >
              {/* Quote */}
              <div className="relative mb-6">
                <motion.span
                  animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1, 0.95] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="text-5xl text-gold/40 font-serif leading-none"
                >
                  "
                </motion.span>
                <p className="text-text-secondary leading-relaxed italic text-lg mt-2">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <motion.div
                animate={{ y: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="border-t border-champagne/30 pt-6"
              >
                <p className="font-serif text-lg text-forest font-medium">{testimonial.author}</p>
                <p className="text-text-muted text-sm">{testimonial.role}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="zen-card rounded-lg p-8 max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
              >
                <Star className="w-5 h-5 fill-gold text-gold" />
              </motion.div>
            ))}
          </div>
          <p className="font-serif text-3xl text-forest mb-2 font-medium">{t.testimonials.rating}</p>
          <p className="text-text-muted text-sm mb-4">{t.testimonials.source}</p>
          <a
            href="https://g.page/r/CVmm_ZT2vwm_EBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-forest hover:text-forest-dark transition-colors font-medium"
          >
            {t.testimonials.viewAll}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}