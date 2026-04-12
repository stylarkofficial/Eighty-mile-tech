import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Palette, Code, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We dive deep into understanding your business, challenges, and goals to define the perfect solution strategy.',
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'Our experts craft intuitive architectures and user experiences that align with your vision and industry best practices.',
  },
  {
    icon: Code,
    title: 'Develop',
    description: 'Using cutting-edge technologies and agile methodologies, we build robust, scalable solutions with quality at the core.',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Seamless deployment with comprehensive testing, training, and support ensures a smooth transition to production.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'We continue to optimize and scale your solution, ensuring it grows with your business and evolving needs.',
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-[#f8fafc]">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#dbeafe]/60 blur-3xl" />
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Our Process</span>
          <h2 className="section-title">
            From Vision to
            <span className="gradient-text"> Reality</span>
          </h2>
          <p className="section-copy">
            We combine strategic discovery, design thinking, engineering, launch support, and
            ongoing scale so every engagement moves with clarity.
          </p>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 transform bg-gradient-to-r from-transparent via-[#1d4ed8]/20 to-transparent" />

          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="h-4 w-4 rounded-full bg-[#1d4ed8] shadow-[0_0_0_8px_rgba(219,234,254,0.9)]" />
                </div>

                <div className={`${i % 2 === 0 ? 'pb-24' : 'pt-24'}`}>
                  <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 group hover:-translate-y-2">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-medium text-[#1d4ed8]">Step {i + 1}</span>
                      <h3 className="mt-1 mb-3 text-xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-[#1d4ed8]">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute bottom-0 left-6 top-0 w-0.5 bg-gradient-to-b from-[#1d4ed8]/30 via-[#1d4ed8]/30 to-transparent" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 transform rounded-full bg-[#1d4ed8] shadow-[0_0_0_8px_rgba(219,234,254,0.9)]" />

                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-[#1d4ed8]">Step {i + 1}</span>
                        <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm leading-7 text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
