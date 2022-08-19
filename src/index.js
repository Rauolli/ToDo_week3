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
            "Erster WeihnachtsFeiertag, Mittagessen bei Schwiegereltern",
            "Weihnachten",
        "Zweiter WeihnachtsFeiertag, Mittagessen bei meinen Eltern"
        ]
    ]
todos.forEach((todo) => {
    const todoObj = new ToDo(todo[0], todo[1], todo[2], todo[3]);
    console.log(todoObj.id, todoObj.task, todoObj.dateStr, todoObj.timeStr, todoObj.comment);
    toDoList.add(todoObj);
    if(todoObj.isDone){
        toDoFinishedList.add(todoObj);
                
        const tmplFin = document.getElementById('finished-todo-template').contentEditable.cloneNode(true);
        tmplFin.querySelector('#todo-fin-task').innerText = todoObj.task;
        tmplFin.querySelector('#todo-fin-date').innerText = todoObj.dateStr;
        tmplFin.querySelector('#todo-fin-time').innerText = todoObj.timeStr;
        tmplFin.querySelector('#todo-fin-comment').innerText = todoObj.comment;
        finished.appendChild(tmplFin);
    }else{
        toDoActiveList.add(todo);

        const tmplActive = document.getElementById('active-todo-template').content.cloneNode(true);
        tmplActive.querySelector('#todo-active-task').innerText = todoObj.task;
        tmplActive.querySelector('#todo-active-date').innerText = todoObj.dateStr;
        tmplActive.querySelector('#todo-active-time').innerText = todoObj.timeStr;
        tmplActive.querySelector('#todo-active-comment').innerText = todoObj.comment;
        active.appendChild(tmplActive);
        }
});
    
// ********* Funktionen zur DOM-Manipulation *************


// Erstellen eines Objekts und einer todo-List
function createObject(){
    const toDo = new ToDo(date.value, time.value, task.value, comment.value);
    toDoList.add(toDo);
}


function deleteInputBox(){
    task.value = '';   
    date.value = '';   
    time.value = '';   
    comment.value = '';
}


