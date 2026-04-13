import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroBackground from './HeroBackground';
import arImg from '../../images/AR.png';
import automationImg from '../../images/AI_AUTOMATION.png';
import enterpriseImg from '../../images/ENTERPRISES.png';
import cybersecurityImg from '../../images/CYBERSECURITY.png';
import devopsImg from '../../images/DEVOPS.png';
import transformationImg from '../../images/DIGITALTRANSFORMATION.png';

const slides = [
  {
    title: 'AR / VR / MR',
    eyebrow: 'Immersive Systems',
    description:
      'Spatial product experiences, simulations, and mixed-reality environments designed to make advanced technology feel immediate and real.',
    image: arImg,
  },
  {
    title: 'AI Automation',
    eyebrow: 'Autonomous Workflows',
    description:
      'Intelligent systems that process, route, and execute operational work with clarity, consistency, and measurable speed.',
    image: automationImg,
  },
  {
    title: 'Enterprise Platforms',
    eyebrow: 'Connected Infrastructure',
    description:
      'Scalable business platforms that unify portals, data layers, APIs, and internal systems into one structured operating environment.',
    image: enterpriseImg,
  },
  {
    title: 'Cybersecurity',
    eyebrow: 'Security by Design',
    description:
      'Protection-first implementation for applications, data flows, and digital infrastructure with strong visibility and resilient controls.',
    image: cybersecurityImg,
  },
  {
    title: 'DevOps',
    eyebrow: 'Release and Reliability',
    description:
      'Cloud operations, pipelines, and monitoring systems that keep products stable, observable, and ready for continuous delivery.',
    image: devopsImg,
  },
  {
    title: 'Digital Transformation',
    eyebrow: 'Modernization Strategy',
    description:
      'Structured transformation from legacy workflows into modern, connected systems built for performance, scale, and adaptability.',
    image: transformationImg,
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-white text-[#20242c]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide.title}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.985 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
            <img
              src={currentSlide.image}
              alt={currentSlide.title}
              className="h-full w-full object-cover object-center opacity-100"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,253,250,0.98)_0%,_rgba(255,253,250,0.95)_28%,_rgba(255,253,250,0.72)_48%,_rgba(255,253,250,0.15)_67%,_rgba(255,253,250,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,_rgba(255,192,0,0.08),_transparent_24%)]" />
        </motion.div>
      </AnimatePresence>

      <HeroBackground activeIndex={activeSlide} />

      <div className="hero-shell relative z-10 flex min-h-screen flex-col gap-5 py-12 md:gap-7 md:py-14 lg:gap-10 lg:py-18 xl:py-20">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 pt-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#5d6574] md:pt-4 md:gap-4 md:text-[0.72rem] md:tracking-[0.32em]"
        >
          <span>Eighy Mile</span>
          <span className="h-px w-14 bg-gradient-to-r from-[#d4b26a] to-transparent" />
          <span>Advanced digital systems</span>
        </motion.div>

        <div className="grid gap-5 md:gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-10 xl:gap-14">
          <div className="max-w-[72rem] pb-2 md:pb-4 lg:pb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#d4b26a] md:mb-5 md:text-[0.72rem] md:tracking-[0.34em]"
            >
              Premium Technology Experiences and Infrastructure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28 }}
              className="serif-display max-w-[8.8em] text-[2.75rem] font-semibold leading-[0.9] tracking-[-0.045em] text-[#20242c] sm:text-[3.1rem] md:max-w-[7.6em] md:text-[4.15rem] lg:max-w-[7.3em] lg:text-[5.65rem] xl:max-w-[7.8em] xl:text-[7.1rem]"
            >
              Complex capabilities,
              <span className="block text-[#6d7785]">made clear, visual, and commercially useful.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42 }}
              className="mt-4 max-w-[44rem] text-[0.98rem] leading-7 text-[#5d6574] sm:text-base md:mt-5 md:max-w-3xl md:text-[1rem] md:leading-7 lg:text-[1.08rem] lg:leading-8"
            >
              We build immersive products, automation systems, enterprise platforms, secure
              infrastructure, and modernization programs that make businesses feel sharper on the
              surface and more intelligent underneath.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.54 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7"
            >
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-sm sm:text-base">
                Start a Project
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center gap-2 border-[#20242c]/10 bg-white/65 text-sm text-[#20242c] shadow-[0_18px_40px_rgba(38,45,56,0.08)] backdrop-blur-md sm:text-base">
                View Services
              </a>
            </motion.div>
          </div>

          <div className="flex items-end justify-start lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="w-full max-w-[24rem] rounded-[1.45rem] border border-white/70 bg-white/68 p-4 shadow-[0_24px_80px_rgba(38,45,56,0.1)] backdrop-blur-xl sm:p-5 md:max-w-[25rem] md:rounded-[1.7rem] md:p-6 lg:max-w-[26rem] lg:p-7 xl:p-8"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#8b93a0]">
                  {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                </p>
                <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d4b26a] md:mt-4 md:text-[0.72rem] md:tracking-[0.3em]">
                  {currentSlide.eyebrow}
                </p>
                <h2 className="serif-display mt-2 text-[1.6rem] font-semibold leading-none tracking-[-0.04em] text-[#20242c] sm:text-[1.8rem] md:mt-3 md:text-[2.25rem] lg:text-5xl">
                  {currentSlide.title}
                </h2>
                <p className="mt-3 text-[0.92rem] leading-6 text-[#5d6574] md:mt-4 md:text-base md:leading-7 lg:text-lg">
                  {currentSlide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="mt-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 xl:mt-4 xl:gap-4"
        >
          <div className="theme-panel rounded-[1.2rem] px-4 py-3.5 md:px-5 md:py-4.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#d4b26a] md:text-[0.68rem] md:tracking-[0.28em]">Immersive</p>
            <p className="mt-2 serif-display text-[1.85rem] font-semibold leading-none text-[#20242c] md:text-[2rem] xl:mt-3 xl:text-3xl">AR / VR / MR</p>
            <p className="mt-1.5 text-[0.88rem] leading-6 text-[#5d6574] md:text-sm md:leading-6 xl:mt-2 xl:leading-7">Spatial interfaces and guided simulations with premium interaction design.</p>
          </div>
          <div className="theme-panel rounded-[1.2rem] px-4 py-3.5 md:px-5 md:py-4.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#d4b26a] md:text-[0.68rem] md:tracking-[0.28em]">Automation</p>
            <p className="mt-2 serif-display text-[1.85rem] font-semibold leading-none text-[#20242c] md:text-[2rem] xl:mt-3 xl:text-3xl">AI Systems</p>
            <p className="mt-1.5 text-[0.88rem] leading-6 text-[#5d6574] md:text-sm md:leading-6 xl:mt-2 xl:leading-7">Operational workflows that feel calm, fast, and commercially precise.</p>
          </div>
          <div className="theme-panel rounded-[1.2rem] px-4 py-3.5 md:px-5 md:py-4.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#d4b26a] md:text-[0.68rem] md:tracking-[0.28em]">Platforms</p>
            <p className="mt-2 serif-display text-[1.85rem] font-semibold leading-none text-[#20242c] md:text-[2rem] xl:mt-3 xl:text-3xl">Enterprise Delivery</p>
            <p className="mt-1.5 text-[0.88rem] leading-6 text-[#5d6574] md:text-sm md:leading-6 xl:mt-2 xl:leading-7">Structured systems, portals, and data layers designed for scale.</p>
          </div>
          <div className="theme-panel rounded-[1.2rem] px-4 py-3.5 md:px-5 md:py-4.5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#d4b26a] md:text-[0.68rem] md:tracking-[0.28em]">Security</p>
            <p className="mt-2 serif-display text-[1.85rem] font-semibold leading-none text-[#20242c] md:text-[2rem] xl:mt-3 xl:text-3xl">Resilient Control</p>
            <p className="mt-1.5 text-[0.88rem] leading-6 text-[#5d6574] md:text-sm md:leading-6 xl:mt-2 xl:leading-7">Protection-first engineering with visibility, reliability, and trust.</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 xl:block"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-[#20242c]/14 pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#d4b26a]"
          />
        </div>
      </motion.div>
    </section>
  );
}
