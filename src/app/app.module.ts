import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core';
import { AppComponent } from '@core/app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
