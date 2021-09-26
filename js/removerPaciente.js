//Pegando todos os pacientes da tabela
var tabela = document.querySelector("table")

//Adcionando um eventListener para a tabela onde estão os pacientes
tabela.addEventListener("dblclick", function(event){

    //Ao clicar no item que deseja excluir, adiciona a classe 'fadeOut' criada no css para executar uma animação
    //de fade para que não exclua a linha instantaneamente
    event.target.parentNode.classList.add("fadeOut")

    //Setando um tempo de 500ms de espera para que a animação de fade seja exibida e só depois se exclua a linha
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
    
})