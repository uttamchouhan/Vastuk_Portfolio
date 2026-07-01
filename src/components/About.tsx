import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ScribbleIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={`fill-current ${className}`} aria-hidden="true">
      <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
    </svg>
  );
}

const floatingIcons = [
  { className: "top-10 left-[5%] w-12 h-12 sm:w-20 sm:h-20 text-blue-500", delay: 0 },
  { className: "top-[18%] right-[5%] w-10 h-10 sm:w-14 sm:h-14 text-pink-500", delay: 0.2 },
  { className: "bottom-[18%] left-[8%] w-14 h-14 sm:w-24 sm:h-24 text-purple-500", delay: 0.4 },
  { className: "bottom-12 right-[8%] w-10 h-10 sm:w-16 sm:h-16 text-emerald-500", delay: 0.6 },
  { className: "top-[40%] right-[3%] w-8 h-8 sm:w-12 sm:h-12 text-yellow-500 hidden sm:block", delay: 0.8 },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-[70vh] sm:min-h-[85vh] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_60%),linear-gradient(to_bottom,#F5F9FD,#E5EDF7,#D7E5F6)]"
      aria-labelledby="about-heading"
    >
      {floatingIcons.map((icon, i) => (
        <motion.div
          key={i}
          className={`absolute ${icon.className}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -12, 0], rotate: [0, 6, -6, 0] }}
          transition={{
            opacity: { delay: icon.delay, duration: 0.6 },
            scale: { delay: icon.delay, duration: 0.6, type: "spring" },
            y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
            rotate: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
          }}
        >
          <ScribbleIcon className="w-full h-full" />
        </motion.div>
      ))}

      <div className="relative flex justify-center items-center min-h-[70vh] sm:min-h-[85vh] py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center px-4 sm:px-6 text-center max-w-3xl"
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ScribbleIcon className="w-14 h-14 sm:w-20 sm:h-20 text-orange-500 mb-6" />
          </motion.div>

          <h2 id="about-heading" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-zinc-900">
            Every Detail,
            <br />
            <span className="text-zinc-600">Deliberately Placed</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-neutral-600 tracking-tight mt-5 max-w-2xl leading-relaxed">
            For 25 years, we've paired considered materials with honest craftsmanship —
            turning empty rooms into spaces our clients actually live in.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 sm:px-10 py-3 rounded-full bg-blue-500 text-white mt-8 flex items-center gap-2 hover:bg-blue-600 transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
