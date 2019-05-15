// 弹窗组件
import { AboutDialogComponent } from './about-dialog';
import { HelpDialogComponent } from './help-dialog';
import { MapDetailComponent } from './map-detail';
import { NotFoundMapDialogComponent } from './not-found-map-dialog';
import { SupportSayobotComponent } from './support-sayobot';

export * from './about-dialog';
export * from './help-dialog';
export * from './map-detail';
export * from './not-found-map-dialog';
export * from './support-sayobot';

// 普通组件
import { DetailInfoComponent } from './detail-info';
import { DifficultyTableComponent } from './difficulty-table';
import { NotFoundPageComponent } from './not-found-page';
import { TagsComponent } from './tags';
import { MapDetailRadarChartComponent } from './map-detail-radar-chart';


export const DIALOGS = [
    AboutDialogComponent,
    HelpDialogComponent,
    MapDetailComponent,
    NotFoundMapDialogComponent,
    SupportSayobotComponent,
];

export const COMPONENTS = [
    ...DIALOGS,
    DetailInfoComponent,
    DifficultyTableComponent,
    NotFoundPageComponent,
    TagsComponent,
    MapDetailRadarChartComponent
];

