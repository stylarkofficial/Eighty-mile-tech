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
  Film,
  Wheat,
  Building,
  Radio,
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
  { icon: Film, name: 'Media & Entertainment', description: 'Immersive content creation, streaming platforms, and audience analytics' },
  { icon: Wheat, name: 'Agriculture (AgriTech)', description: 'Precision farming, crop monitoring AI, and supply chain transparency' },
  { icon: Building, name: 'Government & Smart Cities', description: 'Citizen services platforms, smart infrastructure, and public safety AI' },
  { icon: Radio, name: 'Telecom', description: 'Network optimization, customer experience AI, and 5G solutions' },
];

export default function Industries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="industries" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-[#FFF44F]/8 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-[#FFF44F]/8 blur-3xl" />

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
            Our expertise spans across diverse sectors, delivering tailored technology solutions
            that address unique industry challenges.
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
              <div className="glass rounded-[1.5rem] p-6 h-full cursor-pointer hover:glow-sm transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF44F]/0 to-transparent transition-all duration-300 group-hover:from-[#FFF44F]/10" />

                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFF44F]/10 transition-all duration-300 group-hover:bg-[#FFF44F]">
                    <industry.icon className="h-6 w-6 text-[#FFF44F] transition-colors duration-300 group-hover:text-[#000000]" />
                  </div>

                  <h3 className="mb-3 font-semibold transition-colors duration-300 group-hover:text-[#FFF44F]">
                    {industry.name}
                  </h3>

                  <p className="text-sm leading-7 text-white/72">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
