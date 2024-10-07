function mostrarTabuada() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);

  for (var i = 1; i <= 10; i++) {
    var resposta = resposta + numero + " x " + i + " = " + numero * i + "\n";

    outResposta.textContent = resposta;
  }
}
var btMostrarTabuada = document.getElementById("btMostrarTabuada");
btMostrarTabuada.addEventListener("click", mostrarTabuada);
