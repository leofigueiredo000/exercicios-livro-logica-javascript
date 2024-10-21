var pacientes = [];

function adicionarPaciente() {
  //referencia ao elementos de entrada de saida da pagina
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");

  var nome = inPaciente.value;

  if (nome == "") {
    alert("Por favor informe o nome do paciente ");
    inPaciente.focus();
    return;
  }
  pacientes.push(nome);

  var lista = "";

  for (var i = 0; i < pacientes.length; i++) {
    lista += i + 1 + " - " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;

  inPaciente.value = "";
  inPaciente.focus();
}
var btAdcionar = document.getElementById("btAdicionar");
btAdcionar.addEventListener("click", adicionarPaciente);

function adicionarUrgencia() {
  //referencia ao elementos de entrada de saida da pagina
  var inPaciente = document.getElementById("inPaciente");
  var outLista = document.getElementById("outLista");

  var nome = inPaciente.value;

  if (nome == "") {
    alert("Por favor informe o nome do paciente ");
    inPaciente.focus();
    return;
  }
  pacientes.unshift(nome);

  var lista = "";

  for (var i = 0; i < pacientes.length; i++) {
    lista += i + 1 + " - " + pacientes[i] + "\n";
  }

  outLista.textContent = lista;

  inPaciente.value = "";
  inPaciente.focus();
}
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", adicionarUrgencia);

function adiciconarAtendimento() {
  var inPaciente = document.getElementById("inPaciente");
  var outAtemdimento = document.getElementById("outAtendimento");
  var outLista = document.getElementById("outLista");

  //verifica se há pacientes na fila de espera
  if (pacientes.length == 0) {
    alert("Não há pacientes na fila de espera");
    inPaciente.focus();
    return;
  }

  var atender = pacientes.shift();
  outAtemdimento.textContent = atender;

  var lista = "";

  for (var i = 0; i < pacientes.length; i++) {
    lista += i + 1 + ". " + pacientes[i] + "\n";
  }
  outLista.textContent = lista;
}
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", adiciconarAtendimento);
