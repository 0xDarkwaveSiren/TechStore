'use client';

import { motion } from 'framer-motion';

/**
 * AnimatedBackground Component
 * Creates a living atmosphere with drifting gradient orbs
 */
export default function AnimatedBackground() {
  const orbs = [
    {
      id: 1,
      color: 'from-neon-cyan/30 to-transparent',
      size: 'w-[500px] h-[500px]',
      initial: { x: '-10%', y: '20%' },
      animate: { x: '10%', y: '30%' },
      duration: 20,
    },
    {
      id: 2,
      color: 'from-neon-purple/25 to-transparent',
      size: 'w-[600px] h-[600px]',
      initial: { x: '80%', y: '10%' },
      animate: { x: '70%', y: '20%' },
      duration: 25,
    },
    {
      id: 3,
      color: 'from-neon-pink/20 to-transparent',
      size: 'w-[400px] h-[400px]',
      initial: { x: '50%', y: '60%' },
      animate: { x: '40%', y: '70%' },
      duration: 22,
    },
    {
      id: 4,
      color: 'from-neon-cyan/15 to-transparent',
      size: 'w-[450px] h-[450px]',
      initial: { x: '20%', y: '70%' },
      animate: { x: '30%', y: '60%' },
      duration: 18,
    },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-cyber-mesh opacity-50" />

      {/* Drifting gradient orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute ${orb.size} rounded-full bg-gradient-radial ${orb.color} blur-[120px]`}
          initial={orb.initial}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
    </div>
  );
}
