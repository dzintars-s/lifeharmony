"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Leaf, Heart, Wind, Droplet, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const floatingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.1,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 zen-bg-medium overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-forest/5 rounded-full blur-3xl pointer-events-none"
      />

      {/* Floating Zen Icons in Background */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-1/4 pointer-events-none"
      >
        <Heart size={32} className="text-gold/30" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -50, 0], x: [0, -25, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 left-12 pointer-events-none"
      >
        <Leaf size={36} className="text-champagne/25" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -35, 0], x: [0, 15, 0], opacity: [0.07, 0.14, 0.07] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-20 pointer-events-none"
      >
        <Wind size={28} className="text-gold/28" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -45, 0], x: [0, -20, 0], opacity: [0.05, 0.11, 0.05] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-2/3 left-1/3 pointer-events-none"
      >
        <Droplet size={24} className="text-champagne/22" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -38, 0], x: [0, 25, 0], opacity: [0.06, 0.13, 0.06] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-20 right-1/3 pointer-events-none"
      >
        <Sparkles size={26} className="text-gold/24" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -42, 0], x: [0, -18, 0], opacity: [0.07, 0.14, 0.07] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute top-40 right-1/2 pointer-events-none"
      >
        <Leaf size={28} className="text-gold/26" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -36, 0], x: [0, 22, 0], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute bottom-1/2 left-1/4 pointer-events-none"
      >
        <Heart size={24} className="text-champagne/28" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image with Zen Elements */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={floatingVariants}
            className="relative"
          >
            {/* Inner Breathing Ring */}
            <motion.div
              animate={{ scale: [0.98, 1.02, 0.98] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -inset-3 rounded-2xl border border-champagne/30"
            />

            {/* Main Image Container */}
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-forest/40 to-forest-dark/40">
              <img
                src="/raivis.png"
                alt="Raivis - Professional massage therapist"
                className="w-full h-full object-cover overflow-visible -left-10 lg:-left-18 absolute"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-forest/20 to-transparent" />

              {/* Logo Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-6 left-6 bg-forest/95 backdrop-blur-sm rounded-full p-1 shadow-lg"
              >
                <img src="/logo.svg" alt="LifeHarmony Logo" className="w-12 h-12 p-1 object-contain" />
              </motion.div>
            </div>

            {/* Bottom Accent Bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={isInView ? { width: "100%", opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="absolute -bottom-8 left-0 h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:pl-8"
          >
            {/* Professional Badge */}
            <motion.div
              variants={floatingVariants}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center"
              >
                <Award size={24} className="text-gold" />
              </motion.div>
              <span className="text-sm font-semibold text-gold tracking-wider uppercase">
                Professional Therapist
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={floatingVariants}
              className="zen-title font-serif text-4xl lg:text-5xl text-forest mb-2 leading-tight"
            >
              {t.about.title}
            </motion.h2>

            {/* Subtitle */}
            <motion.div
              variants={floatingVariants}
              className="flex items-center gap-2 mb-8"
            >
              <motion.div
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Leaf size={16} className="text-champagne" />
              </motion.div>
              <p className="text-champagne-light font-medium">
                Expert in holistic wellness
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={containerVariants}
              className="space-y-6 text-text-secondary leading-relaxed mb-10"
            >
              {t.about.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  custom={index}
                  variants={textRevealVariants}
                  className="text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Quote Section */}
            <motion.div
              variants={floatingVariants}
              className="space-y-6 pt-8 border-t border-champagne/30"
            >
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="italic space-y-2"
              >
                <p className="text-sm text-gold/80 font-medium uppercase tracking-wide">
                  Personal Statement
                </p>
                <p className="font-serif text-2xl text-forest leading-relaxed">
                  "{t.about.quote}"
                </p>
              </motion.div>
            </motion.div>

            {/* Credentials Section */}
            <motion.div
              variants={floatingVariants}
              className="mt-10 pt-8 grid grid-cols-2 gap-6 border-t border-champagne/30"
            >
              {[
                { label: "Years Experience", value: "10+" },
                { label: "Happy Clients", value: "500+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6 }}
                  animate={{ y: [0, -2, 0] }}
                  transition={{
                    y: { duration: 3, repeat: Infinity, delay: index * 0.5 },
                  }}
                  className="zen-card rounded-lg p-4 text-center"
                >
                  <motion.p
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                    className="font-serif text-3xl text-forest mb-1 font-medium"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
