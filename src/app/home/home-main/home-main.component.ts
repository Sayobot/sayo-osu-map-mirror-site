import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

// 弹窗模板组件
import { MapDetailComponent } from "../dialog/map-detail/map-detail.component";


@Component({
    selector: 'home-main',
    templateUrl: './home-main.component.html',
    styleUrls: ['./home-main.component.scss']
})
export class HomeMainComponent implements OnInit {
    newMap: Array<any> = [
        'assets/img/home/1.jpg',
        'assets/img/home/2.jpg',
        'assets/img/home/3.jpg',
        'assets/img/home/4.jpg',
        'assets/img/home/5.jpg',
        'assets/img/home/6.jpg',
        'assets/img/home/7.jpg',
        'assets/img/home/8.jpg',
        'assets/img/home/9.jpg',
        'assets/img/home/10.jpg',
        'assets/img/home/11.jpg',
        'assets/img/home/12.jpg',
        'assets/img/home/13.jpg',
        'assets/img/home/14.jpg',
        'assets/img/home/15.jpg',
        'assets/img/home/16.jpg',
        'assets/img/home/17.jpg',
        'assets/img/home/18.jpg',
        'assets/img/home/19.jpg',
        'assets/img/home/20.jpg',
    ]

    target: number = 1000;
    total: number = 666;

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
        {
            summary: '老狼出轨，竟欲何为！',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '男人看了会沉默！女人看了会流泪！',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '什么？这个事情你还知道？',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '震惊！cookie居然是个...',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '鲁迅说过: 小夜下载站是最好的下载站',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '鲁迅：没有，不是我说的',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '老狼出轨，竟欲何为！',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '男人看了会沉默！女人看了会流泪！',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '什么？这个事情你还知道？',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '震惊！cookie居然是个...',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '鲁迅说过: 小夜下载站是最好的下载站',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
        {
            summary: '鲁迅：没有，不是我说的',
            content: '阿凡达撒范德萨发达撒范德萨发',
            importance: 0,
            img: []
        },
    ]

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() {
    }

    opneMapDetail(id) {
        let mapDetail = this.dialog.open(
            MapDetailComponent, {
                data: {
                    id: 66666,
                    title: '铺面名称',
                    leavel: '铺面难度'
                }
            }
        );
    }

}
