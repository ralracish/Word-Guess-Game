//Javascript Document
//Ask the person's name and say hello
//var name=prompt("What's your name");
//alert("Hello " + name + ". Play the game!");

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
var guessedLetters = []; //array for letters guessed
var startBtn = document.getElementById('startBtn');
var youWin = 0;
var youLose = 0;
var remainingGuesses = 7;
var answer;
var answerArray;
var newAnswer;
// var res;
// var resEmpty;
// var partOfWord=[];
// var pow;
// var blnkAnswer;

// resetGame();--tried to put these in down below for resetting display, but not sure it works. can't get past 
// display();
document.querySelector("startBtn").addEventListener('click', function() {
initialize};
var gword = {
    reset: function(){
        guessedLetters=[];
        guessCount=10;
        letter="";
        guessed=0
        blnkAnswer="";
        partOfWord=[];
        pow=0
    }
}


function initialize() {
    //Pick a random word from the array
    var choice = Math.floor(Math.random() * coffeeWords.length);
    answer = coffeeWords[choice];
    console.log (answer);

    //Put the number of dashes on the screen for the word

    answerArray = "";

    for (var i = 0; i < answer.length; i++) {
        answerArray = answerArray + "_";
        console.log(answerArray)
    }
    document.getElementById("currentWord").innerHTML = answerArray;
}
//Ask the player for a letter.
 document.onkeyup = function(event) {
    // console.log(event)
    var userChoice = event.key;
    console.log(userChoice)
     checkLetters(userChoice)
}
// ----------------------------------------------------
//WHAT I FOUND ON STACK OVERFLOW FOR REPLACING ALL OCCURENCES OF A CHARACTER

// function replaceSubstring(inSource, inToReplace, inReplaceWith) {

//     var outString = inSource;
//     while (true) {
//       var idx = outString.indexOf(inToReplace);
//       if (idx == -1) {
//         break;
//       }
//       outString = outString.substring(0, idx) + inReplaceWith +
//         outString.substring(idx + inToReplace.length);
//     }
//     return outString;
// 
// MY VERSION TRYING OT REPLACE VARIABLES. I TRIED PUTTING VARIABLES IN OTHER PLACES, TOO.
// function replaceSubstring(answerArray, answer, userChoice) {

//   var newAnswer = answerArray;
//   while (true) {
//     var idx = newAnswer.indexOf(answer);
//     if (idx == -1) {
//       break;
//     }
//     newAnswer = newAnswer.substring(0, idx) + userChoice +
//       newAnswer.substring(idx + answer.length);
//   }
//   return newAnswer;
// }
// ------------------------------------------------------------------
//TRIED TO PUT IN VARIABLE A AS newAnswer; didn't work
// String.prototype.replaceAt=function(index, char) {
//     var a = this.split("");
//     a[index] = char;
//     return a.join("");
// }
//----------------------------------------------------------
//DIDN'T WORK WHEN I TRIED TO USE THESE VARIABLES AND PUT replaceAll instead of replaceAt down below defining var newAnswer
// function replaceAll(answer, answerArray, userChoice) {
    // return key.replace(new RegExp("_", 'g'), userChoice);
// }
// -------------------------------------------------------------------------------------------------------
//TRIED TO PUT IN answerArray FOR str1 AND userChoice for str2
// String.prototype.replaceAll = function(answerArray, userChoice, ignore) 
// {
//     return this.replace(new RegExp(answerArray.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(userChoice)=="userChoice")?userChoice.replace(/\$/g,"$$$$"):userChoice);
// } 
//TRIED THIS AND TRIED TO REPLACE replaceAt below with replaceAll AND IT SAID THAT WASN'T A FUNCTION
// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.split(search).join(replacement);
// };
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
// //Call out function to guess letters
 function checkLetters(userChoice) {
     guessedLetters.push(userChoice)
 
    //  console.log(newAnswer);
     answerArray = document.getElementById('currentWord').innerText;
     console.log(answerArray);
     var newAnswer=answerArray.replaceAt(answer.indexOf(userChoice),userChoice);
    
    document.getElementById("currentWord").innerHTML = newAnswer;
 }
if(guessedLetters.length>1){
    for(var z=0; z<(guessedLetters.length-1); z++){
        lth=guessedLetters.length-1;
        if(guessedLetters[z]===guessedLetters[lth]){
            guessedLetters.pop();
        }
    }
}
 for(var x = 0; x < guessedLetters.length; x++){
     for(var y = 0; y< res.length; y++){
         if (guessedLetters[x]===res[y]){
             partOfWord[y]=1;
             resEmpty[y]=res[y]
             blnkAnswer=resEmpty;
             gword.pids(blnkAnswer.join(" "),"currentWord");
         } else {
             partOfWord[y]=0;
         }
     }
}

     if (pow===1){
         guessCount=10-guessedLetters.length;
         var gct = "remainingGuesses " + guessCount;
         if(0<=guessCount && guessCount < 10){
             gword.pids(gct,"num");
             gword.pids(guessedLetters, "guessedLetters");
         }
        }else{
            guessedLetters.pop();
        }
        var a = blnkAnswer.indexOf("_");
        if(a===-1){
            gword.getword(outcome="W");
        }
        if (guessedLetters.length===10){
            gword.getword(outcome="L");
        }
//Give 7 letter guesses and push to empty array 
// answer.indexOf()
// blnkAnswer = answerArray;
// blnkAnswer = (blnkAnswer.replace(/ +/g, "")).split("");
// var glft = "Remaining Guesses "+guessCount;
// this.pids(answerArray, "currentWord");
// this.pids(glft,"remainingGuesses");
// this.pids(userChoice, "guessedLetters");

// if (outCome === "O"){
//     var oct="Wins: 0 " + "Losses: 0 ";
//     totalWins=0;
//     totalLosses=0;
// }
// if (outCome === "W") {
//     totalWins=totalWins+1;
//     oct = "Wins: " + totalWins + "Losses: " + totalLosses;
// }
// if (outCome === "L"){
//     totalLosses=totalLosses+1;
//     oct = "Wins: " + totalWins + "Losses: " + totalLosses; 
// }
// this.pids(oct,"outcome");

//If guessed letter is correct, then join correct letter with "_" on answer
    // if guessedLetters = [j] {
        // document.getElementbyId("currentWord").innerHTML = answerArray.join (answer["_"]);
        //alert to guess another letter
        // alert("Good job! Guess another letter!");
    // } 
    // else if {
        // alert ("No. Try again! Guess the word! Type your letter. You have " + (7-[j]) + "guesses remaining!");
    //Put wrong guessed letter below "Letters Guessed" 
        // document.getElementById=("guessedLetters").innerHTML;
    //Put remaining guesses under "Guesses remaining"
        // document.getElementById="remainingGuesses").(j-7).innerHTML;
    // }
// }
// }
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
    