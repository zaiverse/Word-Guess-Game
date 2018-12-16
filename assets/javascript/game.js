var WinsCount = document.getElementById("wins-Count");
var LossesCount = document.getElementById("losses-Count");
var GuessesLeft = document.getElementById("guesses-Left");
var DisplayLetters = document.getElementById("display-Letters");
var GuessesSoFar = document.getElementById("guesses-So-Far");

//set words to randomize from
var Words = ["urgent", "shout", "patience", "maneater", "lights", "faithfully"];

//inizialize wins and losses to zero
var wins = 0;
var losses = 0;

function hangman(){
    //randomize word for user to guess
    var randomWord = Words [Math.floor(Math.random()*Words.length)];
    console.log(randomWord);
    var guessedLettersArray = randomWord.split("");
    //reset
    var GuessedLetterHolder = [];
    var lettersGuessed = [];
    var letterHolder = [];
    var remainingGuesses = 7;
    var lettersWrong = [];
    //call elements by id from HTML and set display for letters possible to guess
    for(var i=0; i<guessedLettersArray.length; i++){
    letterHolder.push(" _ ")
    }

    //begin onkeyup; detect user input and return false if letter was already guessed
    document.onkeyup = function(event){
        var userGuess = event.key;
        
        for(var i = 0; i <= lettersGuessed.length-1; i++)
            {
        if(lettersGuessed[i].indexOf(userGuess) != -1)
            {
        return false;
            }
        }

        lettersGuessed.push(userGuess);

        //accept user input and replace letter holders
        for(i=0; i<guessedLettersArray.length;i++){
            if(userGuess === guessedLettersArray[i]){
                letterHolder[i] = userGuess;
            }
        }
        DisplayLetters.innerHTML = letterHolder.join(" ");
        GuessesSoFar.innerHTML = lettersGuessed;

        if(letterHolder.indexOf(userGuess) === -1){
            --remainingGuesses;
        }
        GuessesLeft.innerHTML = "lives: " + remainingGuesses;

        if(remainingGuesses === 0){
            losses++;
            hangman();
        }
        LossesCount.innerHTML = "Losses: " + losses;

        if(letterHolder.join("") === Words){
            wins++;
            hangman();
        }
        WinsCount.innerHTML = "Wins: " + wins;

    }
}

//call functions
hangman();