// import { TodoDate, ToDoTime, ToDo, TodoApp } from "./todo_classes";
// ------- Input-Felder lesen -------------------

class TodoApp{
    #todo;
    #todoList = [];
    #todoDate;
    #todoTime;

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
    

}

// ======================================================================================

const date = document.getElementById('todo-date').value;
const dateStr = new TodoDate(date);

const time = document.getElementById('todo-time').value;
const timeStr = new TodoTime(time);

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
    showDate.innerHTML = `${dateStr.toString()}`;
    showTime.innerHTML = `${timeStr.toString()}`;
    showBox.style.visibility = 'visible';
};

const createObject = ()=>{
    const toDo = new ToDo(dateStr.toString(), timeStr.toString(), task, document.querySelector('#todo-comment').value);
    console.log(toDo);
    todoList.add(toDo);
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
