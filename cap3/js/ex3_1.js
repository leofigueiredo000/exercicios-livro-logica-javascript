//referencia
var inNome = document.getElementById("inNome");
var inNota1 = document.getElementById("inNota1");
var inNota2 = document.getElementById("inNota2");
var outMediaNotas = document.getElementById("outMediaNotas");
var btCalcularMedia = document.getElementById("btCalcularMedia");
var outSituacao = document.getElementById("outSituacao");

function CalcularMedia() {
  //dados de entrada

  var nome = inNome.value;
  var nota1 = Number(inNota1.value);
  var nota2 = Number(inNota2.value);

  //calcular a média
  var media = (nota1 + nota2) / 2;

  outMediaNotas.textContent = "Média das Notas: " + media.toFixed(1);

  if (media >= 7.0) {
    
    outSituacao.style.color = "blue";
    outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado(a)";
  
  } else {
    outSituacao.textContent = "Ops " + nome + ". Você foi reprovado(a)";
    outSituacao.style.color = "red";
  }
}

btCalcularMedia.addEventListener("click", CalcularMedia);
