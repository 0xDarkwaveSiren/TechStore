'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { getAllProducts } from '@/data/products';

/**
 * Products Listing Page
 * Displays all products with filtering capabilities
 */
export default function ProductsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [products, setProducts] = useState(getAllProducts());
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [priceRangeData, setPriceRangeData] = useState({ min: 0, max: Infinity });
  const [searchQuery, setSearchQuery] = useState('');

  // Load filters from URL params on mount
  useEffect(() => {
    const category = searchParams.get('category') || 'All Products';
    const priceRange = searchParams.get('priceRange') || 'all';
    const search = searchParams.get('search') || '';

    setSelectedCategory(category);
    setSelectedPriceRange(priceRange);
    setSearchQuery(search);

    // Parse price range
    if (priceRange !== 'all') {
      const ranges = {
        '0-500': { min: 0, max: 500 },
        '500-1000': { min: 500, max: 1000 },
        '1000-2000': { min: 1000, max: 2000 },
        '2000+': { min: 2000, max: Infinity },
      };
      setPriceRangeData(ranges[priceRange] || { min: 0, max: Infinity });
    } else {
      setPriceRangeData({ min: 0, max: Infinity });
    }
  }, [searchParams]);

  // Filter products whenever filters change
  useEffect(() => {
    let filtered = getAllProducts();

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All Products') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRangeData.max !== Infinity || priceRangeData.min > 0) {
      filtered = filtered.filter(
        product => product.price >= priceRangeData.min && product.price <= priceRangeData.max
      );
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    setProducts(filtered);
  }, [selectedCategory, priceRangeData, searchQuery]);

  // Update URL params when filters change
  const updateURLParams = (category, priceRange) => {
    const params = new URLSearchParams();

    if (category && category !== 'All Products') {
      params.set('category', category);
    }

    if (priceRange && priceRange !== 'all') {
      params.set('priceRange', priceRange);
    }

    if (searchQuery) {
      params.set('search', searchQuery);
    }

    const newURL = params.toString() ? `/products?${params.toString()}` : '/products';
    router.push(newURL, { scroll: false });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    updateURLParams(category, selectedPriceRange);
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range.value);
    setPriceRangeData({ min: range.min, max: range.max });
    updateURLParams(selectedCategory, range.value);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Showing {products.length} {products.length === 1 ? 'product' : 'products'}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              selectedPriceRange={selectedPriceRange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </main>
  );
}
