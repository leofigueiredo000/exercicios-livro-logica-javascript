var numeros = [];
function adicionarNumero() {
  var inNumero = document.getElementById("inNumero");

  var numero = inNumero.value;

  //condicional de caixa de texto vazia
  if (isNaN(numero) || numero == "") {
    alert("Digite um Número válido");
    inNumero.focus();
    return;
  }

  //condicional caso tenha um numero repetido no array
  if (numeros.includes(numero)) {
    alert("Numero Repetido, digite outro.");
    inNumero = "";
    inNumero.focus();
    return;
  } else {
    numeros.push(numero);
  }
  document.getElementById("outLista").textContent =
    "Numeros: " + numeros.join(",");

  //limpar os dados na caixa
  inNumero.value = "";
  inNumero.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);

function verificarOrdem() 

{
    var  outLista2 = document.getElementById("outLista2");
  if (numeros.length == 0) {
    alert("Nenhum Número na lista.");

    return;
  }

  var copia = numeros.slice();

  for( var i =0; i< numeros.length -1; i++){

    if(numeros[i] > copia[i + 1]){
outLista2.textContent = "Atenção... Numeros não estão em ordem crescente"
outLista2.classList.add("fonteAzul")

    }else{
        outLista2.textContent = "Numeros estão em ordem crescente"
        outLista2.classList.add("fonteAzul")

    }
    
  }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);
