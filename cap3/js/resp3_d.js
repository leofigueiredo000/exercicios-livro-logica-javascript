function verificarLados(){
//referencias
var inLadoA = document.getElementById("inLadoA");
var inladoB = document.getElementById("inLadoB");
var inladoC = document.getElementById("inLadoC");
var outValidacaoTriangulo = document.getElementById("outValidacaoTriangulo");
var outTipoTriangulo = document.getElementById("outTipoTriangulo");

//valores de entrada 
 var ladoA = Number(inLadoA.value);
 var ladoB = Number(inladoB.value);
 var ladoC = Number(inladoC.value);

 //dois lados somados não podem ser maior que o terceio (a+b<c)

 if(ladoC <= ladoA + ladoB && ladoB <= ladoA + ladoC && ladoA <= ladoB + ladoC ){


  outValidacaoTriangulo.textContent = "Lados podem formar um triângulo";

}else{
  outValidacaoTriangulo.textContent = "Lados não podem formar um Triângulo";
}
 


 


}
var btVerificarLados = document.getElementById("btVerificarLados");
btVerificarLados.addEventListener("click",verificarLados);
