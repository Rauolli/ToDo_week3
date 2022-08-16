// ---- Class TodoDate to manage HTML-input-date-fields --------
class TodoDate{
    #year;
    #month;
    #day;
    #asGermStr;

    constructor(value){
        const valueArr = value.split('-');
        this.#year = valueArr[0];
        this.#month = valueArr[1];
        this.#day = valueArr[2];
        this.#asGermStr = `${this.#day}.${this.#month}.${this.#year}`;
    }

    get year(){ return this.#year};
    get month(){ return this.#month};
    get day(){ return this.#day};
    get asGermStr(){ return this.#asGermStr};

}

// ---------- Class TodoTime to manage HTML-input-time-fields --------------
class TodoTime{
    #hour;
    #minute;
    #asStr;

    constructor(value){
        const valueArr = value.split(':');
        this.#hour = valueArr[0];
        this.#minute = valueArr[1];
        this.#asStr = `${this.#hour}:${this.#minute}`;
    }

    get hour(){ return this.#hour};
    get minute(){ return this.#minute};
    get asStr(){ return this.#asStr};
}