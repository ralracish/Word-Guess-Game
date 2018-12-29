//Javascript Document
//Ask the person's name and say hello
// var name=prompt("What's your name");
// alert("Hello " + name + ". Play the game!");


// Set array of possible coffeeshop words
    var word = ["mocha", "beans", "cream", "sugar", "crema", "filter", "cup", "tea", "splenda","roast", "body", "blend","drip","flavor"];
// Choose word randomly
    var choice = Math.floor(Math.random() * word.length);
    var answer = word[choice];
//Other variables
    var rightGuess = [];
    var wrongGuess = [];
    var underScore = [];
    // var youWin = 0;
    // var youLose = 0;
    // var remainingGuesses = 10;


//DOM manipulation
var docUnderScore = document.getElementsByClassName("underScore");
var docrightGuess = document.getElementsByClassName("rightGuess");
var docwrongGuess = document.getElementsByClassName("wrongGuess");
var docyouWin = document.getElementsByClassName("wins");
var docyouLose = document.getElementsByClassName("losses");

//Testing
console.log(answer);

//Create underscores based on length of word
    var generateUnderscore = () => {
        for(var i = 0; i < answer.length; i++){
            underScore.push(' _ ');
        }
        return underScore;
    }
// console.log(generateUnderscore());

//Take input for user guess
    document.addEventListener('keypress', (event) => {
        var keyword = String.fromCharCode(event.keyCode);
        // console.log(true);
    // )
// Get user guess
    if(answer.indexOf(keyword) > -1) {
        // console.log(true);
        //add to right words array
        rightGuess.push(keyword);
        //replace underscore with right letter
        underScore[answer.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join('');
        docrightGuess[0].innerHTML = rightGuess.join(''); 
        //check to see if user word matches guesses
        if(underScore.join('') == answer) {
            alert("You Win!");
            // youWin = youWin++;
            // docyouWin[0].innerHTML = youWin.join('');
            // reset();
        }
    }
        else 
        {
        wrongGuess.push(keyword);
        docwrongGuess[0].innerHTML=wrongGuess;
        // if 
            // wrongGuess > 9 
            // {
            // youLose = youLose++''
            // docyouLose[0].innerHTML = youLose.join('');
            // reset();
        // }
        }
    })

    docrightGuess[0].innerHTML = generateUnderscore().join('');
    
    

//Check to see if user guess is right


// guessedLetters = []; //array for letters guessed
// var startBtn = document.getElementById('startBtn');


// //Game win, track wins, and restart new word
//     if (answer = true) && (j < 7){        
//         alert("#youwin-image");
//         youWin = youWin++;
//         guessLetters;
//     }
// //Game lose, track losses, and restart new word
//     else {
//         alert("#gameover-image")
//         youLose = youLose--;
//         guessLetters;