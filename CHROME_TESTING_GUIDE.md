# Chrome Browser Testing Guide
## Build & Blend Premium Wellness Website

This guide provides comprehensive instructions for testing the Build & Blend website on Google Chrome (latest 2 versions).

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Testing Environment Setup](#testing-environment-setup)
3. [Manual Testing Procedure](#manual-testing-procedure)
4. [Automated Testing Procedure](#automated-testing-procedure)
5. [Responsive Testing](#responsive-testing)
6. [Performance Testing](#performance-testing)
7. [Accessibility Testing](#accessibility-testing)
8. [Issue Reporting](#issue-reporting)

---

## Prerequisites

### Required Software
- **Google Chrome** (Version 120 or 121 - latest 2 versions)
- **Chrome DevTools** (built-in, press F12)
- **Internet connection** (for loading external resources)

### Optional Tools
- **Lighthouse** (built-in Chrome DevTools)
- **axe DevTools** (Chrome extension for accessibility testing)
- **Window Resizer** (Chrome extension for testing different viewports)

### Test Files
- `CHROME_TESTING_CHECKLIST.md` - Manual testing checklist
- `scripts/chrome-automated-tests.js` - Automated testing script

---

## Testing Environment Setup

### 1. Check Chrome Version

1. Open Chrome
2. Click the three dots menu (⋮) in the top-right
3. Go to **Help** → **About Google Chrome**
4. Verify version is 120+ or 121+
5. Update if necessary

### 2. Clear Browser Cache

1. Press `Ctrl+Shift+Delete` (Windows/Linux) or `Cmd+Shift+Delete` (Mac)
2. Select **All time** from the time range dropdown
3. Check:
   - ✅ Browsing history
   - ✅ Cookies and other site data
   - ✅ Cached images and files
4. Click **Clear data**

### 3. Disable Browser Extensions (Optional)

For the most accurate testing:

1. Open Chrome
2. Go to `chrome://extensions/`
3. Toggle off all extensions temporarily
4. Restart Chrome

### 4. Open the Website

**Option A: Local Testing**
```bash
# If using a local server
cd /path/to/build-and-blend
python -m http.server 8000
# Then open http://localhost:8000 in Chrome
```

**Option B: Production Testing**
```
Open https://buildnblend.com in Chrome
```

---

## Manual Testing Procedure

### Step 1: Open the Checklist

1. Open `CHROME_TESTING_CHECKLIST.md`
2. Print or keep it open in a separate window
3. Fill in the header information:
   - Testing Date
   - Chrome Version
   - Tester Name
   - Device/OS

### Step 2: Test Each Page

Test all pages in this order:

1. **Homepage** (`index.html`)
2. **Menu Page** (`menu.html`)
3. **About Page** (`about.html`)
4. **Nutrition Page** (`nutrition.html`)
5. **Locations Page** (`locations.html`)
6. **Community Page** (`community.html`)
7. **Contact Page** (`contact.html`)

### Step 3: For Each Page, Test:

#### Visual & Layout
- [ ] All sections load correctly
- [ ] Images display properly
- [ ] Text is readable
- [ ] Colors match brand guidelines
- [ ] Spacing is consistent

#### Interactions
- [ ] All buttons are clickable
- [ ] Hover effects work
- [ ] Links navigate correctly
- [ ] Forms validate properly
- [ ] Animations are smooth

#### Responsive Behavior
- [ ] Desktop layout (1920x1080)
- [ ] Tablet layout (768x1024)
- [ ] Mobile layout (375x667)

### Step 4: Document Issues

For each issue found:

1. Take a screenshot
2. Note the page URL
3. Describe the issue
4. Note the expected behavior
5. Add to the "Issues Found" section

---

## Automated Testing Procedure

### Step 1: Open Chrome DevTools

1. Open the website in Chrome
2. Press `F12` or right-click → **Inspect**
3. Click the **Console** tab

### Step 2: Run the Automated Test Script

1. Open `scripts/chrome-automated-tests.js`
2. Copy the entire script
3. Paste into the Chrome DevTools Console
4. Press `Enter`

### Step 3: Review Results

The script will output:
- ✅ Passed tests (green)
- ❌ Failed tests (red)
- ⚠️ Warnings (yellow)
- 📊 Summary statistics

### Step 4: Run on All Pages

Repeat Steps 1-3 for each page:
- Homepage
- Menu
- About
- Nutrition
- Locations
- Community
- Contact

### Step 5: Save Results

1. Right-click in the Console
2. Select **Save as...**
3. Save as `chrome-test-results-[page-name].txt`

---

## Responsive Testing

### Method 1: Chrome DevTools Device Toolbar

1. Open Chrome DevTools (`F12`)
2. Click the **Toggle Device Toolbar** icon (or press `Ctrl+Shift+M`)
3. Select preset devices:
   - **Desktop**: Responsive (1920x1080)
   - **Tablet**: iPad (768x1024)
   - **Mobile**: iPhone SE (375x667)

4. For each device:
   - Test all pages
   - Verify layout adapts correctly
   - Check touch targets on mobile
   - Test hamburger menu on mobile

### Method 2: Manual Window Resizing

1. Open the website in Chrome
2. Resize the browser window to test breakpoints:
   - **Desktop**: 1200px+ width
   - **Tablet**: 768px - 1199px width
   - **Mobile**: 320px - 767px width

3. Verify:
   - Grids change from 3 → 2 → 1 columns
   - Navigation switches to hamburger menu
   - Text sizes adjust appropriately
   - Images scale correctly

### Method 3: Chrome Extension (Optional)

Install **Window Resizer** extension:

1. Go to Chrome Web Store
2. Search for "Window Resizer"
3. Install the extension
4. Click the extension icon
5. Select preset sizes:
   - 1920x1080 (Desktop)
   - 768x1024 (Tablet)
   - 375x667 (Mobile)

---

## Performance Testing

### Using Chrome Lighthouse

1. Open the website in Chrome
2. Open DevTools (`F12`)
3. Click the **Lighthouse** tab
4. Configure:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - Device: Desktop and Mobile
5. Click **Analyze page load**

### Target Scores

- **Performance**: > 80
- **Accessibility**: > 90
- **Best Practices**: > 90
- **SEO**: > 90

### Core Web Vitals

Check these metrics in Lighthouse:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Network Performance

1. Open DevTools → **Network** tab
2. Reload the page
3. Check:
   - Total page size
   - Number of requests
   - Load time
   - No 404 errors

---

## Accessibility Testing

### Keyboard Navigation Test

1. Close your mouse/trackpad (or don't use it)
2. Press `Tab` to navigate through the page
3. Verify:
   - All interactive elements are reachable
   - Focus indicator is visible
   - Logical tab order
   - Enter/Space activates buttons
   - "Skip to main content" link works

### Screen Reader Test (Optional)

**Windows**: Use NVDA or JAWS  
**Mac**: Use VoiceOver (Cmd+F5)

1. Enable screen reader
2. Navigate through the page
3. Verify:
   - All content is announced
   - Images have descriptive alt text
   - Form labels are read correctly
   - Headings are announced

### Color Contrast Test

1. Open DevTools → **Elements** tab
2. Select an element with text
3. Look at the **Styles** panel
4. Chrome shows contrast ratio next to color values
5. Verify:
   - Normal text: 4.5:1 minimum
   - Large text (18px+): 3:1 minimum

### Using axe DevTools (Recommended)

1. Install **axe DevTools** extension from Chrome Web Store
2. Open DevTools → **axe DevTools** tab
3. Click **Scan ALL of my page**
4. Review issues:
   - Critical (must fix)
   - Serious (should fix)
   - Moderate (nice to fix)
   - Minor (optional)

---

## Issue Reporting

### Issue Template

When reporting an issue, include:

```markdown
**Issue Title**: [Brief description]

**Page**: [URL or page name]

**Chrome Version**: [e.g., 121.0.6167.85]

**Device/OS**: [e.g., Windows 11, macOS Sonoma]

**Viewport**: [e.g., Desktop 1920x1080, Mobile 375x667]

**Steps to Reproduce**:
1. Step 1
2. Step 2
3. Step 3

**Expected Behavior**:
[What should happen]

**Actual Behavior**:
[What actually happens]

**Screenshot**:
[Attach screenshot]

**Console Errors** (if any):
[Copy any errors from DevTools Console]

**Severity**: Critical / Major / Minor
```

### Taking Screenshots

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) in DevTools
2. Type "screenshot"
3. Select:
   - **Capture full size screenshot** (entire page)
   - **Capture screenshot** (visible area)
   - **Capture node screenshot** (specific element)

### Recording Videos (Optional)

For complex issues:

1. Use Chrome's built-in screen recorder
2. Or use external tools like OBS Studio
3. Record the issue reproduction steps
4. Upload to issue tracker

---

## Testing Checklist Summary

### Before Testing
- [ ] Chrome version verified (120+ or 121+)
- [ ] Browser cache cleared
- [ ] Extensions disabled (optional)
- [ ] Testing environment set up

### During Testing
- [ ] All pages tested manually
- [ ] Automated script run on all pages
- [ ] Responsive behavior verified (3 viewports)
- [ ] Performance tested with Lighthouse
- [ ] Accessibility tested with keyboard and axe
- [ ] All issues documented

### After Testing
- [ ] Test results compiled
- [ ] Screenshots/videos captured
- [ ] Issues reported with proper template
- [ ] Summary report created
- [ ] Stakeholders notified

---

## Quick Reference Commands

### Chrome DevTools Shortcuts

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Open DevTools | `F12` or `Ctrl+Shift+I` | `Cmd+Option+I` |
| Toggle Device Toolbar | `Ctrl+Shift+M` | `Cmd+Shift+M` |
| Open Console | `Ctrl+Shift+J` | `Cmd+Option+J` |
| Reload Page | `Ctrl+R` | `Cmd+R` |
| Hard Reload | `Ctrl+Shift+R` | `Cmd+Shift+R` |
| Clear Console | `Ctrl+L` | `Cmd+K` |
| Command Menu | `Ctrl+Shift+P` | `Cmd+Shift+P` |

### Testing URLs

```
Homepage:    /index.html
Menu:        /menu.html
About:       /about.html
Nutrition:   /nutrition.html
Locations:   /locations.html
Community:   /community.html
Contact:     /contact.html
```

---

## Additional Resources

### Chrome Documentation
- [Chrome DevTools Overview](https://developer.chrome.com/docs/devtools/)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Chrome Accessibility Features](https://developer.chrome.com/docs/devtools/accessibility/)

### Web Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Core Web Vitals](https://web.dev/vitals/)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## Support

For questions or issues with testing:

1. Check the [Chrome DevTools documentation](https://developer.chrome.com/docs/devtools/)
2. Review the automated test script comments
3. Consult the design document (`.kiro/specs/premium-wellness-website/design.md`)
4. Contact the development team

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Maintained by**: Build & Blend Development Team
