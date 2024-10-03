function calcularTempo() {
  //referencia aos elementos
  var inValor = document.getElementById("inValor");
  var outTempo = document.getElementById("outTempo");
  var outTroco = document.getElementById("outTroco");

  // variaveis de entrada
  var valor = Number(inValor.value);
  var troco = 0;

  //condiçãose o valor for menor que 0
  if (valor < 0) {
    alert("Digite um número válido");
    inValor.focus();
  }

  if (valor >= 0 && valor < 1.00) {
    alert("Valor Insuficiente")
    inValor.focus();
  }

  if(valor >=1 && valor < 1.75){
    troco = valor - 1;

outTempo.textContent = "Tempo 30 minutos"
outTroco.textContent = "Troco: " + troco;

  }

  if (valor >= 1.75 && valor < 3) {
    troco = valor - 1.75;
    outTempo.textContent = "Tempo: 60 minutos";
    outTroco.textContent = "Troco: " + troco;
  }

  if (valor >= 3) {
    troco = valor - 3;
    outTempo.textContent = "Tempo: 120 minutos";
    outTroco.textContent = "Troco: " + troco;
  }
}
var btConfirmarDeposito = document.getElementById("btConfirmarDeposito");
btConfirmarDeposito.addEventListener("click", calcularTempo);
