'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FiStar, FiShoppingCart, FiChevronRight } from 'react-icons/fi';
import { getProductById, getAllProducts } from '@/data/products';
import { useCart } from '@/context/CartContext';
import ProductGrid from '@/components/ProductGrid';

/**
 * Product Detail Page
 * Displays detailed product information
 */
export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, openCart, isInCart, getProductQuantity } = useCart();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = getProductById(params.id);

    if (!foundProduct) {
      router.push('/products');
      return;
    }

    setProduct(foundProduct);

    // Get related products (same category, different product)
    const related = getAllProducts()
      .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
      .slice(0, 4);
    setRelatedProducts(related);
  }, [params.id, router]);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(product);

    setTimeout(() => {
      setIsAdding(false);
      openCart();
    }, 300);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <FiChevronRight size={16} />
          <Link href="/products" className="hover:text-primary">
            Products
          </Link>
          <FiChevronRight size={16} />
          <Link
            href={`/products?category=${product.category}`}
            className="hover:text-primary"
          >
            {product.category}
          </Link>
          <FiChevronRight size={16} />
          <span className="text-gray-900 font-semibold">{product.name}</span>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div>
              {/* Main Image */}
              <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[selectedImage] || '/images/placeholder.jpg'}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative h-20 bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? 'border-primary'
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        fill
                        sizes="100px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {/* Category */}
              <Link
                href={`/products?category=${product.category}`}
                className="inline-block text-sm text-primary font-semibold uppercase tracking-wide mb-2 hover:underline"
              >
                {product.category}
              </Link>

              {/* Name */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 fill-current" size={20} />
                  <span className="ml-2 text-lg font-semibold text-gray-900">
                    {product.rating.toFixed(1)}
                  </span>
                </div>
                <span className="ml-4 text-gray-600">
                  ({Math.floor(Math.random() * 500 + 100)} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-semibold">
                    In Stock
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 text-red-800 font-semibold">
                    Out of Stock
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAdding}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
                  product.inStock
                    ? 'bg-primary text-white hover:bg-primary-dark active:scale-95'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } ${isAdding ? 'scale-95' : ''}`}
              >
                <FiShoppingCart size={24} />
                <span>
                  {isAdding
                    ? 'Adding to Cart...'
                    : isInCart(product.id)
                    ? `In Cart (${getProductQuantity(product.id)})`
                    : 'Add to Cart'}
                </span>
              </button>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Specifications
                </h2>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Products
            </h2>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </main>
  );
}
