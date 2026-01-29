# Chrome Browser Testing Checklist
## Build & Blend Premium Wellness Website

**Testing Date:** _____________  
**Chrome Version:** _____________  
**Tester Name:** _____________  
**Device/OS:** _____________

---

## Testing Instructions

1. Open the website in **Google Chrome** (latest 2 versions: 120+ and 121+)
2. Test on multiple viewport sizes: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
3. Check each item below and mark as ✅ Pass, ❌ Fail, or ⚠️ Issue
4. Document any issues in the "Issues Found" section at the bottom

---

## 1. Homepage Testing (index.html)

### Visual & Layout
- [ ] Hero section displays with dark green gradient background
- [ ] Hero headline "Build Your Perfect Meal. Thrive Every Day." is visible and properly styled
- [ ] Featured dish image loads correctly (16:9 ratio)
- [ ] Two CTA buttons ("Order Now" and "Explore Menu") are visible
- [ ] Benefits grid displays 6 cards in proper layout (3-2-1 responsive)
- [ ] Brand tagline "Mix. Match. Thrive." section is visible
- [ ] All icons in benefit cards render correctly
- [ ] Footer appears with all sections (Quick Links, Connect, Newsletter, Contact)

### Interactions
- [ ] Primary CTA button (gold) shows hover effect (lighter gold, shadow, lift)
- [ ] Secondary CTA button (lime) shows hover effect (lime background, glow)
- [ ] Benefit cards show hover effect (lift, shadow expansion, border color change)
- [ ] All navigation links are clickable and navigate correctly
- [ ] Smooth scroll behavior works for anchor links

### Responsive Behavior
- [ ] **Desktop (1200px+)**: Benefits grid shows 3 columns
- [ ] **Tablet (768-1199px)**: Benefits grid shows 2 columns
- [ ] **Mobile (320-767px)**: Benefits grid shows 1 column
- [ ] **Mobile**: Hero image moves below text
- [ ] **Mobile**: Hero section height adjusts to 80vh
- [ ] **Mobile**: Font sizes reduce appropriately (H1: 2rem)

---

## 2. Menu Page Testing (menu.html)

### Visual & Layout
- [ ] Menu hero section displays with title and subtitle
- [ ] Filter buttons display in a row (All, Burritos, Bowls, etc.)
- [ ] Menu grid displays 18+ menu items
- [ ] Each menu card shows: image, title, description, price, "Customize" button
- [ ] "Build Your Meal" CTA section appears at bottom
- [ ] All menu item images load correctly (16:9 ratio)

### Interactions
- [ ] Clicking "All" filter shows all menu items
- [ ] Clicking "Burritos" filter shows only burrito items
- [ ] Clicking "Bowls" filter shows only bowl items
- [ ] Clicking "Wraps & Shawarma" filter shows only wrap items
- [ ] Clicking "Tacos" filter shows only taco items
- [ ] Clicking "Falafel & Chickpea" filter shows only falafel items
- [ ] Clicking "Beverages" filter shows only beverage items
- [ ] Filter transitions are smooth (fade effect)
- [ ] Active filter button has distinct styling
- [ ] Menu card hover shows image zoom and card lift effect
- [ ] "Customize" button hover shows proper styling

### Responsive Behavior
- [ ] **Desktop (1200px+)**: Menu grid shows 3 columns
- [ ] **Tablet (768-1199px)**: Menu grid shows 2 columns
- [ ] **Mobile (320-767px)**: Menu grid shows 1 column
- [ ] **Mobile**: Filter buttons wrap or scroll horizontally
- [ ] **Mobile**: Card images maintain aspect ratio

---

## 3. About Page Testing (about.html)

### Visual & Layout
- [ ] Founder story section displays with text and optional image
- [ ] Vision and Mission cards display side-by-side (desktop) or stacked (mobile)
- [ ] "Why We Exist" narrative section is visible
- [ ] Core values grid displays 6 value cards
- [ ] Value cards have dark green gradient background
- [ ] Value cards have gold border-left (4px)
- [ ] Value cards have white text
- [ ] Internal links to other pages are present and styled

### Interactions
- [ ] Value card hover shows lime green border glow
- [ ] Value card hover changes title color to lime
- [ ] Value card hover shows subtle lift effect
- [ ] Internal links (to nutrition, menu, community) work correctly
- [ ] Internal links show hover state

### Responsive Behavior
- [ ] **Desktop (1200px+)**: Values grid shows 3 columns
- [ ] **Tablet (768-1199px)**: Values grid shows 2 columns
- [ ] **Mobile (320-767px)**: Values grid shows 1 column
- [ ] **Mobile**: Vision/Mission cards stack vertically
- [ ] **Mobile**: Text remains readable with proper line height

---

## 4. Contact Page Testing (contact.html)

### Visual & Layout
- [ ] Contact form displays with all fields (Name, Email, Phone, Message Type, Message)
- [ ] Contact information section displays (Phone, Email, Business Hours)
- [ ] Social media links section displays with icons
- [ ] Google Maps iframe loads correctly
- [ ] Form labels are properly associated with inputs
- [ ] Required fields are marked with asterisk (*)

### Form Validation
- [ ] Submitting empty form shows validation errors
- [ ] Name field: Empty shows "This field is required"
- [ ] Email field: Empty shows "This field is required"
- [ ] Email field: Invalid format (e.g., "test") shows "Please enter a valid email address"
- [ ] Phone field: Invalid format shows appropriate error
- [ ] Message Type field: Empty shows "This field is required"
- [ ] Message field: Empty shows "This field is required"
- [ ] Message field: Too short (<10 chars) shows appropriate error
- [ ] Error messages appear below respective fields in red
- [ ] Input fields with errors show red border
- [ ] Valid form submission clears errors

### Interactions
- [ ] Form inputs show focus state (lime border, shadow)
- [ ] Submit button shows hover effect
- [ ] Social media links open in new tab
- [ ] Social media links have proper aria-labels
- [ ] Map is interactive (zoom, pan)

### Responsive Behavior
- [ ] **Desktop**: Form and contact info display side-by-side
- [ ] **Mobile**: Form and contact info stack vertically
- [ ] **Mobile**: Form inputs are full-width
- [ ] **Mobile**: Input font size is 16px (prevents zoom on iOS)
- [ ] **Mobile**: Touch targets meet 48x48px minimum

---

## 5. Navigation Testing (All Pages)

### Header Navigation
- [ ] Logo/brand name is visible and links to homepage
- [ ] All 7 navigation links are visible (Home, About, Menu, Nutrition, Locations, Community, Contact)
- [ ] Active page link shows gold color and underline
- [ ] Navigation links show hover state (color shift to gold)
- [ ] Sticky header remains visible when scrolling
- [ ] Sticky header becomes compact after scrolling 100px
- [ ] Header has white background with subtle shadow

### Mobile Navigation
- [ ] **Mobile (<768px)**: Hamburger menu icon is visible
- [ ] **Mobile**: Clicking hamburger opens slide-out drawer
- [ ] **Mobile**: Navigation drawer slides in from right
- [ ] **Mobile**: Navigation drawer has dark green background
- [ ] **Mobile**: Navigation links are white in mobile drawer
- [ ] **Mobile**: Clicking link closes drawer and navigates
- [ ] **Mobile**: Clicking outside drawer closes it
- [ ] Hamburger icon has proper aria-label

### Footer Navigation
- [ ] Footer appears on all pages
- [ ] Quick Links section has links to Menu, About, Nutrition, Locations
- [ ] Connect With Us section has social media links
- [ ] Newsletter section has email input and subscribe button
- [ ] Contact section displays phone, email, address
- [ ] Footer bottom shows copyright text
- [ ] All footer links work correctly
- [ ] Footer links show hover state

---

## 6. Accessibility Testing

### Keyboard Navigation
- [ ] Tab key navigates through all interactive elements in logical order
- [ ] All buttons are reachable via keyboard
- [ ] All links are reachable via keyboard
- [ ] All form inputs are reachable via keyboard
- [ ] Enter key activates buttons and links
- [ ] Space key activates buttons
- [ ] "Skip to main content" link appears on Tab focus
- [ ] "Skip to main content" link works correctly

### Focus States
- [ ] All focusable elements show visible focus indicator
- [ ] Focus indicator has sufficient contrast
- [ ] Focus indicator is not removed by CSS
- [ ] Focus order follows visual layout
- [ ] Focus doesn't get trapped in any component

### ARIA & Semantic HTML
- [ ] Icon-only buttons have aria-label attributes
- [ ] Form inputs have associated labels
- [ ] Required form fields have aria-required="true"
- [ ] Images have descriptive alt text (not generic filenames)
- [ ] Headings follow proper hierarchy (H1 → H2 → H3)
- [ ] Each page has exactly one H1
- [ ] Landmark regions are properly defined (header, main, footer, nav)

### Color Contrast
- [ ] Body text on light background meets 4.5:1 ratio
- [ ] Heading text meets 4.5:1 ratio
- [ ] Button text meets 4.5:1 ratio
- [ ] Link text meets 4.5:1 ratio
- [ ] Large text (18px+) meets 3:1 ratio
- [ ] Focus indicators meet 3:1 ratio

---

## 7. Performance Testing

### Page Load
- [ ] Homepage loads in under 3 seconds
- [ ] Menu page loads in under 3 seconds
- [ ] About page loads in under 3 seconds
- [ ] Contact page loads in under 3 seconds
- [ ] No visible layout shift during load (CLS)
- [ ] Above-the-fold content renders quickly (LCP)

### Image Loading
- [ ] Hero images load eagerly (loading="eager")
- [ ] Below-fold images load lazily (loading="lazy")
- [ ] Images use WebP format with fallback
- [ ] Images maintain aspect ratio during load
- [ ] No broken image icons appear
- [ ] Image file sizes are optimized (<200KB hero, <100KB cards)

### JavaScript Performance
- [ ] Menu filtering is instant (no lag)
- [ ] Form validation is instant (no lag)
- [ ] Mobile menu toggle is smooth
- [ ] Scroll behavior is smooth
- [ ] No console errors in DevTools
- [ ] No console warnings in DevTools

### CSS Performance
- [ ] Hover effects are smooth (no jank)
- [ ] Transitions complete without stuttering
- [ ] Animations are smooth
- [ ] No flash of unstyled content (FOUC)
- [ ] Critical CSS loads first

---

## 8. Cross-Viewport Testing

### Desktop (1920x1080)
- [ ] All content is visible without horizontal scroll
- [ ] Maximum content width is reasonable (not stretched)
- [ ] Images are sharp and not pixelated
- [ ] Text is readable (not too small or too large)
- [ ] Grids display in 3-column layout
- [ ] Hero section height is 60vh

### Tablet (768x1024)
- [ ] All content adapts to tablet width
- [ ] No horizontal scroll
- [ ] Grids display in 2-column layout
- [ ] Touch targets are adequate size
- [ ] Text remains readable
- [ ] Images scale appropriately

### Mobile (375x667)
- [ ] All content fits within viewport
- [ ] No horizontal scroll
- [ ] Grids display in 1-column layout
- [ ] Touch targets meet 48x48px minimum
- [ ] Text is minimum 16px (prevents zoom)
- [ ] Hero section height is 80vh
- [ ] Hamburger menu works correctly
- [ ] Forms are easy to fill on mobile

### Mobile Landscape (667x375)
- [ ] Content adapts to landscape orientation
- [ ] Navigation remains accessible
- [ ] Hero section adjusts height appropriately
- [ ] Forms remain usable

---

## 9. Browser-Specific Features

### Chrome DevTools Checks
- [ ] No errors in Console tab
- [ ] No warnings in Console tab
- [ ] Network tab shows all resources loading (200 status)
- [ ] No 404 errors for images, CSS, or JS files
- [ ] Lighthouse Performance score > 80
- [ ] Lighthouse Accessibility score > 90
- [ ] Lighthouse Best Practices score > 90
- [ ] Lighthouse SEO score > 90

### Chrome-Specific CSS
- [ ] CSS Grid layouts render correctly
- [ ] CSS Flexbox layouts render correctly
- [ ] CSS Custom Properties (variables) work
- [ ] CSS transitions work smoothly
- [ ] CSS transforms work correctly
- [ ] Backdrop filters work (if used)

### Chrome-Specific JavaScript
- [ ] ES6+ features work (arrow functions, const/let, template literals)
- [ ] Intersection Observer API works (lazy loading)
- [ ] Form validation API works
- [ ] Event listeners work correctly
- [ ] DOM manipulation works correctly

---

## 10. Additional Pages Testing

### Nutrition Page (nutrition.html)
- [ ] Page loads correctly
- [ ] All sections are visible
- [ ] Dietary options display correctly
- [ ] Content is readable and well-formatted
- [ ] Links to other pages work

### Locations Page (locations.html)
- [ ] Page loads correctly
- [ ] Address information is visible
- [ ] Google Maps iframe loads
- [ ] Location photos display in gallery
- [ ] "Coming Soon" section is visible
- [ ] "Reserve a Spot" CTA button works

### Community Page (community.html)
- [ ] Page loads correctly
- [ ] Testimonials display (6-8 cards)
- [ ] Testimonial images are circular (150x150px)
- [ ] Instagram feed section is visible
- [ ] Events section is visible
- [ ] Blog section is visible
- [ ] Newsletter signup form works

---

## Issues Found

### Critical Issues (Blocking)
_List any issues that prevent core functionality_

1. 
2. 
3. 

### Major Issues (Important but not blocking)
_List any issues that significantly impact user experience_

1. 
2. 
3. 

### Minor Issues (Nice to fix)
_List any cosmetic or minor issues_

1. 
2. 
3. 

---

## Test Summary

**Total Tests:** _____  
**Passed:** _____  
**Failed:** _____  
**Issues:** _____  

**Overall Status:** ✅ Pass / ❌ Fail / ⚠️ Pass with Issues

**Tester Signature:** _____________  
**Date:** _____________

---

## Notes

_Add any additional observations, recommendations, or context here_

