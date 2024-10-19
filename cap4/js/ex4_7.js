function preencherEstrelas() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var num = Number(inNumero.value);
  var estrela = "";
  if (num == 0 || isNaN(num)) {
    alert("Digite um Numero valido");
    inNumero.focus();
    return;
  }

  for (var i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      estrela = estrela + "*";
    } else {
      estrela = estrela + "-";
    }
  }
  outResposta.textContent = estrela;
}
var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEstrelas);
