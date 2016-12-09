var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];

document.addEventListener("DOMContentLoaded", function(event) {//JScript will wait to run until DOM is loaded

function reset() {//This will reset the guessesLeft and guesses variables if guessesLeft reaches 0
    guessesLeft = 9;
    guesses = [];
}

document.onkeyup = function(event) {//This event listener will cause the function to run when a key is depressed

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(userGuess + " " + computerGuess);
    

    
    if (userGuess === computerGuess) {//What happens when the userGuess and computerGuess match
        wins++;
        console.log("wins: " + wins);
    } else {//What happens when they don't match
        guesses.push(userGuess);
        guessesLeft--;
        console.log("guesses: " + guesses);
        console.log("guesses left: " + guessesLeft);
    }
   

    if (guessesLeft === 0) {//What happens when the user runs out of guesses
        losses++;
        reset();
    }


    //These all write to the DOM
    document.getElementById("wins").innerHTML = "<p>Wins: " + wins + "</p>";
    document.getElementById("losses").innerHTML = "<p>Losses: " + losses + "</p>";
    document.getElementById("guessesLeft").innerHTML = "<p>Guesses Left: " + guessesLeft + "</p>";
    document.getElementById("guesses").innerHTML = "<p>Your Guesses so Far: " + guesses.join(', ') + "</p>";

}

});