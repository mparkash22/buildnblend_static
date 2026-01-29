# Build & Blend - Premium Wellness Website

A premium healthy fusion QSR website for Build & Blend, specializing in Mexican, Mediterranean, and Indian fusion cuisine in Delhi, Satya Niketan.

## Project Structure

```
build-and-blend/
├── index.html                 # Homepage
├── about.html                 # About Us page (to be created)
├── menu.html                  # Menu page (to be created)
├── nutrition.html             # Nutrition page (to be created)
├── locations.html             # Locations page (to be created)
├── community.html             # Community page (to be created)
├── contact.html               # Contact page (to be created)
├── css/
│   ├── reset.css              # CSS reset/normalize
│   ├── variables.css          # CSS custom properties (colors, spacing, typography)
│   ├── typography.css         # Font styles and hierarchy
│   ├── components.css         # Reusable components (buttons, cards, navigation, footer, forms)
│   ├── layout.css             # Grid systems and page layouts
│   ├── responsive.css         # Media queries for responsive design
│   └── animations.css         # Transitions and keyframes
├── js/
│   ├── main.js                # Navigation, scroll behavior, mobile menu
│   ├── menu-filter.js         # Menu category filtering (to be implemented)
│   ├── form-validation.js     # Contact form validation (to be implemented)
│   └── lazy-load.js           # Image lazy loading (to be implemented)
├── images/
│   ├── hero/                  # Hero section images
│   ├── menu/                  # Menu item photos
│   ├── locations/             # Location photos
│   ├── community/             # Testimonial photos
│   └── icons/                 # UI icons
├── assets/
│   ├── logo.svg               # Main logo (to be created)
│   ├── logo-white.svg         # Inverse logo (to be created)
│   └── favicon.ico            # Browser favicon (to be created)
└── README.md                  # This file
```

## Design System

### Color Palette
- **Dark Green**: #1B4332 (Primary brand color)
- **Gold**: #D4AF37 (Accent color)
- **Lime Green**: #9ACD32 (Highlight color)
- **Dark Charcoal**: #2D3436 (Text color)
- **Cream**: #F8F7F2 (Background light)
- **Off-White**: #FFFAF0 (Background alternative)

### Typography
- **Font Family**: Segoe UI (with fallbacks)
- **H1**: 3.5rem (56px) desktop, 2rem (32px) mobile
- **H2**: 2.5rem (40px)
- **H3**: 1.8rem (28.8px)
- **Body**: 1rem (16px)
- **Line Height**: 1.7 for body text, 1.2 for headings

### Spacing System (8px base scale)
- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 60px
- 4xl: 80px

### Border Radius
- Cards: 12px
- Buttons: 50px
- Small elements: 8px

## Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## Features
- Fully responsive design (mobile-first approach)
- Sticky navigation header
- Mobile hamburger menu
- Smooth scroll behavior
- WCAG AA accessibility compliance
- Performance optimized (Core Web Vitals)
- SEO optimized

## Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari
- Chrome Mobile

## Development

### Getting Started
1. Clone the repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML/CSS/JavaScript

### File Organization
- All CSS files are modular and organized by purpose
- JavaScript files are separated by functionality
- Images are organized by page/section
- Use CSS custom properties for consistent theming

## Requirements Addressed
- **Requirement 1.1**: Color palette consistency using CSS custom properties
- **Requirement 1.3**: Typography hierarchy with Segoe UI
- **Requirement 1.5**: 8px-based spacing system
- **Requirement 1.6**: Consistent border radius (12px cards, 50px buttons, 8px small)

## Next Steps
1. Create remaining HTML pages (About, Menu, Nutrition, Locations, Community, Contact)
2. Implement menu filtering functionality
3. Implement form validation
4. Add image lazy loading
5. Optimize and add images
6. Implement property-based tests

## License
© 2025 Build & Blend. All rights reserved.
