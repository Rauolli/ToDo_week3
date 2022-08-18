// 

class TodoApp{
    //// todo; todo-list, active-todo-list and finished-todo-list
    #todo;
    #todoList = [];
    #activeTodoList = [];
    #finishedTodoList = [];
    
    #inputDate;
    #inputTime;
    #inputTask;
    #inputComment;

    #outputDate;
    #outputTime;
    #outputTask;
    #outputComment;

    constructor(){
        this.#todoList = new TodoList();
        this.#inputDate = document.getElementById('todo-date');
        this.#inputTime = document.getElementById('todo-time');
        this.#inputTask = document.getElementById('todo-task');
        this.#inputComment = document.getElementById('todo-comment');
    }

    get todoList(){ return this.#todoList};
    get todo(){ return this.#todo};

    loadAllTodos(){
        this.#todoList = JSON.parse(localStorage.data);
    }

    saveAllTodos(){
        localStorage.data = JSON.stringify(this.#todoList);
    }

    showFinishedList(){

    }
}

// ======================================================================================

const todoApp = new TodoApp();
// Buttons für Erstellen eines Todo's Variablen zuweisen und Event-Listener registrieren
const buttonAdd = document.getElementById('btn-todo-add');
buttonAdd.addEventListener("click", createObject);

// Input-Felder Variblen zuweisen
let task = document.getElementById('todo-task');
let date = document.getElementById('todo-date');
let time = document.getElementById('todo-time');
let comment = document.getElementById('todo-comment');

const buttonDelete = document.getElementById('btn-todo-delete');
buttonDelete.addEventListener("click", deleteInputBox);


// ********* Funktionen zur DOM-Manipulation *************


// Erstellen eines Objekts und einer todo-List
function createObject(){
    const toDo = new ToDo(date.value, time.value, task.value, comment.value);
    console.log(toDo);
    todoApp.todoList.add(toDo);
    console.log(todoApp.todoList);
}


function deleteInputBox(){
    task.value = '';   
    date.value = '';   
    time.value = '';   
    comment.value = '';
}


