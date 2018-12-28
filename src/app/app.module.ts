import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CountriesComponent } from "./custom-component/countries-component";
import { HoverDirective } from "./custom-directive/hover-directive";
import { InfiniteScrollerDirective } from "./custom-directive/infinite-scroller-directive";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    HoverDirective,
    InfiniteScrollerDirective
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,InfiniteScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
