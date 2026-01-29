# Build & Blend Website Images

This directory contains all images for the Build & Blend website, organized by page and purpose.

## Directory Structure

```
images/
├── hero/           # Hero section images (homepage)
├── menu/           # Menu item photos
├── locations/      # Restaurant location photos
├── community/      # Testimonials, Instagram, blog images
├── about/          # Founder and about page images
└── icons/          # UI icons and graphics
```

## Image Specifications

### Format Requirements
- **Primary Format**: WebP (for modern browsers)
- **Fallback Format**: JPG or PNG (for older browsers)
- **Implementation**: Use `<picture>` element with `<source>` for WebP

### Size Requirements

| Image Type | Dimensions | Aspect Ratio | Max File Size | Location |
|------------|------------|--------------|---------------|----------|
| Hero | 1920x1080px | 16:9 | 200KB | `hero/` |
| Menu Cards | 450x253px | 16:9 | 100KB | `menu/` |
| Location Gallery | 450x300px | 3:2 | 100KB | `locations/` |
| Testimonials | 150x150px | 1:1 | 50KB | `community/` |
| Instagram Feed | 400x400px | 1:1 | 100KB | `community/` |
| Blog Images | 800x450px | 16:9 | 150KB | `community/` |
| Founder Photo | 600x800px | 3:4 | 150KB | `about/` |

## Current Status

### Placeholder Images
Currently, the website uses SVG placeholder images for development. These are located in each subdirectory and follow the naming conventions specified in the individual README files.

### Production Images
Before deploying to production, replace all placeholder images with:
1. High-quality professional food photography
2. Properly sized and compressed images
3. WebP versions with JPG/PNG fallbacks

## Optimization Workflow

### 1. Prepare Images
- Obtain high-quality source images (preferably RAW or high-res JPG)
- Ensure proper lighting, composition, and brand consistency
- Follow the style guide: natural lighting, high contrast, shallow depth of field

### 2. Resize Images
Use the provided script or manual tools:
```bash
# Using ImageMagick
convert source.jpg -resize 1920x1080^ -gravity center -extent 1920x1080 hero-image.jpg
```

### 3. Optimize and Compress
Run the optimization script:
```bash
./scripts/optimize-images.sh
```

Or manually:
```bash
# Create WebP version
cwebp -q 80 input.jpg -o output.webp

# Compress JPG
jpegoptim --max=85 --strip-all input.jpg
```

### 4. Verify Results
- Check file sizes meet targets
- Test image quality on different devices
- Verify aspect ratios are correct
- Run Lighthouse performance audit

## HTML Implementation

### Current Implementation (Direct WebP)
```html
<img src="images/hero/featured-dish.webp" 
     alt="Colorful burrito bowl" 
     loading="eager">
```

### Recommended Implementation (With Fallback)
```html
<picture>
  <source srcset="images/hero/featured-dish.webp" type="image/webp">
  <img src="images/hero/featured-dish.jpg" 
       alt="Colorful burrito bowl with fresh vegetables" 
       loading="eager">
</picture>
```

## Image Guidelines

### Photography Style
- **Lighting**: Natural, bright, well-lit
- **Composition**: Clean, focused on food
- **Colors**: Vibrant, true-to-life
- **Background**: Minimal, complementary
- **Depth of Field**: Shallow (blurred background)

### Brand Consistency
- Use brand colors as accents where appropriate
- Maintain consistent styling across all images
- Show fresh, high-quality ingredients
- Convey premium, wellness-focused positioning

### Accessibility
- All images must have descriptive alt text
- Alt text should describe the image content, not just the filename
- Avoid generic descriptions like "image" or "photo"

### Performance
- Lazy load all below-fold images (`loading="lazy"`)
- Use eager loading only for hero images (`loading="eager"`)
- Implement responsive images with `srcset` for different screen sizes
- Compress images to meet file size targets

## Tools and Resources

### Optimization Tools
- **Squoosh**: https://squoosh.app/ (browser-based)
- **TinyPNG**: https://tinypng.com/ (online compression)
- **ImageOptim**: https://imageoptim.com/ (Mac app)
- **cwebp**: Command-line WebP encoder
- **ImageMagick**: Command-line image manipulation

### Stock Photography (Temporary Use)
- **Unsplash**: https://unsplash.com/ (free, high-quality)
- **Pexels**: https://www.pexels.com/ (free stock photos)
- **Foodiesfeed**: https://www.foodiesfeed.com/ (food-specific)

### Testing Tools
- **Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **WebPageTest**: https://www.webpagetest.org/

## Scripts

### Create Placeholders
Generate SVG placeholder images for development:
```bash
./scripts/create-placeholders.sh
```

### Optimize Images
Compress and convert images to WebP:
```bash
./scripts/optimize-images.sh
```

## Next Steps

1. ✅ Directory structure created
2. ✅ Placeholder images generated
3. ✅ Optimization scripts created
4. ⏳ Obtain professional food photography
5. ⏳ Resize and optimize images
6. ⏳ Create WebP and fallback versions
7. ⏳ Update HTML to use `<picture>` elements
8. ⏳ Test performance and accessibility
9. ⏳ Deploy to production

## Support

For questions about image requirements or optimization, refer to:
- `IMAGE_OPTIMIZATION_GUIDE.md` - Detailed optimization instructions
- Individual directory README files - Specific requirements per image type
- Design document - Visual brand identity guidelines
