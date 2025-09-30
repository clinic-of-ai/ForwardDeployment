@echo off
echo Starting Chrome DevTools MCP Analysis...
echo.
echo This will open Chrome and analyze thecodingtrain.com
echo.
echo Press Ctrl+C to stop the analysis
echo.

npx chrome-devtools-mcp@latest --headless=false --isolated=true

pause
