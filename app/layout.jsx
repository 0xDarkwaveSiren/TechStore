import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Cart from '@/components/Cart';
import AnimatedBackground from '@/components/AnimatedBackground';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'TechStore - Modern Tech E-commerce',
  description: 'Shop the latest tech products including laptops, phones, headphones, and accessories at competitive prices.',
  keywords: 'tech, electronics, laptops, phones, headphones, accessories, e-commerce',
  authors: [{ name: 'TechStore' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

/**
 * Root Layout Component
 * Main layout wrapper with providers and global components
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-void-black text-white overflow-x-hidden`}>
        <CartProvider>
          <AnimatedBackground />
          <Header />
          <Cart />
          {children}

          {/* Footer */}
          <footer className="relative mt-20 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-neon-gradient">About TechStore</h3>
                  <p className="text-white/60">
                    Your trusted destination for the latest technology products.
                    We offer competitive prices and exceptional customer service.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="/" className="text-white/60 hover:text-neon-cyan transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/products" className="text-white/60 hover:text-neon-cyan transition-colors">
                        Products
                      </a>
                    </li>
                    <li>
                      <a href="/cart" className="text-white/60 hover:text-neon-cyan transition-colors">
                        Cart
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-bold mb-4 text-neon-gradient">Contact</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>Email: support@techstore.com</li>
                    <li>Phone: (555) 123-4567</li>
                    <li>Hours: Mon-Fri 9AM-6PM</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40">
                <p>&copy; {new Date().getFullYear()} TechStore. All rights reserved.</p>
                <p className="text-sm mt-2">Built with <span className="text-neon-cyan">Next.js</span> & <span className="text-neon-purple">Framer Motion</span></p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
