function lerConsumo()
{
//Referência dos elementos da página 
var inBuffetQuilo = document.getElementById("inBuffetQuilo");
var inConsumoCliente = document.getElementById("inConsumoCliente")
var outValorPagar = document.getElementById("outValorPagar");

// dados de entrada 
var valorBuffet =  Number(inBuffetQuilo.value);
var ConsumoCliente = Number(inConsumoCliente.value);

//calculo do valor a pagar
var valorPagar = (valorBuffet / 1000) * ConsumoCliente;


//saida
outValorPagar.textContent = "Valor a pagar R$: " + valorPagar.toFixed(2);

}
var btCalcularPreco = document.getElementById("btCalcularPreco");
btCalcularPreco.addEventListener("click",lerConsumo);