import { Component, OnInit, Input } from '@angular/core';
import { PreMap, Approved, MapSidDetail } from '@app/shared/models';
import { downloadFile } from '@app/utils';
import { PlayMusicService, MusicItem, MapService } from '@app/core/service';
import { MatDialog } from '@angular/material';
import { MapDetailComponent } from '@app/core';

const MODES_CONFIG = {
    std: [1, 3, 5, 7, 9, 11, 13, 15],
    taiko: [2, 3, 6, 7, 10, 11, 14, 15],
    catch: [4, 5, 6, 7, 12, 13, 14, 15],
    mania: [8, 9, 10, 11, 12, 13, 14, 15, 16]
};

@Component({
    selector: 'map-search-result-item',
    templateUrl: './map-search-result-item.component.html',
    styleUrls: ['./map-search-result-item.component.scss']
})
export class MapSearchResultItemComponent implements OnInit {
    @Input() map: PreMap;

    constructor(
        public musicBox: PlayMusicService,
        public mapManager: MapService,
        public dialog: MatDialog
    ) {}

    ngOnInit() {}

    get imgSrc(): string {
        return `https://cdn.sayobot.cn:25225/beatmaps/${this.map.sid}/covers/cover.webp?0`;
    }

    get status(): string {
        return Approved[this.map.approved];
    }

    get modes(): string[] {
        const types = ['std', 'taiko', 'catch', 'mania'];
        const result = types.filter((type: string) =>
            MODES_CONFIG[type].includes(this.map.modes)
        );
        return result;
    }

    download(): void {
        const server = localStorage.getItem('server');
        downloadFile(
            `https://txy1.sayobot.cn/beatmaps/download/full/${this.map.sid}?server=${server}`
        );
    }

    addToMusicQueue(): void {
        this.musicBox.switchAndPlay(
            new MusicItem({
                title: this.map.title,
                id: this.map.sid
            })
        );
    }

    openDetailPanel() {
        this.mapManager
            .getMapInfo(this.map.sid)
            .subscribe((res: MapSidDetail) => {
                this.dialog.open(MapDetailComponent, {
                    panelClass: 'common-dialog',
                    data: { id: this.map.sid, content: res }
                });
            });
    }
}
