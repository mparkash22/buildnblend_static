/**
 * Chrome Automated Testing Script
 * Build & Blend Premium Wellness Website
 * 
 * This script performs automated checks that can be run in Chrome DevTools Console
 * or as part of an automated testing suite.
 * 
 * Usage:
 * 1. Open the website in Chrome
 * 2. Open DevTools (F12)
 * 3. Copy and paste this script into the Console
 * 4. Press Enter to run
 */

(function() {
    'use strict';

    const results = {
        passed: [],
        failed: [],
        warnings: []
    };

    // Helper function to log test results
    function test(name, condition, message = '') {
        if (condition) {
            results.passed.push(name);
            console.log(`✅ PASS: ${name}`);
        } else {
            results.failed.push({ name, message });
            console.error(`❌ FAIL: ${name}${message ? ' - ' + message : ''}`);
        }
    }

    function warn(name, message) {
        results.warnings.push({ name, message });
        console.warn(`⚠️  WARN: ${name} - ${message}`);
    }

    console.log('🚀 Starting Chrome Automated Tests for Build & Blend Website\n');
    console.log('═'.repeat(80));

    // ========================================
    // 1. PAGE STRUCTURE TESTS
    // ========================================
    console.log('\n📋 Testing Page Structure...\n');

    test(
        'HTML lang attribute is set',
        document.documentElement.lang === 'en',
        'Expected lang="en"'
    );

    test(
        'Viewport meta tag exists',
        !!document.querySelector('meta[name="viewport"]'),
        'Viewport meta tag is required for responsive design'
    );

    test(
        'Page has exactly one H1',
        document.querySelectorAll('h1').length === 1,
        `Found ${document.querySelectorAll('h1').length} H1 elements`
    );

    test(
        'Page has a main element',
        !!document.querySelector('main'),
        'Main landmark is required for accessibility'
    );

    test(
        'Page has a header element',
        !!document.querySelector('header'),
        'Header landmark is required'
    );

    test(
        'Page has a footer element',
        !!document.querySelector('footer'),
        'Footer landmark is required'
    );

    test(
        'Page has navigation',
        !!document.querySelector('nav'),
        'Navigation landmark is required'
    );

    // ========================================
    // 2. NAVIGATION TESTS
    // ========================================
    console.log('\n🧭 Testing Navigation...\n');

    const navLinks = document.querySelectorAll('.nav-link');
    test(
        'Navigation has 7 links',
        navLinks.length === 7,
        `Found ${navLinks.length} navigation links`
    );

    const navPages = ['index.html', 'about.html', 'menu.html', 'nutrition.html', 'locations.html', 'community.html', 'contact.html'];
    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        test(
            `Nav link ${index + 1} has valid href`,
            href && href.length > 0,
            `Link text: "${link.textContent.trim()}"`
        );
    });

    const activeNavLink = document.querySelector('.nav-link.active');
    test(
        'One navigation link is marked as active',
        !!activeNavLink,
        'Active page should be highlighted'
    );

    const hamburger = document.querySelector('.hamburger');
    test(
        'Hamburger menu button exists',
        !!hamburger,
        'Required for mobile navigation'
    );

    if (hamburger) {
        test(
            'Hamburger has aria-label',
            hamburger.hasAttribute('aria-label'),
            'Aria-label required for accessibility'
        );
    }

    // ========================================
    // 3. FOOTER TESTS
    // ========================================
    console.log('\n🦶 Testing Footer...\n');

    const footer = document.querySelector('.site-footer');
    test('Footer exists', !!footer);

    if (footer) {
        const footerSections = footer.querySelectorAll('.footer-section');
        test(
            'Footer has 4 sections',
            footerSections.length === 4,
            `Found ${footerSections.length} footer sections`
        );

        const newsletterForm = footer.querySelector('.newsletter-form');
        test('Newsletter form exists in footer', !!newsletterForm);

        const footerLinks = footer.querySelectorAll('a');
        test(
            'Footer has multiple links',
            footerLinks.length > 5,
            `Found ${footerLinks.length} footer links`
        );
    }

    // ========================================
    // 4. IMAGE TESTS
    // ========================================
    console.log('\n🖼️  Testing Images...\n');

    const images = document.querySelectorAll('img');
    test(
        'Page has images',
        images.length > 0,
        `Found ${images.length} images`
    );

    let imagesWithAlt = 0;
    let imagesWithoutAlt = 0;
    let imagesWithLazyLoading = 0;

    images.forEach((img, index) => {
        const alt = img.getAttribute('alt');
        const loading = img.getAttribute('loading');

        if (alt && alt.trim().length > 0) {
            imagesWithAlt++;
        } else {
            imagesWithoutAlt++;
            warn(`Image ${index + 1} missing alt text`, img.src);
        }

        if (loading === 'lazy') {
            imagesWithLazyLoading++;
        }
    });

    test(
        'All images have alt text',
        imagesWithoutAlt === 0,
        `${imagesWithoutAlt} images missing alt text`
    );

    if (images.length > 1) {
        test(
            'Some images use lazy loading',
            imagesWithLazyLoading > 0,
            `${imagesWithLazyLoading} of ${images.length} images use lazy loading`
        );
    }

    // ========================================
    // 5. FORM TESTS (if on contact page)
    // ========================================
    console.log('\n📝 Testing Forms...\n');

    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        test('Contact form exists', true);

        const requiredFields = contactForm.querySelectorAll('[required]');
        test(
            'Form has required fields',
            requiredFields.length > 0,
            `Found ${requiredFields.length} required fields`
        );

        requiredFields.forEach(field => {
            const label = document.querySelector(`label[for="${field.id}"]`);
            test(
                `Field "${field.name}" has associated label`,
                !!label,
                `Field ID: ${field.id}`
            );

            test(
                `Field "${field.name}" has aria-required`,
                field.hasAttribute('aria-required'),
                'Required for accessibility'
            );
        });

        const emailInput = contactForm.querySelector('input[type="email"]');
        if (emailInput) {
            test('Email input exists', true);
            test(
                'Email input has type="email"',
                emailInput.type === 'email',
                'Enables browser validation'
            );
        }
    } else {
        console.log('ℹ️  Contact form not found (not on contact page)');
    }

    // ========================================
    // 6. BUTTON TESTS
    // ========================================
    console.log('\n🔘 Testing Buttons...\n');

    const buttons = document.querySelectorAll('button, .btn');
    test(
        'Page has buttons',
        buttons.length > 0,
        `Found ${buttons.length} buttons`
    );

    let buttonsWithAriaLabel = 0;
    buttons.forEach(button => {
        const hasText = button.textContent.trim().length > 0;
        const hasAriaLabel = button.hasAttribute('aria-label');

        if (!hasText && !hasAriaLabel) {
            warn('Button without text or aria-label', button.outerHTML.substring(0, 100));
        } else if (hasAriaLabel) {
            buttonsWithAriaLabel++;
        }
    });

    // ========================================
    // 7. LINK TESTS
    // ========================================
    console.log('\n🔗 Testing Links...\n');

    const links = document.querySelectorAll('a');
    test(
        'Page has links',
        links.length > 0,
        `Found ${links.length} links`
    );

    let emptyLinks = 0;
    let externalLinks = 0;
    let internalLinks = 0;

    links.forEach(link => {
        const href = link.getAttribute('href');
        
        if (!href || href === '#') {
            emptyLinks++;
        } else if (href.startsWith('http')) {
            externalLinks++;
            
            // Check if external links have proper attributes
            if (!link.hasAttribute('target') || !link.hasAttribute('rel')) {
                warn('External link missing target or rel', href);
            }
        } else {
            internalLinks++;
        }
    });

    test(
        'Most links have valid hrefs',
        emptyLinks < links.length * 0.2,
        `${emptyLinks} links with empty or # href`
    );

    // ========================================
    // 8. ACCESSIBILITY TESTS
    // ========================================
    console.log('\n♿ Testing Accessibility...\n');

    const skipLink = document.querySelector('.skip-to-main');
    test(
        'Skip to main content link exists',
        !!skipLink,
        'Required for keyboard navigation'
    );

    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    test(
        'Page has heading hierarchy',
        headings.length > 0,
        `Found ${headings.length} headings`
    );

    // Check heading order
    let previousLevel = 0;
    let headingOrderCorrect = true;
    headings.forEach(heading => {
        const level = parseInt(heading.tagName.substring(1));
        if (level > previousLevel + 1) {
            headingOrderCorrect = false;
            warn('Heading hierarchy skip', `${heading.tagName} after H${previousLevel}`);
        }
        previousLevel = level;
    });

    test(
        'Heading hierarchy is correct',
        headingOrderCorrect,
        'Headings should not skip levels'
    );

    // ========================================
    // 9. PERFORMANCE TESTS
    // ========================================
    console.log('\n⚡ Testing Performance...\n');

    // Check for minified CSS
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let minifiedCSS = 0;
    stylesheets.forEach(link => {
        if (link.href.includes('.min.css')) {
            minifiedCSS++;
        }
    });

    if (stylesheets.length > 0) {
        test(
            'Some CSS files are minified',
            minifiedCSS > 0,
            `${minifiedCSS} of ${stylesheets.length} CSS files are minified`
        );
    }

    // Check for minified JS
    const scripts = document.querySelectorAll('script[src]');
    let minifiedJS = 0;
    scripts.forEach(script => {
        if (script.src.includes('.min.js')) {
            minifiedJS++;
        }
    });

    if (scripts.length > 0) {
        test(
            'Some JS files are minified',
            minifiedJS > 0,
            `${minifiedJS} of ${scripts.length} JS files are minified`
        );
    }

    // ========================================
    // 10. SEO TESTS
    // ========================================
    console.log('\n🔍 Testing SEO...\n');

    const metaDescription = document.querySelector('meta[name="description"]');
    test(
        'Meta description exists',
        !!metaDescription,
        'Required for SEO'
    );

    if (metaDescription) {
        const descLength = metaDescription.content.length;
        test(
            'Meta description has appropriate length',
            descLength >= 50 && descLength <= 160,
            `Length: ${descLength} characters`
        );
    }

    const title = document.querySelector('title');
    test('Page has title', !!title);

    if (title) {
        const titleLength = title.textContent.length;
        test(
            'Title has appropriate length',
            titleLength >= 10 && titleLength <= 60,
            `Length: ${titleLength} characters`
        );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    test('Meta keywords exist', !!metaKeywords);

    // ========================================
    // 11. MENU PAGE SPECIFIC TESTS
    // ========================================
    if (window.location.pathname.includes('menu.html')) {
        console.log('\n🍽️  Testing Menu Page Specific Features...\n');

        const filterButtons = document.querySelectorAll('.filter-btn');
        test(
            'Menu filter buttons exist',
            filterButtons.length >= 7,
            `Found ${filterButtons.length} filter buttons`
        );

        const menuItems = document.querySelectorAll('.card-menu');
        test(
            'Menu has at least 18 items',
            menuItems.length >= 18,
            `Found ${menuItems.length} menu items`
        );

        menuItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            test(
                `Menu item ${index + 1} has category`,
                !!category,
                'Required for filtering'
            );
        });
    }

    // ========================================
    // 12. RESPONSIVE DESIGN TESTS
    // ========================================
    console.log('\n📱 Testing Responsive Design...\n');

    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight
    };

    console.log(`Current viewport: ${viewport.width}x${viewport.height}`);

    if (viewport.width >= 1200) {
        console.log('✓ Desktop viewport detected');
    } else if (viewport.width >= 768) {
        console.log('✓ Tablet viewport detected');
    } else {
        console.log('✓ Mobile viewport detected');
    }

    // Check if CSS custom properties are supported
    const supportsCustomProperties = CSS.supports('color', 'var(--test)');
    test(
        'Browser supports CSS custom properties',
        supportsCustomProperties,
        'Required for theming'
    );

    // ========================================
    // FINAL RESULTS
    // ========================================
    console.log('\n' + '═'.repeat(80));
    console.log('\n📊 TEST RESULTS SUMMARY\n');
    console.log('═'.repeat(80));
    
    console.log(`\n✅ Passed: ${results.passed.length}`);
    console.log(`❌ Failed: ${results.failed.length}`);
    console.log(`⚠️  Warnings: ${results.warnings.length}`);
    
    const total = results.passed.length + results.failed.length;
    const passRate = ((results.passed.length / total) * 100).toFixed(1);
    
    console.log(`\n📈 Pass Rate: ${passRate}%`);
    
    if (results.failed.length > 0) {
        console.log('\n❌ FAILED TESTS:');
        results.failed.forEach(({ name, message }) => {
            console.log(`   • ${name}${message ? ': ' + message : ''}`);
        });
    }
    
    if (results.warnings.length > 0) {
        console.log('\n⚠️  WARNINGS:');
        results.warnings.forEach(({ name, message }) => {
            console.log(`   • ${name}: ${message}`);
        });
    }
    
    console.log('\n' + '═'.repeat(80));
    
    if (results.failed.length === 0) {
        console.log('\n🎉 All tests passed! Website is ready for Chrome.');
    } else {
        console.log('\n⚠️  Some tests failed. Please review and fix issues.');
    }
    
    console.log('\n💡 TIP: Run this script on different pages to test the entire site.');
    console.log('💡 TIP: Resize the browser window and run again to test responsive behavior.');
    console.log('\n' + '═'.repeat(80));

    // Return results for programmatic access
    return {
        passed: results.passed.length,
        failed: results.failed.length,
        warnings: results.warnings.length,
        passRate: passRate,
        details: results
    };
})();
