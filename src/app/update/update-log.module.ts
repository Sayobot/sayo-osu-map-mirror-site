import { NgModule } from "@angular/core";
import { SharedModule } from "app/shared";
import { RouterModule } from "@angular/router";
import { UpdateLogComponent } from "./update-log.component";

@NgModule({
    declarations: [UpdateLogComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: "", component: UpdateLogComponent }])
    ]
})
export class UpdateLogModule {}
