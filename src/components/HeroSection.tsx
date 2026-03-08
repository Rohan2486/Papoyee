import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingHearts3D from "@/components/FloatingHearts3D";
import minionLove from "@/assets/minion-love.png";
import FlyingDragons from "@/components/FlyingDragons";

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

const minionSounds = ["/sounds/minion-bello.mp3", "/sounds/minion-papoy.mp3"];
let soundIndex = 0;

const playMinionSound = () => {
  const audio = new Audio(minionSounds[soundIndex % minionSounds.length]);
  audio.volume = 1;
  audio.play().catch(() => {});
  soundIndex++;
};

const MinionCorner = () => {
  const [tapped, setTapped] = useState(false);

  const handleTap = useCallback(() => {
    setTapped(true);
    playMinionSound();
    setTimeout(() => setTapped(false), 2500);
  }, []);

  return (
    <motion.div
      className="absolute top-4 right-4 md:right-10 z-20 cursor-pointer"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 1.2, damping: 10, stiffness: 60 }}
      onClick={handleTap}
    >
      <motion.img
        src={minionLove}
        alt="Cute Minion"
        className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-lg"
        animate={{ y: [0, -3, 0], rotate: [0, 3, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileTap={{ scale: 1.3 }}
      />
      <AnimatePresence>
        {tapped && (
          <motion.div
            className="absolute -left-6 -bottom-6 text-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", damping: 12 }}
          >
            💜
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const HeroSection = ({ onEnter }: { onEnter: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-romantic" style={{ opacity: 0.7 }} />
      <FloatingHearts3D />

      {/* Cute minion in top-right corner */}
      <MinionCorner />
      <FlyingDragons />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-script text-2xl md:text-5xl text-foreground/80 mb-3 md:mb-4">
            <TypeWriter text="Papoyeeee 🦋" delay={500} />
          </p>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-7xl font-display font-bold mb-3 md:mb-4 text-gradient leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          My Pretty Girl
        </motion.h1>

        <motion.p
          className="font-script text-xl md:text-3xl text-foreground/70 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          My sweet cupcake 🧁
        </motion.p>

        <motion.p
          className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
        >
          Koushiki Banik — The Love of My Life
        </motion.p>

        <motion.p
          className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-10 font-body italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        >
          A small digital world made only for you.
        </motion.p>

        <motion.button
          onClick={onEnter}
          className="glass-card px-6 py-3 md:px-8 md:py-4 rounded-full font-body font-semibold text-foreground text-base md:text-lg transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(270 50% 65% / 0.3)" }}
          whileTap={{ scale: 0.97 }}
        >
          ❤️ Enter Our Story
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
