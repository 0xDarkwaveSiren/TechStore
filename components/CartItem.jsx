'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiX, FiPlus, FiMinus } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

/**
 * CartItem Component
 * Displays individual cart item with quantity controls
 * @param {Object} item - Cart item object
 */
export default function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200">
      {/* Product Image */}
      <Link href={`/products/${item.id}`} className="flex-shrink-0">
        <div className="relative w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={item.images[0] || '/images/placeholder.jpg'}
            alt={item.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <Link
            href={`/products/${item.id}`}
            className="font-semibold text-gray-900 hover:text-primary transition-colors line-clamp-2 text-sm"
          >
            {item.name}
          </Link>
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-gray-400 hover:text-red-500 transition-colors ml-2 flex-shrink-0"
            aria-label="Remove item"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Price */}
        <div className="text-sm font-bold text-gray-900 mb-2">
          ${item.price.toLocaleString()}
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            aria-label="Decrease quantity"
          >
            <FiMinus size={14} />
          </button>
          <span className="text-sm font-semibold min-w-[2rem] text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
            aria-label="Increase quantity"
          >
            <FiPlus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
