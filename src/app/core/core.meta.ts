import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { OwnMaterialModule } from './module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const MODULES = [
    BrowserModule,
    CommonModule,
    OwnMaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
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
            detail: 'https://api.sayobot.cn/v2/beatmapinfo',
            pic: 'https://cdn.sayobot.cn:25225/beatmaps/',
            list: 'https://api.sayobot.cn/beatmaplist',
            support: 'https://api.sayobot.cn/support',
            supportList: 'https://api.sayobot.cn/static/supportlist',
            notice: 'https://api.sayobot.cn/notice',
            previewMp3: 'https://cdnx.sayobot.cn:25225/preview/',
            serviceList: 'https://api.sayobot.cn/static/servers',
            map: 'https://osu.sayobot.cn/osu.php?s=',
            mapV2: 'https://txy1.sayobot.cn/download/osz/',
            mapUnVedio: 'https://txy1.sayobot.cn/download/osz/novideo/',
            addMap: 'https://sayo.sayobot.cn/add/',
            filename: 'https://api.sayobot.cn/filename?1='
        }
    }
];

export { COMPONENTS, DIALOGS } from './components';
