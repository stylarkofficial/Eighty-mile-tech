import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Layers, Glasses, Shield, GraduationCap, Rocket, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description:
      'Intelligent automation solutions powered by machine learning and advanced AI algorithms to streamline operations and boost productivity.',
    features: ['Process Automation', 'Predictive Analytics', 'NLP Solutions'],
  },
  {
    icon: Layers,
    title: 'Enterprise Platforms',
    description:
      'Scalable, secure, and high-performance enterprise platforms designed to transform your business operations and digital infrastructure.',
    features: ['Custom Development', 'Cloud Integration', 'API Architecture'],
  },
  {
    icon: Glasses,
    title: 'AR/VR Solutions',
    description:
      'Immersive augmented and virtual reality experiences that revolutionize customer engagement, training, and product visualization.',
    features: ['Virtual Showrooms', 'AR Applications', '3D Visualization'],
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security solutions to protect your digital assets, data, and infrastructure from evolving cyber threats.',
    features: ['Threat Detection', 'Security Audits', 'Compliance'],
  },
  {
    icon: GraduationCap,
    title: 'VR Training Systems',
    description:
      'Revolutionary virtual reality training programs that provide immersive, safe, and effective learning experiences for your workforce.',
    features: ['Safety Training', 'Skills Development', 'Simulations'],
  },
  {
    icon: Rocket,
    title: 'Digital Transformation',
    description:
      'End-to-end digital transformation services to modernize your business, optimize processes, and create competitive advantages.',
    features: ['Strategy Consulting', 'Legacy Modernization', 'Change Management'],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-[#697179] via-[#5A6168] to-[#737B83]">
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Our Services</span>
          <h2 className="section-title">
            Comprehensive Technology
            <span className="gradient-text"> Solutions</span>
          </h2>
          <p className="section-copy">
            From AI-powered automation to immersive experiences, we deliver cutting-edge
            solutions tailored to your industry needs.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group"
            >
              <div className="card-tilt glass rounded-[1.75rem] p-8 h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#FFD700]/0 group-hover:from-[#FFD700]/10 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFD700]/20 to-[#FFC107]/10 flex items-center justify-center mb-6 group-hover:from-[#FFD700] group-hover:to-[#FFC107] transition-all duration-300">
                    <service.icon className="w-7 h-7 text-[#FFD700] group-hover:text-[#0A0A0A] transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[#FFD700] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-8">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[#FFD700] font-medium text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
