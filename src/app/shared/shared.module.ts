import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OwnMaterialModule } from './module/own-material.module';
import { TranslateModule } from '@ngx-translate/core';
import { translateConfig } from './translate';

import {
    MusicBoxComponent,
    ScrollTopComponent,
    LoadingComponent,
} from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        TranslateModule.forChild(translateConfig),
    ],
    declarations: [MusicBoxComponent, ScrollTopComponent, LoadingComponent],
    exports: [
        CommonModule,
        FormsModule,
        OwnMaterialModule,
        TranslateModule,
        MusicBoxComponent,
        ScrollTopComponent,
        LoadingComponent,
    ],
})
export class SharedModule {}
