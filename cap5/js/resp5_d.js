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


  document.getElementById("outLista").textContent = aux;
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click",adicionarNoticias);