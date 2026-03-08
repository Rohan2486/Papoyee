import { motion } from "framer-motion";
import placeholderImg from "@/assets/placeholder-memory.jpg";
import coupleTogetherImg from "@/assets/couple-together.jpg";
import papoyeeImg from "@/assets/papoyee.jpg";
import foreverEverImg from "@/assets/forever-ever.jpg";
import thatSunriseImg from "@/assets/that-sunrise.jpg";
import yourEyesImg from "@/assets/your-eyes.jpg";

const photos = [
  { id: 1, src: yourEyesImg, caption: "Your eyes 👀✨", rotate: -8, top: "2%", left: "5%", scale: 1.06, objectPosition: "center 30%" },
  { id: 2, src: "/videos/your-smile.mov", caption: "Your smile 🦋", rotate: 6, top: "5%", right: "8%", isVideo: true },
  { id: 3, src: "/videos/being-silly.mov", caption: "Being silly 😂", rotate: -5, top: "35%", left: "12%", isVideo: true },
  { id: 4, src: coupleTogetherImg, caption: "Us together 💗", rotate: 7, top: "32%", right: "5%", objectPosition: "center 30%", scale: 1.05 },
  { id: 5, src: thatSunriseImg, caption: "That sunrise 🌅", rotate: -6, top: "62%", left: "3%", objectPosition: "center 60%" },
  { id: 6, src: foreverEverImg, caption: "Forever & ever 💕", rotate: 4, top: "65%", right: "10%", objectPosition: "center 20%" },
  { id: 7, src: papoyeeImg, caption: "My papoyeee ✨", rotate: -3, top: "48%", left: "38%", scale: 1.02 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.7, y: 40 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

const PhotoGallery = () => {
  return (
    <section className="section-padding bg-romantic">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient mb-4">
            Our Memories 📸
          </h2>
          <p className="text-muted-foreground font-body">Every moment with you is a treasure.</p>
        </motion.div>

        {/* Scattered polaroid layout on desktop, grid on mobile */}
        {/* Desktop: absolute positioned scattered look */}
        <div className="hidden lg:block relative" style={{ height: "900px" }}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full h-full"
          >
            {photos.map((photo) => (
              <motion.div
                key={photo.id}
                variants={item}
                className="absolute w-52"
                style={{
                  top: photo.top,
                  left: photo.left,
                  right: (photo as any).right,
                  rotate: `${photo.rotate}deg`,
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 0,
                  zIndex: 50,
                  transition: { type: "spring", stiffness: 200 },
                }}
              >
                <div className="bg-primary-foreground p-2.5 pb-12 rounded-sm shadow-lg cursor-pointer"
                  style={{ boxShadow: "0 4px 20px hsl(270 50% 65% / 0.15)" }}>
                  {(photo as any).isVideo ? (
                    <video
                      src={photo.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-48 object-cover rounded-sm"
                    />
                  ) : (
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-48 object-cover rounded-sm"
                      style={{
                        ...((photo as any).scale ? { transform: `scale(${(photo as any).scale})` } : {}),
                        ...((photo as any).objectPosition ? { objectPosition: (photo as any).objectPosition } : {}),
                      }}
                    />
                  )}
                  <p className="font-script text-sm text-foreground/70 text-center mt-2 absolute bottom-3 left-0 right-0">
                    {photo.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile: grid layout */}
        <motion.div
          className="lg:hidden grid grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.id}
              variants={item}
              className={i === 6 ? "col-span-2 flex justify-center" : ""}
              style={{ rotate: `${photo.rotate}deg` }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <div className="bg-primary-foreground p-2 pb-10 rounded-sm shadow-lg relative"
                style={{ boxShadow: "0 4px 20px hsl(270 50% 65% / 0.15)", maxWidth: i === 6 ? "200px" : undefined }}>
                {(photo as any).isVideo ? (
                  <video
                    src={photo.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-36 object-cover rounded-sm"
                  />
                ) : (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-36 object-cover rounded-sm"
                    style={{
                      ...((photo as any).scale ? { transform: `scale(${(photo as any).scale})` } : {}),
                      ...((photo as any).objectPosition ? { objectPosition: (photo as any).objectPosition } : {}),
                    }}
                  />
                )}
                <p className="font-script text-xs text-foreground/70 text-center mt-1.5 absolute bottom-2 left-0 right-0">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video / GIF Frame */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="relative"
            style={{ rotate: "-3deg" }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div
              className="bg-primary-foreground p-3 pb-14 rounded-sm shadow-lg"
              style={{ boxShadow: "0 8px 40px hsl(270 50% 65% / 0.2)" }}
            >
              <div className="w-72 h-48 md:w-96 md:h-64 rounded-sm overflow-hidden relative">
                <video
                  src="/videos/cutest-moment.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-script text-base text-foreground/70 text-center absolute bottom-4 left-0 right-0">
                Our cutest moment 🎥💜
              </p>
            </div>

            {/* Decorative tape */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rounded-sm opacity-50"
              style={{ background: "hsl(270 50% 85% / 0.6)", transform: "translateX(-50%) rotate(2deg)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotoGallery;
