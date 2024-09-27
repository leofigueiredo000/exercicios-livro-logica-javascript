function calcularValor(){

//referencias 
var inValor = document.getElementById("inValor");
var inTempoUso = document.getElementById("inTempoUso");
var outValorPagar = document.getElementById("outValorPagar");

//variaveis de entrada
var valor = Number(inValor.value);
var tempoDeUso = Number(inTempoUso.value)



//calculo do valor a ser pago pelo tempo de uso
var fracao = Math.ceil(tempoDeUso / 15);
var valorAPagar = fracao * valor;

//saida de dados
outValorPagar.textContent = 'Valor a Pagar R$: ' + valorAPagar.toFixed(2);
}
//referencia ao butão 
var btCalcularValor = document.getElementById("btCalcularValor");

//evendo do botão
btCalcularValor.addEventListener("click",calcularValor);