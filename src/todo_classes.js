class TodoDate{
    #year;
    #month;
    #day;

    constructor(value){
        const valueArr = value.split('-');
        this.#year = valueArr[0];
        this.#month = valueArr[1];
        this.#day = valueArr[2];
    }

    get year(){ return this.#year};
    get month(){ return this.#month};
    get day(){ return this.#day};

    toString(){ return `${this.#day}.${this.#month}.${this.#year}`};
}

class TodoTime{
    #hour;
    #minute;

    constructor(value){
        const valueArr = value.split(':');
        this.#hour = valueArr[0];
        this.#minute = valueArr[1];
    }

    get hour(){ return this.#hour};
    get minute(){ return this.#minute};

    toString(){ return `${this.#hour}:${this.#minute}`};
}

class ToDo{
    static #id;
    #comment = '';
    #date;
    #time;
    #task;
    #finished = false;

    constructor(todoDate, todoTime, task, comment ){
        this.#date = todoDate;
        this.#time = todoTime;
        this.#task = task;
        this.#comment = comment;
    }
    
}




// Test Test Test **************

// ------- Input-Felder lesen -------------------
const date = document.getElementById('todo-date').value;
const dateStr = new TodoDate(date);

const time = document.getElementById('todo-time').value;
const timeStr = new TodoTime(time);

const task = document.getElementById('todo-task').value;

const showDate = document.getElementById('show-date');
const showTime = document.getElementById('show-time');
const showTask = document.getElementById('show-task');


const showBox = document.querySelector('.show-message');
const button = document.getElementById('btn_date_time');
const btnClose = document.querySelector('#btn-close');
const btnDelete = document.querySelector('#btn-delete');
const btnAdd = document.querySelector('#btn-add');


btnClose.addEventListener('click', (event)=> showBox.style.visibility = 'hidden');



// ********* Funktionen zur DOM-Manipulation *************
// Aufgabenfeld befüllen
const fillToDoField = ()=>{
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
    showTask.innerHTML = '';
    showDate.innerHTML = '';
    showTime.innerHTML = '';
    document.querySelector('#todo-comment').value = '';
}

button.addEventListener('click', fillToDoField);
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