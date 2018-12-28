//Javascript Document
//Ask the person's name and say hello
var name=prompt("What's your name");
alert("Hello " + name + ". Play the game!");

// //Start the game

// document.addEventListener("spacebar",startGame, false);
// function startGame(e){
//     switch(e.keyCode){  
//         case 32:
//         break;
    // }
// }

// //Set array of possible coffeeshop words
var coffeeWords = ["coffee", "macchiato", "americano", "mocha", "beans", "cream", "sugar", "cappucino", "latte", "barista", "crema", "espresso", "filter", "redeye"];
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guessedLetters = []; //array for letters guessed
var startBtn = document.getElementById('startBtn');
var youWin = 0;
var youLose = 0;
var remainingGuesses = 7;

// resetGame();--tried to put these in down below for resetting display, but not sure it works. can't get past 
// display();
// document.querySelector("startBtn").addEventListener('click', function() {
    // initialize}

function initialize() {
    startBtn.style.display = 'none';
//Pick a random word from the array
var choice = Math.floor(Math.random()*coffeeWords.length);
var answer = coffeeWords[choice];

//Put the number of dashes on the screen for the word

var answerArray = "";

 for(var i = 0; i < answer.length; i++){ 
    answerArray = answerArray + "_";
    console.log(answerArray)
}
 document.getElementById("currentWord").innerHTML=answerArray;
}

//Ask the player for a letter.
document.onkeyup = function(event) {
    guessLetters()
}

//Call out function to guess letters
function guessLetters() {

//Set up guessed letters array
    guessedLetters = [];

//Function to only accept alphabet
function ValidateAlpha(evt)
{
    var keyCode = (evt.which) ? evt.which : evt.keyCode
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
        
    return false;
        return true;
}

//Give 7 letter guesses and push to empty array 
for(var j = 0; j < 7; j++){
    guessedLettersArray = guessedLettersArray.push [j];
    console.log(guessedLettersArray);

//If guessed letter is correct, then join correct letter with "_" on answer
    if guessedLetters = [j] {
        document.getElementbyId("currentWord").innerHTML = answerArray.join (answer["_"]);
        //alert to guess another letter
        alert("Good job! Guess another letter!");
    } 
    else if {
        alert ("No. Try again! Guess the word! Type your letter. You have " + (7-[j]) + "guesses remaining!");
    //Put wrong guessed letter below "Letters Guessed" 
        document.getElementById=("guessedLetters").innerHTML;
    //Put remaining guesses under "Guesses remaining"
        document.getElementById="remainingGuesses").(j-7).innerHTML;
    }
}
}
//Game win, track wins, and restart new word
    if (answer = true) && (j < 7){        
        alert("#youwin-image");
        youWin = youWin++;
        guessLetters;
    }
//Game lose, track losses, and restart new word
    else {
        alert("#gameover-image")
        youLose = youLose--;
        guessLetters;
    }