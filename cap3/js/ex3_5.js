function calcularRaiz() {
  //referencias
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  //dados de entrada
  var numero = Number(inNumero.value);
  

  if (raiz == 0 || isNaN(raiz)) {
    alert("Digite um número Válido...");
    inNumero.focus();
    return;
  }
  var raiz = Math.sqrt(numero);
  if (raiz == Math.floor(raiz)) {
    outResposta.textContent = "Raiz: " + raiz;
  } else {
    outResposta.textContent = "Não há raiz para o numero " + numero;
  }
}
var btExibir = document.getElementById("btExibir");
addEventListener.btExibirRaiz("click", calcularRaiz);
