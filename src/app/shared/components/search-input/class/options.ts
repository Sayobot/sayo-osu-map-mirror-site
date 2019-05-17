import { Option } from './option';

export class Options {
    options: Array<Option> = [];
    title: string;
    private _key = 0;
    private value: string;

    constructor(obj) {
        this.title = obj.title;
        this.value = obj.value;

        obj.options.forEach(element => {
            const option = new Option(element, this);
            this.options.push(option);
        });

        this.onOptionChange();
    }

    onOptionChange() {
        const arr = this.options.filter(option => option.select);
        this._key = 0;
        arr.forEach(option => {
            this._key += option.key;
        });
    }

    reset() {
        this.options.forEach(option => option.select = true);
        this.onOptionChange();
    }

    get key() {
        const key = this._key === 0 ? 65535 : this._key;
        return [this.value, key];
    }
}
