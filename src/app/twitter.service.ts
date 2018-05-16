import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Tweet } from './tweet';

export interface TwitterResponse {
  data: any;
  statuses:any
  resp: any;
}


@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) { }

    searchTweets(search?: string) {
    var search =encodeURIComponent(search);
    return this.http.get<TwitterResponse>(`${environment.api}/searchTweets?search=${search}`);
  }

}
