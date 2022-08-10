// ==UserScript==
// @name        Novo doc externo - SEI!
// @namespace   NADH/EAD/JFSC
// @include     https://sei.trf4.jus.br/sei/controlador.php?*
// @include     https://sei.trf4.jus.br/controlador.php?*
// @grant       none
// @version     1.0
// @author      -
// @description 10/08/2022 12:47:00
// ==/UserScript==



function preencheDataDeHoje() {
  hoje = new Date;

  dia = hoje.getDate();
  dia = (dia.toString().length==1)?'0'+dia:dia;
  mes = hoje.getMonth()+1;
  mes = (mes.toString().length==1)?'0'+mes:mes;

  strHoje = dia + '/' + mes + '/' + hoje.getFullYear() 

  var campoData = document.getElementById("txtDataElaboracao");
  campoData.value = strHoje;
}

function selecionaFormatoDigital() {
  var formatoDigital = document.getElementById("optNato");
  formatoDigital.checked = true;
}

function selecionaNivelPublico() {
  var nivelPublico = document.getElementById("optPublico");
  nivelPublico.checked = true;
}

function verificaTab(e) {        
  if (e.keyCode == 9) {
     return true; 
  }
}

function pulaParaNome(e) {
  if(verificaTab(e)) {
    document.getElementById('txtNomeArvore').focus();
  }
}

function pulaParaUpload(e) {
  if(verificaTab(e)) {
    document.getElementById('filArquivo').click();
  }
}

function setSelectValue (id, val) {
    document.getElementById(id).value = val;
}

if(document.getElementById('divInfraBarraLocalizacao').innerHTML=="Registrar Documento Externo") {

  document.getElementById('txtDataElaboracao').addEventListener('keyup', pulaParaNome);

  document.getElementById('txtNomeArvore').addEventListener('keydown', pulaParaUpload);

  preencheDataDeHoje();
  selecionaFormatoDigital();
  selecionaNivelPublico();

  document.getElementById('selSerie').focus();
}
