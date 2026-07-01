function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="text-2xl font-semibold text-white">Vastuk.</span>
            <p className="mt-3 text-sm leading-relaxed">
              Premium interior design studio in Mumbai. Crafting spaces that tell your story since 2001.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Residential Design</li>
              <li>Commercial Spaces</li>
              <li>Hospitality Design</li>
              <li>Vastu-Compliant Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-xs">
          <p>&copy; {currentYear} Vastuk Interior Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
