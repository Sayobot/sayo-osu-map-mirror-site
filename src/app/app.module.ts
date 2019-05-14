import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import * as META from './app.meta';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, RouterModule.forRoot(META.ROUTES)],
    bootstrap: [AppComponent]
})
export class AppModule { }
