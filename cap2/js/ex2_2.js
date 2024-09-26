function converterHora(){

    // referencias
var inTitulo = document.getElementById("inTitulo");
var inDuracao = document.getElementById("inDuracao");
var outTitulo = document.getElementById("outTitulo");
var outDuracao = document.getElementById("outDuracao");

//entrada de dados
var titulo = inTitulo.value;
var duracao = inDuracao.value;
var horas  = duracao / 60;
var minutos = duracao % 60;

outTitulo.textContent = titulo;
outDuracao.textContent = horas.toFixed(0) + " hora(s) e " + minutos + 
" minuto(s)";

//configuração do botão 

}
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click",converterHora);



