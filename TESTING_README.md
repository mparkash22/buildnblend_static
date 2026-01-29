# Testing Documentation
## Build & Blend Premium Wellness Website

This directory contains comprehensive testing materials for the Build & Blend website, specifically for Chrome browser testing (Task 19.1).

---

## 📁 Files Overview

### Quick Start
- **QUICK_START_CHROME_TESTING.md** - 5-minute quick start guide
  - Fast setup instructions
  - Essential tests only
  - Perfect for rapid validation

### Manual Testing
- **CHROME_TESTING_CHECKLIST.md** - Comprehensive manual testing checklist
  - 200+ individual test items
  - Covers all pages and features
  - Issue documentation section
  - Test summary tracking

### Automated Testing
- **scripts/chrome-automated-tests.js** - Automated testing script
  - 50+ automated tests
  - 12 test categories
  - Run in Chrome DevTools Console
  - Color-coded results

### Complete Guide
- **CHROME_TESTING_GUIDE.md** - Full testing guide
  - Prerequisites and setup
  - Manual testing procedures
  - Automated testing procedures
  - Responsive testing methods
  - Performance testing with Lighthouse
  - Accessibility testing
  - Issue reporting template

### Summary
- **TASK_19.1_COMPLETION_SUMMARY.md** - Implementation summary
  - What was implemented
  - Testing coverage
  - Usage instructions
  - Validation results

---

## 🚀 Getting Started

### For Quick Testing (5 minutes)
```bash
# 1. Read the quick start guide
open QUICK_START_CHROME_TESTING.md

# 2. Run automated tests
# Open Chrome DevTools (F12) → Console tab
# Copy and paste: scripts/chrome-automated-tests.js

# 3. Run Lighthouse
# DevTools → Lighthouse tab → Analyze page load
```

### For Comprehensive Testing (30-60 minutes)
```bash
# 1. Read the complete guide
open CHROME_TESTING_GUIDE.md

# 2. Use the manual checklist
open CHROME_TESTING_CHECKLIST.md

# 3. Test all pages systematically
# 4. Document issues
# 5. Run automated tests
# 6. Run Lighthouse audits
```

---

## 📊 Testing Coverage

### Pages Tested
- ✅ Homepage (`index.html`)
- ✅ Menu Page (`menu.html`)
- ✅ About Page (`about.html`)
- ✅ Contact Page (`contact.html`)
- ✅ Nutrition Page (`nutrition.html`)
- ✅ Locations Page (`locations.html`)
- ✅ Community Page (`community.html`)

### Test Categories
- ✅ Visual & Layout
- ✅ Interactions & Hover Effects
- ✅ Responsive Behavior (Desktop, Tablet, Mobile)
- ✅ Navigation (Header, Footer, Mobile Menu)
- ✅ Forms & Validation
- ✅ Images & Lazy Loading
- ✅ Accessibility (Keyboard, Focus, ARIA, Contrast)
- ✅ Performance (Load Times, Core Web Vitals)
- ✅ SEO (Meta Tags, Headings, Schema)
- ✅ Browser Compatibility

### Viewports Tested
- ✅ Desktop: 1920x1080 (1200px+)
- ✅ Tablet: 768x1024 (768-1199px)
- ✅ Mobile: 375x667 (320-767px)
- ✅ Mobile Landscape: 667x375

---

## 🎯 Testing Targets

### Performance (Lighthouse)
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Overall Score**: > 80

### Accessibility
- **WCAG AA**: 100% compliance
- **Color Contrast**: 4.5:1 (normal), 3:1 (large)
- **Keyboard Navigation**: All elements accessible
- **Lighthouse Score**: > 90

### Best Practices
- **HTTPS**: Enabled
- **No Console Errors**: Clean console
- **Lighthouse Score**: > 90

### SEO
- **Meta Tags**: Unique per page
- **Heading Hierarchy**: Proper structure
- **Lighthouse Score**: > 90

---

## 🛠️ Tools Required

### Essential
- **Google Chrome** (Version 120+ or 121+)
- **Chrome DevTools** (built-in, press F12)

### Recommended
- **Lighthouse** (built-in Chrome DevTools)
- **axe DevTools** (Chrome extension for accessibility)
- **Window Resizer** (Chrome extension for viewport testing)

### Optional
- **NVDA/JAWS** (Windows screen readers)
- **VoiceOver** (Mac screen reader)
- **OBS Studio** (screen recording for issues)

---

## 📝 Testing Workflow

### 1. Preparation
```bash
# Check Chrome version
chrome://version/

# Clear cache
Ctrl+Shift+Delete → Clear all

# Disable extensions (optional)
chrome://extensions/
```

### 2. Automated Testing
```bash
# For each page:
1. Open page in Chrome
2. Open DevTools (F12)
3. Go to Console tab
4. Run automated test script
5. Save results
```

### 3. Manual Testing
```bash
# For each page:
1. Open CHROME_TESTING_CHECKLIST.md
2. Test each item systematically
3. Mark as Pass/Fail
4. Document issues
5. Take screenshots
```

### 4. Performance Testing
```bash
# For each page:
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select all categories
4. Click "Analyze page load"
5. Verify scores > 80
6. Save report
```

### 5. Responsive Testing
```bash
# For each page:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test Desktop (1920x1080)
4. Test Tablet (768x1024)
5. Test Mobile (375x667)
6. Verify layout adapts correctly
```

### 6. Accessibility Testing
```bash
# For each page:
1. Test keyboard navigation (Tab key)
2. Check focus indicators
3. Run axe DevTools scan
4. Verify color contrast
5. Test with screen reader (optional)
```

---

## 🐛 Issue Reporting

### Issue Template
```markdown
**Page**: [URL or page name]
**Chrome Version**: [e.g., 121.0.6167.85]
**Device/OS**: [e.g., Windows 11]
**Viewport**: [e.g., Desktop 1920x1080]

**Steps to Reproduce**:
1. Step 1
2. Step 2
3. Step 3

**Expected**: [What should happen]
**Actual**: [What actually happens]
**Screenshot**: [Attach image]
**Severity**: Critical / Major / Minor
```

### Taking Screenshots
```bash
# In Chrome DevTools:
Ctrl+Shift+P → Type "screenshot"
→ Select screenshot type
→ Save image
```

---

## 📈 Test Results

### Automated Tests
- **Total Tests**: 50+
- **Target Pass Rate**: > 90%
- **Run Time**: ~5 seconds per page

### Manual Tests
- **Total Items**: 200+
- **Estimated Time**: 30-60 minutes
- **Coverage**: All pages and features

### Lighthouse Audits
- **Categories**: 4 (Performance, Accessibility, Best Practices, SEO)
- **Target Scores**: > 80 (Performance), > 90 (Others)
- **Run Time**: ~30 seconds per page

---

## 🔄 Testing Frequency

### During Development
- Run automated tests on every code change
- Run Lighthouse before committing
- Quick manual checks for new features

### Before Deployment
- Complete manual checklist
- Full automated test suite
- Lighthouse audits on all pages
- Accessibility audit
- Cross-browser testing

### Post-Deployment
- Smoke tests (automated)
- Performance monitoring
- User feedback review
- Monthly comprehensive testing

---

## 📚 Additional Resources

### Chrome Documentation
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/)
- [Chrome Accessibility](https://developer.chrome.com/docs/devtools/accessibility/)

### Web Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Core Web Vitals](https://web.dev/vitals/)
- [HTML5 Specification](https://html.spec.whatwg.org/)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Extension](https://wave.webaim.org/extension/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

## 🤝 Contributing

### Adding New Tests

**For Automated Tests**:
1. Edit `scripts/chrome-automated-tests.js`
2. Add test in appropriate category
3. Use `test()` function for assertions
4. Document the test purpose

**For Manual Checklist**:
1. Edit `CHROME_TESTING_CHECKLIST.md`
2. Add item in appropriate section
3. Use checkbox format `- [ ]`
4. Include clear pass/fail criteria

### Updating Documentation
1. Keep guides in sync with implementation
2. Update version numbers
3. Add screenshots for new features
4. Review and test all instructions

---

## 📞 Support

### Questions?
1. Check the **CHROME_TESTING_GUIDE.md** for detailed instructions
2. Review the **automated test script** comments
3. Consult the **design document** (`.kiro/specs/premium-wellness-website/design.md`)
4. Contact the development team

### Found a Bug in Tests?
1. Document the issue
2. Include test name and expected behavior
3. Provide steps to reproduce
4. Submit to development team

---

## ✅ Checklist for Testers

### Before Testing
- [ ] Chrome version verified (120+ or 121+)
- [ ] Browser cache cleared
- [ ] Testing environment set up
- [ ] Documentation reviewed

### During Testing
- [ ] Automated tests run on all pages
- [ ] Manual checklist completed
- [ ] Responsive behavior verified
- [ ] Performance tested with Lighthouse
- [ ] Accessibility tested
- [ ] Issues documented with screenshots

### After Testing
- [ ] Test results compiled
- [ ] Issues reported with proper template
- [ ] Summary report created
- [ ] Stakeholders notified
- [ ] Next steps identified

---

## 📊 Testing Metrics

### Current Status
- **Task 19.1**: ✅ COMPLETED
- **Chrome Testing**: ✅ READY
- **Documentation**: ✅ COMPLETE
- **Automated Tests**: ✅ FUNCTIONAL

### Next Tasks
- [ ] Task 19.2: Firefox testing
- [ ] Task 19.3: Safari testing
- [ ] Task 19.4: Edge testing
- [ ] Task 19.5: Mobile browser testing

---

**Version**: 1.0  
**Last Updated**: January 14, 2025  
**Maintained by**: Build & Blend Development Team  
**Status**: ✅ Ready for Testing
