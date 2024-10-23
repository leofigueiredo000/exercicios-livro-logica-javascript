var erros = [];
var sorteado = Math.floor(Math.random() * 100) + 1;
const CHANCES = 6;
function descobrirNumero() {
  var inNumero = document.getElementById("inNumero");
  var outErros = document.getElementById("outErros");
  var outChances = document.getElementById("outChances");
  var outDica = document.getElementById("outDica");

  var numero = Number(inNumero.value);

  if (numero == 0 || numero > 100 || isNaN(numero)) {
    alert("Informe um número valido...");
    inNumero.focus();
    return;
  }

  if (numero == sorteado) {
    alert("Parabéns!! Você ganhou!");
    btApostar.disabled = true;
    btjogar.className = "exibe";
    outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
  } else {
    if (erros.indexOf(numero) >= 0) {
      alert("Você já apostou o número " + numero + ". Tente outro...");
    } else {
      erros.push(numero);
      var numErros = erros.length;
      var numChances = CHANCES - numErros;
      outErros.textContent = numErros + "(" + erros.join(",") + ")";
      outChances.textContent = numChances;

      if (numChances == 0) {
        alert("Suas Chances acabaram...");
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Game over!! Número sorteado: " + sorteado;
      } else {
        var dica = numero < sorteado ? "maior" : "menor";
        outDica.textContent = "Dica: Tente um número " + dica + "que" + numero;
      }
    }
  }
  inNumero.value = "";
  inNumero.focus();
}
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", descobrirNumero);

function jogarNovamente()
{
  location.reload();

}
var btJogar = document.getElementById("btJogar");
btJogar.addEventListener("click",jogarNovamente);