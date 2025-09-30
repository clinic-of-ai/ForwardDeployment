# 🔍 Chrome DevTools MCP - Complete Extraction Plan

## 🎯 Objective
Extract and replicate https://thecodingtrain.com/ using **Chrome DevTools MCP only** (no Open Lovable).

## ✅ Status
- Chrome DevTools MCP: **Running** (isolated mode, non-headless)
- Baseline screenshot: **Captured**
- Git repo: **Initialized** at C:\Users\phili\Documents\Coding\Replica

## 📋 Extraction Sequence

### **Phase 1: HTML Structure Extraction** ✓ READY

Run these in your MCP client (Cursor/Claude Code):

```javascript
// 1. Navigate to target
navigate_page("https://thecodingtrain.com/")

// 2. Extract complete HTML
evaluate_script("document.documentElement.outerHTML")

// 3. Extract body content
evaluate_script("document.body.innerHTML")

// 4. Extract head metadata
evaluate_script("document.head.innerHTML")

// 5. Get all sections
evaluate_script("Array.from(document.querySelectorAll('section, header, nav, footer, main')).map(el => ({ tag: el.tagName, id: el.id, classes: el.className, html: el.outerHTML }))")
```

### **Phase 2: CSS Extraction**

```javascript
// 1. Extract all stylesheet URLs
evaluate_script("Array.from(document.querySelectorAll('link[rel=\"stylesheet\"]')).map(link => link.href)")

// 2. Extract inline styles
evaluate_script("Array.from(document.querySelectorAll('[style]')).map(el => ({ selector: el.tagName + '.' + el.className, style: el.style.cssText }))")

// 3. Extract CSS custom properties (variables)
evaluate_script("Array.from(document.styleSheets).flatMap(sheet => { try { return Array.from(sheet.cssRules).filter(rule => rule.selectorText === ':root').map(rule => rule.cssText) } catch(e) { return [] } })")

// 4. Extract computed styles for key elements
evaluate_script("({ root: getComputedStyle(document.documentElement).cssText, body: getComputedStyle(document.body).cssText, hero: getComputedStyle(document.querySelector('.hero') || document.body).cssText })")

// 5. Extract color palette
evaluate_script("Array.from(new Set(Array.from(document.querySelectorAll('*')).flatMap(el => [getComputedStyle(el).color, getComputedStyle(el).backgroundColor]).filter(c => c && c !== 'rgba(0, 0, 0, 0)')))")
```

### **Phase 3: Typography Extraction**

```javascript
// 1. Extract fonts
evaluate_script("Array.from(document.fonts).map(font => ({ family: font.family, style: font.style, weight: font.weight, variant: font.variant }))")

// 2. Font families used
evaluate_script("Array.from(new Set(Array.from(document.querySelectorAll('*')).map(el => getComputedStyle(el).fontFamily).filter(f => f)))")

// 3. Font sizes
evaluate_script("Array.from(new Set(Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span')).map(el => ({ tag: el.tagName, fontSize: getComputedStyle(el).fontSize, fontWeight: getComputedStyle(el).fontWeight }))))")
```

### **Phase 4: Layout & Spacing**

```javascript
// 1. Extract grid/flexbox layouts
evaluate_script("Array.from(document.querySelectorAll('*')).filter(el => ['grid', 'flex'].includes(getComputedStyle(el).display)).map(el => ({ tag: el.tagName, class: el.className, display: getComputedStyle(el).display, gap: getComputedStyle(el).gap }))")

// 2. Extract spacing (margins/padding)
evaluate_script("Array.from(document.querySelectorAll('section, .card, .track-card')).map(el => ({ selector: el.className, margin: getComputedStyle(el).margin, padding: getComputedStyle(el).padding }))")

// 3. Extract dimensions
evaluate_script("Array.from(document.querySelectorAll('section')).map(el => ({ section: el.className, rect: el.getBoundingClientRect(), computed: { width: getComputedStyle(el).width, height: getComputedStyle(el).height } }))")
```

### **Phase 5: Asset Extraction**

```javascript
// 1. Extract all images
evaluate_script("Array.from(document.querySelectorAll('img')).map(img => ({ src: img.src, alt: img.alt, width: img.width, height: img.height, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight }))")

// 2. Extract background images
evaluate_script("Array.from(document.querySelectorAll('*')).filter(el => getComputedStyle(el).backgroundImage !== 'none').map(el => ({ selector: el.className, backgroundImage: getComputedStyle(el).backgroundImage }))")

// 3. Extract icons and SVGs
evaluate_script("Array.from(document.querySelectorAll('svg, [class*=\"icon\"]')).map(el => ({ html: el.outerHTML, viewBox: el.getAttribute('viewBox') }))")

// 4. Extract script sources
evaluate_script("Array.from(document.querySelectorAll('script[src]')).map(script => script.src)")
```

### **Phase 6: Interactive Elements**

```javascript
// 1. Extract navigation structure
evaluate_script("document.querySelector('nav')?.outerHTML")

// 2. Extract buttons and links
evaluate_script("Array.from(document.querySelectorAll('a, button')).map(el => ({ tag: el.tagName, text: el.textContent.trim(), href: el.href, classes: el.className }))")

// 3. Extract forms
evaluate_script("Array.from(document.querySelectorAll('form, input, textarea, select')).map(el => ({ tag: el.tagName, type: el.type, name: el.name, classes: el.className }))")
```

### **Phase 7: Responsive Testing**

```javascript
// Mobile (375x667)
resize_page(375, 667)
take_screenshot(format="png")
evaluate_script("({ viewport: { width: window.innerWidth, height: window.innerHeight }, breakpoint: 'mobile' })")

// Tablet (768x1024)
resize_page(768, 1024)
take_screenshot(format="png")
evaluate_script("({ viewport: { width: window.innerWidth, height: window.innerHeight }, breakpoint: 'tablet' })")

// Desktop (1920x1080)
resize_page(1920, 1080)
take_screenshot(format="png")
evaluate_script("({ viewport: { width: window.innerWidth, height: window.innerHeight }, breakpoint: 'desktop' })")
```

### **Phase 8: Performance Analysis**

```javascript
// 1. Start performance trace
performance_start_trace()

// 2. Navigate (or reload)
navigate_page("https://thecodingtrain.com/")

// 3. Stop trace
performance_stop_trace()

// 4. Analyze
performance_analyze_insight()

// 5. Get network requests
list_network_requests()
```

## 🚀 Implementation Steps

After extracting all data:

1. **Save all outputs** to `C:\Users\phili\Documents\Coding\Replica\baseline\extracted-data.json`
2. **Build HTML** using extracted structure in `C:\Users\phili\Documents\Coding\Replica\index.html`
3. **Build CSS** using extracted styles in `C:\Users\phili\Documents\Coding\Replica\css\`
4. **Download assets** to `C:\Users\phili\Documents\Coding\Replica\assets\`
5. **Test locally** with `npx serve . -p 8000`
6. **Compare screenshots** original vs replica
7. **Refine** until 95%+ visual match

## 📊 Success Metrics

- ✅ All HTML structure extracted
- ✅ All CSS styles captured
- ✅ All assets downloaded
- ✅ Responsive at all breakpoints
- ✅ 95%+ visual accuracy
- ✅ Performance optimized

## 🔧 Tools Needed

- **Chrome DevTools MCP**: Running ✓
- **Text editor**: For refining extracted code
- **Local server**: npx serve (installed)
- **Git**: For version control ✓

Start with Phase 1 in your MCP client!
