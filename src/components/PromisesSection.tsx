import { motion } from "framer-motion";
import rosesBg from "@/assets/roses-bg.jpg";

const promises = [
  {
    text: "We are a team.\nYou + Me against the problem.",
    emoji: "🤝",
  },
  {
    text: "Grow old together.",
    emoji: "👴👵",
  },
  {
    text: "Spend our entire lives loving each other.",
    emoji: "♾️",
  },
];

const PromisesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15"
        style={{ backgroundImage: `url(${rosesBg})` }}
      />
      <div className="absolute inset-0 bg-romantic" style={{ opacity: 0.8 }} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            My Promises
          </h2>
          <p className="text-muted-foreground font-body mb-12">Written in my heart, sealed with love 🌹</p>
        </motion.div>

        <div className="space-y-6">
          {promises.map((promise, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 animate-pulse-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              <span className="text-3xl mb-4 block">{promise.emoji}</span>
              <p className="font-script text-xl md:text-2xl text-foreground whitespace-pre-line">
                {promise.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromisesSection;
