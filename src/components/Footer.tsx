import { ArrowUpRight, Sparkles } from 'lucide-react';

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
    <footer className="border-t border-[#1f2937]/8 bg-[#fffdfa]">
      <div className="content-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-[#1f2937]/8 pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="max-w-2xl">
            <a href="#" className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1f2937]/8 bg-white shadow-[0_12px_30px_rgba(38,45,56,0.08)]">
                <Sparkles className="w-5 h-5 text-[#d4b26a]" />
              </div>
              <span className="serif-display text-3xl font-semibold text-[#20242c]">Eighty Miles</span>
            </a>

            <p className="serif-display text-4xl font-semibold leading-tight text-[#20242c] md:text-5xl">
              Interactive systems, immersive experiences, and future-ready engineering.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-[#5d6574]">
              We act as your tech partner across AI, automation, immersive experiences, cloud
              systems, and enterprise execution.
            </p>
          </div>

          <div className="theme-panel rounded-[2rem] p-8 md:p-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b26a]">
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
          <p>&copy; {new Date().getFullYear()} Eighty Miles. All rights reserved.</p>
          <p>Built for ambitious modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}
