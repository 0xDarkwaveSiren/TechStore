'use client';

import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import JellyButton from '@/components/JellyButton';
import AnimatedBackground from '@/components/AnimatedBackground';
import { getAllProducts } from '@/data/products';
import { motion } from 'framer-motion';
import { FiArrowRight, FiZap, FiShield, FiTruck } from 'react-icons/fi';

/**
 * Home Page - Futuristic Glassmorphism Landing
 */
export default function HomePage() {
  const products = getAllProducts();
  const featuredProducts = products.slice(0, 8);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />

      {/* Hero Section - Holographic Glass Card */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="glass-heavy rounded-glass p-12 md:p-16 relative overflow-hidden shadow-glass"
          >
            {/* Holographic shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10 opacity-50" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(0, 243, 255, 0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'shimmer 3s infinite',
              }}
            />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
              >
                Welcome to{' '}
                <span className="text-neon-gradient drop-shadow-[0_0_30px_rgba(0,243,255,0.5)]">
                  TechStore
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-white/70 max-w-3xl mx-auto leading-relaxed"
              >
                Experience the future of technology retail. Cutting-edge products,
                premium quality, and{' '}
                <span className="text-neon-cyan font-semibold">unbeatable prices</span>.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link href="/products">
                  <JellyButton variant="primary" className="text-lg px-8 py-4 group">
                    Explore Products
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </JellyButton>
                </Link>
                <Link href="/products?category=Laptops">
                  <JellyButton variant="ghost" className="text-lg px-8 py-4">
                    Browse Laptops
                  </JellyButton>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10"
              >
                {[
                  { label: 'Products', value: '500+' },
                  { label: 'Customers', value: '10K+' },
                  { label: 'Reviews', value: '4.9★' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-neon-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-neon-gradient">Products</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/60 max-w-2xl mx-auto"
            >
              Handpicked selection of the best tech products available
            </motion.p>
          </motion.div>

          <ProductGrid products={featuredProducts} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/products">
              <JellyButton variant="secondary" className="text-lg px-8 py-4 group">
                View All Products
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </JellyButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Shop by <span className="text-neon-gradient">Category</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/60"
            >
              Find exactly what you're looking for
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { name: 'Laptops', emoji: '💻', href: '/products?category=Laptops', color: 'neon-cyan' },
              { name: 'Phones', emoji: '📱', href: '/products?category=Phones', color: 'neon-purple' },
              { name: 'Headphones', emoji: '🎧', href: '/products?category=Headphones', color: 'neon-pink' },
              { name: 'Accessories', emoji: '⌨️', href: '/products?category=Accessories', color: 'neon-cyan' },
            ].map((category, index) => (
              <motion.div key={category.name} variants={itemVariants}>
                <Link href={category.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass rounded-glass p-8 text-center group cursor-pointer relative overflow-hidden"
                  >
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 bg-${category.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {category.emoji}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-gradient transition-all duration-300">
                        {category.name}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FiTruck size={32} />,
                title: 'Fast Shipping',
                description: 'Free shipping on orders over $100',
                color: 'neon-cyan',
              },
              {
                icon: <FiShield size={32} />,
                title: 'Secure Payment',
                description: '100% secure payment processing',
                color: 'neon-purple',
              },
              {
                icon: <FiZap size={32} />,
                title: 'Easy Returns',
                description: '30-day return policy on all products',
                color: 'neon-pink',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-glass p-8 text-center group relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-${feature.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-${feature.color}/10 border border-${feature.color}/20 mb-4 text-${feature.color}`}
                    whileHover={{ rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </main>
  );
}
