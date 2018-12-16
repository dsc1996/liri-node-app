# liri-node-app

Liri Node App
Liri is a backend app built with Node.js, the OMDB API and Bands In Town API, and a number of npm installs: Axios, Node-Spotify-API, Moment and DovEnv. This app allows users to enter a song to receive more information on that song, enter a movie to receive more information on that movie or enter an artist and receive informaiton about their next concert. This app also has a 'do-what-it-says' command which reads the random.txt file. See examples for commands.

Prerequisites
To see this project work locally you will need to npm install: Axios, Node-Spotify-API, Moment and DovEnv. 

Examples:
node liri.js spotify-this-song maybe

Artist: Noah Schnacky
Song Name: Maybe We Will
Album: Maybe We Will
Preview Song: https://p.scdn.co/mp3-preview/1eeb540dc69ccbc59bcf0794f218d919012073f9?cid=65a5f45f094546e8b53cdde145b479f1

node liri.js movie-this no

Title: No
Release Year: 2012
IMdB Rating: 7.4
Country: Chile, France, Mexico, USA
Language: Spanish
Plot: An ad executive comes up with a campaign to defeat Augusto Pinochet in Chile's 1988 referendum.
Actors: Gael García Bernal, Alfredo Castro, Luis Gnecco, Néstor Cantillana
Rotten Tomatoes Rating: N/A

node liri.js concert-this KISS

Artist: kiss
Venue: End of the Road World Tour - Vancouver, Canada
Location: Vancouver
Date of the Event: 01/31/2019
Dustins-MacBook-Pro:liri-node-app dustincrawford$ 

node liri.js do-what-it-says

Artist: Backstreet Boys
Song Name: I Want It That Way
Album: The Hits--Chapter One
Preview Song: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=65a5f45f094546e8b53cdde145b479f1
Dustins-MacBook-Pro:liri-node-app dustincrawford$ 
