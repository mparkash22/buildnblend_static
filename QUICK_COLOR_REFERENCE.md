# Quick Color Reference Guide

## Header Section
```css
Background: #2D3436 (Charcoal)
Logo Size: 60px
Logo Glow: drop-shadow(0 2px 8px rgba(154, 205, 50, 0.3))
Navigation Text: #FFFFFF (White)
Navigation Hover: #D4AF37 (Gold)
Box Shadow: 0 2px 15px rgba(0, 0, 0, 0.2)
```

## Hero Section
```css
Background: linear-gradient(135deg, #1B4332 0%, #0A8754 100%)
Heading Text: #FFFFFF (White)
Body Text: #F8F7F2 (Cream)
Primary Button: #D4AF37 (Gold)
Secondary Button: #9ACD32 (Lime) border
```

## Footer Section
```css
Background: linear-gradient(135deg, #3A4F4A 0%, #2D3E3A 100%)
Border Top: 3px solid #D4AF37 (Gold)
Text Color: #F8F7F2 (Cream)
Heading Color: #D4AF37 (Gold)
Link Color: #F8F7F2 (Cream)
Link Hover: #D4AF37 (Gold)
```

## Brand Colors
```
Primary Colors:
- Dark Green: #1B4332
- Gold: #D4AF37
- Lime: #9ACD32
- Charcoal: #2D3436
- Cream: #F8F7F2
- Off-White: #FFFAF0
```

## Color Usage Map
```
Charcoal (#2D3436)    → Header background
Dark Green (#1B4332)  → Hero section, primary content areas
Gold (#D4AF37)        → CTAs, accents, hover states, footer border
Lime (#9ACD32)        → Logo glow, secondary buttons, highlights
Cream (#F8F7F2)       → Footer text, light backgrounds
Off-White (#FFFAF0)   → Content backgrounds, cards
```

## Gradient Formulas
```css
/* Hero Gradient */
background: linear-gradient(135deg, #1B4332 0%, #0A8754 100%);

/* Footer Gradient */
background: linear-gradient(135deg, #3A4F4A 0%, #2D3E3A 100%);

/* Card Gradient (subtle) */
background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(154, 205, 50, 0.05) 100%);
```

## Shadow Effects
```css
/* Header Shadow */
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);

/* Logo Glow */
filter: drop-shadow(0 2px 8px rgba(154, 205, 50, 0.3));

/* Logo Hover Glow */
filter: drop-shadow(0 4px 12px rgba(154, 205, 50, 0.5));

/* Card Shadow */
box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
```

## Accessibility Notes
- All text/background combinations exceed WCAG AA (4.5:1)
- White on Charcoal: 12.6:1 ✅
- Cream on Footer: 9.2:1 ✅
- Gold on Charcoal: 5.8:1 ✅
