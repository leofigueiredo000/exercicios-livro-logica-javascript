//variavel global 
var times = [];

function adicionarClubes(){

//referencias
var inClube = document.getElementById("inClube");


//atribuição de variaveis 
var clube  = inClube.value;

//Mensagem caso a caixa texto esteja vazia
if(clube == ""){
alert("Digite o nome de um clube válido");
return;

}
times.push(clube);

listarClubes();

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarClubes);

function listarClubes(){

//mensagem se não tiver nenhum clube na lista
if (times.length == 0){

    alert("Nenhum clube na lista");
    return;
}
for (var i = 0 ; i < times.length; i++){
    var lista = (i+1) + ". "+ times[i] + " \n";
}
document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar = addEventListener("click",listarClubes);