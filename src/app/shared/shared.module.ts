import { NgModule } from '@angular/core';

import * as META from './shared.meta';

@NgModule({
    imports: [META.MODULES],
    declarations: [],
    exports: [META.MODULES]
})
export class SharedModule { }
