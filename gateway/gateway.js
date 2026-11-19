/* La Vida Verde: language switch on the independent country gateway only. */
(function () {
  'use strict';
  var root = document.querySelector('.lvvg-gateway');
  if (!root) return;
  var strings = {
    en: {
      heading: 'Bespoke artificial greenery',
      description: 'Trees, plants, and bespoke green installations for exceptional hospitality and commercial interiors.',
      selector: 'Choose your country',
      uae: 'United Arab Emirates / الإمارات',
      egypt: 'Egypt / مصر'
    },
    ar: {
      heading: 'مساحات خضراء اصطناعية مصممة خصيصًا',
      description: 'أشجار ونباتات وتنسيقات خضراء مصممة خصيصًا للمساحات الفندقية والتجارية المتميزة.',
      selector: 'اختر بلدك',
      uae: 'الإمارات العربية المتحدة / UAE',
      egypt: 'مصر / Egypt'
    }
  };
  var buttons = root.querySelectorAll('[data-lvvg-language]');
  function setLanguage(lang) {
    if (!strings[lang]) return;
    root.setAttribute('data-language', lang);
    root.setAttribute('lang', lang);
    root.querySelectorAll('[data-lvvg-copy]').forEach(function (node) {
      var key = node.getAttribute('data-lvvg-copy');
      if (strings[lang][key]) node.textContent = strings[lang][key];
    });
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lvvg-language') === lang));
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener('click', function () { setLanguage(button.getAttribute('data-lvvg-language')); });
  });
  setLanguage('en');
})();
