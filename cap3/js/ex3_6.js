function sacarNotas(){

//referencia a elementos
var inSaque = document.getElementById("inSaque");
var outNotaCem = document.getElementById("outNotaCem");
var outNotaCinquenta = document.getElementById("outNotaCinquenta");
var outNotadez = document.getElementById("outNotaDez");


var saque = inSaque.value;


if(saque % 10 != 0){

alert("infelizmente não poedemos realizar o saque.");

}

var notaCem = Math.floor(saque / 100);
var resto = saque %100;
var notaCinquenta = Math.floor(resto / 50);
resto  = resto % 50;
var notaDez = Math.floor(resto / 10);

if(notaCem > 0 ){
outNotaCem.textContent = "Notas de Cem: " + notaCem;
    
}
if(notaCinquenta >  0){

    outNotaCinquenta.textContent = "Notas de Cinquenta: " + notaCinquenta;

}
if(notaDez > 0 ){

    outNotadez.textContent = "Notas de Dez: " + notaDez;
}

}
var btNotasSaque = document.getElementById("btNotasSaque");
btNotasSaque.addEventListener("click",sacarNotas);