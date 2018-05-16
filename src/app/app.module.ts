import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetPipe } from './tweet.pipe';
import { SearchComponent } from './search/search.component';
import { LandingComponent } from './landing/landing.component';
import {FormsModule} from "@angular/forms";
import { OrderByPipe } from './order-by.pipe';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetPipe,
    SearchComponent,
    LandingComponent,
    OrderByPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
