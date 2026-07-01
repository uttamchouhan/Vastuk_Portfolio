import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">Contact</span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mt-3">
            Let's Design Your Space
          </h2>
          <p className="text-zinc-500 mt-4 text-sm sm:text-base leading-relaxed">
            Ready to transform your home or workspace? Book a free consultation and let's discuss your vision.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-zinc-600">
              <MapPin className="w-5 h-5 text-zinc-400 shrink-0" />
              <span>256, Lalwani Bhawan Shop no 4UP Sane Guruji Marg,<br/>Opp Kasturba Hospital Satrasta Mumbai 400011</span>
            </li>
            <li className="flex items-center gap-3 text-zinc-600">
              <Phone className="w-5 h-5 text-zinc-400 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-zinc-900 transition-colors">+91 9820035670 / +91 8779338224</a>
            </li>
            <li className="flex items-center gap-3 text-zinc-600">
              <Mail className="w-5 h-5 text-zinc-400 shrink-0" />
              <a href="mailto:hello@vastuk.design" className="hover:text-zinc-900 transition-colors">vinterior.ml@gmail.com</a>
            </li>
          </ul>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-600 mb-1.5">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-zinc-600 mb-1.5">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-colors"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="project" className="block text-sm text-zinc-600 mb-1.5">Project Type</label>
            <select
              id="project"
              name="project"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-colors"
            >
              <option>Residential</option>
              <option>Commercial</option>
              <option>Hospitality</option>
              <option>Vastu Design</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-zinc-600 mb-1.5">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3 bg-zinc-950 text-white rounded-full flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
          >
            Send Message <Send className="w-4 h-4" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
