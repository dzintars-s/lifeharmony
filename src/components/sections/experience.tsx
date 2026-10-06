"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(true);
  const { t } = useLanguage();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl lg:text-5xl text-forest mb-4">
            {t.experience.title}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden bg-forest"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/massage_back.jpg"
          >
            <source
              src="/massage_back.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-forest/10 to-transparent" />
          <button
            onClick={togglePlay}
            className={cn(
              "absolute bottom-6 right-6 p-3 rounded-full transition-all duration-300",
              "bg-text-inverse/10 hover:bg-text-inverse/20 backdrop-blur-sm"
            )}
            aria-label={isPlaying ? "Pysäytä video" : "Toista video"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-text-inverse" />
            ) : (
              <Play className="w-5 h-5 text-text-inverse" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}