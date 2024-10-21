function mostrarNumerosPerfeitos() {
  //referencias aos elementos
  var inNumero = document.getElementById("inNumero");
  var outDivisores = document.getElementById("outDivisores");
  var outValidacao = document.getElementById("outValidacao");

  //variaveis
  var numero = Number(inNumero.value);

  //inicializando a variavel soma e resposta
  var soma = 0;
  var resposta = "";
  if (numero == 0 || isNaN(numero)) {
    alert("Digite um Número Válido:");
    inNumero.focus();
    return;
  }
  for (var i = 1; i < numero; i++) {
    if (numero % i == 0) {
      soma += i;

      resposta = resposta + i;

      if (i < numero / 2) {
        resposta += ",";
      }
    }
  }
  outDivisores.textContent =
    "Divisores do " + numero + ": " + resposta + " (Soma: " + numero + ")";

  if (soma == numero) {
    outValidacao.textContent = numero + " é um Número Perfeito";
  } else {
    outValidacao.textContent = numero + " Não é um Número Perfeito";
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", mostrarNumerosPerfeitos);
