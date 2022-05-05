

function createTodoItem(inputText) {
    return `<div class="todo">
        <li class="todo_item">
            ${inputText}
        </li>
        <button class="complete-btn"><i class="fas fa-check"></i></button>
        <button class="trash-btn"><i class="fas fa-trash"></i></button>
    </div>`
}

$( document ).ready(function() {

    $( ".todo_button" ).click(function(event) {
        event.preventDefault();
        const inputText = $('.todo_input').val();

        if(inputText === ""){
            return alert('Check input');
        }


        // 
        const item  = createTodoItem(inputText);


        $('.todo_list').append(item);
        $('.todo_input').val('');
    });




    $('body').on('click', '.trash-btn', function() {    
        $(this).parent(".todo").remove();
    });
    $('body').on('click' , '.complete-btn' , function(){
        $(this).parent(".todo").addClass('completed');
    });

});