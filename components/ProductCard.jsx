'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * ProductCard Component - Glassmorphism Design
 * Displays individual product with neon accents and smooth animations
 * @param {Object} product - Product data
 */
export default function ProductCard({ product }) {
  const { addToCart, openCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    setIsAdding(true);
    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 300);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.03, y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass rounded-glass overflow-hidden group h-full flex flex-col relative"
      >
        {/* Neon border glow on hover */}
        <div className="absolute inset-0 rounded-glass opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
             style={{
               background: 'linear-gradient(135deg, rgba(0, 243, 255, 0.2), rgba(188, 19, 254, 0.2))',
               filter: 'blur(20px)',
               transform: 'scale(1.02)',
             }}
        />

        {/* Product Image */}
        <div className="relative h-64 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
          <Image
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Stock Badge */}
          {!product.inStock && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-3 right-3 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold"
            >
              Out of Stock
            </motion.div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-void-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col flex-1 relative">
          {/* Category */}
          <span className="text-xs text-neon-cyan uppercase tracking-wider mb-2 font-semibold">
            {product.category}
          </span>

          {/* Name */}
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-neon-gradient transition-all duration-300">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <FiStar className="text-neon-cyan fill-current" size={16} />
            <span className="ml-1.5 text-sm text-white/70">
              {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-white/50 mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>

          {/* Price and Add to Cart */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-2xl font-bold text-neon-gradient">
              ${product.price.toLocaleString()}
            </span>

            <motion.button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              whileHover={{ scale: product.inStock ? 1.1 : 1 }}
              whileTap={{ scale: product.inStock ? 0.9 : 1 }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                product.inStock
                  ? 'bg-neon-gradient text-void-black hover:shadow-neon-cyan'
                  : 'bg-white/5 text-white/30 cursor-not-allowed'
              }`}
            >
              <FiShoppingCart size={18} />
              <span className="hidden sm:inline text-sm">
                {isAdding ? 'Adding...' : 'Add'}
              </span>
            </motion.button>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
