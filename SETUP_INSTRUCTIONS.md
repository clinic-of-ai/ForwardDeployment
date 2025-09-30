# 🚀 Complete MCP Setup Instructions

## Step 1: Add MCP Configuration to Cursor

### **Method 1: Via Cursor UI (Recommended)**

1. **Open Cursor Settings:**
   - Press `Ctrl + ,` or click the gear icon ⚙️

2. **Navigate to MCP:**
   - Search for "MCP" in settings
   - Click "MCP" in the sidebar

3. **Add Each Server:**
   
   **Chrome DevTools MCP:**
   - Click "Add MCP Server"
   - Name: `chrome-devtools`
   - Command: `npx`
   - Args: `["chrome-devtools-mcp@latest", "--isolated=true", "--headless=false"]`
   - Click Save

   **GitHub MCP:**
   - Click "Add MCP Server"
   - Name: `github`
   - Command: `npx`
   - Args: `["-y", "@modelcontextprotocol/server-github"]`
   - Environment Variables:
     - Key: `GITHUB_PERSONAL_ACCESS_TOKEN`
     - Value: Your GitHub token (get from GitHub Settings)
   - Click Save

   **Filesystem MCP:**
   - Click "Add MCP Server"
   - Name: `filesystem`
   - Command: `npx`
   - Args: `["-y", "@modelcontextprotocol/server-filesystem", "C:\\Users\\phili\\Documents\\Coding\\Replica"]`
   - Click Save

4. **Restart Cursor**

### **Method 2: JSON Configuration (Advanced)**

Copy the entire contents of `cursor-mcp-config.json` and paste into Cursor's MCP configuration area.

## Step 2: Test MCP Connection

Open Cursor Chat (`Ctrl + L`) and type:

```
Use Chrome DevTools MCP to navigate to https://thecodingtrain.com/ and tell me the page title
```

**Expected Result:** Chrome browser opens, navigates to the site, and Cursor responds with the page title.

## Step 3: Run Full Extraction

Once MCP is working, paste this into Cursor Chat:

```
Using Chrome DevTools MCP, extract The Coding Train website data:

1. Navigate to https://thecodingtrain.com/
2. Take a full-page screenshot
3. Extract document.documentElement.outerHTML
4. Extract all stylesheet links: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href)
5. Extract all images: Array.from(document.querySelectorAll('img')).map(img => ({src: img.src, alt: img.alt}))
6. Extract computed styles: getComputedStyle(document.documentElement).cssText
7. Save everything to C:\Users\phili\Documents\Coding\Replica\baseline\extracted-data.txt

Share the complete extracted HTML and CSS data with me.
```

## Step 4: I'll Build the Replica

After you share the extracted data, I will:
1. Update `index.html` with exact structure
2. Update `css/main.css` with exact colors/fonts
3. Download and optimize all assets
4. Test responsiveness
5. Refine until 95%+ match

## 🔑 Getting GitHub Token (Optional)

1. Go to GitHub.com → Settings
2. Developer settings → Personal access tokens → Tokens (classic)
3. Generate new token
4. Select scopes: `repo`, `read:user`
5. Copy token (starts with `ghp_`)
6. Add to Cursor MCP config

## ⚡ Quick Start

**Minimum viable setup (just Chrome DevTools):**

1. Open Cursor Settings
2. Go to MCP
3. Add server:
   - Name: `chrome-devtools`
   - Command: `npx`
   - Args: `chrome-devtools-mcp@latest`
4. Save & Restart
5. Open Chat (`Ctrl + L`)
6. Type: "Use Chrome DevTools to navigate to thecodingtrain.com"

That's it! The browser should open and you're ready to extract.

**Ready to configure? Let me know when MCP is set up in Cursor!** 🎯

