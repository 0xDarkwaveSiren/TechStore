'use client';

import { motion } from 'framer-motion';

/**
 * JellyButton Component
 * Button with spring physics and neon glow on hover
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Button variant (primary, secondary, ghost)
 * @param {boolean} props.disabled - Disabled state
 * @param {string} props.className - Additional CSS classes
 */
export default function JellyButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  ...props
}) {
  const variants = {
    primary: `
      bg-neon-gradient text-void-black font-semibold
      shadow-neon-cyan hover:shadow-neon-purple
      border border-neon-cyan/50
    `,
    secondary: `
      bg-white/5 text-white border border-white/20
      hover:border-neon-purple/50 hover:bg-white/10
    `,
    ghost: `
      bg-transparent text-white border border-white/10
      hover:border-neon-cyan/50 hover:bg-white/5
    `,
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={{
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 10,
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 10,
        },
      }}
      className={`
        relative px-6 py-3 rounded-2xl
        ${variants[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-300
        overflow-hidden
        ${className}
      `}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          transition: {
            duration: 0.6,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Glow effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-neon-gradient blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
      )}
    </motion.button>
  );
}
