import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetPipe } from './tweet.pipe';
import { SearchComponent } from './search/search.component';
import {FormsModule} from "@angular/forms";
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetPipe,
    SearchComponent,
    OrderByPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MomentModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
