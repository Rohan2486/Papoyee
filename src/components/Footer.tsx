import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import rohanGraffiti from "@/assets/rohan-graffiti.png";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [60, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.9, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [8, 0]);

  return (
    <footer
      ref={ref}
      className="relative bg-romantic-alt py-12 md:py-20 overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center justify-center"
    >
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, hsl(var(--lavender) / 0.4), hsl(var(--rose) / 0.4), transparent)",
          scaleX: scrollYProgress,
        }}
      />

      {/* Soft glow behind content */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--lavender) / 0.15), transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center space-y-4 md:space-y-5 px-4"
        style={{ opacity, y, scale }}
      >
        <motion.p
          className="font-script text-xl md:text-4xl text-gradient"
          initial={{ letterSpacing: "0.2em" }}
          whileInView={{ letterSpacing: "0.05em" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          Made with ❤️ for Koushiki
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Every pixel, every word — all for you, Bubuuu 💜
        </motion.p>

        <motion.div
          className="flex justify-center gap-2 md:gap-3 text-lg md:text-xl pt-1 md:pt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {["🌹", "🦋", "💜", "✨", "🧁"].map((emoji, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 + i * 0.15, type: "spring", damping: 8 }}
              whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0] }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>

        <motion.img
          src={rohanGraffiti}
          alt="Rohan"
          className="mx-auto w-20 md:w-32 pt-3 md:pt-4 drop-shadow-[0_0_20px_hsl(var(--lavender)/0.5)]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, type: "spring", damping: 10 }}
        />
      </motion.div>
    </footer>
  );
};

export default Footer;
