// Include the dotenv file
require("dotenv").config();

// Include the axios npm package
var axios = require("axios");

// Variable for keys js file
var keys = require("./keys.js");

/* Variable for Spotify portion of LIRI
var spotify = new Spotify(keys.spotify);
*/

// Variable for OMBD portion of LIRI
var userInput = "";

// Store all arguments in an array
var multiples = process.argv;
var commands = process.argv[2];

// Loop through all the words and do a for-loop to handle the inclusion of multiple words
for (var i = 2; i < multiples.length; i++) {
    if (i > 2 && i < multiples.length) {
        userInput = userInput + " " + multiples[i];
    } else {
        userInput += multiples[i];
    }
}

/* We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (commands) {
    case "movie-this":
        userInput();
        break;

    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifySong();
        break;

    case "do-what-it-says":
        doIt();
        break;
*/

// Run a request with axios to the OMDB API with the movie specified
var movieUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

// Create a request with axios to the movieUrl
axios.get(movieUrl).then(

    // If user doesn't type in a movie in node 


    // If the request with axios is successful
    function (response) {

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

/* Run a request with axios to the Bands In Town API with the artist and band specified
var concertUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

// Create a request with axios to the concertUrl
bandsInTown.get(concertUrl).then(

    // If the request with axios is successful
    function (music) {

        // Name of the venue
        console.log("The " + userInput + " next performance is at the " + music.venue.name);

        // Location of the venue

    });
*/