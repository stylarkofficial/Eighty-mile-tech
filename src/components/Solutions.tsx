import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Headphones, BarChart3, Database, Shield, ArrowRight } from 'lucide-react';
import automationImg from '../../solution images/ai powered business automation.png';
import vrTrainingImg from '../../solution images/vr.png';
import analyticsImg from '../../solution images/predictive analysis.png';
import enterprisePlatformImg from '../../solution images/smart enterprise.png';
import cybersecurityImg from '../../solution images/cyber security.png';

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
    <section id="solutions" className="section-padding theme-grid bg-white">
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Solutions in Action</span>
          <h2 className="section-title">
            Concept, interface,
            <span className="gradient-text"> and implementation in one system.</span>
          </h2>
          <p className="section-copy">
            See how our solution stack translates into practical business outcomes across
            automation, analytics, immersive learning, enterprise delivery, and security.
          </p>
        </motion.div>

        <div className="space-y-10 md:space-y-12 lg:space-y-14">
          {solutions.map((solution, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={`flex flex-col items-center gap-6 md:gap-8 lg:gap-12 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
            >
              <div className="flex-1">
                <div className="theme-panel h-full rounded-[1.6rem] p-5 sm:p-6 md:rounded-[2rem] md:p-8 lg:p-10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#1f2937]/8 bg-white md:mb-6 md:h-14 md:w-14">
                    <solution.icon className="w-7 h-7 text-[#d4b26a]" />
                  </div>

                  <h3 className="serif-display mb-3 text-[2rem] font-semibold leading-none text-[#20242c] sm:text-[2.2rem] md:mb-4 md:text-4xl">{solution.title}</h3>

                  <p className="mb-5 text-[0.96rem] leading-7 text-[#5d6574] md:mb-6 md:leading-8">{solution.description}</p>

                  <div className="mb-5 flex items-center gap-4 md:mb-6">
                    <div className="rounded-full border border-[#d4b26a]/30 bg-white/[0.03] px-4 py-2">
                      <span className="font-semibold text-[#d4b26a]">{solution.stats}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-medium uppercase tracking-[0.16em] text-[#d4b26a] transition-all duration-300 hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex-1">
                <div className="group relative overflow-hidden rounded-[1.6rem] border border-[#1f2937]/8 shadow-[0_24px_70px_rgba(38,45,56,0.1)] md:rounded-[2rem]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/25 backdrop-blur-md md:left-6 md:top-6 md:h-14 md:w-14">
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                    <p className="serif-display text-[1.85rem] font-semibold leading-none text-white md:text-3xl">{solution.title}</p>
                  </div>
                  <div className="absolute inset-0 rounded-[1.6rem] border-2 border-white/20 transition-colors duration-300 group-hover:border-[#d4b26a]/30 md:rounded-[2rem]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
