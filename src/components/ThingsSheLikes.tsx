import { motion } from "framer-motion";

const things = [
  { emoji: "💜", text: "Me and only me" },
  { emoji: "⏰", text: "Spending time with me" },
  { emoji: "😤", text: "Annoying me" },
];

const ThingsSheLikes = () => {
  return (
    <section className="section-padding bg-romantic-alt">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Things She Likes
          </h2>
          <p className="text-muted-foreground font-body mb-12">Spoiler: It's mostly me 😏</p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {things.map((thing, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-8 flex-1 text-center"
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ rotate: 2 }}
            >
              <span className="text-4xl mb-4 block">{thing.emoji}</span>
              <p className="font-body font-semibold text-foreground text-lg">{thing.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsSheLikes;
