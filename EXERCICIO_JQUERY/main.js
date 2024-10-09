$(document).ready(function () {

    $('header button').click(function () {
        $('form').slideDown()
        $('#cancelar-tarefas').click(function () {
            $('form').slideUp()
        })
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        let novaTarefa = $('#novaTarefa').val();


        novaTarefa ? $(`<li>${novaTarefa}</li>`).appendTo('ul') : alert("Adicione uma tarefa")

        $('#novaTarefa').val('')

    })

    $('#lista-tarefas').on('click', 'li', function () {
        $(this).toggleClass('completed')
    })

    $('#limpaLista').click(function () {
        $('#lista-tarefas li').remove();
    })

})