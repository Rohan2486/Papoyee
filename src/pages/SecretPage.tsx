import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";

const quotes = [
  "You are my today and all of my tomorrows. 💜",
  "In a sea of people, my eyes will always search for you.",
  "You're the reason I believe in love at first sight. 🦋",
  "Home is not a place, it's a person. And you're mine. 🏡",
  "I fell in love with your smile, and I keep falling every day.",
  "You + Me = Everything that matters. ♾️",
];

const SecretPage = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [tapCount, setTapCount] = useState(0);
  const [showUltraSecret, setShowUltraSecret] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleHeartClick = () => {
    const next = tapCount + 1;
    setTapCount(next);
    if (next >= 10) {
      setShowUltraSecret(true);
    }
  };

  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center heart-cursor px-4">
      <motion.div
        className="glass-card p-10 md:p-16 text-center max-w-lg"
        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1.2 }}
      >
        <motion.div
          className="mb-6 cursor-pointer"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={handleHeartClick}
          whileTap={{ scale: 1.5 }}
        >
          <Heart className="w-16 h-16 mx-auto text-lavender fill-lavender" />
        </motion.div>

        <motion.h1
          className="text-2xl md:text-4xl font-display font-bold text-gradient mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          I knew you would find this. 💜
        </motion.h1>

        <motion.p
          className="font-script text-xl md:text-2xl text-foreground/80 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          You are my forever.
        </motion.p>

        <motion.p
          className="text-muted-foreground font-body mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          This hidden corner of the internet is proof —<br />
          my love for you has no boundaries. 🌹
        </motion.p>

        {/* Rotating quotes */}
        <motion.div
          key={quoteIndex}
          className="romantic-border rounded-xl p-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-script text-base text-foreground/70 italic">
            {quotes[quoteIndex]}
          </p>
        </motion.div>

        {/* Ultra secret after 10 heart taps */}
        {showUltraSecret && (
          <motion.div
            className="mt-8 glass-card p-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 10 }}
          >
            <p className="text-3xl mb-3">🏆</p>
            <p className="font-display text-lg font-bold text-gradient">Ultra Secret Unlocked!</p>
            <p className="font-script text-base text-foreground/80 mt-2">
              You tapped 10 times because you're clingy like that 😏<br />
              And I love every second of it. 💜
            </p>
          </motion.div>
        )}

        <p className="text-xs text-muted-foreground/50 mt-6 font-body">
          Hint: Try tapping the heart 10 times... 👀
        </p>
      </motion.div>
    </div>
  );
};

export default SecretPage;
