'use client';

import Link from 'next/link';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

/**
 * Header Component - Floating Island Navbar
 * Glassmorphism design with Dynamic Island inspiration
 */
export default function Header() {
  const { getCartItemsCount, toggleCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      {/* Floating Island Container */}
      <div className="glass-heavy rounded-glass shadow-glass relative overflow-hidden">
        {/* Neon glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <div className="relative px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-10 h-10 rounded-2xl bg-neon-gradient flex items-center justify-center shadow-neon-cyan"
              >
                <span className="text-void-black font-bold text-xl">T</span>
                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-white/20 blur-sm" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-300">
                TechStore
              </span>
            </Link>

            {/* Search Bar - Desktop */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex flex-1 max-w-md mx-8"
            >
              <motion.div
                animate={{
                  scale: isFocused ? 1.02 : 1,
                  borderColor: isFocused ? 'rgba(0, 243, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)',
                }}
                className="relative w-full"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 pl-11 bg-white/5 border border-white/20 rounded-2xl
                           text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan/50
                           backdrop-blur-xl transition-all duration-300"
                />
                <FiSearch
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    isFocused ? 'text-neon-cyan' : 'text-white/40'
                  }`}
                  size={18}
                />
              </motion.div>
            </form>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Products', href: '/products' },
              ].map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </nav>

            {/* Cart Icon */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleCart}
              className="relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group"
              aria-label="Shopping cart"
            >
              <FiShoppingCart
                size={22}
                className="text-white/80 group-hover:text-neon-cyan transition-colors"
              />
              {getCartItemsCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-neon-gradient text-void-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-neon-cyan"
                >
                  {getCartItemsCount()}
                </motion.span>
              )}
            </motion.button>
          </div>

          {/* Mobile Search Bar */}
          <form onSubmit={handleSearch} className="md:hidden mt-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2.5 pl-11 bg-white/5 border border-white/20 rounded-2xl
                         text-white placeholder-white/40 focus:outline-none focus:border-neon-cyan/50
                         backdrop-blur-xl transition-all duration-300"
              />
              <FiSearch
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40"
                size={18}
              />
            </div>
          </form>
        </div>
      </div>
    </motion.header>
  );
}
