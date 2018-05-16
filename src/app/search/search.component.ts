import { Component, OnInit } from '@angular/core';
import { Tweet } from '../tweet';
import { TwitterService } from '../twitter.service';

import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tweets: Tweet[] = [];
  search = '';
  parameter: URLSearchParams = new URLSearchParams();
  isDesc: boolean = false;
  column: number;
  direction: number;
  numLimit:number;
  visible = false;
  visibleComment = false;

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
  }
  getTweets(searchTweet:string) {
  	console.log("inside search tweet"+searchTweet);
  		
  	this.twitter.searchTweets(searchTweet).subscribe(tweets => {
    	
    	tweets.statuses.reverse().forEach(tweet => {
    			//console.log("retweet status"+tweet.retweeted_status);

    			//console.log(tweet.retweeted_status);
    			if (tweet.retweeted_status) {
    				tweet =tweet.retweeted_status;
    			} 
    			this.tweets.unshift(tweet);
    	});
    	console.log("showing tweets");
    	console.log(tweets.statuses);
    });
  }

  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
    if(property=='favorite_count'){
      this.visible = !this.visible;
    }
    if(property=='retweet_count'){
      this.visibleComment = !this.visibleComment;
    }
  
}

  changeRows(numLimit){
  	this.numLimit=numLimit;
  }
  

}
