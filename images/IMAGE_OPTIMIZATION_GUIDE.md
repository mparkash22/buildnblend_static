# Image Optimization Guide

This guide explains how to optimize and compress images for the Build & Blend website.

## Image Requirements

### Hero Images
- **Format**: WebP with PNG/JPG fallback
- **Dimensions**: 1920x1080px (16:9 ratio)
- **File Size Target**: < 200KB
- **Location**: `images/hero/`

### Menu Item Images
- **Format**: WebP with PNG/JPG fallback
- **Dimensions**: 450x253px for cards (16:9 ratio)
- **File Size Target**: < 100KB
- **Location**: `images/menu/`

### Location Gallery Images
- **Format**: WebP with PNG/JPG fallback
- **Dimensions**: 450x300px for grid (3:2 ratio)
- **File Size Target**: < 100KB
- **Location**: `images/locations/`

### Testimonial Photos
- **Format**: WebP with PNG fallback
- **Dimensions**: 150x150px (circular display)
- **File Size Target**: < 50KB
- **Location**: `images/community/`

### About Page Images
- **Format**: WebP with PNG fallback
- **Dimensions**: 600x800px (3:4 portrait ratio)
- **File Size Target**: < 150KB
- **Location**: `images/about/`

## Optimization Tools

### Online Tools
1. **Squoosh** (https://squoosh.app/)
   - Free, browser-based
   - Supports WebP conversion
   - Real-time preview

2. **TinyPNG** (https://tinypng.com/)
   - Excellent compression
   - Batch processing

3. **ImageOptim** (Mac only)
   - Desktop app
   - Lossless compression

### Command Line Tools

#### Using cwebp (WebP encoder)
```bash
# Install cwebp
brew install webp  # macOS
sudo apt-get install webp  # Linux

# Convert to WebP
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPGs in a directory
for file in *.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

#### Using ImageMagick
```bash
# Install ImageMagick
brew install imagemagick  # macOS
sudo apt-get install imagemagick  # Linux

# Resize and compress
convert input.jpg -resize 1920x1080 -quality 85 output.jpg

# Convert to WebP
convert input.jpg -quality 80 output.webp
```

## Optimization Workflow

### Step 1: Resize Images
Ensure images match the required dimensions:
- Hero: 1920x1080px
- Menu cards: 450x253px
- Location gallery: 450x300px
- Testimonials: 150x150px

### Step 2: Compress Images
- Use quality setting 80-85 for WebP
- Use quality setting 85-90 for JPG/PNG fallbacks
- Aim for target file sizes

### Step 3: Create Fallbacks
For each WebP image, create a PNG or JPG fallback:
- `featured-dish.webp` → `featured-dish.jpg`
- `burrito-mexican.webp` → `burrito-mexican.jpg`

### Step 4: Verify File Sizes
Check that compressed images meet targets:
```bash
# Check file sizes
ls -lh images/hero/*.webp
ls -lh images/menu/*.webp
```

## HTML Implementation

The website uses the `<picture>` element for WebP with fallbacks:

```html
<picture>
  <source srcset="images/hero/featured-dish.webp" type="image/webp">
  <img src="images/hero/featured-dish.jpg" 
       alt="Colorful burrito bowl with fresh vegetables" 
       loading="eager">
</picture>
```

## Current Status

Currently, the HTML uses direct WebP references. To add fallbacks:

1. Create JPG/PNG versions of all WebP images
2. Update HTML to use `<picture>` elements
3. Test in browsers that don't support WebP (IE11, older Safari)

## Placeholder Images

Until actual images are available, use placeholder services:

### Via Placeholder
```
https://via.placeholder.com/1920x1080/1B4332/FFFFFF?text=Hero+Image
```

### Unsplash (for realistic food photos)
```
https://source.unsplash.com/1920x1080/?healthy-food,burrito
```

## Testing

### Browser Support
- WebP is supported in Chrome, Firefox, Edge, Safari 14+
- Fallback images ensure compatibility with older browsers

### Performance Testing
Use Lighthouse to verify:
- Images are properly sized
- Images are compressed
- Lazy loading is working
- LCP (Largest Contentful Paint) < 2.5s

## Automation Script

Create a script to automate image optimization:

```bash
#!/bin/bash
# optimize-images.sh

# Optimize hero images
for file in images/hero/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
  jpegoptim --max=85 --strip-all "$file"
done

# Optimize menu images
for file in images/menu/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
  jpegoptim --max=85 --strip-all "$file"
done

# Optimize location images
for file in images/locations/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.jpg}.webp"
  jpegoptim --max=85 --strip-all "$file"
done

echo "Image optimization complete!"
```

## Next Steps

1. Obtain high-quality food photography
2. Resize images to required dimensions
3. Compress images using tools above
4. Create WebP and fallback versions
5. Update HTML to use `<picture>` elements
6. Test performance with Lighthouse
