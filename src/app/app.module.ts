import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
