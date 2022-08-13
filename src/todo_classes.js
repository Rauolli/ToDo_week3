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
    #date;
    #time;
    #task;
    #comment = '';
    #finished = false;

    constructor(todoDate, todoTime, task, comment ){
        this.#date = todoDate;
        this.#time = todoTime;
        this.#task = task;
        this.#comment = comment;
    }

    get date(){ return this.#date};
    get time(){ return this.#time};
    get task(){ return this.#task};
    get comment(){ return this.#comment};
    get fineshed(){ return this.#finished};
    set fineshed(value){
        if(typeof value === 'boolean'){ 
            this.#finished = value;
        }
        else{
            this.#finished = !this.#finished;
        }
    };   
}

class TodoList{
    #todoList = [];
    #finishedTodoList = [];
    #activeTodoList = [];

    constructor(){
    }

    add(todo){
        if (this.#todoList.includes(todo)) {
            return;    
        }else{
            this.#todoList.push(todo);    
        }
    }
}
class TodoApp{

    #todo;
    #todoList;
    

}

// export { TodoDate, TodoTime, ToDo, TodoApp};