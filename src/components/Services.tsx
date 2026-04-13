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
import automationImg from '../../images/AI_AUTOMATION.png';
import arImg from '../../images/AR.png';
import cybersecurityImg from '../../images/CYBERSECURITY.png';
import devopsImg from '../../images/DEVOPS.png';
import transformationImg from '../../images/DIGITALTRANSFORMATION.png';
import enterpriseImg from '../../images/ENTERPRISES.png';

const services = [
  {
    icon: Glasses,
    title: 'AR / VR / MR',
    description:
      'Immersive environments, interactive simulations, and product storytelling experiences built to feel futuristic and commercially useful.',
    features: ['Spatial experiences', 'Virtual walkthroughs', 'Mixed reality demos'],
    image: arImg,
  },
  {
    icon: Brain,
    title: 'AI Automation',
    description:
      'Intelligent workflows and decision-support systems that reduce manual effort and unlock better operating speed.',
    features: ['Agentic workflows', 'Predictive insights', 'Process automation'],
    image: automationImg,
  },
  {
    icon: Boxes,
    title: 'Enterprise Platforms',
    description:
      'Connected digital infrastructure for operations, internal tools, customer portals, and scalable business systems.',
    features: ['Custom platforms', 'API architecture', 'Cloud integrations'],
    image: enterpriseImg,
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Security-first implementation for applications, internal systems, data flows, and threat visibility.',
    features: ['Threat monitoring', 'Security reviews', 'Compliance readiness'],
    image: cybersecurityImg,
  },
  {
    icon: CloudCog,
    title: 'DevOps',
    description:
      'Release pipelines, cloud environments, observability, and deployment systems that keep products stable and fast-moving.',
    features: ['CI/CD pipelines', 'Cloud operations', 'Monitoring and uptime'],
    image: devopsImg,
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description:
      'Technology roadmaps and implementation support that modernize how businesses operate, scale, and deliver value.',
    features: ['Modernization strategy', 'System redesign', 'Execution partnership'],
    image: transformationImg,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding theme-soft theme-grid relative overflow-hidden">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-[#d4b26a]/12 blur-3xl" />

      <div className="content-shell relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Our Services</span>
          <h2 className="section-title">
            Capability architecture for
            <span className="gradient-text"> modern brands under pressure.</span>
          </h2>
          <p className="section-copy">
            We design the digital layers that make a company feel sharper on the surface and more
            intelligent underneath.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="group"
            >
              <div className="card-tilt theme-card relative h-full overflow-hidden rounded-[1.6rem] md:rounded-[2rem]">
                <div className="relative h-52 overflow-hidden sm:h-56 md:h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,253,250,0.02)_0%,_rgba(32,36,44,0.16)_55%,_rgba(32,36,44,0.42)_100%)]" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/52 text-[#20242c] backdrop-blur-md md:left-6 md:top-6 md:h-14 md:w-14">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-6 md:right-6">
                    <span className="inline-flex rounded-full border border-white/60 bg-white/55 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#5d6574] backdrop-blur-md">
                      Eighy Mile
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <h3 className="serif-display mb-3 text-[2rem] font-semibold leading-none text-[#20242c] sm:text-[2.15rem] md:text-3xl">{service.title}</h3>
                  <p className="mb-5 text-[0.95rem] leading-7 text-[#5d6574] md:mb-6 md:leading-8">{service.description}</p>

                  <ul className="mb-5 space-y-2.5 md:mb-6 md:space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-[#5d6574]">
                        <span className="h-2 w-2 rounded-full bg-[#d4b26a]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d4b26a] transition-all duration-300 group-hover:gap-3"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
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
