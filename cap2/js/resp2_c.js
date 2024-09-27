function mostrarPromocoes(){
//referencias 
var inProduto = document.getElementById("inProduto");
var inPreco = document.getElementById("inPreco");
var outPromocao = document.getElementById("outPromocao");
var outPrecoPromocao = document.getElementById("outPrecoPromocao");

//valores de entrada 
var produto = inProduto.value;
var preco = Number(inPreco.value); 
var promocao = (preco * 2 ) + preco * 0.5;
var produtoComDesconto = preco * 0.5;
//calcular descontos 


//saida
outPromocao.textContent = produto + " - Promocão: Leve 3 por R$: " + promocao.toFixed(2);
outPrecoPromocao.textContent = "O 3º produto custa apenas: " + produtoComDesconto.toFixed(2);

}
//referencia ao botão 
var btVerPromocao = document.getElementById("btVerPromocao");

//evento do botão 
btVerPromocao.addEventListener("click",mostrarPromocoes);

