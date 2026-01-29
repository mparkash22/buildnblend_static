#!/bin/bash

# Create Placeholder Images Script
# Generates SVG placeholder images with brand colors

set -e

echo "🎨 Creating Placeholder Images"
echo "=============================="
echo ""

# Brand colors
DARK_GREEN="#1B4332"
GOLD="#D4AF37"
LIME="#9ACD32"
CREAM="#F8F7F2"

# Create hero placeholder
create_hero_placeholder() {
    echo "Creating hero placeholder..."
    cat > images/hero/featured-dish.svg << EOF
<svg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${DARK_GREEN};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0A8754;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#heroGrad)"/>
  <circle cx="960" cy="540" r="200" fill="${GOLD}" opacity="0.2"/>
  <text x="960" y="500" font-family="Arial, sans-serif" font-size="72" fill="white" text-anchor="middle" font-weight="bold">Build & Blend</text>
  <text x="960" y="580" font-family="Arial, sans-serif" font-size="36" fill="${LIME}" text-anchor="middle">Featured Dish</text>
  <text x="960" y="640" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">1920x1080 • 16:9 Ratio</text>
</svg>
EOF
}

# Create menu placeholder
create_menu_placeholders() {
    echo "Creating menu placeholders..."
    
    local items=("burrito-mexican" "burrito-mediterranean" "burrito-paneer" "bowl-buddha" "bowl-mexican" "bowl-mediterranean" "bowl-indian-fusion" "wrap-falafel" "shawarma-paneer" "wrap-mediterranean" "tacos-black-bean" "tacos-paneer" "tacos-chickpea" "falafel-plate" "chickpea-salad" "hummus-bowl" "smoothie-green" "juice-fresh" "lassi-mango")
    
    for item in "${items[@]}"; do
        cat > "images/menu/${item}.svg" << EOF
<svg width="450" height="253" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="253" fill="${CREAM}"/>
  <circle cx="225" cy="126" r="80" fill="${DARK_GREEN}" opacity="0.1"/>
  <text x="225" y="120" font-family="Arial, sans-serif" font-size="24" fill="${DARK_GREEN}" text-anchor="middle" font-weight="bold">Menu Item</text>
  <text x="225" y="150" font-family="Arial, sans-serif" font-size="14" fill="${GOLD}" text-anchor="middle">${item}</text>
  <text x="225" y="180" font-family="Arial, sans-serif" font-size="12" fill="${DARK_GREEN}" text-anchor="middle" opacity="0.6">450x253 • 16:9</text>
</svg>
EOF
    done
}

# Create location placeholders
create_location_placeholders() {
    echo "Creating location placeholders..."
    
    local locations=("satyaniketan-exterior-1" "satyaniketan-interior-1" "satyaniketan-counter" "satyaniketan-seating")
    
    for location in "${locations[@]}"; do
        cat > "images/locations/${location}.svg" << EOF
<svg width="450" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="450" height="300" fill="${DARK_GREEN}"/>
  <circle cx="225" cy="150" r="60" fill="${GOLD}" opacity="0.3"/>
  <text x="225" y="145" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" font-weight="bold">Location</text>
  <text x="225" y="170" font-family="Arial, sans-serif" font-size="12" fill="${LIME}" text-anchor="middle">${location}</text>
  <text x="225" y="195" font-family="Arial, sans-serif" font-size="10" fill="white" text-anchor="middle" opacity="0.7">450x300 • 3:2</text>
</svg>
EOF
    done
}

# Create community placeholders
create_community_placeholders() {
    echo "Creating community placeholders..."
    
    local people=("priya-sharma" "rahul-mehta" "anjali-verma" "vikram-singh" "neha-kapoor" "arjun-patel" "maya-reddy" "sameer-khan")
    
    for person in "${people[@]}"; do
        cat > "images/community/${person}.svg" << EOF
<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
  <circle cx="75" cy="75" r="75" fill="${CREAM}"/>
  <circle cx="75" cy="60" r="25" fill="${DARK_GREEN}"/>
  <ellipse cx="75" cy="110" rx="35" ry="45" fill="${DARK_GREEN}"/>
  <text x="75" y="145" font-family="Arial, sans-serif" font-size="8" fill="${GOLD}" text-anchor="middle" font-weight="bold">${person}</text>
</svg>
EOF
    done
    
    # Instagram placeholders
    for i in {1..6}; do
        cat > "images/community/instagram-${i}.svg" << EOF
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="instaGrad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${LIME};stop-opacity:0.3" />
      <stop offset="100%" style="stop-color:${GOLD};stop-opacity:0.3" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="${CREAM}"/>
  <rect x="50" y="50" width="300" height="300" fill="url(#instaGrad${i})"/>
  <text x="200" y="200" font-family="Arial, sans-serif" font-size="24" fill="${DARK_GREEN}" text-anchor="middle" font-weight="bold">Instagram</text>
  <text x="200" y="230" font-family="Arial, sans-serif" font-size="16" fill="${DARK_GREEN}" text-anchor="middle">Post ${i}</text>
</svg>
EOF
    done
    
    # Blog placeholders
    for i in {1..3}; do
        cat > "images/community/blog-${i}.svg" << EOF
<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="${DARK_GREEN}"/>
  <circle cx="400" cy="225" r="100" fill="${GOLD}" opacity="0.2"/>
  <text x="400" y="220" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">Blog Post ${i}</text>
  <text x="400" y="260" font-family="Arial, sans-serif" font-size="18" fill="${LIME}" text-anchor="middle">800x450 • 16:9</text>
</svg>
EOF
    done
}

# Create about placeholder
create_about_placeholder() {
    echo "Creating about page placeholder..."
    cat > images/about/founder.svg << EOF
<svg width="600" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="founderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${DARK_GREEN};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0A8754;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="800" fill="url(#founderGrad)"/>
  <circle cx="300" cy="300" r="100" fill="${GOLD}" opacity="0.3"/>
  <circle cx="300" cy="250" r="60" fill="white" opacity="0.8"/>
  <ellipse cx="300" cy="350" rx="80" ry="100" fill="white" opacity="0.8"/>
  <text x="300" y="500" font-family="Arial, sans-serif" font-size="28" fill="white" text-anchor="middle" font-weight="bold">Founder</text>
  <text x="300" y="540" font-family="Arial, sans-serif" font-size="16" fill="${LIME}" text-anchor="middle">600x800 • 3:4</text>
</svg>
EOF
}

# Main execution
main() {
    create_hero_placeholder
    create_menu_placeholders
    create_location_placeholders
    create_community_placeholders
    create_about_placeholder
    
    echo ""
    echo "✅ Placeholder images created!"
    echo ""
    echo "Note: These are SVG placeholders for development."
    echo "Replace with actual photography before production."
}

main
