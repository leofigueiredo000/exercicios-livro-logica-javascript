function verificarVelocidade() {
  var inVelocidadePermitida = document.getElementById("inVelocidadePermitida");
  var inVelocidadeCondutor = document.getElementById("inVelocidadeCondutor");
  var outResposta = document.getElementById("outResposta");

  var velocidadePermitida = Number(inVelocidadePermitida.value);
  var velocidadeCondutor = Number(inVelocidadeCondutor.value);

  //condição se a velocidade for menor
  if (velocidadeCondutor <= velocidadePermitida) {
    outResposta.textContent = "Sem Multa";
  }

  if (
    velocidadeCondutor > velocidadePermitida &&
    velocidadeCondutor <= velocidadePermitida * 1.2
  ) {
    outResposta.textContent = "Multa Leve";
  } 

  if( velocidadeCondutor > velocidadePermitida * 1.2){

    outResposta.textContent = "Multa Grave";
  }
}

var btVerificarVelocidade = document.getElementById("btVerificarVelocidade");
btVerificarVelocidade.addEventListener("click", verificarVelocidade);
