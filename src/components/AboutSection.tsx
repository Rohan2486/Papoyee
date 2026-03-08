import { motion } from "framer-motion";
import { Heart, Cake, Eye, Palette, UtensilsCrossed, Cherry, Carrot, Dog, MapPin, Flower2, Calendar } from "lucide-react";

const infoItems = [
  { icon: <Heart className="w-5 h-5" />, label: "Full Name", value: "Koushiki Banik" },
  { icon: <Calendar className="w-5 h-5" />, label: "Birthday", value: "November 29, 2004" },
  { icon: <Cake className="w-5 h-5" />, label: "Hair", value: "Black with Burgundy highlights" },
  { icon: <Eye className="w-5 h-5" />, label: "Eyes", value: "Brown" },
  { icon: <Palette className="w-5 h-5" />, label: "Favourite Colour", value: "Pastel Blue, Lavender" },
  { icon: <UtensilsCrossed className="w-5 h-5" />, label: "Favourite Food", value: "Butter Naan, Butter Chicken, Momos, Pizza" },
  { icon: <Cherry className="w-5 h-5" />, label: "Favourite Fruit", value: "Mango 🥭" },
  { icon: <Carrot className="w-5 h-5" />, label: "Favourite Vegetable", value: "Aloo, Okra" },
  { icon: <Dog className="w-5 h-5" />, label: "Favourite Animal", value: "Piggies 🐷" },
  { icon: <MapPin className="w-5 h-5" />, label: "Favourite Place", value: "Paris 🇫🇷 Germany 🇩🇪 Europe" },
  { icon: <Flower2 className="w-5 h-5" />, label: "Favourite Flower", value: "Roses 🌹" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section className="section-padding bg-romantic-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-script text-2xl text-lavender mb-2">💜</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            The Girl I Love
          </h2>
          <p className="text-muted-foreground font-body">Everything about you is my favourite thing.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {infoItems.map((info, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-card-hover p-5 md:p-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lavender">{info.icon}</span>
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider font-body">
                  {info.label}
                </span>
              </div>
              <p className="text-foreground font-body font-medium text-base">
                {info.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
