import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`content-shell flex items-center justify-between gap-6 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'border border-[#1f2937]/8 bg-white/72 py-3 shadow-[0_20px_50px_rgba(38,45,56,0.08)] backdrop-blur-xl'
              : 'py-2'
          }`}
        >
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1f2937]/10 bg-white/70 shadow-[0_12px_30px_rgba(38,45,56,0.08)]">
              <Sparkles className="h-5 w-5 text-[#d4b26a]" />
            </div>
            <div>
              <span className="serif-display block text-2xl font-semibold tracking-tight text-[#20242c]">
                Eighty Miles
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.3em] text-[#7a7f8b] md:block">
                Precision Digital Systems
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-8 rounded-full border border-[#1f2937]/8 bg-white/65 px-6 py-3 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#5d6574] transition-colors duration-300 hover:text-[#20242c]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm">
              Begin a Project
            </a>
          </div>

          <button
            className="lg:hidden rounded-full border border-[#1f2937]/10 bg-white/70 p-2 text-[#20242c] shadow-[0_10px_30px_rgba(38,45,56,0.08)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-[2rem] border border-[#1f2937]/8 bg-white/92 shadow-[0_30px_80px_rgba(38,45,56,0.12)] backdrop-blur-xl lg:hidden"
          >
            <div className="content-shell flex flex-col gap-4 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-lg font-medium text-[#5d6574] transition-colors duration-300 hover:text-[#20242c]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
