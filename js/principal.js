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

    var pesoValido = true
    var alturaValida = true

    if(peso <= 0 || peso >= 1000){
        pesoValido = false
        console.log("Peso inválido")
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido")
    }

    if(altura <= 0 || altura >= 3.00){
        alturaValida = false
        console.log("Altura inválida")
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido")
    }

    if(pesoValido && alturaValida){
        var tdImc = paciente.querySelector(".info-imc")
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2);
    }
}