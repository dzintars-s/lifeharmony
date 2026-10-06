"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Heart, Music, Sparkles, Clock } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const iconMap = {
  0: Leaf,
  1: Heart,
  2: Music,
  3: Sparkles,
  4: Clock,
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 zen-bg-medium">
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
            {t.features.title}
          </h2>
          <div className="zen-divider mx-auto max-w-xs" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {t.features.items.map((feature, index) => {
            const IconComponent = iconMap[index as keyof typeof iconMap];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="zen-card rounded-lg p-6 h-full">
                  {/* Icon with Breathing Animation */}
                  <motion.div
                    animate={{ scale: [0.95, 1, 0.95], y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 4, delay: index * 0.2 }}
                    className="zen-icon mb-5 group-hover:bg-gradient-to-br group-hover:from-forest group-hover:to-forest-dark group-hover:text-text-inverse"
                  >
                    <IconComponent size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-serif text-lg text-forest mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}