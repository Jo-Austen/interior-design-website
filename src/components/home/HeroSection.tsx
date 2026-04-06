"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: "easeOut" as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-slate-950/60" />

      <Container className="relative flex min-h-screen flex-col items-center justify-center text-center">
        <motion.div
          className="w-full max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p
            className="mb-6 text-sm uppercase tracking-[0.35em] text-white/70"
            variants={itemVariants}
          >
            Interior Design Studio
          </motion.p>
          <motion.h1
            className="mb-6 text-5xl font-semibold leading-tight text-white/95 sm:text-6xl lg:text-7xl"
            variants={headingVariants}
          >
            Transform your space into something extraordinary.
          </motion.h1>
          <motion.p
            className="text-lg leading-relaxed text-white/75"
            variants={itemVariants}
          >
            We design elevated interiors that feel luminous, calm, and thoughtfully curated for every moment.
          </motion.p>
        </motion.div>

        <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <div className="flex h-12 w-12 items-end justify-center rounded-full border border-white/30 text-white/80">
            <span className="mb-2 text-2xl animate-bounce">⌄</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
