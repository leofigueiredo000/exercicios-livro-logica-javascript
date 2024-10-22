function descobrirNumero() {
  var inNumero = document.getElementById("inNumero");
  var outErros = document.getElementById("outErros");
  var outChances = document.getElementById("outchances");
  var outDica = document.getElementById("outDica");

  var numero = Number(inNumero.value);
  var aleatorio = Math.random();

  outErros.textContent = aleatorio;
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click",descobrirNumero);
