#!/usr/bin/env node

/**
 * Critical CSS Extraction and Inlining Script
 * Identifies and inlines critical above-the-fold CSS for faster page loads
 */

const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');

// Configuration
const BASE_DIR = path.join(__dirname, '..');
const PAGES = [
  'index.html',
  'about.html',
  'menu.html',
  'nutrition.html',
  'locations.html',
  'community.html',
  'contact.html'
];

/**
 * Manual critical CSS extraction
 * Extracts essential CSS rules for above-the-fold content
 */
function extractManualCriticalCSS() {
  console.log('📝 Extracting critical CSS manually...\n');
  
  // Read all CSS files
  const cssDir = path.join(BASE_DIR, 'css');
  const cssFiles = [
    'reset.css',
    'variables.css',
    'typography.css',
    'components.css',
    'layout.css'
  ];
  
  let criticalCSS = '/* Critical CSS - Above the fold styles */\n\n';
  
  // Extract critical rules from each file
  for (const file of cssFiles) {
    const filePath = path.join(cssDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (file === 'reset.css' || file === 'variables.css') {
      // Include entire reset and variables
      criticalCSS += `/* ${file} */\n${content}\n\n`;
    } else if (file === 'typography.css') {
      // Include base typography
      const bodyRules = content.match(/body\s*{[^}]+}/gs);
      const headingRules = content.match(/h[1-6][^{]*{[^}]+}/gs);
      if (bodyRules) criticalCSS += bodyRules.join('\n') + '\n\n';
      if (headingRules) criticalCSS += headingRules.join('\n') + '\n\n';
    } else if (file === 'components.css') {
      // Include header, navigation, buttons
      const headerRules = content.match(/\.site-header[^{]*{[^}]+}/gs);
      const navRules = content.match(/\.nav-[^{]*{[^}]+}/gs);
      const btnRules = content.match(/\.btn[^{]*{[^}]+}/gs);
      if (headerRules) criticalCSS += headerRules.join('\n') + '\n\n';
      if (navRules) criticalCSS += navRules.join('\n') + '\n\n';
      if (btnRules) criticalCSS += btnRules.join('\n') + '\n\n';
    } else if (file === 'layout.css') {
      // Include hero section
      const heroRules = content.match(/\.hero[^{]*{[^}]+}/gs);
      if (heroRules) criticalCSS += heroRules.join('\n') + '\n\n';
    }
  }
  
  // Minify critical CSS
  const minified = new CleanCSS({ level: 2 }).minify(criticalCSS);
  
  // Save critical CSS file
  const outputPath = path.join(BASE_DIR, 'css', 'critical.css');
  fs.writeFileSync(outputPath, minified.styles);
  
  const originalSize = Buffer.byteLength(criticalCSS, 'utf8');
  const minifiedSize = Buffer.byteLength(minified.styles, 'utf8');
  
  console.log(`  ✓ Critical CSS extracted: ${formatBytes(originalSize)} → ${formatBytes(minifiedSize)}`);
  console.log(`  📁 Saved to: css/critical.css\n`);
  
  return minified.styles;
}

/**
 * Create HTML templates with inlined critical CSS
 */
function createOptimizedTemplates(criticalCSS) {
  console.log('🔧 Creating optimized HTML templates...\n');
  
  const distDir = path.join(BASE_DIR, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  
  for (const page of PAGES) {
    const inputPath = path.join(BASE_DIR, page);
    let html = fs.readFileSync(inputPath, 'utf8');
    
    // Find the CSS links section
    const cssLinksRegex = /(<link rel="stylesheet" href="css\/[^"]+">[\s\n]*)+/g;
    
    // Create inline critical CSS block
    const inlineCritical = `<style>\n${criticalCSS}\n</style>\n`;
    
    // Create async loading for non-critical CSS
    const asyncCSS = `
    <!-- Critical CSS inlined above -->
    <!-- Non-critical CSS loaded asynchronously -->
    <link rel="preload" href="css/responsive.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="css/animations.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <link rel="preload" href="css/accessibility.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="css/responsive.css">
        <link rel="stylesheet" href="css/animations.css">
        <link rel="stylesheet" href="css/accessibility.css">
    </noscript>
    <script>
        // Fallback for browsers that don't support preload
        (function() {
            var links = document.querySelectorAll('link[rel="preload"][as="style"]');
            for (var i = 0; i < links.length; i++) {
                links[i].rel = 'stylesheet';
            }
        })();
    </script>`;
    
    // Replace CSS links with inline critical + async non-critical
    html = html.replace(cssLinksRegex, inlineCritical + asyncCSS);
    
    // Write optimized HTML
    const outputPath = path.join(distDir, page);
    fs.writeFileSync(outputPath, html);
    
    console.log(`  ✓ ${page} → dist/${page} (critical CSS inlined)`);
  }
  
  console.log('\n✅ Optimized templates created in dist/ directory\n');
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
function main() {
  console.log('🚀 Starting critical CSS extraction...\n');
  
  try {
    // Use manual extraction method (more reliable for static sites)
    const criticalCSS = extractManualCriticalCSS();
    createOptimizedTemplates(criticalCSS);
    
    console.log('📋 Next Steps:');
    console.log('  1. Review optimized HTML files in dist/ directory');
    console.log('  2. Test page load performance with Lighthouse');
    console.log('  3. Deploy dist/ directory to production');
    console.log('  4. Verify critical CSS is inlined in page source\n');
    
  } catch (error) {
    console.error('❌ Critical CSS extraction failed:', error);
    process.exit(1);
  }
}

main();
