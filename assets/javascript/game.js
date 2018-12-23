//Javascript Document
// alert("Hello " + "name");
//Ask the person's name and say hello
// var name=prompt("What's your name")
// alert("Hello " + name);
// document.getElementById("hello").innerText=name;


// //Start the game

document.onkeypress = function() {
    startGame()
}

// //Set array of possible coffeeshop words
var coffeeWords = ["coffee", "macchiato", "americano", "mocha", "beans", "cream", "sugar", "cappucino", "latte", "barista", "crema", "espresso", "filter", "redeye"]
// var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var guessedLetters = []; //array for letters guessed
// var youWin = 0
// var youLose = 0
// var guessesLeft = 7

function startGame() {
// //Pick a random word from the array
var choice = Math.floor(Math.random()*coffeeWords.length);
var answer = coffeeWords[choice];

// //Put the number of dashes on the screen for the word

var answerArray = "";
 for(var i = 0; i < answer.length; i++){ 
 answerArray = answerArray + "_";
 console.log(answerArray)
 }
 document.getElementById("currentWord").innerHTML=answerArray;
}

// //Ask the player for a letter. Give 7 chances
KeyboardEvent.key = function(event) {
    var keyPressed = event.key.toLowerCase ();

// //Array for guessed letters
// 
// var guessedLetters = []
// for(var i = 0; i < 7; i++){
//     guessedLetters.push(prompt("Guess the word! Type your letter!"));
// document.getElementById("guessedLetters").innerText;
}  
//     if (guessedLetters = [i]) {
//         alert("Good job! Guess another letter!");
//     } 
//     else {
//         alert ("No. Try again! Guess the word! Type your letter. You have " + (7-[i]) + "guesses!")
//     document.getElementById=("remainingGuesses").innerHTML;
//     }
// }

//     //Game win
// if (choice = true) {
//     alert("#youwin-image")
// }
//     //Game lose
// else {
//     alert("#gameover-image")
// }


// //If player wins or loses, play a sound and automatically start another word
// resetGame();
// updateDisplay();

// //Track Total Wins
// // if (win document.getElementById="totalwins"
// // Total Wins:
// // youWin = youWin + 1

// //Track Total Losses
// // if lose document.getElementById="totalLosses"
// // Total Losses:
// // youLose = youLose + 1





// reWrite stats();

// </script>