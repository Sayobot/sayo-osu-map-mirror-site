import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonFnService {

    constructor() { }

    // json浅拷贝
    jsonDeepCopy = (item) => JSON.parse(JSON.stringify(item));

}
