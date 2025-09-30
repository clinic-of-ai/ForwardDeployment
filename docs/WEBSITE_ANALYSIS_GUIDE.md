# 🔍 Advanced Website Analysis Guide

## 🎯 **Objective**
Use Chrome DevTools MCP to perform deep analysis of https://thecodingtrain.com/ and create a pixel-perfect replica.

## 🛠️ **Required Setup**

### **1. MCP Client Configuration**
Add this to your MCP client configuration:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "chrome-devtools-mcp@latest",
        "--headless=false",
        "--isolated=true"
      ]
    }
  }
}
```

### **2. Firecrawl MCP (Optional)**
```json
{
  "mcpServers": {
    "firecrawl": {
      "command": "npx",
      "args": ["firecrawl-mcp-server"],
      "env": {
        "FIRECRAWL_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## 📋 **Step-by-Step Analysis Commands**

### **Phase 1: Initial Navigation & Screenshots**

```json
{
  "name": "navigate_page",
  "arguments": {
    "url": "https://thecodingtrain.com/"
  }
}
```

```json
{
  "name": "take_screenshot",
  "arguments": {
    "fullPage": true,
    "format": "png"
  }
}
```

### **Phase 2: HTML Structure Extraction**

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "document.documentElement.outerHTML"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "document.head.innerHTML"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "document.body.innerHTML"
  }
}
```

### **Phase 3: CSS Analysis**

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "Array.from(document.styleSheets).map(sheet => ({ href: sheet.href, rules: Array.from(sheet.cssRules || []).map(rule => rule.cssText) }))"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "getComputedStyle(document.documentElement).getPropertyValue('--primary-color')"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "getComputedStyle(document.documentElement).getPropertyValue('--accent-color')"
  }
}
```

### **Phase 4: Typography Analysis**

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "Array.from(document.fonts).map(font => ({ family: font.family, style: font.style, weight: font.weight }))"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "getComputedStyle(document.body).fontFamily"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "getComputedStyle(document.body).fontSize"
  }
}
```

### **Phase 5: Layout Analysis**

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "Array.from(document.querySelectorAll('*')).map(el => ({ tag: el.tagName, classes: el.className, id: el.id, computedStyles: getComputedStyle(el) }))"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "document.querySelector('.hero')?.getBoundingClientRect()"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "document.querySelector('.tracks')?.getBoundingClientRect()"
  }
}
```

### **Phase 6: Asset Extraction**

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "Array.from(document.querySelectorAll('img')).map(img => ({ src: img.src, alt: img.alt, width: img.width, height: img.height }))"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "Array.from(document.querySelectorAll('link[rel=\"stylesheet\"]')).map(link => link.href)"
  }
}
```

```json
{
  "name": "evaluate_script",
  "arguments": {
    "expression": "Array.from(document.querySelectorAll('script[src]')).map(script => script.src)"
  }
}
```

### **Phase 7: Responsive Testing**

```json
{
  "name": "resize_page",
  "arguments": {
    "width": 375,
    "height": 667
  }
}
```

```json
{
  "name": "take_screenshot",
  "arguments": {
    "format": "png"
  }
}
```

```json
{
  "name": "resize_page",
  "arguments": {
    "width": 768,
    "height": 1024
  }
}
```

```json
{
  "name": "take_screenshot",
  "arguments": {
    "format": "png"
  }
}
```

```json
{
  "name": "resize_page",
  "arguments": {
    "width": 1920,
    "height": 1080
  }
}
```

```json
{
  "name": "take_screenshot",
  "arguments": {
    "format": "png"
  }
}
```

### **Phase 8: Performance Analysis**

```json
{
  "name": "performance_start_trace",
  "arguments": {}
}
```

```json
{
  "name": "navigate_page",
  "arguments": {
    "url": "https://thecodingtrain.com/"
  }
}
```

```json
{
  "name": "performance_stop_trace",
  "arguments": {}
}
```

```json
{
  "name": "performance_analyze_insight",
  "arguments": {}
}
```

## 🎯 **Expected Results**

After running these commands, you should have:

1. **Complete HTML structure** of the website
2. **All CSS styles** and custom properties
3. **Typography information** (fonts, sizes, weights)
4. **Layout measurements** and positioning
5. **Asset URLs** (images, stylesheets, scripts)
6. **Responsive behavior** at different viewport sizes
7. **Performance metrics** and insights
8. **Screenshots** for visual reference

## 🚀 **Next Steps**

1. **Run the MCP commands** using your configured MCP client
2. **Save the extracted data** to JSON files
3. **Analyze the results** to understand the exact structure
4. **Recreate the website** with pixel-perfect accuracy
5. **Test and validate** against the original

## 📊 **Success Metrics**

- **Visual Accuracy**: 99%+ match with original
- **Performance**: Match or exceed original performance
- **Responsiveness**: Perfect on all device sizes
- **Accessibility**: Maintain or improve accessibility scores
- **Code Quality**: Clean, semantic, and maintainable code

## 🔧 **Troubleshooting**

### **Common Issues:**
1. **MCP not connecting**: Check configuration and restart client
2. **Scripts failing**: Some sites block evaluation, try alternative methods
3. **Screenshots not working**: Ensure browser is visible (not headless)
4. **Performance issues**: Run analysis in smaller chunks

### **Alternative Methods:**
1. **Manual inspection**: Use browser DevTools manually
2. **View source**: Right-click → View Page Source
3. **Network tab**: Monitor loaded resources
4. **Elements tab**: Inspect specific elements

This comprehensive analysis will give you everything needed to create a pixel-perfect replica of The Coding Train website!
