const form = document.getElementById('form-lista')
const tarefa = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarlinha();
    atualizaTabela();
})

function adicionarlinha(){
    const inputNovaTarefa = document.getElementById('nome-tarefa');

    if(tarefa.includes(inputNovaTarefa.value)){
        alert(`A tarefa: ${inputNovaTarefa} já foi cadastrada.`)
    }
    else {
        tarefa.push(inputNovaTarefa.value);

        let linha = `<tr>`;
        linha += `<td>${inputNovaTarefa.value}</td>`;

        linhas += linha;
    }

    inputNovaTarefa.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas

}