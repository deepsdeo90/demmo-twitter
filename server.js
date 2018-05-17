//Install express server
const express = require('express');
const path = require('path');
const Twitter = require('twit');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-twitter/'));
const client = new Twitter({
 consumer_key: process.env.CONSUMER_KEY_TWITTER,
 consumer_secret: process.env.CONSUMER_SECRET,
 access_token: process.env.ACCESS_TOKEN,
 access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.use(require('cors')());
app.use(require('body-parser').json());


/*
app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-twitter/index.html'));
});
*/
app.get('/api/searchTweets', (req, res) => {

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
