import { motion } from "framer-motion";
import heroImage from "@/public/images/uzz.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt="Silhouette overlooking Berlin skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-fade-bottom" />
      </div>
{/* Black shadow overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Existing gradient (optional) */}
  <div className="absolute inset-0 bg-fade-bottom" />

      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm font-semibold uppercase tracking-[0.4em] text-primary mb-4"
        >
          A Life Between Worlds
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none text-gold-gradient mb-6"
        >
          My Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-xl text-lg text-secondary-foreground font-light leading-relaxed"
        >
          From humble beginnings to the corridors of power in Germany — 
          a story of ambition, resilience, and extraordinary encounters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-primary/50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
