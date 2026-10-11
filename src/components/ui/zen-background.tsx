"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LeafIcon, LotusIcon, EnsoCircle, TinyParticleIcon } from "./zen-icons";
import { cn } from "@/lib/utils";

export function FloatingLeaves() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute text-forest/10"
        style={{ width: "200px", height: "200px", top: "10%", left: "-5%" }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [-5, 5, -5],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      >
        <LeafIcon className="w-full h-full" strokeWidth={0.5} />
      </motion.div>
      <motion.div
        className="absolute text-forest/10"
        style={{ width: "150px", height: "150px", bottom: "20%", right: "-3%" }}
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          rotate: [5, -5, 5],
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut", delay: 2 }}
      >
        <LeafIcon className="w-full h-full" strokeWidth={0.5} />
      </motion.div>
    </div>
  );
}

export function LotusBackground({ className, position = "right" }: { className?: string; position?: "left" | "right" | "center" }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const getPositionClasses = () => {
    switch (position) {
      case "left":
        return "left-[-10%] top-1/2 -translate-y-1/2";
      case "right":
        return "right-[-10%] top-1/2 -translate-y-1/2";
      case "center":
        return "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2";
      default:
        return "right-[-10%] top-1/2 -translate-y-1/2";
    }
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <motion.div
        className={cn("absolute w-[800px] h-[800px] text-forest/5 flex items-center justify-center", getPositionClasses())}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [-2, 2, -2],
          opacity: [0.04, 0.08, 0.04],
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
      >
        <LotusIcon className="w-full h-full" strokeWidth={0.2} />
      </motion.div>
    </div>
  );
}

export function EnsoBackground({ className, color = "dark-green" }: { className?: string, color?: "dark-green" | "gold" }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  const colorClass = color === "gold" ? "text-gold" : "text-forest-dark";
  const opacityClass = color === "gold" ? "opacity-[0.03]" : "opacity-[0.04]";

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <motion.div
        className={cn("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px]", colorClass, opacityClass)}
        animate={{
          rotate: [0, 360],
          scale: [0.95, 1.05, 0.95],
          opacity: color === "gold" ? [0.02, 0.05, 0.02] : [0.03, 0.07, 0.03],
        }}
        transition={{
          rotate: { repeat: Infinity, duration: 120, ease: "linear" },
          scale: { repeat: Infinity, duration: 25, ease: "easeInOut" },
          opacity: { repeat: Infinity, duration: 20, ease: "easeInOut" }
        }}
      >
        <EnsoCircle className="w-full h-full" strokeWidth={0.5} />
      </motion.div>
    </div>
  );
}

export function GoldenParticles({ count = 8 }: { count?: number }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = 15 + Math.random() * 20;
        const delay = Math.random() * 10;

        return (
          <motion.div
            key={i}
            className="absolute text-gold w-2 h-2"
            style={{ top: `${top}%`, left: `${left}%` }}
            animate={{
              y: [-100, 100],
              x: [-20, 20, -20],
              opacity: [0, 0.4, 0],
              rotate: [0, 360]
            }}
            transition={{
              y: { repeat: Infinity, duration: duration, ease: "linear", delay },
              x: { repeat: Infinity, duration: duration * 0.7, ease: "easeInOut", delay },
              opacity: { repeat: Infinity, duration: duration, ease: "easeInOut", delay },
              rotate: { repeat: Infinity, duration: duration * 0.5, ease: "linear", delay }
            }}
          >
            <TinyParticleIcon className="w-full h-full" />
          </motion.div>
        );
      })}
    </div>
  );
}

export function SoftLight({ color = "warm" }: { color?: "warm" | "gold" | "green" }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  let bgClass = "";
  switch (color) {
    case "warm": bgClass = "bg-[#FAF8F4]"; break;
    case "gold": bgClass = "bg-[#D4C4A8]"; break;
    case "green": bgClass = "bg-[#2D4A3E]"; break;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className={cn("absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-20", bgClass)}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }}
      />
    </div>
  );
}
