import { motion } from "framer-motion";

const things = [
  "Her smile 😊",
  "Her cute expressions",
  "Her loyalty",
  "Her soft lips 💋",
  "Her clinginess",
  "Her lame jokes 😂",
  "She notices small things",
  "She pampers me",
  "She apologises even when it's not her fault 🥺",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
};

const ThingsILove = () => {
  return (
    <section className="section-padding bg-romantic">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Things I Love About Her
          </h2>
          <p className="text-muted-foreground font-body mb-12">The list is endless, but here's a start... 💜</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {things.map((thing, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-card-hover p-5 text-center"
              whileHover={{ scale: 1.03 }}
            >
              <p className="font-body font-medium text-foreground">{thing}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ThingsILove;
