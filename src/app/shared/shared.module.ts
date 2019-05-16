import { NgModule } from '@angular/core';
import * as META from './shared.meta';

@NgModule({
    imports: [...META.MODULES],
    declarations: [...META.COMPONENTS],
    exports: [...META.MODULES, ...META.COMPONENTS]
})
export class SharedModule { }
