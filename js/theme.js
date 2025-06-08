document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('toggle-theme');
    const icon = document.getElementById('theme-icon');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const saved = localStorage.getItem('theme');
    let light = saved === 'light' || (!saved && prefersLight);

    function setTheme(lightMode) {
        document.body.classList.toggle('light-mode', lightMode);
        icon.textContent = lightMode ? '☀️' : '🌙';
        localStorage.setItem('theme', lightMode ? 'light' : 'dark');
    }

    setTheme(light);

    btn.addEventListener('click', () => {
        light = !document.body.classList.contains('light-mode');
        setTheme(light);
    });
});