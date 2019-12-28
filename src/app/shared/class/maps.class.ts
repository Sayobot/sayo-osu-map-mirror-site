import { PreMap } from './pre-map.class';

export class Maps {
    maps: PreMap[] = [];

    constructor(maps) {
        maps.forEach((map) => {
            this.maps.push(new PreMap(map));
        });
    }

    clear() {
        this.maps = [];
    }

    add(map: PreMap) {
        this.maps.push(map);
    }
}
