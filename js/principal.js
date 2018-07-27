console.log("Fui carregado de um arquivo externo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Tabela";

var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i<pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var tdImc = paciente.querySelector(".info-imc");
  var tdAltura = paciente.querySelector(".info-altura");
  var peso = tdPeso.textContent;
  var altura = tdAltura.textContent;
  var imc = peso/(altura*altura);
  tdImc.textContent = imc.toFixed(2);
}
