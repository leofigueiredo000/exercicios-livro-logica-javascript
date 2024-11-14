//VETOR GLOBAL
var criancas = [];

function adcionarCrianca(){

//referencias 
var inNomeCrianca = document.getElementById("inNomeCrianca");
var inIdadeCrianca = document.getElementById("inIdadeCrianca");

//variaveis para armazenar nome e idade da criança 
var nomeCrianca = inNomeCrianca.value;
var idadeCrianca = Number(inIdadeCrianca.value);

if(nomeCrianca= ""|| inIdadeCrianca.value == "" || isNaN(idadeCrianca)){

    alert("Preencha os campos com um valor válido.")
    inNomeCrianca.focus()
    return;
}
//adiciona nome e idade no vetor criancas
criancas.push({nomeCrianca:nomeCrianca,idadeCrianca:idadeCrianca});

inNomeCrianca.value ="";
inIdadeCrianca.value = ""
inNomeCrianca.focus();

outLista.textContent = criancas[0].nomeCrianca ;




}
//referencia ao botão adicionar
var btAdicionar = document.getElementById("btAdicionar");
//Adicionar a função adicionar criança no botão adicionar
btAdicionar.addEventListener("click",adcionarCrianca);