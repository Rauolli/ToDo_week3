// --------------------- TodoList-Class for a todoList, an activeTodoLists and a finishedTodoList -------- 
class TodoList{
    //// current date and time
    #today;
    //// todo-List
    #todoList = []; 
    
    constructor(){
        this.#today = new Date();
    }

    add(todo){
        if ((this.#todoList.includes(todo.id))|| (this.#todoList.includes(todo.task) && this.#todoList.includes(todo.date) && this.#todoList.includes(todo.time))) {
            return;    
        }else if(todo.isDone){
            this.#todoList.push(todo);
        }else if(this.checkIfTodoIsInFuture(todo)) {
            this.#todoList.push(todo);    
        }     
    }

    getList(){ return this.#todoList;}

    delete(todo){
        this.#todoList = this.#todoList.filter(item => item.id !== todo.id);
    }

    markAsDoneUnDone(todo){
        this.#todoList = this.#todoList.map(item => {
            if (item.id === todo.id) {
                item.setDoneUndone();
            }
            return item;
        });
    }

    checkIfTodoIsInFuture(todo){       
        if (todo.dateTime < this.#today) {
            return false;   
        }else{
            return true;
        }
    }

    // Method to print out all items of the list for testing
    allToString(){
        return this.#todoList.map(todo => 
            `ID: ${todo.id}
            Erledigt: ${todo.isDone?"Ja":"Nein"}
            Aufgabe: ${todo.task}
            Datum: ${todo.dateStr}
            Zeit: ${todo.timeStr}
            Kommentar: ${todo.comment}`);
    }
}



