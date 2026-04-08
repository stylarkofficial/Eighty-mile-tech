import { ArrowUpRight, Zap } from 'lucide-react';

const footerLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Vision', href: '#vision' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#5A6168] border-t border-white/15">
      <div className="content-shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-white/8 pb-12 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="max-w-2xl">
            <a href="#" className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF44F]">
                <Zap className="w-6 h-6 text-[#000000]" />
              </div>
              <span className="text-xl font-semibold gradient-text">Eighty Mile Tech</span>
            </a>

            <p className="text-2xl font-semibold leading-tight text-white md:text-4xl">
              Crisp strategy. Premium execution. Powerful digital products.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/78">
              We design and build elegant business experiences across AI, automation, and
              immersive technology.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#FFF44F]/18 bg-white/[0.03] p-8 md:p-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#FFF44F]">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/82 transition-colors duration-300 hover:text-[#FFF44F]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFF44F] transition-all duration-300 hover:gap-3"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Eighty Mile Tech. All rights reserved.</p>
          <p>Built for ambitious modern businesses.</p>
        </div>
      </div>
    </footer>
  );
}
