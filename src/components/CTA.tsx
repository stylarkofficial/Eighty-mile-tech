import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-[#FFF44F]/20 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gradient-to-tl from-[#FFF44F]/20 to-transparent blur-3xl" />

            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  'linear-gradient(#FFF44F 1px, transparent 1px), linear-gradient(90deg, #FFF44F 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFF44F]/30 bg-[#FFF44F]/10 px-4 py-2 text-sm font-medium text-[#FFF44F]">
                  <span className="h-2 w-2 rounded-full bg-[#FFF44F] animate-pulse" />
                  Limited consultation slots available this month
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to
                <span className="gradient-text glow-text"> Transform</span>
                <br />
                Your Business?
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Build a cleaner digital presence and a stronger operating system for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact" className="btn-primary flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5" />
                  Book Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#contact" className="btn-secondary flex items-center gap-2 text-lg">
                  <MessageSquare className="w-5 h-5" />
                  Contact Us
                </a>
              </div>

              <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
                <div className="flex items-center gap-2 text-white/78">
                  <svg className="h-5 w-5 text-[#FFF44F]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-white/78">
                  <svg className="h-5 w-5 text-[#FFF44F]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-white/78">
                  <svg className="h-5 w-5 text-[#FFF44F]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Response within 24h</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
