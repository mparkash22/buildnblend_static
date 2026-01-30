# Quick Start: Chrome Browser Testing
## Build & Blend Website

**5-Minute Setup** | **Ready to Test**

---

## 🚀 Quick Start (3 Steps)

### Step 1: Open the Website in Chrome
```bash
# If testing locally:
cd /path/to/build-and-blend
python -m http.server 8000
# Then open: http://localhost:8000

# If testing production:
# Open: https://buildnblend.com
```

### Step 2: Run Automated Tests
1. Press `F12` to open Chrome DevTools
2. Click the **Console** tab
3. Copy and paste this command:
```bash
cat scripts/chrome-automated-tests.js
```
4. Paste the script into Console and press `Enter`
5. Review the results (✅ Pass, ❌ Fail, ⚠️ Warnings)

### Step 3: Run Lighthouse Performance Test
1. In DevTools, click the **Lighthouse** tab
2. Select all categories (Performance, Accessibility, Best Practices, SEO)
3. Click **Analyze page load**
4. Verify scores are > 80

**Done!** You've completed basic Chrome testing.

---

## 📋 For Comprehensive Testing

### Manual Testing Checklist
```bash
open CHROME_TESTING_CHECKLIST.md
```
- 200+ test items
- Covers all pages and features
- Issue documentation included

### Complete Testing Guide
```bash
open CHROME_TESTING_GUIDE.md
```
- Step-by-step instructions
- Responsive testing methods
- Accessibility testing procedures
- Issue reporting template

---

## 🎯 What to Test

### All Pages (7 total)
- [ ] Homepage (`index.html`)
- [ ] Menu (`menu.html`)
- [ ] About (`about.html`)
- [ ] Nutrition (`nutrition.html`)
- [ ] Locations (`locations.html`)
- [ ] Community (`community.html`)
- [ ] Contact (`contact.html`)

### All Viewports (3 sizes)
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

**Tip**: Use `Ctrl+Shift+M` to toggle Device Toolbar in Chrome DevTools

---

## ✅ Success Criteria

### Automated Tests
- ✅ Pass rate > 90%
- ✅ No critical errors
- ✅ All pages tested

### Lighthouse Scores
- ✅ Performance > 80
- ✅ Accessibility > 90
- ✅ Best Practices > 90
- ✅ SEO > 90

### Manual Checklist
- ✅ All interactive elements work
- ✅ Responsive behavior correct
- ✅ No visual issues

---

## 🐛 Found an Issue?

Use this template:

```markdown
**Page**: [page name]
**Issue**: [brief description]
**Expected**: [what should happen]
**Actual**: [what actually happens]
**Screenshot**: [attach image]
```

---

## 📚 Full Documentation

- **CHROME_TESTING_CHECKLIST.md** - Manual testing checklist
- **CHROME_TESTING_GUIDE.md** - Comprehensive guide
- **scripts/chrome-automated-tests.js** - Automated test script
- **TASK_19.1_COMPLETION_SUMMARY.md** - Implementation details

---

## 🆘 Need Help?

1. Check the **CHROME_TESTING_GUIDE.md** for detailed instructions
2. Review the **automated test script** comments
3. Consult the **design document** (`.kiro/specs/premium-wellness-website/design.md`)

---

**Chrome Version Required**: 120+ or 121+ (latest 2 versions)  
**Estimated Time**: 5 minutes (automated) | 30-60 minutes (comprehensive)  
**Last Updated**: January 2025
