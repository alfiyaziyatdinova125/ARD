(function (window, document) {
    var toggle  = document.getElementById('toggle');
    var menu    = document.getElementById('tuckedMenu');
    var wrapper = document.querySelector('.custom-menu-wrapper');

    // Проверка на существование элементов
    if (toggle && menu && wrapper) {
        toggle.addEventListener('click', function () {
            menu.classList.toggle('custom-menu-tucked');
            toggle.classList.toggle('x');
            wrapper.classList.toggle('menu-open');
        });
    }

    // Совет дня
    const tips = [
        "Проверяйте сайт не только в DevTools, но и на реальных устройствах — эмуляция не всегда показывает реальные проблемы.",
        "Используйте max-width: 100% для всех изображений.",
        "Начинайте вёрстку с мобильной версии (mobile-first).",
        "Тестируйте на медленном интернете — сайт должен быть лёгким.",
        "Медиазапросы пишите от меньшего к большему, а не наоборот."
    ];

    const tipEl = document.querySelector('.tip-of-day');
    if (tipEl) {
        tipEl.textContent = tips[Math.floor(Math.random() * tips.length)];
    }

    // Подсветка активного пункта меню
document.addEventListener('DOMContentLoaded', () => {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.pure-menu-link');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === current) {
            link.classList.add('active');
        }
    });
});
})(this, this.document);

