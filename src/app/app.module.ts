import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [CoreModule, HomeModule, AppRoutingModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
