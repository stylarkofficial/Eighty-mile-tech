import { ArrowUpRight } from 'lucide-react';
import logoImg from '../../logo.png';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Industries', href: '#industries' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1f2937]/8 bg-white">
      <div className="content-shell py-14 md:py-20">
        <div className="grid gap-8 border-b border-[#1f2937]/8 pb-10 md:gap-12 md:pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="max-w-2xl">
            <a href="#" className="mb-6 inline-flex items-center gap-3">
              <img
                src={logoImg}
                alt="Eighty Mile Tech"
                className="h-12 w-auto object-contain sm:h-14 md:h-20"
              />
              <div className="text-center leading-none">
                <span className="block text-[1.45rem] font-bold text-[#20242c] sm:text-2xl md:text-3xl">
                  Eighty Mile
                </span>
                <span className="mt-1 block text-[0.8rem] font-bold uppercase tracking-[0.14em] text-[#20242c] sm:text-sm md:text-lg">
                  Tech
                </span>
              </div>
            </a>

            <p className="serif-display text-[2.35rem] font-semibold leading-[0.98] text-[#20242c] sm:text-4xl md:text-5xl">
              Interactive systems, immersive experiences, and future-ready engineering.
            </p>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-7 text-[#5d6574] md:text-base md:leading-8">
              We act as your tech partner across AI, automation, immersive experiences, cloud
              systems, and enterprise execution.
            </p>
          </div>

          <div className="theme-panel rounded-[1.6rem] p-6 md:rounded-[2rem] md:p-10">
            <p className="mb-5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[#d4b26a] md:text-sm md:tracking-[0.22em]">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-[#5d6574] transition-colors duration-300 hover:text-[#20242c]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b26a] transition-all duration-300 hover:gap-3"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-[#6e7785] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Eighy Mile. All rights reserved.</p>
          <p>Built for ambitious modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}
