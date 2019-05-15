import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateLogComponent } from './update-log.component';
import { OwnMaterialModule } from 'app/core/module';

@NgModule({
    declarations: [UpdateLogComponent],
    imports: [
        CommonModule,
        OwnMaterialModule,
        RouterModule.forChild([
            { path: '', component: UpdateLogComponent },
        ])
    ]
})
export class UpdateLogModule { }
