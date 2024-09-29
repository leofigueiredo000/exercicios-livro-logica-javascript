function mostrarPromocao(){
// referencia
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPromocao = document.getElementById("outPromocao");

//entrada de dados
var medicamento = inMedicamento.value;
var preco = Number(inPreco.value);
//calculo da promoção
var promocao = preco.toFixed(0) * 2;
//saida de dados
outMedicamento.textContent = "Promoção de " + medicamento;
outPromocao.textContent = "Leve 2 por apenas R$: " + promocao;

}

//referencia ao botão 
var btMostrarPromocao = document.getElementById("btMostrarPromocao");
//evento do botão para chamar a função
btMostrarPromocao.addEventListener("click",mostrarPromocao);