'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiX, FiPlus, FiMinus, FiChevronRight } from 'react-icons/fi';
import { useCart } from '@/context/CartContext';

/**
 * Cart Page
 * Full page view of shopping cart
 */
export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartSubtotal,
  } = useCart();

  const subtotal = getCartSubtotal();
  const shipping = subtotal > 100 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <FiChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Shopping Cart</span>
        </nav>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          // Empty Cart State
          <div className="bg-white rounded-lg shadow-md p-12">
            <div className="text-center">
              <div className="text-gray-400 mb-6">
                <svg
                  className="w-32 h-32 mx-auto"
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Looks like you haven't added anything to your cart yet. Start shopping to find amazing deals!
              </p>
              <Link
                href="/products"
                className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Browse Products
              </Link>
            </div>
          </div>
        ) : (
          // Cart with Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold text-gray-900">
                    Items ({cart.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-sm text-red-600 hover:text-red-700 font-semibold"
                  >
                    Clear Cart
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex gap-6">
                        {/* Product Image */}
                        <Link
                          href={`/products/${item.id}`}
                          className="flex-shrink-0"
                        >
                          <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                            <Image
                              src={item.images[0] || '/images/placeholder.jpg'}
                              alt={item.name}
                              fill
                              sizes="96px"
                              className="object-cover"
                            />
                          </div>
                        </Link>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex-1">
                              <Link
                                href={`/products/${item.id}`}
                                className="font-semibold text-gray-900 hover:text-primary transition-colors block mb-1"
                              >
                                {item.name}
                              </Link>
                              <span className="text-sm text-gray-500">
                                {item.category}
                              </span>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                              aria-label="Remove item"
                            >
                              <FiX size={20} />
                            </button>
                          </div>

                          {/* Price and Quantity */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-3">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <FiMinus size={16} />
                              </button>
                              <span className="text-lg font-semibold min-w-[3rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => increaseQuantity(item.id)}
                                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <FiPlus size={16} />
                              </button>
                            </div>

                            <div className="text-right">
                              <div className="text-xl font-bold text-gray-900">
                                ${(item.price * item.quantity).toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-500">
                                ${item.price.toLocaleString()} each
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Continue Shopping */}
              <Link
                href="/products"
                className="inline-flex items-center mt-6 text-primary hover:text-primary-dark font-semibold"
              >
                <span>← Continue Shopping</span>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}

                  <div className="flex justify-between text-gray-700">
                    <span>Tax (8%)</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors mb-3">
                  Proceed to Checkout
                </button>

                <Link
                  href="/products"
                  className="block w-full py-3 bg-white text-gray-700 text-center font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
