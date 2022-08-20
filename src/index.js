const toDoList = new TodoList();
const toDoFinishedList = new TodoList();
const toDoActiveList = new TodoList();
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


const finished = document.getElementById('finished-todo');
const active = document.getElementById('active-todo');
// Test-Todo's

const todos =
    [
        [       
            "2022-12-24",
            "15:00",
            "Weihnachten",
            "Heiligabend wird bestimmt schön"
        ],
        [
            "2022-12-25",
            "18:00",
            "Weihnachten",
            "Erster WeihnachtsFeiertag, Mittagessen bei Schwiegereltern"
        ],
        [
            "2022-12-26",
            "12:30",
            "Weihnachten",
            "Zweiter WeihnachtsFeiertag, Mittagessen bei meinen Eltern"
        ]
    ]

 const osterSo = new ToDo("2022-04-17", "13:00", "Ostersonntag", "Essen bei Freunden"); 
 const osterSa = new ToDo("2022-04-16", "22:00", "Ostersamstag", "Big Party am See"); 
 
 osterSo.setDoneUndone();
 osterSa.setDoneUndone();

 toDoList.add(osterSa);
 toDoList.add(osterSo);


todos.forEach((todo) => {
    
    const todoObj = new ToDo(...todo);
    
    toDoList.add(todoObj)
});

toDoList.getList().forEach(todo => todo.isDone? toDoFinishedList.add(todo): '');
showLists();
    
// ********* Funktionen zur DOM-Manipulation *************
// Todo-Listen Anzeigen
function showLists(){   
    refresh(); 
    toDoList.getList().sort((a, b) => b.date - a.date);  
    toDoList.getList().forEach( todoObj => {
        if(todoObj.isDone){
            toDoFinishedList.add(todoObj);
                    
            const tmplFin = document.getElementById('finished-todo-template').content.cloneNode(true);
            tmplFin.querySelector('#todo-fin-task').innerText = todoObj.task;
            tmplFin.querySelector('#todo-fin-date').innerText = todoObj.dateStr;
            tmplFin.querySelector('#todo-fin-time').innerText = todoObj.timeStr;
            tmplFin.querySelector('#todo-fin-comment').innerText = todoObj.comment;
            tmplFin.querySelector('.checkbox-fin').setAttribute('id', `cb-fin-${todoObj.id}`);
            tmplFin.getElementById(`cb-fin-${todoObj.id}`).addEventListener('change', pushToOtherList);
            tmplFin.querySelector('.delete-fin').setAttribute('id', `delete-fin-${todoObj.id}`);
            tmplFin.getElementById(`delete-fin-${todoObj.id}`).addEventListener('click', orderLists);
            finished.appendChild(tmplFin);
        }else{
            toDoActiveList.add(todoObj);
    
            const tmplActive = document.getElementById('active-todo-template').content.cloneNode(true);
            tmplActive.querySelector('#todo-active-task').innerText = todoObj.task;
            tmplActive.querySelector('#todo-active-date').innerText = todoObj.dateStr;
            tmplActive.querySelector('#todo-active-time').innerText = todoObj.timeStr;
            tmplActive.querySelector('#todo-active-comment').innerText = todoObj.comment;
            tmplActive.querySelector('.checkbox-act').setAttribute('id', `cb-act-${todoObj.id}`);
            tmplActive.getElementById(`cb-act-${todoObj.id}`).addEventListener('change', pushToOtherList);
            tmplActive.querySelector('.delete-act').setAttribute('id', `delete-act-${todoObj.id}`);
            tmplActive.getElementById(`delete-act-${todoObj.id}`).addEventListener('click', orderLists);
            active.appendChild(tmplActive);
            }
    });
}

// Erstellen eines Objekts und einer todo-List
function createObject(){
    if(date.value === "" || time.value === "" || task.value === ""){
        showLists();
        return   
    }else{
        const toDo = new ToDo(date.value, time.value, task.value, comment.value);
        toDoList.add(toDo);
        //console.log(toDoList.allToString());
        showLists();
    }
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

function pushToOtherList(e){
    // TODO
    console.log(`Event-Target: ${e.target}`);
}

function orderLists(e){
    // TODO
    console.log(`Event-Target: ${e.target}`);
}


