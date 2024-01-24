$('form').on('submit', (event)=> {
    event.preventDefault()
    addTask()
    markTest()
})

function addTask() {
    const task = $('#task').val()
    const novoItem = $(`<li>${task}</li>`)
    $(novoItem).appendTo('ul')
    $('#task').val('')
}

function markTest() {
    $('li').click(function(){
        if ($(this).hasClass('check')){
            $(this).removeClass('check')
        } else {
            $(this).addClass('check')
        }
})}
  
