# TechStore - Futuristic Tech E-commerce

A stunning, responsive e-commerce store built with Next.js 14 featuring **Futuristic Glassmorphism** design, **Framer Motion** animations, and a premium **Cyberpunk aesthetic** that merges Apple's design language with cutting-edge visual effects.

## Features

- **Product Display**: Responsive grid layout with 15+ tech products
- **Shopping Cart**:
  - Slide-in cart sidebar with smooth animations
  - Persistent storage using localStorage
  - Real-time cart updates and quantity management
  - Cart badge showing total items
- **Product Filtering**:
  - Filter by category (Laptops, Phones, Headphones, Accessories)
  - Filter by price range
  - Real-time search functionality
  - Shareable URLs with filter parameters
- **Product Pages**:
  - Dynamic routing for individual products
  - Image gallery with thumbnail navigation
  - Detailed specifications and descriptions
  - Related products section
- **Premium UI/UX**:
  - Glassmorphism design language
  - Framer Motion spring physics animations
  - Drifting gradient orb background
  - Floating island navbar (Dynamic Island style)
  - Holographic shimmer effects
  - Neon glow hover states
  - Jelly button interactions
  - Smooth page transitions
  - Loading states with Next.js Suspense
  - Empty state messages
  - Fully responsive (mobile-first)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (Custom glassmorphism utilities)
- **Animations**: Framer Motion (Spring physics)
- **Typography**: next/font (Inter + Space Grotesk)
- **Icons**: React Icons
- **State Management**: React Context API
- **Data Persistence**: localStorage
- **Image Optimization**: Next.js Image component

## Design System

### Futuristic Glassmorphism Aesthetic
- **Glass Morphism**: Heavy backdrop blur with gradient borders
- **Cyberpunk Colors**: Neon cyan (#00f3ff), neon purple (#bc13fe)
- **Animated Background**: Drifting gradient orbs for living atmosphere
- **Spring Physics**: Apple-like jelly interactions on all components
- **Floating Island**: Dynamic Island-inspired navigation bar
- **Holographic Effects**: Shimmer animations on hero section

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for complete design guidelines.

## Project Structure

```
TechStore/
├── app/
│   ├── layout.jsx           # Root layout with providers
│   ├── page.jsx             # Home page
│   ├── globals.css          # Global styles & Tailwind
│   ├── loading.jsx          # Loading state
│   ├── products/
│   │   ├── page.jsx         # Products listing
│   │   ├── loading.jsx      # Products loading state
│   │   └── [id]/
│   │       └── page.jsx     # Product detail page
│   └── cart/
│       └── page.jsx         # Cart page
├── components/
│   ├── Header.jsx           # Navigation header
│   ├── ProductGrid.jsx      # Product grid layout
│   ├── ProductCard.jsx      # Individual product card
│   ├── Cart.jsx             # Cart sidebar
│   ├── CartItem.jsx         # Cart item component
│   ├── FilterSidebar.jsx    # Filters component
│   └── Toast.jsx            # Toast notifications
├── context/
│   └── CartContext.jsx      # Cart state management
├── data/
│   └── products.js          # Mock product data
└── public/
    └── images/              # Product images
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0xDarkwaveSiren/TechStore.git
cd TechStore
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

Deployed at: [techstore-shop.vercel.app](https://techstore-shop.vercel.app)

### Netlify

Alternative deployment option:

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build command: `npm run build`
4. Configure publish directory: `.next`

## Features in Detail

### Shopping Cart
- Add/remove items with smooth animations
- Adjust quantities with +/- controls
- Persistent cart across sessions
- Real-time subtotal calculation
- Slide-in sidebar for quick access

### Product Filtering
- Category-based filtering
- Price range filters
- Search by product name or description
- URL parameter persistence for sharing
- Clear all filters option

### Product Pages
- Dynamic routing with Next.js App Router
- Optimized images with Next.js Image
- Image gallery with multiple views
- Breadcrumb navigation
- Related products recommendations
- Stock status indicators

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3-4 columns
- Touch-friendly interface
- Optimized for all screen sizes

## Development Notes

### Adding New Products

Edit `data/products.js` to add new products:

```javascript
{
  id: '16',
  name: 'Product Name',
  price: 999,
  category: 'Laptops',
  rating: 4.8,
  images: ['/images/product.jpg'],
  description: 'Product description...',
  specifications: ['Spec 1', 'Spec 2'],
  inStock: true
}
```

### Customizing Styles

- Edit `tailwind.config.js` for theme customization
- Primary color: `#3B82F6` (blue)
- Modify `app/globals.css` for global styles

### Environment Variables

Create `.env.local` for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://techstore-shop.vercel.app
```

## Future Enhancements

- [ ] User authentication
- [ ] Payment integration (Stripe)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Admin dashboard
- [ ] Backend API integration
- [ ] Product recommendations with AI
- [ ] Email notifications

## License

MIT License - feel free to use this project for your portfolio or learning purposes.

## Author

Built by [0xDarkwaveSiren](https://github.com/0xDarkwaveSiren) as a portfolio project for Upwork.

## Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- React Icons for the icon library
