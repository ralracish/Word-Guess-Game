//Javascript Document

//Guess the word one letter at a time

//Ask the person's name and say hello
document.getElementById=("hello").innerHTML
    var name = prompt("What's your name?");
    alert("Hello " + name);

//Set array of possible coffeeshop words
var coffeeWords = ["coffee", "macchiato", "americano", "mocha", "beans", "cream", "sugar", "cappucino", "latte", "barista", "crema", "espresso", "filter", "redeye"]

//Pick a random word from the array
var choice = Math.floor(Math.random()*coffeeWords.length;
var answer = coffeeWords[choice];

//Put the number of dashes on the screen for the word
var answerArray = [];
 for (var i = 0; i < coffeeWords.length; i++) 
 answerArray[i] = "_";

//Ask the player for a letter. Give 5 chances
var letters = []
for(var i = 0; i < 5; i++)
    letters.push(prompt("Guess the word! Type your letter!"));
    if (letters = [i]) {
        yesLetter = "Good job! Guess another letter!";
        //Enter on dashes
    } else {
        noLetter = "No. Pick another letter!"
        //put below Letters Already Guessed
    }

//If player wins or loses, play a sound and automatically start another word




//Ask for another letter telling player how many more guesses they have
var remainingLetters = word.length;
while (remainingLetters > 0) {
    (answerArray.join(" "));
    && var guess.toLowerCase=10-i;
    alert("Guess the word! Type your letter. You have (10-i) guesses!")
}





document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase ();
    if(keyPressed) === "t" || keyPressed === "f") 
    {
        
for (i=0;i<10;i++){
    guess = prompt("Guess the word! Type your letter. You have (10-i) guesses.");
    if coffeeWords === guess){
        alert("You guessed the word!");
        break;
    }else { i=0
        guess=prompt("You lost.");
    }
    }
}
for (var j = 0; j < word.length; j++) {
     if (word[j] === guess) {
     answerArray[j] = guess;
     remainingLetters--;
     }

    console.log("key pressed: " + event.key);
    }
};



reWrite stats();

</script>