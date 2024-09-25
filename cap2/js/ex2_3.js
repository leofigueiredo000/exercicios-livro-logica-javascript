function revenderVeiculo(){

//referencia
var inVeiculo = document.getElementById("inVeiculo");
var outVeiculo = document.getElementById("outVeiculo");

//entrada de dados 
var veiculo = inVeiculo.value;

//saida de dados 
outVeiculo.textContent = 'carango ' + veiculo;

}
var btVerPromocao = document.getElementById("btVerPromocao");

btVerPromocao.addEventListener("click",revenderVeiculo);