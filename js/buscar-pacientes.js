//Pegando o botao que faz a pesquisa na API
var botaoAdicionar = document.querySelector("#buscar")

//Adiciona um event listener para ser executado quando o botão for clicado
botaoAdicionar.addEventListener("click", function(){

    //cria um objeto para fazer a requisição
    var xhr = new XMLHttpRequest()

    //Setando o metodo que será usado e a url que será consumida
    xhr.open("GET", "https://api-pacientes.herokuapp.com/paciedntes")

    //adiciona um event listener também na variavel xhr para carregar os dados vindos da url
    xhr.addEventListener("load", function(){
        
        if(xhr.status == 200){
            //converte e salva na variavel pacientes o resultado da busca
            var pacientes = JSON.parse(xhr.responseText)

            //percorrendo o array com os pacientes
            pacientes.forEach(function(paciente){

                //para cada paciente lido, é chamada a função que adiciona o valor na tabela
                adicionaPacientesNaTabela(paciente)

            });
        } else {
            var erro = document.querySelector("#erro-ajax")
            erro.classList.remove("invisivel")
            erro.classList.add("erros")
        }
    })

    //faz o envio
    xhr.send()
})