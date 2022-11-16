import ToDo from '../modules/todo_class.js';
// Liste als Map() [JS] zum Zwischenspeichern der todo's
let todoList = new Map();
// localStorage-Daten


//Button Erstellen eines Todo's und Hinzufügen zur Liste und Event-Listener registrieren
const buttonAdd = document.getElementById('btn-todo-add');
buttonAdd.addEventListener("click", createObject);

// Input-Felder Variblen zuweisen
let task = document.getElementById('todo-task');
let date = document.getElementById('todo-date');
let time = document.getElementById('todo-time');
let comment = document.getElementById('todo-comment');

// Button zum Löschen der Textfelder des Eingabe-Formulars
const buttonDelete = document.getElementById('btn-todo-delete');
buttonDelete.addEventListener("click", deleteInputBox);
// Button zum Speichern aller Todo's im localStorage
const buttonSaveAll = document.getElementById('btn-todo-save-all');
buttonSaveAll.addEventListener("click", saveToDataStorage);

// die 2 HTML-Template-Elemente jeweils einer Variablen zuweisen
const finished = document.getElementById('finished-todo');
const active = document.getElementById('active-todo');


// einige Test-Todo's erstellen ***********************************************************************

//  const osterSo = new ToDo('',"2022-04-17", "13:00", "Ostersonntag", "Essen bei Freunden"); 
//  const osterSa = new ToDo('', "2022-04-16", "22:00", "Ostersamstag", "Big Party am See"); 
//  // 2 davon auf fertig setzen
//  osterSo.setDoneUndone();
//  osterSa.setDoneUndone();
// // und der todoFinished hinzufügen
//  todoList.set(osterSa.id, osterSa);
//  todoList.set(osterSo.id, osterSo);

//  const todos =
//  [
//      [ 
//          '',      
//          "2022-12-24",
//          "15:00",
//          "Weihnachten",
//          "Heiligabend wird bestimmt schön"
//      ],
//      [
//         '',
//          "2022-12-25",
//          "18:00",
//          "Weihnachten",
//          "Mittagessen bei Schwiegereltern"
//      ],
//      [
//         '',
//          "2022-12-26",
//          "12:30",
//          "Weihnachten",
//          "Mittagessen bei meinen Eltern"
//      ]
//  ]
 // für die active Liste
// todos.forEach((todo) => {
//     // über Spead-operator alle Eigenschaften zur neuen Todo hinzufügen
//     const todoObj = new ToDo(...todo);
//     // in die activ-Liste
//     todoList.set(todoObj.id, todoObj);
// });

// *********************************************************************************************

// Erstellen eines Objekts und Hinzufügen zur todo-Liste (Map())
function createObject(){
    if(date.value === "" || time.value === "" || task.value === ""){
        showLists();
        return   
    }else{
        const toDo = new ToDo('', date.value, time.value, task.value, comment.value);
        todoList.set(toDo.id, toDo);
        //localStorage.setItem(toDo.id, JSON.stringify(toDo.id, toDo.task, toDo.comment, toDo.isDone, toDo.dateTime, toDo.dateStr, toDo.timeStr));
        //console.log(toDoList.allToString());
        showLists();
    }
}

    
// ********* Funktionen zur DOM-Manipulation *************
// Todo-Listen Anzeigen
function showLists(){   
    refresh(); 
    const toDoFinishedList = [];
    const toDoActiveList = []; 
    todoList.forEach( todoObj => {
        if(todoObj.isDone){
            toDoFinishedList.push(todoObj);        
        }else{
            toDoActiveList.push(todoObj);
        }
    });
    // Sortieren der Listen nach Datum
    toDoFinishedList.sort((a , b) => a.dateTime - b.dateTime);
    toDoActiveList.sort((a , b) => a.dateTime - b.dateTime);

    // Ausgabe
    toDoFinishedList.forEach(todoObj => {
        const tmplFin = document.getElementById('finished-todo-template').content.cloneNode(true);
            tmplFin.querySelector('#todo-fin-task').innerText = todoObj.task;
            tmplFin.querySelector('#todo-fin-date').innerText = todoObj.dateStr;
            tmplFin.querySelector('#todo-fin-time').innerText = todoObj.timeStr;
            tmplFin.querySelector('#todo-fin-comment').innerText = todoObj.comment;
            tmplFin.querySelector('.checkbox-fin').setAttribute('id', `cb-fin-${todoObj.id}`);
            tmplFin.getElementById(`cb-fin-${todoObj.id}`).addEventListener('change', () => changeTodoObjToDoneUndone(todoObj));
            tmplFin.querySelector('.delete-fin').setAttribute('id', `delete-fin-${todoObj.id}`);
            tmplFin.getElementById(`delete-fin-${todoObj.id}`).addEventListener('click', () => deleteTodoObj(todoObj));
            finished.appendChild(tmplFin);
    });
    toDoActiveList.forEach(todoObj => {
        const tmplActive = document.getElementById('active-todo-template').content.cloneNode(true);
            tmplActive.querySelector('#todo-active-task').innerText = todoObj.task;
            tmplActive.querySelector('#todo-active-date').innerText = todoObj.dateStr;
            tmplActive.querySelector('#todo-active-time').innerText = todoObj.timeStr;
            tmplActive.querySelector('#todo-active-comment').innerText = todoObj.comment;
            tmplActive.querySelector('.checkbox-act').setAttribute('id', `cb-act-${todoObj.id}`);
            tmplActive.getElementById(`cb-act-${todoObj.id}`).addEventListener('change', () => changeTodoObjToDoneUndone(todoObj));
            tmplActive.querySelector('.delete-act').setAttribute('id', `delete-act-${todoObj.id}`);
            tmplActive.getElementById(`delete-act-${todoObj.id}`).addEventListener('click', () => deleteTodoObj(todoObj));
            active.appendChild(tmplActive);
    })
}

// Löschen der Todo-Boxen
function refresh(){
    const activeTodo = document.getElementById('active-todo');
    const boxesAct = activeTodo.querySelectorAll('.show-todo-box');
    boxesAct.forEach(box => box.remove());
    const finishedTodo = document.getElementById('finished-todo');
    const boxesFin = finishedTodo.querySelectorAll('.show-todo-box');
    boxesFin.forEach(box => box.remove());   
}

// Felder der Input-Box löschen 
function deleteInputBox(){
    task.value = '';   
    date.value = '';   
    time.value = '';   
    comment.value = '';
}

// Eventhander für den Buttons Löschen 
function deleteTodoObj(todo){
    console.log(todo);
    if(todoList.has(todo.id) && confirm(`Wollen Sie das Todo: ${todo.task} löschen?`)){
        todoList.delete(todo.id, todo);
    }
        showLists();   
}

// Eventhandler für die Checkbox zum Markieren fertig/ nicht fertig
function changeTodoObjToDoneUndone(todo){
    //console.log(todo);
    if (todoList.has(todo.id)) {       
        todoList.delete(todo.id, todo);
        todo.setDoneUndone();
        console.log(todo);
        todoList.set(todo.id, todo);
        showLists();
    }
}

// nach dem Parsen der Seite
window.onload = () => {
    loadFromDataStorage();
    showLists();
}

// Laden und Speichern vom LocalStorage ++++++++++++++++++++++++++++++++++++++
function loadFromDataStorage(){
    
    if(typeof(Storage) !== "undefined" || localStorage.length !== 0){
        for (let i = 0; i < localStorage.length; i++) {   
            const {
                id, 
                dateStr, 
                timeStr, 
                task, 
                comment, 
                isDone
            } = JSON.parse(localStorage.getItem(i));
            console.log("toDo Parsed: ",id, dateStr, timeStr, task, comment, isDone);
            const newToDoObj = new ToDo(id, dateStr, timeStr, task, comment, isDone); 
            console.log("newToDoObj: ", newToDoObj);                 
            todoList.set(newToDoObj.id, newToDoObj);              
        }
        // TODO muss geändert werden
        //todoList.set( todoObjArr[0], todoObjArr[0]);
    }
}

function saveToDataStorage(){
    //localStorage.clear();
    if(typeof(Storage)){
        let i = 0;
        todoList.forEach(todoObj => {
            //console.log(todoObj.toString());
            localStorage.setItem(i, todoObj.toString()); //=> localStorage.setItem(i,  JSON.stringify(todoObj));
            i++;

        });
    }
}