function PreverChinchilas() {
  //referencias
  var inNumeroChinchilas = document.getElementById("inNumeroChinchilas");
  var inNumeroAnos = document.getElementById("inNumeroAnos");
  var outPrevisao = document.getElementById("outPrevisao");

  //criação de variaveis
  var numeroChinchilas = Number(inNumeroChinchilas.value);
  var numeroAnos = Number(inNumeroAnos.value);
  var previsaoChinchilas = 0;
  var triplice = numeroChinchilas;

  if (
    numeroChinchilas < 2 ||
    numeroAnos == 0 ||
    isNaN(numeroChinchilas) ||
    isNaN(numeroAnos)
  ) {
    alert("Digite os dados corretamente.");
    inNumeroChinchilas.focus();
    return;
  }

  for (var i = 1; i <= numeroAnos; i++) {
    if (i == 1) {
      previsaoChinchilas = i + "º ano: " + numeroChinchilas + " Chinchilas \n";
      outPrevisao.textContent = previsaoChinchilas;
    }

    if (i >= 2) {
      triplice = triplice * 3;
      previsaoChinchilas =
        previsaoChinchilas + i + "º ano: " + triplice + " Chinchilas \n";
      outPrevisao.textContent = previsaoChinchilas;
    }
  }
}

var btPrevisaoChinchilas = document.getElementById("btPrevisaoChinchilas");
btPrevisaoChinchilas.addEventListener("click", PreverChinchilas);
