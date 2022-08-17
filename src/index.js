// import { TodoDate, ToDoTime, ToDo, TodoApp } from "./todo_classes";
// ------- Input-Felder lesen -------------------

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
        this.#inputDate = document.document.getElementById('todo-date');
        this.#inputTime = document.document.getElementById('todo-time');
        this.#inputTask = document.document.getElementById('todo-task');
        this.#inputComment = document.document.getElementById('todo-comment');
    }

    get todoList(){ return this.#todoList};
    get todo(){ return this.#todo};

    loadAllTodos(){
        this.#todoList = JSON.parse(localStorage.data);
    }

    saveAllTodos(){
        localStorage.data = JSON.stringify(this.#todoList);
    }

    deleteInputBox(){

    }
    
    showActiveList(){
        this.#activeTodoList.forEach(item =>{
            // showDate = document.getElementById('show-date');
            // showTime = document.getElementById('show-time');
            // showTask = document.getElementById('show-task');

            showTask.innerHTML = `${this.#activeTodoList}`;
            showDate.innerHTML = `${dateStr.toString()}`;
            showTime.innerHTML = `${timeStr.toString()}`;
        })
    }

    showFinishedList(){

    }
}

// ======================================================================================

const date = document.getElementById('todo-date').value;
const time = document.getElementById('todo-time').value;
const task = document.getElementById('todo-task').value;




const showBox = document.querySelector('.show-message');
const btnCreateTask = document.getElementById('btn_date_time');
const btnClose = document.querySelector('#btn-close');
const btnDelete = document.querySelector('#btn-delete');
const btnAdd = document.querySelector('#btn-add');


btnClose.addEventListener('click', (event)=> showBox.style.visibility = 'hidden');

let showDate = document.getElementById('show-date');
let showTime = document.getElementById('show-time');
let showTask = document.getElementById('show-task');

const todoList = new TodoList();

// ********* Funktionen zur DOM-Manipulation *************
// Aufgabenfeld befüllen
const fillToDoField = ()=>{
    showDate = document.getElementById('show-date');
    showTime = document.getElementById('show-time');
    showTask = document.getElementById('show-task');

    showTask.innerHTML = `${task}`;
    showDate.innerHTML = `${date}`;
    showTime.innerHTML = `${time}`;
    showBox.style.visibility = 'visible';
};

// Erstellen eines Objekts und einer todo-List
const createObject = ()=>{
    const toDo = new ToDo(date, time, task, document.querySelector('#todo-comment').value);
    console.log(toDo);
    todoList.add(toDo);
    console.log(todoList);

    return toDo;
}


const deleteToDoField = () =>{
    const showDate = document.getElementById('show-date');
    const showTime = document.getElementById('show-time');
    const showTask = document.getElementById('show-task');
    showTask.innerHTML = '';
    showDate.innerHTML = '';
    showTime.innerHTML = '';
    document.querySelector('#todo-comment').value = '';
}

btnCreateTask.addEventListener('click', fillToDoField);
btnAdd.addEventListener('click', createObject);
btnDelete.addEventListener('click', deleteToDoField);
      // Aufgabenfeld anzeigen
      const showToDoField = ()=>{};
      // Aufgabenfeld schließen
      const closeToDoField = ()=>{};
      // alle activen Aufgaben anzeigen
      const showActiveToDoes = ()=>{};
      // alle erledigte Aufgaben anzeigen
      const showDoneToDoes = ()=>{};




//


console.log(todoList);
