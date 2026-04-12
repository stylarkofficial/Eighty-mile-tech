import { motion } from 'framer-motion';

type HeroBackgroundProps = {
  activeIndex: number;
};

export default function HeroBackground({ activeIndex }: HeroBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0.4, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <div className="absolute -left-[10%] top-[10%] h-[24rem] w-[24rem] rounded-full bg-[#ffc000]/12 blur-[120px]" />
        <div className="absolute right-[6%] top-[12%] h-[22rem] w-[22rem] rounded-full bg-white/55 blur-[120px]" />
        <div className="absolute bottom-[-6%] left-[35%] h-[18rem] w-[18rem] rounded-full bg-[#ffd7a2]/50 blur-[120px]" />
      </motion.div>

      <div className="absolute inset-y-0 left-[7%] w-px bg-gradient-to-b from-transparent via-[#20242c]/10 to-transparent" />
      <div className="absolute inset-y-0 right-[9%] w-px bg-gradient-to-b from-transparent via-[#20242c]/6 to-transparent" />
      <div className="absolute left-[7%] right-[9%] top-[18%] h-px bg-gradient-to-r from-transparent via-[#20242c]/7 to-transparent" />
      <div className="absolute left-[7%] right-[9%] bottom-[14%] h-px bg-gradient-to-r from-transparent via-[#20242c]/6 to-transparent" />

      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(32,36,44,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(32,36,44,0.08) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            maskImage: 'linear-gradient(180deg, transparent, black 22%, black 78%, transparent)',
          }}
        />
      </div>

      <motion.div
        animate={{ x: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-y-0 left-1/2 w-[30rem] -translate-x-1/2 bg-[linear-gradient(90deg,_transparent_0%,_rgba(255,255,255,0.28)_50%,_transparent_100%)] blur-3xl"
      />
    </div>
  );
}
