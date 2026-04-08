import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Headphones, BarChart3, Database, Shield, ArrowRight } from 'lucide-react';
import automationImg from '../assets/generated/solution-automation.png';
import vrTrainingImg from '../assets/generated/solution-vr-training.png';
import analyticsImg from '../assets/generated/solution-analytics.png';
import enterprisePlatformImg from '../assets/generated/solution-enterprise-platform.png';
import cybersecurityImg from '../assets/generated/solution-cybersecurity.png';

const solutions = [
  {
    icon: Bot,
    title: 'AI-Powered Business Automation',
    description: 'Intelligent workflows that learn and adapt to your business processes, reducing manual intervention by up to 80%.',
    stats: '80% reduction in manual tasks',
    image: automationImg,
  },
  {
    icon: Headphones,
    title: 'VR-Based Employee Training',
    description: 'Immersive training environments that accelerate learning, improve retention, and ensure safety compliance.',
    stats: '3x faster skill acquisition',
    image: vrTrainingImg,
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics Dashboards',
    description: 'Real-time insights and forecasting powered by advanced machine learning algorithms for data-driven decisions.',
    stats: '95% prediction accuracy',
    image: analyticsImg,
  },
  {
    icon: Database,
    title: 'Smart Enterprise Platforms',
    description: 'Unified platforms that connect your entire organization, enabling seamless collaboration and data flow.',
    stats: '50% improved efficiency',
    image: enterprisePlatformImg,
  },
  {
    icon: Shield,
    title: 'Cybersecurity Threat Detection',
    description: 'AI-driven security systems that identify and neutralize threats before they impact your business.',
    stats: '99.9% threat detection rate',
    image: cybersecurityImg,
  },
];

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="solutions" className="section-padding bg-[#000000]">
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Solutions in Action</span>
          <h2 className="section-title">
            Real-World
            <span className="gradient-text"> Applications</span>
          </h2>
          <p className="section-copy">
            See how our solutions deliver measurable results across industries, transforming
            operations and driving growth.
          </p>
        </motion.div>

        <div className="space-y-14">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`flex flex-col items-center gap-8 lg:gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex-1">
                <div className="glass rounded-[2rem] p-8 md:p-10 h-full">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#FFF44F]">
                    <solution.icon className="w-7 h-7 text-[#000000]" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>

                  <p className="mb-6 leading-8 text-white/78">{solution.description}</p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="rounded-full border border-[#FFF44F]/30 bg-[#FFF44F]/10 px-4 py-2">
                      <span className="font-semibold text-[#FFF44F]">{solution.stats}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-medium text-[#FFF44F] transition-all duration-300 hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative overflow-hidden rounded-[2rem] group">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-sm">
                    <solution.icon className="w-7 h-7 text-[#FFF44F]" />
                  </div>
                  <div className="absolute inset-0 rounded-[2rem] border-2 border-[#FFF44F]/10 transition-colors duration-300 group-hover:border-[#FFF44F]/30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
