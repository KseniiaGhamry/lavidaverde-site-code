/* Standalone gateway. English HTML is the single editable source in Tilda. */
(function(){
 'use strict';
 const page=document.getElementById('lvvg3');
 if(!page)return;
 const fields=Array.from(page.querySelectorAll('[data-ar]'));
 // Capture the actual content of visible HTML on load — not hard-coded English copy.
 const english=fields.map(el=>el.textContent);
 const buttons=Array.from(page.querySelectorAll('[data-language]'));
 function switchLanguage(lang){
   if(lang!=='en'&&lang!=='ar')return;
   page.dataset.lang=lang;
   page.lang=lang;
   fields.forEach((el,i)=>{el.textContent=lang==='en'?english[i]:el.getAttribute('data-ar')});
   buttons.forEach(btn=>{btn.setAttribute('aria-pressed',String(btn.dataset.language===lang))});
 }
 buttons.forEach(btn=>btn.addEventListener('click',()=>switchLanguage(btn.dataset.language)));
 switchLanguage('en');
})();
