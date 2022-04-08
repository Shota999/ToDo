//Selectors

const todoInput = document.querySelector(".todo_input");
const todoButton = document.querySelector(".todo_button");
const todoList = document.querySelector(".todo_list");

//Event Listeners


todoButton.addEventListener("click", addTodo); 

//Functions


function addTodo(event) {
    // Prevent

    event.preventDefault();
    console.log('hello');
    // Todo Div

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);


    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
}