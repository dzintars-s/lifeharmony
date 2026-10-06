"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

const whatsappUrl = "https://wa.me/358401851127";

const pricingTiers = [
  { duration: "30", price: "30 €" },
  { duration: "45", price: "40 €" },
  { duration: "60", price: "50 €" },
  { duration: "90", price: "65 €" },
  { duration: "120", price: "90 €" },
];

const packageDeals = [
  { sessions: "5 × 30 min", price: "125 €" },
  { sessions: "5 × 45 min", price: "180 €" },
  { sessions: "5 × 60 min", price: "225 €" },
  { sessions: "5 × 90 min", price: "300 €" },
  { sessions: "5 × 120 min", price: "425 €" },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="pricing" className="relative py-24 lg:py-32 zen-bg-light">
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
            {t.pricing.title}
          </h2>
          <div className="zen-divider mx-auto max-w-xs" />
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.duration}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: [0, -2, 0] } : {}}
              transition={{
                opacity: { duration: 0.5, delay: index * 0.1 },
                y: { repeat: Infinity, duration: 3, delay: index * 0.2 }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="zen-card rounded-lg p-6"
            >
              {/* Duration */}
              <p className="text-text-muted text-sm mb-2 font-medium">
                {t.pricing.sessions[tier.duration as keyof typeof t.pricing.sessions]}
              </p>

              {/* Price */}
              <p className="font-serif text-3xl text-forest mb-2 font-medium">{tier.price}</p>

              {/* Description */}
              <p className="text-text-muted text-xs">
                {t.pricing.descriptions[tier.duration as keyof typeof t.pricing.descriptions]}
              </p>

              {/* Hover CTA */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0,
                  height: hoveredIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <a
                  href={whatsappUrl}
                  className="flex items-center justify-center gap-2 mt-4 py-2 bg-forest text-text-inverse rounded-full text-sm hover:bg-forest-dark transition-colors"
                >
                  {t.pricing.book} <ArrowRight size={14} />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Package Deals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl lg:text-3xl text-forest mb-3">
              {t.pricing.packages}
            </h3>
            <p className="text-text-muted text-sm max-w-xl mx-auto">
              {t.pricing.packageDesc}
            </p>
          </div>

          {/* Package Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
            {packageDeals.map((pkg, index) => (
              <motion.div
                key={pkg.sessions}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index + 10)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative bg-forest text-text-inverse rounded-lg p-6 border transition-all duration-300 flex flex-col h-full",
                  hoveredIndex === index + 10
                    ? "bg-forest-dark shadow-lg"
                    : ""
                )}
              >
                {/* Sessions */}
                <p className="text-champagne-light text-sm mb-2">{pkg.sessions}</p>

                {/* Price */}
                <p className="font-serif text-3xl mb-3">{pkg.price}</p>

                {/* Savings Badge */}
                <span className="inline-block px-2 py-1 bg-gold/20 text-gold text-xs rounded mb-4">
                  {t.pricing.savings}
                </span>

                {/* CTA - Always visible on mobile, hidden on desktop until hover */}
                <a
                  href={whatsappUrl}
                  className={cn(
                    "flex items-center justify-center gap-2 py-2 px-3 rounded-full text-sm transition-all mt-auto",
                    "lg:hidden block w-full",
                    "bg-gold text-forest hover:bg-gold-light"
                  )}
                >
                  {t.pricing.askPackages} <ArrowRight size={14} />
                </a>

                {/* Hover CTA - Desktop only */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredIndex === index + 10 ? 1 : 0,
                    height: hoveredIndex === index + 10 ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden hidden lg:block"
                >
                  <a
                    href={whatsappUrl}
                    className="flex items-center justify-center gap-2 mt-4 py-2 bg-gold text-forest rounded-full text-sm hover:bg-gold-light transition-colors w-full"
                  >
                    {t.pricing.askPackages} <ArrowRight size={14} />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}