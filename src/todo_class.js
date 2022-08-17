// -------------- ToDo-Class for ToDo-Objects --------------------------
class ToDo{
    #id = '';
    #dateTime;
    #originDateTime;
    #timeStr;
    #dateStr;
    #task;
    #comment = '';
    #finished = false;

    constructor(todoDate, todoTime, task, comment ){
        this.#dateTime = new TodoDateTime(todoDate, todoTime); 
        this.#timeStr = this.#dateTime.asTimeStr; 
        this.#dateStr = this.#dateTime.asGermDateStr; 
        this.#task = task;
        this.#comment = comment;
        this.setId();
        // making a datype Date() to compare with the actual date    
        this.#originDateTime = new Date(parseInt(this.#dateTime.year), parseInt(this.#dateTime.month)-1, parseInt(this.#dateTime.day), parseInt(this.#dateTime.hour), parseInt(this.#dateTime.minute));
    }

    
    get dateTime(){ return this.#originDateTime};
    get task(){ return this.#task};
    get comment(){ return this.#comment};
    get fineshed(){ return this.#finished};
    get minute(){ return this.#dateTime.minute};
    get hour(){ return this.#dateTime.hour};
    get day(){ return this.#dateTime.day};
    get month(){ return this.#dateTime.month};
    get year(){ return this.#dateTime.year};
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