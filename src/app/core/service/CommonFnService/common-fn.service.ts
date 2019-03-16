import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonFnService {

    constructor() { }

    // json浅拷贝
    jsonDeepCopy = item => JSON.parse(JSON.stringify(item));

    fromEntries(arr: any) {
        const obj = {};
        arr.forEach(element => {
            obj[element[0]] = element[1];
        });
        return obj;
    }

}
