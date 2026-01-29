#!/usr/bin/env node

/**
 * Minification Script for Build & Blend Website
 * Minifies all CSS and JavaScript files for production deployment
 */

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const { minify: terserMinify } = require('terser');

// Configuration
const CSS_DIR = path.join(__dirname, '..', 'css');
const JS_DIR = path.join(__dirname, '..', 'js');
const CSS_OUTPUT_DIR = path.join(__dirname, '..', 'css', 'min');
const JS_OUTPUT_DIR = path.join(__dirname, '..', 'js', 'min');

// Create output directories if they don't exist
if (!fs.existsSync(CSS_OUTPUT_DIR)) {
  fs.mkdirSync(CSS_OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(JS_OUTPUT_DIR)) {
  fs.mkdirSync(JS_OUTPUT_DIR, { recursive: true });
}

/**
 * Minify CSS files
 */
async function minifyCSS() {
  console.log('🎨 Minifying CSS files...');
  
  const cssFiles = fs.readdirSync(CSS_DIR)
    .filter(file => file.endsWith('.css') && !file.endsWith('.min.css'));
  
  const cleanCSS = new CleanCSS({
    level: 2,
    compatibility: 'ie11',
    format: false
  });
  
  let totalOriginalSize = 0;
  let totalMinifiedSize = 0;
  
  for (const file of cssFiles) {
    const inputPath = path.join(CSS_DIR, file);
    const outputPath = path.join(CSS_OUTPUT_DIR, file.replace('.css', '.min.css'));
    
    const input = fs.readFileSync(inputPath, 'utf8');
    const output = cleanCSS.minify(input);
    
    if (output.errors.length > 0) {
      console.error(`❌ Error minifying ${file}:`, output.errors);
      continue;
    }
    
    fs.writeFileSync(outputPath, output.styles);
    
    const originalSize = Buffer.byteLength(input, 'utf8');
    const minifiedSize = Buffer.byteLength(output.styles, 'utf8');
    const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
    
    totalOriginalSize += originalSize;
    totalMinifiedSize += minifiedSize;
    
    console.log(`  ✓ ${file} → ${path.basename(outputPath)} (${formatBytes(originalSize)} → ${formatBytes(minifiedSize)}, ${savings}% smaller)`);
  }
  
  const totalSavings = ((1 - totalMinifiedSize / totalOriginalSize) * 100).toFixed(1);
  console.log(`  📊 Total CSS: ${formatBytes(totalOriginalSize)} → ${formatBytes(totalMinifiedSize)} (${totalSavings}% reduction)\n`);
}

/**
 * Minify JavaScript files
 */
async function minifyJS() {
  console.log('⚡ Minifying JavaScript files...');
  
  const jsFiles = fs.readdirSync(JS_DIR)
    .filter(file => file.endsWith('.js') && !file.endsWith('.min.js'));
  
  let totalOriginalSize = 0;
  let totalMinifiedSize = 0;
  
  for (const file of jsFiles) {
    const inputPath = path.join(JS_DIR, file);
    const outputPath = path.join(JS_OUTPUT_DIR, file.replace('.js', '.min.js'));
    
    const input = fs.readFileSync(inputPath, 'utf8');
    
    try {
      const result = await terserMinify(input, {
        compress: {
          dead_code: true,
          drop_console: false,
          drop_debugger: true,
          keep_classnames: false,
          keep_fnames: false
        },
        mangle: {
          toplevel: false
        },
        format: {
          comments: false
        }
      });
      
      fs.writeFileSync(outputPath, result.code);
      
      const originalSize = Buffer.byteLength(input, 'utf8');
      const minifiedSize = Buffer.byteLength(result.code, 'utf8');
      const savings = ((1 - minifiedSize / originalSize) * 100).toFixed(1);
      
      totalOriginalSize += originalSize;
      totalMinifiedSize += minifiedSize;
      
      console.log(`  ✓ ${file} → ${path.basename(outputPath)} (${formatBytes(originalSize)} → ${formatBytes(minifiedSize)}, ${savings}% smaller)`);
    } catch (error) {
      console.error(`❌ Error minifying ${file}:`, error.message);
    }
  }
  
  const totalSavings = ((1 - totalMinifiedSize / totalOriginalSize) * 100).toFixed(1);
  console.log(`  📊 Total JS: ${formatBytes(totalOriginalSize)} → ${formatBytes(totalMinifiedSize)} (${totalSavings}% reduction)\n`);
}

/**
 * Format bytes to human-readable format
 */
function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting minification process...\n');
  
  try {
    await minifyCSS();
    await minifyJS();
    
    console.log('✅ Minification complete!');
    console.log('📁 Minified CSS files: css/min/');
    console.log('📁 Minified JS files: js/min/\n');
  } catch (error) {
    console.error('❌ Minification failed:', error);
    process.exit(1);
  }
}

main();
