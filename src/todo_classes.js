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
    #today; 
    #day;
    #month;
    #year;
    #hour;
    #minute;

    constructor(){
        this.#today = new Date();
        this.#day = this.#today.getDay();
        this.#month = this.#today.getMonth() + 1;
        this.#year = this.#today.getFullYear();
        this.#hour = this.#today.getHours();
        this.#minute = this.#today.getMinutes();
    }

    add(todo){
        if (this.#todoList.includes(todo)) {
            return;    
        }else{
            this.#todoList.push(todo);
            this.updateActiveList();
            this.updateFineshedTodoList();    
        }
    }

    delete(todo){
        this.#todoList = this.#todoList.map(item => !item.at(todo));
        this.updateActiveList();
        this.updateFineshedTodoList();
    }

    updateActiveList(){
        this.#activeTodoList = this.#todoList.map(todo => {
            if (!todo.fineshed && this.checkIfTodoIsInFuture(todo)) {
                return todo;   
            }            
        });
    }

    updateFineshedTodoList(){
        this.#finishedTodoList = this.#todoList.map(todo => {
            if (todo.fineshed || !this.checkIfTodoIsInFuture(todo)) {
                return todo;
            }
        })
    }



    checkIfTodoIsInFuture(todo){
        if (todo.year < this.#year) {
            return false;
        }else if(todo.month < this.#month){
            return false;
        }else if (todo.day < this.#day) {
            return false;
        }else if (todo.hour < this.#hour){
            return;
        }else if (todo.minute <= this.#minute){
            return false;
        }else{
            return true;
        }
    }
}


// export { TodoDate, TodoTime, ToDo, TodoApp};