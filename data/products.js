/**
 * Mock product data for TechStore
 * @type {Array<{id: string, name: string, price: number, category: string, rating: number, images: string[], description: string, specifications: string[], inStock: boolean}>}
 */
export const products = [
  {
    id: '1',
    name: 'MacBook Pro 16" M3 Max',
    price: 2499,
    category: 'Laptops',
    rating: 4.9,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'The most powerful MacBook Pro ever, with the M3 Max chip delivering unprecedented performance for professionals. Features a stunning Liquid Retina XDR display, up to 22 hours of battery life, and advanced thermal architecture.',
    specifications: [
      'Apple M3 Max chip with 16-core CPU',
      '40-core GPU',
      '48GB unified memory',
      '1TB SSD storage',
      '16.2-inch Liquid Retina XDR display',
      'Up to 22 hours battery life',
      '140W USB-C Power Adapter',
      'Three Thunderbolt 4 ports'
    ],
    inStock: true
  },
  {
    id: '2',
    name: 'Dell XPS 15 OLED',
    price: 1899,
    category: 'Laptops',
    rating: 4.7,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Premium Windows laptop with stunning OLED display and powerful Intel Core i9 processor. Perfect for content creators and professionals demanding top-tier performance.',
    specifications: [
      'Intel Core i9-13900H processor',
      'NVIDIA GeForce RTX 4060 8GB',
      '32GB DDR5 RAM',
      '1TB NVMe SSD',
      '15.6-inch 3.5K OLED touchscreen',
      'Up to 13 hours battery life',
      'Thunderbolt 4 support',
      'Windows 11 Pro'
    ],
    inStock: true
  },
  {
    id: '3',
    name: 'iPhone 15 Pro Max',
    price: 1199,
    category: 'Phones',
    rating: 4.8,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'The ultimate iPhone with titanium design, A17 Pro chip, and advanced camera system. Features the Action button and USB-C connectivity.',
    specifications: [
      'A17 Pro chip with 6-core CPU',
      '6.7-inch Super Retina XDR display',
      'ProMotion technology with 120Hz',
      'Triple camera system (48MP + 12MP + 12MP)',
      '256GB storage',
      'Titanium design',
      '5G capable',
      'Up to 29 hours video playback'
    ],
    inStock: true
  },
  {
    id: '4',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    category: 'Phones',
    rating: 4.8,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Samsung\'s flagship smartphone with S Pen, powerful Snapdragon processor, and revolutionary AI features. The ultimate Android experience.',
    specifications: [
      'Snapdragon 8 Gen 3 processor',
      '6.8-inch Dynamic AMOLED 2X display',
      'Quad camera system (200MP main)',
      '12GB RAM',
      '512GB storage',
      'S Pen included',
      '5000mAh battery with 45W fast charging',
      'Titanium frame'
    ],
    inStock: true
  },
  {
    id: '5',
    name: 'Sony WH-1000XM5 Headphones',
    price: 399,
    category: 'Headphones',
    rating: 4.9,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Industry-leading noise canceling headphones with exceptional sound quality. Features 30-hour battery life and premium comfort for all-day wear.',
    specifications: [
      'Industry-leading noise cancellation',
      '30-hour battery life',
      'Multi-point connection',
      'Speak-to-Chat technology',
      'Premium sound quality with LDAC',
      'Lightweight design',
      'Touch controls',
      'Quick charging (3 min = 3 hours)'
    ],
    inStock: true
  },
  {
    id: '6',
    name: 'AirPods Pro (2nd Gen)',
    price: 249,
    category: 'Headphones',
    rating: 4.7,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Apple\'s premium wireless earbuds with active noise cancellation and adaptive audio. MagSafe charging case with up to 30 hours total battery life.',
    specifications: [
      'Active Noise Cancellation',
      'Adaptive Audio',
      'Personalized Spatial Audio',
      'H2 chip for enhanced performance',
      'Up to 6 hours listening time',
      'MagSafe charging case',
      'IPX4 water resistance',
      'Automatic switching between devices'
    ],
    inStock: true
  },
  {
    id: '7',
    name: 'iPad Pro 12.9" M2',
    price: 1099,
    category: 'Accessories',
    rating: 4.8,
    images: ['/images/ipad-pro.jpg', '/images/ipad-pro-2.jpg'],
    description: 'The ultimate iPad experience with M2 chip and stunning Liquid Retina XDR display. Perfect for creative professionals and power users.',
    specifications: [
      'Apple M2 chip',
      '12.9-inch Liquid Retina XDR display',
      'ProMotion technology',
      '128GB storage',
      '5G capable',
      'Face ID',
      'Thunderbolt / USB 4 support',
      'All-day battery life'
    ],
    inStock: true
  },
  {
    id: '8',
    name: 'Logitech MX Master 3S',
    price: 99,
    category: 'Accessories',
    rating: 4.7,
    images: ['/images/logitech-mouse.jpg', '/images/logitech-mouse-2.jpg'],
    description: 'Premium wireless mouse with ultra-precise 8K DPI sensor and quiet clicks. Perfect for professionals who demand precision and comfort.',
    specifications: [
      '8K DPI sensor',
      'Quiet clicks',
      'USB-C rechargeable (70 days)',
      'Multi-device connectivity (3 devices)',
      'Customizable buttons',
      'MagSpeed scroll wheel',
      'Ergonomic design',
      'Works on any surface'
    ],
    inStock: true
  },
  {
    id: '9',
    name: 'LG UltraGear 27" Gaming Monitor',
    price: 599,
    category: 'Accessories',
    rating: 4.6,
    images: ['/images/lg-monitor.jpg', '/images/lg-monitor-2.jpg'],
    description: 'Premium gaming monitor with 4K resolution, 144Hz refresh rate, and 1ms response time. Features NVIDIA G-SYNC compatibility and HDR10.',
    specifications: [
      '27-inch 4K UHD (3840x2160)',
      '144Hz refresh rate',
      '1ms response time (GtG)',
      'NVIDIA G-SYNC compatible',
      'HDR10 support',
      'IPS panel',
      'AMD FreeSync Premium',
      'Height adjustable stand'
    ],
    inStock: true
  },
  {
    id: '10',
    name: 'Bose QuietComfort Earbuds II',
    price: 299,
    category: 'Headphones',
    rating: 4.6,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Premium wireless earbuds with personalized noise cancellation. CustomTune technology adapts to your ears for optimal sound.',
    specifications: [
      'Personalized noise cancellation',
      'CustomTune sound calibration',
      'Up to 6 hours battery life',
      'IPX4 water resistance',
      'Touch controls',
      'Three sizes of ear tips and bands',
      'Bluetooth 5.3',
      'Wireless charging case'
    ],
    inStock: true
  },
  {
    id: '11',
    name: 'ASUS ROG Zephyrus G14',
    price: 1649,
    category: 'Laptops',
    rating: 4.7,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Compact gaming powerhouse with AMD Ryzen 9 and RTX 4060. Perfect balance of performance and portability for gamers on the go.',
    specifications: [
      'AMD Ryzen 9 7940HS processor',
      'NVIDIA GeForce RTX 4060 8GB',
      '16GB DDR5 RAM',
      '1TB PCIe 4.0 SSD',
      '14-inch QHD+ 165Hz display',
      'Up to 10 hours battery life',
      'RGB backlit keyboard',
      'Windows 11'
    ],
    inStock: true
  },
  {
    id: '12',
    name: 'Google Pixel 8 Pro',
    price: 999,
    category: 'Phones',
    rating: 4.6,
    images: ['/images/placeholder.jpg', '/images/placeholder.jpg'],
    description: 'Google\'s flagship phone with advanced AI features and exceptional camera system. Pure Android experience with 7 years of updates.',
    specifications: [
      'Google Tensor G3 chip',
      '6.7-inch LTPO OLED display',
      '120Hz refresh rate',
      'Triple camera system (50MP main)',
      '12GB RAM',
      '256GB storage',
      'Magic Eraser and Best Take',
      '7 years of OS updates'
    ],
    inStock: true
  },
  {
    id: '13',
    name: 'Samsung 49" Odyssey OLED',
    price: 1599,
    category: 'Accessories',
    rating: 4.8,
    images: ['/images/samsung-odyssey.jpg', '/images/samsung-odyssey-2.jpg'],
    description: 'Ultra-wide OLED gaming monitor with stunning visuals and immersive curved display. 240Hz refresh rate for competitive gaming.',
    specifications: [
      '49-inch DQHD (5120x1440)',
      'OLED panel with infinite contrast',
      '240Hz refresh rate',
      '0.03ms response time',
      '1800R curved display',
      'AMD FreeSync Premium Pro',
      'HDR True Black 400',
      'Height adjustable stand'
    ],
    inStock: false
  },
  {
    id: '14',
    name: 'Keychron Q1 Pro Mechanical Keyboard',
    price: 189,
    category: 'Accessories',
    rating: 4.7,
    images: ['/images/keychron-q1.jpg', '/images/keychron-q1-2.jpg'],
    description: 'Premium wireless mechanical keyboard with hot-swappable switches and premium build quality. Perfect for typing enthusiasts.',
    specifications: [
      'Wireless (Bluetooth 5.1) and wired',
      'Hot-swappable switches',
      'Full aluminum CNC body',
      'QMK/VIA support',
      'RGB backlighting',
      'Up to 100 hours battery life',
      'Gasket mount design',
      'Mac and Windows compatible'
    ],
    inStock: true
  },
  {
    id: '15',
    name: 'Anker 747 PowerBank 25600mAh',
    price: 149,
    category: 'Accessories',
    rating: 4.5,
    images: ['/images/anker-powerbank.jpg', '/images/anker-powerbank-2.jpg'],
    description: 'High-capacity power bank with 140W output. Can charge laptops, phones, and tablets simultaneously with USB-C Power Delivery.',
    specifications: [
      '25,600mAh capacity',
      '140W max output',
      'Two USB-C ports + one USB-A',
      'Charge MacBook Pro to 50% in 30 min',
      'Smart temperature control',
      'Digital display',
      'Supports PD 3.1',
      'Premium build quality'
    ],
    inStock: true
  }
];

/**
 * Get all products
 * @returns {Array} All products
 */
export const getAllProducts = () => products;

/**
 * Get product by ID
 * @param {string} id - Product ID
 * @returns {Object|undefined} Product or undefined
 */
export const getProductById = (id) => products.find(product => product.id === id);

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {Array} Filtered products
 */
export const getProductsByCategory = (category) => {
  if (category === 'All Products' || !category) return products;
  return products.filter(product => product.category === category);
};

/**
 * Get all unique categories
 * @returns {Array<string>} Array of category names
 */
export const getCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return ['All Products', ...categories];
};

/**
 * Search products by name or description
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
export const searchProducts = (query) => {
  if (!query) return products;
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

/**
 * Filter products by price range
 * @param {number} min - Minimum price
 * @param {number} max - Maximum price
 * @returns {Array} Filtered products
 */
export const filterByPriceRange = (min, max) => {
  return products.filter(product => product.price >= min && product.price <= max);
};
