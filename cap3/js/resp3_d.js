function verificarLados() {
  //referencias
  var inLadoA = document.getElementById("inLadoA");
  var inladoB = document.getElementById("inLadoB");
  var inladoC = document.getElementById("inLadoC");
  var outValidacaoTriangulo = document.getElementById("outValidacaoTriangulo");
  var outTipoTriangulo = document.getElementById("outTipoTriangulo");

  //valores de entrada
  var ladoA = Number(inLadoA.value);
  var ladoB = Number(inladoB.value);
  var ladoC = Number(inladoC.value);

  //condição de existencia de um triangulo(a+b > c)

  if (
    (ladoA + ladoB > ladoC) & (ladoB + ladoC > ladoA) &&
    ladoA + ladoC > ladoB
  ) {
    outValidacaoTriangulo.textContent = "Lados podem formar um triângulo.";

    if (ladoA == ladoB && ladoB == ladoC) {
      outTipoTriangulo.textContent = "Triangulo Equilátero.";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outTipoTriangulo.textContent = "Triangulo isóceles";
    } else {
      outTipoTriangulo.textContent = "Triângulo escaleno";
    }
  } else {
    outValidacaoTriangulo.textContent = "Lados não podem formar um triângulo.";
    outTipoTriangulo.textContent = ""; // Limpa o tipo de triângulo
  }
}
var btVerificarLados = document.getElementById("btVerificarLados");
btVerificarLados.addEventListener("click", verificarLados);
