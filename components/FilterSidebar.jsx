'use client';

import { getCategories } from '@/data/products';

/**
 * FilterSidebar Component
 * Category and price range filters
 * @param {Object} props - Component props
 * @param {string} props.selectedCategory - Currently selected category
 * @param {Function} props.onCategoryChange - Category change handler
 * @param {string} props.selectedPriceRange - Currently selected price range
 * @param {Function} props.onPriceRangeChange - Price range change handler
 */
export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  selectedPriceRange,
  onPriceRangeChange,
}) {
  const categories = getCategories();

  const priceRanges = [
    { label: 'All Prices', value: 'all', min: 0, max: Infinity },
    { label: 'Under $500', value: '0-500', min: 0, max: 500 },
    { label: '$500 - $1000', value: '500-1000', min: 500, max: 1000 },
    { label: '$1000 - $2000', value: '1000-2000', min: 1000, max: 2000 },
    { label: '$2000+', value: '2000+', min: 2000, max: Infinity },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => onPriceRangeChange(range)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedPriceRange === range.value
                  ? 'bg-primary text-white font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedCategory !== 'All Products' || selectedPriceRange !== 'all') && (
        <button
          onClick={() => {
            onCategoryChange('All Products');
            onPriceRangeChange(priceRanges[0]);
          }}
          className="w-full mt-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
}
