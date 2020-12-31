var readlinesync = require('readline-sync');
var chalk = require('chalk');

var username = readlinesync.question("what's your name?\n");

console.log("Welcome "+chalk.red(username)+" To Friends quizz by siddarth");

var score = 0;

var questions = [
  {
    question: `The series Friends is set in which city?
    a:Los Angeles
    b:New York City
    c:Miami
    d:Seattle\n`,
    answer:"b"
  },
  {
    question: `What’s the name of Joey’s penguin?
    a:Snowflake
    b:Waddle
    c:Huggsy
    d:Bobber\n`,
    answer: "c"
  },
  {
    question: `What song is Phoebe best known for?
    a:Smelly Cat
    b:Smelly Dog
    c:Smelly Rabbit
    d:Smelly Worm\n`,
    answer: "a"
  },
  {
    question: `What job does Ross have?
    a:Paleontologist
    b:Artist  
    c:Photographer
    d:Insurance salesman\n`,
    answer:'a',
  }
]

function play(question,answer) {
  var useranswer = readlinesync.question(chalk.green(question));
  if(useranswer === answer) {
    console.log(chalk.red("right"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("wrong"));
  }
  console.log("your score is "+chalk.white(score));
  console.log("--------------------");
}

for(var i = 0; i<questions.length;i++) {
  play(questions[i].question,questions[i].answer);
}

console.log("Hurray! Your final score is "+score);

