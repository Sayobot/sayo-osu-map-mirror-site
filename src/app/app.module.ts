import { NgModule } from '@angular/core';
import { CoreModule } from 'app/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// 导入 ng 国际化插件
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from './shared';

import { COMPONENTS } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [AppComponent, ...COMPONENTS, HomeComponent],
    imports: [
        CoreModule,
        SharedModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
