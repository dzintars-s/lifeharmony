"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LotusIcon } from "@/components/ui/zen-icons";
import { useLanguage } from "@/lib/language-context";

export function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Editorial botanical background element */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 150, ease: "linear" }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] text-gold/5 pointer-events-none"
      >
        <LotusIcon className="w-full h-full" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-24 bg-gold" />
              <span className="text-gold tracking-[0.3em] uppercase text-xs">Wellbeing</span>
            </div>

            <h2 className="font-serif text-5xl lg:text-7xl text-forest leading-[1.1] mb-8">
              Hyvinvointi alkaa pysähtymisestä
            </h2>

            <p className="text-xl text-text-secondary font-light leading-relaxed max-w-lg mb-8">
              Me uskomme, että todellinen palautuminen vaatii aikaa ja rauhaa.
              LifeHarmony tarjoaa paikan, jossa voit unohtaa arkikiireen
              ja keskittyä vain olennaiseen – itseesi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 relative"
          >
            {/* Image placeholder with organic layering */}
            <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
              <img
                src="/massage_back.jpg"
                alt="Zen atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
