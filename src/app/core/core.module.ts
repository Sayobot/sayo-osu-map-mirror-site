import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnMaterialModule } from './module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




// 组件导入
import {
    AboutDialogComponent,
    HelpDialogComponent,
    MapDetailComponent,
    NotFoundMapDialogComponent,
    SupportSayobotComponent,
    UpdateLogDialogComponent,
    NotFoundPageComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        HttpClientModule
    ],
    entryComponents: [
        SupportSayobotComponent,
        HelpDialogComponent,
        AboutDialogComponent,
        MapDetailComponent,
        NotFoundMapDialogComponent,
        UpdateLogDialogComponent
    ],
    declarations: [
        AboutDialogComponent,
        HelpDialogComponent,
        MapDetailComponent,
        NotFoundMapDialogComponent,
        SupportSayobotComponent,
        UpdateLogDialogComponent,
        NotFoundPageComponent
    ],
    exports: [
        NotFoundPageComponent
    ]
})
export class CoreModule { }
