import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Compass, Target } from 'lucide-react';

const pillars = [
  {
    icon: Compass,
    eyebrow: 'Our Vision',
    title: 'Technology that feels clear, useful, and future ready.',
    description:
      'We aim to shape digital products and business systems that remove friction, elevate customer experience, and create long-term strategic advantage.',
    points: [
      'AI-led solutions built with practical business outcomes',
      'Immersive products that improve clarity and engagement',
      'Platforms designed for scale, resilience, and speed',
    ],
  },
  {
    icon: Target,
    eyebrow: 'Our Mission',
    title: 'Turn bold business goals into elegant working systems.',
    description:
      'We partner with ambitious teams to design, build, and launch modern digital solutions with strong execution, measurable value, and a premium user experience.',
    points: [
      'Solve complex workflows with smart automation',
      'Reduce operational drag with cleaner digital journeys',
      'Ship with precision, then refine with continuous support',
    ],
  },
];

export default function MissionVision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="vision" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFF44F]/8 blur-3xl" />

      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Vision & Mission</span>
          <h2 className="section-title">
            The strategic core behind every
            <span className="gradient-text"> product we build</span>
          </h2>
          <p className="section-copy">
            A premium digital presence starts with a clear direction. This is the standard we use
            to shape every engagement, delivery, and outcome.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.eyebrow}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * index }}
              className="glass rounded-[2rem] p-8 md:p-10"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF44F]">
                  <pillar.icon className="h-7 w-7 text-[#000000]" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FFF44F]">
                  {pillar.eyebrow}
                </p>
              </div>

              <h3 className="mb-5 text-2xl font-semibold leading-tight text-white md:text-3xl">
                {pillar.title}
              </h3>

              <p className="mb-8 max-w-xl text-base leading-8 text-white/78 md:text-lg">
                {pillar.description}
              </p>

              <ul className="space-y-4">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/86">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FFF44F]" />
                    <span className="leading-7">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
