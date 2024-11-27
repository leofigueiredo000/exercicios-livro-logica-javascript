var noticias = [];

function adicionarNoticias() {
  //referencia
  var inNoticia = document.getElementById("inNoticia");

  //declaração de variaveis
  var noticia = inNoticia.value;

  //condicional caso não digite nenhum valor
  if (noticia == "") {
    alert("Digite uma notícia.");
    inNoticia.focus();
    return;
  }

  noticias.push(noticia);

  listarNoticia();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticias);

function listarNoticia() {
  //verificar se o array está vazio
  if (noticias.length == 0) {
    alert("Não há noticias.");
    return;
  }

  var lista = "--------------------------------------------------\n";

  //for para ler a lista
  for (var i = 0; i < noticias.length; i++) {
    lista += i + 1 + "º) " + noticias[i] + "\n";
  }

  document.getElementById("outLista").textContent = lista;
}

function listarUltimasNoticias() {
  //se não tiver noticias
  if (noticias.length == 0) {
    alert("Sem noticias disponiveis");
    return;
  }

  var copia = noticias.slice();
  //colocar o vetor em forma descrescente
  copia.reverse();

  var lista = "--------------------------------------------------\n";

  var quantidade = prompt("Quantas notícias deseja visualizar?");
  Number(quantidade);

  //mostrar as ultimas noticias
  for (var i = 0; i < quantidade; i++) {

lista+= quantidade - i + "º) " + copia[i] + "\n";


  }
  document.getElementById("outLista").textContent = lista;
}
var btNoticias = document.getElementById("btNoticias");
btNoticias.addEventListener("click", listarUltimasNoticias);
