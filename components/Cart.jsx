'use client';

import { FiX } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import Link from 'next/link';
import { useEffect } from 'react';

/**
 * Cart Component
 * Slide-in cart sidebar from right with cart items
 */
export default function Cart() {
  const { cart, isCartOpen, closeCart, getCartSubtotal, getCartItemsCount } = useCart();

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 fade-in"
          onClick={closeCart}
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">
              Shopping Cart ({getCartItemsCount()})
            </h2>
            <button
              onClick={closeCart}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close cart"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-24 h-24 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-gray-500 mb-6">
                  Add some products to get started!
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Browse Products
                </Link>
              </div>
            ) : (
              <div>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  Subtotal:
                </span>
                <span className="text-2xl font-bold text-gray-900">
                  ${getCartSubtotal().toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>

              {/* Buttons */}
              <div className="space-y-2">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="block w-full py-3 bg-primary text-white text-center font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                >
                  View Cart
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full py-3 bg-white text-gray-700 text-center font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
