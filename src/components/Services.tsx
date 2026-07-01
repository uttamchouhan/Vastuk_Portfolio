import { motion } from "framer-motion";
import { Home, Building2, Sparkles, Compass, ArrowRight } from "lucide-react";
import { services } from "../data/portfolio";

const iconMap = {
  home: Home,
  building: Building2,
  sparkles: Sparkles,
  compass: Compass,
};

function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-zinc-50" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">Services</span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mt-3">
            What We Design
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mb-5 group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
                <p className="text-zinc-500 mt-2 text-sm sm:text-base leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-zinc-400 mt-4 group-hover:text-zinc-900 transition-colors">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
