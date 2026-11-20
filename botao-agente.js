/* Botão flutuante "Agente I.A." para o repositório publicador_fcosta.
   Abre o Painel ADM do site, na aba do agente (pede o login do painel).
   Uso: <script src="botao-agente.js" defer></script> antes de </body> */
(function(){
  var URL_PAINEL="https://fcostacorretor.com/painel_adm.html#agente";
  var a=document.createElement("a");
  a.href=URL_PAINEL;a.target="_blank";a.rel="noopener";a.textContent="✨ Agente I.A.";
  a.style.cssText="position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:99999;background:#3B9BD6;color:#fff;text-decoration:none;font:700 15px Arial,Helvetica,sans-serif;padding:12px 18px;border-radius:999px;box-shadow:0 6px 18px rgba(30,58,95,.35)";
  document.body.appendChild(a);
})();
