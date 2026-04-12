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
    <footer className="border-t border-slate-200 bg-white">
      <div className="content-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-slate-200 pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="max-w-2xl">
            <a href="#" className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1d4ed8] shadow-[0_12px_30px_rgba(29,78,216,0.2)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-950">Eighty Miles</span>
            </a>

            <p className="text-2xl font-semibold leading-tight text-slate-950 md:text-4xl">
              Interactive systems, immersive experiences, and future-ready engineering.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              We act as your tech partner across AI, automation, immersive experiences, cloud
              systems, and enterprise execution.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:p-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-700 transition-colors duration-300 hover:text-slate-950"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1d4ed8] transition-all duration-300 hover:gap-3"
            >
              Start a Conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Eighty Miles. All rights reserved.</p>
          <p>Built for ambitious modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}
