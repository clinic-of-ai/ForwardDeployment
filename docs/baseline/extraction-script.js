// ============================================
// THE CODING TRAIN EXTRACTION SCRIPT
// ============================================
// Instructions:
// 1. Open https://thecodingtrain.com/ in Chrome
// 2. Press F12 to open DevTools Console
// 3. Copy and paste this entire script
// 4. Press Enter
// 5. Data will be copied to clipboard automatically
// 6. Paste into a text file and share with assistant
// ============================================

console.log("🚂 Starting The Coding Train extraction...\n");

const extractionData = {
  metadata: {
    url: window.location.href,
    title: document.title,
    timestamp: new Date().toISOString()
  },
  
  // Extract full HTML (first 10000 chars for preview)
  html: {
    preview: document.documentElement.outerHTML.substring(0, 10000),
    totalLength: document.documentElement.outerHTML.length,
    fullHTML: document.documentElement.outerHTML // Full HTML for complete extraction
  },
  
  // Extract all stylesheets
  stylesheets: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => ({
    href: link.href,
    media: link.media || 'all'
  })),
  
  // Extract inline styles
  inlineStyles: Array.from(document.querySelectorAll('style')).map((style, idx) => ({
    index: idx,
    content: style.textContent.substring(0, 500) // First 500 chars of each
  })),
  
  // Extract CSS custom properties (variables)
  cssVariables: (() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const vars = {};
    for (let i = 0; i < rootStyles.length; i++) {
      const prop = rootStyles[i];
      if (prop.startsWith('--')) {
        vars[prop] = rootStyles.getPropertyValue(prop).trim();
      }
    }
    return vars;
  })(),
  
  // Extract colors and typography
  design: {
    colors: {
      background: getComputedStyle(document.body).backgroundColor,
      textColor: getComputedStyle(document.body).color,
      primaryColor: getComputedStyle(document.documentElement).getPropertyValue('--primary-color') || 'not found',
      secondaryColor: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') || 'not found'
    },
    typography: {
      fontFamily: getComputedStyle(document.body).fontFamily,
      fontSize: getComputedStyle(document.body).fontSize,
      fontWeight: getComputedStyle(document.body).fontWeight,
      lineHeight: getComputedStyle(document.body).lineHeight,
      letterSpacing: getComputedStyle(document.body).letterSpacing
    }
  },
  
  // Extract all images
  images: Array.from(document.querySelectorAll('img')).map(img => ({
    src: img.src,
    alt: img.alt || '',
    width: img.naturalWidth || img.width,
    height: img.naturalHeight || img.height,
    className: img.className,
    loading: img.loading || 'eager'
  })),
  
  // Extract background images from elements
  backgroundImages: Array.from(document.querySelectorAll('*'))
    .map(el => {
      const bg = getComputedStyle(el).backgroundImage;
      return bg !== 'none' ? {
        element: el.tagName,
        className: el.className,
        backgroundImage: bg
      } : null;
    })
    .filter(Boolean)
    .slice(0, 20), // Limit to first 20
  
  // Extract page structure
  structure: {
    nav: Array.from(document.querySelectorAll('nav')).map(nav => ({
      id: nav.id,
      className: nav.className,
      innerHTML: nav.innerHTML.substring(0, 500)
    })),
    header: Array.from(document.querySelectorAll('header')).map(h => ({
      id: h.id,
      className: h.className,
      innerHTML: h.innerHTML.substring(0, 500)
    })),
    main: Array.from(document.querySelectorAll('main')).map(m => ({
      id: m.id,
      className: m.className
    })),
    sections: Array.from(document.querySelectorAll('section')).map(s => ({
      id: s.id,
      className: s.className,
      heading: s.querySelector('h1, h2, h3')?.textContent || ''
    })),
    footer: Array.from(document.querySelectorAll('footer')).map(f => ({
      id: f.id,
      className: f.className,
      innerHTML: f.innerHTML.substring(0, 500)
    }))
  },
  
  // Extract all links
  links: Array.from(document.querySelectorAll('a')).slice(0, 50).map(a => ({
    href: a.href,
    text: a.textContent.trim().substring(0, 50),
    className: a.className
  })),
  
  // Extract viewport and responsive info
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio
  },
  
  // Extract scripts
  scripts: Array.from(document.querySelectorAll('script[src]')).map(s => ({
    src: s.src,
    async: s.async,
    defer: s.defer
  }))
};

// Output to console
console.log("=== EXTRACTION COMPLETE ===");
console.log(JSON.stringify(extractionData, null, 2));

// Copy to clipboard (without full HTML to avoid size issues)
const clipboardData = {
  ...extractionData,
  html: {
    preview: extractionData.html.preview,
    totalLength: extractionData.html.totalLength,
    note: "Full HTML not copied to clipboard due to size. Run: copy(document.documentElement.outerHTML) separately"
  }
};

copy(JSON.stringify(clipboardData, null, 2));

console.log("\n✅ EXTRACTION DATA COPIED TO CLIPBOARD!");
console.log("📋 Paste this into a text file and share with your assistant");
console.log("\n🔍 To copy full HTML separately, run:");
console.log("copy(document.documentElement.outerHTML)");
