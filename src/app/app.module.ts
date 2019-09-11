import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { DebounceClickDirective } from "./framework/directive/debounce-click.directive"; // 防止连点
import { UserHttpService } from "./framework/http/http";
import { ApiRequestService } from "./framework/services/api.server";
import { HttpClient, HttpClientModule } from "../../node_modules/@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent, DebounceClickDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [UserHttpService,ApiRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {}
