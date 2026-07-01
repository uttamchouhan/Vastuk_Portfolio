import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenLine, Hammer, KeyRound } from "lucide-react";
import { processSteps } from "../data/portfolio";

const stepMeta = [
  { icon: Search, number: "01" },
  { icon: PenLine, number: "02" },
  { icon: Hammer, number: "03" },
  { icon: KeyRound, number: "04" },
];

function ProcessShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-stone-50 to-white"
      aria-labelledby="process-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-stone-400">Our Process</span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-stone-900 mt-3 tracking-tight"
          >
            From Vision to Reality
          </h2>
          <p className="text-stone-500 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A thoughtful four-step journey — from your first conversation to the moment you walk into your finished space.
          </p>
        </motion.div>

        {/* Progress track */}
        <div className="hidden md:block relative mb-10 px-8">
          <div className="h-px bg-stone-200" />
          <motion.div
            className="absolute top-0 left-8 h-px bg-stone-800 origin-left"
            animate={{ width: `calc(${(activeStep / (processSteps.length - 1)) * 100}% - 4rem)` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: "calc(100% - 4rem)" }}
          />
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {processSteps.map((step, index) => {
            const { icon: Icon, number } = stepMeta[index];
            const isActive = index === activeStep;

            return (
              <motion.button
                key={step.id}
                type="button"
                onClick={() => setActiveStep(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`relative text-left rounded-2xl p-6 border transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-white border-stone-300 shadow-md shadow-stone-200/60"
                    : "bg-stone-50/80 border-stone-200/80 hover:border-stone-300 hover:bg-white"
                }`}
                aria-pressed={isActive}
              >
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                      isActive ? "text-stone-800" : "text-stone-400"
                    }`}
                  >
                    {number}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-stone-900 text-white" : "bg-stone-200/70 text-stone-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.75} />
                  </div>
                </div>

                <h3 className="text-lg font-medium text-stone-900">{step.label}</h3>
                <p className="text-stone-500 text-sm mt-1.5 leading-relaxed">{step.description}</p>

                {isActive && (
                  <motion.div
                    layoutId="process-active"
                    className="absolute bottom-0 left-6 right-6 h-0.5 bg-stone-800 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active step detail */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 text-center px-4"
        >
          <p className="text-stone-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            <span className="font-medium text-stone-800">{processSteps[activeStep].label} — </span>
            {activeStep === 0 && "We listen to how you live, visit your space, and map out what matters most to you."}
            {activeStep === 1 && "Mood boards, 3D renders, and material selections — so you see your space before we build it."}
            {activeStep === 2 && "Our craftsmen bring the design to life with precision, quality materials, and regular updates."}
            {activeStep === 3 && "Final styling, walkthrough, and handover — your space, ready to live in."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessShowcase;
