import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import {UserDetailsServiceModule} from "./services/user-details.service-module";
import {BeersService} from "./services/beers.service";
import {BeersServiceModule} from "./services/beers.service-module";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {ProductServiceModule} from "./services/product.service-module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserDetailsServiceModule,
    BeersServiceModule,
    MatPaginatorModule,
    ProductServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
