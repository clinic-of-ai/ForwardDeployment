from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the local server
        page.goto("http://localhost:8000")

        # --- Theme Toggle Verification ---

        # Initial state is dark mode, switch to light mode
        light_theme_btn = page.locator('.light-theme-btn')
        html_element = page.locator('html')

        light_theme_btn.click()
        expect(html_element).not_to_have_class('dark')
        page.screenshot(path="jules-scratch/verification/light-theme.png")

        # Switch back to dark mode
        dark_theme_btn = page.locator('.dark-theme-btn')
        dark_theme_btn.click()
        expect(html_element).to_have_class('dark')
        page.screenshot(path="jules-scratch/verification/dark-theme.png")

        # --- Mobile Menu Verification ---

        # Resize to a mobile viewport
        page.set_viewport_size({"width": 375, "height": 667})

        menu_toggle = page.locator('.menu-toggle')
        menu_list = page.locator('.menu-list')

        # Menu should be closed initially
        expect(menu_list).not_to_be_visible()

        # Open the menu
        menu_toggle.click()
        expect(menu_list).to_be_visible()
        page.screenshot(path="jules-scratch/verification/mobile-menu-open.png")

        browser.close()

if __name__ == "__main__":
    run_verification()