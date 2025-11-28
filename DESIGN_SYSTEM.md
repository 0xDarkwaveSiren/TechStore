# TechStore Design System
## Futuristic Glassmorphism & Cyberpunk Aesthetics

This document outlines the design system powering TechStore's premium, Apple-meets-Cyberpunk aesthetic.

---

## Color Palette

### Cyberpunk Neons
```
Neon Cyan:   #00f3ff  (Primary accent, links, highlights)
Neon Purple: #bc13fe  (Secondary accent, gradients)
Neon Pink:   #ff00ff  (Tertiary accent, special elements)
```

### Base Colors
```
Void Black:  #050505  (Background, deep shadows)
Glass White: rgba(255, 255, 255, 0.05)  (Glass surfaces)
Border:      rgba(255, 255, 255, 0.2)   (Glass borders)
```

### Color Usage
- **Backgrounds**: Deep void black (#050505)
- **Glass Surfaces**: 5-20% white with heavy backdrop blur
- **Neon Accents**: Use sparingly for maximum impact
  - Text gradients on headers only
  - Thin border glows on hover/active states
  - Subtle glows behind key UI elements
- **Text**: White with varying opacity (100%, 80%, 60%, 40%)

---

## Typography

### Font Families
- **UI Text**: Inter (body, descriptions, labels)
- **Headings**: Space Grotesk (h1-h6, data displays)

### Font Variables
```css
--font-inter: 'Inter', sans-serif
--font-space-grotesk: 'Space Grotesk', sans-serif
```

### Typography Scale
```
Heading 1: 5xl-7xl (48-72px) - Bold
Heading 2: 4xl-5xl (36-48px) - Bold
Heading 3: 3xl-4xl (30-36px) - Bold
Body Large: xl-2xl (20-24px) - Regular
Body: base-lg (16-18px) - Regular
Small: sm-xs (14-12px) - Regular
```

### Text Effects
- **Neon Gradient**: `.text-neon-gradient`
  - Gradient from cyan to purple
  - Use on hero headlines and section titles
- **Glow Effect**: `drop-shadow-[0_0_30px_rgba(0,243,255,0.5)]`
  - Apply to important headings for holographic feel

---

## Glassmorphism

### Glass Variants

#### Light Glass (`.glass`)
```css
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(20px)
border: 1px solid rgba(255, 255, 255, 0.2)
```
**Use for**: Product cards, category tiles, feature cards

#### Heavy Glass (`.glass-heavy`)
```css
background: rgba(0, 0, 0, 0.2)
backdrop-filter: blur(40px)
border: 1px solid rgba(255, 255, 255, 0.1)
```
**Use for**: Navigation bar, modals, hero sections

### Border Radius
- **Glass Corners**: `rounded-glass` (30px)
- Standard corners for glassmorphism to achieve Apple-like polish

### Shadows
```css
Glass Shadow:   0 8px 32px 0 rgba(0, 0, 0, 0.37)
Neon Cyan:      0 0 20px rgba(0, 243, 255, 0.5), 0 0 60px rgba(0, 243, 255, 0.2)
Neon Purple:    0 0 20px rgba(188, 19, 254, 0.5), 0 0 60px rgba(188, 19, 254, 0.2)
```

---

## Components

### Navigation Island
**Floating navbar centered at top with:**
- Heavy glass background
- Neon glow on hover
- Spring-based animations
- Responsive collapse on mobile

### Jelly Buttons
**Three variants:**

1. **Primary** (neon gradient)
   ```jsx
   <JellyButton variant="primary">
     Explore Products
   </JellyButton>
   ```

2. **Secondary** (glass with border)
   ```jsx
   <JellyButton variant="secondary">
     Learn More
   </JellyButton>
   ```

3. **Ghost** (transparent with border)
   ```jsx
   <JellyButton variant="ghost">
     Cancel
   </JellyButton>
   ```

**Animation specs:**
- Hover scale: 1.05 (spring physics)
- Tap scale: 0.95 (spring physics)
- Spring config: `stiffness: 400, damping: 10`

### Product Cards
**Glassmorphism design with:**
- Light glass background
- Neon border glow on hover
- Image zoom on hover (scale 1.1)
- Card lift animation (y: -8px)
- Spring physics for smooth feel

### Hero Card
**Holographic glass card featuring:**
- Heavy glass backdrop
- Animated shimmer effect (3s loop)
- Gradient overlay (cyan to purple)
- Stats section with neon text
- Staggered animation entrance

---

## Animations

### Framer Motion Config

#### Spring Physics
```javascript
// Jelly bounce
{
  type: 'spring',
  stiffness: 400,
  damping: 10
}

// Smooth lift
{
  type: 'spring',
  stiffness: 300,
  damping: 20
}

// Header entrance
{
  type: 'spring',
  stiffness: 100,
  damping: 20
}
```

#### Entrance Animations
- **Hero**: Fade + slide up (y: 40)
- **Cards**: Stagger children with 0.1s delay
- **Header**: Slide down from -100px

#### Hover States
- **Cards**: Scale 1.03 + lift -8px
- **Buttons**: Scale 1.05
- **Logo**: Scale 1.05 + rotate 5deg

#### Tap/Click
- **Buttons**: Scale 0.95
- **Cards**: Scale 0.98

### Background Orbs
**Drifting gradient spheres:**
- 4 orbs in cyan, purple, pink
- Slow infinite drift (18-25s per cycle)
- Heavy blur (120px)
- Subtle opacity (15-30%)

---

## Layout Patterns

### Hero Section
```
Padding: pt-32 pb-20 (top-bottom)
Max Width: 7xl (1280px)
Glass Card: Heavy glass with shimmer
Content: Centered, max-w-4xl
```

### Section Spacing
```
Section Padding: py-20 (vertical)
Container Padding: px-4 sm:px-6 lg:px-8
Section Gap: 20 (80px between sections)
```

### Grid Systems
- **Categories**: 1 → 2 → 4 columns
- **Products**: 1 → 2 → 3 → 4 columns
- **Features**: 1 → 3 columns

---

## Interactive States

### Hover Effects
1. **Scale up** (buttons, cards, links)
2. **Neon glow** activation
3. **Border color** shift (white → neon)
4. **Background** opacity increase

### Active States
- Neon border glow
- Inner shadow for depth
- Slight scale down (0.95)

### Disabled States
- Opacity: 50%
- Cursor: not-allowed
- No hover effects

---

## Accessibility

### Contrast Ratios
- Primary text on void black: AAA (21:1)
- White/60 on void black: AA (12.6:1)
- Neon colors: Use for accents only, not body text

### Motion
- All animations use spring physics (no jarring linear)
- Respect `prefers-reduced-motion` for accessibility

---

## Component Library

### Available Components
```
/components
├── AnimatedBackground.jsx  (Drifting orb background)
├── Header.jsx              (Floating island navbar)
├── JellyButton.jsx         (Spring-animated buttons)
├── ProductCard.jsx         (Glass product cards)
├── ProductGrid.jsx         (Responsive grid)
├── Cart.jsx                (Slide-in cart sidebar)
├── CartItem.jsx            (Cart line items)
├── FilterSidebar.jsx       (Product filters)
└── Toast.jsx               (Notifications)
```

---

## Best Practices

### DO:
✅ Use glassmorphism for containers and surfaces
✅ Apply neon accents sparingly for maximum impact
✅ Leverage spring physics for all animations
✅ Keep backgrounds dark to highlight glass effect
✅ Use neon gradients on headings and key CTAs
✅ Blur background orbs heavily (120px+)

### DON'T:
❌ Overuse neon colors (keep UI dark and mysterious)
❌ Use linear animations (always spring physics)
❌ Make everything bright (defeats cyberpunk aesthetic)
❌ Skip backdrop blur on glass elements
❌ Use small border radius (30px minimum)
❌ Forget hover states (they're critical for feel)

---

## Tech Stack Integration

### Tailwind Custom Classes
```css
.glass              // Light glassmorphism
.glass-heavy        // Heavy glassmorphism
.text-neon-gradient // Cyan to purple gradient
.rounded-glass      // 30px corners
```

### Framer Motion Imports
```javascript
import { motion } from 'framer-motion';
```

### Next.js Font Loading
```javascript
import { Inter, Space_Grotesk } from 'next/font/google';
```

---

## Inspiration References

### Design Influences
- **Apple**: Dynamic Island, spring physics, polish
- **Cyberpunk 2077**: Neon color palette, dark aesthetics
- **Glassmorphism**: iOS design language, depth layers
- **Holographic UI**: Shimmer effects, futuristic feel

### Key Differentiators
1. **Living background** (drifting orbs)
2. **Spring-based feel** (all interactions)
3. **Holographic shimmer** (hero card)
4. **Neon-glass fusion** (unique aesthetic)

---

## Performance Considerations

- Orb animations use CSS transforms (GPU accelerated)
- Backdrop blur uses `will-change` for smooth rendering
- Images use Next.js Image optimization
- Animations respect reduced motion preferences
- Spring physics cached for consistent performance

---

## Future Enhancements

- [ ] Add particle effects on button clicks
- [ ] Implement 3D card tilt on hover
- [ ] Add sound effects for interactions
- [ ] Create dark/light mode toggle
- [ ] Add more neon color variants
- [ ] Implement cursor trail effect

---

**Built with ❤️ using Next.js, Framer Motion, and Tailwind CSS**
