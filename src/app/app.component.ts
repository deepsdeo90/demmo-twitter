import { Component } from '@angular/core';
import { TwitterService } from './twitter.service';
import { Tweet } from './tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TwitterService]

})
export class AppComponent {
  title = 'app';
}
