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

/* ================== КАРУСЕЛЬ КАРТОЧЕК НА ГЛАВНОЙ ================== */
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.cards-slider');
    if (!slider) return;

    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    if (!prevBtn || !nextBtn) return;

    // Ширина одной карточки + gap между ними (300px + 1.2em ≈ 320px)
    // Можно посчитать динамически, но 320px — универсально для карточек 300px
    function getCardWidth() {
        const card = slider.querySelector('.preview-card');
        if (!card) return 320;
        const style = window.getComputedStyle(slider);
        const gap = parseFloat(style.gap) || 19;
        return card.offsetWidth + gap;
    }

    // Прокрутка вперёд/назад на одну карточку
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });

    // Обновление состояния кнопок (disabled на краях)
    function updateButtons() {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        prevBtn.disabled = slider.scrollLeft <= 5;
        nextBtn.disabled = slider.scrollLeft >= maxScroll - 5;
    }

    slider.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons(); // проверка при загрузке
});

