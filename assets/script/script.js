const startBtn = document.getElementById('startbutton');
const timerEl = document.getElementById('timer');
const directions = document.querySelector('.Directions');
const answers = document.querySelector('.answers');
const question = document.querySelector ('.Question');
const highscore = document.querySelector(".Highscore");
var questionIndex = 0 
var choicesIndex = 0
var score = 0
var currentQuestion = [
  {
    question: "What is 2+2?",
    choices: ['2','23','4','3'],
    answer: '4', 
  },
  {
    question: "How old am I?",
    choices: ['3','36','35','56'],
    answer: '35', 
  }
]
//Empty divs//

function getChoices(){
  directions.innerHTML=""
  question.innerHTML=""
  answers.innerHTML=""
  highscore.innerHTML= "Your Score:" + score
  

  //Question//
  var current = currentQuestion[questionIndex]
  directions.textContent = current.question
  //Answer//
  var answerChoices = currentQuestion[choicesIndex]
  //For Each Loop
  current.choices.forEach(function(item, index){
  var newButton = document.createElement("button");
  newButton.className="multipleC";
  newButton.setAttribute("type","button");
  newButton.textContent= item,index;
  question.appendChild(newButton);
  console.log(item);
  });
}
  document.querySelector("body").addEventListener("click",function(event) {
//     //for (var i=0; i< currentQuestion.length; i ++){
//     var currentAnswer = currentQuestion[i].choices;
//     if (
//       currentAnswer === currentQuestion[i].answer){
//       score+=100;
//       }
//  // }
//   //get attribute of a value on the button//
    
    
      
      console.log(currentAnswer)
    //if (currentQuestion[0].answer
    // If
    // if(event.target.matches(".multipleC")){
    //   score +=100
    //   return score
//}   
//   //If users choice = the correct answer 

// 
  
})
function countdown() {
  var timeLeft = 30;
  var timeInterval = setInterval(function() {
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
}, 1000);}
function runquiz () {
         countdown ();
         getChoices();
console.log ("test");
}
startBtn.onclick = runquiz;

