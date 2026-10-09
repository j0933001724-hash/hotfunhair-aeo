/* 哈髮科技假髮 — progressive enhancement only. Content & JSON-LD are static HTML (crawler/AI friendly). */
(function () {
  document.documentElement.classList.add('js');

  // Mobile nav toggle
  var btn = document.querySelector('.nav-toggle'), nav = document.getElementById('site-nav');
  if (btn && nav) btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Auto table of contents from H2 questions (pages with 4+ sections)
  var slot = document.querySelector('[data-toc]');
  var hs = document.querySelectorAll('.content section.qa > h2');
  if (slot && hs.length >= 4) {
    var ol = document.createElement('ol');
    hs.forEach(function (h, i) {
      if (!h.id) h.id = 'q' + (i + 1);
      var li = document.createElement('li'), a = document.createElement('a');
      a.href = '#' + h.id; a.textContent = h.textContent; li.appendChild(a); ol.appendChild(li);
    });
    var box = document.createElement('nav');
    box.className = 'toc'; box.setAttribute('aria-label', '本頁目錄');
    box.innerHTML = '<strong>本頁回答的問題</strong>'; box.appendChild(ol); slot.appendChild(box);
  }

  // CTA click measurement hook (GA4/GTM dataLayer if present; no-op otherwise)
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-cta]');
    if (!a) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_click', cta_type: a.getAttribute('data-cta'), page: location.pathname });
  });
})();
