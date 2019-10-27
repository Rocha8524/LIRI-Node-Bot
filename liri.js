// Include the dotenv file
require("dotenv").config();

// Include the axios npm package
var axios = require("axios");

// Include moment npm package
var moment = require("moment");

// Variable for keys js file
var keys = require("./keys.js");

// Variable for Spotify portion of LIRI
var spotifyAPI = require("node-spotify-api");

// Store all arguments in an array
var commands = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (commands) {
    case "movie-this":
        movieThis();
        break;

    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifySong();
        break;

    case "do-what-it-says":
        justDoIt();
        break;
}
// Run a request with axios to the OMDB API with the movie specified
function movieThis() {

    // If user doesn't type in a movie in node 
    if (userInput === undefined) {
        userInput = "Mr. Nobody";
    }

    // Variable for OMBD url
    var movieUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

    // Create a request with axios to the movieUrl
    axios.get(movieUrl).then(function (error , response) {

        // If an error occurs
        if (error) {
            return console.log("Error: Move information not available");
        }

        // Title of the movie.
        console.log("The title of the movie is " + userInput);
        // Year the movie came out.
        console.log("The movie " + userInput + " was released in " + response.data.Year);
        // IMDB Rating of the movie.
        console.log("The movie " + userInput + " IMBD rating is " + response.data.imdbRating);
        // Rotten Tomatoes Rating of the movie.
        console.log("The movie " + userInput + " rotten tomatoes score is " + response.data.Ratings[1].Value);
        // Country where the movie was produced.
        console.log("The movie " + userInput + " was produced in " + response.data.Country);
        // Language of the movie.
        console.log("The movie " + userInput + " spoken language is " + response.data.Language);
        // Plot of the movie.
        console.log(userInput + " synopsis: " + response.data.Plot);
        // Actors in the movie.
        console.log("The movie " + userInput + " main actors are " + response.data.Actors);
    });
}

// Run a request with axios to the Bands In Town API with the artist and band specified
function concertThis() {

    // If user doesn't type in a artist in node 
    if (!userInput) {
        userInput = "Nick Offerman";
    }

    // Variable for Bands in Town url
    var concertUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    // Create a request with axios to the concertUrl
    axios.get(concertUrl).then(function (error , response) {

        // If an error occurs
        if (error) {
            return console.log("Error: Concert information not available");
        }

        // Name of the venue
        console.log(userInput + " next performance is at the " + response.data[0].venue.name);

        // City of the concert
        console.log(userInput + " performance is in the city of " + response.data[0].venue.city);

        // State where the concert is held
        console.log(userInput + " performance is in the state of " + response.data[0].venue.region);

        // Date of the event
        console.log(userInput + " next performance is on " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
    });
}

// Run a request with spotify with the artist and band specified
function spotifySong() {

    // If user doesn't type in a song
    if (!userInput) {
        userInput = "The Sign";
    }

    // Variable for user api spotify keys
    var spotify = new spotifyAPI(keys.spotify);

    // Create a request with spotify to concole log song
    spotify.search({ type: "track", query: userInput }, function (error, data) {

        // If an error occurs
        if (error) {
            return console.log("Error: Music information not available");
        }

        // Name of the artist of the song
        console.log("The name of the artist is " + data.tracks.items[0].album.artists[0].name);

        // Name of the song
        console.log("The name of the song is " + data.tracks.items[0].name);

        // Preview link to the song
        console.log("Here is the preview link to the song: " + data.tracks.items[0].href);

        // The album that the song is from
        console.log(userInput + " is from the album " + data.tracks.items[0].album.name);
    });
}

function justDoIt() {

};