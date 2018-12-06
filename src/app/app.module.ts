import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// angular-material相关
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { OwnMaterialModule } from "./own-material/own-material.module";

// 组件
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundPageComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        OwnMaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
