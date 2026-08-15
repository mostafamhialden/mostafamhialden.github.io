// ملف: script.js — سلوك الصفحة الرئيسية.

document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('nav');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

    /* ---------------------------------------------------------------
       التمرير السلس
       المحدّد يشمل كل روابط المرساة في الصفحة وليس روابط <nav> فقط،
       حتى يستفيد منه زر "تواصل معي" في قسم البداية ورابط تخطّي المحتوى.
       والإزاحة تُقرأ من ارتفاع الشريط الفعلي بدل رقم ثابت (كان 80px)،
       لأن الشريط يصبح أطول بكثير على الشاشات الصغيرة.
    --------------------------------------------------------------- */
    function navOffset() {
        return nav ? nav.offsetHeight + 12 : 0;
    }

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - navOffset(),
                behavior: scrollBehavior
            });

            // نقل التبئير إلى القسم الهدف حتى يتبع مستخدمو لوحة المفاتيح
            // وقارئات الشاشة التنقّل، لا التمرير البصري وحده.
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
        });
    });

    /* ---------------------------------------------------------------
       زر العودة إلى الأعلى
       الزر موجود في الترميز (وليس مُنشأً من JS) حتى يترجمه محرّك الترجمة.
    --------------------------------------------------------------- */
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: scrollBehavior });
        });
    }

    /* ---------------------------------------------------------------
       إبراز الرابط النشط
       IntersectionObserver بدل مستمع scroll كان يقرأ offsetTop لكل قسم
       في كل حدث تمرير — وهو ما يُجبر المتصفح على إعادة حساب التخطيط
       عشرات المرات في الثانية.
    --------------------------------------------------------------- */
    const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    const sections = document.querySelectorAll('main section[id]');

    function setActive(id) {
        navLinks.forEach(link => {
            const isActive = link.getAttribute('href') === `#${id}`;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'true');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    if ('IntersectionObserver' in window && sections.length) {
        const visible = new Map();

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
            });

            let best = null;
            let bestRatio = 0;
            visible.forEach((ratio, id) => {
                if (ratio > bestRatio) {
                    bestRatio = ratio;
                    best = id;
                }
            });

            if (best) setActive(best);
        }, {
            // الهامش العلوي يعوّض الشريط اللاصق حتى لا يُحتسب قسم مختبئ خلفه
            rootMargin: '-25% 0px -55% 0px',
            threshold: [0, 0.25, 0.5, 0.75, 1]
        });

        sections.forEach(section => observer.observe(section));
    }

    /* ---------------------------------------------------------------
       إظهار/إخفاء زر العودة للأعلى — مستمع تمرير واحد مخمَّد بـ rAF.
    --------------------------------------------------------------- */
    if (scrollToTopBtn) {
        let ticking = false;

        window.addEventListener('scroll', function () {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(function () {
                scrollToTopBtn.classList.toggle('show', window.scrollY > 300);
                ticking = false;
            });
        }, { passive: true });
    }
});
