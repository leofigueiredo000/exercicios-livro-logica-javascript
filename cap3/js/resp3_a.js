function identificarNumero(){

var inNumero = document.getElementById("inNumero");
var outResposta = document.getElementById("outResposta");

var numero = inNumero.value;

if (numero %2 ===0){

outResposta.textContent = "O Número " + numero + " é par.";

}else{
outResposta.textContent = "O Número " + numero + " é impar."

}

}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click",identificarNumero);