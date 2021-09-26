//busca no dom o elemento informado
const titulo = document.querySelector("h1")
//altera o conteúdo do texto da tag selecionada
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for(var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i] 

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent 

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso)
    var alturaValida = validaAltura(altura)

    if(!pesoValido){
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    if(!alturaValida){
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
    }

    if(pesoValido && alturaValida){
        var imc = calculaImc(peso, altura)
        var tdImc = paciente.querySelector(".info-imc")
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura){
    var calculo = peso / (altura * altura)
    var imc = calculo.toFixed(2)
    return imc
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.00){
        return true
    } else {
        return false
    }
}