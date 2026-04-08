import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import HeroBackground from './HeroBackground';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />

      <div className="content-shell relative z-10 py-32 text-center md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#FFF44F] font-medium">
            <span className="w-2 h-2 bg-[#FFF44F] rounded-full animate-pulse" />
            Limited consultation slots available
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-7 max-w-5xl text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
        >
          Transforming Industries with{' '}
          <span className="gradient-text glow-text">AI, Automation</span>
          <br />
          & <span className="gradient-text glow-text">Immersive Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-white/78 md:text-xl"
        >
          We build intelligent, scalable, and future-ready digital solutions for modern
          businesses across industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="btn-primary flex items-center gap-2 text-lg">
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="btn-secondary flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            View Solutions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 border-t border-white/15 pt-16"
        >
          <p className="mb-6 text-sm text-white/60">Trusted by growing businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {['TechCorp', 'InnovateLab', 'FutureSys', 'DataDrive', 'SmartScale'].map((company, i) => (
              <span key={i} className="text-xl font-bold text-white/70 md:text-2xl">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex w-6 justify-center rounded-full border-2 border-[#FFF44F]/50 pt-2 h-10">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#FFF44F]"
          />
        </div>
      </motion.div>
    </section>
  );
}
