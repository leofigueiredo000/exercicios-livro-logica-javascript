function verificarLadosTriangulo() {
  var inLadoA = document.getElementById("inLadoA");
  var inLadoB = document.getElementById("inLadoB");
  var inLadoC = document.getElementById("inLadoC");
  var outLadosTriangulo = document.getElementById("outLadosTriangulo");
  var outTipoTriangulo = document.getElementById("outTipoTriangulo");

  var ladoA = inLadoA.value;
  var ladoB = inLadoB.value;
  var ladoC = inLadoC.value;

  if (ladoA + ladoB < ladoC || ladoB + ladoC < ladoA || ladoC + ladoA < ladoB) {
    outLadosTriangulo.textContent = "Lados podem Formar um triângulo";
  }

  if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
    outTipoTriangulo.textContent = "Isóceles.";
  }
  if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
    outTipoTriangulo.textContent = "Escaleno.";
  }

  if (
    (ladoA == ladoB) != ladoC ||
    (ladoA == ladoC) != ladoA ||
    (ladoB == ladoC) != ladoA
  ) {
    outTipoTriangulo.textContent = "Equilátero";
  }
  var btVerificarLados = document.getElementById("btVerificarLados");
  btVerificarLados.addEventListener("click", verificarLadosTriangulo);
}
