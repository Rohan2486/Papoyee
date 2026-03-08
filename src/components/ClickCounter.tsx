import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const secrets = [
  { emoji: "🐷", message: "Oink oink! You found Piggy! 🐷\nJust like you, adorable and impossible to resist." },
  { emoji: "🧁", message: "Sweet Cupcake Alert! 🧁\nYou're sweeter than every dessert combined." },
  { emoji: "🥭", message: "Mango Season! 🥭\nYou're the mango to my summer — the best part." },
  { emoji: "🦋", message: "Butterfly Effect! 🦋\nOne smile from you changed my entire universe." },
  { emoji: "🌹", message: "A Rose for You! 🌹\nEvery rose in the world is jealous of your beauty." },
];

const ClickCounter = () => {
  const [clicks, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [currentSecret, setCurrentSecret] = useState(0);

  const handleClick = () => {
    const next = clicks + 1;
    setClicks(next);
    if (next % 7 === 0) {
      setCurrentSecret((prev) => (prev + 1) % secrets.length);
      setShowSecret(true);
      setTimeout(() => setShowSecret(false), 3500);
    }
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 left-6 z-50 glass-card p-3 rounded-full cursor-pointer select-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85, rotate: 20 }}
        onClick={handleClick}
        title="Try clicking me..."
      >
        <span className="text-xl">💜</span>
      </motion.div>

      <AnimatePresence>
        {showSecret && (
          <motion.div
            className="fixed bottom-20 left-6 z-50 glass-card p-5 max-w-xs"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ type: "spring", damping: 15 }}
          >
            <p className="text-2xl mb-2">{secrets[currentSecret].emoji}</p>
            <p className="font-script text-base text-foreground/90 whitespace-pre-line">
              {secrets[currentSecret].message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClickCounter;
