# LIRI-Node-Bot
Node Assignment

This application uses Node.js to create Liri bot (similar to iPhone's Siri). Liri is a command line application that takes in arguments and returns data based on one of four commands:

movie-this<br>
concert-this<br>
spotify-this-song<br>
just-do-it<br>

What Each Command Does:<br>

1. movie-this:<br>
Retrieves movie information for a movie. If no argument is passed, movie defaults to "Mr. Nobody".<br>
command: node liri.js movie-this <name of a movie>.<br>
  
2. concert-this:<br>
Retrieves concert information for a performer. If no argument is passed, it automatically defaults to "Nick Offerman".<br>
command: node liri.js concert-this <performer's name><br>

3. spotify-this-song:<br>
Retrieves song information for a track. If no argument is passed, song defaults to "The Sign" by Ace of Base.<br>
command: node liri.js spotify-this-song <name of a song><br>

4. just-do-it:<br>
Takes info from random.txt ("I want it that way") and performs spotify-this-song:<br>
command: node liri.js just-do-it.<br>
