// -------------- ToDo-Class for ToDo-Objects --------------------------
class ToDo{
    #id = '';
    #date;
    #time;
    #task;
    #comment = '';
    #finished = false;

    constructor(todoDate, todoTime, task, comment ){
        this.#date = new TodoDate(todoDate);
        this.#time = new TodoTime(todoTime);
        this.#task = task;
        this.#comment = comment;
        this.setId();
    }

    get date(){ return this.#date};
    get time(){ return this.#time};
    get task(){ return this.#task};
    get comment(){ return this.#comment};
    get fineshed(){ return this.#finished};
    get minute(){ return this.#time.minute};
    get hour(){ return this.#time.hour};
    get day(){ return this.#date.day};
    get month(){ return this.#date.month};
    get year(){ return this.#date.year};
    get id(){ return this.#id};

    set fineshed(value){
        if(typeof value === 'boolean'){ 
            this.#finished = value;
        }
        else{
            this.#finished = !this.#finished;
        }
    } 
    
    setId(){
        const hexArr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let rnd;
    
        for(let i = 0; i <= 15; i++){
            rnd = Math.floor(Math.random() * 16);
            this.#id += hexArr[rnd];
        }
    }

}   


// Test Test Test

// const myTodo = new ToDo(new TodoDate("2022-03-12").asGermStr, new TodoTime("12:15").asStr, "Schöner Tag", "Test test Test.");

// console.log(`Aufgabe: ${myTodo.task}\nDatum: ${myTodo.date}\nZeit: ${myTodo.time}\nKommentar: ${myTodo.comment}\nId: ${myTodo.id}`);