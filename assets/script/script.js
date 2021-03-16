const startBtn = document.getElementById('startbutton');
const timerEl = document.getElementById('timer');
const directions = document.querySelector('.Directions');
const answers = document.querySelector('.answers');
const question = document.querySelector('.Question');
const highscore = document.querySelector(".Highscore");
var timeInterval;
var questionIndex = 0
var choicesIndex = 0
var anwserIndex = 0
var score = 0
var questionArray= [
  {
    question: "What is 2+2?",
    choices: ['2', '23', '4', '3'],
    answer: '4',
  },
  {
    question: "How old am I?",
    choices: ['3', '36', '35', '56'],
    answer: '35',
  },
  {
    question: "How old is my daughter?",
    choices: ['2', '1', '5', '3'],
    answer: '2',
  },
  {
    question: "What is my wife's name?",
    choices: ['Priscyla', 'Rhea', 'Donna', 'Jane'],
    answer: 'Priscyla',
  },
  {
    question: "How long did this activity take me?",
    choices: ['1 hour', '2 hours', '15 hours', 'FOR EVER!'],
    answer: 'FOR EVER',
  },
  {
    question: "Who is the current President",
    choices: ['Donald Trump', 'George Washington', 'Joe Biden', 'Barack Obama'],
    answer: 'Joe Biden',
  }
]
//Empty divs//
function setCounterText() {
highscore.textContent = score
}
function getChoices() {
  if(questionIndex > 5){
    endofGame()
  }
  directions.innerHTML = ""
  question.innerHTML = ""
  answers.innerHTML = ""
  highscore.innerHTML = "Your Score:" + score


  //Question//
  var current = questionArray[questionIndex]
  directions.textContent = current.question
  
  current.choices.forEach(function (item, index) {
    var newButtonA = document.createElement("button");
    newButtonA.setAttribute("type", "button");
    newButtonA.textContent = item, index;
    question.appendChild(newButtonA);
    console.log(questionIndex);
  });
}
question.addEventListener("click", function (event) {
  var myVal = event.target.innerHTML
  var correct = questionArray[anwserIndex].answer
  if (myVal == correct) {
    score += 100;
  }else {
    score -= 100;
  }
  questionIndex++
  anwserIndex++
  getChoices();
  setCounterText()
 
  console.log(correct)
  console.log(myVal)
})
function endofGame(){
  directions.innerHTML = "";
  question.innerHTML = "";
  answers.innerHTML = "";
  highscore.innerHTML ="";
  clearInterval(timeInterval)
directions.textContent="All Done!";
question.textContent= "Your final score is" + score;
var input = document.createElement("input");
var submit = document.createElement("button");
submit.textContent= "Submit"
var enterInitals = document.createElement("span")
enterInitals.textContent = "Enter Initals:"
answers.appendChild(input);
answers.appendChild(submit);

}

// function endOfGame(){
//   directions.innerHTML = ""
//   question.innerHTML = ""
//   answers.innerHTML = ""
//   highscore.innerHTML = ""
// }



function countdown() {
  var timeLeft = 30;
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}
function runquiz() {
  countdown();
  getChoices();
  console.log("test");
}
startBtn.onclick = runquiz;

