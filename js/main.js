/* =========================================
   MAIN JAVASCRIPT
   Interactive features and behaviors
   ========================================= */

(function() {
    'use strict';

    // ===== THEME TOGGLE =====
    function initThemeToggle() {
        const lightThemeBtn = document.querySelector('.light-theme-btn');
        const darkThemeBtn = document.querySelector('.dark-theme-btn');
        const html = document.documentElement;

        // Check for saved theme preference or default to dark
        const currentTheme = localStorage.getItem('theme') || 'dark';
        html.classList.toggle('dark', currentTheme === 'dark');

        function setTheme(theme) {
            html.classList.toggle('dark', theme === 'dark');
            localStorage.setItem('theme', theme);
        }

        if (lightThemeBtn) {
            lightThemeBtn.addEventListener('click', () => setTheme('dark'));
        }

        if (darkThemeBtn) {
            darkThemeBtn.addEventListener('click', () => setTheme('light'));
        }
    }

    // ===== MOBILE MENU TOGGLE =====
    function initMobileMenu() {
        const menuToggle = document.querySelector('.menu-toggle');
        const menuList = document.querySelector('.menu-list');

        if (menuToggle && menuList) {
            menuToggle.addEventListener('click', () => {
                menuList.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!menuToggle.contains(e.target) && !menuList.contains(e.target)) {
                    menuList.classList.remove('active');
                }
            });
        }
    }

    // ===== CLOCK UPDATE =====
    function initClock() {
        const clockElement = document.querySelector('.topbar-clock');
        
        if (!clockElement) return;

        const clockEmojis = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛'];
        
        function updateClock() {
            const now = new Date();
            const hours = now.getHours() % 12;
            clockElement.textContent = clockEmojis[hours];
        }

        updateClock();
        setInterval(updateClock, 60000); // Update every minute
    }

    // ===== DATE UPDATE =====
    function initDate() {
        const dateLongElement = document.querySelector('.date-long');
        const dateShortElement = document.querySelector('.date-short');
        
        if (!dateLongElement && !dateShortElement) return;

        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const dayName = days[now.getDay()];
        const monthName = months[now.getMonth()];
        const date = now.getDate();
        const year = now.getFullYear();
        
        // Add ordinal suffix
        function getOrdinalSuffix(n) {
            const s = ['th', 'st', 'nd', 'rd'];
            const v = n % 100;
            return s[(v - 20) % 10] || s[v] || s[0];
        }
        
        const ordinalSuffix = getOrdinalSuffix(date);
        
        if (dateLongElement) {
            dateLongElement.textContent = `${dayName} / ${monthName} ${date}${ordinalSuffix}, ${year}`;
        }
        
        if (dateShortElement) {
            dateShortElement.textContent = `${now.getMonth() + 1}/${date}/${year}`;
        }
    }

    // ===== SMOOTH SCROLLING =====
    function initSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===== CARD HOVER EFFECTS =====
    function initCardHoverEffects() {
        const showcaseItems = document.querySelectorAll('.showcase-item');
        
        showcaseItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }

    // ===== LAZY LOADING IMAGES =====
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // ===== SCROLL ANIMATIONS =====
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.video-card, .challenge-card, .showcase-item');
        
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            scrollObserver.observe(el);
        });
    }

    // ===== CLOUD ANIMATIONS =====
    function initCloudAnimations() {
        const clouds = document.querySelectorAll('.cloud');
        
        clouds.forEach((cloud, index) => {
            const duration = 15 + Math.random() * 10; // 15-25 seconds
            const delay = index * 2; // Stagger the animations
            
            cloud.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        });
    }

    // ===== RESPONSIVE VIEWPORT HEIGHT =====
    function initResponsiveViewportHeight() {
        // Fix for mobile browsers where viewport height changes
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        setVH();
        window.addEventListener('resize', setVH);
    }

    // ===== KEYBOARD NAVIGATION =====
    function initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Press '/' to focus search (if implemented)
            if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
                const searchInput = document.querySelector('input[type="search"]');
                if (searchInput) {
                    e.preventDefault();
                    searchInput.focus();
                }
            }
            
            // Press 'Escape' to close mobile menu
            if (e.key === 'Escape') {
                const menuList = document.querySelector('.menu-list');
                if (menuList) {
                    menuList.classList.remove('active');
                }
            }
        });
    }

    // ===== ACCESSIBILITY ENHANCEMENTS =====
    function initAccessibility() {
        // Add skip to main content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 0;
            background: var(--cyan);
            color: white;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
        `;
        skipLink.addEventListener('focus', function() {
            this.style.top = '0';
        });
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        document.body.insertBefore(skipLink, document.body.firstChild);
        
        // Add main content ID if not present
        const mainContent = document.querySelector('.main-content');
        if (mainContent && !mainContent.id) {
            mainContent.id = 'main-content';
        }
    }

    // ===== PERFORMANCE MONITORING =====
    function logPerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log('Performance Metrics:');
                        console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
                        console.log(`Page Load Time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
                        console.log(`Total Time: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
                    }
                }, 0);
            });
        }
    }

    // ===== INITIALIZE ALL =====
    function init() {
        console.log('🚂 The Coding Train is departing...');
        
        initThemeToggle();
        initMobileMenu();
        initClock();
        initDate();
        initSmoothScrolling();
        initCardHoverEffects();
        initLazyLoading();
        initScrollAnimations();
        initCloudAnimations();
        initResponsiveViewportHeight();
        initKeyboardNavigation();
        initAccessibility();
        logPerformance();
        
        console.log('✅ All aboard! The Coding Train is ready!');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();