//variavel global para armazenar os dados de entrada
var concurso = [];

function adicionarCandidato() {
  var inCandidato = document.getElementById("inCandidato");
  var inAcertos = document.getElementById("inAcertos");

  //atribuição de variaveis
  var candidato = inCandidato.value;
  var acertos = Number(inAcertos.value);

  if (candidato == "" || isNaN(acertos)) {
    alert("Digite informações validas.");
    inCandidato.focus();
    return;
  }

  concurso.push({ candidato: candidato, acertos: acertos });

  listarCandidato();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);

function listarCandidato() {
  //condicional caso não tenha nenhum elemento no vetor
  if (concurso.length == 0) {
    alert("Lista vazia");
    inCandidato.focus();
    return;
  }

  var lista = "";

  //loop para ler o conteudo do array
  for (var i = 0; i < concurso.length; i++) {
    lista +=
      concurso[i].candidato + " - " + concurso[i].acertos + " acertos \n";
  }
  document.getElementById("outLista").textContent = lista;
}
btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidato);

function aprovarCandidato() {
  var numero = prompt("Numero de acertos para aprovação?");
  var notaCorte = Number(numero);

  var lista = "";
  var aprovados = [];

  for (var i = 0; i < concurso.length; i++) {
    if (concurso[i].acertos >= notaCorte) {
      aprovados.push(concurso[i]);
    }
  }

  aprovados.sort((a, b) => b.acertos - a.acertos);
  for (var i = 0; i < concurso.length; i++) {
    lista +=
      aprovados[i].candidato + " - " + aprovados[i].acertos + " acertos \n";
  }

  document.getElementById("outLista").textContent = lista;
}

var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", aprovarCandidato);
