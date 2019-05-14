import { NgModule } from '@angular/core';
import * as META from './core.meta';

@NgModule({
    imports: [...META.MODULES],
    entryComponents: [...META.DIALOGS],
    declarations: [...META.COMPONENTS],
    exports: [...META.DIALOGS, ...META.COMPONENTS],
    providers: [...META.PROVIDES]
})

export class CoreModule { }
