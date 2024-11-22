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
  if (criancas.length == 0) {
    alert("Não há crianças na lista");
    return;
  }

  var lista = "";

  for (i = 0; i < criancas.length; i++) {
    lista += criancas[i].nomeCrianca + " - " + criancas[i].idadeCrianca + "\n";
  }
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar = btListar.addEventListener("click", listarCrianca);

function resumirLista() {
  if (criancas.length == 0) {
    alert("Não há crianças na lista.");
    return;
  }

  var copia = criancas.slice();

  
    copia.sort(function (a, b) { return a.idadeCrianca - b.idadeCrianca });

  var resumo = "";

  var aux = copia[0].idadeCrianca;
  var nomes = [];

  for ( var i = 0; i < copia.length; i++) {
    if (copia[i].idadeCrianca == aux) {
      nomes.push(copia[i].nomeCrianca);
    } else {
resumo += aux + "ano(s):" + nomes.length + " criança(s) - ";
resumo += (nomes.length / copia.length *100).toFixed(2) + "%\n";
resumo += "(" + nomes.join(", ") + ")\n\n";
aux = copia[i].idadeCrianca; // obtém a nova idade na ordem
nomes = []; // limpa o vetor dos nomes
nomes.push(copia[i].nomeCrianca); // adiciona o primeiro da nova idade
    }
  }
  // adiciona os nomes da última idade ordenada
resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
resumo += "(" + nomes.join(", ") + ")\n\n";


document.getElementById("outLista").textContent = resumo;

    
  
}
var btResumir = document.getElementById("btResumir");
btResumir.addEventListener("click", resumirLista);
