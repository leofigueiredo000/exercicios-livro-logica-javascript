//variavel global
var times = [];

function adicionarClubes() {
  //referencias
  var inClube = document.getElementById("inClube");

  //atribuição de variaveis
  var clube = inClube.value;

  //Mensagem caso a caixa texto esteja vazia
  if (clube == "") {
    alert("Digite o nome de um clube válido");
    return;
  }
  times.push(clube);

  listarClubes();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarClubes);

function listarClubes() {
  //mensagem se não tiver nenhum clube na lista
  if (times.length == 0) {
    alert("Nenhum time na lista");
    return;
  }
  var lista = "";
  for (var i = 0; i < times.length; i++) {
    lista += 1 + i + ". " + times[i] + "\n";
  }
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarClubes);

function montarTabela() {
  //TIMES INSUFICIENTES SE NÃO TIVEREM TIMES E SE FOR UM NUMERO IMPAR
  if (times.length == 0 || times.length % 2 == 1) {
    alert("Times insuficientes");
    return;
  }
  //copia do array times
  var copia = times.slice();

  
  var aux = "";
  for (var i = copia.length / 2; i > 0; i--) {

    aux += copia[0] + " x " + copia[copia.length - 1] + "\n";

    copia.pop();
    copia.shift();

  }
  document.getElementById("outLista").textContent = aux;
}
btMontar = document.getElementById("btMontar");
btMontar.addEventListener("click", montarTabela);
