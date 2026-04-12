import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Search,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    detail: 'Research and strategy framing',
    outputs: ['Goals audit', 'Opportunity mapping', 'System requirements'],
  },
  {
    icon: Palette,
    title: 'Design',
    detail: 'Experience and interaction design',
    outputs: ['UX direction', 'Flow design', 'Visual system'],
  },
  {
    icon: Code,
    title: 'Develop',
    detail: 'Build and technical execution',
    outputs: ['Core engineering', 'Integrations', 'Quality assurance'],
  },
  {
    icon: Rocket,
    title: 'Deploy',
    detail: 'Launch and go-live delivery',
    outputs: ['Production setup', 'Release controls', 'Operational handoff'],
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    detail: 'Optimization and expansion',
    outputs: ['Performance tuning', 'Usage insight', 'Growth roadmap'],
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section-padding theme-soft relative overflow-hidden">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-[#d4b26a]/10 blur-3xl" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#cfd6df]/18 blur-3xl" />

      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Our Process</span>
          <h2 className="section-title">
            A clean delivery system with
            <span className="gradient-text"> space, clarity, and premium flow.</span>
          </h2>
          <p className="section-copy">
            Every engagement moves through a defined progression, from strategic discovery to long-term scale,
            with enough breathing room for each phase to feel intentional and easy to understand.
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="theme-panel relative overflow-hidden rounded-[3rem] px-10 py-16 xl:px-12 2xl:px-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,178,106,0.14),_transparent_28%)]" />

            <div className="relative z-10">
              <div className="relative mb-12 px-3">
                <div className="absolute left-[8%] right-[8%] top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#20242c]/0 via-[#d4b26a]/30 to-[#20242c]/0" />
                <div className="grid grid-cols-5 gap-6 xl:gap-7 2xl:gap-8">
                  {steps.map((step, index) => (
                    <motion.div
                      key={`${step.title}-marker`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="relative flex flex-col items-center"
                    >
                      <div className="mb-4 rounded-full border border-[#20242c]/8 bg-white/72 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b93a0] shadow-[0_10px_24px_rgba(38,45,56,0.06)]">
                        Step {index + 1}
                      </div>
                      <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-[4px] border-[#fffdfa] bg-[#d4b26a] shadow-[0_0_0_10px_rgba(212,178,106,0.1)]" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-5 gap-6 xl:gap-7 2xl:gap-8">
                {steps.map((step, index) => (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 36 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="relative min-w-0"
                  >
                    <div className="theme-card card-tilt relative h-full min-w-0 overflow-hidden rounded-[2rem] p-5 xl:p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,178,106,0.12),_transparent_36%)]" />

                      <div className="relative z-10 min-w-0">
                        <div className="mb-5 flex items-center justify-between gap-3">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.1rem] border border-[#20242c]/8 bg-white/76 text-[#20242c] shadow-[0_16px_32px_rgba(38,45,56,0.07)]">
                            <step.icon className="h-5 w-5" />
                          </div>
                          <ArrowRight className="h-4 w-4 shrink-0 text-[#d4b26a]/55" />
                        </div>

                        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#d4b26a]">
                          {step.detail}
                        </p>
                        <h3 className="serif-display mt-3 text-[1.7rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#20242c] text-balance xl:text-[1.85rem] 2xl:text-[2rem]">
                          {step.title}
                        </h3>

                        <div className="mt-6 space-y-2.5">
                          {step.outputs.map((output) => (
                            <div
                              key={output}
                              className="flex min-w-0 items-center justify-between gap-3 rounded-[0.95rem] border border-[#20242c]/7 bg-white/72 px-3.5 py-3 text-[0.8rem] font-medium leading-5 text-[#4f5968]"
                            >
                              <span className="min-w-0 flex-1 text-justify [text-align-last:left]">{output}</span>
                              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#d4b26a]" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:hidden">
          {steps.map((step, i) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="theme-card relative overflow-hidden rounded-[1.8rem] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,178,106,0.14),_transparent_32%)]" />
              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#20242c]/8 bg-white/70 text-[#20242c]">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4b26a]">
                    Step {i + 1}
                  </span>
                </div>
                <h3 className="serif-display text-4xl font-semibold text-[#20242c]">{step.title}</h3>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#8b93a0]">{step.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.outputs.map((output) => (
                    <span
                      key={output}
                      className="rounded-full border border-[#20242c]/8 bg-white/70 px-3 py-2 text-xs font-medium text-[#5d6574]"
                    >
                      {output}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
