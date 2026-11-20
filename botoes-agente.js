/* Botões flutuantes do Agente FCosta. Uso: <script src="botoes-agente.js" defer></script> antes de </body> */
(function(){
  if(/agente-fcosta\.html/.test(location.pathname))return;
  var css=document.createElement("style");
  css.textContent="#fc-ag{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:99999;font-family:Arial,Helvetica,sans-serif}"+
  "#fc-ag .fc-fab{display:flex;align-items:center;gap:8px;border:0;border-radius:999px;padding:12px 18px;background:#3B9BD6;color:#fff;font:700 15px Arial,sans-serif;box-shadow:0 6px 18px rgba(30,58,95,.35);cursor:pointer}"+
  "#fc-ag .fc-menu{display:none;flex-direction:column;gap:8px;margin-bottom:10px}"+
  "#fc-ag.open .fc-menu{display:flex}"+
  "#fc-ag .fc-menu a{display:block;text-align:center;text-decoration:none;padding:12px 18px;border-radius:12px;background:#1E3A5F;color:#fff;font:700 14px Arial,sans-serif;box-shadow:0 6px 18px rgba(30,58,95,.3)}"+
  "#fc-ag .fc-menu a small{display:block;font-weight:400;font-size:11px;opacity:.85}";
  document.head.appendChild(css);
  var d=document.createElement("div");d.id="fc-ag";
  d.innerHTML='<div class="fc-menu"><a href="agente-fcosta.html">Agente FCosta<small>Anúncios, captação e conteúdo</small></a><a href="agente-fcosta.html#ia">Agente I.A.<small>Pergunte o que quiser</small></a></div><button class="fc-fab" type="button" aria-expanded="false">✨ Agente I.A.</button>';
  document.body.appendChild(d);
  var b=d.querySelector(".fc-fab");
  b.onclick=function(){var o=d.classList.toggle("open");b.setAttribute("aria-expanded",o)};
})();
