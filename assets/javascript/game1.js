//Javascript Document
// alert("Hello " + "name");
//Ask the person's name and say hello
// var name=prompt("What's your name")
// alert("Hello " + name);
// document.getElementById("hello").innerText=name;


// //Start the game

// document.addEventListener("spacebar",startGame, false);
// function startGame(e){
//     switch(e.keyCode){  
//         case 32:
//         break;
    // }
// }

// //Set array of possible coffeeshop words
var coffeeWords = ["coffee", "macchiato", "americano", "mocha", "beans", "cream", "sugar", "cappucino", "latte", "barista", "crema", "espresso", "filter", "redeye"]
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guessedLetters = []; //array for letters guessed
var startBtn = document.getElementById('startBtn');
// var youWin = 0;
// var youLose = 0;
// var remainingGuesses = 7;

function initialize() {
    startBtn.style.display = 'none';
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

// document.onkeypress = function() {
//     playGame()
// }

// // //Ask the player for a letter. Give 7 chances
// function playGame(){
// // //Array for guessed letters
// // 
// var guessedLetters = []
// for(var j = 0; j < 7; j++){
//     guessedLetters.push[];
//   document.getElementById("guessedLetters").innerText;
//   console.log(guessedLetters);
// // }
// }

    // if {
    //     (guessedLetters = [j]); 
    //     guessedLetters.push["_"];
    //     alert("Good job! Guess another letter!");
    // } 
    // else {
    //     remainingGuesses= (7-j)
    //     alert ("No. Try again! Guess the word! Type your letter. You have " + (7-[j]) + "guesses remaining!")
    // document.getElementById=("remainingGuesses").innerHTML;
    // }
// }
// }

//     //Game win
// if {
    // (choice = true) && (j < 7);
//     alert("#youwin-image")
// }
//     //Game lose
// else {
//     alert("#gameover-image")
// }


// //Track Total Wins
// // if {
    // choice = true;
// // Total Wins:
// // youWin = youWin + 1;
// document.getElementById="totalwins";
// }

// //Track Total Losses
// if {
    // choice = false && guessedLetters > 7; 
    // // Total Losses:
// youLose = youLose + 1;
// document.getElementById="totalLosses";
// }