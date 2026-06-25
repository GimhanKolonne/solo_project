# SOLO - Streetwear E-Commerce Platform

A modern, minimalist streetwear e-commerce frontend built with React and Vite. Features a bold black and red design theme with responsive mobile-first layouts.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Routing**: React Router DOM 7.6.0
- **Icons**: Lucide React & React Icons
- **Package Manager**: npm

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── NavBar.jsx          # Main navigation with cart and search
│   │   │   ├── MobileMenu.jsx      # Responsive mobile navigation
│   │   │   ├── Footer.jsx          # Site footer with links and newsletter
│   │   │   ├── Header.jsx          #
│   │   │   └── SearchBar.jsx       # Search functionality
│   │   ├── layouts/
│   │   │   ├── UserLayout.jsx      # Main user layout wrapper
│   │   │   ├── Main.jsx            # Homepage trending section
│   │   │   ├── Hero.jsx            # Hero banner section
│   │   │   ├── TopBar.jsx          #
│   │   │   ├── CartDrawer.jsx      # Shopping cart drawer
│   │   │   └── AdminLayout.jsx     # Admin layout (planned)
│   │   ├── admin/                  # Admin components (in progress)
│   │   ├── cart/                   # Cart components
│   │   └── products/               # Product components (planned)
│   ├── pages/
│   │   └── Home.jsx                # Homepage with shop by edit section
│   ├── assets/                     # Images and media files
│   ├── App.jsx                     # Main app router
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/
│   └── assets/images/              # Public image assets
└── package.json
```

## Features Implemented

### ✅ Navigation & Layout

- **NavBar**: Logo with hover animation, menu links, search toggle, user profile link, shopping cart with item count
- **Mobile Menu**: Responsive hamburger menu with smooth slide-in animation
- **Footer**: Newsletter signup, quick links, support section, social media placeholder
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints (sm, md, lg)

### ✅ Homepage

- **Hero Section**: Full-width banner with "Be Seen | Be SOLO" tagline and CTA button
- **Trending Section**: Featured items grid with hover animations (scale, overlay effects)
- **Shop by Edit**: Category cards (Men, Women, Accessories) with images and descriptions
- **Featured Products**: Product grid with category labels, prices, and "Add to Cart" buttons
- **About Section**: Brand story with dark background and highlights
- **Newsletter CTA**: Call-to-action for new arrivals and shopping

### ✅ Design System

- **Color Scheme**: Black (primary), Red-600 (accent/hover), Gray palette (secondary)
- **Typography**: Uppercase headers, poppins font, letter-spacing for sophistication
- **Components**: Rounded corners, smooth transitions, consistent border styling
- **Hover Effects**: Red accent on text/buttons, scale transforms on images, shadow effects

### ✅ Interactive Elements

- Shopping cart drawer
- Search bar toggle
- Mobile menu toggle
- Button hover states with smooth transitions
- Image hover zoom effects

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:5173)
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Preview production build
npm npm run preview
```

### Linting

```bash
npm run lint
```

## Design Theme

The app uses a bold, minimal design with:

- **Primary Actions**: Black background with red hover state
- **Secondary Actions**: Border-only buttons with black text and red hover
- **Typography**: Uppercase, tracked text for headings
- **Spacing**: Generous padding and consistent gap between sections
- **Radius**: Rounded-full for buttons, rounded-2xl/3xl for cards

## Features in Progress / Planned

- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Admin dashboard
- [ ] Product filter & search
- [ ] Wishlist/favorites
- [ ] Checkout process
- [ ] Backend integration

## Environment Variables

Currently using static data. Backend integration will require:

- API endpoint configuration
- Authentication tokens
- Product database connection

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
