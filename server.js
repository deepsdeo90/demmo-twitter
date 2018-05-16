//Install express server
const express = require('express');
const path = require('path');
const Twitter = require('twit');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-twitter/'));
/* consumer_key: 'EMU5G64RqPfrLnf6ebp3RsA2S',
 consumer_secret: 'aWKp29GUseDyqGynDFcC5RArx6SPeU7ulvTp95GMmXLZYK9Cfg',
 access_token: '453947367-8lJmZPMR69GEgNgksrDIUDG7GjKA1XDvROTNB42c',
 access_token_secret: 'MaUb6uLojEMMjRMwSjDkNlSU8KJwBUwQ0Y14Uw2XLl2fo'*/
/*
const client = new Twitter({
 consumer_key: process.env.CONSUMER_KEY_TWITTER,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token: process.env.ACCESS_TOKEN,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
*/


const client = new Twitter({
  consumer_key: 'EMU5G64RqPfrLnf6ebp3RsA2S',
 consumer_secret: 'aWKp29GUseDyqGynDFcC5RArx6SPeU7ulvTp95GMmXLZYK9Cfg',
 access_token: '453947367-8lJmZPMR69GEgNgksrDIUDG7GjKA1XDvROTNB42c',
 access_token_secret: 'MaUb6uLojEMMjRMwSjDkNlSU8KJwBUwQ0Y14Uw2XLl2fo'
});

app.use(require('cors')());
app.use(require('body-parser').json());


/*
app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-twitter/index.html'));
});
*/
app.get('/api/searchTweets', (req, res) => {
  console.log("consumerkey "+process.env.CONSUMER_KEY_TWITTER);
console.log(process.env.CONSUMER_SECRET);
console.log(process.env.ACCESS_TOKEN);
console.log(process.env.ACCESS_TOKEN_SECRET);

    const params = { tweet_mode: 'extended', count: 200,result_type: 'recent' };
   // console.log(req.query.search);
    if (req.query.search) {
      params.q = req.query.search;
    }

    client.get('search/tweets', params, function(error, tweets, response) {
    if (!error) {
    
      //response.users = tweets;
      res.send(tweets);
      }else{
        res.send(error);
      }

    });
  
});

// Start the app by listening on the default Heroku port
var port = process.env.PORT || 3000;

app.listen(port, function() {
console.log("Listening on " + port);
});
