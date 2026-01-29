# Build & Blend - Production Build

This directory contains the production-optimized version of the Build & Blend website with critical CSS inlined for improved performance.

## What's Different from Source Files?

### Critical CSS Optimization
- **Inlined Critical CSS**: Above-the-fold CSS (reset, variables, typography, header, navigation, buttons, hero) is inlined directly in the `<head>` of each HTML file
- **Async Non-Critical CSS**: Responsive, animations, and accessibility CSS files are loaded asynchronously using `rel="preload"`
- **Reduced Render-Blocking**: Eliminates render-blocking CSS for faster First Contentful Paint (FCP) and Largest Contentful Paint (LCP)

### File Size Comparison
- **Critical CSS**: ~5.8 KB (minified and inlined)
- **Non-Critical CSS**: Loaded asynchronously after initial render

## Deployment Instructions

### Option 1: Deploy to Vercel/Netlify
1. Deploy the entire repository (not just the dist folder)
2. Set build output directory to `dist/`
3. The platform will serve files from the dist directory

### Option 2: Deploy to Traditional Hosting
1. Upload all files from the `dist/` directory to your web server
2. Ensure you also upload the following directories from the root:
   - `/css/` (for non-critical CSS files)
   - `/js/` (for JavaScript files)
   - `/images/` (for all images)
   - `/assets/` (for logo and favicon)

### Option 3: Use Root Files for Development
For local development, continue using the HTML files in the root directory with separate CSS files. The dist/ files are optimized for production only.

## Performance Benefits

### Before Optimization (Separate CSS Files)
- Multiple render-blocking CSS requests
- Slower First Contentful Paint
- Delayed above-the-fold rendering

### After Optimization (Inlined Critical CSS)
- ✅ Instant above-the-fold rendering
- ✅ Reduced render-blocking resources
- ✅ Improved Core Web Vitals scores
- ✅ Better Lighthouse performance scores

## Testing Performance

Run Lighthouse audits on the deployed site:
```bash
# Using Chrome DevTools
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Run audit for Performance

# Using CLI
npx lighthouse https://your-domain.com --view
```

## Regenerating Optimized Files

If you make changes to the source HTML or CSS files, regenerate the optimized files:

```bash
npm run critical
```

This will:
1. Extract critical CSS from source files
2. Minify the critical CSS
3. Create new optimized HTML files in dist/
4. Configure async loading for non-critical CSS

## File Structure

```
dist/
├── index.html          # Homepage (with inlined critical CSS)
├── about.html          # About page (with inlined critical CSS)
├── menu.html           # Menu page (with inlined critical CSS)
├── nutrition.html      # Nutrition page (with inlined critical CSS)
├── locations.html      # Locations page (with inlined critical CSS)
├── community.html      # Community page (with inlined critical CSS)
├── contact.html        # Contact page (with inlined critical CSS)
└── README.md           # This file
```

## Notes

- The dist/ files reference CSS, JS, and image files from the parent directories
- Ensure all asset directories are deployed alongside the dist/ HTML files
- The critical CSS includes only above-the-fold styles for optimal performance
- Non-critical CSS (responsive, animations, accessibility) loads asynchronously
- JavaScript files remain unchanged and load normally

## Support

For questions or issues, contact: hello@buildandblend.in
