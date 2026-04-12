import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding relative overflow-hidden bg-[#fffdfa]">
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="theme-panel relative overflow-hidden rounded-3xl p-8 text-center md:p-16">
            <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-gradient-to-br from-[#ffc000]/18 via-[#ff9818]/10 to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gradient-to-tl from-white/10 to-transparent blur-3xl" />

            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff9818]/30 bg-white/[0.04] px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#ff9818]">
                  <span className="h-2 w-2 rounded-full bg-[#ffc000] animate-pulse" />
                  Limited consultation slots available this month
                </span>
              </motion.div>

              <h2 className="serif-display mb-6 text-4xl font-semibold leading-[0.95] text-[#20242c] md:text-6xl lg:text-7xl">
                Ready to present your brand
                <span className="gradient-text"> with more gravity?</span>
                <br />
                Let&apos;s build the next version.
              </h2>

              <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-[#5d6574] md:text-xl">
                We can redesign the experience, modernize the systems behind it, and make the
                entire business feel more advanced in motion.
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
                <div className="flex items-center gap-2 text-[#5d6574]">
                  <svg className="h-5 w-5 text-[#ff9818]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-[#5d6574]">
                  <svg className="h-5 w-5 text-[#ff9818]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">No obligation</span>
                </div>
                <div className="flex items-center gap-2 text-[#5d6574]">
                  <svg className="h-5 w-5 text-[#ff9818]" fill="currentColor" viewBox="0 0 20 20">
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
