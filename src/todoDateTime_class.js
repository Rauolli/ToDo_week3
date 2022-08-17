// ---- Class TodoDateTime to manage HTML-input-date and time-fields --------
class TodoDateTime{
    #year;
    #month;
    #day;
    #originStr;
    #asGermDateStr;

    #hour;
    #minute;
    #asTimeStr;

    constructor(dateStr, timeStr){
        this.#originStr = dateStr;
        const dateStrArr = dateStr.split('-');
        this.#year = dateStrArr[0];
        this.#month = dateStrArr[1];
        this.#day = dateStrArr[2];
        this.#asGermDateStr = `${this.#day}.${this.#month}.${this.#year}`;

        const timeStrArr = timeStr.split(':');
        this.#hour = timeStrArr[0];
        this.#minute = timeStrArr[1];
        this.#asTimeStr = `${this.#hour}:${this.#minute}`;
    }

    get year(){ return this.#year};
    get month(){ return this.#month};
    get day(){ return this.#day};
    get asGermDateStr(){ return this.#asGermDateStr};
    get originStr(){ return this.#originStr};

    get hour(){ return this.#hour};
    get minute(){ return this.#minute};
    get asTimeStr(){ return this.#asTimeStr};

}
