/* La Vida Verde — Country Gateway Version 2.0; scoped to a single T123 instance. */
(function () {
  'use strict';
  var root = document.getElementById('lvvg2-gateway');
  if (!root) return;
  var t = {
    en: {
      title: 'Bespoke artificial greenery',
      subtitle: 'Trees, plants, and bespoke green installations for exceptional hospitality and commercial interiors.',
      prompt: 'Choose your country',
      uae: 'UAE & GCC / الإمارات والخليج',
      egypt: 'Egypt / مصر'
    },
    ar: {
      title: 'تنسيقات نباتية اصطناعية حسب الطلب',
      subtitle: 'أشجار ونباتات وتنسيقات خضراء مصممة خصيصًا للمساحات الفندقية والتجارية المتميزة.',
      prompt: 'اختر بلدك',
      uae: 'الإمارات ودول الخليج / UAE & GCC',
      egypt: 'مصر / Egypt'
    }
  };
  var toggles = root.querySelectorAll('[data-lvvg2-language]');
  function setLanguage(lang) {
    if (!t[lang]) return;
    root.setAttribute('data-language', lang);
    root.setAttribute('lang', lang);
    root.querySelectorAll('[data-lvvg2-copy]').forEach(function (element) {
      var key = element.getAttribute('data-lvvg2-copy');
      if (t[lang][key]) element.textContent = t[lang][key];
    });
    toggles.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lvvg2-language') === lang));
    });
  }
  toggles.forEach(function (button) {
    button.addEventListener('click', function () {
      setLanguage(button.getAttribute('data-lvvg2-language'));
    });
  });
  setLanguage('en');
})();