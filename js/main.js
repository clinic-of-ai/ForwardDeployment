document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggler
    const lightThemeBtn = document.querySelector('.light-theme-btn');
    const darkThemeBtn = document.querySelector('.dark-theme-btn');
    const html = document.documentElement;

    lightThemeBtn.addEventListener('click', () => {
        html.classList.remove('dark');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
    });

    darkThemeBtn.addEventListener('click', () => {
        html.classList.add('dark');
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
    });

    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('open');
    });
});