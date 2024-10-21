function mostrarEstrelas() {
  //referencia aos elementos
  var inNumero = document.getElementById("inNumero");
  var outEstrelas = document.getElementById("outEstrelas");

  //variavel de entrada
  var numero = Number(inNumero.value);

  //inicializacão da variavel estrelas
  var estrelas = "";

  for (var i = 1; i <= numero; i++) {

estrelas += "*".repeat(i) + "\n"

  }
  outEstrelas.textContent = estrelas;
}
var btCriarEstrelas = document.getElementById("btCriarEstrelas");
btCriarEstrelas.addEventListener("click", mostrarEstrelas);
