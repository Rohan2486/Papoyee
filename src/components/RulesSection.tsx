import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const rules = [
  "Never cheat",
  "Respect each other",
  "Always sleep after solving fights",
  "Never take each other for granted",
  "Always be honest",
  "Always share everything",
];

const RulesSection = () => {
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
            Our Rules
          </h2>
          <p className="text-muted-foreground font-body mb-12">Sacred promises we live by 🔒</p>
        </motion.div>

        <div className="space-y-4">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-5 flex items-center gap-4 text-left"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Lock className="w-5 h-5 text-lavender flex-shrink-0" />
              <p className="font-body font-medium text-foreground text-lg">{rule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
