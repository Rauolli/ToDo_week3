// -------------- ToDo-Class for ToDo-Objects --------------------------
class ToDo{
    #id = '';
    #dateTime;
    #originDateTime;
    #timeStr;
    #dateStr;
    #task;
    #comment = '';
    #isDone;

    constructor(todoDate, todoTime, task, comment ){
        this.#dateTime = new TodoDateTime(todoDate, todoTime); 
        this.#timeStr = this.#dateTime.asTimeStr; 
        this.#dateStr = this.#dateTime.asGermDateStr; 
        this.#task = task;
        this.#comment = comment;
        this.#isDone = false;
        this.setId();
        // making a datype Date() to compare with the actual date    
        this.#originDateTime = new Date(parseInt(this.#dateTime.year), parseInt(this.#dateTime.month)-1, parseInt(this.#dateTime.day), parseInt(this.#dateTime.hour), parseInt(this.#dateTime.minute));
    }

    
    get id(){ return this.#id};

    get task(){ return this.#task};
    get comment(){ return this.#comment};
    get isDone(){ return this.#isDone};

    get dateTime(){ return this.#originDateTime};
    get dateStr(){ return this.#dateStr};
    get timeStr(){ return this.#timeStr};


    setDoneUndone(){
        this.#isDone = !this.#isDone;   
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
