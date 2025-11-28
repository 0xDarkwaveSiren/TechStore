'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

/**
 * Custom hook to use Cart Context
 * @returns {Object} Cart context value
 */
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

/**
 * Cart Provider Component
 * Manages cart state and localStorage persistence
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem('techstore-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('techstore-cart', JSON.stringify(cart));
    }
  }, [cart, isClient]);

  /**
   * Add item to cart or increase quantity if already exists
   * @param {Object} product - Product to add
   */
  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);

      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  /**
   * Remove item from cart completely
   * @param {string} productId - ID of product to remove
   */
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  /**
   * Update quantity of item in cart
   * @param {string} productId - ID of product
   * @param {number} quantity - New quantity
   */
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  /**
   * Increase quantity by 1
   * @param {string} productId - ID of product
   */
  const increaseQuantity = (productId) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  /**
   * Decrease quantity by 1
   * @param {string} productId - ID of product
   */
  const decreaseQuantity = (productId) => {
    setCart(currentCart => {
      const item = currentCart.find(item => item.id === productId);
      if (item && item.quantity === 1) {
        return currentCart.filter(item => item.id !== productId);
      }
      return currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * Get total number of items in cart
   * @returns {number} Total item count
   */
  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Get cart subtotal
   * @returns {number} Subtotal amount
   */
  const getCartSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  /**
   * Check if product is in cart
   * @param {string} productId - ID of product
   * @returns {boolean} True if in cart
   */
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  /**
   * Get quantity of specific product in cart
   * @param {string} productId - ID of product
   * @returns {number} Quantity
   */
  const getProductQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  /**
   * Toggle cart sidebar
   */
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  /**
   * Open cart sidebar
   */
  const openCart = () => {
    setIsCartOpen(true);
  };

  /**
   * Close cart sidebar
   */
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getCartItemsCount,
    getCartSubtotal,
    isInCart,
    getProductQuantity,
    toggleCart,
    openCart,
    closeCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
