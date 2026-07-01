import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { featureSections } from "../data/portfolio";

function FeatureSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const index = Math.min(
        featureSections.length - 1,
        Math.floor(v * featureSections.length)
      );
      setActiveIndex(index);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${featureSections.length * 100}vh` }}
      aria-labelledby="features-heading"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-gradient-to-b from-white via-zinc-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left — Linear-style text crossfade */}
          <div className="relative min-h-[280px] sm:min-h-[320px]">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4 block">
              How We Work
            </span>
            <h2 id="features-heading" className="sr-only">Our Design Approach</h2>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-sm text-blue-600 font-medium">
                  {featureSections[activeIndex].tag}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mt-2 leading-tight">
                  {featureSections[activeIndex].title}
                </h3>
                <p className="text-zinc-500 mt-4 text-base sm:text-lg leading-relaxed max-w-md">
                  {featureSections[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="flex gap-2 mt-8" role="tablist" aria-label="Feature sections">
              {featureSections.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-8 bg-zinc-900" : "w-4 bg-zinc-300"
                  }`}
                  onClick={() => {
                    const section = containerRef.current;
                    if (!section) return;
                    const top = section.offsetTop + (i / featureSections.length) * section.offsetHeight;
                    window.scrollTo({ top, behavior: "smooth" });
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — image with parallax */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={featureSections[activeIndex].image}
                alt={featureSections[activeIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSections;
