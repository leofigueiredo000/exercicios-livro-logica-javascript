function VerificarRaiz(){

  //referencias
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");
  var btExibirRaiz = document.getElementById("btExibirRaiz");


  //dados de entrada
  var numero = Number(inNumero.value);
  var raiz  = Math.sqrt(numero);

  if(raiz == 0 || isNaN(raiz)){

    alert("Digite um número Válido...");
  }
   
  if(raiz === Math.floor(raiz) )
  {
outResposta.textContent = "Há raiz exata para o numero" 
    
  }


}