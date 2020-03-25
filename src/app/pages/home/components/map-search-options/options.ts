export class Option {
    key: number;
    title: string;
    isSelect: boolean;
    parent: Options;

    constructor(obj: OptCategoryItem, parent: Options) {
        this.key = obj.key;
        this.title = obj.title;
        this.isSelect = true;
        this.parent = parent;
    }

    select(status: boolean) {
        this.isSelect = status;
        this.parent.change();
    }
}

export class Options {
    options: Array<Option> = [];
    title: string;
    length: number;
    private _indeterminate = false;
    private _key = 0;
    private value: string;

    constructor(category: OptCategory) {
        this.title = category.title;
        this.value = category.value;

        category.options.forEach((el: OptCategoryItem) => {
            this.options.push(new Option(el, this));
        });

        this.change();
    }

    change() {
        this._key = 0;

        const filterOptions = this.options.filter((option) => option.isSelect);
        this.length = filterOptions.length;

        filterOptions.forEach((option) => (this._key += option.key));
    }

    reset() {
        this.options.forEach((option) => option.isSelect);
        this.change();
    }

    allSelect() {
        this.options.forEach((el: Option) => {
            el.select(true);
        });
    }

    allClose() {
        this.options.forEach((el: Option) => {
            el.select(false);
        });
    }

    get indeterminate() {
        return !this.empty && !this.isAll;
    }

    set indeterminate(status: boolean) {
        this._indeterminate = status;
    }

    get empty() {
        return this._key === 0;
    }

    get isAll() {
        return this.options.every((el) => el.isSelect);
    }

    get key() {
        return `${this.value}=${this.empty ? 65535 : this._key}`;
    }

    get lastOptions() {
        return this.length === 1;
    }
}

export const OPTIONS_META: OptConfig = {
    mode: {
        title: '模式',
        value: '5',
        options: [
            {
                title: 'STD',
                key: 1
            },
            {
                title: 'Taiko',
                key: 2
            },
            {
                title: 'CTB',
                key: 4
            },
            {
                title: 'Mania',
                key: 8
            }
        ]
    },
    ststus: {
        title: '状态',
        value: '6',
        options: [
            {
                title: 'Ranked & Approved',
                key: 1
            },
            {
                title: 'Qualified',
                key: 2
            },
            {
                title: 'Loved',
                key: 4
            },
            {
                title: 'Pending & WIP',
                key: 8
            },
            {
                title: 'Graveyard',
                key: 16
            }
        ]
    },
    subType: {
        title: '范围',
        value: '4',
        options: [
            {
                title: '标题',
                key: 1
            },
            {
                title: '艺术家',
                key: 2
            },
            {
                title: '作图者',
                key: 4
            },
            {
                title: '难度',
                key: 8
            },
            {
                title: '标签',
                key: 16
            },
            {
                title: '提供方',
                key: 32
            }
        ]
    },
    classify: {
        title: '分类',
        value: '7',
        options: [
            {
                title: 'any',
                key: 1
            },
            {
                title: '尚未指定',
                key: 2
            },
            {
                title: '电子游戏',
                key: 4
            },
            {
                title: '动漫',
                key: 8
            },
            {
                title: '摇滚',
                key: 16
            },
            {
                title: '流行乐',
                key: 32
            },
            {
                title: '其他',
                key: 64
            },
            {
                title: '新奇',
                key: 128
            },
            {
                title: '嘻哈',
                key: 256
            },
            {
                title: '电子',
                key: 1024
            }
        ]
    },
    language: {
        title: '语言',
        value: '8',
        options: [
            {
                title: 'any',
                key: 1
            },
            {
                title: '其他',
                key: 2
            },
            {
                title: '英语',
                key: 4
            },
            {
                title: '日语',
                key: 8
            },
            {
                title: '中文',
                key: 16
            },
            {
                title: '器乐',
                key: 32
            },
            {
                title: '韩语',
                key: 64
            },
            {
                title: '法语',
                key: 128
            },
            {
                title: '德语',
                key: 256
            },
            {
                title: '瑞典语',
                key: 512
            },
            {
                title: '西班牙语',
                key: 1024
            },
            {
                title: '意大利语',
                key: 2048
            }
        ]
    }
};

interface OptConfig {
    [category: string]: OptCategory;
}

interface OptCategory {
    title: string;
    value: string;
    options: Array<OptCategoryItem>;
}

interface OptCategoryItem {
    title: string;
    key: number;
}
