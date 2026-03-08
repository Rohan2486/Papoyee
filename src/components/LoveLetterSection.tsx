import { motion } from "framer-motion";
import lavenderBg from "@/assets/lavender-bg.jpg";

const LoveLetterSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: `url(${lavenderBg})` }}
      />
      <div className="absolute inset-0 bg-romantic-alt" style={{ opacity: 0.85 }} />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            A Love Letter
          </h2>
          <p className="text-muted-foreground font-body">From my heart to yours 💌</p>
        </motion.div>

        <motion.div
          className="glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="font-script text-lg md:text-xl text-foreground/90 space-y-6 leading-relaxed">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Dear Papoyeee,
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              I overthink.<br />
              I over love.<br />
              I over care.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              But all these mood swings are not for everyone.
            </motion.p>

            <motion.p
              className="text-2xl md:text-3xl text-gradient font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              They are just for you. 💜
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
            >
              I love you more than words could ever explain.
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl font-bold text-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3 }}
            >
              You are my home. 🏡
            </motion.p>

            <motion.p
              className="text-right text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              — Forever yours ♥️
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
