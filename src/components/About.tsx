import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Orbit, Boxes, WandSparkles } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding theme-grid relative overflow-hidden">
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-[#d4b26a]/12 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-white/6 blur-3xl" />

      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">About Us</span>
          <h2 className="section-title">
            We combine strategy, engineering,
            <span className="gradient-text"> and visual restraint.</span>
          </h2>
          <p className="section-copy">
            The goal is not more interface. The goal is a clearer, sharper, more convincing digital
            presence that communicates confidence before a word is read.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="serif-display mb-6 text-3xl font-semibold text-[#20242c] md:text-5xl">
              Your technology partner when presentation and infrastructure both need to look exact.
            </h3>
            <p className="mb-6 max-w-2xl text-base leading-8 text-[#5d6574] md:text-lg">
              We bring strategy, interface design, and engineering into one execution flow so your
              website, platforms, and digital systems feel deliberate at every touchpoint.
            </p>
            <p className="mb-8 max-w-2xl text-base leading-8 text-[#5d6574] md:text-lg">
              From AI-powered workflows to immersive products and enterprise platforms, we help
              brands modernize how they present, operate, and scale without falling into generic
              agency visuals.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b26a] transition-all duration-300 hover:gap-3"
            >
              Explore Capabilities
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-6"
          >
            <div className="theme-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d4b26a]/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#d4b26a]/18 blur-3xl" />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#d4b26a]">
                    What We Build
                  </p>
                  <h4 className="serif-display text-3xl font-semibold text-[#20242c]">
                    Technology with composure and measurable depth.
                  </h4>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: Orbit,
                      text: 'Immersive experiences designed to turn interaction into memorability.',
                    },
                    {
                      icon: Boxes,
                      text: 'Scalable systems built for operations, integrations, and business growth.',
                    },
                    {
                      icon: WandSparkles,
                      text: 'AI, automation, and spatial technology shaped around real use cases.',
                    },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="rounded-2xl border border-[#1f2937]/8 bg-white/74 p-5 text-[#5d6574] shadow-[0_16px_40px_rgba(38,45,56,0.08)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1f2937]/8 bg-white text-[#d4b26a]">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <p className="leading-7">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
