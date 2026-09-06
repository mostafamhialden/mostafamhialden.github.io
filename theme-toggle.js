// ملف: theme-toggle.js
//
// تبديل الوضع الفاتح/الداكن.
//
// الاختيار يُطبَّق قبل أول رسم عبر سكربت صغير في <head>، فلا يومض
// الموقع. هذا الملف مسؤول عن الزر نفسه فقط: الأيقونة، والوصف
// لقارئات الشاشة، وحفظ التفضيل.

(function () {
  var root = document.documentElement;

  // أيقونات مضمَّنة لا تعتمد على شبكة خارجية: زر التحكم يجب ألا يختفي
  // لو تعذّر تحميل Font Awesome من الـ CDN.
  var SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.2A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.2z"/></svg>';
  var btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;

  function read() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }
  function write(v) {
    try { localStorage.setItem('theme', v); } catch (e) { /* التفضيل لن يُحفظ فقط */ }
  }

  /** الوضع المعروض حالياً — من السمة الصريحة أو من اللون المحسوب */
  function current() {
    var explicit = root.getAttribute('data-theme');
    if (explicit === 'light' || explicit === 'dark') return explicit;
    // لا سمة صريحة: نستنتج من إضاءة خلفية الصفحة الفعلية
    var bg = getComputedStyle(document.body).backgroundColor;
    var m = bg.match(/\d+/g);
    if (!m) return 'dark';
    var l = (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255;
    return l > 0.5 ? 'light' : 'dark';
  }

  /** نص الوصف من قاموس الترجمة إن كان محمَّلاً */
  function label(key) {
    try {
      var lang = root.lang === 'ar' ? 'ar' : 'en';
      if (typeof translations !== 'undefined' && translations[lang] && translations[lang][key]) {
        return translations[lang][key];
      }
    } catch (e) { /* القاموس لم يُحمَّل بعد */ }
    return key === 'ui.themeToLight' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function paint() {
    var mode = current();
    var next = mode === 'dark' ? 'light' : 'dark';
    var key = next === 'light' ? 'ui.themeToLight' : 'ui.themeToDark';

    // الأيقونة تصف ما ستحصل عليه عند الضغط، لا الحالة الراهنة
    btn.innerHTML = next === 'light' ? SUN : MOON;
    btn.setAttribute('aria-label', label(key));
    btn.setAttribute('title', label(key));
    // نُبقي data-key-attr متسقاً ليتولّى محرّك الترجمة تحديثه عند تبديل اللغة
    btn.setAttribute('data-key-attr', 'aria-label:' + key + ', title:' + key);
  }

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    write(next);
    paint();
  });

  // تبديل اللغة يغيّر نص الوصف أيضاً
  document.addEventListener('languagechanged', paint);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', paint);
  } else {
    paint();
  }
})();
