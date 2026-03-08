import { motion } from "framer-motion";
import coupleBg from "@/assets/couple-silhouette.jpg";

const events = [
  {
    date: "12 March 2023",
    title: "The Day We First Met",
    description: "The universe finally decided to bring us together. 💫",
  },
  {
    date: "4 December 2023",
    title: "We Became Us",
    description: "The best decision of our lives. Our love journey officially began. 💜",
  },
];

const loveLanguages = [
  "Quality time",
  "Clingy love",
  "Doing bkchodi together",
  "Dirty flirting 😏",
];

const LoveStorySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10"
        style={{ backgroundImage: `url(${coupleBg})` }}
      />
      <div className="absolute inset-0 bg-romantic" style={{ opacity: 0.85 }} />

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Our Love Story
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-lavender/30 transform md:-translate-x-px" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
            >
              {/* Heart dot */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-lavender z-10 flex items-center justify-center">
                <span className="text-xs">💜</span>
              </div>

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card-hover p-6">
                  <p className="font-script text-lavender text-lg mb-1">{event.date}</p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground font-body">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Love Language */}
        <motion.div
          className="glass-card p-8 text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Love Language 💕</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {loveLanguages.map((lang, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-body"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveStorySection;
