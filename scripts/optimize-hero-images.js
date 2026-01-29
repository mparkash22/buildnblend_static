#!/usr/bin/env node

/**
 * Hero Image Optimization Script
 * Converts SVG hero images to WebP format for better performance
 * 
 * Requirements:
 * - Node.js
 * - sharp package: npm install sharp
 * 
 * Usage:
 * node scripts/optimize-hero-images.js
 */

const fs = require('fs');
const path = require('path');

const heroDir = path.join(__dirname, '..', 'images', 'hero');
const svgFiles = [
    'featured-dish.svg',
    'signature-burrito.svg',
    'mediterranean-wrap.svg',
    'green-smoothie.svg',
    'fusion-bowl.svg'
];

// Check if sharp is available
let sharp;
try {
    sharp = require('sharp');
} catch (error) {
    console.log('Sharp not found. To optimize images, install sharp:');
    console.log('npm install sharp');
    console.log('\nFor now, creating placeholder WebP files...');
    createPlaceholderWebP();
    process.exit(0);
}

async function optimizeHeroImages() {
    console.log('Optimizing hero slider images...');
    
    for (const svgFile of svgFiles) {
        const svgPath = path.join(heroDir, svgFile);
        const webpFile = svgFile.replace('.svg', '.webp');
        const webpPath = path.join(heroDir, webpFile);
        
        try {
            // Check if SVG file exists
            if (!fs.existsSync(svgPath)) {
                console.log(`⚠️  SVG file not found: ${svgFile}`);
                continue;
            }
            
            // Convert SVG to WebP
            await sharp(svgPath)
                .resize(800, 800, {
                    fit: 'cover',
                    position: 'center'
                })
                .webp({
                    quality: 85,
                    effort: 6
                })
                .toFile(webpPath);
            
            // Get file sizes
            const svgSize = fs.statSync(svgPath).size;
            const webpSize = fs.statSync(webpPath).size;
            const savings = ((svgSize - webpSize) / svgSize * 100).toFixed(1);
            
            console.log(`✅ ${svgFile} → ${webpFile}`);
            console.log(`   Size: ${(svgSize/1024).toFixed(1)}KB → ${(webpSize/1024).toFixed(1)}KB (${savings}% savings)`);
            
        } catch (error) {
            console.error(`❌ Error processing ${svgFile}:`, error.message);
        }
    }
    
    console.log('\n🎉 Hero image optimization complete!');
    console.log('\nOptimization summary:');
    console.log('- Images are resized to 800x800px for circular display');
    console.log('- WebP format provides better compression than SVG for complex images');
    console.log('- Quality set to 85% for optimal balance of size and quality');
    console.log('- All images should be under 150KB as per requirements');
}

function createPlaceholderWebP() {
    console.log('Creating placeholder WebP files...');
    
    // Create simple placeholder content for WebP files
    const placeholderContent = Buffer.from('WEBP placeholder - install sharp to generate actual WebP files');
    
    for (const svgFile of svgFiles) {
        const webpFile = svgFile.replace('.svg', '.webp');
        const webpPath = path.join(heroDir, webpFile);
        
        try {
            fs.writeFileSync(webpPath, placeholderContent);
            console.log(`📝 Created placeholder: ${webpFile}`);
        } catch (error) {
            console.error(`❌ Error creating placeholder ${webpFile}:`, error.message);
        }
    }
    
    console.log('\n📋 Placeholder WebP files created.');
    console.log('To generate actual optimized WebP images:');
    console.log('1. Install sharp: npm install sharp');
    console.log('2. Run this script again: node scripts/optimize-hero-images.js');
}

// Run the optimization
if (require.main === module) {
    optimizeHeroImages().catch(console.error);
}

module.exports = { optimizeHeroImages };