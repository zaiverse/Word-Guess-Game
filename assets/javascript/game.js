var DirectionsText = document.getElementById("directions-Text");
var WinsCount = document.getElementById("wins-Count");
var LossesCount = document.getElementById("losses-Count");
var GuessesLeft = document.getElementById("guesses-Left");
var GuessesSoFar = document.getElementById("guesses-So-Far");
var DisplayLetters = document.getElementById("display-Letters");


var Words = ["urgent", "shout", "patience", "maneater", "lights", "faithfully"];

//generate variables
var randomWord = Words [Math.floor(Math.random()*Words.length)];
var Display = [];
var lettersRemaining = randomWord.length;
//inizialize wins and losses to zero
var wins = 0;
var losses = 0;
//while loop to control user guesses
while(lettersRemaining > 0){
    //for loop for display on screen of randomized word
    for(var i=0; i<randomWord.length; i++){
        Display[i] = " _ ";
    }
    DisplayLetters.innerHTML = Display.join(" ");
    document.onkeyup = function(event){
        var userGuess = event.key;
        
    }
}



