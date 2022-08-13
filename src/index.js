// import { TodoDate, ToDoTime, ToDo, TodoApp } from "./todo_classes";
// ------- Input-Felder lesen -------------------

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



// ********* Funktionen zur DOM-Manipulation *************
// Aufgabenfeld befüllen
const fillToDoField = ()=>{
    const showDate = document.getElementById('show-date');
    const showTime = document.getElementById('show-time');
    const showTask = document.getElementById('show-task');
    showTask.innerHTML = `${task}`;
    showDate.innerHTML = `${dateStr.toString()}`;
    showTime.innerHTML = `${timeStr.toString()}`;
    showBox.style.visibility = 'visible';
};

const createObject = ()=>{
    const toDo = new ToDo(dateStr.toString(), timeStr.toString(), task, document.querySelector('#todo-comment').value);
    console.log(toDo);
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




//localStorage.data = JSON.stringify(myTodo);

let data = JSON.parse(localStorage.data);
console.log(data);
