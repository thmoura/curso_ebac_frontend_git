$(document).ready(function (){


    $('form').on('submit', function(e){
        e.preventDefault();

        const inputNovaTarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        
        // $('li').addClass('ponto');
        $(`<li>${inputNovaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('li').click(function(){
            $(this).addClass('feito');
        });
        $('#nome-tarefa').val(" ");
    

    });

})
