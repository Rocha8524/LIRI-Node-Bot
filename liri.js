// Include the dotenv file
require("dotenv").config();

// Include the axios npm package
var axios = require("axios");

var keys = require("./keys.js");

/* Variable for Spotify portion of LIRI
var spotify = new Spotify(keys.spotify);
*/

// Variable for OMBd portion of LIRI
var movieThis = "";

// Store all arguments in an array
var multiples = process.argv;

// Loop through all the words and do a for-loop to handle the inclusion of multiple words
for (var i = 2; i < multiples.length; i++) {
    if (i > 2 && i < multiples.length) {
        movieThis = movieThis + " " + multiples[i];
    } else {
        movieThis += multiples[i];
    }
}

// Run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieThis + "&y=&plot=short&apikey=trilogy";

// Create a request with axios to the queryUrl
axios.get(queryUrl).then(

    // If the request with axios is successful
    function (response) {

        // Console log information for the movie typed in node.
        console.log("The title of the movie is " + movieThis);
        console.log("The movie " + movieThis + " was released in " + response.data.Year);
    });