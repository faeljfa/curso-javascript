//pegando o campo filtro
var campoFiltro = document.querySelector("#filtrar-tabela")

//adicionando um evento listener para ao digitar algo no campo de input, executar a função de callback
campoFiltro.addEventListener("input", function(){

    //selecionando todos os pacientes da tabela
    var pacientes = document.querySelectorAll(".paciente") 
    
    //verificando se existe algo digitado no campo
    if(this.value.length > 0){
        
        //percorrendo o array de pacientes
        for(var i = 0; i < pacientes.length; i++){

            //salva em uma variável o paciente que está no laço no momento
            var paciente = pacientes[i]

            //pegando a celula com o campo nome na tabela
            var tdNome = paciente.querySelector(".info-nome")
            
            //pegando o valor do campo nome na tabela
            var nome = tdNome.textContent

            //definindo uma expressão regular para fazer a verificação do que está digitado 
            //no campo de pesquisa. Nesse caso, o segundo parâmetro (i) informa que é case insensitive
            var expressao = new RegExp(this.value, "i")

            //testa se existe o valor digitado no campo de pesquisa, na tabela
            if(!expressao.test(nome)){
                //caso não exista, adiciona a class invisivel no campo (css)
                paciente.classList.add("invisivel")
            } else {
                //caso exista, remove a class invisivel do campo (css)
                paciente.classList.remove("invisivel")
            }
        }
        //caso não exista nada digitado no campo de busca
    } else {
        //percorre novamente o array
        for(var i = 0; i < pacientes.length; i++){
            //pega o registro que está no laço no momento
            var paciente = pacientes[i]
            //remove a class invisivel do campo (css)
            paciente.classList.remove("invisivel")
        }
    }
})