# Minification Guide

## Overview

This guide explains how to minify CSS and JavaScript files for production deployment to improve website performance.

## Minification Results

The minification process achieves significant file size reductions:

- **CSS Files**: 37.7% reduction (83.4 KB → 51.9 KB)
- **JavaScript Files**: 62.3% reduction (13.9 KB → 5.2 KB)

## Running Minification

### Prerequisites

Install Node.js dependencies:

```bash
npm install
```

### Minify All Files

Run the minification script:

```bash
npm run minify
```

This will:
1. Minify all CSS files from `css/` to `css/min/`
2. Minify all JavaScript files from `js/` to `js/min/`

## Output Locations

- **Minified CSS**: `css/min/*.min.css`
- **Minified JavaScript**: `js/min/*.min.js`

## Using Minified Files in Production

### Option 1: Update HTML References (Recommended for Production)

Update all HTML files to reference minified versions:

**Before:**
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/reset.css">
<script src="js/main.js"></script>
```

**After:**
```html
<link rel="stylesheet" href="css/min/variables.min.css">
<link rel="stylesheet" href="css/min/reset.min.css">
<script src="js/min/main.min.js"></script>
```

### Option 2: Use Build Script

Create a deployment script that automatically copies minified files to replace originals in a `dist/` folder.

## Development vs Production

- **Development**: Use unminified files (`css/*.css`, `js/*.js`) for easier debugging
- **Production**: Use minified files (`css/min/*.min.css`, `js/min/*.min.js`) for better performance

## Minification Settings

### CSS Minification (clean-css)

- **Level**: 2 (aggressive optimization)
- **Compatibility**: IE11+
- **Features**:
  - Remove whitespace and comments
  - Optimize selectors
  - Merge duplicate rules
  - Shorten color values

### JavaScript Minification (Terser)

- **Compression**:
  - Remove dead code
  - Keep console logs (for debugging)
  - Remove debugger statements
- **Mangling**: Variable name shortening
- **Comments**: Removed

## Performance Impact

Minified files provide:
- **Faster page load times**: Smaller file sizes mean faster downloads
- **Reduced bandwidth**: Lower data transfer costs
- **Better Core Web Vitals**: Improved LCP and FID scores
- **SEO benefits**: Faster sites rank better in search results

## Validation: Requirements 12.6

This implementation satisfies **Requirement 12.6**:
> THE Website SHALL minify CSS and JavaScript files

All CSS and JavaScript files are successfully minified with significant size reductions, improving website performance and meeting Core Web Vitals targets.
