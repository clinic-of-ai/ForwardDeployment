# 🔧 MCP Configuration Guide

## 🎯 Overview
Complete setup guide for configuring MCP servers in Cursor for The Coding Train website replication project.

## 📋 MCP Servers to Install

### **1. Chrome DevTools MCP** ✅ INSTALLED
**Status:** Already running
**Purpose:** Browser automation, screenshots, HTML/CSS extraction
**Documentation:** https://github.com/ChromeDevTools/chrome-devtools-mcp

### **2. GitHub MCP Server**
**Purpose:** Repository management, code search, issue tracking
**Installation:**
```bash
npm install -g @modelcontextprotocol/server-github
```

### **3. File System MCP Server**
**Purpose:** Local file operations and management
**Installation:**
```bash
npm install -g @modelcontextprotocol/server-filesystem
```

## 🔑 API Keys Required

### **GitHub Personal Access Token**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select scopes: `repo`, `read:user`, `read:org`
4. Copy the token (starts with `ghp_`)

## ⚙️ Cursor Configuration

### **Option 1: Using Cursor UI**
1. Open Cursor
2. Go to **Settings** → **MCP**
3. Click **Add MCP Server**
4. Paste the configuration from `cursor-mcp-config.json`

### **Option 2: Manual Configuration**
1. Open Cursor settings file:
   - Windows: `%APPDATA%\Cursor\User\globalStorage\settings.json`
2. Add the MCP servers configuration
3. Restart Cursor

## 📝 Complete Configuration

Use the configuration from `cursor-mcp-config.json`:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": [
        "chrome-devtools-mcp@latest",
        "--isolated=true",
        "--headless=false",
        "--logFile=C:\\Users\\phili\\Documents\\Coding\\Replica\\baseline\\chrome-devtools.log"
      ]
    },
    "github": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-github"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_github_token_here"
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "C:\\Users\\phili\\Documents\\Coding\\Replica"
      ]
    }
  }
}
```

## 🧪 Test MCP Servers

After configuration, test each server:

### **Test Chrome DevTools MCP:**
```
navigate_page url="https://thecodingtrain.com/"
take_screenshot fullPage=true
```

### **Test GitHub MCP:**
```
github_search_repositories query="thecodingtrain"
```

### **Test Filesystem MCP:**
```
list_directory path="C:\\Users\\phili\\Documents\\Coding\\Replica"
read_file path="C:\\Users\\phili\\Documents\\Coding\\Replica\\README.md"
```

## 🚀 Ready to Use

Once configured, you can use all MCP tools for:

### **Chrome DevTools:**
- `navigate_page` - Navigate to URLs
- `take_screenshot` - Capture screenshots
- `evaluate_script` - Run JavaScript and extract data
- `resize_page` - Test responsive designs
- `performance_start_trace` - Analyze performance
- `list_network_requests` - Monitor network

### **GitHub:**
- `create_repository` - Create repos
- `search_repositories` - Find similar projects
- `create_issue` - Track tasks
- `search_code` - Find code patterns

### **Filesystem:**
- `read_file` - Read local files
- `write_file` - Create/update files
- `list_directory` - Browse directories
- `search_files` - Find files by pattern

## 📖 References

- **Chrome DevTools MCP**: https://github.com/ChromeDevTools/chrome-devtools-mcp
- **MCP SDK**: https://github.com/modelcontextprotocol/servers
- **Cursor MCP Docs**: Check Cursor Settings → MCP → Documentation

## ⚠️ Troubleshooting

### **MCP Server Won't Start:**
- Check that npx is in your PATH
- Verify API keys are correct
- Restart Cursor completely

### **Chrome DevTools Connection Issues:**
- Ensure Chrome is installed
- Check firewall settings
- Try `--headless=true` if browser won't open

### **GitHub Token Issues:**
- Verify token has correct scopes
- Check token hasn't expired
- Regenerate if needed

## ✅ Next Steps

After configuration:
1. Test each MCP server
2. Run extraction commands from `EXTRACTION_PLAN.md`
3. Build the replica using extracted data
4. Compare and refine

Your MCP infrastructure is ready! 🎯
