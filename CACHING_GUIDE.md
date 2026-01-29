# Browser Caching Configuration Guide

## Overview

This guide explains the browser caching configuration for the Build & Blend website to improve performance and meet Core Web Vitals targets.

## Caching Strategy

### Cache Duration by File Type

| File Type | Cache Duration | Reasoning |
|-----------|---------------|-----------|
| HTML files | 1 hour | Content may change frequently |
| CSS files | 1 year | Use versioning (e.g., `style.min.css?v=1.2`) for updates |
| JavaScript files | 1 year | Use versioning for updates |
| Images (JPG, PNG, WebP, SVG) | 1 year | Static assets rarely change |
| Fonts (TTF, WOFF, WOFF2) | 1 year | Static assets |

### Cache-Control Headers

**HTML Files:**
```
Cache-Control: public, max-age=3600, must-revalidate
```
- `public`: Can be cached by browsers and CDNs
- `max-age=3600`: Cache for 1 hour (3600 seconds)
- `must-revalidate`: Check with server after expiration

**Static Assets (CSS, JS, Images, Fonts):**
```
Cache-Control: public, max-age=31536000, immutable
```
- `public`: Can be cached by browsers and CDNs
- `max-age=31536000`: Cache for 1 year (365 days)
- `immutable`: File will never change (use versioning for updates)

## Configuration Files

### Apache (.htaccess)

For traditional hosting (Hostinger, shared hosting):

**File:** `.htaccess`

Features:
- Gzip compression for text files
- Cache-Control headers via `mod_expires` and `mod_headers`
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Optional HTTPS redirect

**Usage:**
1. Upload `.htaccess` to your website root directory
2. Ensure Apache modules are enabled: `mod_expires`, `mod_headers`, `mod_deflate`
3. Test caching with browser DevTools Network tab

### Vercel (vercel.json)

For Vercel deployment:

**File:** `vercel.json`

Features:
- Cache-Control headers for all file types
- Security headers
- Automatic HTTPS
- Global CDN

**Usage:**
1. Deploy to Vercel: `vercel deploy`
2. Configuration is automatically applied
3. No additional setup required

### Netlify (netlify.toml)

For Netlify deployment:

**File:** `netlify.toml`

Features:
- Cache-Control headers for all file types
- Security headers
- Automatic HTTPS
- Build command integration
- Lighthouse plugin for performance monitoring

**Usage:**
1. Deploy to Netlify: `netlify deploy`
2. Configuration is automatically applied
3. Build command runs minification automatically

## Verification

### Check Cache Headers

Use browser DevTools to verify caching:

1. Open DevTools (F12)
2. Go to Network tab
3. Reload page (Ctrl+R)
4. Click on any file (CSS, JS, image)
5. Check Response Headers for `Cache-Control`

**Expected Headers:**

```
Cache-Control: public, max-age=31536000, immutable
```

### Test with Online Tools

**WebPageTest:**
- URL: https://www.webpagetest.org/
- Check "Cache Static Content" score
- Should show "A" grade

**GTmetrix:**
- URL: https://gtmetrix.com/
- Check "Leverage browser caching" recommendation
- Should show green checkmark

## Cache Busting Strategy

When updating CSS or JavaScript files, use versioning to force cache refresh:

### Method 1: Query String Versioning

```html
<!-- Before update -->
<link rel="stylesheet" href="css/min/components.min.css?v=1.0">

<!-- After update -->
<link rel="stylesheet" href="css/min/components.min.css?v=1.1">
```

### Method 2: Filename Versioning

```html
<!-- Before update -->
<link rel="stylesheet" href="css/min/components-v1.min.css">

<!-- After update -->
<link rel="stylesheet" href="css/min/components-v2.min.css">
```

### Method 3: Hash-Based Versioning (Build Tools)

Use build tools to generate hashed filenames:
```
components.a3f2b1c.min.css
```

## Performance Impact

Proper browser caching provides:

- **Faster repeat visits**: Cached files load instantly
- **Reduced bandwidth**: Less data transfer for returning visitors
- **Lower server load**: Fewer requests to server
- **Better Core Web Vitals**: Improved LCP and FID scores
- **Cost savings**: Reduced bandwidth costs

### Expected Improvements

| Metric | Before Caching | After Caching | Improvement |
|--------|---------------|---------------|-------------|
| Page Load Time (repeat visit) | 2.5s | 0.8s | 68% faster |
| Bandwidth Usage (repeat visit) | 500 KB | 50 KB | 90% reduction |
| Server Requests (repeat visit) | 25 | 5 | 80% reduction |

## Security Headers

All configurations include security headers:

- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-Frame-Options: SAMEORIGIN** - Prevents clickjacking
- **X-XSS-Protection: 1; mode=block** - Enables XSS protection
- **Referrer-Policy: strict-origin-when-cross-origin** - Controls referrer information

## Troubleshooting

### Cache Not Working

**Problem:** Files not being cached

**Solutions:**
1. Check if Apache modules are enabled (`mod_expires`, `mod_headers`)
2. Verify `.htaccess` file is in root directory
3. Check server configuration allows `.htaccess` overrides
4. Clear browser cache and test in incognito mode

### Files Not Updating

**Problem:** Updated files not showing changes

**Solutions:**
1. Implement cache busting (versioning)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Use hard refresh (Ctrl+Shift+R)
4. Update file version in HTML references

### Hosting Platform Issues

**Apache/Hostinger:**
- Ensure `.htaccess` is uploaded
- Check file permissions (644)
- Verify Apache modules are enabled

**Vercel:**
- Ensure `vercel.json` is in root directory
- Redeploy after configuration changes

**Netlify:**
- Ensure `netlify.toml` is in root directory
- Check build logs for errors
- Redeploy after configuration changes

## Validation: Requirements 12.7

This implementation satisfies **Requirement 12.7**:
> THE Website SHALL enable browser caching headers for static assets

All static assets (CSS, JavaScript, images, fonts) are configured with appropriate Cache-Control headers:
- HTML: 1 hour cache
- Static assets: 1 year cache with immutable flag
- Security headers included
- Multiple hosting platforms supported

## Next Steps

1. Choose your hosting platform (Apache, Vercel, or Netlify)
2. Upload the appropriate configuration file
3. Deploy your website
4. Verify caching with browser DevTools
5. Test with WebPageTest or GTmetrix
6. Monitor performance with Lighthouse
