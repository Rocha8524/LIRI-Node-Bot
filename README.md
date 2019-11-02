# LIRI-Node-Bot
Node Assignment

This application uses Node.js to create Liri bot (similar to iPhone's Siri). Liri is a command line application that takes in arguments and returns data based on one of four commands:

movie-this
concert-this
spotify-this-song
just-do-it

What Each Command Does:

1. movie-this
Retrieves movie information for a movie. If no argument is passed, movie defaults to "Mr. Nobody".
command: node liri.js movie-this <name of a movie>
  
2. concert-this
Retrieves concert information for a performer. If no argument is passed, it automatically defaults to "Nick Offerman".
command: node liri.js concert-this <performer's name>

3. spotify-this-song
Retrieves song information for a track. If no argument is passed, song defaults to "The Sign" by Ace of Base.
command: node liri.js spotify-this-song <name of a song>

4. just-do-it
Takes info from random.txt ("I want it that way") and performs spotify-this-song:
command: node liri.js just-do-it
