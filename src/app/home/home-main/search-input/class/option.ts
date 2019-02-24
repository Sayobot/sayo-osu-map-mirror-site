import { Options } from './options';

export class Option {
    key: number;
    title: string;
    select = true;
    parent: Options;

    constructor(obj, parent) {
        this.key = obj.key;
        this.title = obj.title;
        this.parent = parent;
    }

    isSelect(status) {
        this.select = status;
        this.parent.onOptionChange();
    }
}
