// --------------------- TodoList-Class for a todoList, an activeTodoLists and a finishedTodoList -------- 
class TodoList{
    //// current date and time
    #today;
    #day;
    #month;
    #year;
    #hour;
    #minute;

    #todoList = []; 
    
    constructor(){
        this.#today = new Date();
        // index stars by 0
        this.#month = this.#today.getMonth() + 1;
        this.#year = this.#today.getFullYear();
        this.#hour = this.#today.getHours();
        this.#minute = this.#today.getMinutes();
    }

    add(todo){
        if (this.#todoList.includes(todo.id)) {
            return;    
        }else if(this.checkIfTodoIsInFuture(todo)){       
            this.#todoList.push(todo);   
        }
    }

    delete(todo){
        this.#todoList = this.#todoList.map(item => item.id !== todo.id);
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
            `Aufgabe: ${todo.task}
            Datum: ${todo.date}
            Zeit: ${todo.time}
            Kommentar: ${todo.comment}`);
    }
}

// Test Test Test

// const todo1 = new ToDo("2022-12-24", "15:00", "Weihnachten", "Heiligabend wird bestimmt schön");
// const todo2 = new ToDo("2022-12-25", "12:00", "Weihnachten", "Erster WeihnachtsFeiertag, Mittagessen bei Schwiegereltern");
// const todo3 = new ToDo("2022-12-26", "12:00", "Weihnachten", "Zweiter WeihnachtsFeiertag, Mittagessen bei meinen Eltern");
// const todo4 = new ToDo("2022-12-31", "22:00", "Sivester", "Big Party!");
// const todo5 = new ToDo("2023-01-01", "15:00", "Neujahr", "Rausch ausschlafen!");
// const todo6 = new ToDo("2022-08-16", "15:00", "Irgendwas", "Wunderbarer Tag");
// const todo7 = new ToDo("2022-08-17", "15:00", "Noch irgendwas", "Wird bestimmt auch schön");

// const meineTotoListe = new TodoList();

// meineTotoListe.add(todo1);
// meineTotoListe.add(todo2);
// meineTotoListe.add(todo3);
// meineTotoListe.add(todo4);
// meineTotoListe.add(todo5);
// meineTotoListe.add(todo6);
// meineTotoListe.add(todo7);

// console.log("++++ Gesamte ToDo-Liste +++++");
// console.log(meineTotoListe.allToString());


