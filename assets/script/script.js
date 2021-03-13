const startBtn = document.getElementById('startbutton');
const timerEl = document.getElementById('timer');
const directions = document.querySelector('.Directions');
const answers = document.querySelector('.answers');
const question = document.querySelector ('.Question');
var questionIndex = 0 
var choicesIndex = 0
var score = 0
var currentQuestion = [
  {
    question: "What is 2+2?",
    choices: ['2','23','4','3'],
    answer: '2', 
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
 
  //Question//
  var current = currentQuestion[questionIndex]
  directions.textContent = current.question
 
  //Answer//
  var answerChoices = currentQuestion[choicesIndex]
  question.textContent = answerChoices.choices
  //For Each Loop
  current.choices.forEach(function(item, index){
 //Create new Button
  var newButton = document.createElement("button");
  newButton.setAttribute("type","button")
  answerChoices.textContent = index + "" +item
  newButton.textContent=index+1 + "- + item";
  document.answerChoices.appendChild(newButton)
}
  )}
//function answerChoiceA (answerTextInputA) { 
   

//function answerChoiceB (answerTextInputB) { 
  //var newButton = document.createElement('BUTTON')
 // newButton.innerHTML = answerTextInputB;
 // document.body.appendChild(newButton); 
//}
//function answerChoiceC (answerTextInputC) { 
 // var newButton = document.createElement('BUTTON')
 // newButton.innerHTML = answerTextInputC;
 // document.body.appendChild(newButton); 
//}
//function answerChoiceD (answerTextInputD) { 
 // var newButton = document.createElement('BUTTON')
 // newButton.innerHTML = answerTextInputD;
  //document.body.appendChild(newButton); 
//}

function questionClick (){

}

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
  //startquiz ();
  countdown ();
  getChoices();
  //var questionText = "What is your name?"
  //addQuestion();
  //answerChoiceA(curentQuestion[0].choice1);
  //answerChoiceB(curentQuestion[0].choice2);
  //answerChoiceC(curentQuestion[0].choice3);
  //answerChoiceD(curentQuestion[0].choice4);
  console.log ("test");
}
  startBtn.onclick = runquiz;

 //To Do//
 //Step one: Display questions and answers 
 //Step two: Add Event Listener to each button to go to next question and track score
 //Step three: Even Listener repeats step one with the next set up q/A
 //Step three 1/2: Track score 
 //Step four: Go to the score screen
