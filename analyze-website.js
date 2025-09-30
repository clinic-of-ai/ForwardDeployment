// Website Analysis Script for The Coding Train
// This script will be used with Chrome DevTools MCP to extract accurate data

const analysisPlan = {
    // Step 1: Navigate and take screenshots
    navigation: {
        url: "https://thecodingtrain.com/",
        actions: [
            "navigate_page",
            "take_screenshot(fullPage=true, name='original_full')",
            "take_screenshot(fullPage=false, name='original_viewport')"
        ]
    },

    // Step 2: Extract HTML structure
    htmlExtraction: {
        actions: [
            "evaluate_script('document.documentElement.outerHTML')",
            "evaluate_script('document.head.innerHTML')",
            "evaluate_script('document.body.innerHTML')"
        ]
    },

    // Step 3: Extract CSS information
    cssExtraction: {
        actions: [
            "evaluate_script('Array.from(document.styleSheets).map(sheet => ({ href: sheet.href, rules: Array.from(sheet.cssRules || []).map(rule => rule.cssText) }))')",
            "evaluate_script('getComputedStyle(document.documentElement).getPropertyValue(\'--primary-color\')')",
            "evaluate_script('getComputedStyle(document.documentElement).getPropertyValue(\'--secondary-color\')')",
            "evaluate_script('getComputedStyle(document.documentElement).getPropertyValue(\'--accent-color\')')"
        ]
    },

    // Step 4: Extract font information
    fontExtraction: {
        actions: [
            "evaluate_script('Array.from(document.fonts).map(font => ({ family: font.family, style: font.style, weight: font.weight }))')",
            "evaluate_script('getComputedStyle(document.body).fontFamily')",
            "evaluate_script('getComputedStyle(document.body).fontSize')"
        ]
    },

    // Step 5: Analyze layout and spacing
    layoutAnalysis: {
        actions: [
            "evaluate_script('Array.from(document.querySelectorAll(\'*\')).map(el => ({ tag: el.tagName, classes: el.className, id: el.id, styles: getComputedStyle(el) }))')",
            "evaluate_script('document.querySelector(\'.hero\')?.getBoundingClientRect()')",
            "evaluate_script('document.querySelector(\'.tracks\')?.getBoundingClientRect()')"
        ]
    },

    // Step 6: Extract images and assets
    assetExtraction: {
        actions: [
            "evaluate_script('Array.from(document.querySelectorAll(\'img\')).map(img => ({ src: img.src, alt: img.alt, width: img.width, height: img.height }))')",
            "evaluate_script('Array.from(document.querySelectorAll(\'link[rel=\"stylesheet\"]\')).map(link => link.href)')",
            "evaluate_script('Array.from(document.querySelectorAll(\'script[src]\')).map(script => script.src)')"
        ]
    },

    // Step 7: Test responsive behavior
    responsiveTest: {
        viewports: [
            { width: 375, height: 667, name: "mobile" },
            { width: 768, height: 1024, name: "tablet" },
            { width: 1920, height: 1080, name: "desktop" }
        ],
        actions: [
            "resize_page",
            "take_screenshot",
            "evaluate_script('window.innerWidth + \"x\" + window.innerHeight')"
        ]
    },

    // Step 8: Performance analysis
    performanceAnalysis: {
        actions: [
            "performance_start_trace()",
            "navigate_page('https://thecodingtrain.com/')",
            "performance_stop_trace()",
            "performance_analyze_insight()"
        ]
    }
};

// Export for use with MCP tools
module.exports = analysisPlan;
