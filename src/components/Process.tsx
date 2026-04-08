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
    <section id="process" className="section-padding bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
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
            Our proven methodology ensures successful delivery of every project, from initial
            concept to long-term success.
          </p>
        </motion.div>

        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent transform -translate-y-1/2" />

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
                  <div className="w-4 h-4 bg-[#FFD700] rounded-full glow" />
                </div>

                <div className={`${i % 2 === 0 ? 'pb-24' : 'pt-24'}`}>
                  <div className="glass rounded-[1.5rem] p-6 hover:glow-sm transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFC107] flex items-center justify-center mb-4 mx-auto">
                      <step.icon className="w-6 h-6 text-[#0A0A0A]" />
                    </div>
                    <div className="text-center">
                      <span className="text-[#FFD700] text-sm font-medium">Step {i + 1}</span>
                      <h3 className="text-xl font-bold mt-1 mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-7">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFD700]/30 via-[#FFD700]/30 to-transparent" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-4 top-6 w-4 h-4 bg-[#FFD700] rounded-full glow transform -translate-x-1/2" />

                  <div className="glass rounded-[1.5rem] p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFC107] flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-[#0A0A0A]" />
                      </div>
                      <div>
                        <span className="text-[#FFD700] text-sm font-medium">Step {i + 1}</span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-7">{step.description}</p>
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
