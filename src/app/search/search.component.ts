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
  ids = [];

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
  }
  getTweets(searchTweet:string) {
  		
  	this.twitter.searchTweets(searchTweet).subscribe(tweets => {
    //check if there are any tweets
    	if(tweets.statuses.length>0){

      tweets.statuses.reverse().forEach(tweet => {
      //check if it is retweet , consider this for comment count

    			if (tweet.retweeted_status) {
    				tweet =tweet.retweeted_status;
    			} 
           if (this.ids.indexOf(tweet.id_str) < 0) {
              this.ids.push(tweet.id_str);
              this.tweets.unshift(tweet);
            }
    			//this.tweets.push(tweet);
    	});
      }else{
        this.tweets.length=0;
        this.tweets =[];
      }
      

    	//console.log("showing tweets");
    	//console.log(tweets.statuses);
    });
  }

  sort(property){
  this.column = property;
    
  if(property=='created_at'){
    this.direction=-1;
  }else{
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
    
  
}

  changeRows(numLimit){
  	this.numLimit=numLimit;
  }
  

}
