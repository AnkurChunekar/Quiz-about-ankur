var readlineSync = require("readline-sync");

var score = 0;

var userAnswer = readlineSync.question("what is your name?   " );

console.log("welcome  " + userAnswer + "  to the game: How well do you know Ankur")



function play(question,answer) {
  var gameAnswer = readlineSync.question(question);
if (gameAnswer === answer) {
  score = score + 1;
  console.log("right");
  console.log(score);
} else {
  score = score -1;
  console.log("wrong");
  console.log(score);
 }

}

var questionOne = {
 question: "where does ankur usually live?  ",  
 answer: "panvel",
 }

 var questionTwo = {

  question: "what is ankur's science degree in (-specific field-)?  ",  
   answer: "chemistry",
}

play(questionOne.question,questionOne.answer)
play(questionTwo.question,questionTwo.answer)

console.log("well done!!! your score is: " + score + " out of 2")
console.log(" All time High score is 2/2 scored by ankur" + "\n if you have matched/scored higher please message me the Screenshot and i will update the scores")

