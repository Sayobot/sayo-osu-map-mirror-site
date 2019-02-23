import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as META from './home.meta';

@NgModule({
    imports: [
        META.MODULES,
        RouterModule.forChild(META.ROUTES)
    ],
    entryComponents: [
    ],
    declarations: [META.COMPONENTS]
})
export class HomeModule { }
