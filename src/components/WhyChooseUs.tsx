import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Scale, DollarSign, Rocket, Settings, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description:
      'We leverage the latest advancements in AI, ML, AR/VR, and cloud computing to deliver solutions that keep you ahead of the competition.',
  },
  {
    icon: Scale,
    title: 'Scalable Architecture',
    description:
      'Our solutions are built to grow with your business, from startup to enterprise, ensuring seamless scaling without compromise.',
  },
  {
    icon: DollarSign,
    title: 'Cost-Efficient Solutions',
    description:
      'Maximize ROI with optimized solutions that deliver enterprise-grade capabilities at competitive price points.',
  },
  {
    icon: Rocket,
    title: 'Fast Deployment',
    description:
      'Agile methodologies and proven frameworks enable rapid deployment, getting you to market faster than traditional approaches.',
  },
  {
    icon: Settings,
    title: 'Industry-Specific Customization',
    description:
      'We understand that every industry has unique challenges, and we tailor our solutions to address your specific needs.',
  },
];

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#dbeafe]/70 blur-3xl" />

      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Why Choose Us</span>
          <h2 className="section-title">
            The Eighty Miles
            <span className="gradient-text"> Advantage</span>
          </h2>
          <p className="section-copy">
            Partner with a team that combines technical excellence with business acumen to deliver
            transformative results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_20px_50px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-2 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 transition-all duration-300 group-hover:bg-[#1d4ed8]">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#1d4ed8]">
                      {reason.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">{reason.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 grid gap-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:grid-cols-2 md:p-10"
        >
          {[
            'Dedicated project managers for every engagement',
            'Transparent pricing with no hidden costs',
            'Agile development with regular updates',
            'Post-deployment support and maintenance',
            'Security-first approach in all solutions',
            'Continuous innovation and upgrades',
          ].map((benefit, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1d4ed8]" />
              <span className="leading-7 text-slate-700">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
