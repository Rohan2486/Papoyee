import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Konami code: ↑↑↓↓←→←→BA
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

const KonamiEasterEgg = () => {
  const [triggered, setTriggered] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKeys(prev => {
        const next = [...prev, e.key].slice(-10);
        if (next.join(",") === KONAMI.join(",")) {
          setTriggered(true);
          setTimeout(() => setTriggered(false), 5000);
        }
        return next;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setTriggered(false)}
        >
          <motion.div
            className="glass-card p-10 md:p-16 text-center max-w-md mx-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", damping: 12 }}
          >
            <p className="text-5xl mb-4">🎮</p>
            <h3 className="font-display text-2xl font-bold text-gradient mb-3">Cheat Code Activated!</h3>
            <p className="font-script text-xl text-foreground/80">
              But there's no cheat code for how much I love you 💜
            </p>
            <p className="text-sm text-muted-foreground mt-4 font-body">You found a secret! 🕹️</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default KonamiEasterEgg;
