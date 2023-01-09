import ToDo from '../modules/todo_class.js';

// Liste für alle zu erstellenden ToDo-Objekte
const todoList = new Set();

document.addEventListener("DOMContentLoaded", () =>{   
    registerButtons();
    loadFromDataStorage();
    showLists();
});

// BUTTON-Elemente vom Eingabeformular registrieren
function registerButtons(){
    //Button Erstellen eines Todo's und Hinzufügen zur Liste mit Event-Listener
    const buttonAdd = document.getElementById('btn-todo-add').addEventListener("click", createObject);
    // Button zum Löschen der Textfelder des Eingabe-Formulars
    const buttonDelete = document.getElementById('btn-todo-delete').addEventListener("click", deleteInputBox);
    // Button zum Speichern aller Todo's im localStorage
    const buttonSaveAll = document.getElementById('btn-todo-save-all').addEventListener("click", saveToDataStorage);
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
            const newToDoObj = new ToDo(id, dateStr, timeStr, task, comment, isDone);
            if(!todoList.has(newToDoObj.id)) todoList.add(newToDoObj);              
        }
    }
}


// *********************************************************************************************

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
    const finished = document.getElementById('finished-todo');
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
    const active = document.getElementById('active-todo');
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
    });
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
    // console.log(todo);
    if(todoList.has(todo) && confirm(`Wollen Sie das Todo: ${todo.task} löschen?`)){
        todoList.delete(todo);
        saveToDataStorage();
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
function saveToDataStorage(){
    //localStorage.clear();
    if(typeof(Storage)){
        let i = 0;
        todoList.forEach(todoObj => {
            localStorage.setItem(i, todoObj.toString()); //=> localStorage.setItem(i,  JSON.stringify(todoObj));
            i++;
        });
    }
}