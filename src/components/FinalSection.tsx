import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LoveCounter = () => {
  const startDate = new Date("2023-12-04T00:00:00");
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      let diff = Math.floor((now.getTime() - startDate.getTime()) / 1000);
      const days = Math.floor(diff / 86400); diff %= 86400;
      const hours = Math.floor(diff / 3600); diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      setElapsed({ days, hours, minutes, seconds });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: elapsed.days },
    { label: "Hours", value: elapsed.hours },
    { label: "Minutes", value: elapsed.minutes },
    { label: "Seconds", value: elapsed.seconds },
  ];

  return (
    <motion.div
      className="glass-card p-6 md:p-8 text-center inline-block"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="font-body text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 uppercase tracking-wider">In love since Dec 4, 2023</p>
      <div className="flex gap-2 md:gap-5 justify-center">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center min-w-[3.5rem] md:min-w-0">
            <span className="text-2xl md:text-5xl font-display font-bold text-gradient tabular-nums">
              {String(u.value).padStart(u.label === "Days" ? 1 : 2, "0")}
            </span>
            <span className="text-[10px] md:text-sm text-muted-foreground font-body mt-1">{u.label}</span>
          </div>
        ))}
      </div>
      <p className="font-script text-lg text-foreground/70 mt-4">& counting forever... 💜</p>
    </motion.div>
  );
};

const Confetti = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number; emoji: string }>>([]);

  useEffect(() => {
    const emojis = ["💜", "💗", "✨", "🌸", "💕", "🦋", "🌹"];
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute text-lg"
          style={{ left: `${p.left}%`, top: "-20px" }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          whileInView={{ y: "100vh", opacity: [0, 1, 1, 0], rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 4, delay: p.delay, ease: "easeIn" }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
};

const FinalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-romantic min-h-[80vh] md:min-h-screen flex items-center justify-center">
      <Confetti />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <LoveCounter />

        <motion.div
          className="mt-10 md:mt-16 space-y-4 md:space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient">
            You are my Home ♥️
          </h2>

          <motion.p
            className="font-script text-xl md:text-2xl text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            Our journey isn't perfect,<br />
            but it's ours.
          </motion.p>

          <motion.p
            className="font-body text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
          >
            And I will stay with you until the end.
          </motion.p>

          <motion.p
            className="text-2xl md:text-4xl font-script text-gradient font-bold pt-4 md:pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, type: "spring" }}
          >
            I Love You Bubuuu 💜
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSection;
