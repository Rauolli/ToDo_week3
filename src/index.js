import ToDo from '../modules/todo_class.js';

// Liste für alle zu erstellenden ToDo-Objekte
const todoList = new Set();


// HTML wurde geladen
document.addEventListener("DOMContentLoaded", () =>{   
    registerButtons();
    loadFromLocalStorage();
    showLists();
});

// BUTTON-Elemente vom Eingabeformular registrieren
function registerButtons(){
    //Button Erstellen eines Todo's und Hinzufügen zur Liste mit Event-Listener
    document.getElementById('btn-todo-add').addEventListener("click", createObject);
    // Button zum Löschen der Textfelder des Eingabe-Formulars
    document.getElementById('btn-todo-delete').addEventListener("click", deleteInputBox);
    // Button zum Speichern aller Todo's im localStorage
    document.getElementById('btn-todo-save-all').addEventListener("click", saveToLocalStorage);
}

// Laden und Speichern vom LocalStorage ++++++++++++++++++++++++++++++++++++++
function loadFromLocalStorage(){   
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
            const newToDoObj = new ToDo(id, dateStr, timeStr, task, comment, isDone);
            if(!todoList.has(newToDoObj.id)) todoList.add(newToDoObj);              
        }
    }
}


// Erstellen eines Objekts und Hinzufügen zur todo-Liste 
function createObject(){
    // Input-Felder Variblen zuweisen
    const task = document.getElementById('todo-task').value;
    const date = document.getElementById('todo-date').value;
    const time = document.getElementById('todo-time').value;
    const comment = document.getElementById('todo-comment').value;
    if(date === "" || time === "" || task === ""){
        showLists();
        return   
    }else{
        const toDo = new ToDo('', date, time, task, comment);

        if(todoList.size === 0){
            todoList.add(toDo);
        }else{
            let hasId = false;
            todoList.forEach((item) => { 
                // console.log(item.id);              
                if (item.id === toDo.id) {
                    hasId = true;
                }
                return hasId;
            });
            
            // console.log(hasId);
            if(!hasId) todoList.add(toDo);
        }
        
        showLists();
    }
}

    
// ********* Funktionen zur DOM-Manipulation *************
// Todo-Listen als aktive und erledigte Aufgaben anzeigen
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
    const finished = document.getElementById('finished-todo');
    toDoFinishedList.forEach(todoObj => {
        const tmplFin = document.getElementById('todo-template').content.cloneNode(true);
            tmplFin.querySelector('#todo-task').innerText = todoObj.task;
            tmplFin.querySelector('#todo-date').innerText = `Datum: ${todoObj.dateStr}`;
            tmplFin.querySelector('#todo-time').innerText = `Zeit: ${todoObj.timeStr}`;
            tmplFin.querySelector('#todo-comment').innerText = `Kommentar: ${todoObj.comment}`;
            tmplFin.querySelector('.checkbox').setAttribute('id', `cb-fin-${todoObj.id}`);
            tmplFin.querySelector('.checkbox').setAttribute('checked', true);
            tmplFin.getElementById(`cb-fin-${todoObj.id}`).addEventListener('change', () => changeTodoObjToDoneUndone(todoObj));
            tmplFin.querySelector('.delete').setAttribute('id', `delete-${todoObj.id}`);
            tmplFin.getElementById(`delete-${todoObj.id}`).addEventListener('click', () => deleteTodoObj(todoObj));
            finished.appendChild(tmplFin);
    });
    const active = document.getElementById('active-todo');
    toDoActiveList.forEach(todoObj => {
        const tmplActive = document.getElementById('todo-template').content.cloneNode(true);
            tmplActive.querySelector('#todo-task').innerText = todoObj.task;
            tmplActive.querySelector('#todo-date').innerText = `Datum: ${todoObj.dateStr}`;
            tmplActive.querySelector('#todo-time').innerText = `Zeit: ${todoObj.timeStr}`;
            tmplActive.querySelector('#todo-comment').innerText = `Kommentar: ${todoObj.comment}`;
            tmplActive.querySelector('.checkbox').setAttribute('id', `cb-act-${todoObj.id}`);
            tmplActive.getElementById(`cb-act-${todoObj.id}`).addEventListener('change', () => changeTodoObjToDoneUndone(todoObj));
            tmplActive.querySelector('.delete').setAttribute('id', `delete-${todoObj.id}`);
            tmplActive.getElementById(`delete-${todoObj.id}`).addEventListener('click', () => deleteTodoObj(todoObj));
            active.appendChild(tmplActive);
    });
}

// Löschen der Todo-Boxen
function refresh(){
    const activeTodo = document.getElementById('active-todo');
    const boxesAct = activeTodo.querySelectorAll('.todo-box');
    boxesAct.forEach(box => box.remove());
    const finishedTodo = document.getElementById('finished-todo');
    const boxesFin = finishedTodo.querySelectorAll('.todo-box');
    boxesFin.forEach(box => box.remove());   
}

// Felder der Input-Box löschen 
function deleteInputBox(){
    // Input-Felder
    document.getElementById('todo-task').value = '';
    document.getElementById('todo-date').value = '';
    document.getElementById('todo-time').value = '';
    document.getElementById('todo-comment').value = '';
}

// Eventhander für den Buttons Löschen 
function deleteTodoObj(todo){
    // console.log(todo);
    if(todoList.has(todo) && confirm(`Wollen Sie das Todo: ${todo.task} löschen?`)){
        todoList.delete(todo);
        todoList.forEach(item => console.log(item));
        saveToLocalStorage();
    }
        showLists();   
}

// Eventhandler für die Checkbox zum Markieren fertig/ nicht fertig
function changeTodoObjToDoneUndone(todo){
    // console.log(todo);
    if (todoList.has(todo)) {       
        todoList.delete(todo);
        todo.setDoneUndone();
        // console.log(todo);
        todoList.add(todo);
        showLists();
    }
}

// im LocalStorage des Browsers speichern
function saveToLocalStorage(){
    //localStorage.clear();
    if(typeof(Storage)){
        let i = 0;
        localStorage.clear();
        todoList.forEach(todoObj => {            
            localStorage.setItem(i, todoObj.toString()); //=> localStorage.setItem(i,  JSON.stringify(todoObj));
            i++;
        });
    }
}