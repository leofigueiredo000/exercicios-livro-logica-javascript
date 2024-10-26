var carros = [];
function adicionarCarros() {
  //referencia aos elementos
  var inModelo = document.getElementById("inModelo");
  var inPreco = document.getElementById("inPreco");
  var outLista = document.getElementById("outLista");

  var modelo = inModelo.value;
  var preco = Number(inPreco.value);

  if (modelo == "" || preco == 0 || isNaN(preco))
    alert("preencha os dados corretamente...");
  inModelo.focus();
  return;

  carros.push({ modelo: modelo, preco: preco });

  inModelo.value = "";
  inPreco.value = "";
  inModelo.focus();

  listarCarros();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCarros);

function listarCarros() {
  var lista = "";

  if (carros.length == 0) {
    alert("sem carros na lista");
    inModelo.focus();
  }
  for (var i = 0; i <= carros.length; i++) {
    lista += carros[i].modelo + "- R$: " + carros[i].preco.toFixed(2) + "\n";

    document.getElementById("outLista").textContent = lista;
  }
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCarros);
