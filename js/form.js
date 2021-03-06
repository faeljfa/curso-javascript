var botaoAdicionar = document.querySelector("#adicionar-paciente")

botaoAdicionar.addEventListener("click", (event) => {
    
    //impedindo que o evento de submeter o formulario seja realizado
    event.preventDefault();

    var form = document.querySelector("#form-adiciona")

    //recebendo os valores do paciente vindos do formulário
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente)
    
    if(erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaPacientesNaTabela(paciente)
    
    var mensagensErro = document.querySelector("#erros")
    
    //limpando o formulário
    //form.reset()
})

function adicionaPacientesNaTabela(paciente){

    //Monta a linha da tabela
    var pacienteTr = montaTr(paciente)

    //pegando o id da tabela onde será inseriada a linha com as colunas
    var tabela = document.querySelector("#tabela-pacientes")

    //fazendo a inserção
    tabela.appendChild(pacienteTr)
}

function obtemPacienteDoFormulario(form){

    //pegando as informações do paciente e salvando em um objeto
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }
    return paciente;
}

function montaTr(paciente){

    //acrescentando uma nova linha na tabela
    var pacienteTr = document.createElement("tr")

    //adcionando a classe à linha
    pacienteTr.classList.add("paciente")
        
    //criando as celulas que serão adicionadas na tabela
    var nomeTd = montaTd(paciente.nome, "info-nome")
    var pesoTd = montaTd(paciente.peso, "info-peso")
    var alturaTd = montaTd(paciente.altura, "info-altura")
    var gorduraTd = montaTd(paciente.gordura, "info-gordura")
    var imcTd = montaTd(paciente.imc, "info-imc")

    //escrevendo os valores nas celulas que serão acrescentadas
    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = calculaImc(peso, altura)

    //adicionando as celulas na linha criada
    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr

}

function montaTd(dado, classe){

    var td = document.createElement("td")
    
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){

    var erros = []
    if(paciente.nome.length == 0) erros.push("O nome do paciente não pode ser em branco!")

    if(paciente.gordura.length == 0) erros.push("O percentual de gordura do paciente não pode ser em branco!")
    
    if(paciente.peso.length == 0) erros.push("O peso do paciente não pode ser em branco!")
    
    if(paciente.altura.length == 0) erros.push("A altura do paciente não pode ser em branco!")

    if(!validaPeso(paciente.peso)) erros.push("Peso invalido")

    if(!validaAltura(paciente.altura)) erros.push("Altura invalida")

    return erros;
}

function exibeMensagensErro(erros){

    var ul = document.querySelector("#erros")
    ul.innerHTML = ""

    erros.forEach(function(erro){
        
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
        
    })

}