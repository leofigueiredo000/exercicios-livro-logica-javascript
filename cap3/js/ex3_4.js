function calcularFuso(){

//referencia
var inHoraBrasil = document.getElementById("inHoraBrasil")
var outHoraFranca = document.getElementById("outHoraFranca");

//atribuição de variaveis
var horaBrasil = Number(inHoraBrasil.value);
var horaFranca = horaBrasil + 5;

if(horaBrasil === 0 || isNaN(horaBrasil)){

alert("Por favor, Digite a hora no Brasil...")

}

if(horaFranca > 24){

  horaFranca = horaFranca - 24;
}

outHoraFranca.textContent = "Horário da França: " + horaFranca.toFixed(2);

}

var btHoraFranca = document.getElementById("btHoraFranca");
btHoraFranca.addEventListener("click",calcularFuso);

