$(document).ready(function (){

    const form = document.getElementById('form-lista')
    const tarefa = [];

    let linhas = '';

    $('form').on('submit', function(e){
        e.preventDefault();

        adicionarlinha();
        atualizaTabela();
    });

    function adicionarlinha(){
        const inputNovaTarefa = document.getElementById('nome-tarefa');

        if(tarefa.includes(inputNovaTarefa.value)){
            alert(`A tarefa: ${inputNovaTarefa} já foi cadastrada.`)
        }
        else {
            tarefa.push(inputNovaTarefa.value);

            let linha = `<tr>`;
            linha += `<li>${inputNovaTarefa.value}</li>`;

            linhas += linha;
        }

        inputNovaTarefa.value = '';
    }

    function atualizaTabela(){
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas
    }

    $('li').click(function(){
        linhas =  "text-decoration: line-through";
    })

})
