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
              ? 'border border-white/80 bg-white/80 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl'
              : 'py-2'
          }`}
        >
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] shadow-[0_12px_30px_rgba(29,78,216,0.25)]">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="block text-lg font-semibold tracking-tight text-slate-950">
                Eighty Miles
              </span>
              <span className="hidden text-[11px] uppercase tracking-[0.26em] text-slate-500 md:block">
                Interactive Tech Systems
              </span>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-8 rounded-full border border-slate-200 bg-white/80 px-6 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm">
              Start a Conversation
            </a>
          </div>

          <button
            className="lg:hidden rounded-full border border-slate-200 bg-white/80 p-2 text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
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
            className="fixed top-20 left-4 right-4 z-40 rounded-[2rem] border border-slate-200 bg-white/95 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:hidden"
          >
            <div className="content-shell flex flex-col gap-4 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-lg font-medium text-slate-700 transition-colors duration-300 hover:text-slate-950"
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
