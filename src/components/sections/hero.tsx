"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

const phoneNumber = "+358401851127";
const whatsappUrl = "https://wa.me/358401851127";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-forest">
        <video
          ref={videoRef}
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

        {/* Overlay */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          {/* Main Title with Gradient */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-wide bg-gradient-to-r from-champagne via-gold to-champagne-light bg-clip-text text-transparent">
            {t.hero.title}
          </h1>

          {/* Tagline */}
          <p className="font-serif text-2xl md:text-3xl text-champagne-light tracking-wider mb-6">
            {t.hero.tagline}
          </p>

          {/* Secondary Text */}
          <p className="text-lg md:text-xl text-beige-light/80 tracking-wide mb-12 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={whatsappUrl}
              className="inline-flex items-center px-8 py-4 bg-gold text-forest text-base tracking-wider rounded-full hover:bg-gold-light transition-colors duration-300 btn-press"
            >
              {t.hero.cta}
            </a>
            <a
              href={whatsappUrl}
              className="inline-flex items-center px-8 py-4 border border-text-inverse/40 text-text-inverse text-base tracking-wider rounded-full hover:bg-text-inverse/10 transition-colors duration-300 btn-press"
            >
              {t.hero.ctaWhatsapp}
            </a>
          </div>

          {/* Location */}
          <p className="text-text-inverse/60 text-sm tracking-wider">
            {t.hero.location}
          </p>
        </motion.div>
      </div>

      {/* Play/Pause Control */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1 }}
        onClick={togglePlay}
        className={cn(
          "absolute bottom-8 right-8 z-20 p-3 rounded-full transition-all duration-300",
          "bg-text-inverse/10 hover:bg-text-inverse/20 backdrop-blur-sm"
        )}
        aria-label={isPlaying ? "Pysäytä video" : "Toista video"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-text-inverse" />
        ) : (
          <Play className="w-5 h-5 text-text-inverse" />
        )}
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-text-inverse/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-text-inverse/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}