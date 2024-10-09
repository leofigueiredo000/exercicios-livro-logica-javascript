function decrescerNumeros() {
  var inNumero = document.getElementById("inNumero");
  var outNumeros = document.getElementById("outNumeros");

  var numero = Number(inNumero.value);

  if (numero == 0 || isNaN(numero)) {
    alert("Digite um número válido:");
    inNumero.focus();
    return;
  }

  var resposta = "Entre " + numero + " e 1: ";

  for (var i = numero; i > 1; i--) {
    resposta = resposta + i + ", ";
    outNumeros.textContent = resposta;
  }
  resposta = resposta + i + ". ";
  outNumeros.textContent = resposta;
  
}

var btDecrescer = document.getElementById("btDecrescer");
btDecrescer.addEventListener("click", decrescerNumeros);
