//VETOR GLOBAL
var criancas = [];

function adcionarCrianca() {
  //referencias
  var inNomeCrianca = document.getElementById("inNomeCrianca");
  var inIdadeCrianca = document.getElementById("inIdadeCrianca");

  //variaveis para armazenar nome e idade da criança
  var nomeCrianca = inNomeCrianca.value;
  var idadeCrianca = Number(inIdadeCrianca.value);

  if (nomeCrianca == "" || inIdadeCrianca.value == "" || isNaN(idadeCrianca)) {
    alert("Preencha os campos com um valor válido.");
    inNomeCrianca.focus();
    return;
  }
  //adiciona nome e idade no vetor criancas
  criancas.push({ nomeCrianca: nomeCrianca, idadeCrianca: idadeCrianca });

  inNomeCrianca.value = "";
  inIdadeCrianca.value = "";
  inNomeCrianca.focus();

listarCrianca();
}
//referencia ao botão adicionar
var btAdicionar = document.getElementById("btAdicionar");
//Adicionar a função adicionar criança no botão adicionar
btAdicionar.addEventListener("click", adcionarCrianca);

function listarCrianca() {
  if (criancas.length == 0 ){

    alert("Não há crianças na lista");
    return;
  }
  
  
    var lista = "";

   
  for (i = 0; i < criancas.length; i++) {

  lista += criancas[i].nomeCrianca + " - "+criancas[i].idadeCrianca + "\n";
}
 document.getElementById("outLista").textContent = lista;
  
}
var btListar = document.getElementById("btListar");
btListar = btListar.addEventListener("click",listarCrianca);
