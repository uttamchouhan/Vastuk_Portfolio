import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl w-full"
      >
        <motion.span
          className="inline-block text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-500 mb-6 sm:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Interior Design Studio · Mumbai
        </motion.span>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] text-zinc-900">
          Spaces That Tell
          <br />
          <span className="bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 bg-clip-text text-transparent">
            Your Story
          </span>
        </h1>

        <p className="pt-6 sm:pt-8 text-lg sm:text-xl md:text-2xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          25 years of transforming interiors across Mumbai — residential, commercial, and Vastu-aligned design.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 mt-10 sm:mt-12 justify-center">
          <button
            type="button"
            onClick={() => scrollTo("#projects")}
            className="group px-6 sm:px-8 py-3 bg-zinc-950 text-white rounded-full flex items-center gap-2 hover:bg-zinc-800 transition-colors w-full sm:w-auto justify-center"
          >
            Explore Our Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="px-6 sm:px-8 py-3 border border-zinc-300 text-zinc-700 rounded-full hover:border-zinc-500 transition-colors w-full sm:w-auto"
          >
            Book Consultation
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
