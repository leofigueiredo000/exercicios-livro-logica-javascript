function revenderVeiculo(){

//referencia
var inVeiculo = document.getElementById("inVeiculo");
var inPreco = document.getElementById("inPreco");
var outVeiculo = document.getElementById("outVeiculo");
var outEntrada = document.getElementById("outEntrada")
var outParcelamento = document.getElementById("outParcelamento")

//entrada de dados 
var veiculo = inVeiculo.value;
var preco = Number(inPreco.value);

//calcula valor da entrada das parcelas
var entrada = preco *0.5;
var parcelamento = (preco * 0.5) / 12;

//saida de dados 
outVeiculo.textContent = 'Promoção: ' + veiculo;
outEntrada.textContent = 'Entrada de R$: ' + entrada.toFixed(2);
outParcelamento.textContent = '+ 12x de R$: ' + parcelamento.toFixed(2);


}
//referencia botão
var btVerPromocao = document.getElementById("btVerPromocao");
//configuração botão
btVerPromocao.addEventListener("click",revenderVeiculo);