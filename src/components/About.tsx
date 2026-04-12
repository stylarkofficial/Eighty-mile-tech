import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Orbit, Boxes, WandSparkles } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-[#bfdbfe]/40 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#fde68a]/40 blur-3xl" />

      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">About Us</span>
          <h2 className="section-title">
            Pioneering the Future of
            <span className="gradient-text"> Interactive and Immersive Innovation</span>
          </h2>
          <p className="section-copy">
            We blend strategy, engineering, immersive experiences, and intelligent systems to help
            ambitious businesses build a stronger digital edge.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
              Your tech partner for businesses ready to move with clarity and momentum.
            </h3>
            <p className="mb-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              We bring strategy, interface design, and engineering into one execution flow so your
              website, platforms, and digital systems feel intentional at every touchpoint.
            </p>
            <p className="mb-8 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              From AI-powered workflows to immersive products and enterprise platforms, we help
              brands modernize how they present, operate, and scale across markets.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1d4ed8] transition-all duration-300 hover:gap-3"
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
            <div className="glass rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#1d4ed8]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#bfdbfe]/70 blur-3xl" />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#1d4ed8]">
                    What We Build
                  </p>
                  <h4 className="text-2xl font-semibold text-slate-950">
                    Innovation with measurable business depth.
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
                      className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-white">
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
