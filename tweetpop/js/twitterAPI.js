$(document).ready(function() {
  $.getJSON('http://cors.io/?u=https://api.twitter.com/1.1/search/tweets.json', function(json) { 
    console.log(json);
    
  });
});
