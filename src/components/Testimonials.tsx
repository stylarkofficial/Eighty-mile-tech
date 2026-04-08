import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "NexusTech transformed our manufacturing operations with their AI automation solutions. We've seen a 45% increase in efficiency and significant cost savings.",
    author: 'Sarah Chen',
    role: 'CTO, TechManufacture Inc.',
    company: 'TechManufacture',
    rating: 5,
  },
  {
    quote: "The VR training platform they built for us has revolutionized how we onboard new employees. Training time reduced by 60% while improving knowledge retention.",
    author: 'Michael Rodriguez',
    role: 'VP of Operations, GlobalRetail',
    company: 'GlobalRetail',
    rating: 5,
  },
  {
    quote: "Their enterprise platform integrated seamlessly with our existing systems. The team's expertise in digital transformation is unmatched in the industry.",
    author: 'Emily Watson',
    role: 'CEO, FinanceFirst',
    company: 'FinanceFirst',
    rating: 5,
  },
  {
    quote: "The AR visualization tool they developed for our real estate business has increased our property tour conversions by 200%. Simply incredible results.",
    author: 'David Park',
    role: 'Director of Innovation, RealtyPro',
    company: 'RealtyPro',
    rating: 5,
  },
];

const clientLogos = [
  'TechCorp', 'InnovateLab', 'FutureSys', 'DataDrive', 'SmartScale',
  'CloudFirst', 'DigitalPro', 'AIventures', 'NextGen', 'TechForward',
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#FFF44F]/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[#FFF44F]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-8 md:p-12 relative">
            {/* Quote icon */}
            <Quote className="absolute left-8 top-8 h-12 w-12 text-[#FFF44F]/20" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#FFF44F] text-[#FFF44F]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-8 text-xl leading-relaxed text-white/88 md:text-2xl">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-white/70">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-[#FFF44F] hover:text-[#FFF44F]"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === currentIndex ? 'w-6 bg-[#FFF44F]' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-[#FFF44F] hover:text-[#FFF44F]"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="mb-8 text-center text-sm text-white/58">
            Trusted by innovative companies worldwide
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.5 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                whileHover={{ opacity: 1 }}
                className="cursor-pointer text-xl font-bold text-white/55 transition-colors duration-300 hover:text-[#FFF44F] md:text-2xl"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
