import TodoDateTime from "./todoDateTime_class.js";
// -------------- ToDo-Class for ToDo-Objects --------------------------
class ToDo{
    #id = '';
    #dateTime;
    #originDateTime;
    #originDateStr;
    #originTimeStr;
    #timeStr;
    #dateStr;
    #task;
    #comment = '';
    #isDone;

    constructor(id='', todoDate, todoTime, task, comment, done = false){
        this.#originDateStr = todoDate;
        this.#originTimeStr = todoTime;
        this.#dateTime = new TodoDateTime(todoDate, todoTime); 
        this.#timeStr = this.#dateTime.asTimeStr; 
        this.#dateStr = this.#dateTime.asGermDateStr; 
        this.#task = task;
        this.#comment = comment;
        this.#isDone = done;
        if(id === ''){
            this.setId();
        }
        else{
            this.#id = id;
        }
        // making a datype Date() to compare with the actual date    
        this.#originDateTime = new Date(parseInt(this.#dateTime.year), parseInt(this.#dateTime.month)-1, parseInt(this.#dateTime.day), parseInt(this.#dateTime.hour), parseInt(this.#dateTime.minute));
    }

    
    get id(){ return this.#id};

    get task(){ return this.#task};
    get comment(){ return this.#comment};
    get isDone(){ return this.#isDone};

    get dateTime(){ return this.#originDateTime};
    get dateStr(){ return this.#dateStr};
    get originDateStr(){ return this.#originDateStr};
    get timeStr(){ return this.#timeStr};
    get originTimeStr(){ return this.#originTimeStr};

    setDoneUndone(){
        this.#isDone = !this.#isDone;   
    } 
    
    setId(){
        this.#id = crypto.randomUUID();
    }

    toString(){
        return JSON.stringify({id: this.#id, dateStr: this.#originDateStr, timeStr: this.#originTimeStr,task: this.#task, comment: this.#comment, isDone: this.#isDone});
    }

}   

export default ToDo;