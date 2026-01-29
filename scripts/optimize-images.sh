#!/bin/bash

# Image Optimization Script for Build & Blend Website
# This script optimizes images and creates WebP versions with fallbacks

set -e

echo "🖼️  Build & Blend Image Optimization Script"
echo "==========================================="
echo ""

# Check if required tools are installed
check_dependencies() {
    local missing_deps=()
    
    if ! command -v cwebp &> /dev/null; then
        missing_deps+=("webp")
    fi
    
    if ! command -v jpegoptim &> /dev/null; then
        missing_deps+=("jpegoptim")
    fi
    
    if ! command -v optipng &> /dev/null; then
        missing_deps+=("optipng")
    fi
    
    if [ ${#missing_deps[@]} -gt 0 ]; then
        echo "❌ Missing dependencies: ${missing_deps[*]}"
        echo ""
        echo "Install them with:"
        echo "  macOS: brew install ${missing_deps[*]}"
        echo "  Ubuntu/Debian: sudo apt-get install ${missing_deps[*]}"
        echo ""
        exit 1
    fi
}

# Optimize a single image
optimize_image() {
    local input_file="$1"
    local target_size="$2"
    local quality="$3"
    
    local filename=$(basename "$input_file")
    local extension="${filename##*.}"
    local basename="${filename%.*}"
    local directory=$(dirname "$input_file")
    
    echo "  Processing: $filename"
    
    # Create WebP version
    if [ "$extension" = "jpg" ] || [ "$extension" = "jpeg" ]; then
        cwebp -q "$quality" "$input_file" -o "$directory/$basename.webp" 2>/dev/null
        jpegoptim --max="$quality" --strip-all "$input_file" 2>/dev/null
    elif [ "$extension" = "png" ]; then
        cwebp -q "$quality" "$input_file" -o "$directory/$basename.webp" 2>/dev/null
        optipng -o7 "$input_file" 2>/dev/null
    fi
    
    # Check file size
    if [ -f "$directory/$basename.webp" ]; then
        local webp_size=$(stat -f%z "$directory/$basename.webp" 2>/dev/null || stat -c%s "$directory/$basename.webp" 2>/dev/null)
        local webp_size_kb=$((webp_size / 1024))
        
        if [ $webp_size_kb -gt $target_size ]; then
            echo "    ⚠️  WebP size: ${webp_size_kb}KB (target: ${target_size}KB)"
        else
            echo "    ✅ WebP size: ${webp_size_kb}KB"
        fi
    fi
}

# Optimize hero images
optimize_hero_images() {
    echo "📸 Optimizing Hero Images (target: <200KB)"
    echo "-------------------------------------------"
    
    if [ -d "images/hero" ]; then
        for file in images/hero/*.{jpg,jpeg,png} 2>/dev/null; do
            [ -f "$file" ] && optimize_image "$file" 200 80
        done
    else
        echo "  ⚠️  Directory not found: images/hero"
    fi
    echo ""
}

# Optimize menu images
optimize_menu_images() {
    echo "🍽️  Optimizing Menu Images (target: <100KB)"
    echo "-------------------------------------------"
    
    if [ -d "images/menu" ]; then
        for file in images/menu/*.{jpg,jpeg,png} 2>/dev/null; do
            [ -f "$file" ] && optimize_image "$file" 100 80
        done
    else
        echo "  ⚠️  Directory not found: images/menu"
    fi
    echo ""
}

# Optimize location images
optimize_location_images() {
    echo "📍 Optimizing Location Images (target: <100KB)"
    echo "----------------------------------------------"
    
    if [ -d "images/locations" ]; then
        for file in images/locations/*.{jpg,jpeg,png} 2>/dev/null; do
            [ -f "$file" ] && optimize_image "$file" 100 80
        done
    else
        echo "  ⚠️  Directory not found: images/locations"
    fi
    echo ""
}

# Optimize community images
optimize_community_images() {
    echo "👥 Optimizing Community Images (target: <50KB for testimonials)"
    echo "---------------------------------------------------------------"
    
    if [ -d "images/community" ]; then
        for file in images/community/*.{jpg,jpeg,png} 2>/dev/null; do
            [ -f "$file" ] && optimize_image "$file" 50 85
        done
    else
        echo "  ⚠️  Directory not found: images/community"
    fi
    echo ""
}

# Optimize about page images
optimize_about_images() {
    echo "ℹ️  Optimizing About Page Images (target: <150KB)"
    echo "-------------------------------------------------"
    
    if [ -d "images/about" ]; then
        for file in images/about/*.{jpg,jpeg,png} 2>/dev/null; do
            [ -f "$file" ] && optimize_image "$file" 150 80
        done
    else
        echo "  ⚠️  Directory not found: images/about"
    fi
    echo ""
}

# Generate summary report
generate_report() {
    echo "📊 Optimization Summary"
    echo "======================="
    echo ""
    
    local total_webp=$(find images -name "*.webp" 2>/dev/null | wc -l)
    local total_jpg=$(find images -name "*.jpg" -o -name "*.jpeg" 2>/dev/null | wc -l)
    local total_png=$(find images -name "*.png" 2>/dev/null | wc -l)
    
    echo "  WebP images: $total_webp"
    echo "  JPG images: $total_jpg"
    echo "  PNG images: $total_png"
    echo ""
    
    if [ $total_webp -gt 0 ]; then
        echo "✅ Optimization complete!"
        echo ""
        echo "Next steps:"
        echo "  1. Review image file sizes"
        echo "  2. Update HTML to use <picture> elements for fallbacks"
        echo "  3. Test in multiple browsers"
        echo "  4. Run Lighthouse performance audit"
    else
        echo "⚠️  No images found to optimize."
        echo ""
        echo "Please add images to the following directories:"
        echo "  - images/hero/"
        echo "  - images/menu/"
        echo "  - images/locations/"
        echo "  - images/community/"
        echo "  - images/about/"
    fi
}

# Main execution
main() {
    check_dependencies
    
    optimize_hero_images
    optimize_menu_images
    optimize_location_images
    optimize_community_images
    optimize_about_images
    
    generate_report
}

# Run the script
main
