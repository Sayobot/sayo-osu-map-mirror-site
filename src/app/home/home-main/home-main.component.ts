import { Component, OnInit } from '@angular/core';
import { DialogService, ApiService } from '../../core';

@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
    newMap: Array<any> = [

    ];

    target: number = 1000;
    total: number = 666;
    totalWidth: string = Math.floor((this.total / this.target) * 100) + '%';

    announce: Array<any> = [
        // {
        //     summary:' 公告简介',
        //     content: '公告内容',
        //     importance: '重要程度，0-不重要，仅静态展示，4-弹窗提醒，5-弹窗提醒并需勾选已阅读并确认',
        //     img: '图片数组，假如公告内容有图片的话'
        // }
        {
            summary: ' 小夜下载站正式上线',
            content: '今天真是一个肌肤的卡的房间奥克兰圣诞节快乐附件ask龙卷风卢卡斯大家风口浪尖打算开了房间啊撒旦看风景阿瑟东',
            importance: 4,
            img: []
        },
        {
            summary: ' 小夜下载站正式上线',
            content: '今天真是一个肌肤的卡的房间奥克兰圣诞节快乐附件ask龙卷风卢卡斯大家风口浪尖打算开了房间啊撒旦看风景阿瑟东',
            importance: 4,
            img: []
        },
        {
            summary: ' 小夜下载站正式上线',
            content: '今天真是一个肌肤的卡的房间奥克兰圣诞节快乐附件ask龙卷风卢卡斯大家风口浪尖打算开了房间啊撒旦看风景阿瑟东',
            importance: 4,
            img: []
        }
    ];

    news: Array<any> = [

    ];

    constructor(
        public dialog: DialogService,
        public apiService: ApiService
    ) { }

    ngOnInit() {
    }

    opneMapDetail = id => this.dialog.mapDetail();

    openNotFoundMap = () => this.dialog.notFoundMap();

    downloadMap() {
        // this.http.get('/assets/mock.json').subscribe(detail => {
        //     if(detail.success)
        // });
        // https://osu.sayobot.cn/osu.php?s=1
        // 1228那天后支持 https://txy1.sayobot.cn/d/osz/1
        // this.openNotFoundMap();
    }
}
