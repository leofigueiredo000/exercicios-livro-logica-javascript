function calcularPeso()
{
//referencias
var inNome = document.getElementById("inNome");
var inAltura = document.getElementById("inAltura")
var rbMasculino = document.getElementById("rbMasculino");
var rbFeminino = document.getElementById("rbFeminino");
var outResposta = document.getElementById("outResposta");
//declaração de variaveis de entrada
var nome = inNome.value;
var altura = Number(inAltura.value);
var masculino = rbMasculino.checked;
var feminino = rbFeminino.checked;

if(nome === "" || masculino == false && feminino == false)
{
  alert("Por favor, informe o nome e selecione o sexo...")
  inNome.focus();  
  return;
}

if(altura == 0 || isNaN(altura))
{
alert("Por favor, informa a altura corretamente...");
inAltura.focus();
return;
}

if(masculino)
    {
var peso = 22 * Math.pow(altura,2);

    }else{
        var peso = 21 * (altura,2);
    }

    
outResposta.textContent = nome + ": Seu peso ideal é "+ 
peso.toFixed(3) + "kg";

}

function limparCampos() {
    // Limpa os conteúdos dos elementos
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResposta").textContent = "";
    // posiciona (joga o foco) no elemento inNome
    document.getElementById("inNome").focus();
    }
    
var btCalcularPeso = document.getElementById("btCalcularPeso");
btCalcularPeso.addEventListener("click",calcularPeso);

var btLimparCampos = document.getElementById("btLimparCampos");
btLimparCampos.addEventListener("click", limparCampos);
