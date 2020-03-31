import { Component, OnInit } from '@angular/core';
import { ServerMangeService } from '@app/core/service';
import { ServerItem } from '@app/shared/models';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    serveList: ServerItem[];

    serverCode: string;

    constructor(public serverManage: ServerMangeService) {}

    ngOnInit() {
        this.serverManage.getServerList().subscribe((res: ServerItem[]) => {
            this.serveList = res;
            this.serverCode = this.serverManage.current;
        });
    }

    onServerSelect() {
        this.serverManage.current = this.serverCode;
    }
}
