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
    <section id="solutions" className="section-padding bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]">
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
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700] to-[#FFC107] flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-[#0A0A0A]" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>

                  <p className="text-gray-400 mb-6 leading-8">{solution.description}</p>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="px-4 py-2 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/30">
                      <span className="text-[#FFD700] font-semibold">{solution.stats}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#FFD700] font-medium hover:gap-3 transition-all duration-300"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/40 backdrop-blur-sm">
                    <solution.icon className="w-7 h-7 text-[#FFD700]" />
                  </div>
                  <div className="absolute inset-0 border-2 border-[#FFD700]/10 rounded-[2rem] group-hover:border-[#FFD700]/30 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
