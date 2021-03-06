require("dotenv").config();

var fs = require('fs');
var command = process.argv[2];
var search = process.argv[3];
var keys = require("../liri-node-app/keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request= require('request');
var axios = require('axios');
var moment = require('moment')


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
    case "concert-this":
        if(search){
            concertThis(search)
        } else {
            concertThis("JMSN")
        }
        break; 
    case "do-what-it-says":
        doThis()
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
     var queryURL = "http://www.omdbapi.com/?t=" +search+ "&y=&plot=short&tomatoes=true&apikey=64f3fca6"
    //  console.log("http://www.omdbapi.com/?t=" +search+ "&y=&plot=short&tomatoes=true&apikey=64f3fca6")
    axios.get(queryURL).then(

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

 //concertThis Function
    function concertThis (search){
        var queryURL= "https://rest.bandsintown.com/artists/" +search+ "/events?app_id=6d39ad3aff41a57734e6e0644c7bac1e"
        axios.get(queryURL).then(

            function (response) {
            console.log('Yes')
            if (response.status === 200){
            console.log("Venue: "+response.data[0].venue.name)
            console.log("Location: " + response.data[0].venue.city);
            console.log("Date of the Event: " +  moment(response.data[0].datetime).format("MM/DD/YYYY"));

            } else if (error) {
                console.log('ERROR')
            }
        });
    };

    
//doThis Function
    function doThis () {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error)
            } else {
                // console.log(data)
                var splitText = data.split(",");
                // console.log(splitText);
                command = splitText[0];
                // console.log(command);
                search = splitText[1];
                // console.log(search)

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
                    case "concert-this":
                        if(search){
                            concertThis(search)
                        } else {
                            concertThis("Adele")
                        }
                        break; 
                    case "do-what-it-says":
                        doThis()
                    }

                }
            });
        }    