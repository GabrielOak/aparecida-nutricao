
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteForm(form);
  var erros = validaPaciente(paciente);
  console.log(erros);

  if(erros.length > 0){
    exibeMensagemErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var mensagensDeErro = document.querySelector("#mensagens-erro");
  mensagensDeErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}

function obtemPacienteForm(form){

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td

}

function validaPaciente(paciente){

  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("O campo nome não pode ficar em branco.");
  }
  if(paciente.peso.length == 0){
    erros.push("O campo peso não pode ficar em branco.");
  }
  if(paciente.altura.length == 0){
    erros.push("O campo altura não pode ficar em branco.");
  }
  if(paciente.gordura.length == 0){
    erros.push("O campo gordura não pode ficar em branco.");
  }
  if(!validaPeso(paciente.peso)){
    erros.push("O peso é inválido!");
  }
  if(!validaAltura(paciente.altura)){
    erros.push("A altura é inválida!");
  }

  return erros;
}
function exibeMensagemErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li)
  });
}
