import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    const a = new Audio("/sounds/our-song.mp3");
    a.loop = true;
    a.volume = 0.3;
    return a;
  });

  const toggle = useCallback(() => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying, audio]);

  return (
    <motion.button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 glass-card p-3 md:p-4 rounded-full animate-pulse-glow cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      aria-label="Toggle music"
    >
      <span className="text-xl md:text-2xl">
        {isPlaying ? "🎵" : "🎶"}
      </span>
    </motion.button>
  );
};

export default MusicToggle;
