#!/usr/bin/env node

/**
 * Accessibility Verification Script
 * Verifies semantic HTML and heading hierarchy across all pages
 * Requirements: 13.4, 14.3
 */

const fs = require('fs');
const path = require('path');

// HTML files to check
const htmlFiles = [
    'index.html',
    'about.html',
    'menu.html',
    'nutrition.html',
    'locations.html',
    'community.html',
    'contact.html'
];

// Color definitions for console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m'
};

/**
 * Extract heading hierarchy from HTML content
 */
function extractHeadings(html, filename) {
    const headingRegex = /<h([1-6])[^>]*>(.*?)<\/h\1>/gi;
    const headings = [];
    let match;
    
    while ((match = headingRegex.exec(html)) !== null) {
        const level = parseInt(match[1]);
        const text = match[2].replace(/<[^>]*>/g, '').trim();
        headings.push({ level, text, filename });
    }
    
    return headings;
}

/**
 * Verify heading hierarchy follows proper order
 */
function verifyHeadingHierarchy(headings, filename) {
    const issues = [];
    
    // Check for H1
    const h1Count = headings.filter(h => h.level === 1).length;
    if (h1Count === 0) {
        issues.push(`${colors.red}✗${colors.reset} No H1 found in ${filename}`);
    } else if (h1Count > 1) {
        issues.push(`${colors.red}✗${colors.reset} Multiple H1s found in ${filename} (${h1Count})`);
    }
    
    // Check for skipped levels
    for (let i = 1; i < headings.length; i++) {
        const prevLevel = headings[i - 1].level;
        const currLevel = headings[i].level;
        
        if (currLevel > prevLevel + 1) {
            issues.push(
                `${colors.yellow}⚠${colors.reset} Skipped heading level in ${filename}: ` +
                `H${prevLevel} → H${currLevel} ("${headings[i].text}")`
            );
        }
    }
    
    return issues;
}

/**
 * Check for semantic HTML elements
 */
function checkSemanticHTML(html, filename) {
    const issues = [];
    const semanticElements = {
        '<main': 'main',
        '<header': 'header',
        '<footer': 'footer',
        '<nav': 'nav',
        '<section': 'section',
        '<article': 'article'
    };
    
    for (const [tag, name] of Object.entries(semanticElements)) {
        if (!html.includes(tag)) {
            issues.push(`${colors.yellow}⚠${colors.reset} Missing <${name}> element in ${filename}`);
        }
    }
    
    return issues;
}

/**
 * Check for ARIA labels on icon buttons
 */
function checkAriaLabels(html, filename) {
    const issues = [];
    
    // Check hamburger button
    if (html.includes('class="hamburger"')) {
        if (!html.match(/<button[^>]*class="hamburger"[^>]*aria-label="[^"]+"/)) {
            issues.push(`${colors.red}✗${colors.reset} Hamburger button missing aria-label in ${filename}`);
        }
    }
    
    // Check social links
    const socialLinkRegex = /<a[^>]*href="[^"]*"[^>]*>(Instagram|Facebook|WhatsApp)<\/a>/gi;
    let match;
    while ((match = socialLinkRegex.exec(html)) !== null) {
        const fullMatch = match[0];
        if (!fullMatch.includes('aria-label=')) {
            issues.push(`${colors.yellow}⚠${colors.reset} Social link "${match[1]}" missing aria-label in ${filename}`);
        }
    }
    
    return issues;
}

/**
 * Check for alt text on images
 */
function checkImageAltText(html, filename) {
    const issues = [];
    const imgRegex = /<img[^>]*>/gi;
    let match;
    
    while ((match = imgRegex.exec(html)) !== null) {
        const img = match[0];
        
        // Check if alt attribute exists
        if (!img.includes('alt=')) {
            issues.push(`${colors.red}✗${colors.reset} Image missing alt attribute in ${filename}`);
        } else {
            // Check if alt is empty or generic
            const altMatch = img.match(/alt="([^"]*)"/);
            if (altMatch) {
                const altText = altMatch[1];
                if (altText === '') {
                    // Empty alt is okay for decorative images
                    continue;
                }
                // Check for generic alt text
                const genericPatterns = [
                    /^image\d*$/i,
                    /^img\d*$/i,
                    /^picture\d*$/i,
                    /^photo\d*$/i,
                    /\.(jpg|jpeg|png|gif|webp|svg)$/i
                ];
                
                for (const pattern of genericPatterns) {
                    if (pattern.test(altText)) {
                        issues.push(
                            `${colors.yellow}⚠${colors.reset} Generic alt text "${altText}" in ${filename}`
                        );
                        break;
                    }
                }
            }
        }
    }
    
    return issues;
}

/**
 * Check for skip to main content link
 */
function checkSkipLink(html, filename) {
    const issues = [];
    
    if (!html.includes('skip-to-main')) {
        issues.push(`${colors.yellow}⚠${colors.reset} Missing skip-to-main link in ${filename}`);
    }
    
    if (!html.includes('id="main-content"')) {
        issues.push(`${colors.yellow}⚠${colors.reset} Missing main-content id in ${filename}`);
    }
    
    return issues;
}

/**
 * Main verification function
 */
function verifyAccessibility() {
    console.log(`\n${colors.blue}=== Accessibility Verification ===${colors.reset}\n`);
    
    let totalIssues = 0;
    const allHeadings = [];
    
    for (const filename of htmlFiles) {
        const filepath = path.join(process.cwd(), filename);
        
        if (!fs.existsSync(filepath)) {
            console.log(`${colors.yellow}⚠${colors.reset} File not found: ${filename}`);
            continue;
        }
        
        const html = fs.readFileSync(filepath, 'utf-8');
        const headings = extractHeadings(html, filename);
        allHeadings.push(...headings);
        
        console.log(`${colors.blue}Checking ${filename}...${colors.reset}`);
        
        // Verify heading hierarchy
        const headingIssues = verifyHeadingHierarchy(headings, filename);
        
        // Check semantic HTML
        const semanticIssues = checkSemanticHTML(html, filename);
        
        // Check ARIA labels
        const ariaIssues = checkAriaLabels(html, filename);
        
        // Check image alt text
        const altTextIssues = checkImageAltText(html, filename);
        
        // Check skip link
        const skipLinkIssues = checkSkipLink(html, filename);
        
        const allIssues = [
            ...headingIssues,
            ...semanticIssues,
            ...ariaIssues,
            ...altTextIssues,
            ...skipLinkIssues
        ];
        
        if (allIssues.length === 0) {
            console.log(`  ${colors.green}✓${colors.reset} All checks passed`);
        } else {
            allIssues.forEach(issue => console.log(`  ${issue}`));
            totalIssues += allIssues.length;
        }
        
        console.log('');
    }
    
    // Summary
    console.log(`${colors.blue}=== Summary ===${colors.reset}`);
    console.log(`Total files checked: ${htmlFiles.length}`);
    console.log(`Total headings found: ${allHeadings.length}`);
    
    if (totalIssues === 0) {
        console.log(`${colors.green}✓ All accessibility checks passed!${colors.reset}\n`);
        process.exit(0);
    } else {
        console.log(`${colors.red}✗ Found ${totalIssues} accessibility issues${colors.reset}\n`);
        process.exit(1);
    }
}

// Run verification
verifyAccessibility();
