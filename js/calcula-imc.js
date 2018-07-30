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


  if(!(validaPeso(peso))){
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  }
  if(!(validaAltura(altura))){
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }
  if(validaPeso(peso) && validaAltura(altura)){
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc
  }
}

function validaPeso(peso){
  if(peso>=0 && peso<300){
    return true;
  }else{
    return false;
  }
}
function validaAltura(altura){
  if(altura>=0 && altura<3.0){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
  var imc  = 0;

  imc = peso/(altura*altura);

  return imc.toFixed(2);
}
