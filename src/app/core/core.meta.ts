import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared';

import {
    AboutDialogComponent,
    HelpDialogComponent,
    MapDetailComponent,
    MusicBoxComponent
} from './components';

export const domain = 'osu.sayobot.cn';
export const api = 'api.sayobot.cn';
export const cdn = 'cdnx.sayobot.cn';

export const MODULES = [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SharedModule
];

export const PROVIDES = [
    /**
     * 全局 API 链接配置
     * detail            铺面详情
     * pic               图片
     * list              铺面列表
     * support           支持金额
     * supportList       支持列表
     * notice            公告内容
     * previewMp3        歌曲试听
     * serviceList       服务器列表
     * map               铺面下载
     * mapV2             铺面下载V2
     * mapUnVedio        不带视频下载铺面
     * addMap            添加到服务器
     * filename          获取文件名
     */

    {
        provide: 'BASE_CONFIG',
        useValue: {
            domain: domain,
            detail: `https://${api}/v2/beatmapinfo`,
            pic: `https://cdn.sayobot.cn:25225/beatmaps/`,
            list: `https://${api}/beatmaplist`,
            support: `https://${api}/support`,
            supportList: `https://${api}/static/supportlist`,
            notice: `https://${api}/notice`,
            previewMp3: `https://${cdn}:25225/preview/`,
            serviceList: `https://${api}/static/servers`,
            map: `https://${domain}/osu.php?s=`,
            mapV2: `https://txy1.sayobot.cn/beatmaps/download/full/`,
            mapUnVedio: `https://txy1.sayobot.cn/beatmaps/download/novideo/`,
            mapMini: `https://txy1.sayobot.cn/beatmaps/download/mini/`,
            addMap: `https://sayo.sayobot.cn/add/`,
            filename: `https://${api}/filename?1=`,
            device: `http://127.0.0.1:7296/api/devices`
        }
    }
];

export const DIALOG = [
    AboutDialogComponent,
    HelpDialogComponent,
    MapDetailComponent
];

export const COMPONENTS = [...DIALOG, MusicBoxComponent];
