# GollachutGadgets - Premium Electronics eCommerce Frontend

A modern, fully-responsive eCommerce frontend built with **Next.js 16**, **React**, **Tailwind CSS v4**, and pure **JavaScript** (no TypeScript).

## 🌟 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

## 📚 Project Overview

**GollachutGadgets** is a complete eCommerce frontend featuring:
- ✅ 10 sample products across 6 categories
- ✅ Full shopping cart with order summary
- ✅ Product filtering and sorting
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ User authentication pages (UI-ready)
- ✅ Multiple static pages (About, Contact, Privacy, Terms, Refund Policy)
- ✅ Modern, professional design with teal/black theme
- ✅ Interactive components and smooth animations

## 🎯 Pages & Routes

### Core Pages
| Route | Component | Features |
|-------|-----------|----------|
| `/` | Home | Hero carousel, categories, featured products, flash sale, brands |
| `/shop` | Shop All | Product grid, filters, sorting |
| `/category/:slug` | Category Listing | Category-specific products with filters |
| `/product/:id` | Product Details | Full product info, specs, related products |
| `/cart` | Shopping Cart | Cart items, quantity adjustment, order summary |

### User Pages
| Route | Component | Features |
|-------|-----------|----------|
| `/login` | Login | Email/password form, social login buttons |
| `/register` | Register | Full registration with password strength |

### Information Pages
| Route | Component | Features |
|-------|-----------|----------|
| `/about` | About Us | Company story, values, statistics |
| `/contact` | Contact Us | Contact form, business hours, location |
| `/privacy` | Privacy Policy | Full privacy policy text |
| `/terms` | Terms & Conditions | Terms and conditions text |
| `/refund` | Return & Refund | Detailed return and refund policy |

## 🎨 Design System

### Colors
- **Primary (Teal)**: `#14b8a6` - Main brand color
- **Secondary (Black)**: `#111827` - Dark backgrounds
- **Neutral (White/Gray)**: `#ffffff`, `#f9fafb`, `#e5e7eb`
- **Accent (Red)**: `#ef4444` - Alerts and errors

### Typography
- **Headings**: Geist (600-700 weight)
- **Body**: Geist (400-500 weight)
- **Line Height**: 1.5-1.6 for readability

### Spacing
- Uses Tailwind spacing scale (p-4, gap-6, etc.)
- No arbitrary pixel values

## 📂 File Structure

```
app/
├── layout.jsx              # Root layout with metadata
├── globals.css             # Tailwind config & design tokens
├── page.jsx                # Home page
├── shop/
│   └── page.jsx            # Shop all products
├── product/
│   └── [id]/page.jsx       # Product detail page
├── category/
│   └── [slug]/page.jsx     # Category listing
├── cart/
│   └── page.jsx            # Shopping cart
├── login/
│   └── page.jsx            # Login form
├── register/
│   └── page.jsx            # Registration form
├── about/
│   └── page.jsx            # About page
├── contact/
│   └── page.jsx            # Contact form
├── privacy/
│   └── page.jsx            # Privacy policy
├── terms/
│   └── page.jsx            # Terms & conditions
├── refund/
│   └── page.jsx            # Refund policy
└── not-found.jsx           # 404 page

components/
├── Header.jsx              # Navigation header
├── Footer.jsx              # Footer section
├── ProductCard.jsx         # Reusable product card
├── HeroCarousel.jsx        # Auto-rotating hero slider
├── CategoryGrid.jsx        # Category showcase
└── BrandShowcase.jsx       # Brand logos

public/data/
├── products.json           # 10 sample products
├── categories.json         # 6 categories
└── brands.json             # 6 brands
```

## 🚀 Key Features

### Product Management
- Dynamic product cards with:
  - Product images (from external URLs)
  - Price with discount calculations
  - Rating and review count
  - Stock status badges
  - Wishlist buttons
  - Quick add to cart

### Shopping Features
- **Filtering**: By price range, brand, availability
- **Sorting**: Featured, price (low/high), newest, popular
- **Cart Management**: Add/remove items, quantity adjustment
- **Order Summary**: Subtotal, discount, tax, delivery, total

### User Experience
- Sticky header with search functionality
- Mobile-responsive navigation menu
- Auto-rotating hero carousel
- Interactive hover effects
- Smooth page transitions
- Loading states and placeholders

### Responsive Design
- Mobile-first approach
- Mobile menu hamburger toggle
- Tablet-optimized layouts
- Desktop full-width experiences
- Touch-friendly buttons and inputs

## 💾 Data Format

### Products
Each product includes:
```javascript
{
  id,              // Unique identifier
  name,            // Product name
  category,        // Category slug
  price,           // Current price
  originalPrice,   // Original price
  discount,        // Discount percentage
  image,           // Product image URL
  stock,           // Available quantity
  rating,          // Star rating (0-5)
  reviews,         // Number of reviews
  description,     // Short description
  features,        // Array of key features
  specifications   // Object of specs
}
```

## 🔧 Component Props

### ProductCard
```javascript
<ProductCard product={productObject} />
```

### HeroCarousel
```javascript
<HeroCarousel />  // Auto-configurable, no props needed
```

### CategoryGrid
```javascript
<CategoryGrid categories={categoriesArray} />
```

### BrandShowcase
```javascript
<BrandShowcase brands={brandsArray} />
```

## 🎯 Features Implemented

- ✅ All pages created and linked
- ✅ Fully responsive layout
- ✅ Dummy JSON data for products/categories/brands
- ✅ Product filtering and sorting
- ✅ Interactive shopping cart
- ✅ User authentication UI
- ✅ Search bar in header
- ✅ Wishlist buttons
- ✅ Category browsing
- ✅ Hero carousel slider
- ✅ Flash sale section
- ✅ Newsletter subscription form
- ✅ Contact form
- ✅ Multiple static pages
- ✅ 404 error page
- ✅ Mobile-optimized navigation

## 🔮 Ready for Backend Integration

- 📡 **Database**: Replace JSON with Supabase, Neon, or MongoDB
- 🔐 **Authentication**: Add NextAuth.js or Auth0
- 💳 **Payments**: Integrate Stripe, bKash, or Nagad
- 🛒 **Cart Persistence**: Connect to user sessions
- 📧 **Email**: Set up Sendgrid for notifications
- 🔍 **Search**: Add Elasticsearch or Algolia

## 📝 Notes

- All components written in **JavaScript** (JSX), not TypeScript
- No TypeScript configuration needed
- Uses **Lucide React** for icons
- Uses **Next.js Image** for optimized images
- All product images from **Unsplash** (free URLs)
- Cart data is UI-only (client-side state)
- Authentication forms are UI-only (ready for backend)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

```json
{
  "next": "^16.0.0",
  "react": "^19.0.0",
  "tailwindcss": "^4.0.0",
  "lucide-react": "latest"
}
```

## 🎓 Learning Points

This project demonstrates:
- Next.js 16 App Router
- React Hooks (useState, useEffect)
- Tailwind CSS v4
- Responsive design principles
- Component composition
- Client-side state management
- Image optimization
- SEO best practices
- Accessibility standards

## 📞 Support

For questions or issues, create an issue or contact support@gollachutgadgets.com

---

**Built with** ❤️ using Next.js 16, React 19, and Tailwind CSS v4  
**Code Language**: Pure JavaScript (JSX) - No TypeScript
