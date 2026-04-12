import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Factory,
  Building2,
  HeartPulse,
  ShoppingCart,
  Shirt,
  GraduationCap,
  Truck,
  Landmark,
  Car,
  HardHat,
  Zap,
  Plane,
} from 'lucide-react';

const industries = [
  { icon: Factory, name: 'Manufacturing', description: 'Smart factory solutions, predictive maintenance, and automation for Industry 4.0' },
  { icon: Building2, name: 'Real Estate', description: 'Virtual property tours, AR visualization, and smart building management' },
  { icon: HeartPulse, name: 'Healthcare', description: 'AI diagnostics, VR therapy, telemedicine platforms, and patient management' },
  { icon: ShoppingCart, name: 'Retail & E-commerce', description: 'AR try-on experiences, personalization engines, and inventory optimization' },
  { icon: Shirt, name: 'Fashion & Apparel', description: 'Virtual fitting rooms, trend prediction, and supply chain digitization' },
  { icon: GraduationCap, name: 'Education & EdTech', description: 'Immersive learning, VR classrooms, and AI-powered tutoring systems' },
  { icon: Truck, name: 'Logistics & Supply Chain', description: 'Route optimization, warehouse automation, and real-time tracking' },
  { icon: Landmark, name: 'Banking & FinTech', description: 'AI fraud detection, digital banking platforms, and risk analytics' },
  { icon: Car, name: 'Automotive', description: 'Connected vehicles, AR showrooms, and autonomous driving solutions' },
  { icon: HardHat, name: 'Construction', description: 'BIM visualization, safety training VR, and project management AI' },
  { icon: Zap, name: 'Energy & Utilities', description: 'Smart grid management, predictive maintenance, and sustainability analytics' },
  { icon: Plane, name: 'Travel & Hospitality', description: 'Virtual destination tours, AI concierge, and booking optimization' },
];

export default function Industries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="industries" className="section-padding relative overflow-hidden bg-[#f8fafc]">
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-[#dbeafe]/70 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-[#fde68a]/40 blur-3xl" />

      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Industries We Serve</span>
          <h2 className="section-title">
            Solutions for
            <span className="gradient-text"> Every Industry</span>
          </h2>
          <p className="section-copy">
            We adapt immersive technology, automation, platforms, and systems thinking to match
            the operating reality of each sector we work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group"
            >
              <div className="relative h-full cursor-pointer overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff]/0 to-transparent transition-all duration-300 group-hover:from-[#eff6ff]" />

                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 transition-all duration-300 group-hover:bg-[#1d4ed8]">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-3 font-semibold text-slate-950 transition-colors duration-300 group-hover:text-[#1d4ed8]">
                    {industry.name}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
