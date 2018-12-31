//Javascript Document
alert("Hello. Do you like games?");
//Ask the person's name and say hello
var name=prompt("What's your name")
alert("Hello " + name);

// //Set array of possible coffeeshop words
var coffeeWords = ["coffee", "macchiato", "americano", "mocha", "beans", "cream", "sugar", "cappucino", "latte", "barista", "crema", "espresso", "filter", "redeye"];
var guessedLetters = ""; //array for letters guessed
var answer = "";
var rightLetters = [];
var numBlanks = 0;
var blanksAndRightLetters = [];
var wrongLetters = [];
var userChoice = [];
var youWin = 0
var youLose = 0
var guessesLeft = 10

// ------------------------------------------------------------------------------------------------------------------------------------------
function startGame() {

guessesLeft = 10;

// //Pick a random word from the array and set up underscores

    choice = Math.floor(Math.random()*coffeeWords.length);
    answer = coffeeWords[choice];
    rightLetters = answer.split("");
    numBlanks = rightLetters.length;

    console.log (answer);

    blanksAndRightLetters = [];

    wrongLetters = [];

for (var i = 0; i < numBlanks; i++) {
    blanksAndRightLetters.push("_");
  }

    console.log(blanksAndRightLetters)

// Reprints the guessesLeft to 10.
document.getElementById("guessesLeft").innerHTML = guessesLeft;
// Prints the blanks at the beginning of each round in the HTML.
document.getElementById("numBlanks").innerHTML = blanksAndRightLetters.join(" ");
// Clears the wrong guesses from the previous round.
document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
}

function checkLetters(letter) {

    // This boolean will be toggled based on whether or not
  // a user letter is found anywhere in the word.
    letterInWord = false;

  // Check if a letter exists inside the array at all.
  for (var i = 0; i < numBlanks; i++) {

    if (answer[i] === letter) {

      // If the letter exists then toggle this boolean to true.
      // This will be used in the next step.
    letterInWord = true;
    }
  }
   // If the letter exists somewhere in the word,
  // then figure out exactly where (which indices).
  if (letterInWord) {

    // Loop through the word
    for (var j = 0; j < numBlanks; j++) {

      // Populate the blanksAndRightLetters with every instance of the letter.
      if (answer[j] === letter) {

        // Here we set specific blank spaces to equal the correct letter
        // when there is a match.
        blanksAndRightLetters[j] = letter;
      }
    }

    // Log the current blanks and rightLetters for testing.
    console.log(blanksAndRightLetters);
  }


    else {

    // Then we add the letter to the list of wrong letters.
    wrongLetters.push(letter);

    // We also subtract one of the guesses.
    guessesLeft--;

    }

}

    // roundComplete() function
    // Here we will have all of the code that needs to be run after each guess is made.
    function roundComplete() {

    // First, log an initial status update in the console
    // telling us how many wins, losses, and guesses are left.
    console.log("wins" + youWin + " | losses " + youLose + " | guessesLeft " + guessesLeft);
  
    // HTML UPDATES
    // ============
  
    // Update the HTML to reflect the new number of guesses.
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
  
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("numBlanks").innerHTML = blanksAndRightLetters.join(" ");
  
    // This will print the wrong guesses onto the page.
    document.getElementById("wrongGuess").innerHTML = wrongLetters.join(" ");
  
    // If our hangman string equals the solution.
    // (meaning that we guessed all the letters to match the solution)...
    if (rightLetters.toString() === blanksAndRightLetters.toString()) {
  
      // Add to the win counter
      youWin++;
  
      // Give the user an alert
      alert("You win!");
  
      // Update the win counter in the HTML
      document.getElementById("wins").innerHTML = youWin;
  
      // Restart the game
      startGame();
    }
  
    // If we've run out of guesses
    else if (guessesLeft === 0) {
  
      // Add to the loss counter
      youLose++;
  
      // Give the user an alert
      alert("You lose");
  
      // Update the loss counter in the HTML
      document.getElementById("losses").innerHTML = youLose;
  
      // Restart the game
      startGame();
  
    }
  
  }
  
  // MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
  // ==================================================================
  
  // Starts the Game by running the startGame() function
  startGame();
  
  // Then initiates the function for capturing key clicks.
  document.onkeyup = function(event) {
  
    // Converts all key clicks to lowercase letters.
    guessedLetters = String.fromCharCode(event.which).toLowerCase();
  
    // Runs the code to check for correct guesses.
    checkLetters(guessedLetters);
  
    // Runs the code that ends each round.
    roundComplete();
  };