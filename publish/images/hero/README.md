# Hero Images

This directory contains the hero slider images for the Build & Blend website.

## Image Specifications

- **Format**: SVG with WebP optimization
- **Dimensions**: 800x800px (source), displayed at 400x400px in circular frames
- **Aspect Ratio**: 1:1 (square for circular display)
- **File Size Target**: <150KB each (optimized)
- **Display**: Circular frames with 3px gold border and premium shadow effects

## Images

1. **featured-dish.svg/webp** - Colorful burrito bowl with fresh vegetables, cilantro rice, and vibrant toppings
2. **signature-burrito.svg/webp** - Signature Mexican burrito with Indian spiced black beans and fresh cilantro  
3. **mediterranean-wrap.svg/webp** - Mediterranean wrap with falafel, hummus, and fresh vegetables
4. **green-smoothie.svg/webp** - Fresh green smoothie with spinach, mango, and wellness ingredients
5. **fusion-bowl.svg/webp** - Indian fusion bowl with quinoa, paneer, and colorful vegetables

## Optimization

The images are optimized for web performance:

- **WebP Format**: Modern format with better compression
- **SVG Fallback**: Vector graphics for scalability and smaller file sizes
- **Lazy Loading**: All images except the first use `loading="lazy"`
- **Responsive**: Sized appropriately for mobile (280px) and desktop (400px)

## Usage in HTML

```html
<picture>
    <source srcset="images/hero/image-name.webp" type="image/webp">
    <img src="images/hero/image-name.svg" alt="Descriptive alt text" loading="lazy">
</picture>
```

## Optimization Script

Run the optimization script to convert SVG to WebP:

```bash
# Install dependencies
npm install sharp

# Run optimization
node scripts/optimize-hero-images.js
```

## Design Guidelines

All hero images follow these design principles:

- **Centered Composition**: Food items are centered for circular display
- **High Contrast**: Clear visibility against light hero background
- **Brand Colors**: Use Build & Blend color palette (gold, lime green, dark green)
- **Premium Feel**: Professional food photography style with proper lighting and shadows
- **Cultural Authenticity**: Respectful representation of fusion cuisine elements
