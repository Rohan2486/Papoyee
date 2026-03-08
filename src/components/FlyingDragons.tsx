import { motion } from "framer-motion";
import dragonsImg from "@/assets/dragons-transparent.webp";

const FlyingDragons = () => {
  return (
    <motion.div
      className="absolute top-2 left-2 z-20 pointer-events-none select-none"
      animate={{
        y: [0, -8, 0, -5, 0],
        x: [0, 4, 0, -3, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={dragonsImg}
        alt="Night Fury and Light Fury flying together"
        className="w-20 sm:w-24 md:w-32 h-auto"
      />
    </motion.div>
  );
};

export default FlyingDragons;
