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

    var pesoValido = informaPesoValido(peso)
    var alturaValida = informaAlturaValida(altura)

    if(pesoValido && alturaValida){
        
        var imc = calculaImc(peso, altura)
        var tdImc = paciente.querySelector(".info-imc")
        tdImc.textContent = imc;
        
    }
}

function calculaImc(peso, altura){
    var imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function informaPesoValido(peso){

    if(peso <= 0 || peso >= 1000){
        pesoValido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
        return false;
    }

    return true

}

function informaAlturaValida(altura){

    if(altura <= 0 || altura >= 3.00){
        alturaValida = false
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
        return false;
    }

    return true

}