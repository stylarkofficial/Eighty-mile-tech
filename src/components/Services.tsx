import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  Brain,
  Boxes,
  CloudCog,
  Glasses,
  Rocket,
  Shield,
} from 'lucide-react';
import automationImg from '../assets/generated/solution-automation.png';
import analyticsImg from '../assets/generated/solution-analytics.png';
import cybersecurityImg from '../assets/generated/solution-cybersecurity.png';
import enterprisePlatformImg from '../assets/generated/solution-enterprise-platform.png';
import vrTrainingImg from '../assets/generated/solution-vr-training.png';

const services = [
  {
    icon: Glasses,
    title: 'AR / VR / MR',
    description:
      'Immersive environments, interactive simulations, and product storytelling experiences built to feel futuristic and commercially useful.',
    features: ['Spatial experiences', 'Virtual walkthroughs', 'Mixed reality demos'],
    image: vrTrainingImg,
    accent: 'from-[#0f172a]/80 via-[#1d4ed8]/40 to-transparent',
  },
  {
    icon: Brain,
    title: 'AI Automation',
    description:
      'Intelligent workflows and decision-support systems that reduce manual effort and unlock better operating speed.',
    features: ['Agentic workflows', 'Predictive insights', 'Process automation'],
    image: automationImg,
    accent: 'from-[#082f49]/80 via-[#0891b2]/35 to-transparent',
  },
  {
    icon: Boxes,
    title: 'Enterprise Platforms',
    description:
      'Connected digital infrastructure for operations, internal tools, customer portals, and scalable business systems.',
    features: ['Custom platforms', 'API architecture', 'Cloud integrations'],
    image: enterprisePlatformImg,
    accent: 'from-[#312e81]/80 via-[#6366f1]/35 to-transparent',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Security-first implementation for applications, internal systems, data flows, and threat visibility.',
    features: ['Threat monitoring', 'Security reviews', 'Compliance readiness'],
    image: cybersecurityImg,
    accent: 'from-[#3f3f46]/80 via-[#64748b]/35 to-transparent',
  },
  {
    icon: CloudCog,
    title: 'DevOps',
    description:
      'Release pipelines, cloud environments, observability, and deployment systems that keep products stable and fast-moving.',
    features: ['CI/CD pipelines', 'Cloud operations', 'Monitoring and uptime'],
    image: analyticsImg,
    accent: 'from-[#172554]/80 via-[#2563eb]/35 to-transparent',
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description:
      'Technology roadmaps and implementation support that modernize how businesses operate, scale, and deliver value.',
    features: ['Modernization strategy', 'System redesign', 'Execution partnership'],
    image: analyticsImg,
    accent: 'from-[#451a03]/80 via-[#f59e0b]/35 to-transparent',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eff6ff] to-transparent" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#bfdbfe]/50 blur-3xl" />

      <div className="content-shell relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Our Services</span>
          <h2 className="section-title">
            Technology Services Built for
            <span className="gradient-text"> Modern Growth</span>
          </h2>
          <p className="section-copy">
            Immersive experiences, AI systems, enterprise platforms, and cloud execution designed
            to make the brand feel future-ready and the business run better.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group"
            >
              <div className="card-tilt relative h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.accent}`} />
                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-white backdrop-blur-md">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="absolute bottom-5 left-6 right-6">
                    <span className="inline-flex rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      Eighty Miles
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mb-6 leading-8 text-slate-600">{service.description}</p>

                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                        <span className="h-2 w-2 rounded-full bg-[#1d4ed8]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#1d4ed8] transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
