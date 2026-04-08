import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#FFD700]/5 to-transparent rounded-full blur-3xl" />

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
            <span className="gradient-text"> Digital Innovation</span>
          </h2>
          <p className="section-copy">
            We are a team of technologists, designers, and operators focused on building digital
            experiences that feel premium, clear, and commercially effective.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
              A product studio for ambitious businesses ready to move with clarity.
            </h3>
            <p className="mb-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              We bring strategy, interface design, and engineering into one execution flow so your
              website and digital systems feel intentional at every touchpoint.
            </p>
            <p className="mb-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              From AI-powered workflows to immersive products and enterprise platforms, we help
              brands modernize how they present, operate, and scale.
            </p>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFD700] transition-all duration-300 hover:gap-3"
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
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#FFD700]/10 blur-3xl" />

              <div className="relative z-10 space-y-8">
                <div>
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#FFD700]">
                    What We Build
                  </p>
                  <h4 className="text-2xl font-semibold text-white">
                    Premium digital experiences with operational depth.
                  </h4>
                </div>

                <div className="grid gap-4">
                  {[
                    'Elegant interfaces with stronger spacing, hierarchy, and clarity',
                    'Scalable systems designed for business performance, not just visuals',
                    'AI, automation, and immersive solutions shaped around real use cases',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/8 bg-white/3 p-5 text-gray-300"
                    >
                      {item}
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
