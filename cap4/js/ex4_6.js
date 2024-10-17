function calcularPrimos() {
  //referencia
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var numero = Number(inNumero.value);
  contadorDivisores = 0;

  if (numero == 0 || isNaN(numero)) {
    alert("Número Inválido...");
    inNumero.focus();
    return;
  }

  for (var i = 1; i <= numero; i++) {
    if (numero % i == 0) {
      contadorDivisores ++;
    }
  }
  if (contadorDivisores == 2) {
    outResposta.textContent = "O número " + numero + "é primo";
  } else {
    outResposta.textContent = "O número " + numero + " não è primo";
  }
}
var btValidacao = document.getElementById("btValidacao");
btValidacao.addEventListener("click", calcularPrimos);
