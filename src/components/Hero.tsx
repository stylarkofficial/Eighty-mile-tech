import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Layers3, Orbit, Sparkles } from 'lucide-react';
import HeroBackground from './HeroBackground';
import automationImg from '../assets/generated/solution-automation.png';
import enterprisePlatformImg from '../assets/generated/solution-enterprise-platform.png';
import vrTrainingImg from '../assets/generated/solution-vr-training.png';

const floatingCards = [
  {
    title: 'Immersive Experiences',
    image: vrTrainingImg,
    icon: Orbit,
    className: '-left-2 top-24 hidden xl:block',
  },
  {
    title: 'AI Systems',
    image: automationImg,
    icon: Cpu,
    className: 'right-0 top-10 hidden lg:block',
  },
  {
    title: 'Platform Engineering',
    image: enterprisePlatformImg,
    icon: Layers3,
    className: 'right-16 bottom-16 hidden xl:block',
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.55),_transparent_38%),linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
      <HeroBackground />

      <div className="content-shell relative z-10 py-32 md:py-36">
        {floatingCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
            className={`floating-panel absolute w-56 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/80 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl ${card.className}`}
          >
            <img src={card.image} alt={card.title} className="h-28 w-full object-cover" />
            <div className="p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <card.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-slate-900">{card.title}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/85 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-[#1d4ed8]" />
            Interactive technology for ambitious businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-7 max-w-6xl text-center text-4xl font-bold leading-[0.98] text-slate-950 md:text-6xl lg:text-7xl"
        >
          Build a Future-Ready Digital Presence with
          <span className="gradient-text"> AI, Immersive Tech</span>
          <br />
          and <span className="gradient-text">Scalable Engineering</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-slate-600 md:text-xl"
        >
          We create interactive websites, immersive experiences, AI-powered systems, and cloud
          infrastructure that make your business feel more innovative, capable, and globally ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="#contact" className="btn-primary flex items-center gap-2 text-lg">
            Start a Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#services" className="btn-secondary flex items-center gap-2 text-lg">
            Explore Services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mx-auto mt-20 max-w-5xl rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl"
        >
          <div className="grid gap-6 text-center md:grid-cols-3 md:text-left">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
                AR / VR / MR
              </p>
              <p className="text-sm leading-7 text-slate-600">
                Immersive experiences for showcases, training, and engagement.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
                AI + Automation
              </p>
              <p className="text-sm leading-7 text-slate-600">
                Workflow systems that streamline operations and decision-making.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/80 p-6">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#1d4ed8]">
                Enterprise Delivery
              </p>
              <p className="text-sm leading-7 text-slate-600">
                Platforms, DevOps, and transformation support for business scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-300 pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-[#1d4ed8]"
          />
        </div>
      </motion.div>
    </section>
  );
}
