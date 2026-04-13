import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../../logo.png';

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
          className={`content-shell flex items-center justify-between gap-3 rounded-full transition-all duration-300 md:gap-6 ${
            isScrolled
              ? 'border border-[#1f2937]/8 bg-white/72 py-3 shadow-[0_20px_50px_rgba(38,45,56,0.08)] backdrop-blur-xl'
              : 'py-2'
          }`}
        >
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Eighty Mile Tech"
              className="h-10 w-auto object-contain md:h-12 lg:h-14"
            />
            <div className="text-center leading-none">
              <span className="block text-[0.95rem] font-bold text-[#20242c] md:text-lg lg:text-xl">
                Eighty Mile
              </span>
              <span className="mt-1 block text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#20242c] md:text-xs lg:text-[0.95rem]">
                Tech
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

          <div className="hidden min-[1150px]:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm">
              Begin a Project
            </a>
          </div>

          <button
            className="min-[1150px]:hidden rounded-full border border-[#1f2937]/10 bg-white/70 p-2 text-[#20242c] shadow-[0_10px_30px_rgba(38,45,56,0.08)]"
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
