import { useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/Loader";
import FloatingHearts from "@/components/FloatingHearts";
import MusicToggle from "@/components/MusicToggle";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LoveStorySection from "@/components/LoveStorySection";
import ThingsSheLikes from "@/components/ThingsSheLikes";
import ThingsILove from "@/components/ThingsILove";
import RulesSection from "@/components/RulesSection";
import PromisesSection from "@/components/PromisesSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import FinalSection from "@/components/FinalSection";
import Footer from "@/components/Footer";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";
import ClickCounter from "@/components/ClickCounter";
import CursorGlitterTrail from "@/components/CursorHeartTrail";
import PhotoGallery from "@/components/PhotoGallery";


const Index = () => {
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleEnter = useCallback(() => {
    setEntered(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <div className={`heart-cursor ${!entered ? 'overflow-hidden h-screen' : ''}`}>
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoaderComplete} />}
      </AnimatePresence>

      <FloatingHearts />
      <MusicToggle />
      <CursorGlitterTrail />
      <KonamiEasterEgg />
      <ClickCounter />

      {!loading && (
        <>
          <HeroSection onEnter={handleEnter} />

          <AnimatePresence>
            {entered && (
              <motion.div
                ref={contentRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <AboutSection />
                <PhotoGallery />
                <LoveStorySection />
                <ThingsSheLikes />
                <ThingsILove />
                <RulesSection />
                <PromisesSection />
                <LoveLetterSection />
                <FinalSection />
                <div className="h-[20vh] md:h-[30vh]" />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default Index;
