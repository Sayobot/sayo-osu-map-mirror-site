import { Component, OnInit } from '@angular/core';
import { DialogService } from 'app/core/service/DialogService';
import { ApiService } from 'app/core/service/ApiService';
import { SearchService } from 'app/core/service/Search';

@Component({
    selector: 'search-maps',
    templateUrl: './search-maps.component.html',
    styleUrls: ['./search-maps.component.scss']
})
export class SearchMapsComponent implements OnInit {

    constructor(
        public dialog: DialogService,
        public apiService: ApiService,
        public search: SearchService,
    ) { }

    ngOnInit() {
    }

    // 打开详情
    opneMapDetail = id => this.apiService.getMapDetail(id);

    // 设置图片
    setImgUrl = sid => `https://cdn.sayobot.cn:25225/beatmaps/${sid}/covers/cover.jpg?0`;

    getSearchMore = () => this.search.getSearchList();

}
