// ==UserScript==
// @name        Copiar e-mails do Moodle
// @namespace   dfg00
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @match       https://ead.trf4.jus.br/moodle/user/index.php
// @grant       none
// @version     1.0
// @author      -
// @description 01/07/2021 18:13:13
// ==/UserScript==


$('#enrolusersbutton-1').parent().parent().append('<div><input id="copiar-emails" type="submit" value="Copiar e-mails da tela" class="btn btn-success my-1" style="margin-left: 10px;"></div>');

$("#copiar-emails").click(function() {
  var listaemails = "";
  $('.cell.c3').each(function(i){
    if(!$(this).parent().hasClass("emptyrow")) {
      listaemails += $(this).text() + "; ";  
    }    
  });
  copiarClipboard(listaemails);
});

function copiarClipboard(texto) {
    const el = document.createElement('textarea');
    el.value = texto;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

