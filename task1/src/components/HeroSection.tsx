import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center pt-16 hero-gradient relative overflow-hidden">
    <div className="blob-purple top-20 -left-40" />
    <div className="blob-pink -bottom-20 right-0" />

    {/* Floating particles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/40"
        style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}

    <div className="container text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm mb-6"
      >
        <Sparkles size={14} /> Welcome to my portfolio
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight"
      >
        Harshini{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Penmetsa
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
      >
        BTech Student&nbsp;·&nbsp;Aspiring Web Developer&nbsp;·&nbsp;Problem Solver
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center justify-center gap-4 mt-10"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl btn-gradient text-primary-foreground font-medium text-base"
        >
          Know More <ArrowDown size={16} />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-medium text-base"
        >
          Get in Touch
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
