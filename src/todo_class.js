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


// Test

const myTodo = new ToDo();

myTodo.Date = "03-12-1964";
myTodo.setTime(8, 15);
myTodo.id = "dnfdmvma#23Afgadmpg";
console.log(myTodo.Date); 
console.log(myTodo.Time); 
console.log(myTodo.id); 