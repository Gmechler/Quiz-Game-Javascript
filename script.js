var startBtn = document.querySelector("#start");
var startCard = document.querySelector("#startCard");
var quiz = document.querySelector("#quiz");
var questionDis = document.querySelector("#question");
var answerChoices = document.querySelector(".answer-choices");
var progressBar = document.querySelector("#progress");
var timer = document.querySelector("#timer");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startCard.style.display = "none";
  quiz.style.display = "block";
  // countRender()
  questionRender();
  // progressBar.style.display = "block";
}

// questions array//
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

// displays questions and  answers array//
function questionRender() {
  let q = questions[runningQuestionIndex];
  // console.log(q);
  for (var i = 0; i < q.choices.length; i++) {
    questionDis.textContent = q.question;
    var answBtn = document.createElement("BUTTON");
    answBtn.textContent = q.choices[i];
    answerChoices.append(answBtn);
  }

  //   var btn = answerChoices.createElement("BUTTON");
  //   btn.innerHTML = q.choices[i];
  //   document.body.appendChild(btn);
}

// function startTimer() {
//   if (running) {
//     return;
//   }

//   totalSeconds = parseInt(workMinutesInput.value, 10) * 60;
//   console.log(totalSeconds);
//   running = true;
//   // // Write code to start the timer here
//   interval = setInterval(function() {
//     secondsElapsed++;
//     displayTime(totalSeconds - secondsElapsed);
//   }, 1000);
// }

// function countRender() {

// }
