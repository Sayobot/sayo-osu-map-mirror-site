// 其他
import { NotFoundPageComponent } from './not-found-page';

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

export const DIALOGS = [
    AboutDialogComponent,
    HelpDialogComponent,
    MapDetailComponent,
    NotFoundMapDialogComponent,
    SupportSayobotComponent,
];

export const COMPONENTS = [
    ...DIALOGS,
    NotFoundPageComponent
];

