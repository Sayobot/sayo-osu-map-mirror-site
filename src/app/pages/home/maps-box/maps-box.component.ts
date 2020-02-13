import { Component, OnInit } from '@angular/core';
import {
    ResponsiveService,
    MapService,
    SearchService
} from '@app/shared/service';
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'maps-box',
    templateUrl: './maps-box.component.html',
    styleUrls: ['./maps-box.component.scss']
})
export class MapsBoxComponent implements OnInit {
    mapType: string;

    navEnd: Observable<NavigationEnd>;

    constructor(
        public responsive: ResponsiveService,
        public maps: MapService,
        public search: SearchService,
        private route: ActivatedRoute,
        router: Router
    ) {
        this.navEnd = router.events.pipe(
            filter((evt) => evt instanceof NavigationEnd)
        ) as Observable<NavigationEnd>;
    }

    ngOnInit() {
        // 订阅路由变更并更新数据
        this.navEnd.subscribe((evt) => {
            this.initMaps(this.mapType);
        });

        // 首次进入根据内容初始化 maps
        this.route.paramMap.subscribe((params: Params) => {
            this.mapType = params.get('type');
            this.initMaps(this.mapType);
        });
    }

    private initMaps(type: string) {
        if (type === 'hot' && this.maps.hotMap.length === 0) {
            this.maps.getHotMap();
        }

        if (type === 'new' && this.maps.newMap.length === 0) {
            this.maps.getNewMap();
        }
    }
}
