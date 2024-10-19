function repetirFruta() {
  //referencias
  var inFruta = document.getElementById("inFruta");
  var inNumero = document.getElementById("inNumero");
  var outRepeteFruta = document.getElementById("outRepeteFruta");

  var fruta = inFruta.value;
  var num = Number(inNumero.value);
  var repeteFruta = "";
  for (var i = 1; i < num; i++) {
    repeteFruta += fruta + "*";
    outRepeteFruta.textContent = repeteFruta;
  }
  repeteFruta += fruta;
  outRepeteFruta.textContent = repeteFruta;
}

//referencia e ativação do evento do botão repetir fruta
var btRepetirFruta = document.getElementById("btRepetirFruta");
btRepetirFruta.addEventListener("click", repetirFruta);
