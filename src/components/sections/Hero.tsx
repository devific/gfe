import React from "react";
import { motion } from "motion/react";
import { ArrowDown, Play, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const headlineLines = ["20+ Years", "Of Culture", "& Influence"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/40 cinematic-overlay" />
        <div className="absolute inset-0 vignette pointer-events-none" />
        <div className="film-grain" />

        {/* Bottom Fade to next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-charcoal to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-8 h-px bg-primary" />
              Entertainment Powerhouse
            </span>
          </motion.div>

          <div className="mb-10">
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl lg:text-6xl font-display font-bold uppercase tracking-tighter leading-[0.85] text-white"
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="text-lg  text-white max-w-xl mb-12 font-light tracking-wide leading-relaxed"
          >
            Celebrity Management. Brand Campaigns.{" "}
            <br className="hidden md:block" />
            Live Experiences. Shaping the cultural landscape since 2004.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
          >
            <Link
              to="/work"
              className="group relative px-10 py-5 bg-white text-black font-bold uppercase tracking-widest rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-primary hover:text-white text-center"
            >
              <span className="relative z-10">Explore Our Work</span>
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-5 border border-white/20 rounded-2xl hover:border-white transition-all duration-500 hover:bg-white/5"
            >
              <span className="font-bold uppercase tracking-widest text-white/80 group-hover:text-white">
                Start a Project
              </span>
              <Play className="w-4 h-4 fill-white/80 group-hover:fill-white transition-transform group-hover:scale-110" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-bold">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
