class ToDo{
    #id = '';
    #title ='';
    #date;
    #time;
    #task = '';
    #finished = false;

    constructor(){

    }
    
    get id(){
        return this.#id;
    }

    set id(val){
        this.#id = val;
    }

    get title(){
        return this.#title;
    }

    set title(value){
        this.#title = value;
    }

    set isDone(val){
        this.#finished = val;
    }

    get isDone(){
        return this.#finished;
    }

    get date(){
        return this.#date.toLocaleDateString();
    }

    get time(){
        return this.#date.toLocaleTimeString();
    }

    set date(val){
        this.#date = new Date(val);
    }

    setTime(hour, min){
        this.#date.setHours(hour);
        this.#date.setMinutes(min);
        this.#time = this.#date.toLocaleTimeString();
    }
}


// Test Test Test **************

const myTodo = new ToDo();

myTodo.date = '03-12-1964T08:15:00';
myTodo.setTime(8, 15);
myTodo.id = "dnfdmvma#23Afgadmpg";
// console.log(myTodo.date); 
// console.log(myTodo.time); 
// console.log(myTodo.id); 

localStorage.data = JSON.stringify(myTodo);

let data = JSON.parse(localStorage.data);
console.log(data);