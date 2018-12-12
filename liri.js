require("dotenv").config();

var fs = require('fs');
var command = process.argv[2];
var search = process.argv[3];
var keys = require("../liri-node-app/keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request= require('request');
var axios = require('axios')

// if (command === "spotify-this-song"){
//     spotifyThis(search)
// } else if (command === "movie"){
//     movieThis(search)
// }

switch(command){
    case "spotify-this-song":
        if(search){
           spotifyThis(search)
        } else {
            spotifyThis("The Sign Ace")
        }
       break;

       case "movie-this":
        if(search){
            movieThis(search)
        } else {
            movieThis("Mr. Nobody")
        }
        break;  
}


// spotifyThis Function 
function spotifyThis(song) {
    spotify.search({type: 'track', query: song}, function(err, data){
        if (err){
                console.log("ERROR");
                return;
        } 

        var song = data.tracks.items[0];
        for(i=0; i<song.artists.length; i++){
                console.log("Artist: " + song.artists[i].name)
        }
        console.log("Song Name: " + song.name);
        console.log("Album: " + song.album.name);
        console.log("Preview Song: " + song.preview_url);
    });

};


// movieThis Function
 function movieThis (search){
    //  console.log("http://www.omdbapi.com/?t=" +search+ "&y=&plot=short&tomatoes=true&apikey=64f3fca6")
    axios.get("http://www.omdbapi.com/?t=" +search+ "&y=&plot=short&tomatoes=true&apikey=64f3fca6").then(

    function (response) {
          console.log("Title: " + response.data.Title);
          console.log("Release Year: " + response.data.Year);
          console.log("IMdB Rating: " + response.data.imdbRating);
          console.log("Country: " + response.data.Country);
          console.log("Language: " + response.data.Language);
          console.log("Plot: " + response.data.Plot);
          console.log("Actors: " + response.data.Actors);
          console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
    }
    );  
 }