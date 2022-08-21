// ---- Class TodoDateTime to manage HTML-input-date and time-fields --------
class TodoDateTime{
    #year;
    #month;
    #day;
    #originDateStr;
    #originTimeStr;
    #asGermDateStr;

    #hour;
    #minute;
    #asTimeStr;

    constructor(dateStr, timeStr){
        this.#originDateStr = dateStr;       
        const dateStrArr = dateStr.toString().split('-');
        this.#year = dateStrArr[0];
        this.#month = dateStrArr[1];
        this.#day = dateStrArr[2];
        this.#asGermDateStr = `${this.#day}.${this.#month}.${this.#year}`;
        
        this.#originTimeStr = timeStr;
        const timeStrArr = timeStr.toString().split(':');
        this.#hour = timeStrArr[0];
        this.#minute = timeStrArr[1];
        this.#asTimeStr = `${this.#hour}:${this.#minute}`;

    }

    get year(){ return this.#year};
    get month(){ return this.#month};
    get day(){ return this.#day};
    get asGermDateStr(){ return this.#asGermDateStr};
    get originDateStr(){ return this.#originDateStr};
    get originTimeStr(){ return this.#originTimeStr};

    get hour(){ return this.#hour};
    get minute(){ return this.#minute};
    get asTimeStr(){ return this.#asTimeStr};

}
