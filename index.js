var readline = require("readline-sync");
var score = 0;
function log(question, answer) {
  var UserAnswer = readline.question(question);
    if (UserAnswer === answer){
    console.log("you are right");
    score = score + 1;
    console.log("your score is " +score);
  }
  else 
  {
    console.log("you are wrong");
    score = score - 1;
    console.log("your score is " +score);
  }
}
var questions = [{
  question : "What is my name ?",
  answer : "sunny",
},
{
  question : "My fav city ?",
  answer: "bangalore",
},
{
question: "Am I older than 25 years ?",
answer: "yes",
},
{
question : "Do I like Ice-cream ?",
answer : "yes",
},
{
  question : "Do I eat non-veg ?",
  answer: "no",
}];
for(i = 0; i < questions.length; i++)
{
  var question123 = questions[i];
  log(question123.question, question123.answer);
}
console.log("____________");
console.log("your final score is " +score);
console.log("checkout the highest score , if you should there ping me and I'll update it");
console.log("Tinku : 4");
console.log("Pooja: 3");
