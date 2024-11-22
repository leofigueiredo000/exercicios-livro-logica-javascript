var numeros  = [];
function adicionarNumero(){

 var inNumero = document.getElementById("inNumero");

var numero = inNumero.value;

numeros.push(numero);

//Condição para evitar numeros repetidos
if( numero == numeros[numeros.length-1]){

    alert("Numero repetido, Digite outro");

    numeros.pop();
    return;
}
var lista = "";

for(var i = 0; i < numeros.length; i++){
lista += numeros[i];


}
if( numero == numeros[numeros.length-1]){

    alert("Numero repetido, Digite outro");

    numeros.pop();
    return;
}

}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);


