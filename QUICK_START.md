# 🚀 Quick Start: Chrome DevTools-Only Cloning

## ✅ Current Status

- **Git repo**: Initialized at `C:\Users\phili\Documents\Coding\Replica`
- **Chrome DevTools MCP**: Running (process active)
- **Baseline screenshot**: Captured
- **Open Lovable**: Skipped (will retry later if needed)

## 🎯 Next Steps

### **Step 1: Run Extraction Commands**

Open your MCP client (Cursor/Claude Code) and run these commands one by one:

**Start here:**
```
navigate_page url="https://thecodingtrain.com/"
```

**Extract HTML:**
```
evaluate_script expression="document.documentElement.outerHTML"
```

**Save the output** to: `C:\Users\phili\Documents\Coding\Replica\baseline\full-html.html`

**Extract CSS links:**
```
evaluate_script expression="Array.from(document.querySelectorAll('link[rel=\"stylesheet\"]')).map(link => link.href)"
```

**Extract images:**
```
evaluate_script expression="Array.from(document.querySelectorAll('img')).map(img => ({ src: img.src, alt: img.alt, width: img.width, height: img.height }))"
```

### **Step 2: Review Extracted Data**

Send me:
- The extracted HTML (first 100 lines)
- The CSS URLs found
- The image URLs found

I'll then build the improved replica.

### **Step 3: Build Enhanced Replica**

I'll use the extracted data to update:
- `index.html` - with exact structure
- `css/main.css` - with exact colors/fonts
- `assets/` - download referenced images

### **Step 4: Test & Compare**

- Serve at `http://localhost:8000`
- Take screenshots
- Compare with baseline
- Refine until 95%+ match

## 📁 File Locations

- **Baseline data**: `C:\Users\phili\Documents\Coding\Replica\baseline\`
- **Replica files**: `C:\Users\phili\Documents\Coding\Replica\` (index.html, css/, js/)
- **Git repo**: Same location (already initialized)

## 🔄 Rollback Points

- **Current commit**: Manual replica (HTML/CSS/JS)
- **Tag**: `git tag rollback/manual-baseline`

## 📞 What to Do Next

**Run the Phase 1 extraction commands in your MCP client, then share the results with me.**

I'll use that data to build an accurate replica!
