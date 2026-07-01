import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { portfolioProjects } from "../data/portfolio";

function Portfolio() {
  const [selected, setSelected] = useState<(typeof portfolioProjects)[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="projects-heading">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 md:mb-14"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">Portfolio</span>
        <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mt-3">
          Selected Projects
        </h2>
        <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Explore spaces we've crafted across Mumbai — each one a unique collaboration with our clients.
        </p>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <AnimatePresence mode="popLayout">
          {portfolioProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelected(project)}
            >
              <img
                src={project.image}
                alt={`${project.title} — residential interior design in ${project.location}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-lg font-medium">{project.title}</h3>
                <p className="text-white/60 text-sm flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MapPin className="w-3 h-3" /> {project.location}
                </p>
              </div>
              <motion.div
                className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl transition-colors duration-500"
                whileHover={{ boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
              />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-zinc-900">{selected.title}</h3>
                <p className="text-zinc-500 mt-2 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {selected.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Portfolio;
